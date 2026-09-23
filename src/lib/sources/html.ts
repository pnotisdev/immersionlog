/*
 * normalizeDigits and collapseLines are ported from Kechimochi (src/importers/bookwalker.ts,
 * src/importers/base.ts), MIT License, Copyright (c) 2026 Federico "Morg" Pareschi.
 */
import "server-only";
import { type Cheerio, type CheerioAPI, load } from "cheerio/slim";
import type { Element } from "domhandler";

/**
 * Parsing helpers for the scraping importers. Node has no DOMParser, so pages go
 * through cheerio (the htmlparser2 build: lenient, fast, and enough for meta tags,
 * JSON-LD and definition lists).
 */

export type { CheerioAPI };
export type Sel = Cheerio<Element>;

export function loadHtml(html: string): CheerioAPI {
  return load(html);
}

export function loadXml(xml: string): CheerioAPI {
  return load(xml, { xml: true });
}

/** `<meta property="og:…">`, falling back to `<meta name="og:…">`. Empty → null. */
export function og($: CheerioAPI, key: string): string | null {
  const v = $(`meta[property="${key}"]`).attr("content") ?? $(`meta[name="${key}"]`).attr("content");
  const t = v?.trim();
  return t ? t : null;
}

/** Trimmed text of the first match, whitespace collapsed. Empty → null. */
export function text(el: Sel | ReturnType<CheerioAPI>): string | null {
  const t = el.first().text().replace(/\s+/g, " ").trim();
  return t ? t : null;
}

type JsonLdNode = Record<string, unknown>;

function typesOf(node: JsonLdNode): string[] {
  const t = node["@type"];
  if (typeof t === "string") return [t];
  if (Array.isArray(t)) return t.filter((x): x is string => typeof x === "string");
  return [];
}

/**
 * The first JSON-LD node whose @type intersects `types`. Handles top-level arrays and
 * @graph containers; malformed blocks are skipped, not fatal.
 */
export function jsonLd($: CheerioAPI, types: readonly string[]): JsonLdNode | null {
  const queue: unknown[] = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      queue.push(JSON.parse($(el).text()));
    } catch {
      /* skip malformed block */
    }
  });
  while (queue.length) {
    const node = queue.shift();
    if (Array.isArray(node)) {
      queue.push(...node);
      continue;
    }
    if (!node || typeof node !== "object") continue;
    const obj = node as JsonLdNode;
    if (typesOf(obj).some((t) => types.includes(t))) return obj;
    if (Array.isArray(obj["@graph"])) queue.push(...obj["@graph"]);
  }
  return null;
}

/**
 * `dt` label → the `dd` right after it. The first occurrence of a label wins. With
 * `scopeSelector`, only the first element it matches is searched.
 */
export function dtDd($: CheerioAPI, scopeSelector?: string): Map<string, Sel> {
  const out = new Map<string, Sel>();
  const dts = scopeSelector ? $(scopeSelector).first().find("dt") : $("dt");
  dts.each((_, el) => {
    const dt = $(el);
    const label = dt.text().replace(/\s+/g, " ").trim();
    const dd = dt.nextAll().first();
    if (label && dd.is("dd") && !out.has(label)) out.set(label, dd);
  });
  return out;
}

/** Resolve relative and protocol-relative (`//…`) URLs; always https. Invalid → null. */
export function absUrl(src: string | null | undefined, base: string | URL): string | null {
  const s = src?.trim();
  if (!s) return null;
  try {
    const u = new URL(s.startsWith("//") ? `https:${s}` : s, base);
    if (u.protocol === "http:") u.protocol = "https:";
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}

/** Full-width ０-９ → ASCII 0-9. */
export function normalizeDigits(s: string): string {
  return s.replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
}

/** Remove store boilerplate from an og:title / <title>. Patterns are anchored by the caller. */
export function stripSiteSuffix(title: string | null | undefined, patterns: readonly RegExp[]): string | null {
  if (!title) return null;
  let t = title.trim();
  for (const p of patterns) t = t.replace(p, "").trim();
  return t ? t : null;
}

/** Text with block-level breaks kept, for descriptions; cleanDescription() collapses it later. */
export function blockText($: CheerioAPI, el: Sel): string | null {
  const html = el.first().html();
  if (!html) return null;
  const withBreaks = html
    .replace(/\r\n?/g, "\n")
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|blockquote|section|article|tr)>/gi, "\n");
  const t = load(`<div>${withBreaks}</div>`)("div").first().text();
  return collapseLines(t);
}

/** Ported from Kechimochi's sanitizeDescription: trim lines, keep at most two blank lines in a row. */
export function collapseLines(raw: string): string | null {
  const lines = raw
    .replace(/\u00a0/g, " ")
    .split("\n")
    .map((l) => l.replace(/\t/g, " ").replace(/ {2,}/g, " ").trim());
  const out: string[] = [];
  let blanks = 0;
  for (const line of lines) {
    if (!line) {
      if (++blanks <= 2) out.push("");
      continue;
    }
    blanks = 0;
    out.push(line);
  }
  const t = out.join("\n").trim();
  return t ? t : null;
}

/** Distinct non-empty values, order kept. */
export function uniq(values: (string | null | undefined)[]): string[] {
  return [...new Set(values.map((v) => v?.trim()).filter((v): v is string => !!v))];
}

/** First integer in a string ("約224ページ" → 224), full-width digits allowed. */
export function firstInt(s: string | null | undefined): number | null {
  if (!s) return null;
  const m = /\d[\d,]*/.exec(normalizeDigits(s));
  if (!m) return null;
  const n = Number(m[0].replace(/,/g, ""));
  return Number.isSafeInteger(n) && n > 0 ? n : null;
}
