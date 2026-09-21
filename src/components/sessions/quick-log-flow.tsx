"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition, type FormEvent } from "react";
import { ChevronDown, Search } from "lucide-react";
import { toast } from "sonner";
import { addFromSearch } from "@/actions/library";
import { createSession } from "@/actions/sessions";
import type { MediaType, Unit } from "@/db/schema";
import { fromLocalInputValue, toLocalInputValue } from "@/lib/dates";
import { formatDuration, pluralize, relativeTime } from "@/lib/format";
import { MEDIA_TYPE_META, SOURCE_LABELS, UNIT_LABELS, unitLabel } from "@/lib/media";
import type { SearchResponse, SearchResult } from "@/lib/sources";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { LibraryPick } from "@/components/library/types";
import { AmountInput } from "./amount-input";
import { DurationInput } from "./duration-input";

export type PickWithStats = LibraryPick & {
  seconds: number;
  sessions: number;
  progress: number;
  totalAmount: number | null;
  totalUnit: Unit | null;
  lastAt: string | null;
};

interface Selected {
  mediaItemId: string | null;
  title: string;
  titleNative: string | null;
  coverUrl: string | null;
  type: MediaType;
  unit: Unit | null;
  stats?: {
    seconds: number;
    sessions: number;
    progress: number;
    totalAmount: number | null;
    totalUnit: Unit | null;
    lastAt: string | null;
    lastDurationSeconds: number | null;
    lastAmount: number | null;
    lastAmountUnit: Unit | null;
  };
}

/** "an anime" / "a manga" — media labels are user-facing, so the article has to agree. */
function article(label: string) {
  return /^[aeiou]/i.test(label) ? "an" : "a";
}

/** "last: ep 1, 25m, 10h ago" — replaces the empty "Preview" panel with the one line
 * that panel was actually trying to show (redesign.md §5.4). */
function lastLine(stats: Selected["stats"]): string | null {
  if (!stats || stats.sessions === 0) return null;
  const parts: string[] = [];
  if (stats.lastAmount != null && stats.lastAmountUnit) parts.push(`${stats.lastAmount} ${unitLabel(stats.lastAmountUnit, stats.lastAmount)}`);
  if (stats.lastDurationSeconds) parts.push(formatDuration(stats.lastDurationSeconds));
  if (stats.lastAt) parts.push(relativeTime(stats.lastAt));
  return parts.length ? `last: ${parts.join(", ")}` : null;
}

const TYPE_ORDER: MediaType[] = ["anime", "manga", "visual_novel", "light_novel", "book", "series", "movie", "youtube", "podcast", "drama_cd", "graded_reader", "game", "news", "other"];
const PRIMARY_COUNT = 6;

export function QuickLogFlow({ picks, tz }: { picks: PickWithStats[]; tz: string }) {
  const router = useRouter();
  const [type, setType] = useState<MediaType>("anime");
  const [showMoreTypes, setShowMoreTypes] = useState(false);
  const [q, setQ] = useState("");
  const [external, setExternal] = useState<SearchResult[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Selected | null>(null);
  const [pending, startTransition] = useTransition();

  // The picker shows the six mediums this user actually logs, not fourteen flat
  // options — a menu, not a choice (redesign.md §5.4).
  const { primaryTypes, moreTypes } = useMemo(() => {
    const bySessions = new Map<MediaType, number>();
    for (const p of picks) bySessions.set(p.type, (bySessions.get(p.type) ?? 0) + p.sessions);
    const used = TYPE_ORDER.filter((t) => (bySessions.get(t) ?? 0) > 0).sort((a, b) => (bySessions.get(b) ?? 0) - (bySessions.get(a) ?? 0));
    const rest = TYPE_ORDER.filter((t) => !used.includes(t));
    const primary = [...used, ...rest].slice(0, PRIMARY_COUNT);
    return { primaryTypes: primary, moreTypes: TYPE_ORDER.filter((t) => !primary.includes(t)) };
  }, [picks]);

  // Details
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("30");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState<Unit | null>(MEDIA_TYPE_META[type].defaultUnit);
  const [startedAt, setStartedAt] = useState(() => toLocalInputValue(new Date(Date.now() - 30 * 60_000), tz));
  const [notes, setNotes] = useState("");

  const meta = MEDIA_TYPE_META[type];
  const searchable = meta.searchSource !== null;
  const query = q.trim();

  // Library matches are instant and local.
  const libraryMatches = useMemo(() => {
    const inType = picks.filter((p) => p.type === type);
    if (!query) return inType.slice(0, 8);
    const needle = query.toLowerCase();
    return inType.filter((p) => p.title.toLowerCase().includes(needle) || p.titleNative?.toLowerCase().includes(needle)).slice(0, 8);
  }, [picks, type, query]);

  // External search, debounced.
  useEffect(() => {
    if (!searchable || query.length < 2) return;
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?type=${type}&q=${encodeURIComponent(query)}`, { signal: ctrl.signal });
        const data = (await res.json()) as SearchResponse;
        setExternal(data.results ?? []);
        setWarning(data.warning ?? null);
      } catch (e) {
        if ((e as Error).name !== "AbortError") setWarning("Search failed");
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 350);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [query, type, searchable]);

  function pickType(t: MediaType) {
    setType(t);
    setSelected(null);
    setQ("");
    setExternal([]);
    setWarning(null);
    setUnit(MEDIA_TYPE_META[t].defaultUnit);
  }

  function chooseLibrary(p: PickWithStats) {
    setSelected({
      mediaItemId: p.mediaItemId,
      title: p.title,
      titleNative: p.titleNative,
      coverUrl: p.coverUrl,
      type: p.type,
      unit: p.progressUnit,
      stats: {
        seconds: p.seconds,
        sessions: p.sessions,
        progress: p.progress,
        totalAmount: p.totalAmount,
        totalUnit: p.totalUnit,
        lastAt: p.lastAt,
        lastDurationSeconds: p.lastDurationSeconds,
        lastAmount: p.lastAmount,
        lastAmountUnit: p.lastAmountUnit,
      },
    });
    const nextUnit = p.progressUnit ?? MEDIA_TYPE_META[p.type].defaultUnit;
    setUnit(nextUnit);
    // Picking a title you've logged before suggests how long it usually takes, and
    // how much you usually log in one sitting — same idea as the entry editor's
    // "log the time for that?" prompt, just for a fresh log instead of a delta.
    if (p.lastDurationSeconds) {
      setHours(String(Math.floor(p.lastDurationSeconds / 3600)));
      setMinutes(String(Math.round((p.lastDurationSeconds % 3600) / 60)));
    }
    setAmount(p.lastAmountUnit === nextUnit && p.lastAmount != null ? String(p.lastAmount) : "");
  }

  function chooseExternal(r: SearchResult) {
    startTransition(async () => {
      const res = await addFromSearch(r, "active");
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setSelected({
        mediaItemId: res.data.mediaItemId,
        title: r.title,
        titleNative: r.titleNative,
        coverUrl: r.coverUrl,
        type: r.mediaType,
        unit: r.totalUnit ?? MEDIA_TYPE_META[r.mediaType].defaultUnit,
        stats: {
          seconds: 0,
          sessions: 0,
          progress: 0,
          totalAmount: r.totalAmount,
          totalUnit: r.totalUnit,
          lastAt: null,
          lastDurationSeconds: null,
          lastAmount: null,
          lastAmountUnit: null,
        },
      });
      setUnit(r.totalUnit ?? MEDIA_TYPE_META[r.mediaType].defaultUnit);
      // Just added — no logging history yet, so don't carry over amount suggested by a
      // previously-selected library title.
      setAmount("");
    });
  }

  function chooseFreeform() {
    setSelected({ mediaItemId: null, title: query || meta.label, titleNative: null, coverUrl: null, type, unit: meta.defaultUnit });
    setAmount("");
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return;
    const durationSeconds = (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60;
    if (durationSeconds < 60) {
      toast.error("Duration must be at least a minute");
      return;
    }
    startTransition(async () => {
      const res = await createSession({
        mediaItemId: selected.mediaItemId,
        mediaType: selected.type,
        label: selected.mediaItemId ? null : selected.title,
        startedAt: fromLocalInputValue(startedAt, tz).toISOString(),
        durationSeconds,
        amount: amount === "" ? null : Number(amount),
        amountUnit: amount === "" ? null : unit,
        notes,
      });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success(`Logged ${formatDuration(durationSeconds)} of ${selected.title}`);
      router.push(selected.mediaItemId ? `/media/${selected.mediaItemId}` : "/log");
      router.refresh();
    });
  }

  const maxAmount = selected?.stats?.totalAmount && selected.stats.totalUnit === unit ? Math.max(0, selected.stats.totalAmount - selected.stats.progress) : undefined;
  const durationSeconds = (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60;

  return (
    <div className="grid max-w-[560px] gap-5">
      <div className="grid gap-1.5">
        <span className="section-label">Medium</span>
        <div className="flex flex-wrap items-center gap-1.5">
          {(showMoreTypes ? TYPE_ORDER : primaryTypes).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => pickType(t)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors",
                type === t ? "border-primary bg-accent text-accent-foreground" : "hover:bg-muted",
              )}
            >
              {MEDIA_TYPE_META[t].label}
            </button>
          ))}
          {!showMoreTypes && moreTypes.length > 0 && (
            <button
              type="button"
              onClick={() => setShowMoreTypes(true)}
              className="inline-flex items-center gap-0.5 rounded-sm px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              More <ChevronDown className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-1.5">
        <span className="section-label">Title</span>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              if (selected) setSelected(null);
            }}
            placeholder={searchable ? `Search your library and ${SOURCE_LABELS[meta.searchSource!]}…` : `Search your library or type a name…`}
            className="pl-8"
          />
        </div>

        {!selected && (
          <div className="grid gap-3">
            {libraryMatches.length > 0 && (
              <ResultGroup title="In your library">
                {libraryMatches.map((p) => (
                  <ResultRow
                    key={p.mediaItemId}
                    cover={p.coverUrl}
                    title={p.title}
                    sub={[p.titleNative, p.sessions ? `${pluralize(p.sessions, "session")} · ${formatDuration(p.seconds)}` : "not logged yet"].filter(Boolean).join(" · ")}
                    onPick={() => chooseLibrary(p)}
                  />
                ))}
              </ResultGroup>
            )}

            {searchable && query.length >= 2 && (
              <ResultGroup title={`From ${SOURCE_LABELS[meta.searchSource!]}`}>
                {loading && <p className="px-1.5 text-sm text-muted-foreground">Searching…</p>}
                {warning && <p className="px-1.5 text-sm text-muted-foreground">{warning}</p>}
                {!loading && !warning && external.length === 0 && <p className="px-1.5 text-sm text-muted-foreground">No results.</p>}
                {external.map((r) => (
                  <ResultRow
                    key={r.sourceId}
                    cover={r.coverUrl}
                    title={r.title}
                    sub={[r.titleNative, r.year, r.totalAmount && r.totalUnit ? `${r.totalAmount} ${UNIT_LABELS[r.totalUnit]}` : null].filter(Boolean).join(" · ")}
                    onPick={() => chooseExternal(r)}
                    disabled={pending}
                  />
                ))}
              </ResultGroup>
            )}

            <button type="button" onClick={chooseFreeform} className="justify-self-start text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
              {query ? (
                <>
                  Log “{query}” as a one-off {meta.label.toLowerCase()} without adding it to the library
                </>
              ) : (
                <>
                  Log {article(meta.label)} {meta.label.toLowerCase()} without a specific title
                </>
              )}
            </button>
          </div>
        )}

        {selected && (
          <div className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2">
            <div className="h-12 w-8 shrink-0 overflow-hidden rounded-sm bg-muted">
              {selected.coverUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={selected.coverUrl} alt="" className="h-full w-full object-cover" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{selected.title}</div>
              <div className="truncate text-xs text-muted-foreground">
                {selected.titleNative && <span lang="ja">{selected.titleNative}</span>}
                {selected.titleNative && lastLine(selected.stats) && " · "}
                {lastLine(selected.stats)}
              </div>
            </div>
            <button type="button" className="shrink-0 text-xs text-muted-foreground underline underline-offset-4" onClick={() => setSelected(null)}>
              change
            </button>
          </div>
        )}
      </div>

      {selected && (
        <form onSubmit={submit} className="grid gap-5">
          <DurationInput
            hours={hours}
            minutes={minutes}
            onChange={(v) => { setHours(v.hours); setMinutes(v.minutes); }}
            typicalMinutes={selected.mediaItemId ? Math.round((picks.find((p) => p.mediaItemId === selected.mediaItemId)?.lastDurationSeconds ?? 0) / 60) || undefined : undefined}
          />

          <div className="grid gap-1.5">
            <AmountInput amount={amount} unit={unit} onChange={(v) => { setAmount(v.amount); setUnit(v.unit); }} idPrefix="ql-amount" />
            {maxAmount != null && (
              <p className="text-xs text-muted-foreground">
                {selected.stats!.progress} of {selected.stats!.totalAmount} {UNIT_LABELS[unit!]} done · {maxAmount} left
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="ql-started">When (optional, defaults to just now)</Label>
            <Input id="ql-started" type="datetime-local" value={startedAt} onChange={(e) => setStartedAt(e.target.value)} />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="ql-notes">Notes (optional)</Label>
            <Textarea id="ql-notes" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setSelected(null)} disabled={pending}>
              Cancel
            </Button>
            <Button type="submit" size="lg" disabled={pending}>
              {pending ? "Saving…" : `Log ${formatDuration(durationSeconds)}`}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

function ResultGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 px-1.5 text-xs font-medium text-muted-foreground">{title}</div>
      <ul className="grid gap-0.5">{children}</ul>
    </div>
  );
}

function ResultRow({ cover, title, sub, onPick, disabled }: { cover: string | null; title: string; sub: string; onPick: () => void; disabled?: boolean }) {
  return (
    <li>
      <button type="button" onClick={onPick} disabled={disabled} className="flex w-full items-center gap-3 rounded-md p-1.5 text-left hover:bg-muted/50 disabled:opacity-50">
        <div className="h-12 w-8 shrink-0 overflow-hidden rounded-sm bg-muted">
          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt="" className="h-full w-full object-cover" loading="lazy" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">{title}</div>
          <div className="truncate text-xs text-muted-foreground">{sub}</div>
        </div>
      </button>
    </li>
  );
}
