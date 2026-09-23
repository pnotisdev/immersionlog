import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { deckToResult, type JitenDeck, jitenStats, searchJitenDecks } from "./jiten";

const fixture = (name: string) => JSON.parse(readFileSync(join(__dirname, "__fixtures__", name), "utf8"));
const deck = (over: Partial<JitenDeck> = {}): JitenDeck => ({
  deckId: 1,
  parentDeckId: null,
  originalTitle: "x",
  romajiTitle: null,
  englishTitle: null,
  mediaType: 7,
  coverName: null,
  childrenDeckCount: 0,
  ...over,
});

describe("searchJitenDecks fallback chain", () => {
  function recorder(hits: Record<string, JitenDeck[]>) {
    const calls: [string, number | undefined][] = [];
    const run = async (q: string, t: number | undefined) => {
      calls.push([q, t]);
      return hits[`${q}|${t ?? ""}`] ?? [];
    };
    return { calls, run };
  }

  it("tries typed, then untyped, then strips punctuation, digits and trailing words", async () => {
    const { calls, run } = recorder({ "Steins Gate|": [deck({ deckId: 283 })] });
    const out = await searchJitenDecks("Steins;Gate 0", "visual_novel", run);
    expect(calls).toEqual([
      ["Steins;Gate 0", 7],
      ["Steins;Gate 0", undefined],
      ["Steins Gate 0", 7],
      ["Steins Gate 0", undefined],
      ["Steins Gate", 7],
      ["Steins Gate", undefined],
    ]);
    expect(out[0].deckId).toBe(283);
  });

  it("handles full-width punctuation, digits and spaces", async () => {
    const { calls, run } = recorder({ "本好きの下剋上|4": [deck()] });
    await searchJitenDecks("本好きの下剋上　第一部（１）", "light_novel", run);
    expect(calls.map((c) => c[0])).toContain("本好きの下剋上 第一部 １");
    expect(calls.map((c) => c[0])).toContain("本好きの下剋上 第一部");
  });

  it("drops at most three trailing words, then gives up", async () => {
    const { calls, run } = recorder({});
    expect(await searchJitenDecks("a b c d e", null, run)).toEqual([]);
    expect(calls.map((c) => c[0])).toEqual(["a b c d e", "a b c d", "a b c", "a b"]);
    expect(calls.every((c) => c[1] === undefined)).toBe(true); // unmapped/no type → no filter
  });
});

describe("Jiten stats and import", () => {
  it("prefers the child's numbers and falls back to the series', noting which", () => {
    const stats = jitenStats(deck({ deckId: 2, parentDeckId: 1, characterCount: 100, difficultyRaw: -1 }), deck({ characterCount: 999, wordCount: 50, difficultyRaw: 3.456 }));
    expect(stats).toMatchObject({ deckId: 2, parentDeckId: 1, characterCount: 100, wordCount: 50, difficulty: 3.46 });
    expect(stats.fromSeries).toEqual(["wordCount", "difficulty"]);
  });

  it("imports a sparse child deck using the parent's title, cover, year and description", () => {
    const { data } = fixture("jiten-detail-child.json");
    const { result, warnings } = deckToResult(data.mainDeck, data.parentDeck);
    expect(result.sourceId).toBe("40964");
    expect(result.mediaType).toBe("anime");
    expect(result.title).toBe("Frieren: Beyond Journey’s End – Episode 1");
    expect(result.titleNative).toBe("葬送のフリーレン Episode 1");
    expect(result.coverUrl).toBe("https://cdn.jiten.moe/40963/cover.jpg");
    expect(result.year).toBe(2023);
    expect(result.externalUrl).toBe("https://jiten.moe/decks/media/40964/detail");
    // Anime are tracked in episodes, so the character count is a stat, not the total.
    expect(result.totalAmount).toBeNull();
    expect((result.metadata?.jiten as { characterCount: number }).characterCount).toBe(3373);
    expect(warnings).toContain("Using the series description.");
  });

  it("uses the character count as a VN's total", () => {
    const search = fixture("jiten-search.json");
    const sg = search.data.find((d: JitenDeck) => d.mediaType === 7);
    const { result } = deckToResult(sg, null);
    expect(result.mediaType).toBe("visual_novel");
    expect(result.totalUnit).toBe("characters");
    expect(result.totalAmount).toBe(sg.characterCount);
    expect((result.metadata?.details as Record<string, string>)["Jiten difficulty"]).toMatch(/^\d\.\d\d \/ 5$/);
  });
});
