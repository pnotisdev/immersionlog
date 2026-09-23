import { Suspense } from "react";
import { differenceInCalendarDays, subMonths } from "date-fns";
import { eachDayKey, presetRange } from "@/lib/dates";
import { formatCompact, formatDuration, formatMonthYear, formatNumber, pluralize } from "@/lib/format";
import { UNIT_LABELS } from "@/lib/media";
import { xpFromSeconds } from "@/lib/progression";
import { getGroupTotals, getProgression, getReadingMetrics } from "@/lib/progression-queries";
import { getDailyTotals, getHeatmapActivity, getLifetimeStats, getSessionsInRange, getTopItems, getTypeBreakdown } from "@/lib/queries";
import { resolveRange } from "@/lib/range-params";
import { requireUser } from "@/lib/session";
import { SectionHeader } from "@/components/layout/page-header";
import { Panel } from "@/components/layout/panel";
import { MonthCompare } from "@/components/progression/month-compare";
import { ColumnChart } from "@/components/stats/column-chart";
import { ActivityHeatmap } from "@/components/stats/activity-heatmap";
import { RangePicker } from "@/components/stats/range-picker";
import { SplitBar, StatStrip } from "@/components/stats/stat-strip";
import { TopTitles } from "@/components/stats/top-titles";
import { TypeBars } from "@/components/stats/type-bars";

export const metadata = { title: "Stats" };

export default async function StatsPage(props: PageProps<"/stats">) {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const sp = await props.searchParams;
  const now = new Date();
  const range = resolveRange({ range: str(sp.range), from: str(sp.from), to: str(sp.to) }, tz, "month");

  const monthRange = presetRange("month", tz, now);
  // Same slice of last month (1st -> now) so the comparison is like-for-like.
  const lastMonthFrom = subMonths(monthRange.from, 1);
  const lastMonthTo = subMonths(now, 1);

  const [daily, breakdown, top, lifetime, sessions, groups, reading, progression, heat, monthTotals, lastMonthTotals] =
    await Promise.all([
      getDailyTotals(user.id, range.from, range.to, tz),
      getTypeBreakdown(user.id, range.from, range.to),
      getTopItems(user.id, range.from, range.to, 10),
      getLifetimeStats(user.id),
      getSessionsInRange(user.id, range.from, range.to),
      getGroupTotals(user.id, range.from, range.to),
      getReadingMetrics(user.id, range.from, range.to),
      getProgression(user.id, tz, now),
      getHeatmapActivity(user.id, tz, now),
      getGroupTotals(user.id, monthRange.from, monthRange.to),
      getGroupTotals(user.id, lastMonthFrom, lastMonthTo),
    ]);

  const totalSeconds = [...daily.values()].reduce((a, d) => a + d.seconds, 0);
  const sessionCount = [...daily.values()].reduce((a, d) => a + d.count, 0);
  const activeDays = [...daily.values()].filter((d) => d.seconds > 0).length;

  // "All time" starts at epoch; clamp the chart to the first real session.
  const chartFrom = range.preset === "all" && lifetime.firstSession ? new Date(lifetime.firstSession) : range.from;
  const chartTo = new Date(Math.min(range.to.getTime(), now.getTime() + 86_400_000));
  const spanDays = Math.max(1, differenceInCalendarDays(chartTo, chartFrom));
  const dayKeys = eachDayKey(chartFrom, chartTo, tz);

  // Bucket by day, week, or month depending on how long the range is.
  const bucket: "day" | "week" | "month" = spanDays <= 62 ? "day" : spanDays <= 400 ? "week" : "month";
  const columns = bucketize(dayKeys, daily, bucket);

  // Native-unit totals in range (characters read, episodes watched…).
  const amounts = new Map<string, number>();
  for (const s of sessions) if (s.amount && s.amountUnit) amounts.set(s.amountUnit, (amounts.get(s.amountUnit) ?? 0) + s.amount);


  return (
    <div>
      <Suspense>
        <RangePicker current={range.preset} from={range.fromKey} to={range.toKey} />
      </Suspense>

      {/* The headline is the time itself — everything else is context for it. One hero
          figure per view (redesign.md §3.1), proportional figures, not tabular. */}
      <div className="mt-7">
        <p className="section-label">{range.label}</p>
        <h1 className="mt-1.5 text-display font-semibold text-foreground">{formatDuration(totalSeconds)}</h1>
        <p className="mt-2.5 text-sm text-muted-foreground">
          {formatNumber(xpFromSeconds(totalSeconds))} XP · {formatNumber(sessionCount)} session
          {sessionCount === 1 ? "" : "s"} · {activeDays} active day{activeDays === 1 ? "" : "s"}
          {activeDays > 0 && <> · {formatDuration(totalSeconds / activeDays)} per active day</>}
        </p>
      </div>

      <Panel className="mt-6" title={bucket === "day" ? "Per day" : bucket === "week" ? "Per week" : "Per month"}>
        {/* Never an axis with nothing on it (redesign.md §7). Counted in *days*, not
            columns: on a week- or month-bucketed range, three active days in one week are
            a single column, which used to hide the chart behind a "log 3 days" message
            that was plainly untrue. */}
        {activeDays >= 3 ? (
          <ColumnChart columns={columns} height={200} />
        ) : (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {activeDays === 0 ? "Nothing logged in this range." : "Log 3 days to see your trend."}
          </p>
        )}
      </Panel>

      <StatStrip
        className="mt-8"
        stats={[
          {
            label: "Daily average",
            value: formatDuration(progression.dailyAverage),
            hint: progression.firstDay ? `since ${formatMonthYear(progression.firstDay)}` : undefined,
          },
          { label: "Current streak", value: `${progression.currentStreak}d`, hint: "consecutive days" },
          { label: "Longest streak", value: `${progression.longestStreak}d`, hint: "all time" },
          { label: "All time", value: formatDuration(lifetime.seconds), hint: pluralize(lifetime.count, "session") },
        ]}
      />

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <Panel title="What you spent it on">
          <TopTitles
            items={top.map((t) => ({ ...t, detail: `${t.count} session${t.count === 1 ? "" : "s"}` }))}
            emptyText="No sessions tied to a library item in this range."
          />
        </Panel>

        <Panel title="Reading vs listening">
          <SplitBar
            segments={[
              { label: "Reading", seconds: groups.reading, color: "bg-d-reading" },
              { label: "Listening", seconds: groups.listening, color: "bg-d-listening" },
            ]}
          />
          <p className="mt-2 text-xs text-muted-foreground">
            {formatDuration(groups.reading)} reading · {formatDuration(groups.listening)} listening
          </p>
          <div className="mt-6">
            <TypeBars rows={breakdown} />
          </div>
        </Panel>
      </div>

      {(reading.characters > 0 || reading.pages > 0) && (
        <section className="mt-10">
          <SectionHeader title="Reading metrics" />
          <StatStrip
            stats={[
              {
                label: "Reading speed",
                value: reading.charsPerHour ? formatCompact(reading.charsPerHour) : "—",
                hint: "chars per hour",
              },
              { label: "Characters", value: formatCompact(reading.characters), hint: formatNumber(reading.characters) },
              { label: "Pages", value: formatNumber(reading.pages) },
              {
                label: "Chars per active day",
                value: activeDays && reading.characters ? formatCompact(Math.round(reading.characters / activeDays)) : "—",
              },
            ]}
          />
        </section>
      )}

      {amounts.size > 0 && (
        <section className="mt-10">
          <SectionHeader title="Amounts logged" />
          <StatStrip
            stats={[...amounts.entries()]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 4)
              .map(([unit, n]) => ({
                label: UNIT_LABELS[unit as keyof typeof UNIT_LABELS],
                value: formatCompact(n),
              }))}
          />
        </section>
      )}

      <section className="mt-10">
        <SectionHeader title="This month vs last" />
        <MonthCompare current={monthTotals} previous={lastMonthTotals} />
      </section>

      <ActivityHeatmap className="mt-10" activity={heat} />
      <p className="mt-3 text-xs text-muted-foreground">
        {progression.activeDays} active days all time
        {lifetime.firstSession && <> · tracking since {formatMonthYear(String(lifetime.firstSession))}</>}
      </p>
    </div>
  );
}

function bucketize(dayKeys: string[], daily: Map<string, { seconds: number }>, bucket: "day" | "week" | "month") {
  if (bucket === "day") {
    return dayKeys.map((k) => ({ label: k.slice(8), title: k, seconds: daily.get(k)?.seconds ?? 0 }));
  }
  const out: { label: string; title: string; seconds: number }[] = [];
  let current: { key: string; label: string; title: string; seconds: number } | null = null;
  for (const k of dayKeys) {
    const d = new Date(k + "T00:00:00Z");
    let key: string;
    let label: string;
    let title: string;
    if (bucket === "week") {
      const dow = (d.getUTCDay() + 6) % 7;
      const mon = new Date(d);
      mon.setUTCDate(d.getUTCDate() - dow);
      key = mon.toISOString().slice(0, 10);
      label = key.slice(5);
      title = `Week of ${key}`;
    } else {
      key = k.slice(0, 7);
      label = new Date(k + "T00:00:00Z").toLocaleString("en", { month: "short", timeZone: "UTC" });
      title = key;
    }
    if (!current || current.key !== key) {
      current = { key, label, title, seconds: 0 };
      out.push(current);
    }
    current.seconds += daily.get(k)?.seconds ?? 0;
  }
  return out;
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
