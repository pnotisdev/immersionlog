/*
 * 読書メーター (bookmeter.com) book pages. Page-count, publisher and author
 * extraction and the review-boilerplate prefix ported from Kechimochi
 * (src/importers/bookmeter.ts), MIT License, Copyright (c) 2026 Federico "Morg"
 * Pareschi. Re-verified live 2026-09-23 (fixtures in ./__fixtures__/bookmeter-*.html).
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import { absUrl, blockText, firstInt, loadHtml, og, stripSiteSuffix, text } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter } from "./types";

// Most covers are Amazon's; books users registered by hand host their own.
const COVER_HOSTS = ["m.media-amazon.com", "img.bookmeter.com"];
const PLACEHOLDER_COVER = "https://bookmeter.com/images/common/book.png";

// og:title is "『<title>』｜<variant> - 読書メーター"; three variants seen live.
const TITLE_CLEANUP = [/｜[^｜]*- 読書メーター$/, /^『([\s\S]*)』$/];

// og:description wraps the synopsis in review-page boilerplate on both sides.
const DESCRIPTION_CLEANUP = [
  /^.*?があるので安心。/,
  /読書メーターに投稿された約?[\d,]+件\s*の感想・レビューで本の評判を確認、読書記録を管理することもできます。$/,
];

export function parseBookmeterHtml(html: string, bookId: string, canonicalUrl: string, hintType?: MediaType): ImportResult {
  const $ = loadHtml(html);
  const warnings: string[] = [];

  // og:title is normalized ("ONE PIECE 115巻"); the h1 is the raw product name
  // ("ONE PIECE 115 (ジャンプコミックス)"), so it's only a fallback.
  const ogTitle = og($, "og:title")?.replace(TITLE_CLEANUP[0], "").trim().replace(TITLE_CLEANUP[1], "$1") ?? null;
  const title = (ogTitle && ogTitle.trim()) || text($("h1.inner__title")) || text($("h1"));
  if (!title) throw new ImportError("no_title", bookId);

  const details: Record<string, string> = {};
  const authors = $(".header__authors a")
    .map((_, a) => $(a).text())
    .get()
    .flatMap((t) => t.split(","))
    .map((t) => t.trim())
    .filter(Boolean);
  if (authors.length) details.Author = [...new Set(authors)].join(", ");
  const publisher = text($(".current-book-detail__publisher"))?.replace(/^出版社[：:]\s*/, "");
  if (publisher) details.Publisher = publisher;

  // Assigned inside .each(); the casts stop TS narrowing them to `null` for good.
  let pages = null as number | null;
  let synopsis = null as string | null;
  $("dt.bm-details-side__title").each((_, el) => {
    const dt = $(el);
    const label = dt.text().trim();
    const dd = dt.nextAll("dd").first();
    if (label === "ページ数" && pages == null) pages = firstInt(dd.find("span").first().text() || dd.text());
    if (label === "あらすじ" && synopsis == null) {
      const full = dd.find(".book-summary__default");
      synopsis = full.length ? blockText($, full) : null;
    }
  });
  if (pages) details["Page count"] = String(pages);

  // The synopsis block is complete; og:description is truncated and wrapped in boilerplate.
  let description = synopsis;
  if (!description) {
    const fromOg = stripSiteSuffix(og($, "og:description"), DESCRIPTION_CLEANUP);
    description = fromOg && fromOg.length > 0 ? fromOg : null;
  }

  let coverUrl = absUrl(og($, "og:image") ?? $("a.image__cover img").attr("src"), canonicalUrl);
  if (coverUrl === PLACEHOLDER_COVER) coverUrl = null;
  if (coverUrl && !COVER_HOSTS.includes(new URL(coverUrl).hostname)) {
    coverUrl = null;
    warnings.push("The cover image is on an unexpected host, so it wasn't imported.");
  }

  const mediaType: MediaType = hintType && ["book", "light_novel", "graded_reader", "manga"].includes(hintType) ? hintType : "book";
  const usePages = pages != null && mediaType !== "manga";
  const result: SearchResult = {
    source: "bookmeter",
    sourceId: bookId,
    mediaType,
    title,
    titleNative: null,
    coverUrl,
    bannerUrl: null,
    // Bookmeter shows no release date.
    year: null,
    description: cleanDescription(description),
    externalUrl: canonicalUrl,
    totalAmount: usePages ? pages : null,
    totalUnit: usePages ? "pages" : null,
    metadata: { details },
  };
  return { result, warnings };
}

export const bookmeterImporter: UrlImporter = {
  source: "bookmeter",
  hosts: IMPORT_HOSTS.bookmeter,
  mediaTypes: ["book", "light_novel", "graded_reader"],
  parse(url) {
    const m = /^\/books\/(\d+)\/?$/.exec(url.pathname);
    if (!m) return null;
    return { sourceId: m[1], canonicalUrl: `https://bookmeter.com/books/${m[1]}` };
  },
  async fetch(parsed, { hintType }) {
    const { text: html } = await safeFetchText(parsed.canonicalUrl, { allowedHosts: IMPORT_HOSTS.bookmeter });
    return parseBookmeterHtml(html, parsed.sourceId, parsed.canonicalUrl, hintType);
  },
};
