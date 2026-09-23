import { ExternalLink } from "lucide-react";
import { MEDIA_SOURCES, type MediaSource } from "@/db/schema";
import { SOURCE_LABELS } from "@/lib/media";

/**
 * metadata.links, validated before rendering: rows added via addFromSearch carry
 * client-supplied metadata, so only https URLs under a known source label are shown
 * (never a `javascript:` or other scheme in an href).
 */
export function safeLinks(links: unknown, exclude?: string | null): [MediaSource, string][] {
  if (!links || typeof links !== "object") return [];
  const out: [MediaSource, string][] = [];
  for (const [key, value] of Object.entries(links as Record<string, unknown>)) {
    if (!(MEDIA_SOURCES as readonly string[]).includes(key) || typeof value !== "string") continue;
    try {
      const u = new URL(value);
      if (u.protocol === "https:" && u.toString() !== exclude) out.push([key as MediaSource, u.toString()]);
    } catch {
      /* skip malformed */
    }
  }
  return out;
}

export function ExternalLinks({ links }: { links: [MediaSource, string][] }) {
  if (!links.length) return null;
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
      {links.map(([source, url]) => (
        <li key={source}>
          <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
            {SOURCE_LABELS[source]} <ExternalLink className="size-3" />
          </a>
        </li>
      ))}
    </ul>
  );
}
