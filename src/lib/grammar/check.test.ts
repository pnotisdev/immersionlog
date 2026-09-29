import { describe, expect, it } from "vitest";
import { point, s, word } from "./build";
import { checkAnswer, normalizeInput } from "./check";
import { alignReading, blankOf, parseMarked, unmark } from "./sentence";

const te = point({
  id: "test-te-kudasai",
  title: "〜てください",
  meaning: "please do",
  structure: "Verb て-form + ください",
  explanation: "x",
  sentences: [
    s("窓を{開けてください}。", "まどを{あけてください}。", "Please open the window.", {
      hint: "開ける",
      conj: { word: word("開ける"), form: "te", tail: "ください" },
      near: [["開けて", "Add ください to make it a request."]],
    }),
    s("ここで{待っていてください}。", "ここで{まっていてください}。", "Please wait here.", {
      conj: { word: word("待つ"), form: "progressive", tail: "ください", marker: "ください" },
      accept: ["待っててください", "まっててください"],
    }),
  ],
}).sentences;

const particles = point({
  id: "test-particles",
  title: "は",
  meaning: "topic",
  structure: "Noun + は",
  explanation: "x",
  sentences: [
    s("私{は}学生です。", "わたし{は}がくせいです。", "I'm a student.", {
      near: [["が", "が would single me out: 'I'm the one who's a student'."]],
    }),
    s("駅{へ}行きます。", "えき{へ}いきます。", "I'm going to the station.", { accept: ["に"] }),
    s("水{を}飲みます。", "みず{を}のみます。", "I drink water."),
    s("{一緒に}行きましょう。", "{いっしょに}いきましょう。", "Let's go together."),
  ],
}).sentences;

const polite = point({
  id: "test-masu",
  title: "〜ています",
  meaning: "is doing",
  structure: "x",
  explanation: "x",
  sentences: [
    s("今、本を{読んでいます}。", "いま、ほんを{よんでいます}。", "I'm reading a book now.", {
      conj: { word: word("読む"), form: "polite-progressive", marker: "います" },
    }),
  ],
}).sentences;

describe("normalizeInput", () => {
  it("turns romaji into kana", () => {
    expect(normalizeInput("akete kudasai")).toBe("あけてください");
    expect(normalizeInput("hon")).toBe("ほん");
    expect(normalizeInput("kin'you")).toBe("きんよう");
  });

  it("folds full-width, half-width and katakana", () => {
    expect(normalizeInput("ｔａｂｅｔａｉ")).toBe("たべたい");
    expect(normalizeInput("ﾃﾚﾋﾞ")).toBe("てれび");
    expect(normalizeInput("テレビ")).toBe("てれび");
    expect(normalizeInput("３時")).toBe("3時");
  });

  it("drops punctuation and spaces, keeps kanji", () => {
    expect(normalizeInput(" 開けて　ください。")).toBe("開けてください");
    expect(normalizeInput("「はい！」")).toBe("はい");
  });
});

describe("checkAnswer", () => {
  it("accepts the marked answer in kanji, kana or romaji", () => {
    expect(checkAnswer(te[0], "開けてください")).toEqual({ result: "correct" });
    expect(checkAnswer(te[0], "あけてください")).toEqual({ result: "correct" });
    expect(checkAnswer(te[0], "akete kudasai")).toEqual({ result: "correct" });
    expect(checkAnswer(te[0], "アケテクダサイ")).toEqual({ result: "correct" });
  });

  it("accepts a mix of kanji and kana", () => {
    expect(checkAnswer(particles[3], "いっしょに")).toEqual({ result: "correct" });
    expect(checkAnswer(particles[3], "一緒に")).toEqual({ result: "correct" });
  });

  it("accepts conjugation.ts's everyday alternatives without listing them", () => {
    expect(checkAnswer(te[1], "待っててください")).toEqual({ result: "correct" });
    expect(checkAnswer(polite[0], "読んでます")).toEqual({ result: "correct" });
    expect(checkAnswer(polite[0], "yondemasu")).toEqual({ result: "correct" });
  });

  it("marks a wrong answer wrong", () => {
    expect(checkAnswer(te[0], "閉めてください")).toEqual({ result: "wrong" });
    expect(checkAnswer(particles[0], "を")).toEqual({ result: "wrong" });
    expect(checkAnswer(te[0], "")).toEqual({ result: "wrong" });
    expect(checkAnswer(te[0], "   ")).toEqual({ result: "wrong" });
  });

  it("gives a listed near miss its nudge", () => {
    expect(checkAnswer(te[0], "開けて")).toEqual({ result: "nearMiss", nudge: "Add ください to make it a request." });
    expect(checkAnswer(particles[0], "ga")).toMatchObject({ result: "nearMiss" });
  });

  it("treats the right pattern with a conjugation slip as a near miss", () => {
    const r = checkAnswer(te[0], "開けるてください");
    expect(r.result).toBe("nearMiss");
    expect(checkAnswer(te[0], "akerute kudasai").result).toBe("nearMiss");
    // Another verb with the pattern is just wrong.
    expect(checkAnswer(te[0], "あらってください").result).toBe("wrong");
  });

  it("treats the other register of the right form as a near miss", () => {
    const r = checkAnswer(polite[0], "読んでいる");
    expect(r).toMatchObject({ result: "nearMiss" });
    if (r.result === "nearMiss") expect(r.nudge).toMatch(/politeness/);
  });

  it("forgives は, を and へ typed as they sound", () => {
    expect(checkAnswer(particles[0], "wa")).toMatchObject({ result: "nearMiss" });
    expect(checkAnswer(particles[1], "e")).toMatchObject({ result: "nearMiss" });
    expect(checkAnswer(particles[2], "o")).toMatchObject({ result: "nearMiss" });
    expect(checkAnswer(particles[2], "wo")).toEqual({ result: "correct" });
    expect(checkAnswer(particles[1], "ni")).toEqual({ result: "correct" });
  });

  it("asks for just the blank when the answer runs into the rest of the sentence", () => {
    expect(checkAnswer(te[0], "窓を開けてください")).toMatchObject({ result: "nearMiss" });
  });
});

describe("sentence markup", () => {
  it("splits a marked sentence", () => {
    expect(parseMarked("窓を{開けてください}。")).toEqual({ before: "窓を", blank: "開けてください", after: "。" });
    expect(parseMarked("no braces")).toBeNull();
    expect(parseMarked("{two}{blanks}")).toBeNull();
    expect(blankOf("私{は}学生です。")).toBe("は");
    expect(unmark("私{は}学生です。")).toBe("私は学生です。");
  });

  it("aligns furigana over the kanji only", () => {
    expect(alignReading("窓を{開けてください}。", "まどを{あけてください}。")).toEqual([
      { text: "窓", ruby: "まど", blank: false },
      { text: "を", blank: false },
      { text: "開", ruby: "あ", blank: true },
      { text: "けてください", blank: true },
      { text: "。", blank: false },
    ]);
  });

  it("finds the split when a reading repeats the kana after it", () => {
    const tokens = alignReading("私{は}母と行きます。", "わたし{は}ははといきます。");
    expect(tokens?.filter((t) => t.ruby).map((t) => [t.text, t.ruby])).toEqual([
      ["私", "わたし"],
      ["母", "はは"],
      ["行", "い"],
    ]);
  });

  it("keeps katakana and numbers", () => {
    const tokens = alignReading("コーヒーを{3杯}飲みました。", "コーヒーを{さんばい}のみました。");
    expect(tokens?.find((t) => t.text === "3杯")).toEqual({ text: "3杯", ruby: "さんばい", blank: true });
  });

  it("refuses a reading that doesn't match", () => {
    expect(alignReading("窓を{開けて}ください。", "まどを{あけて}くだしゃい。")).toBeNull();
    expect(alignReading("窓を{開けて}ください。", "まどを{開けて}ください。")).toBeNull();
  });
});
