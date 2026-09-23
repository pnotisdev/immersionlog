"use client";

import { useState, useTransition } from "react";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { addFromUrl, previewImport, type PreviewResult } from "@/actions/import";
import { ENTRY_STATUSES, MEDIA_TYPES, type MediaType } from "@/db/schema";
import { MEDIA_TYPE_META, SOURCE_LABELS, UNIT_LABELS } from "@/lib/media";
import { matchImporterHost } from "@/lib/sources/hosts";
import type { SearchResult } from "@/lib/sources/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DetailsList } from "@/components/media/details-list";

const TYPE_ITEMS: Record<string, string> = Object.fromEntries(MEDIA_TYPES.map((t) => [t, MEDIA_TYPE_META[t].label]));

/** Looks like a pasted link rather than a search query. */
export function looksLikeUrl(s: string): boolean {
  return /^https?:\/\/\S+$/i.test(s.trim());
}

/** "Paste a link from BOOK☆WALKER, Bookmeter or Jiten.moe" for a type. */
export function supportedSourcesLine(type: MediaType): string | null {
  const labels = MEDIA_TYPE_META[type].importSources.map((s) => SOURCE_LABELS[s]);
  if (!labels.length) return null;
  return labels.length === 1 ? labels[0] : `${labels.slice(0, -1).join(", ")} or ${labels[labels.length - 1]}`;
}

/** The "BookWalker link detected" / "not supported yet" line under a URL input. */
export function LinkHint({ url }: { url: string }) {
  if (!looksLikeUrl(url)) return null;
  const source = matchImporterHost(url);
  return (
    <p className="text-xs text-muted-foreground">
      {source ? (
        <>
          <Link2 className="mr-1 inline size-3" />
          {SOURCE_LABELS[source]} link detected
        </>
      ) : (
        "This site isn't supported yet. You can still add it manually."
      )}
    </p>
  );
}

/**
 * Preview-then-add for a pasted link. The server reads the page twice (preview, then
 * add), the second time from cache; the client never sends the row itself.
 */
export function LinkImport({
  url,
  type,
  status,
  onAdded,
  onFallback,
}: {
  url: string;
  type: MediaType;
  status: (typeof ENTRY_STATUSES)[number];
  onAdded: (added: { mediaItemId: string; title: string; mediaType: MediaType }) => void;
  /** Called with whatever was scraped when the user should finish by hand. */
  onFallback?: (partial: Partial<SearchResult>) => void;
}) {
  const [pending, startTransition] = useTransition();
  const [volume, setVolume] = useState("");
  const [preview, setPreview] = useState<{ key: string; res: PreviewResult } | null>(null);
  const [typeOverride, setTypeOverride] = useState<MediaType | null>(null);

  const source = matchImporterHost(url);
  const trimmed = url.trim();
  const volumeNumber = volume.trim() === "" ? undefined : Number(volume);
  // A preview belongs to the exact link/type/volume it was made for.
  const key = `${trimmed}|${type}|${volumeNumber ?? ""}`;
  const current = preview?.key === key ? preview.res : null;

  function read() {
    startTransition(async () => {
      const res = await previewImport(trimmed, { hintType: type, volume: volumeNumber });
      setPreview({ key, res });
      setTypeOverride(null);
      if (!res.ok && res.partial?.title && onFallback) onFallback(res.partial);
    });
  }

  function add(result: SearchResult) {
    startTransition(async () => {
      const mediaType = typeOverride ?? result.mediaType;
      const res = await addFromUrl(trimmed, { hintType: type, volume: volumeNumber, status, typeOverride: mediaType });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      toast.success(`Added “${result.title}”`);
      onAdded({ mediaItemId: res.data.mediaItemId, title: result.title, mediaType });
    });
  }

  if (!source) return null;

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-end gap-2">
        {source === "bookwalker" && (
          <div className="grid w-28 gap-1.5">
            <Label htmlFor="import-volume">Volume (optional)</Label>
            <Input id="import-volume" type="number" min={1} max={9999} value={volume} onChange={(e) => setVolume(e.target.value)} />
          </div>
        )}
        <Button type="button" variant="outline" onClick={read} disabled={pending}>
          {pending && !current ? "Reading…" : current ? "Read again" : `Read ${SOURCE_LABELS[source]} link`}
        </Button>
      </div>

      {current && !current.ok && (
        <div className="grid gap-2 rounded-md border border-dashed p-3 text-sm">
          <p>{current.error}</p>
          {onFallback && (
            <div>
              <Button type="button" size="sm" variant="ghost" onClick={() => onFallback(current.partial ?? {})}>
                Add it manually instead
              </Button>
            </div>
          )}
        </div>
      )}

      {current?.ok && (
        <ImportPreview
          result={current.result}
          warnings={current.warnings}
          mediaType={typeOverride ?? current.result.mediaType}
          onTypeChange={setTypeOverride}
          onAdd={() => add(current.result)}
          pending={pending}
        />
      )}
    </div>
  );
}

function ImportPreview({
  result: r,
  warnings,
  mediaType,
  onTypeChange,
  onAdd,
  pending,
}: {
  result: SearchResult;
  warnings: string[];
  mediaType: MediaType;
  onTypeChange: (t: MediaType) => void;
  onAdd: () => void;
  pending: boolean;
}) {
  const details = (r.metadata?.details ?? {}) as Record<string, string>;
  return (
    <div className="grid gap-3 rounded-md border p-2">
      <div className="flex items-center gap-3">
        <div className="h-16 w-11 shrink-0 overflow-hidden rounded-sm bg-muted">
          {r.coverUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.coverUrl} alt="" className="h-full w-full object-cover" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium" lang="ja">
            {r.title}
          </div>
          <div className="truncate text-xs text-muted-foreground">
            {[r.titleNative, r.year, SOURCE_LABELS[r.source], r.totalAmount && r.totalUnit ? `${r.totalAmount.toLocaleString()} ${UNIT_LABELS[r.totalUnit]}` : null]
              .filter(Boolean)
              .join(" · ")}
          </div>
        </div>
      </div>
      {warnings.length > 0 && (
        <ul className="grid gap-0.5 text-xs text-muted-foreground">
          {warnings.map((w) => (
            <li key={w}>· {w}</li>
          ))}
        </ul>
      )}
      {Object.keys(details).length > 0 && (
        <details className="text-xs">
          <summary className="cursor-pointer text-muted-foreground select-none">Details</summary>
          <div className="pt-2">
            <DetailsList details={details} />
          </div>
        </details>
      )}
      <div className="flex items-end justify-between gap-3">
        <div className="grid w-40 gap-1.5">
          <Label htmlFor="import-type">Add as</Label>
          <Select items={TYPE_ITEMS} value={mediaType} onValueChange={(v) => onTypeChange(v as MediaType)}>
            <SelectTrigger id="import-type" className="w-full">
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
        <Button type="button" onClick={onAdd} disabled={pending}>
          {pending ? "Adding…" : "Add"}
        </Button>
      </div>
    </div>
  );
}
