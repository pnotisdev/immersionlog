import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { dayEnd, dayKey, dayStart, yearRange } from "@/lib/dates";
import { formatDate, formatDuration, formatNumber } from "@/lib/format";
import { listMilestonesInRange } from "@/lib/milestones-queries";
import { buildHeatmapDays, getDailyTotals, getLibrary, getTopItems, getTypeBreakdown } from "@/lib/queries";
import { getPublicUser } from "@/lib/ranking-queries";
import { getGroupTotals, getProgression, getReadingMetrics } from "@/lib/progression-queries";
import { levelFromSeconds, longestStreak } from "@/lib/progression";
import { getSiteUrl } from "@/lib/site";
import { USERNAME_RE } from "@/lib/username";
import { cn } from "@/lib/utils";
import { Panel } from "@/components/layout/panel";
import { MilestoneList } from "@/components/progression/milestone-list";
import { Avatar } from "@/components/ranking/avatar";
import { Heatmap, HeatmapLegend } from "@/components/stats/heatmap";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TopTitles } from "@/components/stats/top-titles";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";

const YEAR_RE = /^\d{4}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function resolveRange(year: string, tz: string, from?: string, to?: string) {
  if (from && to && DATE_RE.test(from) && DATE_RE.test(to) && from < to) {
    return { from: dayStart(from, tz), to: dayEnd(to, tz), label: `${formatDate(from)} – ${formatDate(to)}`, custom: true };
  }
  const y = Number(year);
  return { ...yearRange(y, tz), label: year, custom: false };
}

export async function generateMetadata(props: PageProps<"/u/[username]/report/[year]">) {
  const { username, year } = await props.params;
  const u = USERNAME_RE.test(username) ? await getPublicUser(username) : null;
  return { title: u ? `${u.name}'s ${year} Immersion Report` : "Immersion Report" };
}

export default async function ReportPage(props: PageProps<"/u/[username]/report/[year]">) {
  const { username, year } = await props.params;
  const sp = await props.searchParams;
  if (!USERNAME_RE.test(username) || !YEAR_RE.test(year)) notFound();
  const yearNum = Number(year);
  if (yearNum < 2000 || yearNum > 2100) notFound();

  const u = await getPublicUser(username);
  if (!u) notFound();

  const tz = u.timezone;
  const now = new Date();
  const range = resolveRange(year, tz, str(sp.from), str(sp.to));

  const [totals, reading, breakdown, top, dailyTotals, progression, library, milestones] = await Promise.all([
    getGroupTotals(u.id, range.from, range.to),
    getReadingMetrics(u.id, range.from, range.to),
    getTypeBreakdown(u.id, range.from, range.to),
    getTopItems(u.id, range.from, range.to, 8),
    getDailyTotals(u.id, range.from, range.to, tz),
    getProgression(u.id, tz, now),
    getLibrary(u.id),
    listMilestonesInRange(u.id, range.from, range.to, tz),
  ]);

  const heatDays = buildHeatmapDays(dailyTotals, range.from, range.to, tz);
  const activeDayKeys = heatDays.filter((d) => d.seconds > 0).map((d) => d.key);
  const streak = longestStreak(activeDayKeys);

  const levelNow = progression.overall;
  const totalBeforeRange = Math.max(0, progression.totals.total - totals.total);
  const levelBefore = levelFromSeconds(totalBeforeRange);
  const levelsGained = levelNow.level - levelBefore.level;

  const finishedInRange = library.filter((e) => e.status === "finished" && e.finishedAt && e.finishedAt >= range.from.toISOString().slice(0, 10) && e.finishedAt < range.to.toISOString().slice(0, 10));

  // Every year they've tracked, so the report can be flipped back through.
  const thisYear = Number(dayKey(now, tz).slice(0, 4));
  const firstYear = Math.min(thisYear, Number((progression.firstDay ?? `${thisYear}`).slice(0, 4)));
  const years = Array.from({ length: thisYear - firstYear + 1 }, (_, i) => thisYear - i);

  const reportUrl = `${getSiteUrl()}/u/${u.username}/report/${year}`;
  // A stable route of its own (card.png/route.tsx) — the opengraph-image convention
  // serves at a hashed URL, so linking to a bare /opengraph-image 404s.
  const cardUrl = `/u/${u.username}/report/${year}/card.png`;

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <Link href={`/u/${u.username}`} className="shrink-0">
            <Avatar name={u.name} image={u.image} size="lg" />
          </Link>
          <div className="min-w-0">
            <p className="text-meta font-medium text-primary">{range.label} Immersion Report</p>
            <h1 className="mt-0.5 truncate text-h1 font-semibold sm:text-[1.75rem] sm:leading-9">
              <Link href={`/u/${u.username}`} className="hover:underline">
                {u.name}
              </Link>
            </h1>
          </div>
        </div>
        {years.length > 1 && (
          <nav aria-label="Report year" className="no-scrollbar flex gap-1.5 overflow-x-auto">
            {years.map((y) => (
              <Link
                key={y}
                href={`/u/${u.username}/report/${y}`}
                aria-current={String(y) === year && !range.custom ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-sm border px-3 py-1 text-xs tabular-nums transition-colors",
                  String(y) === year && !range.custom
                    ? "border-primary bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {y}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {totals.total === 0 ? (
        <Panel>
          <p className="py-6 text-center text-sm text-muted-foreground">Nothing logged in this period yet.</p>
        </Panel>
      ) : (
        <>
          <StatStrip
            stats={[
              { label: "Time immersed", value: formatDuration(totals.total), hero: true },
              { label: "Active days", value: formatNumber(activeDayKeys.length), hint: `longest streak ${streak}d` },
              { label: "Level", value: levelNow.level, hint: levelsGained > 0 ? `+${levelsGained} this period` : undefined },
              { label: "Titles finished", value: formatNumber(finishedInRange.length) },
            ]}
          />

          <Panel
            title="Activity"
            description={
              <>
                <span className="font-medium text-foreground tabular-nums">{formatDuration(totals.total)}</span> across{" "}
                {formatNumber(activeDayKeys.length)} days
              </>
            }
            action={<HeatmapLegend />}
          >
            <Heatmap days={heatDays} highlightKey={dayKey(now, tz)} />
          </Panel>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="grid gap-6">
              <Panel title="Most time spent on">
                <TopTitles items={top.map((t) => ({ ...t, detail: `${t.count} session${t.count === 1 ? "" : "s"}` }))} emptyText="No sessions logged." />
              </Panel>

              {milestones.length > 0 && (
                <Panel title="Milestones" flush>
                  <MilestoneList milestones={milestones} inset />
                </Panel>
              )}
            </div>

            <div className="grid gap-6">
              <Panel title="Share" description={range.custom ? `The card always covers all of ${year}.` : "Post your year anywhere."}>
                <a href={cardUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md border border-border">
                  {/* A plain <img>: the PNG is generated on request by our own route, not a static asset next/image can optimize. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cardUrl}
                    alt={`${u.name}'s ${year} Immersion Report card`}
                    width={1200}
                    height={630}
                    className="block h-auto w-full"
                  />
                </a>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    render={<a href={`${cardUrl}?download=1`} download={`immersionlog-${u.username}-${year}.png`} />}
                    nativeButton={false}
                  >
                    <Download /> Download image
                  </Button>
                  <CopyButton value={reportUrl} label="Copy link" size="default" />
                </div>
              </Panel>

              <Panel title="Reading vs listening">
                <SplitBar
                  segments={[
                    { label: "Reading", seconds: totals.reading, color: "bg-d-reading" },
                    { label: "Listening", seconds: totals.listening, color: "bg-d-listening" },
                  ]}
                />
                {reading.characters > 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{formatNumber(reading.characters)}</span> characters read
                    {reading.charsPerHour != null && ` · ${formatNumber(reading.charsPerHour)}/hour`}
                  </p>
                )}
                <div className="mt-5">
                  <TypeBars rows={breakdown} limit={6} />
                </div>
              </Panel>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
