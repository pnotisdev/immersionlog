/*
 * Backloggd game pages. Selectors ported from Kechimochi (src/importers/backloggd.ts),
 * MIT License, Copyright (c) 2026 Federico "Morg" Pareschi, then re-verified against
 * live pages on 2026-09-23 (fixtures in ./__fixtures__/backloggd-*.html).
 *
 * TODO: Backloggd is built on IGDB, which has an official API (Twitch client
 * credentials). Resolving slugs through IGDB would replace this scraper.
 */
import "server-only";
import { IMPORT_HOSTS } from "./hosts";
import { absUrl, jsonLd, loadHtml, og, stripSiteSuffix, text, uniq } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

const COVER_HOSTS = ["images.igdb.com"];

// Game pages title themselves "Persona 5 (2016)" / "The Elder Scrolls VI (TBD)"; no site suffix.
const TITLE_SUFFIXES = [/\s*\((?:\d{4}|TBD)\)$/];

/**
 * Pure: page HTML → row. Backloggd renders mobile and desktop copies of the title,
 * detail rows and company links, so every list below is de-duplicated.
 */
export function parseBackloggdHtml(html: string, slug: string, canonicalUrl: string): ImportResult {
  const $ = loadHtml(html);
  const warnings: string[] = [];

  // An unknown slug is a soft 404: HTTP 200 with this title.
  if (/^\s*Game not found/i.test($("title").text())) throw new ImportError("not_found", slug);

  const ld = jsonLd($, ["AggregateRating"]);
  const game = (ld?.itemReviewed ?? null) as { name?: unknown } | null;
  const title =
    (typeof game?.name === "string" && game.name.trim()) ||
    stripSiteSuffix(og($, "og:title"), TITLE_SUFFIXES) ||
    stripSiteSuffix(text($(".game-title-section h1")), TITLE_SUFFIXES);
  if (!title) throw new ImportError("no_title", slug);

  const details: Record<string, string> = {};
  $(".row.mt-2").each((_, row) => {
    const header = text($(row).find(".game-details-header"));
    const values = uniq($(row).find(".game-details-value").map((_, el) => $(el).text()).get());
    if (!header || !values.length) return;
    if ((header === "Released" || header === "Upcoming") && !details.Released) details.Released = values[0];
    else if (header === "Genres" && !details.Genres) details.Genres = values.join(", ");
    else if (header === "Platforms" && !details.Platforms) details.Platforms = values.join(", ");
  });
  if (!details.Released) {
    const release = text($('.game-title-section a[href*="release_year:"]'));
    if (release) details.Released = release;
  }

  // "by P-Studio, SEGA": no labels on the page. Developer-then-publisher is only the
  // usual order, so both go under one honest label.
  const companies = uniq(
    $(".game-subtitle a, .sub-title a")
      .filter((_, el) => ($(el).attr("href") ?? "").startsWith("/company/"))
      .map((_, el) => $(el).text())
      .get(),
  );
  if (companies.length) details.Companies = companies.join(", ");

  // .card-img's data-src is already the 2x variant; og:image is the 1x.
  const rawCover = $(".card-img").first().attr("data-src") ?? og($, "og:image") ?? $(".card-img").first().attr("src");
  let coverUrl = absUrl(rawCover?.replace("/t_cover_big/", "/t_cover_big_2x/"), canonicalUrl);
  if (coverUrl && !COVER_HOSTS.includes(new URL(coverUrl).hostname)) {
    coverUrl = null;
    warnings.push("The cover image is on an unexpected host, so it wasn't imported.");
  }

  const releasedYear = details.Released && /\b(\d{4})\b/.exec(details.Released)?.[1];
  const result: SearchResult = {
    source: "backloggd",
    sourceId: slug,
    mediaType: "game",
    title,
    titleNative: null,
    coverUrl,
    bannerUrl: null,
    year: yearFrom(releasedYear || null),
    description: cleanDescription(og($, "og:description") ?? text($("#collapseSummary p"))),
    externalUrl: canonicalUrl,
    totalAmount: null,
    totalUnit: null,
    metadata: { details },
  };
  return { result, warnings };
}

export const backloggdImporter: UrlImporter = {
  source: "backloggd",
  hosts: IMPORT_HOSTS.backloggd,
  mediaTypes: ["game"],
  parse(url) {
    const m = /^\/games\/([a-z0-9][a-z0-9-]*)\/?$/i.exec(url.pathname);
    if (!m) return null;
    const slug = m[1].toLowerCase();
    return { sourceId: slug, canonicalUrl: `https://backloggd.com/games/${slug}/` };
  },
  async fetch(parsed) {
    // Needs Accept-Language (always sent by safeFetchText): without it Backloggd's
    // bot shield answers 403 with a JS challenge.
    const { text: html } = await safeFetchText(parsed.canonicalUrl, { allowedHosts: IMPORT_HOSTS.backloggd });
    return parseBackloggdHtml(html, parsed.sourceId, parsed.canonicalUrl);
  },
};
