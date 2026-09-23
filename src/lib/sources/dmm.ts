/*
 * DMM Games (dlsoft.dmm.com) product pages. Table/description selectors ported from
 * Kechimochi (src/importers/dmm.ts), MIT License, Copyright (c) 2026 Federico "Morg"
 * Pareschi.
 *
 * NOT verified live: DMM redirects every request from outside Japan to
 * special.dmm.com/not-available-in-your-region/, including from this app's server
 * (2026-09-23). The parser is tested against a synthetic fixture built from
 * Kechimochi's selectors; a deployment inside Japan is needed to confirm them.
 *
 * Content policy: covers are never imported (Kechimochi made the same call). The adult
 * storefront (dlsoft.dmm.co.jp) is refused unless DMM_ALLOW_ADULT=1; when allowed, rows
 * are flagged adult and the age-gate cookie is sent only to that host.
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import { blockText, loadHtml, og, stripSiteSuffix, text } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

export const DMM_GENERAL_HOST = "dlsoft.dmm.com";
export const DMM_ADULT_HOST = "dlsoft.dmm.co.jp";
const REGION_BLOCK_HOST = "special.dmm.com";

export function dmmAdultAllowed(): boolean {
  return process.env.DMM_ALLOW_ADULT === "1";
}

const FIELDS: Record<string, string> = {
  シリーズ: "Series",
  メーカー: "Developer",
  ゲームジャンル: "Genres",
  ボイス: "Voice acting",
  ダウンロード版配信開始日: "Released",
  ダウンロード版対応OS: "Platforms",
};

// Unverified guesses at the <title> boilerplate; og:title is tried first.
const TITLE_SUFFIXES = [/\s*[-|｜]\s*(?:DMM\s*GAMES|DMM\s*ゲーム|FANZA\s*GAMES)[^|｜]*$/i];

export function parseDmmHtml(html: string, id: string, canonicalUrl: string, opts: { adult: boolean; hintType?: MediaType }): ImportResult {
  const $ = loadHtml(html);
  const title =
    stripSiteSuffix(og($, "og:title"), TITLE_SUFFIXES) ??
    text($("h1.productTitle__txt, h1")) ??
    stripSiteSuffix($("title").text(), TITLE_SUFFIXES);
  if (!title) throw new ImportError("no_title", id);

  const details: Record<string, string> = {};
  $(".contentsDetailTop__tableRow, .contentsDetailBottom__tableRow").each((_, row) => {
    const label = text($(row).find('[class*="__tableDataLeft"]'));
    const value = text($(row).find('[class*="__tableDataRight"]'));
    const key = label ? FIELDS[label] : undefined;
    if (key && value && !details[key]) details[key] = value;
  });

  const area = $(".read-text-area").first();
  area.find(".readmore").remove();
  const description = (area.length ? blockText($, area) : null) ?? og($, "og:description");

  const mediaType: MediaType = opts.hintType === "visual_novel" ? "visual_novel" : "game";
  const result: SearchResult = {
    source: "dmm",
    sourceId: id,
    mediaType,
    title,
    titleNative: null,
    coverUrl: null,
    bannerUrl: null,
    year: yearFrom(details.Released ?? null),
    description: cleanDescription(description),
    externalUrl: canonicalUrl,
    totalAmount: null,
    totalUnit: null,
    metadata: { details, ...(opts.adult ? { adult: true } : {}) },
  };
  return { result, warnings: ["DMM covers aren't imported."] };
}

export const dmmImporter: UrlImporter = {
  source: "dmm",
  hosts: IMPORT_HOSTS.dmm,
  mediaTypes: ["game", "visual_novel"],
  parse(url) {
    const m = /^\/detail\/([a-z0-9_]+)\/?$/i.exec(url.pathname);
    if (!m) return null;
    const host = url.hostname.toLowerCase();
    // The adult store gets its own sourceId namespace so the two can never collide.
    const adult = host === DMM_ADULT_HOST;
    return { sourceId: adult ? `r18:${m[1]}` : m[1], canonicalUrl: `https://${host}/detail/${m[1]}/` };
  },
  async fetch(parsed, { hintType }) {
    const adult = parsed.sourceId.startsWith("r18:");
    if (adult && !dmmAdultAllowed()) throw new ImportError("adult_disabled", parsed.sourceId);
    const id = adult ? parsed.sourceId.slice(4) : parsed.sourceId;
    const host = adult ? DMM_ADULT_HOST : DMM_GENERAL_HOST;
    try {
      const { text: html } = await safeFetchText(parsed.canonicalUrl, {
        allowedHosts: [host],
        headers: adult ? { Cookie: "age_check_done=1" } : undefined,
      });
      return parseDmmHtml(html, id, parsed.canonicalUrl, { adult, hintType });
    } catch (err) {
      if (err instanceof ImportError && err.code === "blocked_host" && err.detail === REGION_BLOCK_HOST) {
        throw new ImportError("upstream_status", "region block", "DMM Games only serves visitors in Japan, so this server can't read its pages.");
      }
      throw err;
    }
  },
};
