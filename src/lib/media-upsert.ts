import "server-only";
import { eq, sql } from "drizzle-orm";
import type { Db } from "@/db";
import { MEDIA_TYPE_META } from "@/lib/media";
import type { JitenStats } from "@/lib/sources/types";
import { type EntryStatus, libraryEntries, type MediaSource, type MediaType, mediaItems, type Unit } from "@/db/schema";

/** The row shape both addFromSearch (client-supplied hit) and addFromUrl (server import) insert. */
export interface ExternalItemInput {
  source: Exclude<MediaSource, "manual">;
  sourceId: string;
  mediaType: MediaType;
  title: string;
  titleNative: string | null;
  coverUrl: string | null;
  bannerUrl?: string | null;
  year: number | null;
  description: string | null;
  externalUrl: string | null;
  totalAmount: number | null;
  totalUnit: Unit | null;
  metadata?: Record<string, unknown>;
}

/**
 * Metadata on conflict: the fresh source metadata wins, except for enrichment other
 * users attached to this shared row: `jiten` stats survive, and `links` are merged
 * key by key (existing keys win, so a user's Jiten link isn't replaced by a source's
 * cross-link). A plain `||` would replace the whole `links` object instead.
 */
export function preservingMetadataSql(fresh: Record<string, unknown> | undefined) {
  const next = JSON.stringify(fresh ?? {});
  return sql`${next}::jsonb || jsonb_strip_nulls(jsonb_build_object(
    'jiten', ${mediaItems.metadata}->'jiten',
    'links', nullif(coalesce(${next}::jsonb->'links', '{}'::jsonb) || coalesce(${mediaItems.metadata}->'links', '{}'::jsonb), '{}'::jsonb)
  ))`;
}

/**
 * Insert-or-update a shared external item on (source, source_id). A source that has no
 * total keeps whatever total the row already had (a Jiten character count, or a length
 * a user filled in) instead of wiping it; a source that has one still wins.
 */
export async function upsertExternalItem(db: Db, r: ExternalItemInput, userId: string): Promise<{ id: string }> {
  const [item] = await db
    .insert(mediaItems)
    .values({
      type: r.mediaType,
      title: r.title,
      titleNative: r.titleNative,
      coverUrl: r.coverUrl,
      bannerUrl: r.bannerUrl ?? null,
      year: r.year,
      description: r.description,
      externalUrl: r.externalUrl,
      source: r.source,
      sourceId: r.sourceId,
      totalAmount: r.totalAmount,
      totalUnit: r.totalUnit,
      metadata: r.metadata,
      createdBy: userId,
    })
    .onConflictDoUpdate({
      target: [mediaItems.source, mediaItems.sourceId],
      set: {
        title: r.title,
        titleNative: r.titleNative,
        coverUrl: r.coverUrl,
        bannerUrl: r.bannerUrl ?? null,
        year: r.year,
        description: r.description,
        externalUrl: r.externalUrl,
        totalAmount: sql`coalesce(excluded.total_amount, ${mediaItems.totalAmount})`,
        totalUnit: sql`case when excluded.total_amount is null then ${mediaItems.totalUnit} else excluded.total_unit end`,
        metadata: preservingMetadataSql(r.metadata),
      },
    })
    .returning({ id: mediaItems.id });
  return item;
}

/** Create the library entry if the user doesn't have one yet. */
export async function ensureEntry(db: Db, userId: string, mediaItemId: string, status: EntryStatus, progressUnit: Unit | null) {
  const today = new Date().toISOString().slice(0, 10);
  await db
    .insert(libraryEntries)
    .values({
      userId,
      mediaItemId,
      status,
      progressUnit,
      startedAt: status === "active" ? today : null,
      finishedAt: status === "finished" ? today : null,
    })
    .onConflictDoNothing({ target: [libraryEntries.userId, libraryEntries.mediaItemId] });
}

type ItemRow = typeof mediaItems.$inferSelect;

/**
 * Merge Jiten stats into a shared item without touching anything else in metadata
 * (episodeMinutes etc.): `jiten` is replaced, `links.jiten` set, other links kept. The
 * total becomes the character count only for types where characters are a sensible
 * unit (VNs; types with no natural unit) and only when the item had no total or
 * already counted characters, so API-sourced lengths stay authoritative.
 */
export async function applyJitenLink(db: Db, item: ItemRow, jiten: JitenStats, deckUrl: string): Promise<void> {
  const unit = MEDIA_TYPE_META[item.type].defaultUnit;
  const fillTotal =
    jiten.characterCount != null &&
    (unit === "characters" || unit === null) &&
    (item.totalAmount == null || item.totalUnit === "characters");
  await db
    .update(mediaItems)
    .set({
      metadata: sql`coalesce(${mediaItems.metadata}, '{}'::jsonb) || jsonb_build_object(
        'jiten', ${JSON.stringify(jiten)}::jsonb,
        'links', coalesce(${mediaItems.metadata}->'links', '{}'::jsonb) || ${JSON.stringify({ jiten: deckUrl })}::jsonb
      )`,
      ...(fillTotal ? { totalAmount: jiten.characterCount!, totalUnit: "characters" as const } : {}),
    })
    .where(eq(mediaItems.id, item.id));
}

/** Undo applyJitenLink, including a character total that only came from the link. */
export async function removeJitenLink(db: Db, item: ItemRow): Promise<void> {
  const linked = (item.metadata?.jiten as JitenStats | undefined)?.characterCount;
  const clearTotal = item.source !== "jiten" && item.totalUnit === "characters" && linked != null && item.totalAmount === linked;
  await db
    .update(mediaItems)
    .set({
      metadata: sql`(coalesce(${mediaItems.metadata}, '{}'::jsonb) - 'jiten' - 'links') || jsonb_strip_nulls(jsonb_build_object(
        'links', nullif(coalesce(${mediaItems.metadata}->'links', '{}'::jsonb) - 'jiten', '{}'::jsonb)
      ))`,
      ...(clearTotal ? { totalAmount: null, totalUnit: null } : {}),
    })
    .where(eq(mediaItems.id, item.id));
}
