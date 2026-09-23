"use client";

import { useState, useTransition } from "react";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { addFromSearch } from "@/actions/library";
import { MEDIA_TYPES, type MediaType } from "@/db/schema";
import { effectiveSearchSource, MEDIA_TYPE_META, SOURCE_LABELS, STATUS_LABELS, UNIT_LABELS } from "@/lib/media";
import type { SearchResult } from "@/lib/sources";
import { useMediaSearch } from "@/lib/use-media-search";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LinkHint, LinkImport, looksLikeUrl } from "./link-import";
import type { LibraryPick } from "./types";

export const NO_ITEM = "__none__";

const STATUS_ORDER = ["active", "paused", "planning", "finished", "dropped"] as const;
const TYPE_LABELS: Record<string, string> = Object.fromEntries(MEDIA_TYPES.map((t) => [t, MEDIA_TYPE_META[t].label]));

export interface PickerValue {
  mediaItemId: string | null;
  mediaType: MediaType;
  label: string;
}

/**
 * Choose what a session/timer is for: a library item (type is inferred), a fresh
 * title found by searching AniList/VNDB/TMDB/Google Books (added to the library the
 * moment you pick it, same as Discover's "tap to add"), or a free-form "type + label"
 * for things that will never be in the library. One picker, used by SessionForm
 * (every "log a session" dialog) and TimerCard's idle-timer "what are you timing"
 * row — search used to only exist on the dedicated /log/new page (QuickLogFlow,
 * since removed); this is that same search+add capability, just moved to where the
 * dropdown always lived instead of being its own parallel form.
 */
export function ItemPicker({
  entries,
  value,
  onChange,
  idPrefix = "picker",
  hideLabel = false,
}: {
  entries: LibraryPick[];
  value: PickerValue;
  onChange: (v: PickerValue) => void;
  idPrefix?: string;
  /** For a caller whose own heading already says what this is (the dashboard timer bar). */
  hideLabel?: boolean;
}) {
  const [pending, startTransition] = useTransition();
  // Titles added via search this session — the Select needs a label for them even
  // though the `entries` prop (fetched once, server-side) doesn't know about them yet.
  const [addedLabels, setAddedLabels] = useState<Record<string, string>>({});

  const grouped = STATUS_ORDER.map((s) => ({ status: s, items: entries.filter((e) => e.status === s) })).filter(
    (g) => g.items.length > 0,
  );
  const itemLabels: Record<string, string> = { [NO_ITEM]: "Something not in my library…", ...addedLabels };
  for (const e of entries) itemLabels[e.mediaItemId] = e.title;

  const searchSource = effectiveSearchSource(value.mediaType);
  const searchable = searchSource !== null;
  const query = value.label.trim();
  // A pasted link is imported, not searched for.
  const isLink = looksLikeUrl(query);
  const { results, warning, loading } = useMediaSearch(value.mediaType, query, value.mediaItemId === null && searchable && !isLink);

  function add(r: SearchResult) {
    if (pending) return;
    startTransition(async () => {
      const res = await addFromSearch(r, "active");
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      setAddedLabels((m) => ({ ...m, [res.data.mediaItemId]: r.title }));
      onChange({ mediaItemId: res.data.mediaItemId, mediaType: r.mediaType, label: "" });
    });
  }

  return (
    <div className="grid gap-3">
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-item`} className={hideLabel ? "sr-only" : undefined}>
          Title
        </Label>
        <Select
          items={itemLabels}
          value={value.mediaItemId ?? NO_ITEM}
          onValueChange={(v) => {
            if (v === NO_ITEM) {
              onChange({ ...value, mediaItemId: null });
            } else {
              const e = entries.find((x) => x.mediaItemId === v);
              onChange({ mediaItemId: v, mediaType: e?.type ?? value.mediaType, label: "" });
            }
          }}
        >
          <SelectTrigger id={`${idPrefix}-item`} className="w-full">
            <SelectValue placeholder="Pick from your library" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={NO_ITEM}>Something not in my library…</SelectItem>
            {grouped.map((g) => (
              <SelectGroup key={g.status}>
                <SelectLabel>{STATUS_LABELS[g.status]}</SelectLabel>
                {g.items.map((e) => (
                  <SelectItem key={e.mediaItemId} value={e.mediaItemId}>
                    <span className="truncate">{e.title}</span>
                    <span className="ml-1 text-xs text-muted-foreground">· {MEDIA_TYPE_META[e.type].label}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      {value.mediaItemId === null && (
        <div className="grid gap-3">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor={`${idPrefix}-type`}>Type</Label>
              <Select
                items={TYPE_LABELS}
                value={value.mediaType}
                onValueChange={(v) => onChange({ ...value, mediaType: v as MediaType })}
              >
                <SelectTrigger id={`${idPrefix}-type`} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MEDIA_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {MEDIA_TYPE_META[t].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor={`${idPrefix}-label`}>{searchable ? "Search or type a label" : "Label"}</Label>
              <div className="relative">
                {searchable && (
                  <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                )}
                <Input
                  id={`${idPrefix}-label`}
                  placeholder={searchable ? `Search ${SOURCE_LABELS[searchSource]} or paste a link…` : "e.g. Tutor session, NHK Easy"}
                  value={value.label}
                  onChange={(e) => onChange({ ...value, label: e.target.value })}
                  maxLength={200}
                  className={searchable ? "pl-8" : undefined}
                />
              </div>
            </div>
          </div>

          {isLink && (
            <div className="grid gap-2">
              <LinkHint url={query} />
              <LinkImport
                url={query}
                type={value.mediaType}
                status="active"
                onAdded={({ mediaItemId, title, mediaType }) => {
                  setAddedLabels((m) => ({ ...m, [mediaItemId]: title }));
                  onChange({ mediaItemId, mediaType, label: "" });
                }}
              />
            </div>
          )}

          {searchable && !isLink && query.length >= 2 && (
            <div className="grid gap-1">
              {loading && <p className="px-1.5 text-sm text-muted-foreground">Searching…</p>}
              {warning && <p className="px-1.5 text-sm text-muted-foreground">{warning}</p>}
              {!loading && !warning && results.length === 0 && (
                <p className="px-1.5 text-sm text-muted-foreground">
                  No results — “{query}” will be logged as a one-off label instead.
                </p>
              )}
              {results.length > 0 && (
                <ul className="grid gap-0.5 rounded-md border p-1">
                  {results.map((r) => (
                    <li key={r.sourceId}>
                      <button
                        type="button"
                        onClick={() => add(r)}
                        disabled={pending}
                        className="flex w-full items-center gap-3 rounded-md p-1.5 text-left hover:bg-muted/50 disabled:opacity-50"
                      >
                        <div className="h-12 w-8 shrink-0 overflow-hidden rounded-sm bg-muted">
                          {r.coverUrl && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={r.coverUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-medium">{r.title}</div>
                          <div className="truncate text-xs text-muted-foreground">
                            {[r.titleNative, r.year, r.totalAmount && r.totalUnit ? `${r.totalAmount} ${UNIT_LABELS[r.totalUnit]}` : null]
                              .filter(Boolean)
                              .join(" · ")}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
