import Link from "next/link";
import { Suspense } from "react";
import { subDays } from "date-fns";
import { formatCompact, formatDuration, formatNumber } from "@/lib/format";
import { getLeaderboard } from "@/lib/ranking-queries";
import { getCommunityPulse } from "@/lib/social-queries";
import { getShelves } from "@/lib/sources/browse";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Wordmark } from "@/components/layout/mark";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { DiscoverPreview } from "@/components/marketing/discover-preview";
import { LibraryPreview } from "@/components/marketing/library-preview";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { StatsPreview } from "@/components/marketing/stats-preview";
import { Avatar } from "@/components/ranking/avatar";
import { Poster } from "@/components/media/poster";

export const metadata = {
  title: "immersionlog: track every hour of Japanese you consume",
  description:
    "Anime, manga, visual novels, books, podcasts: one tracker for everything you read and watch in Japanese, with hours, streaks, levels, goals and a leaderboard.",
};

// Below this, "not tracking alone" / "a leaderboard worth climbing" oversells what a
// visitor is about to see — a handful of names looks like proof there's barely
// anyone here, not proof there's a crowd. Under the bar, the copy leans into "early"
// honestly instead of pretending the numbers are bigger than they are.
const EARLY_STAGE_MEMBER_THRESHOLD = 50;

export default async function LandingPage() {
  const now = new Date();
  const weekAgo = subDays(now, 7);
  const [pulse, topThisWeek] = await Promise.all([
    getCommunityPulse(weekAgo),
    getLeaderboard({ from: weekAgo, to: now, limit: 6 }),
  ]);
  const isEarlyStage = pulse.members < EARLY_STAGE_MEMBER_THRESHOLD;

  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4">
          <Wordmark markSize={18} textClassName="text-lg font-semibold" />
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <Link
              href="/login"
              className="rounded-full px-3 py-2.5 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground sm:px-4"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-primary px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 sm:px-5"
            >
              Create account
            </Link>
          </div>
        </div>
      </header>

      <main className="relative flex-1">
        <section className="mx-auto max-w-5xl px-4 pt-14 pb-10 sm:pt-20">
          <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
            Every hour of Japanese you consume, in one place.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Anime, manga, visual novels, light novels, books, YouTube, podcasts: track the time, keep the streak, watch
            the level climb, and see where you land against everyone else doing the same.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start tracking for free
            </Link>
            <Link href="/login" className="rounded-full border px-7 py-4 text-base font-medium transition-colors hover:bg-muted">
              I already have an account
            </Link>
          </div>

          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Start a timer, or log a session after the fact. Titles, covers and known lengths get pulled in
            automatically from AniList, VNDB, TMDB and Google Books.
          </p>
        </section>

        <Suspense fallback={<div className="h-44 sm:h-56" />}>
          <PosterWall />
        </Suspense>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="section-title">The app itself</h2>
          <h3 className="mt-2 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard, stats, library, discover — see them before you sign up.
          </h3>
          <div className="mt-8">
            <ProductShowcase
              dashboard={<DashboardPreview />}
              stats={<StatsPreview />}
              library={<LibraryPreview />}
              discover={<DiscoverPreview />}
            />
          </div>
        </section>

        {/* Community and stats, told with real numbers instead of icon bullets: the
            app itself treats data as typography, not cards (see stat-strip.tsx), so
            the landing page does the same rather than reaching for a generic feature
            grid. */}
        <section className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div>
              <h2 className="section-title">{isEarlyStage ? "Not building alone" : "Not tracking alone"}</h2>
              <h3 className="mt-2 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                {isEarlyStage
                  ? "Be one of the first names on the board."
                  : "A leaderboard worth climbing, stats worth checking."}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Every session becomes XP, a streak, and a level that actually moves. Reading speed in characters per
                hour, a full heatmap of every day you&rsquo;ve logged, and month-over-month comparisons update
                themselves, no spreadsheets involved.
              </p>

              {isEarlyStage ? (
                <p className="mt-8 max-w-md border-t pt-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{formatNumber(pulse.members)}</span>{" "}
                  {pulse.members === 1 ? "person has" : "people have"} logged in the last week — early enough that
                  the leaderboard is still wide open.
                </p>
              ) : (
                <dl className="mt-8 grid grid-cols-3 gap-x-6 gap-y-4 border-t pt-5">
                  <Pulse value={formatNumber(pulse.members)} label="members" />
                  <Pulse value={formatCompact(Math.round(pulse.secondsThisWeek / 3600))} label="hours this week" />
                  <Pulse value={formatNumber(pulse.sessionsThisWeek)} label="sessions this week" />
                </dl>
              )}
            </div>

            <div className="rounded-2xl border bg-surface p-5">
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="section-title">{isEarlyStage ? "Early birds this week" : "Top this week"}</span>
                <Link href="/ranking" className="text-xs text-muted-foreground hover:text-foreground">
                  Full ranking
                </Link>
              </div>
              {topThisWeek.length > 0 ? (
                <ol className="mt-3 grid gap-3">
                  {topThisWeek.map((row) => (
                    <li key={row.userId} className="flex items-center gap-3">
                      <span className="w-4 shrink-0 text-right text-xs font-semibold tabular-nums text-muted-foreground">
                        {row.rank}
                      </span>
                      <Avatar name={row.name} image={row.image} size="sm" />
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">{row.name}</span>
                      <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                        {formatDuration(row.seconds)}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Nobody has logged time this week yet. Be the first name on the board.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20">
          <div className="rounded-2xl border bg-surface px-6 py-10 text-center sm:px-10">
            <h2 className="text-xl font-semibold sm:text-2xl">Start with tonight&rsquo;s episode.</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Create an account, add what you&rsquo;re watching or reading, and hit start. XP, streaks, rankings and
              clubs all build themselves from there.
            </p>
            <Link
              href="/signup"
              className="mt-6 inline-block rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Create your account
            </Link>
          </div>
        </section>
      </main>

      <Footer
        containerClassName="max-w-5xl"
        action={
          <Link href="/login" className="hover:text-foreground">
            Sign in
          </Link>
        }
      />
    </div>
  );
}

function Pulse({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <dd className="text-2xl font-bold tabular-nums sm:text-3xl">{value}</dd>
      <dt className="mt-1 truncate text-xs text-muted-foreground">{label}</dt>
    </div>
  );
}

/** Two rows of real cover art drifting in opposite directions: the fastest way to say what this app is for. */
async function PosterWall() {
  const shelves = await getShelves(["anime", "manga", "visual_novel"]);
  const items = shelves.flatMap((s) => s.items).filter((i) => i.coverUrl);
  if (items.length === 0) return null;
  // No cap: each row is duplicated to drive the marquee (see .animate-marquee in
  // globals.css), so under-filling is the only failure mode to avoid, not overflow.
  const rows = [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)];

  return (
    <section aria-hidden className="overflow-hidden py-2">
      <div className="grid gap-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {rows.map((row, i) => (
          <div key={i} className="flex overflow-hidden">
            <div
              className={cn("flex shrink-0 gap-3 motion-safe:animate-marquee", i === 0 && "[animation-direction:reverse]")}
            >
              {[...row, ...row].map((item, j) => (
                <div key={`${item.source}:${item.sourceId}:${j}`} className="w-24 shrink-0 sm:w-28">
                  <Poster src={item.coverUrl} title={item.title} type={item.mediaType} sizes="112px" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
