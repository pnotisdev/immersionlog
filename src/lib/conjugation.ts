/**
 * The conjugation drill on /tools/conjugation. `conjugate` produces every accepted
 * answer for a word in a form, in kanji and in kana; the first is the one shown.
 * Conjugation only ever changes okurigana, so the same string operations work on the
 * kanji spelling and on the reading. 来る is the exception (its stem's reading
 * changes: 来ない is こない), handled by conjugating the reading and putting 来 back.
 */

export type WordType = "godan" | "ichidan" | "irregular" | "i-adj" | "na-adj";
export type Level = "N5" | "N4" | "N3";

export interface Word {
  kanji: string;
  kana: string;
  meaning: string;
  type: WordType;
  level: Level;
  /** Verbs with no will of their own (分かる, 降る): no potential, command, volitional, want to or causative. */
  stative?: boolean;
}

export type FormId =
  | "negative"
  | "past"
  | "past-negative"
  | "polite"
  | "polite-negative"
  | "polite-past"
  | "polite-past-negative"
  | "te"
  | "te-negative"
  | "progressive"
  | "polite-progressive"
  | "adverb"
  | "potential"
  | "potential-negative"
  | "passive"
  | "causative"
  | "causative-passive"
  | "tai"
  | "tai-negative"
  | "ba"
  | "ba-negative"
  | "tara"
  | "volitional"
  | "polite-volitional"
  | "imperative"
  | "imperative-negative";

export interface Form {
  id: FormId;
  label: string;
  /** A tiny English gloss with 食べる / 高い to anchor the label. */
  example: string;
  verb: boolean;
  adjective: boolean;
  /** Needs a verb someone can choose to do. */
  volitional?: boolean;
}

export interface FormGroup {
  id: string;
  label: string;
  forms: Form[];
}

export const FORM_GROUPS: FormGroup[] = [
  {
    id: "basic",
    label: "Plain",
    forms: [
      { id: "negative", label: "Negative", example: "食べない · 高くない", verb: true, adjective: true },
      { id: "past", label: "Past", example: "食べた · 高かった", verb: true, adjective: true },
      { id: "past-negative", label: "Past negative", example: "食べなかった · 高くなかった", verb: true, adjective: true },
    ],
  },
  {
    id: "polite",
    label: "Polite",
    forms: [
      { id: "polite", label: "Polite", example: "食べます · 高いです", verb: true, adjective: true },
      { id: "polite-negative", label: "Polite negative", example: "食べません · 高くないです", verb: true, adjective: true },
      { id: "polite-past", label: "Polite past", example: "食べました · 高かったです", verb: true, adjective: true },
      {
        id: "polite-past-negative",
        label: "Polite past negative",
        example: "食べませんでした · 高くなかったです",
        verb: true,
        adjective: true,
      },
    ],
  },
  {
    id: "te",
    label: "て-form",
    forms: [
      { id: "te", label: "て-form", example: "食べて · 高くて", verb: true, adjective: true },
      { id: "te-negative", label: "Negative て-form", example: "食べないで", verb: true, adjective: false },
      { id: "progressive", label: "Progressive (ている)", example: "食べている", verb: true, adjective: false },
      { id: "polite-progressive", label: "Polite progressive", example: "食べています", verb: true, adjective: false },
      { id: "adverb", label: "Adverb", example: "高く · 静かに", verb: false, adjective: true },
    ],
  },
  {
    id: "voice",
    label: "Potential, passive, causative",
    forms: [
      { id: "potential", label: "Potential", example: "食べられる", verb: true, adjective: false, volitional: true },
      { id: "potential-negative", label: "Potential negative", example: "食べられない", verb: true, adjective: false, volitional: true },
      { id: "passive", label: "Passive", example: "食べられる", verb: true, adjective: false },
      { id: "causative", label: "Causative", example: "食べさせる", verb: true, adjective: false, volitional: true },
      { id: "causative-passive", label: "Causative passive", example: "食べさせられる", verb: true, adjective: false, volitional: true },
    ],
  },
  {
    id: "mood",
    label: "Wanting and conditionals",
    forms: [
      { id: "tai", label: "Want to (たい)", example: "食べたい", verb: true, adjective: false, volitional: true },
      { id: "tai-negative", label: "Don't want to", example: "食べたくない", verb: true, adjective: false, volitional: true },
      { id: "ba", label: "Conditional (ば)", example: "食べれば · 高ければ", verb: true, adjective: true },
      { id: "ba-negative", label: "Negative conditional", example: "食べなければ · 高くなければ", verb: true, adjective: true },
      { id: "tara", label: "Conditional (たら)", example: "食べたら · 高かったら", verb: true, adjective: true },
    ],
  },
  {
    id: "command",
    label: "Volitional and commands",
    forms: [
      { id: "volitional", label: "Volitional (let's)", example: "食べよう", verb: true, adjective: false, volitional: true },
      { id: "polite-volitional", label: "Polite volitional", example: "食べましょう", verb: true, adjective: false, volitional: true },
      { id: "imperative", label: "Imperative", example: "食べろ", verb: true, adjective: false, volitional: true },
      { id: "imperative-negative", label: "Negative imperative", example: "食べるな", verb: true, adjective: false, volitional: true },
    ],
  },
];

export const FORMS: Form[] = FORM_GROUPS.flatMap((g) => g.forms);

export function formById(id: FormId): Form {
  return FORMS.find((f) => f.id === id)!;
}

export const WORD_TYPES: { id: WordType; label: string; example: string }[] = [
  { id: "godan", label: "Godan verbs", example: "書く, 飲む" },
  { id: "ichidan", label: "Ichidan verbs", example: "食べる, 見る" },
  { id: "irregular", label: "する and 来る", example: "勉強する" },
  { id: "i-adj", label: "い-adjectives", example: "高い" },
  { id: "na-adj", label: "な-adjectives", example: "静か" },
];

export function isVerb(type: WordType): boolean {
  return type === "godan" || type === "ichidan" || type === "irregular";
}

export function appliesTo(form: Form, word: Word): boolean {
  if (isVerb(word.type)) return form.verb && !(form.volitional && word.stative);
  return form.adjective;
}

// ---------------------------------------------------------------------------
// Verbs

const GODAN_ROWS: Record<string, string> = {
  う: "わいうえお",
  く: "かきくけこ",
  ぐ: "がぎぐげご",
  す: "さしすせそ",
  つ: "たちつてと",
  ぬ: "なにぬねの",
  ぶ: "ばびぶべぼ",
  む: "まみむめも",
  る: "らりるれろ",
};

type Column = 0 | 1 | 2 | 3 | 4; // a i u e o

function godanShift(s: string, column: Column): string {
  const row = GODAN_ROWS[s.slice(-1)];
  if (!row) throw new Error(`Not a godan verb: ${s}`);
  return s.slice(0, -1) + row[column];
}

/** The て and た forms: the sound changes (音便) are the one hard part of godan verbs. */
function godanTe(s: string, past: boolean): string {
  const [te, de] = past ? ["た", "だ"] : ["て", "で"];
  const stem = s.slice(0, -1);
  // 行く is the one irregular: 行って, not 行いて.
  if (s === "行く" || s === "いく") return `${stem}っ${te}`;
  switch (s.slice(-1)) {
    case "う":
    case "つ":
    case "る":
      return `${stem}っ${te}`;
    case "む":
    case "ぶ":
    case "ぬ":
      return `${stem}ん${de}`;
    case "く":
      return `${stem}い${te}`;
    case "ぐ":
      return `${stem}い${de}`;
    case "す":
      return `${stem}し${te}`;
  }
  throw new Error(`Not a godan verb: ${s}`);
}

/** The pieces every verb form is built from. `s` is the dictionary form (kanji or kana). */
interface VerbStems {
  /** ない-stem: 食べ, 書か, し, こ */
  nai: string;
  /** ます-stem: 食べ, 書き, し, き */
  masu: string;
  te: string;
  ta: string;
  /** Potential as a dictionary-form ichidan verb. */
  potential: string;
  passive: string;
  causative: string;
  causativePassive: string[];
  volitional: string;
  imperative: string[];
  ba: string;
}

function verbStems(s: string, type: WordType): VerbStems {
  if (type === "godan") {
    const a = godanShift(s, 0);
    return {
      nai: a,
      masu: godanShift(s, 1),
      te: godanTe(s, false),
      ta: godanTe(s, true),
      potential: `${godanShift(s, 3)}る`,
      passive: `${a}れる`,
      causative: `${a}せる`,
      // The short form (飲まされる) is everyday speech, but not after a す verb (話させられる).
      causativePassive: s.endsWith("す") ? [`${a}せられる`] : [`${a}せられる`, `${a}される`],
      volitional: `${godanShift(s, 4)}う`,
      imperative: [godanShift(s, 3)],
      ba: `${godanShift(s, 3)}ば`,
    };
  }
  if (type === "ichidan") {
    const stem = s.slice(0, -1);
    return {
      nai: stem,
      masu: stem,
      te: `${stem}て`,
      ta: `${stem}た`,
      potential: `${stem}られる`,
      passive: `${stem}られる`,
      causative: `${stem}させる`,
      causativePassive: [`${stem}させられる`],
      volitional: `${stem}よう`,
      imperative: [`${stem}ろ`, `${stem}よ`],
      ba: `${stem}れば`,
    };
  }
  if (s.endsWith("する")) {
    const p = s.slice(0, -2);
    return {
      nai: `${p}し`,
      masu: `${p}し`,
      te: `${p}して`,
      ta: `${p}した`,
      potential: `${p}できる`,
      passive: `${p}される`,
      causative: `${p}させる`,
      causativePassive: [`${p}させられる`],
      volitional: `${p}しよう`,
      imperative: [`${p}しろ`, `${p}せよ`],
      ba: `${p}すれば`,
    };
  }
  if (s.endsWith("くる")) {
    const p = s.slice(0, -2);
    return {
      nai: `${p}こ`,
      masu: `${p}き`,
      te: `${p}きて`,
      ta: `${p}きた`,
      potential: `${p}こられる`,
      passive: `${p}こられる`,
      causative: `${p}こさせる`,
      causativePassive: [`${p}こさせられる`],
      volitional: `${p}こよう`,
      imperative: [`${p}こい`],
      ba: `${p}くれば`,
    };
  }
  throw new Error(`Unknown irregular verb: ${s}`);
}

function verbForms(s: string, type: WordType, form: FormId): string[] {
  const v = verbStems(s, type);
  const ichidan = (d: string) => d.slice(0, -1);
  switch (form) {
    case "negative":
      return [`${v.nai}ない`];
    case "past":
      return [v.ta];
    case "past-negative":
      return [`${v.nai}なかった`];
    case "polite":
      return [`${v.masu}ます`];
    case "polite-negative":
      return [`${v.masu}ません`, `${v.nai}ないです`];
    case "polite-past":
      return [`${v.masu}ました`];
    case "polite-past-negative":
      return [`${v.masu}ませんでした`, `${v.nai}なかったです`];
    case "te":
      return [v.te];
    case "te-negative":
      return [`${v.nai}ないで`, `${v.nai}なくて`];
    case "progressive":
      return [`${v.te}いる`, `${v.te.slice(0, -1)}${v.te.endsWith("で") ? "でる" : "てる"}`];
    case "polite-progressive":
      return [`${v.te}います`, `${v.te.slice(0, -1)}${v.te.endsWith("で") ? "でます" : "てます"}`];
    case "potential":
      return [v.potential];
    case "potential-negative":
      return [`${ichidan(v.potential)}ない`];
    case "passive":
      return [v.passive];
    case "causative":
      return [v.causative];
    case "causative-passive":
      return v.causativePassive;
    case "tai":
      return [`${v.masu}たい`];
    case "tai-negative":
      return [`${v.masu}たくない`];
    case "ba":
      return [v.ba];
    case "ba-negative":
      return [`${v.nai}なければ`];
    case "tara":
      return [`${v.ta}ら`];
    case "volitional":
      return [v.volitional];
    case "polite-volitional":
      return [`${v.masu}ましょう`];
    case "imperative":
      return v.imperative;
    case "imperative-negative":
      return [`${s}な`];
    case "adverb":
      break;
  }
  throw new Error(`${form} doesn't apply to verbs`);
}

// ---------------------------------------------------------------------------
// Adjectives

function iAdjForms(s: string, form: FormId): string[] {
  // いい borrows every form but the dictionary one from よい: よくない, よかった.
  const stem = s.endsWith("いい") ? `${s.slice(0, -2)}よ` : s.slice(0, -1);
  switch (form) {
    case "negative":
      return [`${stem}くない`];
    case "past":
      return [`${stem}かった`];
    case "past-negative":
      return [`${stem}くなかった`];
    case "polite":
      return [`${s}です`];
    case "polite-negative":
      return [`${stem}くないです`, `${stem}くありません`];
    case "polite-past":
      return [`${stem}かったです`];
    case "polite-past-negative":
      return [`${stem}くなかったです`, `${stem}くありませんでした`];
    case "te":
      return [`${stem}くて`];
    case "adverb":
      return [`${stem}く`];
    case "ba":
      return [`${stem}ければ`];
    case "ba-negative":
      return [`${stem}くなければ`];
    case "tara":
      return [`${stem}かったら`];
  }
  throw new Error(`${form} doesn't apply to adjectives`);
}

function naAdjForms(s: string, form: FormId): string[] {
  // Every negative has a spoken じゃ and a written では version; both are right.
  const neg = (tail: string) => [`${s}じゃ${tail}`, `${s}では${tail}`];
  switch (form) {
    case "negative":
      return neg("ない");
    case "past":
      return [`${s}だった`];
    case "past-negative":
      return neg("なかった");
    case "polite":
      return [`${s}です`];
    case "polite-negative":
      return [...neg("ありません"), ...neg("ないです")];
    case "polite-past":
      return [`${s}でした`];
    case "polite-past-negative":
      return [...neg("ありませんでした"), ...neg("なかったです")];
    case "te":
      return [`${s}で`];
    case "adverb":
      return [`${s}に`];
    case "ba":
      return [`${s}なら`, `${s}であれば`, `${s}ならば`];
    case "ba-negative":
      return [`${s}じゃなければ`, `${s}でなければ`, `${s}ではなければ`];
    case "tara":
      return [`${s}だったら`];
  }
  throw new Error(`${form} doesn't apply to adjectives`);
}

function conjugateString(s: string, type: WordType, form: FormId): string[] {
  if (type === "i-adj") return iAdjForms(s, form);
  if (type === "na-adj") return naAdjForms(s, form);
  return verbForms(s, type, form);
}

export interface Answer {
  kanji: string;
  kana: string;
}

/** Every accepted answer, the textbook one first. */
export function conjugate(word: Word, form: FormId): Answer[] {
  const kana = conjugateString(word.kana, word.type, form);
  const kanji =
    word.type === "irregular" && word.kanji.endsWith("来る")
      ? kana.map((k) => word.kanji.slice(0, -2) + "来" + k.slice(word.kana.length - 2 + 1))
      : conjugateString(word.kanji, word.type, form);
  return kana.map((k, i) => ({ kanji: kanji[i], kana: k }));
}

/** Kana answers to compare a typed answer against, plus the kanji spellings. */
export function acceptedAnswers(word: Word, form: FormId): string[] {
  return [...new Set(conjugate(word, form).flatMap((a) => [a.kana, a.kanji]))];
}

// ---------------------------------------------------------------------------
// Why an answer is what it is, shown after a miss.

const GODAN_TE_RULE: Record<string, string> = {
  う: "う, つ and る become って/った",
  つ: "う, つ and る become って/った",
  る: "う, つ and る become って/った",
  む: "む, ぶ and ぬ become んで/んだ",
  ぶ: "む, ぶ and ぬ become んで/んだ",
  ぬ: "む, ぶ and ぬ become んで/んだ",
  く: "く becomes いて/いた",
  ぐ: "ぐ becomes いで/いだ",
  す: "す becomes して/した",
};

const USES_TE: FormId[] = ["te", "past", "tara", "progressive", "polite-progressive"];

/** One sentence on the rule behind this answer. */
export function explain(word: Word, form: FormId): string {
  const t = word.type;
  if (t === "irregular") {
    return word.kana.endsWith("くる")
      ? "来る is irregular: its reading changes with the form (こない, きます, くれば, こよう), so learn it as its own pattern."
      : "する is irregular: the stem is し for most forms (しない, します, して), さ for passive and causative (される, させる), and the potential is できる.";
  }
  if (t === "i-adj") {
    const base = word.kana.endsWith("いい") ? " いい is the one exception: every form but いい itself is built on よい (よくない, よかった)." : "";
    return `い-adjectives drop the final い and add an ending: く for negative, adverb and て (くない, く, くて), かった for past.${base}`;
  }
  if (t === "na-adj") {
    const trap = word.kana.endsWith("い")
      ? ` ${word.kanji} ends in い but is a な-adjective, so the い stays.`
      : "";
    return `な-adjectives work like nouns: add だ, です, じゃない, だった and so on after them.${trap}`;
  }
  if (t === "ichidan") {
    const extra =
      form === "potential" || form === "potential-negative"
        ? ` The potential and passive are the same for ichidan verbs (られる); in casual speech you'll also hear ${word.kanji.slice(0, -1)}れる.`
        : "";
    return `Ichidan verbs drop る and add the ending directly: ${word.kanji.slice(0, -1)} + ない, ます, て, よう.${extra}`;
  }
  // godan
  const last = word.kana.slice(-1);
  const trap = looksIchidan(word)
    ? ` ${word.kanji} looks like an ichidan verb but is godan: ${godanShift(word.kanji, 0)}ない, not ${word.kanji.slice(0, -1)}ない.`
    : "";
  if (USES_TE.includes(form)) {
    if (word.kana === "いく") return "行く is the one godan exception in the て and た forms: 行って, 行った (not 行いて).";
    return `Godan verbs change their last sound for て and た: ${GODAN_TE_RULE[last]}.${trap}`;
  }
  if (form === "imperative-negative") return "The negative imperative is the dictionary form plus な, for every verb.";
  const [column, row] = GODAN_COLUMNS[form] ?? [0, "the a-row"];
  const wa = last === "う" && column === 0 ? " Verbs ending in う use わ for the a-row: 買わない." : "";
  return `Godan verbs move their last kana to ${row}: ${last} → ${godanShift(word.kana, column).slice(-1)}.${wa}${trap}`;
}

/** Ends in an e- or i-row kana + る, like 帰る and 入る, the way ichidan verbs do. */
function looksIchidan(word: Word): boolean {
  return /[えけせてねへめれげぜでべぺいきしちにひみりぎじびぴ]る$/.test(word.kana);
}

const GODAN_COLUMNS: Partial<Record<FormId, [Column, string]>> = {
  negative: [0, "the a-row (ない)"],
  "past-negative": [0, "the a-row (なかった)"],
  "te-negative": [0, "the a-row (ないで)"],
  "ba-negative": [0, "the a-row (なければ)"],
  passive: [0, "the a-row (れる)"],
  causative: [0, "the a-row (せる)"],
  "causative-passive": [0, "the a-row (せられる, or される in speech)"],
  polite: [1, "the i-row (ます)"],
  "polite-negative": [1, "the i-row (ません)"],
  "polite-past": [1, "the i-row (ました)"],
  "polite-past-negative": [1, "the i-row (ませんでした)"],
  tai: [1, "the i-row (たい)"],
  "tai-negative": [1, "the i-row (たくない)"],
  "polite-volitional": [1, "the i-row (ましょう)"],
  potential: [3, "the e-row (る)"],
  "potential-negative": [3, "the e-row (ない)"],
  ba: [3, "the e-row (ば)"],
  imperative: [3, "the e-row, with nothing after it"],
  volitional: [4, "the o-row (う)"],
};

// ---------------------------------------------------------------------------
// The word list. Levels follow common JLPT lists and are approximate.

const w = (kanji: string, kana: string, meaning: string, type: WordType, level: Level, stative?: boolean): Word => ({
  kanji,
  kana,
  meaning,
  type,
  level,
  ...(stative ? { stative } : {}),
});

export const WORDS: Word[] = [
  // Godan
  w("行く", "いく", "to go", "godan", "N5"),
  w("聞く", "きく", "to listen, to ask", "godan", "N5"),
  w("書く", "かく", "to write", "godan", "N5"),
  w("歩く", "あるく", "to walk", "godan", "N5"),
  w("泳ぐ", "およぐ", "to swim", "godan", "N5"),
  w("話す", "はなす", "to speak", "godan", "N5"),
  w("貸す", "かす", "to lend", "godan", "N5"),
  w("押す", "おす", "to push", "godan", "N5"),
  w("待つ", "まつ", "to wait", "godan", "N5"),
  w("持つ", "もつ", "to hold", "godan", "N5"),
  w("立つ", "たつ", "to stand", "godan", "N5"),
  w("死ぬ", "しぬ", "to die", "godan", "N5"),
  w("遊ぶ", "あそぶ", "to play", "godan", "N5"),
  w("呼ぶ", "よぶ", "to call", "godan", "N5"),
  w("飲む", "のむ", "to drink", "godan", "N5"),
  w("読む", "よむ", "to read", "godan", "N5"),
  w("住む", "すむ", "to live (somewhere)", "godan", "N5"),
  w("買う", "かう", "to buy", "godan", "N5"),
  w("会う", "あう", "to meet", "godan", "N5"),
  w("言う", "いう", "to say", "godan", "N5"),
  w("使う", "つかう", "to use", "godan", "N5"),
  w("帰る", "かえる", "to go home", "godan", "N5"),
  w("入る", "はいる", "to enter", "godan", "N5"),
  w("走る", "はしる", "to run", "godan", "N5"),
  w("知る", "しる", "to get to know", "godan", "N5"),
  w("取る", "とる", "to take", "godan", "N5"),
  w("作る", "つくる", "to make", "godan", "N5"),
  w("分かる", "わかる", "to understand", "godan", "N5", true),
  w("降る", "ふる", "to fall (rain, snow)", "godan", "N5", true),
  w("急ぐ", "いそぐ", "to hurry", "godan", "N4"),
  w("脱ぐ", "ぬぐ", "to take off (clothes)", "godan", "N4"),
  w("運ぶ", "はこぶ", "to carry", "godan", "N4"),
  w("選ぶ", "えらぶ", "to choose", "godan", "N4"),
  w("喜ぶ", "よろこぶ", "to be glad", "godan", "N4"),
  w("休む", "やすむ", "to rest", "godan", "N4"),
  w("頼む", "たのむ", "to ask (a favour)", "godan", "N4"),
  w("思う", "おもう", "to think", "godan", "N4"),
  w("払う", "はらう", "to pay", "godan", "N4"),
  w("笑う", "わらう", "to laugh", "godan", "N4"),
  w("手伝う", "てつだう", "to help", "godan", "N4"),
  w("送る", "おくる", "to send", "godan", "N4"),
  w("怒る", "おこる", "to get angry", "godan", "N4"),
  w("切る", "きる", "to cut", "godan", "N4"),
  w("探す", "さがす", "to look for", "godan", "N4"),
  w("動く", "うごく", "to move", "godan", "N4"),
  w("働く", "はたらく", "to work", "godan", "N4"),
  w("決まる", "きまる", "to be decided", "godan", "N4", true),
  w("驚く", "おどろく", "to be surprised", "godan", "N3"),
  w("沈む", "しずむ", "to sink", "godan", "N3"),
  w("叫ぶ", "さけぶ", "to shout", "godan", "N3"),
  w("祈る", "いのる", "to pray", "godan", "N3"),
  w("断る", "ことわる", "to refuse", "godan", "N3"),
  w("滑る", "すべる", "to slip", "godan", "N3"),
  w("争う", "あらそう", "to compete", "godan", "N3"),
  w("迷う", "まよう", "to get lost", "godan", "N3"),
  w("許す", "ゆるす", "to forgive", "godan", "N3"),
  w("育つ", "そだつ", "to grow up", "godan", "N3"),
  // Ichidan
  w("食べる", "たべる", "to eat", "ichidan", "N5"),
  w("見る", "みる", "to see", "ichidan", "N5"),
  w("起きる", "おきる", "to wake up", "ichidan", "N5"),
  w("寝る", "ねる", "to sleep", "ichidan", "N5"),
  w("出る", "でる", "to leave", "ichidan", "N5"),
  w("着る", "きる", "to wear", "ichidan", "N5"),
  w("教える", "おしえる", "to teach", "ichidan", "N5"),
  w("開ける", "あける", "to open", "ichidan", "N5"),
  w("閉める", "しめる", "to close", "ichidan", "N5"),
  w("借りる", "かりる", "to borrow", "ichidan", "N5"),
  w("浴びる", "あびる", "to take (a shower)", "ichidan", "N5"),
  w("忘れる", "わすれる", "to forget", "ichidan", "N5"),
  w("覚える", "おぼえる", "to remember", "ichidan", "N4"),
  w("始める", "はじめる", "to begin", "ichidan", "N4"),
  w("決める", "きめる", "to decide", "ichidan", "N4"),
  w("考える", "かんがえる", "to think about", "ichidan", "N4"),
  w("答える", "こたえる", "to answer", "ichidan", "N4"),
  w("続ける", "つづける", "to continue", "ichidan", "N4"),
  w("捨てる", "すてる", "to throw away", "ichidan", "N4"),
  w("調べる", "しらべる", "to look up", "ichidan", "N4"),
  w("集める", "あつめる", "to collect", "ichidan", "N4"),
  w("落ちる", "おちる", "to fall", "ichidan", "N4", true),
  w("足りる", "たりる", "to be enough", "ichidan", "N4", true),
  w("信じる", "しんじる", "to believe", "ichidan", "N3"),
  w("感じる", "かんじる", "to feel", "ichidan", "N3"),
  w("比べる", "くらべる", "to compare", "ichidan", "N3"),
  w("認める", "みとめる", "to admit", "ichidan", "N3"),
  w("避ける", "さける", "to avoid", "ichidan", "N3"),
  w("与える", "あたえる", "to give", "ichidan", "N3"),
  w("伝える", "つたえる", "to pass on (a message)", "ichidan", "N3"),
  // する and 来る
  w("する", "する", "to do", "irregular", "N5"),
  w("来る", "くる", "to come", "irregular", "N5"),
  w("勉強する", "べんきょうする", "to study", "irregular", "N5"),
  w("散歩する", "さんぽする", "to take a walk", "irregular", "N5"),
  w("運転する", "うんてんする", "to drive", "irregular", "N4"),
  w("説明する", "せつめいする", "to explain", "irregular", "N4"),
  w("心配する", "しんぱいする", "to worry", "irregular", "N4"),
  w("連絡する", "れんらくする", "to get in touch", "irregular", "N3"),
  // い-adjectives
  w("高い", "たかい", "expensive, tall", "i-adj", "N5"),
  w("安い", "やすい", "cheap", "i-adj", "N5"),
  w("大きい", "おおきい", "big", "i-adj", "N5"),
  w("小さい", "ちいさい", "small", "i-adj", "N5"),
  w("新しい", "あたらしい", "new", "i-adj", "N5"),
  w("古い", "ふるい", "old (things)", "i-adj", "N5"),
  w("暑い", "あつい", "hot (weather)", "i-adj", "N5"),
  w("寒い", "さむい", "cold (weather)", "i-adj", "N5"),
  w("おいしい", "おいしい", "tasty", "i-adj", "N5"),
  w("楽しい", "たのしい", "fun", "i-adj", "N5"),
  w("忙しい", "いそがしい", "busy", "i-adj", "N5"),
  w("難しい", "むずかしい", "difficult", "i-adj", "N5"),
  w("面白い", "おもしろい", "interesting", "i-adj", "N5"),
  w("長い", "ながい", "long", "i-adj", "N5"),
  w("強い", "つよい", "strong", "i-adj", "N5"),
  w("いい", "いい", "good", "i-adj", "N5"),
  w("優しい", "やさしい", "kind", "i-adj", "N4"),
  w("怖い", "こわい", "scary", "i-adj", "N4"),
  w("嬉しい", "うれしい", "happy", "i-adj", "N4"),
  w("悲しい", "かなしい", "sad", "i-adj", "N4"),
  w("眠い", "ねむい", "sleepy", "i-adj", "N4"),
  w("厳しい", "きびしい", "strict", "i-adj", "N4"),
  w("珍しい", "めずらしい", "rare", "i-adj", "N4"),
  w("恥ずかしい", "はずかしい", "embarrassing", "i-adj", "N4"),
  w("詳しい", "くわしい", "detailed", "i-adj", "N3"),
  w("懐かしい", "なつかしい", "nostalgic", "i-adj", "N3"),
  w("怪しい", "あやしい", "suspicious", "i-adj", "N3"),
  w("鋭い", "するどい", "sharp", "i-adj", "N3"),
  w("かっこいい", "かっこいい", "cool", "i-adj", "N3"),
  // な-adjectives
  w("静か", "しずか", "quiet", "na-adj", "N5"),
  w("元気", "げんき", "healthy, lively", "na-adj", "N5"),
  w("有名", "ゆうめい", "famous", "na-adj", "N5"),
  w("好き", "すき", "liked", "na-adj", "N5"),
  w("嫌い", "きらい", "disliked", "na-adj", "N5"),
  w("上手", "じょうず", "good at", "na-adj", "N5"),
  w("下手", "へた", "bad at", "na-adj", "N5"),
  w("便利", "べんり", "convenient", "na-adj", "N5"),
  w("簡単", "かんたん", "easy", "na-adj", "N5"),
  w("暇", "ひま", "free (not busy)", "na-adj", "N5"),
  w("きれい", "きれい", "pretty, clean", "na-adj", "N5"),
  w("大切", "たいせつ", "important", "na-adj", "N4"),
  w("親切", "しんせつ", "kind", "na-adj", "N4"),
  w("丁寧", "ていねい", "polite", "na-adj", "N4"),
  w("残念", "ざんねん", "a shame", "na-adj", "N4"),
  w("特別", "とくべつ", "special", "na-adj", "N4"),
  w("安全", "あんぜん", "safe", "na-adj", "N4"),
  w("複雑", "ふくざつ", "complicated", "na-adj", "N3"),
  w("確か", "たしか", "certain", "na-adj", "N3"),
  w("素直", "すなお", "honest, obedient", "na-adj", "N3"),
  w("真剣", "しんけん", "serious", "na-adj", "N3"),
  w("退屈", "たいくつ", "boring", "na-adj", "N3"),
];

export interface Question {
  word: Word;
  form: Form;
}

/** Every (word, form) pair the settings allow. */
export function questionPool(forms: FormId[], types: WordType[], levels: Level[]): Question[] {
  const fs = FORMS.filter((f) => forms.includes(f.id));
  return WORDS.filter((word) => types.includes(word.type) && levels.includes(word.level)).flatMap((word) =>
    fs.filter((form) => appliesTo(form, word)).map((form) => ({ word, form })),
  );
}
