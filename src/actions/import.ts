"use server";

import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/db";
import { ENTRY_STATUSES, MEDIA_TYPES, mediaItems } from "@/db/schema";
import { importRateLimit, jitenRateLimit } from "@/lib/import-rate-limit";
import { MEDIA_TYPE_META } from "@/lib/media";
import { applyJitenLink, ensureEntry, removeJitenLink, upsertExternalItem } from "@/lib/media-upsert";
import { requireUser } from "@/lib/session";
import { ImportError, importFromUrl } from "@/lib/sources";
import { fetchJitenDetail, type JitenCandidate, jitenCandidates, jitenDeckUrl, jitenStats, jitenSubDecks } from "@/lib/sources/jiten";
import { jpdbEnabled, parseJpdbUrl } from "@/lib/sources/jpdb";
import type { ImportResult, JitenStats, SearchResult } from "@/lib/sources/types";
import type { ActionResult } from "./types";

const UUID = z.string().uuid();

const importOptionsSchema = z.object({
  hintType: z.enum(MEDIA_TYPES).optional(),
  volume: z.coerce.number().int().min(1).max(9999).optional(),
});

const urlSchema = z.string().trim().min(8).max(2000);

export type PreviewResult =
  | { ok: true; result: SearchResult; warnings: string[] }
  | { ok: false; error: string; partial?: Partial<SearchResult> };

/** Log line for a failure: the user-safe message hides the upstream status/cause. */
function describeError(err: unknown): string {
  if (err instanceof ImportError) return `${err.code}${err.detail != null ? ` (${err.detail})` : ""}`;
  return err instanceof Error ? `${err.name}: ${err.message}` : String(err);
}

function limited(userId: string, limiter: typeof importRateLimit): string | null {
  const { allowed, retryAfterMs } = limiter(userId);
  return allowed ? null : `Too many imports. Try again in ${Math.ceil(retryAfterMs / 1000)}s.`;
}

async function runImport(url: string, opts: z.infer<typeof importOptionsSchema>): Promise<ImportResult | { error: string; partial?: Partial<SearchResult> }> {
  try {
    return await importFromUrl(url, opts);
  } catch (err) {
    if (err instanceof ImportError) return { error: err.message, partial: err.partial };
    console.error("[import] unexpected failure:", err);
    return { error: "Import failed. Try again, or add it manually." };
  }
}

/** Fetch and normalize a pasted link for the preview row. Nothing is written. */
export async function previewImport(url: string, options: z.input<typeof importOptionsSchema> = {}): Promise<PreviewResult> {
  const user = await requireUser();
  const u = urlSchema.safeParse(url);
  const o = importOptionsSchema.safeParse(options);
  if (!u.success || !o.success) return { ok: false, error: "That doesn't look like a link." };
  const tooMany = limited(user.id, importRateLimit);
  if (tooMany) return { ok: false, error: tooMany };

  const out = await runImport(u.data, o.data);
  if ("error" in out) return { ok: false, error: out.error, partial: out.partial };
  return { ok: true, result: out.result, warnings: out.warnings };
}

const addFromUrlSchema = importOptionsSchema.extend({
  status: z.enum(ENTRY_STATUSES).default("planning"),
  typeOverride: z.enum(MEDIA_TYPES).optional(),
});

/**
 * Add a pasted link to the library. The import runs again here (normally a cache hit
 * from the preview): the client never supplies the row itself, so what's stored is
 * always what the server read from the source.
 */
export async function addFromUrl(url: string, options: z.input<typeof addFromUrlSchema> = {}): Promise<ActionResult<{ mediaItemId: string }>> {
  const user = await requireUser();
  const u = urlSchema.safeParse(url);
  const o = addFromUrlSchema.safeParse(options);
  if (!u.success || !o.success) return { ok: false, error: "That doesn't look like a link." };
  const tooMany = limited(user.id, importRateLimit);
  if (tooMany) return { ok: false, error: tooMany };

  const out = await runImport(u.data, { hintType: o.data.hintType, volume: o.data.volume });
  if ("error" in out) return { ok: false, error: out.error };
  const r = { ...out.result, mediaType: o.data.typeOverride ?? out.result.mediaType };

  const item = await upsertExternalItem(db, r, user.id);
  await ensureEntry(db, user.id, item.id, o.data.status, r.totalUnit ?? MEDIA_TYPE_META[r.mediaType].defaultUnit);
  revalidatePath("/", "layout");
  return { ok: true, data: { mediaItemId: item.id } };
}

// --- Jiten enrichment -----------------------------------------------------------------

/** Candidate decks for the "Link Jiten.moe deck" picker on a media page. */
export async function searchJitenForItem(mediaItemId: string, query?: string): Promise<ActionResult<JitenCandidate[]>> {
  const user = await requireUser();
  if (!UUID.safeParse(mediaItemId).success) return { ok: false, error: "Not found" };
  const tooMany = limited(user.id, jitenRateLimit);
  if (tooMany) return { ok: false, error: tooMany };
  const item = await db.query.mediaItems.findFirst({ where: eq(mediaItems.id, mediaItemId) });
  if (!item) return { ok: false, error: "Not found" };

  const q = (query?.trim() || item.titleNative || item.title).slice(0, 200);
  try {
    return { ok: true, data: await jitenCandidates(q, item.type) };
  } catch (err) {
    console.warn("[jiten] search failed:", q, describeError(err));
    return { ok: false, error: "Jiten.moe didn't respond. Try again in a moment." };
  }
}

/** Volumes/episodes of a deck, 25 per page. */
export async function listJitenSubDecks(deckId: number, offset = 0): Promise<ActionResult<{ items: JitenCandidate[]; total: number }>> {
  const user = await requireUser();
  const d = z.number().int().positive().safeParse(deckId);
  const off = z.number().int().min(0).max(10_000).safeParse(offset);
  if (!d.success || !off.success) return { ok: false, error: "Invalid deck" };
  const tooMany = limited(user.id, jitenRateLimit);
  if (tooMany) return { ok: false, error: tooMany };
  try {
    return { ok: true, data: await jitenSubDecks(d.data, off.data) };
  } catch (err) {
    console.warn("[jiten] sub-decks failed:", d.data, off.data, describeError(err));
    return { ok: false, error: "Jiten.moe didn't respond. Try again in a moment." };
  }
}

/**
 * Attach Jiten stats to a shared item. Any signed-in user may do it (external items are
 * shared, like the difficulty vote). See applyJitenLink for exactly what changes.
 */
export async function linkJitenDeck(mediaItemId: string, deckId: number): Promise<ActionResult<{ jiten: JitenStats }>> {
  const user = await requireUser();
  const d = z.number().int().positive().safeParse(deckId);
  if (!UUID.safeParse(mediaItemId).success || !d.success) return { ok: false, error: "Invalid deck" };
  const tooMany = limited(user.id, jitenRateLimit);
  if (tooMany) return { ok: false, error: tooMany };
  const item = await db.query.mediaItems.findFirst({ where: eq(mediaItems.id, mediaItemId) });
  if (!item) return { ok: false, error: "Not found" };

  let jiten: JitenStats;
  try {
    const { data } = await fetchJitenDetail(d.data);
    jiten = jitenStats(data.mainDeck, data.parentDeck);
  } catch (err) {
    console.warn("[jiten] link failed:", mediaItemId, d.data, describeError(err));
    return { ok: false, error: err instanceof ImportError ? err.message : "Couldn't load that Jiten.moe deck." };
  }

  await applyJitenLink(db, item, jiten, jitenDeckUrl(d.data));
  console.info("[jiten] linked", { userId: user.id, mediaItemId, deckId: d.data });
  revalidatePath("/", "layout");
  return { ok: true, data: { jiten } };
}

export async function unlinkJitenDeck(mediaItemId: string): Promise<ActionResult> {
  const user = await requireUser();
  if (!UUID.safeParse(mediaItemId).success) return { ok: false, error: "Not found" };
  const item = await db.query.mediaItems.findFirst({ where: eq(mediaItems.id, mediaItemId) });
  if (!item) return { ok: false, error: "Not found" };

  await removeJitenLink(db, item);
  console.info("[jiten] unlinked", { userId: user.id, mediaItemId });
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}

// --- JPDB (link-out only) --------------------------------------------------------------

/** Store or clear a JPDB page link. Never fetched: JPDB's terms forbid automated access. */
export async function setJpdbLink(mediaItemId: string, url: string | null): Promise<ActionResult> {
  const user = await requireUser();
  if (!jpdbEnabled()) return { ok: false, error: "JPDB links aren't enabled on this server." };
  if (!UUID.safeParse(mediaItemId).success) return { ok: false, error: "Not found" };
  const canonical = url === null ? null : parseJpdbUrl(url);
  if (url !== null && !canonical) return { ok: false, error: "That isn't a jpdb.io media page link." };

  const links = canonical
    ? sql`coalesce(${mediaItems.metadata}->'links', '{}'::jsonb) || ${JSON.stringify({ jpdb: canonical })}::jsonb`
    : sql`coalesce(${mediaItems.metadata}->'links', '{}'::jsonb) - 'jpdb'`;
  const updated = await db
    .update(mediaItems)
    .set({
      metadata: sql`(coalesce(${mediaItems.metadata}, '{}'::jsonb) - 'links') || jsonb_strip_nulls(jsonb_build_object('links', nullif(${links}, '{}'::jsonb)))`,
    })
    .where(eq(mediaItems.id, mediaItemId))
    .returning({ id: mediaItems.id });
  if (!updated.length) return { ok: false, error: "Not found" };
  console.info("[jpdb] link", { userId: user.id, mediaItemId, set: !!canonical });
  revalidatePath("/", "layout");
  return { ok: true, data: undefined };
}
