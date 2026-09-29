import { normalizeInput } from "@/lib/grammar/check";
import { kunAnswers, onAnswers, type Kanji, type PromptKind } from "./readings";

/** A near miss gets another go instead of counting as wrong. `nudge` says what to fix. */
export type KanjiCheck = { result: "correct" } | { result: "wrong" } | { result: "nearMiss"; nudge: string };

function words(s: string): string {
  return s
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** "to eat", "a dog", "the sun" all count as "eat", "dog", "sun". */
function bare(s: string): string {
  return words(s).replace(/^(?:to|a|an|the) /, "");
}

function distance(a: string, b: string): number {
  const dp = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

export function checkMeaning(k: Pick<Kanji, "m">, answer: string): KanjiCheck {
  const a = bare(answer);
  if (!a) return { result: "wrong" };
  const accepted = k.m.map(bare).filter(Boolean);
  if (accepted.includes(a)) return { result: "correct" };
  // One slip in a longer word (cheif → chief) is a typo, not a wrong answer.
  if (a.length >= 5 && accepted.some((m) => m.length >= 5 && distance(a, m) === 1)) {
    return { result: "nearMiss", nudge: "Close: check the spelling." };
  }
  return { result: "wrong" };
}

/** Check a reading of one kind. Giving the other kind's reading is a near miss: right kanji, wrong reading type. */
export function checkReading(k: Pick<Kanji, "on" | "kun">, kind: "on" | "kun", answer: string): KanjiCheck {
  const a = normalizeInput(answer);
  if (!a) return { result: "wrong" };
  const [want, other] = kind === "on" ? [onAnswers(k), kunAnswers(k)] : [kunAnswers(k), onAnswers(k)];
  if (want.some((r) => normalizeInput(r) === a)) return { result: "correct" };
  if (other.some((r) => normalizeInput(r) === a)) {
    return { result: "nearMiss", nudge: kind === "on" ? "That's a kun'yomi. Give an on'yomi." : "That's an on'yomi. Give a kun'yomi." };
  }
  return { result: "wrong" };
}

export function checkPrompt(k: Kanji, kind: PromptKind, answer: string): KanjiCheck {
  return kind === "meaning" ? checkMeaning(k, answer) : checkReading(k, kind, answer);
}

/** Every prompt the kanji asks, all correct: the only way a review counts as right. */
export function gradeAll(k: Kanji, answers: Partial<Record<PromptKind, string>>, kinds: PromptKind[]): { correct: boolean; each: Record<string, boolean> } {
  const each: Record<string, boolean> = {};
  for (const kind of kinds) each[kind] = checkPrompt(k, kind, answers[kind] ?? "").result === "correct";
  return { correct: kinds.every((kind) => each[kind]), each };
}
