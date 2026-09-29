"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  acceptedAnswers,
  conjugate,
  explain,
  FORM_GROUPS,
  FORMS,
  questionPool,
  WORD_TYPES,
  type FormId,
  type Level,
  type Question,
  type WordType,
} from "@/lib/conjugation";
import { normalizeAnswer, toHiragana } from "@/lib/romaji";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chip, SettingRow, Stat, toggle, useStoredSettings } from "./drill-parts";

interface Settings {
  forms: FormId[];
  types: WordType[];
  levels: Level[];
  furigana: boolean;
  showType: boolean;
}

const LEVELS: Level[] = ["N5", "N4", "N3"];

const DEFAULTS: Settings = {
  forms: ["negative", "past", "past-negative", "polite", "polite-negative", "polite-past", "polite-past-negative", "te"],
  types: WORD_TYPES.map((t) => t.id),
  levels: ["N5"],
  furigana: true,
  showType: false,
};

function isSettings(v: unknown): v is Settings {
  const s = v as Settings | null;
  return (
    !!s &&
    Array.isArray(s.forms) &&
    s.forms.every((f) => FORMS.some((x) => x.id === f)) &&
    Array.isArray(s.types) &&
    s.types.every((t) => WORD_TYPES.some((x) => x.id === t)) &&
    Array.isArray(s.levels) &&
    s.levels.every((l) => LEVELS.includes(l)) &&
    typeof s.furigana === "boolean" &&
    typeof s.showType === "boolean"
  );
}

const TYPE_LABEL: Record<WordType, string> = {
  godan: "godan verb",
  ichidan: "ichidan verb",
  irregular: "irregular verb",
  "i-adj": "い-adjective",
  "na-adj": "な-adjective",
};

/** Split a word into kanji runs with readings and okurigana, so furigana sits only over the kanji. */
function furiganaParts(kanji: string, kana: string): { text: string; rt?: string }[] {
  if (kanji === kana) return [{ text: kanji }];
  let tail = 0;
  while (tail < kanji.length && tail < kana.length && kanji[kanji.length - 1 - tail] === kana[kana.length - 1 - tail]) tail++;
  const parts: { text: string; rt?: string }[] = [{ text: kanji.slice(0, kanji.length - tail), rt: kana.slice(0, kana.length - tail) }];
  if (tail) parts.push({ text: kanji.slice(kanji.length - tail) });
  return parts;
}

function Furigana({ kanji, kana, show }: { kanji: string; kana: string; show: boolean }) {
  return (
    <span lang="ja">
      {furiganaParts(kanji, kana).map((p, i) =>
        p.rt && show ? (
          <ruby key={i}>
            {p.text}
            <rt className="text-[0.45em] font-normal text-muted-foreground">{p.rt}</rt>
          </ruby>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </span>
  );
}

interface Retry {
  question: Question;
  /** The question number at which it comes back. */
  due: number;
}

interface Miss {
  question: Question;
  typed: string;
}

// A missed question comes back after this many others.
const RETRY_GAP = 5;

function pickQuestion(pool: Question[], retries: Retry[], asked: number, previous: Question | null): { question: Question; retries: Retry[] } {
  const due = retries.find((r) => r.due <= asked);
  if (due) return { question: due.question, retries: retries.filter((r) => r !== due) };
  // Not the same word twice in a row, unless there's no other.
  const others = pool.filter((q) => q.word !== previous?.word);
  const from = others.length ? others : pool;
  return { question: from[Math.floor(Math.random() * from.length)], retries };
}

export function ConjugationDrill() {
  const [settings, setSettings] = useStoredSettings("conjugation-drill", DEFAULTS, isSettings);
  const [running, setRunning] = useState(false);
  const pool = useMemo(() => questionPool(settings.forms, settings.types, settings.levels), [settings]);
  const top = useRef<HTMLDivElement>(null);

  return (
    <div ref={top} className="scroll-mt-24">
      {running && pool.length > 0 ? (
        <Drill key={JSON.stringify(settings)} pool={pool} settings={settings} onSettings={() => setRunning(false)} />
      ) : (
        <Setup
          settings={settings}
          onChange={setSettings}
          count={pool.length}
          onStart={() => {
            setRunning(true);
            requestAnimationFrame(() => top.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
          }}
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
  const hasVerbs = settings.types.some((t) => t === "godan" || t === "ichidan" || t === "irregular");
  const hasAdjectives = settings.types.some((t) => t === "i-adj" || t === "na-adj");

  return (
    <div className="grid gap-6 rounded-lg border bg-surface p-5 sm:p-6">
      <SettingRow label="Words">
        {WORD_TYPES.map((t) => (
          <Chip key={t.id} on={settings.types.includes(t.id)} onClick={() => onChange({ ...settings, types: toggle(settings.types, t.id) })}>
            {t.label} <span lang="ja" className="text-dim">{t.example}</span>
          </Chip>
        ))}
      </SettingRow>

      <SettingRow label="Level" hint="roughly the JLPT level of the word">
        {LEVELS.map((l) => (
          <Chip key={l} on={settings.levels.includes(l)} onClick={() => onChange({ ...settings, levels: toggle(settings.levels, l) })}>
            {l}
          </Chip>
        ))}
      </SettingRow>

      {FORM_GROUPS.map((g) => {
        const forms = g.forms.filter((f) => (hasVerbs && f.verb) || (hasAdjectives && f.adjective));
        if (!forms.length) return null;
        const ids = forms.map((f) => f.id);
        const allOn = ids.every((id) => settings.forms.includes(id));
        return (
          <SettingRow
            key={g.id}
            label={g.label}
            hint={
              <button
                type="button"
                className="underline-offset-2 hover:text-foreground hover:underline"
                onClick={() =>
                  onChange({
                    ...settings,
                    forms: allOn ? settings.forms.filter((f) => !ids.includes(f)) : [...new Set([...settings.forms, ...ids])],
                  })
                }
              >
                {allOn ? "none" : "all"}
              </button>
            }
          >
            {forms.map((f) => (
              <Chip key={f.id} on={settings.forms.includes(f.id)} onClick={() => onChange({ ...settings, forms: toggle(settings.forms, f.id) })}>
                {f.label}
              </Chip>
            ))}
          </SettingRow>
        );
      })}

      <SettingRow label="Show">
        <Chip on={settings.furigana} onClick={() => onChange({ ...settings, furigana: !settings.furigana })}>
          Furigana
        </Chip>
        <Chip on={settings.showType} onClick={() => onChange({ ...settings, showType: !settings.showType })}>
          Verb and adjective type
        </Chip>
      </SettingRow>

      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg" onClick={onStart} disabled={count === 0}>
          Start
        </Button>
        <span className="text-sm text-muted-foreground">
          {count === 0 ? "Pick at least one kind of word and a form that fits it." : `${count.toLocaleString("en")} possible questions`}
        </span>
      </div>
    </div>
  );
}

type Status = { kind: "asking" } | { kind: "answered"; ok: boolean; typed: string };

function Drill({ pool, settings, onSettings }: { pool: Question[]; settings: Settings; onSettings: () => void }) {
  const [state, setState] = useState(() => ({ ...pickQuestion(pool, [], 0, null), asked: 0 }));
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "asking" });
  const [stats, setStats] = useState({ answered: 0, correct: 0, streak: 0, best: 0 });
  const [misses, setMisses] = useState<Miss[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const next = useRef<HTMLButtonElement>(null);

  const { question } = state;
  const { word, form } = question;
  const answers = useMemo(() => conjugate(word, form.id), [word, form]);

  useEffect(() => {
    if (status.kind === "asking") input.current?.focus();
    else next.current?.focus();
  }, [status, question]);

  function check(given: string) {
    const normalized = normalizeAnswer(given);
    const ok = acceptedAnswers(word, form.id).some((a) => normalizeAnswer(a) === normalized);
    setStatus({ kind: "answered", ok, typed: toHiragana(given) });
    setStats((s) => {
      const streak = ok ? s.streak + 1 : 0;
      return { answered: s.answered + 1, correct: s.correct + (ok ? 1 : 0), streak, best: Math.max(s.best, streak) };
    });
    if (!ok) {
      setMisses((m) => [{ question, typed: toHiragana(given) }, ...m].slice(0, 12));
      setState((s) => ({ ...s, retries: [...s.retries, { question, due: s.asked + 1 + RETRY_GAP }] }));
    }
  }

  function advance() {
    setState((s) => ({ ...pickQuestion(pool, s.retries, s.asked + 1, s.question), asked: s.asked + 1 }));
    setTyped("");
    setStatus({ kind: "asking" });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status.kind === "answered") advance();
    else if (typed.trim()) check(typed);
  }

  const alsoAccepted = answers.slice(1).map((a) => a.kanji);

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <Stat label="Answered" value={stats.answered} />
        <Stat label="Right" value={stats.answered ? `${Math.round((stats.correct / stats.answered) * 100)}%` : "–"} />
        <Stat label="Streak" value={stats.streak} />
        <Stat label="Best" value={stats.best} />
        <Button variant="outline" size="sm" className="ml-auto" onClick={onSettings}>
          Settings
        </Button>
      </div>

      <form onSubmit={onSubmit} className="grid justify-items-center gap-5 rounded-lg border bg-surface px-5 py-8 text-center sm:py-12">
        <div className="grid justify-items-center gap-1">
          <div className="text-[2.75rem] leading-[1.6] font-medium sm:text-6xl sm:leading-[1.6]">
            <Furigana kanji={word.kanji} kana={word.kana} show={settings.furigana} />
          </div>
          <div className="text-sm text-muted-foreground">
            {word.meaning}
            {settings.showType && <span className="text-dim"> · {TYPE_LABEL[word.type]}</span>}
          </div>
        </div>

        <div className="grid justify-items-center gap-1">
          <div className="text-lg font-semibold text-primary">{form.label}</div>
          <div lang="ja" className="text-meta text-dim">
            like {form.example}
          </div>
        </div>

        <div className="grid w-full max-w-sm gap-2">
          <Input
            ref={input}
            lang="ja"
            value={status.kind === "answered" ? status.typed : typed}
            readOnly={status.kind === "answered"}
            onChange={(e) => {
              const composing = (e.nativeEvent as InputEvent).isComposing;
              setTyped(composing ? e.target.value : toHiragana(e.target.value, { ime: true }));
            }}
            aria-label={`${word.kanji}, ${form.label}`}
            aria-invalid={status.kind === "answered" && !status.ok}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="type in romaji or kana"
            className={cn(
              "h-12 text-center text-xl md:text-xl",
              status.kind === "answered" && status.ok && "border-success text-success",
              status.kind === "answered" && !status.ok && "text-destructive line-through",
            )}
          />
          {status.kind === "asking" && (
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

        {status.kind === "answered" && (
          <div className="grid w-full max-w-md justify-items-center gap-3" aria-live="polite">
            <div className={cn("text-sm font-medium", status.ok ? "text-success" : "text-destructive")}>
              {status.ok ? "Right" : status.typed ? "Not quite" : "The answer is"}
            </div>
            <div className="text-3xl leading-[1.7] font-medium">
              <Furigana kanji={answers[0].kanji} kana={answers[0].kana} show />
            </div>
            {alsoAccepted.length > 0 && (
              <div className="text-sm text-muted-foreground">
                Also right: <span lang="ja">{alsoAccepted.join("、")}</span>
              </div>
            )}
            {!status.ok && <p className="max-w-prose text-left text-sm text-muted-foreground">{explain(word, form.id)}</p>}
            <Button ref={next} type="submit" className="mt-1">
              Next
            </Button>
          </div>
        )}
      </form>

      {misses.length > 0 && (
        <div>
          <h2 className="text-h3 font-semibold">Recent misses</h2>
          <p className="mt-1 text-meta text-dim">Each comes back a few questions later.</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {misses.map((m, i) => {
              const right = conjugate(m.question.word, m.question.form.id)[0];
              return (
                <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-2">
                  <span>
                    <span lang="ja">{m.question.word.kanji}</span>{" "}
                    <span className="text-dim">{m.question.form.label.toLowerCase()}</span>
                  </span>
                  <span lang="ja">
                    {m.typed && <span className="mr-3 text-destructive line-through">{m.typed}</span>}
                    {right.kanji}
                    {right.kanji !== right.kana && <span className="text-dim">（{right.kana}）</span>}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
