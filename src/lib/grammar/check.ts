import { conjugate, formById, FORMS, appliesTo, type FormId } from "@/lib/conjugation";
import { katakanaToHiragana, toHiragana } from "@/lib/romaji";
import { alignReading, blankOf, unmark } from "./sentence";
import type { Conjugation, GrammarSentence } from "./types";

/**
 * Checking a typed answer against a sentence's blank. Runs in the browser for instant
 * feedback and again in submitReview, which is the one that counts.
 *
 * Three outcomes. A near miss is an answer that shows the learner knows something
 * relevant (a real alternative that isn't the point being tested, the right pattern with
 * a conjugation slip, は typed as わ) and gets another go rather than a failed review.
 */
export type CheckResult = { result: "correct" } | { result: "wrong" } | { result: "nearMiss"; nudge: string };

const STRIP = /[\s　。、，．,.!！?？「」『』（）()・…‥〜~：:；;"“”‘’]/g;

/**
 * What answers are compared as: NFKC (full-width Latin and half-width kana folded to
 * their usual forms), romaji turned into kana, punctuation and spaces gone, katakana
 * read as hiragana. Kanji pass through untouched.
 */
export function normalizeInput(s: string): string {
  const folded = s.normalize("NFKC").trim();
  // Romaji first, so "n'" and a trailing n are read before the apostrophe is stripped.
  return katakanaToHiragana(toHiragana(folded).replace(STRIP, ""));
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * The marked answer, but with each kanji run allowed in kanji or in kana, so a learner
 * whose IME gives いっしょに行きましょう isn't failed for not writing 一緒に.
 */
function blankPattern(sentence: GrammarSentence): RegExp | null {
  const tokens = alignReading(sentence.japanese, sentence.reading)?.filter((t) => t.blank);
  if (!tokens?.length) return null;
  const body = tokens
    .map((t) => {
      const text = escapeRegExp(normalizeInput(t.text));
      return t.ruby ? `(?:${text}|${escapeRegExp(normalizeInput(t.ruby))})` : text;
    })
    .join("");
  return new RegExp(`^${body}$`, "u");
}

/** Every normalised accepted answer. */
export function acceptedSet(sentence: GrammarSentence): Set<string> {
  return new Set(sentence.acceptedAnswers.map(normalizeInput));
}

// は, を and へ as particles are said wa, o and e. Typing what you hear is a spelling slip, not a grammar one.
const SPOKEN: Record<string, string> = { は: "わ", を: "お", へ: "え" };

/** The answer with each combination of は/を/へ written as it's pronounced. */
function spokenVariants(answer: string): string[] {
  const positions = [...answer].flatMap((ch, i) => (SPOKEN[ch] ? [i] : []));
  if (positions.length === 0 || positions.length > 4) return [];
  const chars = [...answer];
  const out: string[] = [];
  for (let mask = 1; mask < 1 << positions.length; mask++) {
    const copy = [...chars];
    positions.forEach((p, bit) => {
      if (mask & (1 << bit)) copy[p] = SPOKEN[copy[p]];
    });
    out.push(copy.join(""));
  }
  return out;
}

const PARTICLE_SPELLING =
  "Right particle, spelled as it sounds. As particles, は, を and へ are pronounced wa, o and e but keep their old spelling: type ha, wo and he.";

/** Plain and polite versions of the same form: using one for the other is a register slip. */
const REGISTER_TWIN: Partial<Record<FormId, FormId>> = {
  negative: "polite-negative",
  past: "polite-past",
  "past-negative": "polite-past-negative",
  progressive: "polite-progressive",
  volitional: "polite-volitional",
  "polite-negative": "negative",
  "polite-past": "past",
  "polite-past-negative": "past-negative",
  "polite-progressive": "progressive",
  "polite-volitional": "volitional",
};

function commonPrefix(words: string[]): string {
  let prefix = words[0] ?? "";
  for (const w of words) while (!w.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}

/**
 * What every form of the word starts with, in kanji and in kana: 開け/あけ for 開ける,
 * 書/か for 書く. When nothing is shared (する, 来る in kana), the first character.
 */
function stems(c: Conjugation): string[] {
  const forms = FORMS.filter((f) => appliesTo(f, c.word)).flatMap((f) => conjugate(c.word, f.id));
  return (["kanji", "kana"] as const).map((k) => {
    const all = [c.word[k], ...forms.map((a) => a[k])].map(normalizeInput);
    return commonPrefix(all) || [...all[0]][0];
  });
}

function conjugationNearMiss(sentence: GrammarSentence, n: string): string | null {
  const c = sentence.conjugation;
  if (!c) return null;
  const head = normalizeInput(c.head ?? "");
  const tail = normalizeInput(c.tail ?? "");
  const wrap = (s: string) => normalizeInput(s);
  const dictionary = c.word.kanji;

  // The same word in its other register: 食べている where the sentence is polite.
  const twin = REGISTER_TWIN[c.form];
  if (twin) {
    const forms = conjugate(c.word, twin).flatMap((a) => [a.kanji, a.kana].map(wrap));
    if (forms.some((f) => n === `${head}${f}${tail}` || n === `${head}${f}`)) {
      return `Right form of ${dictionary}, wrong politeness: match the rest of the sentence (${formById(twin).label.toLowerCase()} → ${formById(c.form).label.toLowerCase()}).`;
    }
  }

  // The pattern is there but the word in front of it is conjugated wrongly: 書きてください.
  const marker = normalizeInput(c.marker);
  const starts = stems(c).map((s) => `${head}${s}`);
  if (marker && n.endsWith(marker) && starts.some((s) => n.startsWith(s))) {
    const form = FORMS.find((f) => f.id === c.form && appliesTo(f, c.word));
    return `You've got the pattern. Check how ${dictionary} conjugates${form ? ` (${form.label.toLowerCase()})` : ""}.`;
  }
  return null;
}

/** Check a typed answer against a sentence's blank. */
export function checkAnswer(sentence: GrammarSentence, input: string): CheckResult {
  const n = normalizeInput(input);
  if (!n) return { result: "wrong" };

  const accepted = acceptedSet(sentence);
  if (accepted.has(n) || blankPattern(sentence)?.test(n)) return { result: "correct" };

  for (const miss of sentence.nearMisses) {
    if (normalizeInput(miss.answer) === n) return { result: "nearMiss", nudge: miss.nudge };
  }

  if ([...accepted].some((a) => spokenVariants(a).includes(n))) return { result: "nearMiss", nudge: PARTICLE_SPELLING };

  const conj = conjugationNearMiss(sentence, n);
  if (conj) return { result: "nearMiss", nudge: conj };

  // The whole sentence, or the blank plus some of what's around it.
  const whole = normalizeInput(unmark(sentence.japanese));
  const wholeKana = normalizeInput(unmark(sentence.reading));
  if (n.length > 0 && [...accepted].some((a) => n.includes(a)) && (whole.includes(n) || wholeKana.includes(n))) {
    return { result: "nearMiss", nudge: "Only the part that goes in the blank, please." };
  }

  return { result: "wrong" };
}

/** The answer to show after a miss: the marked text, as the sentence has it. */
export function displayAnswer(sentence: GrammarSentence): string {
  return blankOf(sentence.japanese);
}
