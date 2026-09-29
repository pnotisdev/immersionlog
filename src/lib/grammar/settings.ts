/** Grammar preferences, shared by the settings form and the server action that saves them. */
export interface GrammarSettingsValues {
  /** New points a day, counted in the user's timezone. */
  dailyNewLimit: number;
  /** Reviews per session. */
  reviewBatchSize: number;
  showFurigana: boolean;
  showTranslation: boolean;
}

/** Mirrors the column defaults in src/db/schema/grammar.ts; used when a user has no row yet. */
export const GRAMMAR_DEFAULTS: GrammarSettingsValues = {
  dailyNewLimit: 5,
  reviewBatchSize: 20,
  showFurigana: true,
  showTranslation: true,
};

export const GRAMMAR_LIMITS = {
  dailyNewLimit: { min: 0, max: 30 },
  reviewBatchSize: { min: 5, max: 100 },
} as const;

/** How long after a wrong answer "Undo" still works: long enough for a typo, not for gaming the schedule. */
export const UNDO_WINDOW_MS = 10 * 60_000;
