/**
 * The grammar course. Lessons are prose with example sentences, written as text in
 * ./lessons (see parse.ts for the markup) and versioned with the app, like the JLPT decks.
 */

export interface Lesson {
  /** URL segment: /grammar-guide/{slug}. */
  slug: string;
  title: string;
  /** One or two sentences for search results and the course index. */
  description: string;
  /** The lesson text, in the markup parse.ts reads. */
  body: string;
  /** Ids of JLPT grammar points (src/lib/grammar/decks) worth drilling after this lesson. */
  points?: string[];
}

export interface Part {
  id: string;
  title: string;
  blurb: string;
  lessons: Lesson[];
}

/** One word-sized piece of an example sentence, with what it means in the sentence. */
export interface Chunk {
  jp: string;
  /** Kana reading of `jp`, only when it has kanji. */
  kana?: string;
  gloss?: string;
  /** The piece the lesson is about. */
  hl: boolean;
}

export type Node =
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "md"; text: string }
  | { t: "ex"; chunks: Chunk[]; en?: string; note?: string }
  | { t: "box"; kind: BoxKind; title: string; children: Node[] };

export type BoxKind = "note" | "key" | "warn" | "try";
