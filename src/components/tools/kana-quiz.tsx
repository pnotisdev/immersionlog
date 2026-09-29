"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildDeck, isCorrect, KANA_GROUPS, KANA_SETS, shuffle, type KanaCard, type Script } from "@/lib/kana-drill";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chip, SettingRow, Stat, toggle, useStoredSettings } from "./drill-parts";

type Mode = "type" | "pick";

interface Settings {
  scripts: Script[];
  groups: string[];
  mode: Mode;
}

const DEFAULTS: Settings = {
  scripts: ["hiragana"],
  groups: KANA_GROUPS.filter((g) => g.set === "basic").map((g) => g.id),
  mode: "type",
};

function isSettings(v: unknown): v is Settings {
  const s = v as Settings | null;
  return (
    !!s &&
    Array.isArray(s.scripts) &&
    s.scripts.every((x) => x === "hiragana" || x === "katakana") &&
    Array.isArray(s.groups) &&
    s.groups.every((g) => KANA_GROUPS.some((k) => k.id === g)) &&
    (s.mode === "type" || s.mode === "pick")
  );
}

// A missed card comes back this many cards later, so it's tested again while it's fresh
// but not straight away.
const RETRY_GAP = 4;

interface Round {
  queue: KanaCard[];
  index: number;
  /** Kana answered wrong at least once this round. */
  missed: string[];
  startedAt: number;
  finishedAt?: number;
  /** Cards in the round before any retries were added. */
  size: number;
}

function newRound(cards: KanaCard[]): Round {
  return { queue: shuffle(cards), index: 0, missed: [], startedAt: Date.now(), size: cards.length };
}

export function KanaQuiz() {
  const [settings, setSettings] = useStoredSettings("kana-quiz", DEFAULTS, isSettings);
  const [round, setRound] = useState<Round | null>(null);
  const top = useRef<HTMLDivElement>(null);

  const deck = useMemo(() => buildDeck(settings.groups, settings.scripts), [settings]);

  function start(cards: KanaCard[]) {
    setRound(newRound(cards));
    requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <div ref={top} className="scroll-mt-24">
      {!round && <Setup settings={settings} onChange={setSettings} count={deck.length} onStart={() => start(deck)} />}
      {round && !round.finishedAt && <Drill round={round} setRound={setRound} mode={settings.mode} scripts={settings.scripts} onQuit={() => setRound(null)} />}
      {round?.finishedAt && (
        <Result
          round={round}
          onAgain={() => start(deck)}
          onMisses={() => start(deck.filter((c) => round.missed.includes(c.kana)))}
          onSettings={() => setRound(null)}
        />
      )}
    </div>
  );
}

function Setup({
  settings,
  onChange,
  count,
  onStart,
}: {
  settings: Settings;
  onChange: (s: Settings) => void;
  count: number;
  onStart: () => void;
}) {
  const scriptChoices: { id: string; label: string; scripts: Script[] }[] = [
    { id: "h", label: "Hiragana", scripts: ["hiragana"] },
    { id: "k", label: "Katakana", scripts: ["katakana"] },
    { id: "b", label: "Both", scripts: ["hiragana", "katakana"] },
  ];
  const showKatakana = settings.scripts.length === 1 && settings.scripts[0] === "katakana";

  return (
    <div className="grid gap-6 rounded-lg border bg-surface p-5 sm:p-6">
      <SettingRow label="Script">
        {scriptChoices.map((c) => (
          <Chip key={c.id} on={settings.scripts.join() === c.scripts.join()} onClick={() => onChange({ ...settings, scripts: c.scripts })}>
            {c.label}
          </Chip>
        ))}
      </SettingRow>

      {KANA_SETS.map((set) => {
        const groups = KANA_GROUPS.filter((g) => g.set === set.id);
        const ids = groups.map((g) => g.id);
        const allOn = ids.every((id) => settings.groups.includes(id));
        return (
          <SettingRow
            key={set.id}
            label={set.label}
            hint={
              <button
                type="button"
                className="underline-offset-2 hover:text-foreground hover:underline"
                onClick={() =>
                  onChange({
                    ...settings,
                    groups: allOn ? settings.groups.filter((g) => !ids.includes(g)) : [...new Set([...settings.groups, ...ids])],
                  })
                }
              >
                {allOn ? "none" : "all"}
              </button>
            }
          >
            {groups.map((g) => (
              <Chip
                key={g.id}
                lang="ja"
                on={settings.groups.includes(g.id)}
                onClick={() => onChange({ ...settings, groups: toggle(settings.groups, g.id) })}
                className="min-w-11 text-center"
              >
                {showKatakana ? g.cards[0].katakana : g.label}
              </Chip>
            ))}
          </SettingRow>
        );
      })}

      <SettingRow label="Answer by">
        <Chip on={settings.mode === "type"} onClick={() => onChange({ ...settings, mode: "type" })}>
          Typing the romaji
        </Chip>
        <Chip on={settings.mode === "pick"} onClick={() => onChange({ ...settings, mode: "pick" })}>
          Picking the kana
        </Chip>
      </SettingRow>

      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg" onClick={onStart} disabled={count === 0}>
          Start
        </Button>
        <span className="text-sm text-muted-foreground">{count === 0 ? "Pick at least one row." : `${count} kana`}</span>
      </div>
    </div>
  );
}

function Drill({
  round,
  setRound,
  mode,
  scripts,
  onQuit,
}: {
  round: Round;
  setRound: (r: Round) => void;
  mode: Mode;
  scripts: Script[];
  onQuit: () => void;
}) {
  const card = round.queue[round.index];
  const [typed, setTyped] = useState("");
  const [wrong, setWrong] = useState<string | null>(null);
  const [last, setLast] = useState<{ kana: string; answer: string; ok: boolean } | null>(null);
  const input = useRef<HTMLInputElement>(null);

  // Four kana to pick from: the answer and three others in the same script, drawn from
  // the whole chart so a one-row round still has choices.
  const choices = useMemo(() => {
    if (mode !== "pick") return [];
    const pool = buildDeck(
      KANA_GROUPS.map((g) => g.id),
      [card.script],
    ).filter((c) => c.answers[0] !== card.answers[0]);
    return shuffle([card, ...shuffle(pool).slice(0, 3)]);
  }, [card, mode]);

  useEffect(() => {
    if (mode === "type") input.current?.focus();
  }, [card, mode]);

  function advance(ok: boolean) {
    const missed = ok || round.missed.includes(card.kana) ? round.missed : [...round.missed, card.kana];
    let queue = round.queue;
    if (!ok) {
      queue = [...queue];
      queue.splice(Math.min(queue.length, round.index + 1 + RETRY_GAP), 0, card);
    }
    const index = round.index + 1;
    setLast({ kana: card.kana, answer: card.answers[0], ok });
    setTyped("");
    setWrong(null);
    setRound({ ...round, queue, index, missed, finishedAt: index >= queue.length ? Date.now() : undefined });
  }

  function onType(value: string) {
    if (wrong !== null) return;
    setTyped(value);
    if (isCorrect(card, value)) advance(true);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    if (wrong !== null) advance(false);
    else setWrong(typed);
  }

  function pick(c: KanaCard) {
    if (wrong !== null) return;
    if (c.kana === card.kana) advance(true);
    else setWrong(c.kana);
  }

  useEffect(() => {
    if (mode !== "pick") return;
    function onKey(e: KeyboardEvent) {
      const n = Number(e.key);
      if (wrong !== null && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        advance(false);
      } else if (wrong === null && n >= 1 && n <= choices.length) {
        pick(choices[n - 1]);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const done = round.index;
  const total = round.queue.length;

  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-primary transition-[width]" style={{ width: `${(done / total) * 100}%` }} />
        </div>
        <span className="tabular-nums">
          {done} / {total}
        </span>
        <Button variant="ghost" size="sm" onClick={onQuit}>
          Stop
        </Button>
      </div>

      <div className="grid justify-items-center gap-6 rounded-lg border bg-surface px-5 py-10 sm:py-14">
        {mode === "type" ? (
          <div lang="ja" className="text-[5.5rem] leading-none font-medium sm:text-[7rem]">
            {card.kana}
          </div>
        ) : (
          <div className="grid justify-items-center gap-2">
            <div className="text-5xl font-semibold tracking-wide sm:text-6xl">{card.answers[0]}</div>
            {scripts.length > 1 && <div className="text-sm text-dim">in {card.script}</div>}
          </div>
        )}

        {mode === "type" ? (
          <div className="grid w-full max-w-56 gap-2">
            <Input
              ref={input}
              value={wrong ?? typed}
              onChange={(e) => onType(e.target.value)}
              onKeyDown={onKeyDown}
              readOnly={wrong !== null}
              aria-label="Romaji"
              aria-invalid={wrong !== null}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className="h-12 text-center text-xl md:text-xl"
              placeholder="romaji"
            />
            <p className="min-h-5 text-center text-sm text-muted-foreground">
              {wrong !== null ? (
                <>
                  <span className="text-destructive">It&apos;s {card.answers[0]}.</span> Enter to continue.
                </>
              ) : (
                "Enter if you don't know it"
              )}
            </p>
          </div>
        ) : (
          <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
            {choices.map((c, i) => (
              <button
                key={c.kana}
                type="button"
                lang="ja"
                onClick={() => pick(c)}
                className={cn(
                  "relative rounded-md border bg-background py-5 text-4xl transition-colors hover:border-primary/60",
                  wrong !== null && c.kana === card.kana && "border-success text-success",
                  wrong === c.kana && "border-destructive text-destructive",
                )}
              >
                <span className="absolute top-1.5 left-2 text-xs text-dim">{i + 1}</span>
                {c.kana}
              </button>
            ))}
            <p className="col-span-full min-h-5 text-center text-sm text-muted-foreground">
              {wrong !== null ? "Press Enter or Continue." : "Keys 1–4 work too."}
            </p>
          </div>
        )}
      </div>

      {wrong !== null && mode === "pick" && (
        <div className="flex justify-center">
          <Button onClick={() => advance(false)}>Continue</Button>
        </div>
      )}

      <p className="min-h-5 text-center text-sm text-muted-foreground" aria-live="polite">
        {last && (
          <>
            <span lang="ja">{last.kana}</span> {last.answer}{" "}
            <span className={last.ok ? "text-success" : "text-destructive"}>{last.ok ? "✓" : "✗"}</span>
          </>
        )}
      </p>
    </div>
  );
}

function Result({ round, onAgain, onMisses, onSettings }: { round: Round; onAgain: () => void; onMisses: () => void; onSettings: () => void }) {
  const firstTry = round.size - round.missed.length;
  const accuracy = Math.round((firstTry / round.size) * 100);
  // Only rendered once the round has finished.
  const seconds = Math.round((round.finishedAt! - round.startedAt) / 1000);
  const perCard = (seconds / round.queue.length).toFixed(1);

  return (
    <div className="grid gap-6">
      <div className="rounded-lg border bg-surface p-5 sm:p-8">
        <p className="text-display font-semibold tabular-nums">{accuracy}% first try</p>
        <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
          <Stat label="Kana" value={round.size} />
          <Stat label="Right first time" value={firstTry} />
          <Stat label="Time" value={seconds < 90 ? `${seconds} s` : `${Math.floor(seconds / 60)} min ${seconds % 60} s`} />
          <Stat label="Per answer" value={`${perCard} s`} />
        </div>
        {round.missed.length > 0 ? (
          <div className="mt-6">
            <div className="text-sm font-medium">Missed</div>
            <p lang="ja" className="mt-2 text-2xl tracking-widest">
              {round.missed.join(" ")}
            </p>
          </div>
        ) : (
          <p className="mt-4 max-w-prose text-sm text-muted-foreground">
            No misses. Once a set feels this easy, add the next rows, or switch to reading real kana: that&apos;s what makes them
            automatic.
          </p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          {round.missed.length > 0 && <Button onClick={onMisses}>Drill the {round.missed.length} I missed</Button>}
          <Button variant={round.missed.length > 0 ? "outline" : "default"} onClick={onAgain}>
            Go again
          </Button>
          <Button variant="outline" onClick={onSettings}>
            Change rows
          </Button>
        </div>
      </div>
      <p className="max-w-prose text-sm text-muted-foreground">
        Speed matters as much as accuracy: once you can name every kana in under a second, move on to reading. The{" "}
        <Link href="/guide/kana" className="text-primary hover:underline">
          kana chapter of the guide
        </Link>{" "}
        covers what to read first.
      </p>
    </div>
  );
}
