export interface KanjiSettingsValues {
  /** New kanji a day, counted in the user's timezone. */
  dailyNewLimit: number;
  /** Reviews per session. */
  reviewBatchSize: number;
}

/** Mirrors the column defaults in src/db/schema/kanji.ts; used when a user has no row yet. */
export const KANJI_DEFAULTS: KanjiSettingsValues = { dailyNewLimit: 10, reviewBatchSize: 30 };

export const KANJI_LIMITS = {
  dailyNewLimit: { min: 0, max: 50 },
  reviewBatchSize: { min: 5, max: 100 },
} as const;
