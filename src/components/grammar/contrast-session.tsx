"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/tools/drill-parts";
import { SentenceText } from "./sentence-text";

export interface ContrastItem {
  id: string;
  japanese: string;
  reading: string;
  english: string;
  /** Already shuffled. */
  choices: string[];
  answer: string;
  why: string;
}

export interface ContrastPoint {
  title: string;
  gist: string;
  href: string;
}

/**
 * One sentence at a time with the competing choices as buttons. A miss comes back once
 * at the end. Practice only: nothing is saved.
 */
export function ContrastSession({
  title,
  blurb,
  points,
  items,
  showFurigana,
}: {
  title: string;
  blurb: string;
  points: ContrastPoint[];
  items: ContrastItem[];
  showFurigana: boolean;
}) {
  const [queue, setQueue] = useState(items);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [furigana, setFurigana] = useState(showFurigana);
  const [missed, setMissed] = useState<ContrastItem[]>([]);
  const [firstTry, setFirstTry] = useState(0);

  const item = queue[index];
  const answered = picked !== null;
  const correct = picked === item?.answer;

  function pick(choice: string) {
    if (!item || answered) return;
    setPicked(choice);
    const first = index < items.length;
    if (choice === item.answer) {
      if (first) setFirstTry((n) => n + 1);
    } else {
      if (first) setMissed((m) => [...m, item]);
      setQueue((q) => [...q, { ...item, id: `${item.id}:again` }]);
    }
  }

  function next() {
    setIndex((i) => i + 1);
    setPicked(null);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || !item) return;
      if (answered && e.key === "Enter") {
        e.preventDefault();
        next();
      } else if (!answered && /^[1-9]$/.test(e.key)) {
        const choice = item.choices[Number(e.key) - 1];
        if (choice) pick(choice);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!item) {
    return (
      <div className="mx-auto grid max-w-2xl gap-6">
        <div>
          <h1 className="text-h1 font-semibold" lang="ja">
            {title}
          </h1>
          <p className="mt-1 text-meta text-dim">Contrast practice doesn&apos;t touch your schedule or your stats.</p>
        </div>
        <dl className="grid grid-cols-2 border-y border-border">
          <div className="py-3 pr-3">
            <dt className="section-label">First try</dt>
            <dd className="mt-1 text-h1 font-semibold">
              {firstTry} / {items.length}
            </dd>
          </div>
          <div className="border-l border-border py-3 pl-4">
            <dt className="section-label">Accuracy</dt>
            <dd className="mt-1 text-h1 font-semibold">{Math.round((firstTry / items.length) * 100)}%</dd>
          </div>
        </dl>
        {missed.length > 0 && (
          <section>
            <h2 className="text-h3 font-semibold">Missed</h2>
            <ul className="mt-3 grid gap-3 text-sm">
              {missed.map((m) => (
                <li key={m.id} className="border-b border-border pb-3">
                  <p lang="ja" className="text-lg">
                    <SentenceText sentence={m} furigana={furigana} />
                  </p>
                  <p className="text-muted-foreground">{m.english}</p>
                  <p className="mt-1">{m.why}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => window.location.reload()}>Practise again</Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/grammar/contrast" />}>
            All contrasts
          </Button>
        </div>
      </div>
    );
  }

  const firstPass = items.length;
  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-meta text-dim tabular-nums">
          <span lang="ja">{title}</span> · {Math.min(index + 1, firstPass)} / {firstPass}
          {index >= firstPass && " · again"}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <Chip on={furigana} onClick={() => setFurigana(!furigana)} className="px-2.5 py-1 text-xs">
            Furigana
          </Chip>
          <Link href="/grammar/contrast" className="ml-1 px-2 text-meta text-dim hover:text-foreground">
            End
          </Link>
        </div>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-muted" aria-hidden>
        <div className="h-full bg-primary transition-all" style={{ width: `${(Math.min(index, firstPass) / firstPass) * 100}%` }} />
      </div>

      <details className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
        <summary className="cursor-pointer text-muted-foreground">{blurb}</summary>
        <ul className="mt-2 grid gap-1.5 pb-1">
          {points.map((p) => (
            <li key={p.href}>
              <Link href={p.href} target="_blank" lang="ja" className="font-medium hover:text-primary">
                {p.title}
              </Link>
              <span className="text-muted-foreground"> · {p.gist}</span>
            </li>
          ))}
        </ul>
      </details>

      <div className="grid justify-items-center gap-5 rounded-lg border bg-surface px-4 py-7 text-center sm:px-8 sm:py-10">
        <p className="text-2xl font-medium sm:text-3xl">
          <SentenceText key={item.id} sentence={item} furigana={furigana} blank={answered ? "reveal" : "hide"} />
        </p>
        <p className="-mt-2 text-sm text-muted-foreground">{item.english}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {item.choices.map((c, i) => (
            <button
              key={c}
              type="button"
              lang="ja"
              disabled={answered}
              onClick={() => pick(c)}
              className={cn(
                "rounded-md border bg-background px-4 py-2.5 text-lg transition-colors enabled:hover:border-primary enabled:hover:bg-accent/40",
                answered && c === item.answer && "border-success text-success",
                answered && c === picked && c !== item.answer && "border-destructive text-destructive line-through",
              )}
            >
              <span className="mr-2 text-micro text-dim no-underline">{i + 1}</span>
              {c}
            </button>
          ))}
        </div>

        {answered && (
          <div className="grid max-w-md justify-items-center gap-3">
            <div className={cn("text-sm font-medium", correct ? "text-success" : "text-destructive")}>{correct ? "Right" : "Not this time"}</div>
            <p className="text-sm text-muted-foreground">{item.why}</p>
            {!correct && <p className="text-meta text-dim">This one comes back at the end.</p>}
            <Button autoFocus onClick={next}>
              {index + 1 >= queue.length ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
