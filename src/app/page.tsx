import Link from "next/link";
import { Suspense, type CSSProperties } from "react";
import { subDays } from "date-fns";
import { formatDuration } from "@/lib/format";
import { buildHeatmapDays, buildLibraryEntries, getPreviewShelves, pickPool } from "@/lib/marketing-preview";
import { getLeaderboard } from "@/lib/ranking-queries";
import { getShelves } from "@/lib/sources/browse";
import { cn } from "@/lib/utils";
import { Mark, Wordmark } from "@/components/layout/mark";
import { Band, Frame, Rule } from "@/components/marketing/frame";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { Glow } from "@/components/marketing/glow";
import { LandingMotion } from "@/components/marketing/landing-motion";
import { PreviewFrame } from "@/components/marketing/preview-shell";
import { MediaCard } from "@/components/library/media-card";
import { Poster } from "@/components/media/poster";
import { Avatar } from "@/components/ranking/avatar";
import { Heatmap } from "@/components/stats/heatmap";

export const metadata = {
  title: "immersionlog: count every hour of Japanese",
  description:
    "A tracker for Japanese immersion. Start a timer or log a session after the fact, across anime, manga, visual novels, books and podcasts, and get the hours, the characters read, the streak and a shared ranking.",
};

const HERO_LINES = ["Count every hour", "of Japanese you put in."] as const;

const NAV_ANCHORS = [
  ["#track", "Tracking"],
  ["#community", "Community"],
  ["#immersion", "Immersion"],
] as const;

export default async function LandingPage() {
  const now = new Date();
  const top = await getLeaderboard({ from: subDays(now, 7), to: now, limit: 5 });

  return (
    // data-landing tells the shared <body> to go dark with it (see globals.css).
    <div data-landing className="dark flex min-h-svh flex-col overflow-x-clip bg-background text-foreground">
      <LandingMotion />
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <Pillars top={top} />
        <ClosingCta />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ---------------------------------------------------------------------- header */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <Frame className="flex h-16 items-center gap-6">
        <Link href="/" className="shrink-0">
          <Wordmark markSize={18} textClassName="text-[17px] font-semibold" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm whitespace-nowrap text-muted-foreground md:flex">
          {NAV_ANCHORS.map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          {/* Hidden at 375px, where the wordmark and two controls do not fit together.
              Signing in is still one tap away from the demo and the footer. */}
          <Link
            href="/login"
            className="hidden h-11 items-center rounded-sm px-4 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-11 items-center rounded-sm bg-primary px-4 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-colors hover:bg-accent-hover sm:px-5"
          >
            Create account
          </Link>
        </div>
      </Frame>
    </header>
  );
}

/* ------------------------------------------------------------------------ hero */

/**
 * Headline, then the product itself: the real home screen, lifted over the wall of
 * cover art and lit from behind. No pitch paragraph between the two on purpose - the
 * screenshot says what a tracker is faster than a sentence about it can.
 *
 * Paint order is the whole effect, and it follows the Photoshop mockup: the cover-art
 * wall at the back, then the headline, then the light (z-10) falling over both of them,
 * then the screenshot (z-20) on top. The light also spills past the bottom of the
 * section into the next one, which is why the section neither clips nor isolates: the
 * grain has to blend with the page itself (see Glow). The page wrapper's overflow-x-clip
 * is what keeps all of it from scrolling sideways.
 *
 * The wall is positioned rather than stacked so that streaming it in (it fetches live
 * shelves) cannot shift the headline or the screenshot. From xl up, where there is room
 * either side of the screenshot, it sits behind the lower part of it as in the mockup;
 * below that it hangs underneath, since nothing beside a full-width screenshot shows.
 */
function Hero() {
  return (
    <section className="relative">
      <Frame className="relative pt-14 sm:pt-20 lg:pt-24">
        {/* Each line is clipped by its own box so it can be revealed by sliding up from
            under it. The extra bottom padding (cancelled by a matching negative margin)
            is headroom for descenders, which a line box at this leading would crop. */}
        <h1 className="text-[clamp(2.25rem,5.6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.03em]">
          {HERO_LINES.map((line, i) => (
            <span key={line} className="mb-[-0.16em] block overflow-hidden pb-[0.16em]">
              <span data-line-inner className="block" style={{ "--d": `${i * 0.08}s` } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>
      </Frame>

      <div className="relative mt-10 sm:mt-14">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
          <Suspense fallback={null}>
            <PosterWall />
          </Suspense>
        </div>

        {/* 46px at xl: the covers run on 38px past the bottom of the screenshot and the
            section ends just under them, where the mockup puts its rule. */}
        <Frame className="relative pb-[170px] sm:pb-[210px] xl:pb-[46px]">
          <div className="relative">
            <Glow delay="0.12s" />
            {/* No drop shadow: the light is what lifts it now, and a dark shadow painted
                over the light would eat the brightest part of it, right at the edge. */}
            <div data-hero-item style={{ "--d": "0.12s" } as CSSProperties} className="relative z-20">
              <PreviewFrame>
                <DashboardPreview />
              </PreviewFrame>
            </div>
          </div>
        </Frame>
      </div>
    </section>
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
    // Faded at the sides of the page only. Top and bottom stay hard, as in the mockup:
    // the top edge is behind the screenshot, and the bottom is cut by the section rule.
    <div
      aria-hidden
      className="grid gap-2 overflow-hidden py-2 opacity-90 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
    >
      {rows.map((row, i) => (
        <div key={i} className="flex overflow-hidden">
          <div
            className={cn("flex shrink-0 gap-2 motion-safe:animate-marquee", i === 0 && "[animation-direction:reverse]")}
          >
            {[...row, ...row].map((item, j) => (
              <div key={`${item.source}:${item.sourceId}:${j}`} className="w-[86px] shrink-0 sm:w-[100px]">
                <Poster src={item.coverUrl} title={item.title} type={item.mediaType} sizes="100px" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------- pillars */

/**
 * Three things, not twenty. The app's feature list is long, but a long list presented
 * flat says nothing about what the thing is for, so everything is grouped under the
 * three jobs it does and each one is shown with a real module out of the app instead of
 * being described in another bullet.
 */
async function Pillars({ top }: { top: Awaited<ReturnType<typeof getLeaderboard>> }) {
  const pool = pickPool(await getPreviewShelves());
  const shelf = buildLibraryEntries(pool, 6);
  const days = buildHeatmapDays();

  return (
    <Band id="track">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
        <div data-reveal>
          <PillarHeading>Hours, characters, streaks.</PillarHeading>
          <p className="mt-5 text-base leading-[1.65] text-muted-foreground">
            A session is a duration and, where it makes sense, an amount: episodes, chapters, pages, characters. From
            that you get a day-by-day heatmap, a reading speed in characters per hour, and a level worth one XP per
            minute, so an hour of anime counts exactly as much as an hour of visual novel.
          </p>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            Days are bucketed in your own timezone, so a session at 2am belongs to the night you were actually awake
            for.
          </p>
        </div>
        {/* The SVG carries width/height attributes as well as a viewBox, so capping its
            max-width is what lets a full year shrink to fit this column instead of
            growing the horizontal scrollbar its own wrapper would otherwise show. */}
        <div
          data-reveal
          className="rounded-lg border border-border bg-surface p-5 sm:p-7 [&_svg]:h-auto [&_svg]:max-w-full"
        >
          <Heatmap days={days} />
        </div>
      </div>

      <div className="mt-16 grid gap-12 border-t border-border pt-16 lg:mt-20 lg:grid-cols-2 lg:gap-16 lg:pt-20">
        <div id="community" data-reveal className="scroll-mt-20">
          <PillarHeading>The other people doing this.</PillarHeading>
          <p className="mt-5 text-base leading-[1.65] text-muted-foreground">
            Follow someone and their sessions turn up in your feed as they save them. A heart instead of a comment box.
            Weekly and all-time rankings, per medium or overall, that you can opt out of entirely. Clubs, if you want
            to read something at the same time as other people.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface">
            <div className="flex items-baseline justify-between gap-3 border-b border-border px-5 py-3.5">
              <span className="text-sm font-medium">This week</span>
              <Link href="/ranking" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Full ranking
              </Link>
            </div>
            {top.length > 0 ? (
              <ol>
                {top.map((row) => (
                  <li
                    key={row.userId}
                    className="flex items-center gap-3 border-b border-border px-5 py-3 last:border-b-0"
                  >
                    <span className="w-4 shrink-0 text-sm tabular-nums text-dim">{row.rank}</span>
                    <Avatar name={row.name} image={row.image} size="sm" />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium">{row.name}</span>
                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                      {formatDuration(row.seconds)}
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="px-5 py-6 text-sm text-muted-foreground">
                Nobody has logged time this week yet. Be the first name on the board.
              </p>
            )}
          </div>
        </div>

        <div id="immersion" data-reveal className="scroll-mt-20">
          <PillarHeading>Your library, filled in for you.</PillarHeading>
          <p className="mt-5 text-base leading-[1.65] text-muted-foreground">
            Search AniList, VNDB, TMDB or Google Books and the cover, the Japanese title and the known length come with
            it. Logging a session moves your progress along; reaching the total finishes the title. A visual novel can
            log itself, if you point the texthooker page at LunaTranslator or Textractor while you play.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-6 lg:grid-cols-3">
            {shelf.map((item) => (
              <MediaCard key={item.mediaItemId} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Band>
  );
}

function PillarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.2] font-semibold tracking-tight text-balance">
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------- closing, footer */

function ClosingCta() {
  return (
    <section>
      <Rule />
      <Frame className="py-20 sm:py-24">
        <div data-reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.2] font-semibold tracking-tight">
            Make an account and log something.
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-muted-foreground">
            It is free, there is no paid tier, and you can export your sessions as CSV or delete the account outright
            whenever you want.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/signup"
              className="inline-flex h-11 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-hover"
            >
              Create an account
            </Link>
            <Link
              href="/login"
              className="inline-flex h-11 items-center rounded-sm border border-line-strong px-5 text-sm transition-colors hover:bg-surface"
            >
              I already have one
            </Link>
          </div>
        </div>
      </Frame>
    </section>
  );
}

/**
 * The footer closes the page on the logo at full width: the mark's pixel grid and the
 * name, sized so the lockup spans the column. It is the one place on the page where the
 * brand is the content rather than the chrome, which is why the mark is sized in em
 * here and not px (see Mark).
 *
 * The same light as the hero comes up from under the bottom edge of the page, lighting
 * the lower half of the lockup. Its box is a column-wide block sitting just below the
 * footer, so only the top of its falloff shows; the footer clips the rest, which also
 * keeps it from lengthening the page.
 */
function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <Rule />
      <Frame className="pt-14 pb-10">
        <div className="flex flex-wrap items-start gap-x-12 gap-y-8 text-sm">
          <p className="max-w-xs leading-[1.7] text-muted-foreground">
            A tracker for everything you consume in Japanese, and the people doing it with you.
          </p>

          <nav className="grid gap-3 text-muted-foreground">
            {NAV_ANCHORS.map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>

          <nav className="grid gap-3 text-muted-foreground">
            <Link href="/signup" className="transition-colors hover:text-foreground">
              Create account
            </Link>
            <Link href="/login" className="transition-colors hover:text-foreground">
              Sign in
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
          </nav>

          <p className="max-w-xs leading-[1.7] text-dim sm:ml-auto">
            Cover art and metadata from AniList, VNDB, TMDB and Google Books.
          </p>
        </div>
      </Frame>

      <Frame className="overflow-hidden pt-8 pb-10">
        <Link href="/" aria-label="immersionlog" className="block">
          <span
            aria-hidden
            className="flex items-center gap-[0.16em] text-[clamp(2rem,12.4vw,10rem)] leading-[0.9] font-semibold tracking-[-0.05em] whitespace-nowrap"
          >
            <Mark size="0.82em" />
            <span>
              immersion<span className="text-dim">log</span>
            </span>
          </span>
        </Link>
      </Frame>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-full">
        <Frame>
          <div className="relative h-[calc(var(--glow)*3)]">
            <Glow />
          </div>
        </Frame>
      </div>
    </footer>
  );
}
