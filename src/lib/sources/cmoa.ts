/*
 * コミックシーモア (www.cmoa.jp) title pages. Category-row parsing, author and rating
 * extraction ported from Kechimochi (src/importers/cmoa.ts), MIT License,
 * Copyright (c) 2026 Federico "Morg" Pareschi. Selectors re-verified live on
 * 2026-09-23: `.title_detail_text` and `.title_detail_img` no longer exist, the promo
 * prefix has a space-separated variant, and titles come from JSON-LD now.
 *
 * Identity: `/title/<id>/` is effectively volume 1; `/title/<id>/vol/<n>/` is one
 * volume. Manga are tracked by chapter at series level in immersionlog, so manga links
 * always normalize to the series (sourceId `<id>`). For other types (light novels,
 * books) a volume link is kept as its own row (sourceId `<id>:vol<n>`).
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import { absUrl, type CheerioAPI, jsonLd, loadHtml, og, stripSiteSuffix, text, uniq } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

const COVER_HOSTS = ["cmoa.akamaized.net", "www.cmoa.jp"];

// "呪術廻戦 1｜無料漫画（マンガ）ならコミックシーモア｜芥見下々", volume pages may add
// "（3ページ目）" in front and "（最新刊）" at the end of the title part.
const TITLE_CLEANUP = [/｜無料漫画（マンガ）ならコミックシーモア｜.*$/, /^（\d+ページ目）/, /（最新刊）$/];

// Seen live: "コミックシーモアなら無料で試し読み！呪術廻戦 1巻｜…",
// "…期間限定1巻無料！無職転生 ～…～ 1巻 …" (space, no ｜). Kechimochi's
// `[｜巻]` stopped at the first 巻 inside a title ("竜巻の子"), so this one anchors on
// a volume number or the ｜.
export const CMOA_PROMO_PREFIX = /^コミックシーモアなら[^！]{1,30}！.*?(?:｜|\d+巻[\s　｜]+)/;

function breadcrumbNames($: CheerioAPI): { names: string[]; urls: string[] } {
  const list = jsonLd($, ["BreadcrumbList"]);
  const items = Array.isArray(list?.itemListElement) ? (list.itemListElement as { position?: number; name?: unknown; item?: unknown }[]) : [];
  const sorted = [...items].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  return {
    names: sorted.map((i) => (typeof i.name === "string" ? i.name.trim() : "")),
    urls: sorted.map((i) => (typeof i.item === "string" ? i.item : "")),
  };
}

/** Concrete markers from the live adult section: breadcrumb, tag and age-gate overlay. */
export function isCmoaAdult($: CheerioAPI): boolean {
  if ($('section.brCramb a[href="/adult/"], .titleTagArea a[href="/adult/"], div#r18mask').length) return true;
  return breadcrumbNames($).urls.some((u) => /^https:\/\/www\.cmoa\.jp\/adult\/?$/.test(u));
}

export function parseCmoaHtml(
  html: string,
  titleId: string,
  canonicalUrl: string,
  opts: { seriesLevel: boolean; hintType?: MediaType },
): ImportResult {
  const $ = loadHtml(html);
  const warnings: string[] = [];
  const adult = isCmoaAdult($);
  const product = jsonLd($, ["Product"]);
  const book = jsonLd($, ["Book"]);

  const h1 = $("h1.titleName").first().clone();
  h1.children().remove();
  const volumeTitle =
    (typeof product?.name === "string" && product.name.trim()) ||
    (typeof book?.name === "string" && book.name.trim()) ||
    stripSiteSuffix(og($, "og:title"), TITLE_CLEANUP) ||
    text(h1);

  // Series name: the breadcrumb's second-to-last crumb (the last is the volume), else
  // the "呪術廻戦(30巻完結)" role line, else the volume title minus its number.
  const crumbs = breadcrumbNames($).names;
  const seriesTitle =
    (crumbs.length >= 3 ? crumbs[crumbs.length - 2] : null) ||
    stripSiteSuffix(text($("#comic_description_title_role")), [/\(\d+巻(?:完結)?\)$/, /\(完結\)$/]) ||
    stripSiteSuffix(volumeTitle, [/\s*\d+$/]);

  const title = opts.seriesLevel ? seriesTitle : volumeTitle;
  if (!title) throw new ImportError("no_title", titleId);

  const details: Record<string, string> = {};
  // Volume pages repeat the block; `put` keeps the first value per label.
  $(".category_line").each((_, line) => {
    const label = text($(line).find(".category_line_f_l_l"));
    const valueEl = $(line).find(".category_line_f_r_l").first();
    if (!label || !valueEl.length) return;
    const links = uniq(valueEl.find("a").map((_, a) => $(a).text()).get()).filter((t) => !t.includes("位)"));
    const plain = text(valueEl)?.replace(/^：\s*/, "") ?? null;
    const put = (key: string, v: string | null | undefined) => {
      if (v && !details[key]) details[key] = v;
    };
    switch (label) {
      case "ジャンル":
        put("Genres", links.length ? links.join(", ") : plain);
        break;
      case "作品タグ":
        // Cmoa lists 20+ reader tags; the first dozen are the most-used.
        put("Tags", links.slice(0, 12).join(", ") || null);
        break;
      case "出版社":
        put("Publisher", links[0] ?? plain);
        break;
      case "雑誌・レーベル":
        put("Label", links.join(", ") || plain);
        break;
      case "出版年月":
      case "配信開始日":
        put("Published", plain);
        break;
      case "ISBN":
        if (!opts.seriesLevel) put("ISBN", text(valueEl.find("pre")) ?? plain);
        break;
    }
  });

  const authors = uniq(
    $(".title_details_author_name a")
      .map((_, a) => $(a).text())
      .get(),
  );
  const ldAuthors = Array.isArray(book?.author) ? uniq((book.author as { name?: string }[]).map((a) => a.name)) : [];
  if (authors.length || ldAuthors.length) details.Author = (authors.length ? authors : ldAuthors).join(", ");
  // A volume row names its series; a series row already is it.
  if (!opts.seriesLevel && seriesTitle && volumeTitle !== seriesTitle) details.Series = seriesTitle;

  const rating = (product?.aggregateRating as { ratingValue?: unknown } | undefined)?.ratingValue;
  if (typeof rating === "string" || typeof rating === "number") details.Rating = `${rating} / 5 (Cmoa)`;

  const rawDescription =
    text($("#comic_description > p")) ?? (typeof product?.description === "string" ? product.description : null) ?? og($, "og:description");
  const description = rawDescription?.replace(CMOA_PROMO_PREFIX, "").trim() || null;
  if (opts.seriesLevel && description) warnings.push("The description is from volume 1.");

  let coverUrl = absUrl($(".title_details_thum_box img.title_big_thum").attr("src") ?? og($, "og:image"), canonicalUrl);
  if (coverUrl && !COVER_HOSTS.includes(new URL(coverUrl).hostname)) {
    coverUrl = null;
    warnings.push("The cover image is on an unexpected host, so it wasn't imported.");
  }
  if (adult) coverUrl = null;

  const isbn = details.ISBN?.replace(/[^\dX]/gi, "") || null;
  const mediaType: MediaType = opts.hintType ?? (/ライトノベル|小説/.test(String(product?.category ?? "")) ? "light_novel" : "manga");
  const result: SearchResult = {
    source: "cmoa",
    sourceId: titleId,
    mediaType,
    title,
    // A Japanese store: the title already is the native title.
    titleNative: null,
    coverUrl,
    bannerUrl: null,
    year: yearFrom(details.Published ?? null),
    description: cleanDescription(description),
    externalUrl: canonicalUrl,
    totalAmount: null,
    totalUnit: null,
    metadata: { details, ...(isbn ? { isbn } : {}), ...(adult ? { adult: true } : {}) },
  };
  return { result, warnings };
}

export const cmoaImporter: UrlImporter = {
  source: "cmoa",
  hosts: IMPORT_HOSTS.cmoa,
  mediaTypes: ["manga", "light_novel", "book"],
  parse(url) {
    const m = /^\/title\/(\d+)\/(?:vol\/(\d+)\/?)?$/.exec(url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`);
    if (!m) return null;
    return m[2]
      ? { sourceId: `${m[1]}:vol${m[2]}`, canonicalUrl: `https://www.cmoa.jp/title/${m[1]}/vol/${m[2]}/` }
      : { sourceId: m[1], canonicalUrl: `https://www.cmoa.jp/title/${m[1]}/` };
  },
  async fetch(parsed, { hintType }) {
    const [titleId, volPart] = parsed.sourceId.split(":");
    // Manga (and "no type picked") track the series; a volume link for a novel stays a volume.
    const seriesLevel = !volPart || !hintType || hintType === "manga";
    const url = seriesLevel ? `https://www.cmoa.jp/title/${titleId}/` : parsed.canonicalUrl;
    const { text: html } = await safeFetchText(url, { allowedHosts: IMPORT_HOSTS.cmoa });
    return parseCmoaHtml(html, seriesLevel ? titleId : parsed.sourceId, url, { seriesLevel, hintType });
  },
};
