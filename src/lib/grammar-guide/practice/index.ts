import { EXTRA_PRACTICE } from "./extra";
import { EXTRA_PRACTICE_2 } from "./extra2";
import { EXTRA_PRACTICE_3 } from "./extra3";
import { EXTRA_PRACTICE_4 } from "./extra4";
import { part1Practice } from "./part1";
import { part2Practice } from "./part2";
import { part3Practice } from "./part3";
import { part4Practice } from "./part4";
import { part5Practice } from "./part5";
import { part6Practice } from "./part6";

/**
 * Longer reading passages, keyed by lesson slug. Each entry is lesson markup that starts
 * with a "## Longer sentences" heading and is spliced in before the lesson's Key points.
 */
const BASE: Record<string, string> = {
  ...part1Practice,
  ...part2Practice,
  ...part3Practice,
  ...part4Practice,
  ...part5Practice,
  ...part6Practice,
};

export const PRACTICE: Record<string, string> = Object.fromEntries(
  Object.entries(BASE).map(([slug, text]) => [slug, [text, EXTRA_PRACTICE[slug], EXTRA_PRACTICE_2[slug], EXTRA_PRACTICE_3[slug], EXTRA_PRACTICE_4[slug]].filter(Boolean).join("\n")]),
);
