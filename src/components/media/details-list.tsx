/**
 * metadata.details as a definition list. Keys are English labels written by the
 * importers (src/lib/sources/*); known ones come in a fixed order so every item reads
 * the same way, anything else follows alphabetically.
 */
const ORDER = [
  "Author",
  "Director",
  "Series",
  "Publisher",
  "Label",
  "Developer",
  "Companies",
  "Released",
  "Published",
  "Genres",
  "Tags",
  "Platforms",
  "Page count",
  "Runtime",
  "Voice acting",
  "Rating",
  "ISBN",
];

export function orderedDetails(details: Record<string, string>): [string, string][] {
  const entries = Object.entries(details).filter(([, v]) => typeof v === "string" && v.trim());
  const rank = (k: string) => {
    const i = ORDER.indexOf(k);
    return i === -1 ? ORDER.length : i;
  };
  return entries.sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b));
}

export function DetailsList({ details }: { details: Record<string, string> }) {
  const rows = orderedDetails(details);
  if (!rows.length) return null;
  return (
    <dl className="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-4 gap-y-1.5 text-sm">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="min-w-0 break-words" lang="ja">
            {v}
          </dd>
        </div>
      ))}
    </dl>
  );
}
