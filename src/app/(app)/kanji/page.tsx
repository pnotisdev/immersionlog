import Link from "next/link";
import { formatDueIn, pluralize } from "@/lib/format";
import { KANJI_GROUPS } from "@/lib/kanji";
import { getKanjiOverview } from "@/lib/kanji-queries";
import { requireUser } from "@/lib/session";
import { PageHeader } from "@/components/layout/page-header";
import { Panel } from "@/components/layout/panel";
import { StatStrip } from "@/components/stats/stat-strip";
import { ForecastBars } from "@/components/grammar/forecast-bars";
import { KanjiCard } from "@/components/kanji/kanji-card";
import { KanjiSettingsDialog } from "@/components/kanji/kanji-settings";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Kanji" };

export default async function KanjiPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const now = new Date();
  const o = await getKanjiOverview(user.id, tz, now);
  const next24 = o.hours.reduce((a, h) => a + h.count, 0);
  const clock = new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", timeZone: tz });

  return (
    <div className="grid gap-6">
      <PageHeader
        title="Kanji"
        description="All 2,136 jōyō kanji on a review schedule: meaning, on'yomi and kun'yomi"
        actions={
          <>
            <KanjiSettingsDialog initial={o.settings} />
            {o.newAvailable > 0 && (
              <Button variant={o.dueNow > 0 ? "outline" : "default"} size="lg" nativeButton={false} render={<Link href="/kanji/learn" />}>
                Learn new ({o.newAvailable})
              </Button>
            )}
            {o.dueNow > 0 ? (
              <Button size="lg" nativeButton={false} render={<Link href="/kanji/review" />}>
                Start reviews ({o.dueNow})
              </Button>
            ) : (
              <Button size="lg" variant="outline" disabled>
                No reviews due
              </Button>
            )}
          </>
        }
      />

      {o.learnedCount === 0 && (
        <p className="text-meta text-muted-foreground">
          Learn a few kanji a day: each review asks its meaning, then its on&apos;yomi and kun&apos;yomi. Start from any grade below.
        </p>
      )}

      <StatStrip
        stats={[
          { label: "Due now", value: o.dueNow, hero: true, hint: o.dueNow === 0 && o.nextDueAt ? `next ${formatDueIn(o.nextDueAt, now)}` : undefined },
          { label: "Due today", value: o.dueToday, hint: o.days[1] ? `${o.days[1].count} tomorrow` : undefined },
          { label: "New today", value: o.newAvailable, hint: `${o.unlockedToday} of ${o.settings.dailyNewLimit} learned` },
          { label: "Learned", value: o.learnedCount, hint: `of ${o.total}` },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KANJI_GROUPS.map((g) => {
          const p = o.groups.find((x) => x.groupId === g.id)!;
          return <KanjiCard key={g.id} group={g} total={p.total} learned={p.learned} canLearn={o.newAvailable > 0 && p.learned < p.total} />;
        })}
      </div>

      <Panel
        title="Next 24 hours"
        description={
          next24 > 0 ? (
            <>
              {pluralize(next24, "review")} coming up
              {o.nextDueAt && <> · next at {clock.format(o.nextDueAt)}</>}
            </>
          ) : (
            "Nothing new comes due in the next day"
          )
        }
      >
        <ForecastBars hours={o.hours} />
      </Panel>

      <p className="text-micro text-dim">
        Kanji reviews are study, not immersion: they don&apos;t log time or earn XP. Kanji data from KANJIDIC2 (EDRDG), used under{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline" rel="noreferrer">
          CC BY-SA 4.0
        </a>
        , via kanjiapi.dev.
      </p>
    </div>
  );
}
