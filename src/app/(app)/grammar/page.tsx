import Link from "next/link";
import { formatDueIn, pluralize } from "@/lib/format";
import { DECKS } from "@/lib/grammar/decks";
import { getGrammarOverview } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { PageHeader } from "@/components/layout/page-header";
import { Panel } from "@/components/layout/panel";
import { StatStrip } from "@/components/stats/stat-strip";
import { ForecastBars } from "@/components/grammar/forecast-bars";
import { GrammarSettingsDialog } from "@/components/grammar/settings-dialog";
import { DeckCard } from "@/components/grammar/deck-card";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Grammar" };

export default async function GrammarPage() {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const now = new Date();
  const o = await getGrammarOverview(user.id, tz, now);
  const next24 = o.hours.reduce((a, h) => a + h.count, 0);
  const clock = new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", timeZone: tz });

  return (
    <div className="grid gap-6">
      <PageHeader
        title="Grammar"
        description="Grammar points on a review schedule, one sentence at a time"
        actions={
          <>
            <GrammarSettingsDialog initial={o.settings} />
            {o.newAvailable > 0 && (
              <Button variant={o.dueNow > 0 ? "outline" : "default"} size="lg" nativeButton={false} render={<Link href="/grammar/learn" />}>
                Learn new ({o.newAvailable})
              </Button>
            )}
            {o.dueNow > 0 ? (
              <Button size="lg" nativeButton={false} render={<Link href="/grammar/review" />}>
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
          Learn a few points a day, answer one sentence for each, and they come back for review at growing gaps. Pick any level below.
        </p>
      )}

      <StatStrip
        stats={[
          { label: "Due now", value: o.dueNow, hero: true, hint: o.dueNow === 0 && o.nextDueAt ? `next ${formatDueIn(o.nextDueAt, now)}` : undefined },
          { label: "Due today", value: o.dueToday, hint: o.days[1] ? `${o.days[1].count} tomorrow` : undefined },
          {
            label: "New today",
            value: o.newAvailable,
            hint: o.newLeft === 0 ? "every point learned" : `${o.unlockedToday} of ${o.settings.dailyNewLimit} learned`,
          },
          { label: "Learned", value: o.learnedCount, hint: `${o.newLeft} to go` },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DECKS.map((d) => {
          const c = o.decks.find((x) => x.deckId === d.id)!;
          return <DeckCard key={d.id} deck={d} total={c.total} learned={c.total - c.unlearned} canLearn={o.newAvailable > 0 && c.unlearned > 0} />;
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
        Grammar reviews are study, not immersion: they don&apos;t log time or earn XP, which stays a measure of hours spent in
        real Japanese.
      </p>
    </div>
  );
}
