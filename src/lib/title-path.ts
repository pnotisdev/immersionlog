import type { mediaItems } from "@/db/schema";

/** Public title URLs (/titles/<slug>-<uuid>). Pure, so it's safe anywhere, including tests. */

type Item = typeof mediaItems.$inferSelect;

const UUID_TAIL = /([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;

/** "Yotsuba&!" → "yotsuba-and", "Ōkami" → "okami". ASCII only; callers fall back to the romaji. */
export function slugify(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}

export function titleSlug(item: Pick<Item, "title" | "metadata">): string {
  const romaji = typeof item.metadata?.romaji === "string" ? item.metadata.romaji : null;
  return slugify(item.title) || (romaji ? slugify(romaji) : "");
}

/** Canonical public path, e.g. /titles/yotsuba-4d674a3a-…. */
export function titlePath(item: Pick<Item, "id" | "title" | "metadata">): string {
  const slug = titleSlug(item);
  return `/titles/${slug ? `${slug}-` : ""}${item.id}`;
}

/** The item id at the end of a /titles/ param, whatever slug precedes it. */
export function parseTitleParam(param: string): string | null {
  return UUID_TAIL.exec(param)?.[1]?.toLowerCase() ?? null;
}
