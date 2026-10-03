import { describe, expect, it } from "vitest";
import { allPoints } from "./decks";
import { alignReading, unmark } from "./sentence";
import { chunkBoundaries, MAX_TILES, MIN_TILES, scrambled, tilesFromBoundaries } from "./tiles";

const sentences = allPoints().flatMap((p) => p.sentences);

describe("sentence tiles", () => {
  const built = sentences.flatMap((s) => {
    const b = chunkBoundaries(s);
    return b ? [{ s, tiles: tilesFromBoundaries(s, b) }] : [];
  });

  it("make a puzzle out of most sentences", () => {
    expect(built.length / sentences.length).toBeGreaterThan(0.5);
  });

  it("put the sentence back together exactly", () => {
    for (const { s, tiles } of built) {
      expect(tiles.map((t) => t.text).join(""), s.id).toBe(unmark(s.japanese));
      expect(tiles.length, s.id).toBeGreaterThanOrEqual(MIN_TILES);
      expect(tiles.length, s.id).toBeLessThanOrEqual(MAX_TILES);
      for (const t of tiles) {
        expect(t.text, s.id).not.toBe("");
        expect(t.tokens.map((x) => x.text).join(""), s.id).toBe(t.text);
      }
    }
  });

  it("keep every kanji with its reading", () => {
    for (const { s, tiles } of built) {
      const whole = (alignReading(s.japanese, s.reading) ?? []).filter((t) => t.ruby).map((t) => t.text + t.ruby);
      const inTiles = tiles.flatMap((t) => t.tokens).filter((t) => t.ruby).map((t) => t.text + t.ruby);
      expect(inTiles, s.id).toEqual(whole);
    }
  });

  it("scramble the same way every time, and never in order", () => {
    for (const { s, tiles } of built.slice(0, 300)) {
      const a = scrambled(tiles, s.id);
      expect(a.map((t) => t.id)).toEqual(scrambled(tiles, s.id).map((t) => t.id));
      expect(a.every((t, i) => t.id === i), s.id).toBe(false);
      expect([...a].sort((x, y) => x.id - y.id).map((t) => t.id)).toEqual(tiles.map((t) => t.id));
    }
  });
});
