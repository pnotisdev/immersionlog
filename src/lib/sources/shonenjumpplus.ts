/*
 * 少年ジャンプ+ episode links, deduplicated at series level. RSS handling and
 * extractOldestPubDate ported from Kechimochi (src/importers/shonenjumpplus.ts), MIT
 * License, Copyright (c) 2026 Federico "Morg" Pareschi.
 *
 * Verified live 2026-09-23: episode and series ids are 19–20 digit numbers (beyond
 * Number.MAX_SAFE_INTEGER, so strings throughout). There is no series page
 * (/series/<id> is a 404); the series id comes from the page's #episode-json blob or
 * its RSS link (https://shonenjumpplus.com/rss/series/<seriesId>). Every episode of a
 * series therefore maps to one row.
 */
import "server-only";
import { IMPORT_HOSTS } from "./hosts";
import { absUrl, type CheerioAPI, loadHtml, loadXml, og, stripSiteSuffix, text } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

const HOST = "shonenjumpplus.com";
const COVER_HOSTS = ["cdn-ak-img.shonenjumpplus.com"];

// "[op.1]SOUL CATCHER(S) - 神海英雄 | 少年ジャンプ＋"
const OG_TITLE = /^\[[^\]]+\](.+) - (.+) \| 少年ジャンプ＋$/;

interface EpisodeJson {
  readableProduct?: { series?: { id?: string; title?: string } };
}

export interface SjpEpisodePage {
  seriesId: string | null;
  seriesTitle: string | null;
  author: string | null;
  rssUrl: string | null;
  coverUrl: string | null;
  description: string | null;
}

function episodeJson($: CheerioAPI): EpisodeJson | null {
  const raw = $("#episode-json").attr("data-value");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as EpisodeJson;
  } catch {
    return null;
  }
}

/** Pure: what the episode page itself says about its series. */
export function parseSjpEpisodeHtml(html: string, pageUrl: string): SjpEpisodePage {
  const $ = loadHtml(html);
  const series = episodeJson($)?.readableProduct?.series;
  const rssHref = $('link[rel="alternate"][type="application/rss+xml"]')
    .map((_, el) => $(el).attr("href"))
    .get()
    .find((h) => !h.includes("free_only"));
  const rssUrl = absUrl(rssHref, pageUrl);
  const rssSeriesId = rssUrl ? /\/rss\/series\/(\d+)/.exec(new URL(rssUrl).pathname)?.[1] ?? null : null;
  const seriesId = (series?.id && /^\d+$/.test(series.id) ? series.id : null) ?? rssSeriesId;

  const ogTitle = OG_TITLE.exec(og($, "og:title") ?? "");
  // meta[name=thumbnail] is the series thumbnail straight from the CDN; the
  // .series-header-image-wrapper img is the same picture behind a resizing proxy.
  const coverUrl = absUrl($('meta[name="thumbnail"]').attr("content") ?? og($, "og:image"), pageUrl);

  return {
    seriesId,
    seriesTitle: series?.title?.trim() || text($("h1.series-header-title")) || ogTitle?.[1]?.trim() || null,
    author: text($("h2.series-header-author")) ?? ogTitle?.[2]?.trim() ?? null,
    rssUrl: rssUrl && new URL(rssUrl).hostname === HOST ? rssUrl : null,
    coverUrl,
    description: text($("p.series-header-description")) ?? og($, "og:description"),
  };
}

export interface SjpFeed {
  title: string | null;
  description: string | null;
  author: string | null;
  oldestPubDate: string | null;
}

/** Pure: the series RSS feed. Items are newest-first but extras come first, so scan them all. */
export function parseSjpRss(xml: string): SjpFeed {
  const $ = loadXml(xml);
  const dates = $("item > pubDate")
    .map((_, el) => new Date($(el).text().trim()))
    .get()
    .filter((d) => !Number.isNaN(d.getTime()));
  const oldest = dates.length ? new Date(Math.min(...dates.map((d) => d.getTime()))) : null;
  return {
    // Channel titles read "少年ジャンプ＋（SOUL CATCHER(S)）".
    title: stripSiteSuffix(text($("channel > title")), [/^少年ジャンプ＋（/, /）$/]),
    description: text($("channel > description")),
    author: text($("item > author")),
    oldestPubDate: oldest ? oldest.toISOString().slice(0, 10) : null,
  };
}

export function sjpToResult(page: SjpEpisodePage, feed: SjpFeed | null, episodeId: string, episodeUrl: string): ImportResult {
  const warnings: string[] = [];
  const title = page.seriesTitle ?? feed?.title;
  if (!title) throw new ImportError("no_title", episodeId);

  let sourceId = page.seriesId;
  if (!sourceId) {
    sourceId = `episode:${episodeId}`;
    warnings.push("Couldn't find the series on this page, so the entry is tied to this episode.");
  }

  let coverUrl = page.coverUrl;
  if (coverUrl && !COVER_HOSTS.includes(new URL(coverUrl).hostname)) {
    coverUrl = null;
    warnings.push("The cover image is on an unexpected host, so it wasn't imported.");
  }

  const details: Record<string, string> = {};
  const author = feed?.author ?? page.author;
  if (author) details.Author = author;
  if (feed?.oldestPubDate) details.Published = feed.oldestPubDate;
  if (!feed) warnings.push("Couldn't read the series feed; the first-published date is missing.");

  const result: SearchResult = {
    source: "shonenjumpplus",
    sourceId,
    mediaType: "manga",
    title,
    titleNative: null,
    coverUrl,
    bannerUrl: null,
    year: yearFrom(feed?.oldestPubDate ?? null),
    description: cleanDescription(feed?.description ?? page.description),
    // No series page exists; the episode that was pasted is the most useful link.
    externalUrl: episodeUrl,
    totalAmount: null,
    totalUnit: null,
    metadata: { details },
  };
  return { result, warnings };
}

export const shonenJumpPlusImporter: UrlImporter = {
  source: "shonenjumpplus",
  hosts: IMPORT_HOSTS.shonenjumpplus,
  mediaTypes: ["manga"],
  parse(url) {
    const m = /^\/episode\/(\d{5,25})\/?$/.exec(url.pathname);
    if (!m) return null;
    return { sourceId: m[1], canonicalUrl: `https://${HOST}/episode/${m[1]}` };
  },
  async fetch(parsed) {
    const { text: html, url } = await safeFetchText(parsed.canonicalUrl, { allowedHosts: IMPORT_HOSTS.shonenjumpplus });
    const page = parseSjpEpisodeHtml(html, url.toString());
    let feed: SjpFeed | null = null;
    if (page.rssUrl) {
      try {
        const rss = await safeFetchText(page.rssUrl, { allowedHosts: IMPORT_HOSTS.shonenjumpplus, accept: "xml" });
        feed = parseSjpRss(rss.text);
      } catch (err) {
        console.warn("[import] shonenjumpplus", parsed.sourceId, "rss failed:", err instanceof Error ? err.message : err);
      }
    }
    return sjpToResult(page, feed, parsed.sourceId, parsed.canonicalUrl);
  },
};
