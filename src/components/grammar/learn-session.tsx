"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { unlockPoints } from "@/actions/grammar";
import { checkAnswer, displayAnswer } from "@/lib/grammar/check";
import { pointPath } from "@/lib/grammar/paths";
import { lessonSentences, pickSentence } from "@/lib/grammar/srs";
import type { GrammarPoint, GrammarSentence } from "@/lib/grammar/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/tools/drill-parts";
import { AnswerInput } from "./answer-input";
import { SentenceText } from "./sentence-text";

export interface Lesson {
  point: GrammarPoint;
  /** The explanation, rendered on the server. */
  explanation: ReactNode;
}

interface QuizItem {
  point: GrammarPoint;
  sentence: GrammarSentence;
}

type Stage = { kind: "lesson"; index: number } | { kind: "quiz" } | { kind: "saving" } | { kind: "done"; added: number };

/**
 * A batch of new points: read each lesson, then answer one sentence per point. A miss
 * sends that point to the back of the quiz with another sentence; once every point has
 * been answered right, they all enter the review schedule together.
 */
export function LearnSession({ lessons, showFurigana, moreAfter, moreHref = "/grammar/learn" }: { lessons: Lesson[]; showFurigana: boolean; moreAfter: boolean; moreHref?: string }) {
  const [stage, setStage] = useState<Stage>({ kind: "lesson", index: 0 });
  const [furigana, setFurigana] = useState(showFurigana);

  async function finish() {
    setStage({ kind: "saving" });
    const res = await unlockPoints(lessons.map((l) => l.point.id));
    if (!res.ok) {
      toast.error(res.error);
      setStage({ kind: "quiz" });
      return;
    }
    setStage({ kind: "done", added: res.data.unlocked.length });
  }

  if (stage.kind === "done" || stage.kind === "saving") {
    return (
      <div className="mx-auto grid max-w-2xl gap-4">
        <h1 className="text-h1 font-semibold">{stage.kind === "saving" ? "Adding to your reviews…" : "Added to your reviews"}</h1>
        {stage.kind === "done" && (
          <>
            <p className="text-sm text-muted-foreground">
              {stage.added === 0
                ? "These were already in your reviews."
                : `${stage.added} new point${stage.added === 1 ? "" : "s"}. The first review comes round in about four hours, then the gaps grow as they stick.`}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button nativeButton={false} render={<Link href="/grammar" />}>
                Back to Grammar
              </Button>
              {moreAfter && (
                <Button variant="outline" nativeButton={false} render={<Link href={moreHref} prefetch={false} />}>
                  Learn more
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  const toggles = (
    <Chip on={furigana} onClick={() => setFurigana(!furigana)} className="px-2.5 py-1 text-xs">
      Furigana
    </Chip>
  );

  if (stage.kind === "quiz") return <Quiz lessons={lessons} furigana={furigana} toggles={toggles} onDone={finish} />;

  const { index } = stage;
  const lesson = lessons[index];
  const last = index === lessons.length - 1;
  return (
    <LessonView
      key={lesson.point.id}
      lesson={lesson}
      position={`${index + 1} / ${lessons.length}`}
      furigana={furigana}
      toggles={toggles}
      onBack={index > 0 ? () => setStage({ kind: "lesson", index: index - 1 }) : undefined}
      onNext={() => setStage(last ? { kind: "quiz" } : { kind: "lesson", index: index + 1 })}
      nextLabel={last ? "Start the quiz" : "Next point"}
    />
  );
}

function LessonView({
  lesson,
  position,
  furigana,
  toggles,
  onBack,
  onNext,
  nextLabel,
}: {
  lesson: Lesson;
  position: string;
  furigana: boolean;
  toggles: ReactNode;
  onBack?: () => void;
  onNext: () => void;
  nextLabel: string;
}) {
  const { point } = lesson;
  const { examples } = lessonSentences(point);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    nextRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <article className="mx-auto grid max-w-2xl gap-6">
      <div className="flex items-center gap-2">
        <span className="text-meta text-dim tabular-nums">New point {position}</span>
        <div className="ml-auto">{toggles}</div>
      </div>

      <header className="grid gap-1.5">
        <h1 lang="ja" className="text-4xl font-semibold text-foreground">
          {point.title}
        </h1>
        <p className="text-lg text-muted-foreground">{point.meaning}</p>
        <p className="mt-1 w-fit rounded-sm border border-border bg-surface px-2.5 py-1 text-sm" lang="ja">
          {point.structure}
        </p>
      </header>

      {lesson.explanation}
      {point.register && (
        <p className="max-w-prose border-l-2 border-primary/60 pl-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Register: </span>
          {point.register}
        </p>
      )}

      <section className="grid gap-3">
        <h2 className="text-h3 font-semibold">Examples</h2>
        <ul className="grid gap-3">
          {examples.map((s) => (
            <li key={s.id} className="rounded-lg border bg-surface px-4 py-3">
              <p className="text-xl">
                <SentenceText sentence={s} furigana={furigana} />
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{s.english}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap items-center gap-2">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft /> Back
          </Button>
        )}
        <Button ref={nextRef} size="lg" onClick={onNext}>
          {nextLabel} <ArrowRight />
        </Button>
        <Link href={pointPath(point)} target="_blank" className="ml-auto text-meta text-dim hover:text-foreground">
          Full page
        </Link>
      </div>
    </article>
  );
}

type QuizPhase = { kind: "asking"; nudge?: string } | { kind: "answered"; correct: boolean; typed: string };

function Quiz({ lessons, furigana, toggles, onDone }: { lessons: Lesson[]; furigana: boolean; toggles: ReactNode; onDone: () => void }) {
  const [queue, setQueue] = useState<QuizItem[]>(() => lessons.map((l) => ({ point: l.point, sentence: lessonSentences(l.point).quiz })));
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<QuizPhase>({ kind: "asking" });
  const [shake, setShake] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const next = useRef<HTMLButtonElement>(null);
  const item = queue[index];

  useEffect(() => {
    if (phase.kind === "asking") input.current?.focus();
    else next.current?.focus();
  }, [phase.kind, index]);

  function check(given: string) {
    const r = checkAnswer(item.sentence, given);
    if (r.result === "nearMiss") {
      setPhase({ kind: "asking", nudge: r.nudge });
      setShake((n) => n + 1);
      return;
    }
    const correct = r.result === "correct";
    // A miss goes to the back of the quiz with a sentence it hasn't asked yet.
    if (!correct) setQueue((q) => [...q, { point: item.point, sentence: pickSentence(item.point, item.sentence.id) }]);
    setPhase({ kind: "answered", correct, typed: given });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phase.kind === "asking") {
      if (typed.trim()) check(typed);
      return;
    }
    advance();
  }

  function advance() {
    if (index + 1 >= queue.length) {
      onDone();
      return;
    }
    setIndex(index + 1);
    setTyped("");
    setPhase({ kind: "asking" });
  }

  const answered = phase.kind === "answered" ? phase : null;
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <div className="flex items-center gap-2">
        <span className="text-meta text-dim tabular-nums">
          Quiz · {index + 1} / {queue.length}
        </span>
        <div className="ml-auto">{toggles}</div>
      </div>
      <form
        onSubmit={onSubmit}
        onKeyDown={(e) => {
          // A read-only input doesn't submit its form: Enter in the answered box still means "next".
          if (e.key === "Enter" && answered && e.target === input.current) {
            e.preventDefault();
            advance();
          }
        }}
        className="grid justify-items-center gap-5 rounded-lg border bg-surface px-4 py-7 text-center sm:px-8 sm:py-10"
      >
        <p className="text-2xl font-medium sm:text-3xl">
          <SentenceText key={`${index}`} sentence={item.sentence} furigana={furigana} blank={answered ? "reveal" : "hide"} />
        </p>
        <p className="-mt-2 text-sm text-muted-foreground">{item.sentence.english}</p>
        {!answered && (
          <p className="-mt-2 text-meta text-dim">
            <span lang="ja">{item.point.title}</span>
            {item.sentence.hint && <> · {item.sentence.hint}</>}
          </p>
        )}
        <div className="grid w-full max-w-sm gap-2">
          <AnswerInput
            inputRef={input}
            value={answered ? answered.typed : typed}
            onChange={setTyped}
            readOnly={!!answered}
            state={answered ? (answered.correct ? "correct" : "wrong") : "idle"}
            shake={shake}
            label="Your answer"
          />
          <div aria-live="polite" className="min-h-5 text-sm text-primary">
            {phase.kind === "asking" && phase.nudge}
          </div>
          {!answered && (
            <div className="flex justify-center gap-2">
              <Button type="submit" disabled={!typed.trim()}>
                Check
              </Button>
              <Button type="button" variant="ghost" onClick={() => check("")}>
                Show answer
              </Button>
            </div>
          )}
        </div>
        {answered && (
          <div className="grid justify-items-center gap-3">
            <div className={cn("text-sm font-medium", answered.correct ? "text-success" : "text-destructive")}>
              {answered.correct ? "Right" : "The answer is"}
              {!answered.correct && (
                <span lang="ja" className="ml-2 text-base text-foreground">
                  {displayAnswer(item.sentence)}
                </span>
              )}
            </div>
            {!answered.correct && <p className="text-meta text-dim">This one comes back at the end with another sentence.</p>}
            <Button ref={next} type="submit">
              {index + 1 >= queue.length ? "Add to my reviews" : "Next"}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
