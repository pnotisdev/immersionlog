import Link from "next/link";
import { notFound } from "next/navigation";
import { dayEnd, dayStart, yearRange } from "@/lib/dates";
import { formatDate, formatDuration, formatNumber } from "@/lib/format";
import { UNIT_LABELS } from "@/lib/media";
import { listMilestonesInRange } from "@/lib/milestones-queries";
import { buildHeatmapDays, getDailyTotals, getLibrary, getTopItems, getTypeBreakdown } from "@/lib/queries";
import { getPublicUser } from "@/lib/ranking-queries";
import { getGroupTotals, getProgression, getReadingMetrics } from "@/lib/progression-queries";
import { levelFromSeconds, longestStreak } from "@/lib/progression";
import { getSiteUrl } from "@/lib/site";
import { USERNAME_RE } from "@/lib/username";
import { SectionHeader } from "@/components/layout/page-header";
import { Avatar } from "@/components/ranking/avatar";
import { Heatmap } from "@/components/stats/heatmap";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TypeBars } from "@/components/stats/type-bars";
import { TopTitles } from "@/components/stats/top-titles";
import { CopyButton } from "@/components/ui/copy-button";

const YEAR_RE = /^\d{4}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function resolveRange(year: string, tz: string, from?: string, to?: string) {
  if (from && to && DATE_RE.test(from) && DATE_RE.test(to) && from < to) {
    return { from: dayStart(from, tz), to: dayEnd(to, tz), label: `${formatDate(from)} – ${formatDate(to)}` };
  }
  const y = Number(year);
  return { ...yearRange(y, tz), label: year };
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

  const reportUrl = `${getSiteUrl()}/u/${u.username}/report/${year}`;
  const ogUrl = `/u/${u.username}/report/${year}/opengraph-image`;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar name={u.name} image={u.image} size="lg" />
          <div>
            <p className="section-title">{range.label} Immersion Report</p>
            <h1 className="text-2xl font-semibold sm:text-3xl">{u.name}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CopyButton value={reportUrl} label="Copy link" />
          <a
            href={ogUrl}
            download={`immersionlog-${u.username}-${year}.png`}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            Download image
          </a>
        </div>
      </div>

      {totals.total === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">Nothing logged in this period yet.</p>
      ) : (
        <>
          <StatStrip
            className="mt-8"
            stats={[
              { label: "Time immersed", value: formatDuration(totals.total), hero: true },
              { label: "Longest streak", value: `${streak}d` },
              { label: "Level", value: levelNow.level, hint: levelsGained > 0 ? `+${levelsGained} this period` : undefined },
              { label: "Titles finished", value: formatNumber(finishedInRange.length) },
            ]}
          />

          <section className="mt-9">
            <SectionHeader title="Activity" />
            <Heatmap days={heatDays} />
          </section>

          <div className="mt-9 grid gap-9 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="grid gap-9">
              <section>
                <SectionHeader title="Most time spent on" />
                <TopTitles items={top.map((t) => ({ ...t, detail: `${t.count} session${t.count === 1 ? "" : "s"}` }))} emptyText="No sessions logged." />
              </section>

              {milestones.length > 0 && (
                <section>
                  <SectionHeader title="Milestones" />
                  <ul className="grid gap-2.5">
                    {milestones.map((m) => (
                      <li key={m.id} className="text-sm">
                        <Link href={`/media/${m.mediaItemId}`} className="font-medium hover:underline">
                          {m.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {m.mediaTitle}
                          {m.occurredAt && ` · ${formatDate(m.occurredAt)}`}
                          {m.progressAmount != null && m.progressUnit && ` · ${m.progressAmount} ${UNIT_LABELS[m.progressUnit]}`}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <section>
              <SectionHeader title="Split" />
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
              <div className="mt-7">
                <SectionHeader title="By medium" />
                <TypeBars rows={breakdown} limit={6} />
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
