/**
 * The kana charts on /guide. Rows are consonants, columns the five vowels (a i u e o);
 * null is a gap in the chart (yi, ye, wu...). Hepburn romanisation, the one most
 * dictionaries and textbooks use.
 */
export interface KanaCell {
  hiragana: string;
  katakana: string;
  romaji: string;
}

export type KanaRow = { label: string; cells: (KanaCell | null)[] };

function row(label: string, hiragana: string, katakana: string, romaji: string): KanaRow {
  const h = [...hiragana];
  const k = [...katakana];
  const r = romaji.split(" ");
  return {
    label,
    cells: h.map((c, i) => (c === "・" ? null : { hiragana: c, katakana: k[i], romaji: r[i] })),
  };
}

/** The 46 basic kana (gojūon). */
export const GOJUON: KanaRow[] = [
  row("", "あいうえお", "アイウエオ", "a i u e o"),
  row("k", "かきくけこ", "カキクケコ", "ka ki ku ke ko"),
  row("s", "さしすせそ", "サシスセソ", "sa shi su se so"),
  row("t", "たちつてと", "タチツテト", "ta chi tsu te to"),
  row("n", "なにぬねの", "ナニヌネノ", "na ni nu ne no"),
  row("h", "はひふへほ", "ハヒフヘホ", "ha hi fu he ho"),
  row("m", "まみむめも", "マミムメモ", "ma mi mu me mo"),
  row("y", "や・ゆ・よ", "ヤ・ユ・ヨ", "ya - yu - yo"),
  row("r", "らりるれろ", "ラリルレロ", "ra ri ru re ro"),
  row("w", "わ・・・を", "ワ・・・ヲ", "wa - - - o"),
  row("", "ん・・・・", "ン・・・・", "n - - - -"),
];

/** Voiced (゛) and p-sound (゜) versions of the rows above. */
export const DAKUTEN: KanaRow[] = [
  row("g", "がぎぐげご", "ガギグゲゴ", "ga gi gu ge go"),
  row("z", "ざじずぜぞ", "ザジズゼゾ", "za ji zu ze zo"),
  row("d", "だぢづでど", "ダヂヅデド", "da ji zu de do"),
  row("b", "ばびぶべぼ", "バビブベボ", "ba bi bu be bo"),
  row("p", "ぱぴぷぺぽ", "パピプペポ", "pa pi pu pe po"),
];

/** Small ゃゅょ after an i-column kana: one syllable. */
export const YOON: { hiragana: string; katakana: string; romaji: string }[] = [
  { hiragana: "きゃ", katakana: "キャ", romaji: "kya" },
  { hiragana: "しゅ", katakana: "シュ", romaji: "shu" },
  { hiragana: "ちょ", katakana: "チョ", romaji: "cho" },
  { hiragana: "にゃ", katakana: "ニャ", romaji: "nya" },
  { hiragana: "ひょ", katakana: "ヒョ", romaji: "hyo" },
  { hiragana: "りゅ", katakana: "リュ", romaji: "ryu" },
  { hiragana: "じゃ", katakana: "ジャ", romaji: "ja" },
  { hiragana: "ぴょ", katakana: "ピョ", romaji: "pyo" },
];
