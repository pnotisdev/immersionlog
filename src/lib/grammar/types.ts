import type { FormId, Word } from "@/lib/conjugation";

/**
 * Grammar content lives in code, like the conjugation drill's word list: it's written
 * and reviewed like prose, versioned with the app, and the database only ever holds a
 * user's progress against these ids. Adding a deck (N4, N3…) is a new data file
 * registered in src/lib/grammar/decks/index.ts.
 */

/** An answer that is real Japanese but not what the blank is testing, and what to say about it. */
export interface NearMiss {
  answer: string;
  /** Shown instead of marking the answer wrong: the learner gets another go. */
  nudge: string;
}

/**
 * For points that are a verb or adjective form (〜てください, 〜たい), the blank's answers
 * come from conjugation.ts instead of being listed by hand, so 開けてください, あけてください
 * and any everyday alternative the engine knows are all accepted.
 */
export interface Conjugation {
  word: Word;
  form: FormId;
  /** Fixed text inside the blank before the conjugated word. */
  head?: string;
  /** Fixed text inside the blank after it: ください in {開けてください}. */
  tail?: string;
  /**
   * What an answer ends with when it has the grammar right: an answer that ends with
   * this and starts with the right word, but isn't accepted, has a conjugation slip and
   * is treated as a near miss rather than a wrong answer.
   */
  marker: string;
}

export interface GrammarSentence {
  /** Stable: `${pointId}-${n}`. Append new sentences at the end so ids never shift. */
  id: string;
  /** The sentence with the tested part in braces: 窓を{開けてください}。 */
  japanese: string;
  /** The same sentence in kana with the same braces: まどを{あけてください}。 */
  reading: string;
  english: string;
  /** English, shown before answering: usually the word to use, never the grammar itself. */
  hint?: string;
  /** Every spelling that counts as right, kanji and kana. Always includes the marked text. */
  acceptedAnswers: string[];
  nearMisses: NearMiss[];
  conjugation?: Conjugation;
}

export interface GrammarPoint {
  /** Stable slug, used in URLs and stored in the database: n5-te-kudasai. */
  id: string;
  deck: string;
  /** 1-based position in the deck, the order a beginner meets things. */
  order: number;
  /** The pattern in Japanese: 〜てください. */
  title: string;
  /** A short English gloss. */
  meaning: string;
  /** How it's built: "Verb て-form + ください". */
  structure: string;
  /** Markdown, 80–200 words, for someone meeting the point for the first time. */
  explanation: string;
  /** Where it sits between casual and formal, when that matters. */
  register?: string;
  related: string[];
  sentences: GrammarSentence[];
}

export interface GrammarDeck {
  /** URL segment and id prefix: n5. Never "learn" or "review", which are app routes. */
  id: string;
  /** JLPT-style level label: N5. */
  level: string;
  title: string;
  description: string;
  /** Headings for the deck page, in order; together they list every point once. */
  sections: { title: string; pointIds: string[] }[];
  points: GrammarPoint[];
}
