import "server-only";
import type { ActiveTimerView } from "@/components/timer/timer-card";
import type { LibraryPick } from "@/components/library/types";
import { getActiveTimer, getItemStats, getLastSessionByItem, getLibrary } from "./queries";

/** AniList-sourced anime items carry this in metadata (src/lib/sources/anilist.ts). */
function episodeMinutesOf(mediaItem: { metadata: Record<string, unknown> | null }): number | null {
  const v = mediaItem.metadata?.episodeMinutes;
  return typeof v === "number" ? v : null;
}

/** Library entries in the compact shape client pickers need. */
export async function getLibraryPicks(userId: string): Promise<LibraryPick[]> {
  const [rows, lastByItem] = await Promise.all([getLibrary(userId), getLastSessionByItem(userId)]);
  return rows.map((r) => {
    const last = lastByItem.get(r.mediaItemId);
    return {
      mediaItemId: r.mediaItemId,
      title: r.mediaItem.title,
      titleNative: r.mediaItem.titleNative,
      type: r.mediaItem.type,
      status: r.status,
      progressUnit: r.progressUnit,
      coverUrl: r.mediaItem.coverUrl,
      episodeMinutes: episodeMinutesOf(r.mediaItem),
      lastDurationSeconds: last?.durationSeconds ?? null,
      lastAmount: last?.amount ?? null,
      lastAmountUnit: last?.amountUnit ?? null,
    };
  });
}

export async function getActiveTimerView(userId: string, picks?: LibraryPick[]): Promise<ActiveTimerView | null> {
  const t = await getActiveTimer(userId);
  if (!t) return null;
  const pick = picks?.find((p) => p.mediaItemId === t.mediaItemId);
  return {
    mediaItemId: t.mediaItemId,
    mediaType: t.mediaType,
    label: t.label,
    startedAt: t.startedAt.toISOString(),
    title: t.mediaItem?.title ?? null,
    progressUnit: pick?.progressUnit ?? t.mediaItem?.totalUnit ?? null,
  };
}

/** Library picks plus per-item lifetime stats (for the quick-log preview panel). */
export async function getLibraryPicksWithStats(userId: string): Promise<(LibraryPick & { seconds: number; sessions: number; progress: number; totalAmount: number | null; totalUnit: LibraryPick["progressUnit"] })[]> {
  const [rows, stats, lastByItem] = await Promise.all([getLibrary(userId), getItemStats(userId), getLastSessionByItem(userId)]);
  return rows.map((r) => {
    const s = stats.get(r.mediaItemId);
    const last = lastByItem.get(r.mediaItemId);
    return {
      mediaItemId: r.mediaItemId,
      title: r.mediaItem.title,
      titleNative: r.mediaItem.titleNative,
      type: r.mediaItem.type,
      status: r.status,
      progressUnit: r.progressUnit,
      coverUrl: r.mediaItem.coverUrl,
      episodeMinutes: episodeMinutesOf(r.mediaItem),
      lastDurationSeconds: last?.durationSeconds ?? null,
      lastAmount: last?.amount ?? null,
      lastAmountUnit: last?.amountUnit ?? null,
      seconds: s?.seconds ?? 0,
      sessions: s?.count ?? 0,
      progress: r.progress,
      totalAmount: r.mediaItem.totalAmount,
      totalUnit: r.mediaItem.totalUnit,
    };
  });
}
