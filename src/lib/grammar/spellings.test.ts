import { describe, expect, it } from "vitest";
import { checkAnswer } from "./check";
import { DECKS, getPoint } from "./decks";
import { kanaSpellings, readingLexicon } from "./spellings";

const lexicon = readingLexicon(DECKS);

describe("kanaSpellings", () => {
  it("reads kanji runs from the decks' furigana", () => {
    expect(kanaSpellings("食べてください", lexicon)).toContain("たべてください");
    expect(kanaSpellings("言います", lexicon)).toContain("いいます");
  });

  it("builds an unseen compound from known pieces", () => {
    const pieces = new Map([
      ["日本", new Set(["にほん"])],
      ["語", new Set(["ご"])],
    ]);
    expect(kanaSpellings("日本語です", pieces)).toEqual(["にほんごです"]);
  });

  it("gives nothing when a kanji is unknown", () => {
    expect(kanaSpellings("齟齬", new Map())).toEqual([]);
  });
});

describe("near misses typed in romaji", () => {
  it("get the nudge, not a fail", () => {
    const sentence = getPoint("n4-kenjougo")!.sentences.find((s) => s.nearMisses.some((m) => m.answer === "言います"))!;
    const nudge = sentence.nearMisses.find((m) => m.answer === "言います")!.nudge;
    expect(checkAnswer(sentence, "iimasu")).toEqual({ result: "nearMiss", nudge });
    expect(checkAnswer(sentence, "いいます")).toEqual({ result: "nearMiss", nudge });
  });
});
