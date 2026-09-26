/**
 * One-off data migration: sessions and timers whose label is a link an importer now
 * supports (saved before that importer shipped) are pointed at the imported item, the
 * same way saving a session resolves a pasted link today (resolveLinkLabel in
 * src/actions/sessions.ts). The owner also gets a library entry for the item, dated from
 * their earliest session on it. Links that fail to import keep their label.
 *
 *   pnpm resolve:link-labels            # dry run: lists what would change
 *   pnpm resolve:link-labels --apply
 *
 * Safe to re-run: only rows with a link label and no item are touched.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "../src/db";
import { activeTimers, immersionSessions, libraryEntries } from "../src/db/schema";
import { MEDIA_TYPE_META } from "../src/lib/media";
import { upsertExternalItem } from "../src/lib/media-upsert";
import { findImporter, importFromUrl } from "../src/lib/sources";

const APPLY = process.argv.includes("--apply");

async function main() {
  const linkLabel = sql`label ~* '^https?://'`;
  const sessions = await db
    .select({ id: immersionSessions.id, userId: immersionSessions.userId, label: immersionSessions.label, mediaType: immersionSessions.mediaType, startedAt: immersionSessions.startedAt })
    .from(immersionSessions)
    .where(and(isNull(immersionSessions.mediaItemId), linkLabel));
  const timers = await db
    .select({ userId: activeTimers.userId, label: activeTimers.label, mediaType: activeTimers.mediaType })
    .from(activeTimers)
    .where(and(isNull(activeTimers.mediaItemId), linkLabel));

  // One import per distinct link.
  const resolved = new Map<string, Awaited<ReturnType<typeof importFromUrl>>["result"] | null>();
  for (const row of [...sessions, ...timers]) {
    const label = row.label!;
    if (resolved.has(label) || !findImporter(label)) continue;
    try {
      resolved.set(label, (await importFromUrl(label, { hintType: row.mediaType })).result);
    } catch (err) {
      console.warn(`skip ${label}: ${err instanceof Error ? err.message : err}`);
      resolved.set(label, null);
    }
  }

  let changed = 0;
  for (const s of sessions) {
    const result = resolved.get(s.label!);
    if (!result) continue;
    console.log(`session ${s.id} (${s.startedAt.toISOString().slice(0, 10)}): ${s.label} → [${result.source}] ${result.title}`);
    changed++;
    if (!APPLY) continue;
    const item = await upsertExternalItem(db, result, s.userId);
    await db
      .update(immersionSessions)
      .set({ mediaItemId: item.id, mediaType: result.mediaType, label: null, updatedAt: new Date() })
      .where(eq(immersionSessions.id, s.id));
    const startedAt = s.startedAt.toISOString().slice(0, 10);
    await db
      .insert(libraryEntries)
      .values({ userId: s.userId, mediaItemId: item.id, status: "active", progressUnit: result.totalUnit ?? MEDIA_TYPE_META[result.mediaType].defaultUnit, startedAt })
      .onConflictDoUpdate({
        target: [libraryEntries.userId, libraryEntries.mediaItemId],
        set: { startedAt: sql`least(${libraryEntries.startedAt}, ${startedAt}::date)` },
      });
  }
  for (const t of timers) {
    const result = resolved.get(t.label!);
    if (!result) continue;
    console.log(`timer of ${t.userId}: ${t.label} → [${result.source}] ${result.title}`);
    changed++;
    if (!APPLY) continue;
    const item = await upsertExternalItem(db, result, t.userId);
    await db
      .update(activeTimers)
      .set({ mediaItemId: item.id, mediaType: result.mediaType, label: null })
      .where(eq(activeTimers.userId, t.userId));
  }

  console.log(`${changed} row(s) ${APPLY ? "updated" : "would change (dry run; pass --apply)"}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
