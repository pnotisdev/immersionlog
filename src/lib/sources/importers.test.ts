import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { parseBackloggdHtml } from "./backloggd";
import { parseBookmeterHtml } from "./bookmeter";
import { findVolumeUrl, listedVolumes, parseBookwalkerHtml } from "./bookwalker";
import { CMOA_PROMO_PREFIX, parseCmoaHtml } from "./cmoa";
import { parseDmmHtml } from "./dmm";
import { loadHtml } from "./html";
import { parseImdbHtml, parseISO8601Duration, pickFindResult } from "./imdb";
import { parseSjpEpisodeHtml, parseSjpRss, sjpToResult } from "./shonenjumpplus";
import { ImportError } from "./types";

const fixture = (name: string) => readFileSync(join(__dirname, "__fixtures__", name), "utf8");
const json = (name: string) => JSON.parse(fixture(name));

describe("Bookmeter", () => {
  it("parses a novel: title without boilerplate, pages, publisher, authors", () => {
    const { result } = parseBookmeterHtml(fixture("bookmeter-novel.html"), "576954", "https://bookmeter.com/books/576954");
    expect(result.title).not.toMatch(/読書メーター|『|』/);
    expect(result.title.length).toBeGreaterThan(0);
    expect(result.totalUnit).toBe("pages");
    expect(result.totalAmount).toBeGreaterThan(0);
    expect(result.coverUrl).toMatch(/^https:\/\/m\.media-amazon\.com\//);
    const details = result.metadata?.details as Record<string, string>;
    expect(details.Publisher).toBeTruthy();
    expect(details.Publisher).not.toMatch(/出版社/);
    expect(details.Author).toBeTruthy();
    expect(result.description ?? "").not.toMatch(/があるので安心|読書メーターに投稿された/);
  });

  it("honours the type hint", () => {
    const { result } = parseBookmeterHtml(fixture("bookmeter-lightnovel.html"), "8966902", "https://bookmeter.com/books/8966902", "light_novel");
    expect(result.mediaType).toBe("light_novel");
    expect(result.totalUnit).toBe("pages");
  });

  it("splits comma-joined authors (seen live on multi-author books)", () => {
    const html = `<meta property="og:title" content="『涼宮ハルヒの憂鬱』｜感想・レビュー - 読書メーター">
      <ul class="header__authors"><li><a href="/a">谷川 流,いとう のいぢ,ツガノ ガク</a></li></ul>`;
    const { result } = parseBookmeterHtml(html, "1", "https://bookmeter.com/books/1");
    expect(result.title).toBe("涼宮ハルヒの憂鬱");
    expect((result.metadata?.details as Record<string, string>).Author).toBe("谷川 流, いとう のいぢ, ツガノ ガク");
  });

  it("keeps manga page counts out of the total (manga track chapters)", () => {
    const { result } = parseBookmeterHtml(fixture("bookmeter-manga.html"), "23418425", "https://bookmeter.com/books/23418425", "manga");
    expect(result.totalAmount).toBeNull();
  });

  it("handles a book with no synopsis, no publisher and the placeholder cover", () => {
    const { result } = parseBookmeterHtml(fixture("bookmeter-no-description.html"), "3964170", "https://bookmeter.com/books/3964170");
    expect(result.title.length).toBeGreaterThan(0);
    expect(result.coverUrl).toBeNull();
    expect(result.description).toBeNull();
  });
});

describe("BookWalker", () => {
  it("parses a manga volume from the scoped details list", () => {
    const { result } = parseBookwalkerHtml(
      fixture("bookwalker-manga-volume.html"),
      "de2d862dce-d55d-4a57-a847-e2f5a5df059f",
      "https://bookwalker.jp/de2d862dce-d55d-4a57-a847-e2f5a5df059f/",
    );
    expect(result.mediaType).toBe("manga");
    expect(result.title).toContain("本好きの下剋上");
    expect(result.coverUrl).toMatch(/^https:\/\/rimg\.bookwalker\.jp\//);
    const d = result.metadata?.details as Record<string, string>;
    expect(d.Author).toBe("鈴華, 香月美夜, 椎名優");
    expect(d.Publisher).toBe("TOブックス");
    expect(d["Page count"]).toBe("179");
    expect(d.Label).toBeUndefined(); // "――"
    // Manga track chapters, so the page count is a detail, not the total.
    expect(result.totalAmount).toBeNull();
    expect(result.year).toBe(2026);
  });

  it("uses the page count as the total for a light novel", () => {
    const { result } = parseBookwalkerHtml(fixture("bookwalker-lightnovel.html"), "x", "https://bookwalker.jp/x/");
    expect(result.mediaType).toBe("light_novel");
    expect(result.totalAmount).toBe(394);
    expect(result.totalUnit).toBe("pages");
  });

  it("finds volume N on a series list, preferring real volumes over free promo copies", () => {
    const items = listedVolumes(loadHtml(fixture("bookwalker-series-list.html")), "https://bookwalker.jp/series/13002/list/");
    expect(findVolumeUrl(items, 115)).toBe("https://bookwalker.jp/ded59aa74b-6ec2-4228-b965-36e6a34a653c/");
    // Only the promo copy of volume 3 is on this page, so it's the fallback.
    expect(findVolumeUrl(items, 3)).toBe("https://bookwalker.jp/de359c5517-f366-4c64-a441-567f216f20e1/");
    expect(findVolumeUrl(items, 999)).toBeNull();
  });

  it("matches full-width volume numbers", () => {
    const items = listedVolumes(
      loadHtml('<p class="m-book-item__title"><a href="/deaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/">作品 １２</a></p>'),
      "https://bookwalker.jp/series/1/list/",
    );
    expect(findVolumeUrl(items, 12)).toContain("/deaaaaaaaa-");
    expect(findVolumeUrl(items, 1)).toBeNull();
  });

  it("falls back to Roman-numeral volumes, standalone only, oldest match first", () => {
    // Newest first, as BookWalker lists them: each part restarts at 「…I」.
    const titles = ["第二部「神殿の巫女見習いII」", "第二部「神殿の巫女見習いI」", "第一部「兵士の娘XII」", "第一部「兵士の娘Ⅲ」", "第一部「兵士の娘II」", "第一部「兵士の娘I」"];
    const items = titles.map((t, i) => ({ title: `本好きの下剋上 ${t}`, href: `https://bookwalker.jp/v${i}/` }));
    expect(findVolumeUrl(items, 2)).toBe("https://bookwalker.jp/v4/");
    expect(findVolumeUrl(items, 1)).toBe("https://bookwalker.jp/v5/");
    expect(findVolumeUrl(items, 3)).toBe("https://bookwalker.jp/v3/");
    expect(findVolumeUrl(items, 12)).toBe("https://bookwalker.jp/v2/");
  });

  it("marks the cover adult when the page isn't rated general", () => {
    const html = fixture("bookwalker-lightnovel.html").replace('name="rating" content="general"', 'name="rating" content="adult"');
    const { result } = parseBookwalkerHtml(html, "x", "https://bookwalker.jp/x/");
    expect(result.metadata?.adult).toBe(true);
    expect(result.coverUrl).toMatch(/^https:\/\/rimg\.bookwalker\.jp\/.*#adult$/);
  });
});

describe("Cmoa", () => {
  it("normalizes to the series title for manga", () => {
    const { result, warnings } = parseCmoaHtml(fixture("cmoa-series.html"), "151961", "https://www.cmoa.jp/title/151961/", { seriesLevel: true });
    expect(result.title).toBe("呪術廻戦");
    expect(result.mediaType).toBe("manga");
    expect(result.coverUrl).toMatch(/^https:\/\/cmoa\.akamaized\.net\//);
    const d = result.metadata?.details as Record<string, string>;
    expect(d.Author).toBe("芥見下々");
    expect(d.Publisher).toBe("集英社");
    expect(d.Rating).toBe("4.6 / 5 (Cmoa)");
    expect(d.ISBN).toBeUndefined(); // volume 1's ISBN isn't the series'
    expect(result.year).toBe(2018);
    expect(warnings.join(" ")).toMatch(/volume 1/);
  });

  it("keeps a volume as its own row with its ISBN, stripping the page-number prefix", () => {
    const { result } = parseCmoaHtml(fixture("cmoa-volume.html"), "151961:vol30", "https://www.cmoa.jp/title/151961/vol/30/", {
      seriesLevel: false,
      hintType: "light_novel",
    });
    expect(result.title).toBe("呪術廻戦 30");
    expect(result.metadata?.isbn).toBe("9784088843780");
  });

  it("flags the adult section and marks its cover for blurring", () => {
    // The fixture's cover is a placeholder on an unexpected host, so it's dropped;
    // swap in a real-host URL to check the marking.
    const html = fixture("cmoa-adult.html").replaceAll("https://example.invalid/placeholder.jpg", "https://cmoa.akamaized.net/data/image/x.jpg");
    const { result } = parseCmoaHtml(html, "1101238498", "https://www.cmoa.jp/title/1101238498/", { seriesLevel: true });
    expect(result.metadata?.adult).toBe(true);
    expect(result.coverUrl).toBe("https://cmoa.akamaized.net/data/image/x.jpg#adult");
    expect(result.title).not.toContain("NEW");
  });

  it("strips every promo-prefix variant seen live, including titles containing 巻", () => {
    const cases: [string, string][] = [
      ["コミックシーモアなら無料で試し読み！呪術廻戦 1巻｜本文", "本文"],
      ["コミックシーモアなら期間限定1巻無料！無職転生 ～異世界行ったら本気だす～ 1巻 本文", "本文"],
      ["コミックシーモアなら無料で試し読み！本好きの下剋上～第一部「兵士の娘I」｜本文", "本文"],
      ["コミックシーモアなら無料で試し読み！竜巻の子 1巻｜本文", "本文"],
    ];
    for (const [input, expected] of cases) expect(input.replace(CMOA_PROMO_PREFIX, "").trim()).toBe(expected);
  });
});

describe("Shonen Jump+", () => {
  it("resolves two episodes of one series to the same sourceId", () => {
    const a = parseSjpEpisodeHtml(fixture("sjp-episode.html"), "https://shonenjumpplus.com/episode/10833497643049550250");
    const b = parseSjpEpisodeHtml(fixture("sjp-episode-same-series.html"), "https://shonenjumpplus.com/episode/10833497643049550405");
    expect(a.seriesId).toBe("10833497643049550249");
    expect(b.seriesId).toBe(a.seriesId);
    expect(a.rssUrl).toBe("https://shonenjumpplus.com/rss/series/10833497643049550249");
    expect(a.coverUrl).toMatch(/^https:\/\/cdn-ak-img\.shonenjumpplus\.com\/public\/series-thumbnail\//);
  });

  it("reads the feed: series title, author and the oldest pubDate", () => {
    const feed = parseSjpRss(fixture("sjp-rss.xml"));
    expect(feed.title).toBe("SOUL CATCHER(S)");
    expect(feed.author).toBe("神海英雄");
    expect(feed.oldestPubDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const page = parseSjpEpisodeHtml(fixture("sjp-episode.html"), "https://shonenjumpplus.com/episode/10833497643049550250");
    const { result } = sjpToResult(page, feed, "10833497643049550250", "https://shonenjumpplus.com/episode/10833497643049550250");
    expect(result.sourceId).toBe("10833497643049550249");
    expect(result.title).toBe("SOUL CATCHER(S)");
    expect(result.mediaType).toBe("manga");
    expect(result.year).toBe(Number(feed.oldestPubDate!.slice(0, 4)));
  });

  it("falls back to the episode id with a warning when no series is found", () => {
    const { result, warnings } = sjpToResult(
      { seriesId: null, seriesTitle: "X", author: null, rssUrl: null, coverUrl: null, description: null },
      null,
      "123456789",
      "https://shonenjumpplus.com/episode/123456789",
    );
    expect(result.sourceId).toBe("episode:123456789");
    expect(warnings.length).toBeGreaterThan(0);
  });
});

describe("Backloggd", () => {
  it("parses title, 2x IGDB cover, deduplicated details and companies", () => {
    const { result } = parseBackloggdHtml(fixture("backloggd-game.html"), "persona-5", "https://backloggd.com/games/persona-5/");
    expect(result.title).toBe("Persona 5");
    expect(result.coverUrl).toMatch(/^https:\/\/images\.igdb\.com\/.*t_cover_big_2x/);
    expect(result.year).toBe(2016);
    const d = result.metadata?.details as Record<string, string>;
    expect(d.Platforms.split(", ").length).toBe(new Set(d.Platforms.split(", ")).size);
    expect(d.Companies.split(", ").length).toBe(new Set(d.Companies.split(", ")).size);
    expect(d.Genres).toBeTruthy();
  });

  it("strips a (TBD) suffix and reads the Upcoming row", () => {
    const { result } = parseBackloggdHtml(fixture("backloggd-game-2.html"), "the-elder-scrolls-vi", "https://backloggd.com/games/the-elder-scrolls-vi/");
    expect(result.title).toBe("The Elder Scrolls VI");
    expect(result.year).toBeNull();
  });

  it("treats the soft-404 page as not found", () => {
    expect(() => parseBackloggdHtml("<title>Game not found</title>", "x", "https://backloggd.com/games/x/")).toThrow(ImportError);
  });
});

describe("DMM (synthetic fixture)", () => {
  it("parses table rows and never imports a cover", () => {
    const { result, warnings } = parseDmmHtml(fixture("dmm-general-synthetic.html"), "example_0001", "https://dlsoft.dmm.com/detail/example_0001/", {
      adult: false,
      hintType: "visual_novel",
    });
    expect(result.title).toBe("サンプルゲームタイトル");
    expect(result.mediaType).toBe("visual_novel");
    expect(result.coverUrl).toBeNull();
    expect(result.year).toBe(2023);
    expect(result.description).not.toContain("もっと見る");
    const d = result.metadata?.details as Record<string, string>;
    expect(d).toMatchObject({ Series: "サンプルシリーズ", Developer: "サンプルメーカー", Genres: "アドベンチャー", "Voice acting": "あり" });
    expect(warnings).toContain("DMM covers aren't imported.");
  });
});

describe("IMDb", () => {
  it("parses ISO 8601 durations to minutes", () => {
    expect(parseISO8601Duration("PT2H5M")).toBe(125);
    expect(parseISO8601Duration("PT45M")).toBe(45);
    expect(parseISO8601Duration("PT")).toBeNull();
    expect(parseISO8601Duration("garbage")).toBeNull();
  });

  it("maps TMDB /find to the same row TMDB search produces", () => {
    const movie = pickFindResult(json("tmdb-find-movie.json"))!;
    expect(movie.source).toBe("tmdb");
    expect(movie.sourceId).toBe("movie:129");
    expect(movie.mediaType).toBe("movie");
    const tv = pickFindResult(json("tmdb-find-tv.json"), "anime")!;
    expect(tv.sourceId).toBe("tv:13916");
    expect(tv.mediaType).toBe("anime");
  });

  it("falls back to JSON-LD for a TVSeries (synthetic: IMDb blocks this server)", () => {
    const { result } = parseImdbHtml(fixture("imdb-tvseries-synthetic.html"), "tt0877057", "https://www.imdb.com/title/tt0877057/");
    expect(result.source).toBe("imdb");
    expect(result.mediaType).toBe("series");
    expect(result.title).toBe("Death Note");
    expect(result.year).toBe(2006);
    expect((result.metadata?.links as Record<string, string>).imdb).toBe("https://www.imdb.com/title/tt0877057/");
  });

  it("fails with the TMDB hint when there's no JSON-LD (the WAF challenge page)", () => {
    expect(() => parseImdbHtml("<html><title>challenge</title></html>", "tt1", "https://www.imdb.com/title/tt1/")).toThrow(/TMDB_API_KEY/);
  });
});
