import { describe, expect, it } from "vitest";
import { findImporter } from "./index";

// Opt-in: `LIVE=1 pnpm test`. Hits the real sites, so it's skipped by default and in CI.
// Calls importer.fetch directly (not importFromUrl) so no database/cache is touched.
const LIVE = process.env.LIVE === "1";

const CASES: [string, string, boolean][] = [
  ["jiten", "https://jiten.moe/decks/media/283/detail", true],
  // IMDb title pages are WAF-blocked from datacenter IPs; the TMDB path needs the key.
  ["imdb", "https://www.imdb.com/title/tt0245429/", !!process.env.TMDB_API_KEY],
  ["bookmeter", "https://bookmeter.com/books/576954", true],
  ["bookwalker", "https://bookwalker.jp/de2d862dce-d55d-4a57-a847-e2f5a5df059f/", true],
  ["cmoa", "https://www.cmoa.jp/title/151961/", true],
  ["shonenjumpplus", "https://shonenjumpplus.com/episode/10833497643049550250", true],
  ["backloggd", "https://backloggd.com/games/persona-5/", true],
  // DMM only serves visitors in Japan.
  ["dmm", "https://dlsoft.dmm.com/detail/views_0001/", process.env.LIVE_DMM === "1"],
];

describe.skipIf(!LIVE)("live importers", () => {
  it.each(CASES)("%s returns a titled row", async (source, url, enabled) => {
    if (!enabled) return;
    const found = findImporter(url);
    expect(found?.importer.source).toBe(source);
    const { result } = await found!.importer.fetch(found!.parsed, {});
    console.info(`[live] ${source}:`, result.title, "|", result.titleNative, "|", result.year, "|", result.coverUrl, "|", result.totalAmount, result.totalUnit, "|", result.sourceId);
    expect(result.title.trim().length).toBeGreaterThan(0);
  }, 30_000);
});
