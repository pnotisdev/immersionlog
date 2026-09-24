"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { countChars } from "@/lib/characters";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { PASSAGES, type Passage } from "./reading-passages";

export interface ReferenceTitle {
  title: string;
  path: string;
  chars: number;
}

// Characters an hour; the same bands the title pages use.
const BANDS = [
  { min: 20_000, label: "Fluent", note: "You read Japanese about as fast as many native readers read for pleasure." },
  { min: 10_000, label: "Comfortable", note: "Novels and visual novels are very doable at this speed." },
  { min: 5_000, label: "Building up", note: "Graded readers, manga and easier light novels are a good fit." },
  { min: 0, label: "Starting out", note: "Everyone starts here. Speed comes from volume: the more you read, the faster it gets." },
];

type Stage = { kind: "pick" } | { kind: "reading"; startedAt: number } | { kind: "question"; seconds: number } | { kind: "result"; seconds: number; correct: boolean };

function hours(h: number): string {
  if (h < 1) return `${Math.max(1, Math.round(h * 60))} min`;
  return h < 10 ? `${h.toFixed(1)} h` : `${formatNumber(Math.round(h))} h`;
}

export function ReadingSpeedTest({ references, signedIn, pageUrl }: { references: ReferenceTitle[]; signedIn: boolean; pageUrl: string }) {
  const [passage, setPassage] = useState<Passage>(PASSAGES[0]);
  const [stage, setStage] = useState<Stage>({ kind: "pick" });
  const [choice, setChoice] = useState<number | null>(null);
  const top = useRef<HTMLDivElement>(null);
  const chars = useMemo(() => countChars(passage.text), [passage]);

  function scrollTop() {
    requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function start() {
    setChoice(null);
    setStage({ kind: "reading", startedAt: performance.now() });
    scrollTop();
  }

  function done() {
    if (stage.kind !== "reading") return;
    setStage({ kind: "question", seconds: Math.max(1, (performance.now() - stage.startedAt) / 1000) });
    scrollTop();
  }

  function answer() {
    if (stage.kind !== "question" || choice === null) return;
    setStage({ kind: "result", seconds: stage.seconds, correct: choice === passage.answer });
    scrollTop();
  }

  return (
    <div ref={top} className="scroll-mt-24">
      {stage.kind === "pick" && (
        <div className="grid gap-5">
          <div className="grid gap-2 sm:grid-cols-3">
            {PASSAGES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPassage(p)}
                className={cn(
                  "rounded-md border p-4 text-left transition-colors",
                  p.id === passage.id ? "border-primary bg-accent/40" : "hover:border-primary/50",
                )}
              >
                <div className="font-medium">{p.label}</div>
                <div className="mt-1 text-meta text-dim">{p.hint}</div>
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Read the passage at your normal pace, the way you would read for fun. Don&apos;t skim, and don&apos;t look words up. Press{" "}
            <strong>Done</strong> when you reach the end, then answer one question about it. The {passage.label.toLowerCase()} passage is{" "}
            {formatNumber(chars)} characters.
          </p>
          <div>
            <Button size="lg" onClick={start}>
              Start reading
            </Button>
          </div>
        </div>
      )}

      {stage.kind === "reading" && (
        <div className="grid gap-6">
          <article lang="ja" className="rounded-lg border bg-surface p-5 sm:p-8">
            <h2 className="text-xl font-semibold">{passage.title}</h2>
            <div className="mt-4 grid gap-4 text-lg leading-[2] tracking-wide">
              {passage.text.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
          <div className="sticky bottom-4 flex justify-center">
            <Button size="lg" onClick={done} className="shadow-lg">
              Done
            </Button>
          </div>
        </div>
      )}

      {stage.kind === "question" && (
        <div className="grid gap-4">
          <p className="text-meta text-dim">One question, to check it wasn&apos;t a skim.</p>
          <p lang="ja" className="text-lg font-medium">
            {passage.question}
          </p>
          <div className="grid gap-2">
            {passage.options.map((o, i) => (
              <label
                key={o}
                lang="ja"
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors",
                  choice === i ? "border-primary bg-accent/40" : "hover:border-primary/50",
                )}
              >
                <input type="radio" name="answer" className="accent-[var(--primary)]" checked={choice === i} onChange={() => setChoice(i)} />
                {o}
              </label>
            ))}
          </div>
          <div>
            <Button onClick={answer} disabled={choice === null}>
              See my speed
            </Button>
          </div>
        </div>
      )}

      {stage.kind === "result" && (
        <Result
          passage={passage}
          chars={chars}
          seconds={stage.seconds}
          correct={stage.correct}
          references={references}
          signedIn={signedIn}
          pageUrl={pageUrl}
          onRetry={() => setStage({ kind: "pick" })}
        />
      )}
    </div>
  );
}

function Result({
  passage,
  chars,
  seconds,
  correct,
  references,
  signedIn,
  pageUrl,
  onRetry,
}: {
  passage: Passage;
  chars: number;
  seconds: number;
  correct: boolean;
  references: ReferenceTitle[];
  signedIn: boolean;
  pageUrl: string;
  onRetry: () => void;
}) {
  const perMinute = Math.round((chars / seconds) * 60);
  const perHour = perMinute * 60;
  const band = BANDS.find((b) => perHour >= b.min) ?? BANDS[BANDS.length - 1];
  const suspicious = perMinute > 900;

  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-surface p-5 sm:p-8">
        <p className="text-meta text-dim">
          {passage.label} passage · {formatNumber(chars)} characters in {seconds < 90 ? `${Math.round(seconds)} s` : `${Math.floor(seconds / 60)} min ${Math.round(seconds % 60)} s`}
        </p>
        <p className="mt-2 text-display font-semibold tabular-nums">{formatNumber(perMinute)} characters a minute</p>
        <p className="mt-1 text-lg">
          About <strong className="tabular-nums">{formatNumber(perHour)}</strong> an hour · <span className="text-primary">{band.label}</span>
        </p>
        <p className="mt-3 max-w-prose text-sm text-muted-foreground">{band.note}</p>
        {!correct && (
          <p className="mt-3 max-w-prose text-sm">
            You missed the comprehension question (the answer was 「{passage.options[passage.answer]}」), so this is probably faster
            than your real reading speed. Try again a little slower, or pick an easier passage.
          </p>
        )}
        {correct && suspicious && (
          <p className="mt-3 max-w-prose text-sm">That&apos;s very fast. If you skimmed parts of it, the number will be high.</p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="outline" onClick={onRetry}>
            Try another passage
          </Button>
          <CopyButton
            value={`I read Japanese at about ${formatNumber(perHour)} characters an hour (${passage.label.toLowerCase()} passage). Test yours: ${pageUrl}`}
            label="Copy result"
            copiedLabel="Copied"
            size="default"
          />
        </div>
      </div>

      {references.length > 0 && (
        <div>
          <h2 className="text-h3 font-semibold">At this speed</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {references.map((r) => (
              <li key={r.path} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <Link href={r.path} className="hover:text-primary">
                  {r.title} <span className="text-dim">({formatNumber(r.chars)} characters)</span>
                </Link>
                <span className="shrink-0 font-medium tabular-nums">{hours(r.chars / perHour)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-lg border p-5">
        <h2 className="text-h3 font-semibold">Watch your speed go up</h2>
        <p className="mt-1 max-w-prose text-sm text-muted-foreground">
          One test is a snapshot. immersionlog works out your reading speed from real sessions (log the time and the characters, or
          use the texthooker with a visual novel) so you can see it change month to month.
        </p>
        <div className="mt-4">
          <Link
            href={signedIn ? "/dashboard" : "/signup"}
            className="inline-flex h-10 items-center rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            {signedIn ? "Log a reading session" : "Track your reading for free"}
          </Link>
        </div>
      </div>
    </div>
  );
}
