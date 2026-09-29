"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { submitKanjiReview, type KanjiReviewOutcome } from "@/actions/kanji";
import { checkPrompt } from "@/lib/kanji/check";
import { displayReading, promptsFor, type Kanji, type PromptKind } from "@/lib/kanji/readings";
import { retryPosition, stageLabel } from "@/lib/grammar/srs";
import { cn } from "@/lib/utils";
import { AnswerInput } from "@/components/grammar/answer-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LABEL: Record<PromptKind, string> = { meaning: "Meaning", on: "On'yomi", kun: "Kun'yomi" };
const HINT: Record<PromptKind, string> = {
  meaning: "in English",
  on: "the Chinese-derived reading, usually in compounds",
  kun: "the native Japanese reading, often with okurigana",
};

/** What the right answers look like, shown after a miss. */
function correctText(k: Kanji, kind: PromptKind): string {
  if (kind === "meaning") return k.m.join(", ");
  return (kind === "on" ? k.on : k.kun).map(displayReading).join("、 ");
}

interface Card {
  k: Kanji;
  /** A second go at a kanji already answered: it teaches, and isn't submitted again. */
  retry: boolean;
}

type Phase =
  | { kind: "ask"; step: number; answers: Partial<Record<PromptKind, string>>; missed: PromptKind[] }
  | { kind: "reveal"; answers: Partial<Record<PromptKind, string>>; missed: PromptKind[]; outcome: KanjiReviewOutcome | null; error?: string };

/**
 * One kanji at a time: its meaning, then each kind of reading it has, on'yomi and kun'yomi
 * asked separately. Typos and the wrong reading type get another go; a real miss shows the
 * answer. A kanji with any miss comes round again a few cards later. In `submit` mode the
 * first pass at each kanji is graded on the server (the schedule moves); in practice mode
 * (a lesson's quiz) nothing is sent.
 */
export function KanjiQuiz({
  kanji,
  submit,
  onDone,
}: {
  kanji: Kanji[];
  submit: boolean;
  onDone: (stats: { cards: number; firstTryRight: number }) => void;
}) {
  const [queue, setQueue] = useState<Card[]>(() => kanji.map((k) => ({ k, retry: false })));
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>({ kind: "ask", step: 0, answers: {}, missed: [] });
  const [value, setValue] = useState("");
  const [nudge, setNudge] = useState<string | null>(null);
  const [shake, setShake] = useState(0);
  const [pending, setPending] = useState(false);
  const [firstTryRight, setFirstTryRight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const continueRef = useRef<HTMLButtonElement>(null);

  const card = queue[i];
  const kinds = useMemo(() => (card ? promptsFor(card.k) : []), [card]);
  const kind = phase.kind === "ask" ? kinds[phase.step] : undefined;

  useEffect(() => {
    if (phase.kind === "ask") inputRef.current?.focus();
    else continueRef.current?.focus();
  }, [phase.kind, i, kind]);

  if (!card) return null;

  async function answer(e: React.FormEvent) {
    e.preventDefault();
    if (phase.kind !== "ask" || !kind || pending || !value.trim()) return;
    const res = checkPrompt(card.k, kind, value);
    if (res.result === "nearMiss") {
      setNudge(res.nudge);
      setShake((n) => n + 1);
      return;
    }
    const answers = { ...phase.answers, [kind]: value };
    const missed = res.result === "wrong" ? [...phase.missed, kind] : phase.missed;
    setValue("");
    setNudge(null);
    if (phase.step + 1 < kinds.length) {
      setPhase({ kind: "ask", step: phase.step + 1, answers, missed });
      return;
    }
    // Last prompt: the kanji is graded.
    if (submit && !card.retry) {
      setPending(true);
      const r = await submitKanjiReview({ kanji: card.k.c, answers });
      setPending(false);
      setPhase({ kind: "reveal", answers, missed, outcome: r.ok ? r.data : null, error: r.ok ? undefined : r.error });
    } else {
      setPhase({ kind: "reveal", answers, missed, outcome: null });
    }
  }

  function next() {
    if (phase.kind !== "reveal") return;
    const right = phase.missed.length === 0;
    let q = queue;
    if (!right) {
      const at = retryPosition(q.length, i);
      q = [...q.slice(0, at), { k: card.k, retry: true }, ...q.slice(at)];
      setQueue(q);
    }
    const rightSoFar = right && !card.retry ? firstTryRight + 1 : firstTryRight;
    setFirstTryRight(rightSoFar);
    if (i + 1 >= q.length) {
      onDone({ cards: kanji.length, firstTryRight: rightSoFar });
      return;
    }
    setI(i + 1);
    setPhase({ kind: "ask", step: 0, answers: {}, missed: [] });
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-6 py-4 text-center">
      <p className="text-meta text-dim tabular-nums" aria-live="polite">
        {Math.min(i + 1, queue.length)} of {queue.length}
        {card.retry && " · another go"}
      </p>
      <div lang="ja" className="text-[7rem] leading-none font-medium text-foreground sm:text-[8rem]">
        {card.k.c}
      </div>

      {phase.kind === "ask" && kind && (
        <form onSubmit={answer} className="grid gap-3">
          <div>
            <p className="section-label">{LABEL[kind]}</p>
            <p className="mt-0.5 text-micro text-dim">{HINT[kind]}</p>
          </div>
          {kind === "meaning" ? (
            <Input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-label="Meaning"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              placeholder="type the meaning"
              className="h-12 text-center text-xl md:text-xl"
            />
          ) : (
            <AnswerInput value={value} onChange={setValue} inputRef={inputRef} label={LABEL[kind]} shake={shake} />
          )}
          {nudge && <p className="text-meta text-muted-foreground">{nudge}</p>}
          <Button type="submit" size="lg" disabled={!value.trim() || pending}>
            {pending ? "Checking…" : "Check"}
          </Button>
        </form>
      )}

      {phase.kind === "reveal" && (
        <div className="grid gap-4">
          <dl className="grid gap-2 text-left">
            {kinds.map((kd) => {
              const missed = phase.missed.includes(kd);
              return (
                <div key={kd} className="grid grid-cols-[6rem_1fr] items-baseline gap-3 rounded-md border border-border bg-surface px-3 py-2">
                  <dt className="section-label">{LABEL[kd]}</dt>
                  <dd className="text-sm">
                    <span lang={kd === "meaning" ? "en" : "ja"} className={cn(missed ? "text-danger" : "text-success", "font-medium")}>
                      {correctText(card.k, kd)}
                    </span>
                    {missed && phase.answers[kd] && <span className="ml-2 text-dim line-through">{phase.answers[kd]}</span>}
                  </dd>
                </div>
              );
            })}
          </dl>
          {phase.error && <p className="text-meta text-danger">{phase.error}</p>}
          {phase.outcome && (
            <p className="text-meta text-muted-foreground">
              {phase.outcome.correct ? "Right" : "Missed"}
              {" · "}
              {phase.outcome.nextReviewAt ? stageLabel(phase.outcome.stageAfter) : "Burned: you've got it for good"}
            </p>
          )}
          {phase.missed.length > 0 && <p className="text-meta text-muted-foreground">It comes back in a few cards.</p>}
          <Button ref={continueRef} size="lg" onClick={next}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}
