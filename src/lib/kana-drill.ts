import { DAKUTEN, GOJUON, type KanaRow } from "./kana";

/**
 * The deck for the kana quiz on /tools/kana: every kana in the guide's charts plus all
 * 33 yōon, grouped by chart row so the quiz can drill one row at a time. Answers are
 * the romaji someone might reasonably type; the first one is the one shown.
 */
export type Script = "hiragana" | "katakana";

export interface KanaGroup {
  id: string;
  /** The row's first hiragana, e.g. か; what the row picker shows. */
  label: string;
  set: "basic" | "dakuten" | "yoon";
  cards: { hiragana: string; katakana: string; answers: string[] }[];
}

/** Other spellings accepted for a Hepburn romaji (Kunrei and IME habits). */
const ALTERNATIVES: Record<string, string[]> = {
  shi: ["si"],
  chi: ["ti"],
  tsu: ["tu"],
  fu: ["hu"],
  ji: ["zi"],
  n: ["nn"],
  sha: ["sya"],
  shu: ["syu"],
  sho: ["syo"],
  cha: ["tya", "cya"],
  chu: ["tyu", "cyu"],
  cho: ["tyo", "cyo"],
  ja: ["jya", "zya"],
  ju: ["jyu", "zyu"],
  jo: ["jyo", "zyo"],
};

function answersFor(hiragana: string, romaji: string): string[] {
  // The kana-specific cases, where the chart's romaji is shared with another kana.
  if (hiragana === "を") return ["o", "wo"];
  if (hiragana === "ぢ") return ["ji", "di"];
  if (hiragana === "づ") return ["zu", "du"];
  return [romaji, ...(ALTERNATIVES[romaji] ?? [])];
}

function fromRow(row: KanaRow, set: KanaGroup["set"]): KanaGroup {
  const cards = row.cells
    .filter((c) => c !== null)
    .map((c) => ({ hiragana: c.hiragana, katakana: c.katakana, answers: answersFor(c.hiragana, c.romaji) }));
  return { id: `${set}-${cards[0].hiragana}`, label: cards[0].hiragana, set, cards };
}

const I_COLUMN: [string, string, string][] = [
  ["き", "キ", "k"],
  ["し", "シ", "sh"],
  ["ち", "チ", "ch"],
  ["に", "ニ", "n"],
  ["ひ", "ヒ", "h"],
  ["み", "ミ", "m"],
  ["り", "リ", "r"],
  ["ぎ", "ギ", "g"],
  ["じ", "ジ", "j"],
  ["び", "ビ", "b"],
  ["ぴ", "ピ", "p"],
];

function yoonGroup([h, k, consonant]: [string, string, string]): KanaGroup {
  // Hepburn drops the y after sh, ch and j: sha, cha, ja.
  const glide = consonant.length === 2 || consonant === "j" ? "" : "y";
  const cards = (["ゃ", "ゅ", "ょ"] as const).map((small, i) => {
    const romaji = `${consonant}${glide}${"auo"[i]}`;
    return {
      hiragana: h + small,
      katakana: k + String.fromCodePoint(small.codePointAt(0)! + 0x60),
      answers: [romaji, ...(ALTERNATIVES[romaji] ?? [])],
    };
  });
  return { id: `yoon-${h}`, label: `${h}ゃ`, set: "yoon", cards };
}

// The ん row is folded into the わ row: one card isn't worth its own button.
const basicRows = GOJUON.slice(0, -1).map((r) => fromRow(r, "basic"));
basicRows[basicRows.length - 1].cards.push(...fromRow(GOJUON[GOJUON.length - 1], "basic").cards);

export const KANA_GROUPS: KanaGroup[] = [...basicRows, ...DAKUTEN.map((r) => fromRow(r, "dakuten")), ...I_COLUMN.map(yoonGroup)];

export const KANA_SETS: { id: KanaGroup["set"]; label: string; hint: string }[] = [
  { id: "basic", label: "Basic", hint: "The 46 main kana" },
  { id: "dakuten", label: "Voiced", hint: "゛ and ゜: が, ぱ…" },
  { id: "yoon", label: "Combinations", hint: "Small ゃゅょ: きゃ…" },
];

export interface KanaCard {
  kana: string;
  script: Script;
  answers: string[];
}

/** One card per kana per chosen script, for the groups picked. */
export function buildDeck(groupIds: string[], scripts: Script[]): KanaCard[] {
  const picked = new Set(groupIds);
  return KANA_GROUPS.filter((g) => picked.has(g.id)).flatMap((g) =>
    g.cards.flatMap((c) => scripts.map((script) => ({ kana: c[script], script, answers: c.answers }))),
  );
}

export function isCorrect(card: KanaCard, typed: string): boolean {
  return card.answers.includes(typed.trim().toLowerCase());
}

export function shuffle<T>(items: T[], random: () => number = Math.random): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
