/* eslint-disable @next/next/no-img-element -- AniList art is hotlinked from its CDN on purpose; next/image would proxy and cache it (see src/lib/guide-art.ts). */
import type { ReactNode } from "react";
import { anilistUrl, art, artForJiten, type AnimeArt, type ArtKey } from "@/lib/guide-art";
import { cn } from "@/lib/utils";

/**
 * Anime and manga pictures for the learning guide, all from AniList. Every picture links
 * back to its AniList page, which is also the credit.
 */

function Source({ a }: { a: AnimeArt }) {
  return (
    <a href={anilistUrl(a)} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap underline underline-offset-2 hover:text-foreground">
      <span lang="ja">{a.title}</span> on AniList
    </a>
  );
}

/** The wide picture at the top of a chapter, with a one-line caption. */
export function ChapterArt({ name, caption }: { name: ArtKey; caption: ReactNode }) {
  const a = art(name);
  return (
    <figure className="mb-8 max-w-[44rem]">
      <div className="overflow-hidden rounded-xl border border-border" style={{ backgroundColor: a.color ?? undefined }}>
        <img
          src={a.banner}
          alt={`Art from ${a.en}`}
          width={1900}
          height={400}
          fetchPriority="high"
          className="aspect-[5/2] h-auto w-full object-cover sm:aspect-[19/5]"
        />
      </div>
      <figcaption className="mt-2 text-meta text-dim">
        {caption} <span className="text-dim/80">·</span> <Source a={a} />
      </figcaption>
    </figure>
  );
}

/**
 * A cover beside a short aside: a scene, a line of dialogue, a joke that makes a point.
 * Sits in the flow of a section like a Callout.
 */
export function Scene({ name, title, children, className }: { name: ArtKey; title: ReactNode; children: ReactNode; className?: string }) {
  const a = art(name);
  return (
    <aside className={cn("grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 rounded-lg border border-border bg-surface p-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5", className)}>
      <a href={anilistUrl(a)} target="_blank" rel="noopener noreferrer" className="self-start" aria-label={`${a.en} on AniList`}>
        <img
          src={a.cover}
          alt=""
          width={230}
          height={325}
          loading="lazy"
          decoding="async"
          className="aspect-[23/33] w-full rounded-md object-cover shadow-sm"
          style={{ backgroundColor: a.color ?? undefined }}
        />
      </a>
      <div className="min-w-0 text-[0.9375rem] leading-relaxed">
        <p className="font-semibold">{title}</p>
        <div className="mt-1 grid gap-2 text-muted-foreground">{children}</div>
        <p className="mt-2 text-meta text-dim">
          <Source a={a} />
        </p>
      </div>
    </aside>
  );
}

/** A wide still with a caption, in the flow of a section. */
export function Still({ name, caption }: { name: ArtKey; caption: ReactNode }) {
  const a = art(name);
  return (
    <figure className="my-2">
      <div className="overflow-hidden rounded-lg border border-border" style={{ backgroundColor: a.color ?? undefined }}>
        <img src={a.banner} alt={`Art from ${a.en}`} width={1900} height={400} loading="lazy" decoding="async" className="aspect-[5/2] h-auto w-full object-cover sm:aspect-[19/6]" />
      </div>
      <figcaption className="mt-2 text-meta text-dim">
        {caption} · <Source a={a} />
      </figcaption>
    </figure>
  );
}

/** A row of covers, each linking to AniList. */
export function CoverShelf({ names, caption }: { names: ArtKey[]; caption?: ReactNode }) {
  return (
    <figure className="my-2">
      <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-6 sm:overflow-visible sm:px-0">
        {names.map((n) => {
          const a = art(n);
          return (
            <li key={n} className="w-24 shrink-0 sm:w-auto">
              <a href={anilistUrl(a)} target="_blank" rel="noopener noreferrer" className="group block">
                <img
                  src={a.cover}
                  alt={a.en}
                  width={230}
                  height={325}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[23/33] w-full rounded-md border border-border object-cover transition-transform group-hover:-translate-y-0.5"
                  style={{ backgroundColor: a.color ?? undefined }}
                />
                <span lang="ja" className="mt-1.5 line-clamp-2 block text-xs leading-snug text-muted-foreground group-hover:text-foreground">
                  {a.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      {caption && <figcaption className="mt-1 text-meta text-dim">{caption} Covers from AniList.</figcaption>}
    </figure>
  );
}

/** A small cover for a ranked media row, or nothing if the title isn't on AniList. */
export function RowCover({ jiten }: { jiten: number }) {
  const a = artForJiten(jiten);
  if (!a) return null;
  return (
    <a href={anilistUrl(a)} target="_blank" rel="noopener noreferrer" className="shrink-0" aria-label={`${a.en} on AniList`}>
      <img
        src={a.cover}
        alt=""
        width={230}
        height={325}
        loading="lazy"
        decoding="async"
        className="aspect-[23/33] w-11 rounded-sm object-cover sm:w-12"
        style={{ backgroundColor: a.color ?? undefined }}
      />
    </a>
  );
}
