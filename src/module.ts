import { z } from "zod";
import { normaliseText } from "./duplicates.js";

/**
 * A module is a data file: rails, no questions. It declares the shape a
 * question set must have for one exam. The validator uses `id`,
 * `display_name`, `taxonomy`, `options`, `multi_select` and
 * `banned_option_text`; the remaining fields are carried for the app
 * (coverage dashboard, exam mode, module page) and validated for shape only.
 */
const percent = z.number().min(0).max(100);

/** One topic's weight: a percentage, or the min–max range the exam body publishes. */
export const weightSchema = z.union([percent, z.strictObject({ min: percent, max: percent })]);

export type Weight = z.infer<typeof weightSchema>;

/** A weight as a range: a plain number is a range of width zero. */
export function weightRange(weight: Weight): { min: number; max: number } {
  return typeof weight === "number" ? { min: weight, max: weight } : { min: weight.min, max: weight.max };
}

export const moduleConfigSchema = z.strictObject({
  /** Lowercase id used in the `exam` field of a domcq/1 file: `pmp`, `cfa-l1`. */
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/).min(1).max(40),
  /** Name used in error messages and the UI: "CFA Level I". */
  display_name: z.string().min(1).max(80),
  /** Exam body: "PMI", "CFA Institute". */
  body: z.string().min(1).max(120).optional(),
  /** Trademark disclaimer shown on the module page. */
  disclaimer: z.string().min(1).max(1000).optional(),
  /**
   * Topic → subtopics, named exactly as the exam body names them.
   * Absent or empty: topics are free text (the Generic module).
   * A topic with an empty subtopic list accepts any subtopic.
   */
  taxonomy: z.record(z.string().min(1).max(80), z.array(z.string().min(1).max(120))).optional(),
  /**
   * Official weight per topic, in percent: a single number (`40`) or the range
   * the exam body publishes (`{ "min": 5, "max": 8 }`). Keys must be taxonomy
   * topics. The range is carried exactly as published for the app's coverage
   * dashboard; the validator does not use weights.
   */
  weights: z.record(z.string(), weightSchema).optional(),
  /** Allowed number of options per question, inclusive. Within 2–6. */
  options: z.strictObject({
    min: z.number().int().min(2).max(6),
    max: z.number().int().min(2).max(6),
  }),
  /** Whether a question may have more than one correct answer. */
  multi_select: z.boolean(),
  /** Option texts rejected outright, compared case-insensitively: "all of the above". */
  banned_option_text: z.array(z.string().min(1).max(120)).optional(),
  /** Stem conventions the prompt should follow: "the project manager should FIRST". */
  stem_hints: z.array(z.string().min(1).max(200)).optional(),
  /** Real-exam item types this module does not cover: "drag-and-drop", "hotspot". */
  uncovered_item_types: z.array(z.string().min(1).max(120)).optional(),
  /** Exam-mode defaults so a mock feels like the real thing. */
  exam_mode: z
    .strictObject({
      questions: z.number().int().min(1).max(500),
      minutes: z.number().int().min(1).max(1440),
      sections: z.number().int().min(1).max(10).optional(),
      /**
       * One or two sentences on the real exam's format, shown next to the exam-mode timing
       * when `questions` in `minutes` is a pace the module derives rather than a length the
       * exam body prints: "The real NCLEX-RN is adaptive: 85 to 150 items in up to 5 hours."
       * Absent when the timing is the exam's own.
       */
      note: z.string().min(1).max(200).optional(),
    })
    .optional(),
  /** Name and version of the official outline this module was checked against. */
  verified_outline: z.string().min(1).max(200).optional(),
  /** ISO date the check was done. */
  verified_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  /** ISO date by which the module should be re-checked. */
  next_review: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  /** The module's generation prompt. Lives on domcq.com; optional here. */
  prompt_template: z.string().min(1).optional(),
});

export type ModuleConfig = z.infer<typeof moduleConfigSchema>;

/**
 * The Generic module: no taxonomy, 2–6 options, multi-select allowed, nothing
 * banned. Applied when a file has no `exam` field. Always available.
 */
export const generic: ModuleConfig = Object.freeze({
  id: "generic",
  display_name: "Generic",
  options: { min: 2, max: 6 },
  multi_select: true,
  banned_option_text: [],
}) as ModuleConfig;

/** A set of modules keyed by id, as passed to `validate()`. */
export type ModuleRegistry = Readonly<Record<string, ModuleConfig>>;

/** The registry the validator uses when none is given: Generic only. */
export const defaultModules: ModuleRegistry = Object.freeze({ generic });

/**
 * Parse and check a module config. Throws a ZodError on a malformed module;
 * module files are authored by DoMcq, not by students, so a bad one is a bug.
 */
export function parseModuleConfig(input: unknown): ModuleConfig {
  const module = moduleConfigSchema.parse(input);
  if (module.options.min > module.options.max) {
    throw new Error(`Module "${module.id}": options.min (${module.options.min}) exceeds options.max (${module.options.max}).`);
  }
  if (module.taxonomy) {
    const seen = new Map<string, string>();
    for (const topic of Object.keys(module.taxonomy)) {
      const key = normaliseText(topic);
      const clash = seen.get(key);
      if (clash !== undefined) throw new Error(`Module "${module.id}": taxonomy topics "${clash}" and "${topic}" are the same once case and spacing are ignored.`);
      seen.set(key, topic);
    }
  }
  if (module.weights) {
    const topics = new Set(Object.keys(module.taxonomy ?? {}));
    for (const [key, weight] of Object.entries(module.weights)) {
      if (!topics.has(key)) throw new Error(`Module "${module.id}": weight for "${key}" has no matching taxonomy topic.`);
      const { min, max } = weightRange(weight);
      if (min > max) throw new Error(`Module "${module.id}": weight range for "${key}" has min (${min}) above max (${max}).`);
    }
  }
  return module;
}
