import type { EntryStatus, MediaType, Unit } from "@/db/schema";

/** Minimal library entry shape passed to client pickers (timer, session form). */
export interface LibraryPick {
  mediaItemId: string;
  title: string;
  titleNative: string | null;
  type: MediaType;
  status: EntryStatus;
  progressUnit: Unit | null;
  coverUrl: string | null;
  /** AniList's average per-episode runtime, anime only. See defaultDurationSeconds in session-form.tsx. */
  episodeMinutes: number | null;
  /** This item's most recently logged session — seeds "log it again" defaults. */
  lastDurationSeconds: number | null;
  lastAmount: number | null;
  lastAmountUnit: Unit | null;
}
