import "server-only";
import { subDays, subHours, subMinutes } from "date-fns";
import { eachDayKey, presetRange } from "@/lib/dates";
import type { GoalWithProgress } from "@/lib/queries";
import type { GroupTotals } from "@/lib/progression-queries";
import { levelFromSeconds } from "@/lib/progression";
import type { FeedItem, MemberRow } from "@/lib/social-queries";
import { getShelves, type ShelfKey } from "@/lib/sources/browse";
import type { SearchResult } from "@/lib/sources/types";
import type { ActiveTimerView } from "@/components/timer/timer-card";
import type { Column } from "@/components/stats/column-chart";
import type { HeatmapDay } from "@/components/stats/heatmap";
import type { MediaCardData } from "@/components/library/media-card";
import type { RailItem } from "@/components/media/media-rail";
import type { SessionView } from "@/components/sessions/types";
import type { TopTitle } from "@/components/stats/top-titles";
import type { TypeRow } from "@/components/stats/type-bars";

/** A fictional roster of "other members" for the Community preview — distinct from
 * "Mika Tanaka", the fabricated logged-in viewer used by the other previews. */
const PREVIEW_MEMBERS = [
  { username: "alex_r", name: "Alex Rivera" },
  { username: "priya_n", name: "Priya Nair" },
  { username: "tom_b", name: "Tom Becker" },
  { username: "lucas_s", name: "Lucas Silva" },
  { username: "emma_c", name: "Emma Clarke" },
  { username: "noah_k", name: "Noah Kim" },
] as const;

/** Cheap deterministic noise in [0, 1) — reproducible, no Math.random SSR/CSR drift. */
function noise(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Real cover art and titles for the landing page's product previews, pulled from the
 * same public AniList/VNDB shelves the (logged-out-safe) Discover rails already use —
 * see getShelves() in src/app/page.tsx. Everything else on the preview pages (stats,
 * streaks, session history) is fabricated; only the artwork and titles are real.
 */
export async function getPreviewShelves() {
  return getShelves(["anime", "manga", "light_novel", "visual_novel"] as const satisfies readonly ShelfKey[]);
}

export function pickPool(shelves: Awaited<ReturnType<typeof getPreviewShelves>>): SearchResult[] {
  return shelves.flatMap((s) => s.items).filter((i) => i.coverUrl);
}

// --- Dashboard ---

export function buildTimer(pool: SearchResult[]): ActiveTimerView {
  const item = pool.find((i) => i.mediaType === "anime") ?? pool[0];
  return {
    mediaItemId: item?.sourceId ?? null,
    mediaType: item?.mediaType ?? "anime",
    label: null,
    startedAt: subMinutes(subMinutes(new Date(), 27), 0).toISOString(),
    title: item?.title ?? null,
    progressUnit: "episodes",
  };
}

export function buildDashboardColumns(): Column[] {
  const today = presetRange("today", "UTC");
  const keys = eachDayKey(subDays(today.from, 29), today.to, "UTC");
  const todayKey = keys[keys.length - 1];
  return keys.map((key, i) => {
    const dow = new Date(key + "T00:00:00Z").getUTCDay();
    const weekendBoost = dow === 0 || dow === 6 ? 1.35 : 1;
    const base = 1600 + i * 80;
    const seconds = Math.round((base + noise(i) * 3200) * weekendBoost);
    return { label: key.slice(8), title: key, seconds, emphasized: key === todayKey };
  });
}

export function buildGoals(): GoalWithProgress[] {
  const now = new Date();
  return [
    {
      id: "preview-goal-1",
      userId: "preview",
      title: "Read 1,000 pages this month",
      metric: "pages",
      mediaType: "manga",
      target: 1000,
      startDate: "2026-09-01",
      endDate: "2026-09-30",
      createdAt: now,
      current: 780,
      percent: 78,
      expectedPercent: 70,
      daysTotal: 30,
      daysLeft: 9,
      remaining: 220,
      perDayNeeded: 220 / 9,
      isActive: true,
      isPast: false,
    },
    {
      id: "preview-goal-2",
      userId: "preview",
      title: "50 hours of anime this season",
      metric: "time",
      mediaType: "anime",
      target: 50,
      startDate: "2026-07-01",
      endDate: "2026-09-30",
      createdAt: now,
      current: 34.5,
      percent: 69,
      expectedPercent: 60,
      daysTotal: 92,
      daysLeft: 9,
      remaining: 15.5,
      perDayNeeded: 15.5 / 9,
      isActive: true,
      isPast: false,
    },
  ] as GoalWithProgress[];
}

export function buildSessions(pool: SearchResult[], count: number): SessionView[] {
  const offsets = [
    subHours(new Date(), 2),
    subHours(new Date(), 6),
    subHours(subMinutes(new Date(), 30), 22),
    subDays(new Date(), 1),
    subDays(new Date(), 2),
    subDays(new Date(), 3),
  ];
  const durations = [2760, 1500, 5100, 3300, 1980, 4200];
  return Array.from({ length: count }).map((_, i) => {
    const item = pool[i % pool.length];
    return {
      id: `preview-session-${i}`,
      mediaItemId: item.sourceId,
      mediaType: item.mediaType,
      label: null,
      startedAt: offsets[i % offsets.length].toISOString(),
      durationSeconds: durations[i % durations.length],
      amount: item.mediaType === "manga" ? 24 : null,
      amountUnit: item.mediaType === "manga" ? "chapters" : null,
      notes: null,
      title: item.title,
      coverUrl: item.coverUrl,
    };
  });
}

// --- Library ---

const STATUS_CYCLE = ["active", "active", "finished", "planning", "active", "paused", "finished", "planning", "active"] as const;

export function buildLibraryEntries(pool: SearchResult[], count: number): MediaCardData[] {
  return Array.from({ length: count }).map((_, i) => {
    const item = pool[i % pool.length];
    const status = STATUS_CYCLE[i % STATUS_CYCLE.length];
    const total = item.totalAmount ?? (item.mediaType === "anime" ? 24 : 180);
    const progress = status === "finished" ? total : status === "planning" ? 0 : Math.round(total * (0.2 + noise(i) * 0.6));
    return {
      mediaItemId: `preview-${item.source}-${item.sourceId}`,
      title: item.title,
      titleNative: item.titleNative,
      coverUrl: item.coverUrl,
      type: item.mediaType,
      status,
      progress,
      progressUnit: item.mediaType === "anime" ? "episodes" : item.mediaType === "manga" ? "chapters" : "pages",
      totalAmount: total,
      totalUnit: item.mediaType === "anime" ? "episodes" : item.mediaType === "manga" ? "chapters" : "pages",
      rating: i % 3 === 0 ? 8 + (i % 2) : null,
    };
  });
}

// --- Stats ---

export function buildStatsColumns(): Column[] {
  const weeks = 16;
  const today = presetRange("today", "UTC");
  return Array.from({ length: weeks }).map((_, i) => {
    const w = weeks - 1 - i;
    const weekStart = subDays(today.from, w * 7 + 6);
    const label = `${weekStart.getUTCMonth() + 1}/${weekStart.getUTCDate()}`;
    const seconds = Math.round(8000 + noise(i * 3) * 12000 + i * 500);
    return { label, title: `Week of ${label}`, seconds };
  });
}

export function buildHeatmapDays(): HeatmapDay[] {
  const range = presetRange("365d", "UTC");
  const keys = eachDayKey(range.from, range.to, "UTC");
  const n = keys.length;
  return keys.map((key, i) => {
    const idx = n - 1 - i; // days ago, 0 = today
    const dow = new Date(key + "T00:00:00Z").getUTCDay();
    const weekendDip = dow === 0 || dow === 6 ? 0.75 : 1;
    let seconds = 0;
    if (idx <= 52) {
      seconds = noise(i) > 0.08 ? Math.round((2200 + noise(i + 1) * 6200) * weekendDip) : 0;
    } else if (idx <= 150) {
      seconds = noise(i) > 0.4 ? Math.round((1100 + noise(i + 2) * 4200) * weekendDip) : 0;
    } else {
      seconds = noise(i) > 0.6 ? Math.round((800 + noise(i + 3) * 3000) * weekendDip) : 0;
    }
    return { key, seconds, sessions: seconds > 0 ? 1 + Math.round(noise(i + 4) * 2) : 0 };
  });
}

export function buildTopTitles(pool: SearchResult[], count: number): TopTitle[] {
  const seconds = [46800, 38700, 31200, 24300, 19800, 16200, 13500];
  return Array.from({ length: count }).map((_, i) => {
    const item = pool[i % pool.length];
    const s = seconds[i % seconds.length];
    return {
      mediaItemId: `preview-${item.source}-${item.sourceId}`,
      title: item.title,
      titleNative: item.titleNative,
      coverUrl: item.coverUrl,
      type: item.mediaType,
      seconds: s,
      detail: `${8 - i} sessions`,
    };
  });
}

export function buildTypeBreakdown(): TypeRow[] {
  return [
    { mediaType: "anime", seconds: 162000, count: 54 },
    { mediaType: "manga", seconds: 97200, count: 38 },
    { mediaType: "visual_novel", seconds: 61200, count: 14 },
    { mediaType: "podcast", seconds: 32400, count: 21 },
    { mediaType: "book", seconds: 14400, count: 6 },
  ];
}

export function buildGroupTotals(): { current: GroupTotals; previous: GroupTotals } {
  return {
    current: { reading: 63000, listening: 91800, other: 5400, total: 160200 },
    previous: { reading: 52200, listening: 79200, other: 3600, total: 135000 },
  };
}

// --- Discover ---

export function buildCommunityRail(pool: SearchResult[], count: number): RailItem[] {
  const hours = [212, 188, 165, 143, 120, 98];
  const learners = [312, 289, 264, 231, 198, 176];
  return Array.from({ length: count }).map((_, i) => {
    const item = pool[(i * 7) % pool.length];
    return {
      mediaItemId: `preview-${item.source}-${item.sourceId}`,
      title: item.title,
      coverUrl: item.coverUrl,
      type: item.mediaType,
      meta: `${hours[i % hours.length]}h · ${learners[i % learners.length]} learners`,
    };
  });
}

// --- Community ---

export function buildFeedItems(pool: SearchResult[], count: number): FeedItem[] {
  const offsets = [subMinutes(new Date(), 12), subHours(new Date(), 1), subHours(new Date(), 3), subHours(new Date(), 5), subDays(new Date(), 1), subDays(new Date(), 1)];
  const durations = [3120, 1860, 2640, 5400, 1500, 4080];
  const notes = [null, "finally caught the joke without subs", null, null, "slow chapter but good vocab", null];
  return Array.from({ length: count }).map((_, i) => {
    const item = pool[(i * 5) % pool.length];
    const member = PREVIEW_MEMBERS[i % PREVIEW_MEMBERS.length];
    return {
      sessionId: `preview-feed-${i}`,
      userId: `preview-member-${i % PREVIEW_MEMBERS.length}`,
      username: member.username,
      name: member.name,
      image: null,
      mediaItemId: item.sourceId,
      title: item.title,
      coverUrl: item.coverUrl,
      mediaType: item.mediaType,
      label: null,
      startedAt: offsets[i % offsets.length],
      durationSeconds: durations[i % durations.length],
      amount: item.mediaType === "manga" ? 18 : null,
      amountUnit: item.mediaType === "manga" ? "chapters" : null,
      notes: notes[i % notes.length],
      kudos: [4, 1, 0, 2, 6, 0][i % 6],
      kudosByViewer: false,
    };
  });
}

export function buildMemberRows(count: number): MemberRow[] {
  const seconds = [412000, 298000, 187000, 96000, 54000, 21000];
  const followers = [88, 61, 40, 19, 7, 2];
  const now = new Date();
  return Array.from({ length: count }).map((_, i) => {
    const member = PREVIEW_MEMBERS[i % PREVIEW_MEMBERS.length];
    const s = seconds[i % seconds.length];
    return {
      userId: `preview-member-${i % PREVIEW_MEMBERS.length}`,
      username: member.username,
      name: member.name,
      image: null,
      createdAt: subDays(now, 200 - i * 20),
      seconds: s,
      level: levelFromSeconds(s),
      followers: followers[i % followers.length],
      followedByViewer: false,
    };
  });
}

export interface PreviewLeaderboardRow {
  rank: number;
  username: string;
  name: string;
  image: string | null;
  seconds: number;
}

export function buildMiniLeaderboard(count: number): PreviewLeaderboardRow[] {
  const seconds = [61200, 52800, 46800, 39600, 33300, 28800];
  return Array.from({ length: count }).map((_, i) => {
    const member = PREVIEW_MEMBERS[i % PREVIEW_MEMBERS.length];
    return { rank: i + 1, username: member.username, name: member.name, image: null, seconds: seconds[i % seconds.length] };
  });
}
