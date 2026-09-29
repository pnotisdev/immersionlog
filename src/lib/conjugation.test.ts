import { describe, expect, it } from "vitest";
import { acceptedAnswers, appliesTo, conjugate, explain, FORMS, type FormId, questionPool, WORDS } from "./conjugation";

const word = (kanji: string) => WORDS.find((w) => w.kanji === kanji)!;
const first = (kanji: string, form: FormId) => conjugate(word(kanji), form)[0].kanji;

describe("conjugate", () => {
  it.each<[string, FormId, string]>([
    ["書く", "te", "書いて"],
    ["行く", "past", "行った"],
    ["泳ぐ", "te", "泳いで"],
    ["話す", "tara", "話したら"],
    ["待つ", "te", "待って"],
    ["死ぬ", "past", "死んだ"],
    ["遊ぶ", "te", "遊んで"],
    ["飲む", "progressive", "飲んでいる"],
    ["買う", "negative", "買わない"],
    ["帰る", "negative", "帰らない"],
    ["帰る", "polite", "帰ります"],
    ["読む", "potential", "読める"],
    ["読む", "potential-negative", "読めない"],
    ["書く", "passive", "書かれる"],
    ["待つ", "causative", "待たせる"],
    ["飲む", "volitional", "飲もう"],
    ["飲む", "imperative", "飲め"],
    ["飲む", "ba", "飲めば"],
    ["食べる", "potential", "食べられる"],
    ["食べる", "causative-passive", "食べさせられる"],
    ["見る", "imperative", "見ろ"],
    ["着る", "te", "着て"],
    ["切る", "te", "切って"],
    ["勉強する", "potential", "勉強できる"],
    ["勉強する", "polite-past-negative", "勉強しませんでした"],
    ["する", "passive", "される"],
    ["する", "ba", "すれば"],
    ["高い", "past-negative", "高くなかった"],
    ["高い", "te", "高くて"],
    ["いい", "past", "よかった"],
    ["いい", "polite", "いいです"],
    ["かっこいい", "negative", "かっこよくない"],
    ["静か", "past", "静かだった"],
    ["静か", "adverb", "静かに"],
    ["嫌い", "negative", "嫌いじゃない"],
    ["きれい", "polite-past", "きれいでした"],
  ])("%s %s → %s", (kanji, form, out) => {
    expect(first(kanji, form)).toBe(out);
  });

  it("changes 来る's reading, not just its okurigana", () => {
    expect(conjugate(word("来る"), "negative")[0]).toEqual({ kanji: "来ない", kana: "こない" });
    expect(conjugate(word("来る"), "polite")[0]).toEqual({ kanji: "来ます", kana: "きます" });
    expect(conjugate(word("来る"), "ba")[0]).toEqual({ kanji: "来れば", kana: "くれば" });
    expect(conjugate(word("来る"), "imperative")[0]).toEqual({ kanji: "来い", kana: "こい" });
    expect(conjugate(word("来る"), "imperative-negative")[0]).toEqual({ kanji: "来るな", kana: "くるな" });
  });

  it("accepts the everyday alternatives", () => {
    expect(acceptedAnswers(word("飲む"), "causative-passive")).toContain("のまされる");
    expect(acceptedAnswers(word("話す"), "causative-passive")).not.toContain("はなさされる");
    expect(acceptedAnswers(word("食べる"), "polite-negative")).toContain("たべないです");
    expect(acceptedAnswers(word("静か"), "polite-negative")).toContain("しずかではありません");
    expect(acceptedAnswers(word("読む"), "progressive")).toContain("よんでる");
    expect(acceptedAnswers(word("食べる"), "progressive")).toContain("たべてる");
  });

  it("gives every word an answer and an explanation for every form it takes", () => {
    for (const w of WORDS) {
      if (w.type !== "na-adj") expect(w.kanji.slice(-1)).toBe(w.kana.slice(-1));
      for (const f of FORMS.filter((f) => appliesTo(f, w))) {
        const answers = conjugate(w, f.id);
        expect(answers.length).toBeGreaterThan(0);
        for (const a of answers) expect(a.kana).toMatch(/^[ぁ-んー]+$/);
        expect(explain(w, f.id)).not.toMatch(/undefined/);
      }
    }
  });

  it("keeps stative verbs out of forms that need intent", () => {
    const pool = questionPool(["potential", "passive"], ["godan"], ["N5"]);
    expect(pool.some((q) => q.word.kanji === "分かる" && q.form.id === "potential")).toBe(false);
    expect(pool.some((q) => q.word.kanji === "降る" && q.form.id === "passive")).toBe(true);
  });
});
