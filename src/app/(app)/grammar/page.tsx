import Link from "next/link";
import { formatDueIn, pluralize } from "@/lib/format";
import { DECKS, deckPath } from "@/lib/grammar/decks";
import { getGrammarOverview } from "@/lib/grammar-queries";
import { requireUser } from "@/lib/session";
import { PageHeader } from "@/components/layout/page-header";
import { Panel, PanelLink } from "@/components/layout/panel";
import { StatStrip } from "@/components/stats/stat-strip";
import { ForecastBars } from "@/components/grammar/forecast-bars";
import { GrammarSettingsForm } from "@/components/grammar/settings-form";
import { StageBar } from "@/components/grammar/stage-bar";
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
        <Panel title="How it works">
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            Learn a few points a day: read a short explanation and some examples, then answer one sentence for each. After
            that they come back for review, first after four hours, then after longer and longer gaps as long as you keep
            getting them right. Miss one and it drops back a little. Answer in romaji or kana; no Japanese keyboard needed.
            Start with <Link href={deckPath(DECKS[0])} className="text-primary hover:underline">{DECKS[0].title}</Link>, or
            press Learn new.
          </p>
        </Panel>
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

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid gap-6">
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

          {DECKS.map((d) => {
            const counts = o.decks.find((x) => x.deckId === d.id)!;
            return (
              <Panel key={d.id} title={d.title} description={`${d.points.length} points`} action={
                  <span className="flex items-center gap-3">
                    {o.newAvailable > 0 && counts.unlearned > 0 && (
                      <PanelLink href={`/grammar/learn?deck=${d.id}`}>Learn {d.level}</PanelLink>
                    )}
                    <PanelLink href={deckPath(d)}>All points</PanelLink>
                  </span>
                }
              >
                <StageBar counts={counts.counts} total={counts.total} />
              </Panel>
            );
          })}
        </div>

        <Panel title="Settings" description="Pace and display">
          <GrammarSettingsForm initial={o.settings} />
        </Panel>
      </div>

      <p className="text-micro text-dim">
        Grammar reviews are study, not immersion: they don&apos;t log time or earn XP, which stays a measure of hours spent in
        real Japanese.
      </p>
    </div>
  );
}
