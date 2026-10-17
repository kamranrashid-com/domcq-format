# domcq-format

The **`domcq/1`** question-set format: a JSON shape for multiple-choice questions that a student writes with their own AI (ChatGPT, Claude, Gemini, any other) and imports into a practice system. This repository holds the [specification](SPEC.md), the [JSON Schema](schema/v1.json), the reference validator (TypeScript, [Zod](https://zod.dev)), the error-message catalogue and test fixtures.

It is the format behind [DoMcq](https://domcq.com), the bring-your-own-questions exam practice system. DoMcq runs no AI: it never generates, fixes or explains questions. The student's AI writes the questions in `domcq/1`; this validator says exactly what is wrong when they don't fit; the student's AI fixes them. Everything here is MIT-licensed so that any other tool can read or write the same files.

## The format in one look

```json
{
  "format": "domcq/1",
  "exam": "pmp",
  "set": "People domain – Conflict & team leadership",
  "questions": [
    {
      "stem": "Two senior developers disagree publicly about the architecture in a sprint review. The project manager should FIRST:",
      "options": [
        "Escalate to the sponsor for a decision.",
        "Meet both developers privately to understand the underlying concerns.",
        "Choose the architecture proposed by the more experienced developer.",
        "Add the item to the risk register and continue the review."
      ],
      "answer": "B",
      "explanation": "Conflict is addressed early, directly and collaboratively.",
      "topic": "People",
      "subtopic": "Manage conflict",
      "difficulty": "medium"
    }
  ]
}
```

- `answer` is one or more letters: `"B"`, or `"BD"` for a select-two item.
- `exam` names a **module** (`pmp`, `cfa-l1`, …) whose rules then apply: option count, whether multi-select is allowed, the topic taxonomy, banned option text. Leave it out and the Generic module applies: 2–6 options, any topic.
- Optional per question: `rationales` (why each option is right or wrong, keyed by letter), `source`, `id` (set by an exporter).
- Up to 500 questions per file. Unknown fields are errors. One surrounding ```` ```json ```` fence is allowed because every AI adds one; nothing else is.

Full rules: [SPEC.md](SPEC.md).

## Using the validator

```sh
npm install github:kamranrashid-com/domcq-format   # builds dist/ on install via the prepare script
```

```ts
import { validate, parseModuleConfig, generic } from "domcq-format";

const modules = { generic, pmp: parseModuleConfig(pmpModuleJson) };
const result = validate(pastedText, { modules });

if (result.ok) {
  result.file;          // the parsed, trimmed domcq/1 file (typed as DomcqFile)
  result.module;        // the module it was validated against
  result.fingerprints;  // one SHA-256 per question, for duplicate detection
  result.warnings;      // W001 duplicate of an existing question, W201 subtopic not in taxonomy
} else {
  result.errors;        // [{ code: "E202", question: 7, field: "answer", message: "Question 7: `answer` is \"BD\" but ..." }]
  result.fixRequest;    // a block the student pastes to their AI: every error, "return the complete corrected JSON"
}
```

`validate()` takes the raw pasted text (or an already-parsed object), runs in the browser or in Node, needs no network and is deterministic: same input, same result. Pass `existingFingerprints` (a `Set` or a predicate) to get W001 warnings for questions the student already has.

Other exports: `domcqFileSchema` and `questionSchema` (the Zod schemas), `moduleConfigSchema`, `fingerprint()` and `canonicalKey()`, `fixRequest()`, `catalogue` (one line per error code), `LIMITS`.

### Error messages

Every error is one sentence, numbered by question, written for the student's AI rather than for the student:

```
Question 7: `answer` is "BD" but CFA Level I questions have exactly one correct answer. Rewrite the question so that one option is correct.
Question 12: has 4 options but CFA Level I questions must have exactly 3.
Question 15: `topic` "Derivatives Markets" is not in the CFA Level I taxonomy. Valid topics: "Ethical and Professional Standards", ...
```

All errors come back in one pass, so one round trip fixes everything. The **fix request** wraps them:

```
The DoMcq validator (https://domcq.com) rejected the domcq/1 question file you produced. Please fix all 3 errors listed below and return the complete corrected file as a single JSON object inside one ```json code block, with no commentary before or after it.

Rules:
- Keep every question that is not mentioned exactly as it is, in the same order.
- Do not add any field that is not part of the domcq/1 format.
- The format is described at https://domcq.com/schema/v1.

Errors:
1. Question 7: `answer` is "BD" but ...
2. ...
```

The full code list is in [SPEC.md §7](SPEC.md#7-errors).

## Modules

A module is a data file: the rails for one exam, no questions. See [fixtures/modules/example.json](fixtures/modules/example.json) for the shape. `weights` holds each topic's official share in percent, as a number (`40`) or as the range the exam body publishes (`{ "min": 5, "max": 8 }`, see [fixtures/modules/example-multi.json](fixtures/modules/example-multi.json)); `weightRange()` reads either as a `{ min, max }` pair. Weights are for a practice system's coverage dashboard; the validator does not use them. `exam_mode` is the exam's timing for a practice system's exam mode (`questions` in `minutes`, optional `sections`); when that timing is a pace the module derives rather than a length the exam body prints, the optional `exam_mode.note` (at most 200 characters) says what the real exam is, as [fixtures/modules/nclex-rn.json](fixtures/modules/nclex-rn.json) does for the adaptive NCLEX-RN. The validator does not use `exam_mode`. DoMcq's real modules (PMP, MBE, CFA Level I and others) live in the DoMcq app and are verified against each exam body's official outline; the fictional "Example Exam" here exists only to exercise the rules.

```json
{
  "id": "example",
  "display_name": "Example Exam",
  "taxonomy": { "Planning": ["Scope", "Schedule", "Budget"], "Execution": ["Team leadership"], "Closing": [] },
  "options": { "min": 4, "max": 4 },
  "multi_select": false,
  "banned_option_text": ["all of the above", "none of the above"]
}
```

## JSON Schema

[`schema/v1.json`](schema/v1.json) is generated from the Zod schema (`npm run schema`) and served at `https://domcq.com/schema/v1`. It carries the structural rules and describes a file *after* the validator's trimming step (SPEC.md §5.4), so a bare schema checker is slightly stricter about surrounding whitespace than `validate()`. The rules a schema checker cannot express at all (answer letters within range, unique options, module rules) are listed in [SPEC.md §3–4](SPEC.md#3-rules-the-schema-cannot-express) and enforced by the validator.

## Fixtures

[`fixtures/manifest.json`](fixtures/manifest.json) lists every sample file with the codes the validator must report for it: valid files (minimal, every optional field, code-fenced, per-module, exported), one invalid file per error code, and warning cases. The test suite runs them all; any other implementation of `domcq/1` can run them too.

## Development

```sh
npm install
npm test            # vitest
npm run typecheck
npm run schema      # regenerate schema/v1.json
npm run check       # all of the above, and fails if the schema file is stale
npm run build       # dist/
```

Node 20 or later. Version 1 is frozen: a change to the format is `domcq/2`, a new schema and a new validator alongside this one.

## Licence

MIT. See [LICENSE](LICENSE).
