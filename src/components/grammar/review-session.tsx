"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { relearnPoint, submitReview, undoLastReview, updateGrammarSettings } from "@/actions/grammar";
import type { ReviewCard } from "@/lib/grammar-queries";
import { formatDueIn } from "@/lib/format";
import { checkAnswer, checkBuild, displayAnswer } from "@/lib/grammar/check";
import { pointPath } from "@/lib/grammar/paths";
import type { GrammarSettingsValues } from "@/lib/grammar/settings";
import { isLeech, pickSentence, retryPosition, stageLabel } from "@/lib/grammar/srs";
import { tilesFromBoundaries } from "@/lib/grammar/tiles";
import type { GrammarSentence } from "@/lib/grammar/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/tools/drill-parts";
import { AnswerInput } from "./answer-input";
import { BuildBoard } from "./build-board";
import { SentenceText } from "./sentence-text";

interface Item {
  key: string;
  card: ReviewCard;
  sentence: GrammarSentence;
  /**
   * A missed point asked again later in the session with another sentence. Checked in
   * the browser only: the miss already moved the schedule, and this is practice.
   */
  retry: boolean;
  /** Put the sentence together from tiles instead of typing the blank. */
  build: boolean;
}

interface Result {
  pointId: string;
  deck: string;
  title: string;
  stageBefore: number;
  stageAfter: number;
  nextReviewAt: string | null;
  correct: boolean;
}

type Phase =
  | { kind: "asking"; nudge?: string }
  | { kind: "checking" }
  | {
      kind: "answered";
      correct: boolean;
      typed: string;
      reviewId?: string;
      /** The retry queued by a miss, removed again if the miss is undone. */
      retryKey?: string;
      stageBefore?: number;
      stageAfter?: number;
      /** This miss made the point a leech. */
      leech?: boolean;
      /** Set when the server refused the answer; the card is skipped. */
      error?: string;
      undoing?: boolean;
    };

/**
 * A review session: one sentence at a time, type what fills the blank. Enter checks,
 * Enter again moves on. A near miss shakes the box and says why without costing
 * anything; a wrong answer can be undone for a typo (U); a missed point comes back a few
 * cards later with a different sentence.
 */
export function ReviewSession({
  cards,
  dueTotal,
  upcoming,
  settings,
  tz,
  practice,
  explanations,
}: {
  cards: ReviewCard[];
  dueTotal: number;
  /** The next review not in this session, ISO. */
  upcoming: string | null;
  settings: GrammarSettingsValues;
  tz: string;
  /** Practice outside the schedule: answers are checked in the browser and nothing is saved. */
  practice?: { label: string; href: string };
  /** Each point's explanation, rendered on the server, shown after a miss. */
  explanations?: Record<string, ReactNode>;
}) {
  const [hinted, setHinted] = useState(false);
  const [placed, setPlaced] = useState<number[]>([]);
  const [queue, setQueue] = useState<Item[]>(() => cards.map((c) => ({ key: c.pointId, card: c, sentence: c.sentence, retry: false, build: c.build })));
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>({ kind: "asking" });
  const [shake, setShake] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [furigana, setFurigana] = useState(settings.showFurigana);
  const [english, setEnglish] = useState(settings.showTranslation);
  const input = useRef<HTMLInputElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const retryCount = useRef(0);

  const item = queue[index];
  const cuts = item?.build ? item.card.splits[item.sentence.id] : undefined;
  const tiles = item && cuts ? tilesFromBoundaries(item.sentence, cuts) : [];
  const joined = placed.map((id) => tiles[id]?.text ?? "").join("");

  useEffect(() => {
    if (phase.kind === "asking") input.current?.focus();
    else if (phase.kind === "answered") next.current?.focus();
  }, [phase.kind, index]);

  function saveDisplay(patch: Partial<GrammarSettingsValues>) {
    // Remembered for next time; a failed save just means the default comes back.
    void updateGrammarSettings({ ...settings, showFurigana: furigana, showTranslation: english, ...patch });
  }

  function queueRetry(it: Item): string {
    const key = `${it.card.pointId}:retry${++retryCount.current}`;
    const sentence = pickSentence({ sentences: it.card.sentences }, it.sentence.id);
    setQueue((q) => {
      const at = retryPosition(q.length, index);
      return [...q.slice(0, at), { key, card: it.card, sentence, retry: true, build: it.card.build && sentence.id in it.card.splits }, ...q.slice(at)];
    });
    return key;
  }

  async function check(given: string) {
    if (!item || phase.kind !== "asking") return;
    const local = item.build ? checkBuild(item.sentence, given) : checkAnswer(item.sentence, given);
    if (local.result === "nearMiss") {
      setPhase({ kind: "asking", nudge: local.nudge });
      setShake((n) => n + 1);
      return;
    }
    if (item.retry || practice) {
      const correct = local.result === "correct";
      if (practice && !item.retry) {
        setResults((r) => [
          ...r,
          { pointId: item.card.pointId, deck: item.card.deck, title: item.card.title, stageBefore: item.card.stage, stageAfter: item.card.stage, nextReviewAt: null, correct },
        ]);
      }
      setPhase({ kind: "answered", correct, typed: given, retryKey: correct ? undefined : queueRetry(item) });
      return;
    }

    setPhase({ kind: "checking" });
    const res = await submitReview({
      pointId: item.card.pointId,
      sentenceId: item.sentence.id,
      answer: given,
      mode: item.build ? "build" : "blank",
    });
    if (!res.ok) {
      setPhase({ kind: "answered", correct: false, typed: given, error: res.error });
      return;
    }
    const out = res.data;
    if (out.result === "nearMiss") {
      setPhase({ kind: "asking", nudge: out.nudge });
      setShake((n) => n + 1);
      return;
    }
    const correct = out.result === "correct";
    setResults((r) => [
      ...r,
      {
        pointId: item.card.pointId,
        deck: item.card.deck,
        title: item.card.title,
        stageBefore: out.stageBefore,
        stageAfter: out.stageAfter,
        nextReviewAt: out.nextReviewAt,
        correct,
      },
    ]);
    setPhase({
      kind: "answered",
      correct,
      typed: given,
      reviewId: out.reviewId,
      retryKey: correct ? undefined : queueRetry(item),
      leech: !correct && isLeech(item.card.timesWrong + 1, item.card.timesCorrect),
      stageBefore: out.stageBefore,
      stageAfter: out.stageAfter,
    });
  }

  async function undo() {
    if (!item || phase.kind !== "answered" || phase.correct || phase.error || phase.undoing) return;
    const retryKey = phase.retryKey;
    if (!item.retry && !practice) {
      if (!phase.reviewId) return;
      setPhase({ ...phase, undoing: true });
      const res = await undoLastReview(phase.reviewId);
      if (!res.ok) {
        toast.error(res.error);
        setPhase({ ...phase, undoing: false });
        return;
      }
      setResults((r) => r.filter((x) => x.pointId !== item.card.pointId));
    }
    if (practice && !item.retry) setResults((r) => r.slice(0, -1));
    setQueue((q) => q.filter((i) => i.key !== retryKey));
    setPlaced([]);
    setPhase({ kind: "asking" });
  }

  function advance() {
    setIndex((i) => i + 1);
    setTyped("");
    setPlaced([]);
    setHinted(false);
    setPhase({ kind: "asking" });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phase.kind === "answered") advance();
    else if (item.build) {
      if (placed.length === tiles.length) void check(joined);
    } else if (typed.trim()) void check(typed);
  }

  // U undoes a wrong answer once the input has given up focus to the Next button.
  useEffect(() => {
    if (phase.kind !== "answered" || phase.correct) return;
    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "u" && !e.metaKey && !e.ctrlKey && !e.altKey) void undo();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!item) return <Summary results={results} dueTotal={dueTotal} sessionSize={cards.length} upcoming={upcoming} tz={tz} practice={practice} />;

  const answered = phase.kind === "answered" ? phase : null;
  const firstPass = queue.filter((i) => !i.retry).length;
  const doneFirstPass = queue.slice(0, index).filter((i) => !i.retry).length;

  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-meta text-dim tabular-nums">
          {Math.min(doneFirstPass + (item.retry ? 0 : 1), firstPass)} / {firstPass}
          {practice && `${practice.label} · `}
          {item.retry && "again, with a new sentence"}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <Chip
            on={furigana}
            onClick={() => {
              setFurigana(!furigana);
              saveDisplay({ showFurigana: !furigana });
            }}
            className="px-2.5 py-1 text-xs"
          >
            Furigana
          </Chip>
          <Chip
            on={english}
            onClick={() => {
              setEnglish(!english);
              saveDisplay({ showTranslation: !english });
            }}
            className="px-2.5 py-1 text-xs"
          >
            English
          </Chip>
          <Link href="/grammar" className="ml-1 px-2 text-meta text-dim hover:text-foreground">
            End
          </Link>
        </div>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-muted" aria-hidden>
        <div className="h-full bg-primary transition-all" style={{ width: `${(doneFirstPass / Math.max(1, firstPass)) * 100}%` }} />
      </div>

      <form
        onSubmit={onSubmit}
        onKeyDown={(e) => {
          // A read-only input doesn't submit its form, and focus stays in the box until
          // the answer comes back: Enter there still means "next".
          if (e.key === "Enter" && phase.kind === "answered" && e.target === input.current) {
            e.preventDefault();
            advance();
          }
        }}
        className="grid justify-items-center gap-5 rounded-lg border bg-surface px-4 py-7 text-center sm:px-8 sm:py-10"
      >
        {item.build && cuts ? (
          <>
            <p className="text-xl font-medium sm:text-2xl">{item.sentence.english}</p>
            <p className="-mt-3 text-meta text-dim">Build this sentence in Japanese</p>
            {hinted && !answered && (
              <p className="-mt-2 rounded-sm bg-accent/40 px-2 py-0.5 text-meta text-muted-foreground">
                <span lang="ja" className="font-medium text-foreground">
                  {item.card.title}
                </span>{" "}
                · {item.card.meaning} · <span lang="ja">{item.card.structure}</span>
              </p>
            )}
            <BuildBoard
              key={item.key}
              sentence={item.sentence}
              boundaries={cuts}
              furigana={furigana}
              disabled={!!answered || phase.kind === "checking"}
              placed={placed}
              onPlaced={setPlaced}
              onSubmit={() => void check(joined)}
              checking={phase.kind === "checking"}
            />
            {!answered && (
              <div className="-mt-2 flex justify-center gap-2">
                {!hinted && (
                  <Button type="button" variant="ghost" disabled={phase.kind === "checking"} onClick={() => setHinted(true)}>
                    Hint
                  </Button>
                )}
                <Button type="button" variant="ghost" disabled={phase.kind === "checking"} onClick={() => void check("")}>
                  Show answer
                </Button>
              </div>
            )}
            {answered && !answered.error && (
              <p className="text-xl sm:text-2xl">
                <SentenceText sentence={item.sentence} furigana={furigana} blank="plain" />
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-2xl font-medium sm:text-3xl">
              <SentenceText key={item.key} sentence={item.sentence} furigana={furigana} blank={answered ? "reveal" : "hide"} />
            </p>
            {english && <p className="-mt-2 text-sm text-muted-foreground">{item.sentence.english}</p>}
            {item.sentence.hint && !answered && (
              <p className="-mt-2 rounded-sm bg-accent/40 px-2 py-0.5 text-meta text-muted-foreground">{item.sentence.hint}</p>
            )}
            {hinted && !answered && (
              <p className="-mt-2 rounded-sm bg-accent/40 px-2 py-0.5 text-meta text-muted-foreground">
                <span lang="ja" className="font-medium text-foreground">
                  {item.card.title}
                </span>{" "}
                · {item.card.meaning} · <span lang="ja">{item.card.structure}</span>
              </p>
            )}

            <div className="grid w-full max-w-sm gap-2">
              <AnswerInput
                inputRef={input}
                value={answered ? answered.typed : typed}
                onChange={setTyped}
                readOnly={phase.kind !== "asking"}
                state={answered ? (answered.correct ? "correct" : "wrong") : "idle"}
                shake={shake}
                label="Your answer"
              />
              <div aria-live="polite" className="min-h-5 text-sm text-primary">
                {phase.kind === "asking" && phase.nudge}
              </div>
              {!answered && (
                <div className="flex justify-center gap-2">
                  <Button type="submit" disabled={!typed.trim() || phase.kind === "checking"}>
                    {phase.kind === "checking" ? "Checking…" : "Check"}
                  </Button>
                  {!hinted && (
                    <Button type="button" variant="ghost" disabled={phase.kind === "checking"} onClick={() => setHinted(true)}>
                      Hint
                    </Button>
                  )}
                  <Button type="button" variant="ghost" disabled={phase.kind === "checking"} onClick={() => void check("")}>
                    Don&apos;t know
                  </Button>
                </div>
              )}
            </div>
          </>
        )}

        {answered && (
          <div className="grid w-full max-w-md justify-items-center gap-3">
            {answered.error ? (
              <p className="text-sm text-muted-foreground">{answered.error}. Skipping this one.</p>
            ) : (
              <>
                <div className={cn("text-sm font-medium", answered.correct ? "text-success" : "text-destructive")}>
                  {answered.correct ? "Right" : answered.typed.trim() ? "Not this time" : "The answer is"}
                  {!answered.correct && !item.build && (
                    <span lang="ja" className="ml-2 text-base text-foreground">
                      {displayAnswer(item.sentence)}
                    </span>
                  )}
                </div>
                <div className="grid justify-items-center gap-0.5">
                  <div lang="ja" className="text-lg font-semibold">
                    {item.card.title}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.card.meaning}</div>
                  {answered.stageBefore !== undefined && answered.stageAfter !== undefined && (
                    <div className="text-micro text-dim">
                      {stageLabel(answered.stageBefore)} → {stageLabel(answered.stageAfter)}
                    </div>
                  )}
                </div>
              </>
            )}
            {!answered.correct && !answered.error && (
              <MissPanel
                structure={item.card.structure}
                explanation={explanations?.[item.card.pointId]}
                sentence={item.sentence}
                furigana={furigana}
                leech={answered.leech ? { pointId: item.card.pointId, misses: item.card.timesWrong + 1 } : undefined}
                showSentence={!item.build}
              />
            )}
            <div className="flex flex-wrap justify-center gap-2">
              <Button ref={next} type="submit">
                Next
              </Button>
              {!answered.correct && !answered.error && (
                <Button type="button" variant="outline" onClick={() => void undo()} disabled={answered.undoing}>
                  <Undo2 /> {item.build ? "Undo, my order was fine" : "Undo, it was a typo"}
                </Button>
              )}
              <Button
                variant="ghost"
                nativeButton={false}
                render={<Link href={pointPath({ deck: item.card.deck, id: item.card.pointId })} target="_blank" />}
              >
                View point <ArrowUpRight />
              </Button>
            </div>
          </div>
        )}
      </form>

      <p className="hidden text-center text-micro text-dim sm:block">
        Enter to check and continue{answered && !answered.correct ? " · U to undo a typo" : ""}
      </p>
    </div>
  );
}

/** What a miss teaches: how the pattern is built, the explanation, and the whole sentence, shown right when it's most useful. */
function MissPanel({
  structure,
  explanation,
  sentence,
  furigana,
  leech,
  showSentence,
}: {
  structure: string;
  explanation?: ReactNode;
  sentence: GrammarSentence;
  furigana: boolean;
  leech?: { pointId: string; misses: number };
  showSentence: boolean;
}) {
  const [relearned, setRelearned] = useState(false);
  async function relearn() {
    if (!leech) return;
    const res = await relearnPoint(leech.pointId);
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    setRelearned(true);
    toast.success("Back to stage 1. The next review is in about four hours.");
  }
  return (
    <div className="grid w-full gap-3 rounded-lg border border-border bg-background px-4 py-3 text-left">
      {leech && (
        <div className="grid gap-2 rounded-md border border-primary/40 bg-accent/30 px-3 py-2 text-sm">
          <p>
            <span className="font-medium text-foreground">You&apos;ve missed this one {leech.misses} times.</span> More reviews won&apos;t fix it: reread the
            explanation below, say the example out loud, then start it over from the beginning.
          </p>
          <Button type="button" size="sm" variant="outline" className="w-fit" disabled={relearned} onClick={() => void relearn()}>
            {relearned ? "Starting over" : "Relearn this point"}
          </Button>
        </div>
      )}
      <p lang="ja" className="w-fit rounded-sm border border-border bg-surface px-2 py-0.5 text-sm">
        {structure}
      </p>
      {explanation && <div className="max-h-56 overflow-y-auto">{explanation}</div>}
      {showSentence && (
        <div>
          <p className="text-base">
            <SentenceText sentence={sentence} furigana={furigana} />
          </p>
          <p className="text-sm text-muted-foreground">{sentence.english}</p>
        </div>
      )}
    </div>
  );
}

function Summary({
  results,
  dueTotal,
  sessionSize,
  upcoming,
  tz,
  practice,
}: {
  results: Result[];
  dueTotal: number;
  sessionSize: number;
  upcoming: string | null;
  tz: string;
  practice?: { label: string; href: string };
}) {
  const right = results.filter((r) => r.correct).length;
  const dropped = practice ? [] : results.filter((r) => r.stageAfter < r.stageBefore);
  const missed = practice ? results.filter((r) => !r.correct) : [];
  const burned = results.filter((r) => r.stageAfter > r.stageBefore && r.nextReviewAt === null);
  const moreDue = Math.max(0, dueTotal - sessionSize);
  const soonest = [upcoming, ...results.map((r) => r.nextReviewAt)]
    .filter((d): d is string => !!d)
    .sort()[0];
  const clock = new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit", weekday: "short", timeZone: tz });

  return (
    <div className="mx-auto grid max-w-2xl gap-6">
      <div>
        <h1 className="text-h1 font-semibold">Session done</h1>
        <p className="mt-1 text-meta text-dim">
          {practice ? "Practice doesn't touch your schedule or your stats." : "Grammar reviews don't count as immersion time, so they earn no XP."}
        </p>
      </div>
      <dl className={cn("grid border-y border-border", practice ? "grid-cols-2" : "grid-cols-3")}>
        <SummaryStat label="Reviewed" value={String(results.length)} />
        <SummaryStat label="Accuracy" value={results.length ? `${Math.round((right / results.length) * 100)}%` : "—"} />
        {!practice && (
        <SummaryStat
          label="Next review"
          value={moreDue > 0 ? "now" : soonest ? formatDueIn(soonest) : "—"}
          hint={moreDue === 0 && soonest ? clock.format(new Date(soonest)) : undefined}
        />
        )}
      </dl>

      {dropped.length > 0 && (
        <section>
          <h2 className="text-h3 font-semibold">Dropped back</h2>
          <p className="mt-0.5 text-meta text-dim">These come round again sooner. Each one links to its explanation.</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {dropped.map((r) => (
              <li key={r.pointId} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <Link href={pointPath({ deck: r.deck, id: r.pointId })} lang="ja" className="font-medium hover:text-primary">
                  {r.title}
                </Link>
                <span className="text-dim">
                  {stageLabel(r.stageBefore)} → {stageLabel(r.stageAfter)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {missed.length > 0 && (
        <section>
          <h2 className="text-h3 font-semibold">Still shaky</h2>
          <p className="mt-0.5 text-meta text-dim">Reread these, then try again.</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {missed.map((r) => (
              <li key={r.pointId} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <Link href={pointPath({ deck: r.deck, id: r.pointId })} lang="ja" className="font-medium hover:text-primary">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {burned.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Burned: <span lang="ja">{burned.map((r) => r.title).join("、")}</span>. They&apos;ve stuck, and won&apos;t come up again.
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {practice && (
          <Button nativeButton={false} render={<Link href={practice.href} prefetch={false} />}>
            Practise again
          </Button>
        )}
        {!practice && moreDue > 0 && (
          // The page keys the session on render time, so this remounts with a fresh queue.
          <Button nativeButton={false} render={<Link href="/grammar/review" prefetch={false} />}>
            {moreDue} more due: keep going
          </Button>
        )}
        <Button variant={moreDue > 0 || practice ? "outline" : "default"} nativeButton={false} render={<Link href="/grammar" />}>
          Back to Grammar
        </Button>
      </div>
    </div>
  );
}

function SummaryStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="min-w-0 border-border py-3 pr-3 not-first:border-l not-first:pl-4">
      <dt className="section-label truncate">{label}</dt>
      <dd className="mt-1 truncate text-h1 font-semibold">{value}</dd>
      {hint && <dd className="mt-0.5 truncate text-micro text-dim">{hint}</dd>}
    </div>
  );
}
