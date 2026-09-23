import type { EntryStatus, GoalMetric, MediaSource, MediaType, Unit } from "@/db/schema";

/** Reading vs listening: anything with audio counts as listening (anime, video, podcasts); text media as reading. */
export type MediaGroup = "reading" | "listening" | "other";
export const GROUP_LABELS: Record<MediaGroup, string> = { reading: "Reading", listening: "Listening", other: "Other" };

export interface MediaTypeMeta {
  label: string;
  group: MediaGroup;
  /** Suggested unit for sessions/progress. null = time only. */
  defaultUnit: Unit | null;
  /** Which external source can search this type. null = manual entry only. */
  searchSource: Exclude<MediaSource, "manual"> | null;
  /** Sites a pasted link can be imported from, in the order the UI suggests them. */
  importSources: Exclude<MediaSource, "manual">[];
}

export const MEDIA_TYPE_META: Record<MediaType, MediaTypeMeta> = {
  anime: { label: "Anime", group: "listening", defaultUnit: "episodes", searchSource: "anilist", importSources: ["jiten", "imdb"] },
  manga: { label: "Manga", group: "reading", defaultUnit: "chapters", searchSource: "anilist", importSources: ["bookwalker", "cmoa", "shonenjumpplus", "jiten"] },
  light_novel: { label: "Light novel", group: "reading", defaultUnit: "pages", searchSource: "anilist", importSources: ["bookwalker", "bookmeter", "jiten"] },
  visual_novel: { label: "Visual novel", group: "reading", defaultUnit: "characters", searchSource: "vndb", importSources: ["jiten", "dmm"] },
  movie: { label: "Movie", group: "listening", defaultUnit: null, searchSource: "tmdb", importSources: ["imdb", "jiten"] },
  series: { label: "Series", group: "listening", defaultUnit: "episodes", searchSource: "tmdb", importSources: ["imdb", "jiten"] },
  book: { label: "Book", group: "reading", defaultUnit: "pages", searchSource: "google_books", importSources: ["bookmeter", "bookwalker", "jiten"] },
  graded_reader: { label: "Graded reader", group: "reading", defaultUnit: "pages", searchSource: "google_books", importSources: ["bookmeter"] },
  youtube: { label: "YouTube", group: "listening", defaultUnit: null, searchSource: null, importSources: [] },
  podcast: { label: "Podcast", group: "listening", defaultUnit: null, searchSource: null, importSources: ["jiten"] },
  drama_cd: { label: "Drama CD", group: "listening", defaultUnit: null, searchSource: null, importSources: ["jiten"] },
  game: { label: "Game", group: "other", defaultUnit: null, searchSource: null, importSources: ["backloggd", "dmm", "jiten"] },
  news: { label: "News", group: "reading", defaultUnit: "items", searchSource: null, importSources: [] },
  other: { label: "Other", group: "other", defaultUnit: null, searchSource: null, importSources: [] },
};

export const UNIT_LABELS: Record<Unit, string> = {
  episodes: "episodes",
  chapters: "chapters",
  volumes: "volumes",
  pages: "pages",
  characters: "characters",
  words: "words",
  items: "items",
};

export const STATUS_LABELS: Record<EntryStatus, string> = {
  planning: "Planning",
  active: "In progress",
  paused: "Paused",
  finished: "Finished",
  dropped: "Dropped",
};

export const GOAL_METRIC_LABELS: Record<GoalMetric, string> = {
  time: "hours",
  ...UNIT_LABELS,
};

export const SOURCE_LABELS: Record<MediaSource, string> = {
  manual: "Manual",
  anilist: "AniList",
  vndb: "VNDB",
  tmdb: "TMDB",
  google_books: "Google Books",
  imdb: "IMDb",
  jiten: "Jiten.moe",
  bookmeter: "Bookmeter",
  bookwalker: "BOOK☆WALKER",
  cmoa: "コミックシーモア (Cmoa)",
  shonenjumpplus: "少年ジャンプ+",
  backloggd: "Backloggd",
  dmm: "DMM Games",
  jpdb: "JPDB",
};

/**
 * Types with no primary search API that Jiten.moe's deck search covers well enough
 * to offer instead of "manual only". Kept apart from searchSource so the primary
 * routing for every other type is unchanged.
 */
const JITEN_SEARCH_TYPES: readonly MediaType[] = ["game", "drama_cd"];

/** The source the search box queries for this type: its own, else Jiten, else none. */
export function effectiveSearchSource(type: MediaType): Exclude<MediaSource, "manual"> | null {
  return MEDIA_TYPE_META[type].searchSource ?? (JITEN_SEARCH_TYPES.includes(type) ? "jiten" : null);
}

export function mediaTypeLabel(type: MediaType) {
  return MEDIA_TYPE_META[type].label;
}

/** "1 episode" / "12 episodes" — every unit label is plural, so singularise for one. */
export function unitLabel(unit: Unit, amount: number): string {
  const label = UNIT_LABELS[unit];
  return amount === 1 ? label.replace(/s$/, "") : label;
}

/** How a session reads in the activity feed: "watched 2 episodes of…", "read 8k characters of…". */
export function activityVerb(type: MediaType): string {
  switch (type) {
    case "anime":
    case "movie":
    case "series":
    case "youtube":
      return "watched";
    case "podcast":
    case "drama_cd":
      return "listened to";
    case "game":
      return "played";
    default:
      return "read";
  }
}

export function typesInGroup(group: MediaGroup): MediaType[] {
  return (Object.keys(MEDIA_TYPE_META) as MediaType[]).filter((t) => MEDIA_TYPE_META[t].group === group);
}
