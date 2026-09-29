/** The free practice tools under /tools, in the order a beginner would meet them. */
export interface Tool {
  href: string;
  title: string;
  /** For tight spaces: nav lists, the guide sidebar. */
  short: string;
  description: string;
  /** A few characters that show what the tool drills. */
  sample: string;
}

export const TOOLS: Tool[] = [
  {
    href: "/tools/kana",
    title: "Hiragana and katakana quiz",
    short: "Kana quiz",
    description: "Name each kana as it comes up, one row at a time or all at once. Missed ones come back until they stick.",
    sample: "あ ア",
  },
  {
    href: "/tools/conjugation",
    title: "Conjugation practice",
    short: "Conjugation drill",
    description: "Verbs and adjectives in 26 forms, from 食べない to 食べさせられる. Type in romaji or kana and get the rule when you miss.",
    sample: "食べた",
  },
  {
    href: "/grammar/n5",
    title: "N5 to N2 grammar, point by point",
    short: "Grammar decks",
    description: "Every grammar point from N5 to N2 in learning order, with short explanations and example sentences. Sign in to review them on a spaced schedule.",
    sample: "〜たい",
  },
  {
    href: "/tools/reading-speed",
    title: "Reading speed test",
    short: "Reading speed test",
    description: "Read a short passage at your level and get your speed in characters an hour, and what that means for novels.",
    sample: "字/分",
  },
];
