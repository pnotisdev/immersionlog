import { describe, expect, it } from "vitest";
import { config, isPrivate } from "../proxy";
import { parseTitleParam, slugify, titlePath } from "./title-path";

const ID = "4d674a3a-4e87-41ea-8543-f41f30833fff";

describe("title paths", () => {
  it("slugifies to readable ASCII", () => {
    expect(slugify("Yotsuba&!")).toBe("yotsuba-and");
    expect(slugify("K-ON! Season 2")).toBe("k-on-season-2");
    expect(slugify("Ōkami")).toBe("okami");
    expect(slugify("よつばと!")).toBe("");
  });

  it("falls back to the romaji, then to the bare id", () => {
    expect(titlePath({ id: ID, title: "よつばと!", metadata: { romaji: "Yotsuba to!" } })).toBe(`/titles/yotsuba-to-${ID}`);
    expect(titlePath({ id: ID, title: "よつばと!", metadata: null })).toBe(`/titles/${ID}`);
  });

  it("finds the id after any slug", () => {
    expect(parseTitleParam(`yotsuba-and-${ID}`)).toBe(ID);
    expect(parseTitleParam(ID.toUpperCase())).toBe(ID);
    expect(parseTitleParam("yotsuba")).toBeNull();
  });
});

describe("proxy", () => {
  const matcher = new RegExp(`^${config.matcher[0]}$`);

  it("runs on real pages and skips files, /api and Next internals", () => {
    for (const p of ["/", "/dashboard", "/login", "/u/pnotis", "/titles/x", "/media/abc"]) expect(matcher.test(p)).toBe(true);
    for (const p of ["/api/auth/session", "/_next/static/chunk.js", "/robots.txt", "/sitemap.xml", "/u/pnotis/card.svg"]) {
      expect(matcher.test(p)).toBe(false);
    }
  });

  it("guards only the signed-in app", () => {
    expect(isPrivate("/dashboard")).toBe(true);
    expect(isPrivate("/log/new")).toBe(true);
    expect(isPrivate("/logout-page")).toBe(false);
    expect(isPrivate("/u/pnotis")).toBe(false);
    expect(isPrivate("/titles")).toBe(false);
    expect(isPrivate("/tools/reading-speed")).toBe(false);
    expect(isPrivate("/grammar")).toBe(true);
    expect(isPrivate("/grammar/")).toBe(true);
    expect(isPrivate("/grammar/review")).toBe(true);
    expect(isPrivate("/grammar/learn")).toBe(true);
    expect(isPrivate("/kanji")).toBe(true);
    expect(isPrivate("/kanji/review")).toBe(true);
    expect(isPrivate("/guide/kanji")).toBe(false);
    expect(isPrivate("/grammar/n5")).toBe(false);
    expect(isPrivate("/grammar/n5/n5-desu")).toBe(false);
  });
});
