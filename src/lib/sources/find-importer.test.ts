import { describe, expect, it } from "vitest";
import { matchImporterHost } from "./hosts";
import { findImporter } from "./index";
import { parseJpdbUrl } from "./jpdb";

describe("findImporter", () => {
  it.each([
    "https://bookwalker.jp.evil.com/de2d862dce-d55d-4a57-a847-e2f5a5df059f/",
    "https://evil.com/?u=bookwalker.jp/de2d862dce-d55d-4a57-a847-e2f5a5df059f/",
    "https://evil.com/bookmeter.com/books/1",
    "https://notbookmeter.com/books/1",
    "http://evil.com/books/1",
    "javascript:alert(1)//bookmeter.com/books/1",
    "file:///etc/passwd",
    "https://user:pw@bookmeter.com/books/1",
    "https://bookmeter.com:8443/books/1",
    "not a url",
  ])("rejects %s", (url) => {
    expect(findImporter(url)).toBeNull();
  });

  it("matches exact hosts and upgrades http for known ones", () => {
    const found = findImporter("http://bookmeter.com/books/576954");
    expect(found?.importer.source).toBe("bookmeter");
    expect(found?.url.protocol).toBe("https:");
    expect(found?.parsed).toEqual({ sourceId: "576954", canonicalUrl: "https://bookmeter.com/books/576954" });
  });

  it("returns null for a supported host but an unsupported page", () => {
    expect(findImporter("https://bookmeter.com/users/1")).toBeNull();
    expect(findImporter("https://www.imdb.com/name/nm0000001/")).toBeNull();
  });

  it.each([
    ["https://jiten.moe/decks/media/283/detail", "jiten", "283"],
    ["https://jiten.moe/decks/283", "jiten", "283"],
    ["https://www.imdb.com/de/title/tt0245429/reference?ref_=x", "imdb", "tt0245429"],
    ["https://m.imdb.com/title/tt0877057/", "imdb", "tt0877057"],
    ["https://www.bookwalker.jp/de2d862dce-d55d-4a57-a847-e2f5a5df059f", "bookwalker", "de2d862dce-d55d-4a57-a847-e2f5a5df059f"],
    ["https://bookwalker.jp/series/13002/list/", "bookwalker", "series:13002"],
    ["https://r18.bookwalker.jp/de2d862dce-d55d-4a57-a847-e2f5a5df059f/", "bookwalker", "r18:de2d862dce-d55d-4a57-a847-e2f5a5df059f"],
    ["https://www.cmoa.jp/title/151961/", "cmoa", "151961"],
    ["https://www.cmoa.jp/title/151961/vol/30/", "cmoa", "151961:vol30"],
    ["https://shonenjumpplus.com/episode/10833497643049550250", "shonenjumpplus", "10833497643049550250"],
    ["https://backloggd.com/games/persona-5/", "backloggd", "persona-5"],
    ["https://www.backloggd.com/games/Persona-5", "backloggd", "persona-5"],
    ["https://dlsoft.dmm.com/detail/views_0001/", "dmm", "views_0001"],
    ["https://dlsoft.dmm.co.jp/detail/views_0001/", "dmm", "r18:views_0001"],
  ])("routes %s", (url, source, sourceId) => {
    const found = findImporter(url);
    expect(found?.importer.source).toBe(source);
    expect(found?.parsed.sourceId).toBe(sourceId);
  });

  it("keeps 20-digit Shonen Jump+ ids exact (beyond Number.MAX_SAFE_INTEGER)", () => {
    expect(findImporter("https://shonenjumpplus.com/episode/10833497643049550250")?.parsed.sourceId).toBe("10833497643049550250");
  });
});

describe("matchImporterHost (client hint)", () => {
  it("matches hosts only", () => {
    expect(matchImporterHost("https://bookwalker.jp/anything")).toBe("bookwalker");
    expect(matchImporterHost("https://bookwalker.jp.evil.com/")).toBeNull();
    expect(matchImporterHost("ftp://bookwalker.jp/")).toBeNull();
    expect(matchImporterHost("garbage")).toBeNull();
  });
});

describe("parseJpdbUrl", () => {
  it("accepts media pages only", () => {
    expect(parseJpdbUrl("https://jpdb.io/visual-novel/1234/steins-gate")).toBe("https://jpdb.io/visual-novel/1234/steins-gate");
    expect(parseJpdbUrl("https://jpdb.io/anime/5/x/")).toBe("https://jpdb.io/anime/5/x");
    expect(parseJpdbUrl("https://jpdb.io/search?q=a")).toBeNull();
    expect(parseJpdbUrl("https://jpdb.io.evil.com/anime/5/x")).toBeNull();
    expect(parseJpdbUrl("http://jpdb.io/anime/5/x")).toBeNull();
  });
});
