import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validate, parseModuleConfig, generic, type ModuleRegistry } from "../src/index.js";

const root = resolve(import.meta.dirname, "..", "fixtures");
const read = (file: string) => readFileSync(resolve(root, file), "utf8");

interface Case {
  file: string;
  errors: string[];
  warnings?: string[];
  fenced?: boolean;
}
interface Manifest {
  modules: string[];
  cases: Case[];
}

const manifest = JSON.parse(read("manifest.json")) as Manifest;

const modules: ModuleRegistry = Object.fromEntries([
  ["generic", generic],
  ...manifest.modules.map((file) => {
    const module = parseModuleConfig(JSON.parse(read(file)));
    return [module.id, module] as const;
  }),
]);

const codes = (items: readonly { code: string }[]) => [...new Set(items.map((i) => i.code))].sort();

describe("fixtures", () => {
  for (const c of manifest.cases) {
    it(c.file, () => {
      const result = validate(read(c.file), { modules });
      expect(codes(result.errors)).toEqual([...c.errors].sort());
      expect(codes(result.warnings)).toEqual([...(c.warnings ?? [])].sort());
      expect(result.ok).toBe(c.errors.length === 0);
      if (c.fenced !== undefined) expect(result.fenced).toBe(c.fenced);
      if (!result.ok) {
        // Every error line is paste-ready: one sentence that names what to change.
        for (const e of result.errors) {
          expect(e.message.length).toBeGreaterThan(20);
          if (e.question !== undefined) expect(e.message.startsWith(`Question ${e.question}:`)).toBe(true);
        }
        expect(result.fixRequest).toContain("Errors:");
        for (const e of result.errors) expect(result.fixRequest).toContain(e.message);
      }
    });
  }
});

describe("fixture modules", () => {
  it("every module file parses and lists only taxonomy topics in weights", () => {
    for (const file of manifest.modules) {
      const module = parseModuleConfig(JSON.parse(read(file)));
      expect(module.id).toBe(file.replace(/^modules\//, "").replace(/\.json$/, ""));
    }
  });

  it("the NCLEX-RN module carries its exam-mode note: 85 in 170 minutes is a pace, not the exam's length", () => {
    const nclex = parseModuleConfig(JSON.parse(read("modules/nclex-rn.json")));
    expect(nclex.exam_mode).toEqual({
      questions: 85,
      minutes: 170,
      note: "The real NCLEX-RN is adaptive: 85 to 150 items in up to 5 hours.",
    });
  });
});
