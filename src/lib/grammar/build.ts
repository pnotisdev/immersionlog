import { conjugate, WORDS, type FormId, type Word, type WordType } from "@/lib/conjugation";
import { blankOf } from "./sentence";
import type { Conjugation, GrammarDeck, GrammarPoint, GrammarSentence, NearMiss } from "./types";

/**
 * Helpers for writing decks tersely. A deck file is a list of `point(...)` calls in
 * learning order; ids of sentences, order numbers and accepted answers are filled in
 * here so a deck can't get them wrong.
 */

/** A word for a conjugated blank: looked up in the conjugation drill's list, or given inline. */
export function word(kanji: string, kana?: string, type?: WordType): Word {
  const known = WORDS.find((w) => w.kanji === kanji && (!kana || w.kana === kana));
  if (known) return known;
  if (!kana || !type) throw new Error(`${kanji} isn't in the conjugation word list: give its reading and type`);
  return { kanji, kana, type, meaning: "", level: "N5" };
}

export interface ConjugationSpec {
  word: Word;
  form: FormId;
  head?: string;
  tail?: string;
  /** Defaults to the tail. */
  marker?: string;
}

export interface SentenceOptions {
  hint?: string;
  /** Extra accepted spellings beyond the marked text, its reading and any conjugated forms. */
  accept?: string[];
  /** [answer, nudge] pairs. */
  near?: [string, string][];
  conj?: ConjugationSpec;
}

type SentenceSpec = [japanese: string, reading: string, english: string, options?: SentenceOptions];

/** One sentence, as a tuple so a point's sentences read like a list. */
export function s(japanese: string, reading: string, english: string, options?: SentenceOptions): SentenceSpec {
  return [japanese, reading, english, options];
}

function conjugated(spec: ConjugationSpec): string[] {
  const head = spec.head ?? "";
  const tail = spec.tail ?? "";
  return conjugate(spec.word, spec.form).flatMap((a) => [`${head}${a.kanji}${tail}`, `${head}${a.kana}${tail}`]);
}

function buildSentence(pointId: string, index: number, [japanese, reading, english, o = {}]: SentenceSpec): GrammarSentence {
  const conjugation: Conjugation | undefined = o.conj
    ? { ...o.conj, marker: o.conj.marker ?? o.conj.tail ?? "" }
    : undefined;
  const acceptedAnswers = [
    ...new Set([blankOf(japanese), blankOf(reading), ...(o.conj ? conjugated(o.conj) : []), ...(o.accept ?? [])].filter(Boolean)),
  ];
  const nearMisses: NearMiss[] = (o.near ?? []).map(([answer, nudge]) => ({ answer, nudge }));
  return {
    id: `${pointId}-${index + 1}`,
    japanese,
    reading,
    english,
    ...(o.hint ? { hint: o.hint } : {}),
    acceptedAnswers,
    nearMisses,
    ...(conjugation ? { conjugation } : {}),
  };
}

export interface PointSpec {
  id: string;
  title: string;
  meaning: string;
  structure: string;
  explanation: string;
  register?: string;
  related?: string[];
  sentences: SentenceSpec[];
}

export type PointDraft = Omit<GrammarPoint, "deck" | "order">;

export function point(spec: PointSpec): PointDraft {
  return {
    id: spec.id,
    title: spec.title,
    meaning: spec.meaning,
    structure: spec.structure,
    explanation: spec.explanation.trim(),
    ...(spec.register ? { register: spec.register } : {}),
    related: spec.related ?? [],
    sentences: spec.sentences.map((sentence, i) => buildSentence(spec.id, i, sentence)),
  };
}

/** A deck: order numbers come from position, so reordering is moving a line. */
export function deck(meta: Omit<GrammarDeck, "points">, points: PointDraft[]): GrammarDeck {
  return { ...meta, points: points.map((p, i) => ({ ...p, deck: meta.id, order: i + 1 })) };
}
