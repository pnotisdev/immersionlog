import { describe, expect, it } from "vitest";
import { absUrl, collapseLines, dtDd, firstInt, jsonLd, loadHtml, normalizeDigits, og, stripSiteSuffix } from "./html";

describe("html helpers", () => {
  it("resolves relative and protocol-relative URLs to https", () => {
    expect(absUrl("//cmoa.akamaized.net/a.jpg", "https://www.cmoa.jp/title/1/")).toBe("https://cmoa.akamaized.net/a.jpg");
    expect(absUrl("/b.jpg", "https://bookwalker.jp/de1/")).toBe("https://bookwalker.jp/b.jpg");
    expect(absUrl("http://img.bookmeter.com/c.png", "https://bookmeter.com/")).toBe("https://img.bookmeter.com/c.png");
    expect(absUrl("javascript:alert(1)", "https://bookmeter.com/")).toBeNull();
    expect(absUrl("", "https://bookmeter.com/")).toBeNull();
  });

  it("reads og tags with a name= fallback", () => {
    const $ = loadHtml('<meta name="og:title" content=" A "><meta property="og:image" content="">');
    expect(og($, "og:title")).toBe("A");
    expect(og($, "og:image")).toBeNull();
  });

  it("finds JSON-LD nodes in arrays and @graph, skipping malformed blocks", () => {
    const $ = loadHtml(`
      <script type="application/ld+json">{ not json</script>
      <script type="application/ld+json">[{"@type":"WebSite"},{"@graph":[{"@type":["Thing","Book"],"name":"B"}]}]</script>`);
    expect(jsonLd($, ["Book"])?.name).toBe("B");
    expect(jsonLd($, ["Movie"])).toBeNull();
  });

  it("pairs dt/dd within the first matching scope", () => {
    const $ = loadHtml("<dl class=a><dt> 著者 </dt><dd>X</dd></dl><dl class=a><dt>著者</dt><dd>Y</dd></dl>");
    expect(dtDd($, "dl.a").get("著者")?.text()).toBe("X");
  });

  it("normalizes digits, numbers and whitespace", () => {
    expect(normalizeDigits("第１２巻")).toBe("第12巻");
    expect(firstInt("約1,234ページ")).toBe(1234);
    expect(firstInt("なし")).toBeNull();
    expect(collapseLines("a  b\n\n\n\n\nc")).toBe("a b\n\n\nc");
    expect(stripSiteSuffix("X - BOOK☆WALKER -", [/\s*-\s*BOOK☆WALKER\s*-?\s*$/])).toBe("X");
  });
});
