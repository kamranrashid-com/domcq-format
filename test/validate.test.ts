import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  validate,
  fingerprint,
  canonicalKey,
  sha256Hex,
  stripFence,
  trimStrings,
  fixRequest,
  catalogue,
  messages,
  LIMITS,
  generic,
  domcqFileSchema,
  parseModuleConfig,
  weightRange,
  type ModuleConfig,
} from "../src/index.js";

const question = (over: Record<string, unknown> = {}) => ({
  stem: "Which planet in the Solar System has the most known moons?",
  options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  answer: "B",
  explanation: "Saturn has the largest number of confirmed moons.",
  topic: "Astronomy",
  ...over,
});

const file = (questions: unknown[], over: Record<string, unknown> = {}) =>
  JSON.stringify({ format: "domcq/1", set: "Test", ...over, questions });

const codes = (items: readonly { code: string }[]) => items.map((i) => i.code);

describe("validate()", () => {
  it("accepts a minimal file and returns trimmed data, the module and fingerprints", () => {
    const r = validate(file([question({ stem: "  Which planet in the Solar System has the most known moons?  " })]));
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.file.questions[0]?.stem).toBe("Which planet in the Solar System has the most known moons?");
    expect(r.module.id).toBe("generic");
    expect(r.fingerprints).toHaveLength(1);
    expect(r.fingerprints[0]).toMatch(/^[0-9a-f]{64}$/);
    expect(r.warnings).toEqual([]);
    expect(r.fenced).toBe(false);
  });

  it("accepts an already-parsed object as well as text", () => {
    const r = validate(JSON.parse(file([question()])));
    expect(r.ok).toBe(true);
  });

  it("accepts exactly 500 questions and rejects 501", () => {
    const many = (n: number) => Array.from({ length: n }, (_, i) => question({ stem: `Question number ${i + 1}: which option is correct here?` }));
    expect(validate(file(many(500))).ok).toBe(true);
    const r = validate(file(many(501)));
    expect(r.ok).toBe(false);
    expect(codes(r.errors)).toEqual(["E007"]);
  });

  it("reports every error in one pass, file-level first, then by question", () => {
    const r = validate(
      file(
        [question({ answer: "E" }), question({ stem: "Short" }), question({ options: ["Jupiter", "Saturn"], answer: "AB" })],
        { set: "", bogus: 1 },
      ),
    );
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.errors.map((e) => [e.code, e.question])).toEqual([
      ["E005", undefined],
      ["E006", undefined],
      ["E108", 1],
      ["E103", 2],
      ["E109", 3],
    ]);
  });

  it("names the module in module-rule messages", () => {
    const strict: ModuleConfig = {
      id: "strict",
      display_name: "Strict Exam",
      options: { min: 3, max: 3 },
      multi_select: false,
      taxonomy: { "Ethical and Professional Standards": [], "Economics": [] },
    };
    const r = validate(file([question({ answer: "BD", topic: "Derivatives Markets" })], { exam: "strict" }), { modules: { generic, strict } });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.errors.map((e) => e.message)).toEqual([
      "Question 1: has 4 options but Strict Exam questions must have exactly 3.",
      'Question 1: `answer` is "BD" but Strict Exam questions have exactly one correct answer. Rewrite the question so that one option is correct.',
      'Question 1: `topic` "Derivatives Markets" is not in the Strict Exam taxonomy. Valid topics: "Ethical and Professional Standards", "Economics".',
    ]);
  });

  it("matches taxonomy topics case-insensitively and keeps the student's text", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 2, max: 6 }, multi_select: true, taxonomy: { Astronomy: ["Moons"] } };
    const r = validate(file([question({ topic: "ASTRONOMY", subtopic: "moons" })], { exam: "m" }), { modules: { generic, m } });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.file.questions[0]?.topic).toBe("ASTRONOMY");
    expect(r.warnings).toEqual([]);
  });

  it("warns, not errors, on a subtopic outside the taxonomy", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 2, max: 6 }, multi_select: true, taxonomy: { Astronomy: ["Moons"] } };
    const r = validate(file([question({ subtopic: "Rings" })], { exam: "m" }), { modules: { generic, m } });
    expect(r.ok).toBe(true);
    expect(codes(r.warnings)).toEqual(["W201"]);
  });

  it("treats a module without a taxonomy as free-text topics", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 4, max: 4 }, multi_select: false };
    expect(validate(file([question({ topic: "Anything at all" })], { exam: "m" }), { modules: { generic, m } }).ok).toBe(true);
  });

  it("bans option text regardless of case and trailing punctuation", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 2, max: 6 }, multi_select: true, banned_option_text: ["all of the above"] };
    const r = validate(file([question({ options: ["Jupiter", "Saturn", "ALL of the above!"] })], { exam: "m" }), { modules: { generic, m } });
    expect(codes(r.errors)).toEqual(["E204"]);
    expect(r.errors[0]?.field).toBe("options[2]");
  });

  it("warns about duplicates of existing questions via a set or a predicate", () => {
    const fp = fingerprint(question());
    const withSet = validate(file([question()]), { existingFingerprints: new Set([fp]) });
    expect(withSet.ok).toBe(true);
    expect(codes(withSet.warnings)).toEqual(["W001"]);
    const withFn = validate(file([question()]), { existingFingerprints: (x) => x === fp });
    expect(codes(withFn.warnings)).toEqual(["W001"]);
  });

  it("still applies module and cross-field rules to the valid fields of a broken question", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 3, max: 3 }, multi_select: false };
    const r = validate(file([question({ stem: "Short", answer: "BD" })], { exam: "m" }), { modules: { generic, m } });
    expect(codes(r.errors)).toEqual(["E103", "E201", "E202"]);
    // ...but not to the field that failed: a non-string `options` yields E104 alone, no E201/E108.
    const r2 = validate(file([question({ options: "Saturn", answer: "E" })], { exam: "m" }), { modules: { generic, m } });
    expect(codes(r2.errors)).toEqual(["E104"]);
  });

  it("accepts exam \"generic\" explicitly even when the registry omits it", () => {
    const m: ModuleConfig = { id: "m", display_name: "M", options: { min: 2, max: 6 }, multi_select: true };
    const r = validate(file([question()], { exam: "generic" }), { modules: { m } });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.module.id).toBe("generic");
  });

  it("reports one error per field even when Zod raises several issues on it", () => {
    const r = validate(file([question()], { exam: "" }));
    expect(codes(r.errors)).toEqual(["E008"]);
  });

  it("sorts file-level errors before a fatal stop", () => {
    const r = validate(JSON.stringify({ format: "domcq/1", set: "x", questions: {}, foo: 1 }));
    expect(codes(r.errors)).toEqual(["E005", "E007"]);
  });

  it("keeps the JSON parser's message on one line", () => {
    const r = validate("{\n  \"format\": \"domcq/1\",\n  \"set\": \"x\",\n  \"questions\": [],\n}");
    expect(codes(r.errors)).toEqual(["E002"]);
    expect(r.errors[0]?.message).not.toContain("\n");
  });

  it("treats a __proto__ key as an ordinary unknown field", () => {
    const r = validate('{"format":"domcq/1","set":"x","__proto__":{"polluted":true},"questions":[]}');
    expect(codes(r.errors)).toEqual(["E005", "E007"]);
    expect(r.errors[0]?.message).toContain("`__proto__`");
    expect(({} as Record<string, unknown>)["polluted"]).toBeUndefined();
  });

  it("counts lengths in Unicode code points, in checks and in messages alike", () => {
    const r = validate(file([question({ stem: "😀😀😀😀😀😀😀😀😀" })]));
    expect(codes(r.errors)).toEqual(["E103"]);
    expect(r.errors[0]?.message).toContain("a string of 9 characters");
    expect(validate(file([question({ stem: "😀😀😀😀😀😀😀😀😀😀" })])).ok).toBe(true);
  });

  it("keeps validating questions when the envelope has non-fatal errors", () => {
    const r = validate(file([question({ answer: "Z" })], { format: "domcq/9" }));
    expect(codes(r.errors)).toEqual(["E004", "E107"]);
  });

  it("stops at the questions array when it is not an array", () => {
    const r = validate(JSON.stringify({ format: "domcq/1", set: "x", questions: "none" }));
    expect(codes(r.errors)).toEqual(["E007"]);
  });

  it("flags an unknown exam and lists the known ones", () => {
    const r = validate(file([question()], { exam: "cfa-l9" }));
    expect(codes(r.errors)).toEqual(["E009"]);
    expect(r.errors[0]?.message).toContain('"generic"');
  });

  it("reports rationale keys out of range and duplicate ids with the earlier question number, in one pass", () => {
    const r = validate(file([question({ id: "a" }), question({ id: "a", stem: "A different stem of adequate length?", rationales: { E: "no such option" } })]));
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.errors.map((e) => [e.code, e.question])).toEqual([
      ["E116", 2],
      ["E119", 2],
    ]);
    expect(r.errors[1]?.message).toBe(
      'Question 2: `id` "a" is the same as question 1\'s. Ids must be unique within a file; they are set by an exporter, so remove both if you wrote them yourself.',
    );
  });

  it("the Zod file schema agrees with validate() on a valid file", () => {
    const r = validate(file([question({ rationales: { A: "Fewer moons.", C: "Fewer moons." }, difficulty: "easy" })]));
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(domcqFileSchema.safeParse(r.file).success).toBe(true);
  });
});

describe("parsing", () => {
  it("strips one fence with or without a language tag, and a BOM", () => {
    expect(stripFence("```json\n{}\n```")).toEqual({ body: "{}", fenced: true });
    expect(stripFence("```\n{}\n```\n")).toEqual({ body: "{}", fenced: true });
    expect(stripFence("﻿{}")).toEqual({ body: "{}", fenced: false });
    expect(stripFence("Sure!\n```json\n{}\n```")).toEqual({ body: "Sure!\n```json\n{}\n```", fenced: false });
  });

  it("trims strings everywhere, keys untouched", () => {
    expect(trimStrings({ " a ": [" b ", { c: " d " }], n: 1 })).toEqual({ " a ": ["b", { c: "d" }], n: 1 });
  });

  it("tolerates nothing else: prose around the JSON is an error", () => {
    const r = validate("Here you go:\n" + file([question()]));
    expect(codes(r.errors)).toEqual(["E002"]);
  });
});

describe("fingerprints", () => {
  it("sha256 matches the known test vectors", () => {
    expect(sha256Hex("")).toBe("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    expect(sha256Hex("abc")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    expect(sha256Hex("The quick brown fox jumps over the lazy dog")).toBe("d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592");
    // Multi-block input (> 55 bytes of padding boundary) and non-ASCII.
    expect(sha256Hex("a".repeat(200))).toBe("c2a908d98f5df987ade41b5fce213067efbcc21ef2240212a41e54b5e7c28ae5");
    expect(sha256Hex("héllo wörld")).toBe("a1003f7d04a4115711d0b48a2eaf1359ce565d2d2a6fd65098dfcffadeeef59f");
  });

  it("ignores option order, case and spacing", () => {
    const a = { stem: "Which  planet has the MOST moons?", options: ["Jupiter", "Saturn"] };
    const b = { stem: "which planet has the most moons?", options: ["saturn ", "jupiter"] };
    expect(canonicalKey(a)).toBe(canonicalKey(b));
    expect(fingerprint(a)).toBe(fingerprint(b));
    expect(fingerprint({ stem: a.stem, options: ["Jupiter", "Mars"] })).not.toBe(fingerprint(a));
  });
});

describe("catalogue", () => {
  it("has a description and a message builder for every code", () => {
    for (const code of Object.keys(catalogue)) {
      expect(messages).toHaveProperty(code);
    }
    expect(Object.keys(messages).sort()).toEqual(Object.keys(catalogue).sort());
  });

  it("the fix request lists every error and asks for the complete file back", () => {
    const text = fixRequest([
      { code: "E103", question: 2, field: "stem", message: "Question 2: `stem` is a string of 5 characters but must be a string of 10–2000 characters." },
    ]);
    expect(text).toContain("1. Question 2:");
    expect(text).toContain("complete corrected file");
    expect(text).toContain("https://domcq.com/schema/v1");
  });

  it("the SPEC.md error table matches the catalogue word for word", () => {
    const spec = readFileSync(resolve(import.meta.dirname, "..", "SPEC.md"), "utf8").split("\n");
    for (const [code, text] of Object.entries(catalogue)) {
      const line = spec.find((l) => l.startsWith(`| ${code} |`));
      const cell = line?.split("|")[2]?.trim().replace(/^\*\(warning\)\* /, "");
      expect(cell, code).toBe(text);
    }
  });

  it("limits are the frozen v1 numbers", () => {
    expect(LIMITS.questionsPerFile.max).toBe(500);
    expect(LIMITS.options).toEqual({ min: 2, max: 6 });
    expect(LIMITS.stem).toEqual({ min: 10, max: 2000 });
  });
});

describe("module weights", () => {
  const base = { id: "w", display_name: "Weights", taxonomy: { A: [], B: [] }, options: { min: 4, max: 4 }, multi_select: false };

  it("accepts a number or a min–max range and reads both as a range", () => {
    const m = parseModuleConfig({ ...base, weights: { A: 40, B: { min: 5, max: 8 } } });
    expect(weightRange(m.weights!.A!)).toEqual({ min: 40, max: 40 });
    expect(weightRange(m.weights!.B!)).toEqual({ min: 5, max: 8 });
  });

  it("rejects a range with min above max, a value over 100, and a weight for an unknown topic", () => {
    expect(() => parseModuleConfig({ ...base, weights: { A: { min: 9, max: 8 } } })).toThrow(/min \(9\) above max \(8\)/);
    expect(() => parseModuleConfig({ ...base, weights: { A: 101 } })).toThrow();
    expect(() => parseModuleConfig({ ...base, weights: { C: 10 } })).toThrow(/no matching taxonomy topic/);
  });
});

describe("module exam_mode.note", () => {
  const base = { id: "n", display_name: "Note", options: { min: 4, max: 4 }, multi_select: false };
  const timing = { questions: 85, minutes: 170 };

  it("is optional, and carried exactly as written when present", () => {
    expect(parseModuleConfig({ ...base, exam_mode: timing }).exam_mode).toEqual(timing);
    const note = "The real exam is adaptive: 85 to 150 items in up to 5 hours.";
    expect(parseModuleConfig({ ...base, exam_mode: { ...timing, sections: 2, note } }).exam_mode).toEqual({ ...timing, sections: 2, note });
    expect(parseModuleConfig({ ...base, exam_mode: { ...timing, note: "x".repeat(200) } }).exam_mode?.note).toHaveLength(200);
  });

  it("rejects an empty note, one over 200 characters, a non-string, and a note without exam-mode timing", () => {
    expect(() => parseModuleConfig({ ...base, exam_mode: { ...timing, note: "" } })).toThrow();
    expect(() => parseModuleConfig({ ...base, exam_mode: { ...timing, note: "x".repeat(201) } })).toThrow();
    expect(() => parseModuleConfig({ ...base, exam_mode: { ...timing, note: 5 } })).toThrow();
    expect(() => parseModuleConfig({ ...base, exam_mode: { ...timing, note: null } })).toThrow();
    expect(() => parseModuleConfig({ ...base, exam_mode: { note: "Timing is required with a note." } })).toThrow();
    // A note sits inside exam_mode; at the top level it is an unknown field.
    expect(() => parseModuleConfig({ ...base, exam_mode: timing, note: "Not here." })).toThrow();
  });
});
