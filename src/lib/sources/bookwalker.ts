/*
 * BOOK☆WALKER (bookwalker.jp) product pages, with optional routing from any volume or
 * series-list link to volume N. dt/dd field mapping and routeToVolume/findVolumeUrl
 * ported from Kechimochi (src/importers/bookwalker.ts), MIT License,
 * Copyright (c) 2026 Federico "Morg" Pareschi.
 *
 * Re-verified live 2026-09-23: product pages were redesigned (.m-synopsis and
 * .m-main-cover__img are gone; details live in dl.t-c-detail-about-information__data,
 * the full synopsis in JSON-LD Product.description). Series list pages still use the
 * old .m-book-item markup, newest first, 60 per page. The adult store is a separate
 * host (r18.bookwalker.jp) that requires a login, so it can't be imported at all.
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { markAdultCover } from "@/lib/adult-cover";
import { IMPORT_HOSTS } from "./hosts";
import { absUrl, type CheerioAPI, dtDd, firstInt, jsonLd, loadHtml, normalizeDigits, og, stripSiteSuffix, text, uniq } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

const HOST = "bookwalker.jp";
const ADULT_HOST = "r18.bookwalker.jp";
const COVER_HOSTS = ["c.bookwalker.jp", "rimg.bookwalker.jp"];
const MAX_LIST_PAGES = 3;

// og:title is clean; <title> carries " - <category> <authors>：電子書籍試し読み無料 - BOOK☆WALKER -".
const TITLE_SUFFIXES = [/\s+-\s+[^-]*電子書籍試し読み無料\s+-\s+BOOK☆WALKER\s+-\s*$/, /\s*-\s*BOOK☆WALKER\s*-?\s*$/];

function typeFromCategory(category: string | null): MediaType {
  if (!category) return "book";
  if (/マンガ|漫画|コミック/.test(category)) return "manga";
  if (/ライトノベル|新文芸/.test(category)) return "light_novel";
  return "book";
}

/** A title contains volume N as a standalone number (full-width digits allowed). */
export function titleHasVolume(title: string, volume: number): boolean {
  return new RegExp(`(?:[^0-9]|^)0*${volume}(?:[^0-9]|$)`).test(normalizeDigits(title));
}

function toRoman(n: number): string | null {
  if (n < 1 || n > 39) return null;
  const tens = "X".repeat(Math.floor(n / 10));
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][n % 10];
  return tens + ones;
}

/**
 * Some series number volumes in Roman numerals (本好きの下剋上: 「兵士の娘II」), ASCII or
 * the full-width Ⅰ–Ⅻ block. Standalone only, so "II" never matches inside "XII".
 */
export function titleHasRomanVolume(title: string, volume: number): boolean {
  const roman = toRoman(volume);
  if (!roman) return false;
  const fullWidth = volume <= 12 ? String.fromCharCode(0x215f + volume) : null;
  if (fullWidth && title.includes(fullWidth)) return true;
  return new RegExp(`(?:[^A-Za-zⅠ-Ⅻ]|^)${roman}(?:[^A-Za-zⅠ-Ⅻ]|$)`).test(title);
}

export interface ListedVolume {
  title: string;
  href: string;
}

/** Volume links on one series list page, in page order (newest first). */
export function listedVolumes($: CheerioAPI, base: string): ListedVolume[] {
  return $(".m-book-item__title a")
    .map((_, a) => ({ title: $(a).text().trim(), href: absUrl($(a).attr("href"), base) }))
    .get()
    .filter((m): m is ListedVolume => !!m.href);
}

/**
 * Pure: volume N from a newest-first series list, or null. Arabic numbers first, then
 * Roman numerals. When several titles match (a series whose parts each restart at
 * 「…I」, 「…II」), the oldest wins: "volume N" means the first volume whose title
 * carries N. That's not always the Nth book of a multi-part series (本好き 第二部「IV」
 * is book 7), but the list gives no series ordinal to do better. Free promo copies
 * ("【期間限定無料】 3") only win when nothing else matches.
 */
export function findVolumeUrl(items: ListedVolume[], volume: number): string | null {
  for (const matches of [titleHasVolume, titleHasRomanVolume]) {
    const hits = items.filter((m) => matches(m.title, volume));
    const real = hits.filter((m) => !m.title.includes("期間限定無料"));
    const best = real[real.length - 1] ?? hits[hits.length - 1];
    if (best) return best.href;
  }
  return null;
}

export function parseBookwalkerHtml(html: string, productId: string, canonicalUrl: string, hintType?: MediaType): ImportResult {
  const $ = loadHtml(html);
  const warnings: string[] = [];
  const product = jsonLd($, ["Product"]);

  const title =
    og($, "og:title") ??
    text($("h1.t-c-product-main-data__title")) ??
    (typeof product?.name === "string" ? product.name.trim() : null) ??
    stripSiteSuffix($("title").text(), TITLE_SUFFIXES);
  if (!title) throw new ImportError("no_title", productId);

  // Scoped: the author-profile, price and ranking sections reuse dt/dd.
  const dl = dtDd($, "dl.t-c-detail-about-information__data");
  const details: Record<string, string> = {};
  const first = (label: string) => {
    const dd = dl.get(label);
    return dd ? (text(dd.find("a")) ?? text(dd)) : null;
  };
  const series = first("シリーズ")?.replace(/\(著者\)/g, "").trim();
  if (series) details.Series = series;
  const authorDd = dl.get("著者");
  if (authorDd) {
    const names = uniq(authorDd.find("a").map((_, a) => $(a).text().replace(/\([^()]*\)/g, "")).get());
    if (names.length) details.Author = names.join(", ");
  }
  const publisher = first("出版社") ?? (product?.brand as { name?: string } | undefined)?.name;
  if (publisher) details.Publisher = publisher;
  const label = first("レーベル");
  if (label && !/^[―-]+$/.test(label)) details.Label = label;
  const release = first("配信開始日");
  if (release) details.Released = release;
  const pagesDd = dl.get("ページ概数") ?? dl.get("ページ数");
  // The page-count dd also holds a help modal; the number is the button text.
  const pages = pagesDd ? firstInt(pagesDd.find("button").first().text() || pagesDd.text()) : null;
  if (pages) details["Page count"] = String(pages);
  const category = first("カテゴリ") ?? (typeof product?.category === "string" ? product.category : null);

  const rating = $('meta[name="rating"]').attr("content")?.toLowerCase();
  const adult = !!rating && rating !== "general";

  const description =
    (typeof product?.description === "string" ? product.description : null) ??
    text($("p.js-synopsis-accordion-main-text")) ??
    og($, "og:description");

  // rimg.bookwalker.jp (JSON-LD / lazy img) first: the og:image host, c.bookwalker.jp,
  // serves covers as binary/octet-stream.
  const ldImage = typeof product?.image === "string" ? product.image : null;
  let coverUrl = absUrl(ldImage ?? $(".t-c-book-cover-main img").attr("data-lazy-src") ?? og($, "og:image"), canonicalUrl);
  if (coverUrl && !COVER_HOSTS.includes(new URL(coverUrl).hostname)) {
    coverUrl = null;
    warnings.push("The cover image is on an unexpected host, so it wasn't imported.");
  }

  const mediaType = hintType ?? typeFromCategory(category);
  const usePages = pages != null && (mediaType === "book" || mediaType === "light_novel");
  const result: SearchResult = {
    source: "bookwalker",
    sourceId: productId,
    mediaType,
    title,
    titleNative: null,
    coverUrl: adult ? markAdultCover(coverUrl) : coverUrl,
    bannerUrl: null,
    year: yearFrom(release ?? null),
    description: cleanDescription(description),
    externalUrl: canonicalUrl,
    totalAmount: usePages ? pages : null,
    totalUnit: usePages ? "pages" : null,
    metadata: { details, ...(adult ? { adult: true } : {}) },
  };
  return { result, warnings };
}

async function fetchPage(url: string) {
  return (await safeFetchText(url, { allowedHosts: [HOST] })).text;
}

/** Collect a series list (up to MAX_LIST_PAGES pages, so the oldest volumes are seen) and pick volume N. */
async function routeToVolume(seriesListUrl: string, volume: number): Promise<string | null> {
  const items: ListedVolume[] = [];
  let url: string | null = seriesListUrl;
  for (let page = 0; url && page < MAX_LIST_PAGES; page++) {
    const $ = loadHtml(await fetchPage(url));
    items.push(...listedVolumes($, url));
    url = absUrl($(".o-pager-next a").attr("href"), url);
  }
  return findVolumeUrl(items, volume);
}

const PRODUCT_PATH = /^\/(de[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\/?$/i;
const SERIES_PATH = /^\/series\/(\d+)(?:\/list)?\/?$/;

export const bookwalkerImporter: UrlImporter = {
  source: "bookwalker",
  hosts: IMPORT_HOSTS.bookwalker,
  mediaTypes: ["manga", "light_novel", "book"],
  parse(url) {
    const host = url.hostname.toLowerCase();
    const product = PRODUCT_PATH.exec(url.pathname);
    if (product) {
      const id = product[1].toLowerCase();
      if (host === ADULT_HOST) return { sourceId: `r18:${id}`, canonicalUrl: `https://${ADULT_HOST}/${id}/` };
      return { sourceId: id, canonicalUrl: `https://${HOST}/${id}/` };
    }
    const series = SERIES_PATH.exec(url.pathname);
    if (series && host !== ADULT_HOST) return { sourceId: `series:${series[1]}`, canonicalUrl: `https://${HOST}/series/${series[1]}/list/` };
    return null;
  },
  async fetch(parsed, { hintType, volume }) {
    if (parsed.sourceId.startsWith("r18:")) {
      throw new ImportError("adult_disabled", parsed.sourceId, "BOOK☆WALKER's adult store needs a login, so its links can't be imported.");
    }
    const warnings: string[] = [];
    let productUrl: string | null = parsed.sourceId.startsWith("series:") ? null : parsed.canonicalUrl;
    let html = productUrl ? await fetchPage(productUrl) : null;

    const wanted = volume ?? (productUrl ? undefined : 1);
    if (wanted !== undefined) {
      if (!productUrl && volume === undefined) warnings.push("That's a series link, so volume 1 was used. Enter a volume number to pick another.");
      let seriesUrl: string | null = productUrl ? null : parsed.canonicalUrl;
      if (html) {
        const $ = loadHtml(html);
        seriesUrl = absUrl($('a[href*="/series/"][href$="/list/"]').first().attr("href"), parsed.canonicalUrl);
      }
      const routed = seriesUrl && new URL(seriesUrl).hostname === HOST ? await routeToVolume(seriesUrl, wanted) : null;
      if (!routed || new URL(routed).hostname !== HOST || !PRODUCT_PATH.test(new URL(routed).pathname)) {
        // Failing beats quietly importing the wrong volume (and caching it for a week).
        throw new ImportError("not_found", `volume ${wanted}`, `Couldn't find volume ${wanted} in that series. Leave the volume empty to import the page you linked.`);
      }
      productUrl = routed;
      html = await fetchPage(routed);
    }

    const id = PRODUCT_PATH.exec(new URL(productUrl!).pathname)![1].toLowerCase();
    const out = parseBookwalkerHtml(html!, id, `https://${HOST}/${id}/`, hintType);
    out.warnings.unshift(...warnings);
    return out;
  },
};
