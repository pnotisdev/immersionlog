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
  cut?: string;
  first?: boolean;
  /** Defaults to the tail. */
  marker?: string;
}

export interface SentenceOptions {
  hint?: string;
  /** Extra accepted spellings beyond the marked text, its reading and any conjugated forms. */
  accept?: string[];
  /**
   * [answer, nudge] pairs. The kana spelling learners type is worked out from the decks'
   * furigana (spellings.ts); give it as a third item when it can't be, as with counters
   * whose sound changes (六個, ろっこ).
   */
  near?: ([answer: string, nudge: string] | [answer: string, nudge: string, kana: string])[];
  conj?: ConjugationSpec;
}

type SentenceSpec = [japanese: string, reading: string, english: string, options?: SentenceOptions];

/** One sentence, as a tuple so a point's sentences read like a list. */
export function s(japanese: string, reading: string, english: string, options?: SentenceOptions): SentenceSpec {
  return [japanese, reading, english, options];
}

/** Every answer a conjugated blank accepts, kanji and kana. Shared with the deck test. */
export function conjugatedAnswers(spec: Omit<ConjugationSpec, "marker">): string[] {
  const head = spec.head ?? "";
  const tail = spec.tail ?? "";
  const cut = (s: string) => (spec.cut && s.endsWith(spec.cut) ? s.slice(0, -spec.cut.length) : s);
  const forms = conjugate(spec.word, spec.form);
  return (spec.first ? forms.slice(0, 1) : forms).flatMap((a) => [a.kanji, a.kana].map((f) => `${head}${cut(f)}${tail}`));
}

function buildSentence(pointId: string, index: number, [japanese, reading, english, o = {}]: SentenceSpec): GrammarSentence {
  const conjugation: Conjugation | undefined = o.conj
    ? { ...o.conj, marker: o.conj.marker ?? o.conj.tail ?? "" }
    : undefined;
  const acceptedAnswers = [
    ...new Set([blankOf(japanese), blankOf(reading), ...(o.conj ? conjugatedAnswers(o.conj) : []), ...(o.accept ?? [])].filter(Boolean)),
  ];
  const nearMisses: NearMiss[] = (o.near ?? []).map(([answer, nudge, kana]) => ({
    answer,
    nudge,
    ...(kana ? { spellings: [kana] } : {}),
  }));
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

export interface Stage {
  title: string;
  ids: string[];
}

/**
 * A deck in learning order, easiest first. Points are written in topical files (every
 * way to give a reason side by side), but learners meet them in stages ordered by
 * difficulty, so the order is its own list of ids. Every written point must be placed
 * exactly once: a typo, a duplicate or a forgotten point fails here, loudly. Order
 * numbers come from position, so reordering is moving an id.
 */
export function deck(meta: Omit<GrammarDeck, "points" | "sections">, written: PointDraft[][], stages: Stage[]): GrammarDeck {
  const all = written.flat();
  const byId = new Map(all.map((p) => [p.id, p]));
  const placed = stages.flatMap((s) => s.ids);
  const problems = [
    ...all.filter((p, i) => all.findIndex((q) => q.id === p.id) !== i).map((p) => `written twice: ${p.id}`),
    ...placed.filter((id) => !byId.has(id)).map((id) => `unknown: ${id}`),
    ...placed.filter((id, i) => placed.indexOf(id) !== i).map((id) => `placed twice: ${id}`),
    ...all.filter((p) => !placed.includes(p.id)).map((p) => `not placed: ${p.id}`),
  ];
  if (problems.length) throw new Error(`${meta.id} learning order: ${problems.join(", ")}`);
  const points = placed.map((id, i) => ({ ...byId.get(id)!, deck: meta.id, order: i + 1 }));
  return { ...meta, sections: stages.map((s) => ({ title: s.title, pointIds: s.ids })), points };
}

/** Stages that keep the written order, one per topical section. */
export function inWrittenOrder(sections: { title: string; points: PointDraft[] }[]): [PointDraft[][], Stage[]] {
  return [sections.map((s) => s.points), sections.map((s) => ({ title: s.title, ids: s.points.map((p) => p.id) }))];
}
