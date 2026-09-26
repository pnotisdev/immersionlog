import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { KanaRow } from "@/lib/kana";

/**
 * Building blocks for the long-form learning guide (src/app/(profile)/guide/page.tsx):
 * one reading measure and rhythm for every section, so the page's content stays plain
 * JSX without styling on every paragraph.
 */

export function GuideSection({ id, step, title, children }: { id: string; step?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-10 first:border-t-0 first:pt-0">
      {step && <p className="section-label mb-2">{step}</p>}
      <h2 className="text-[1.625rem] leading-8 font-semibold tracking-tight text-balance">{title}</h2>
      <div className="mt-5 grid gap-4 text-[1.0625rem] leading-[1.75] [&_strong]:font-semibold [&_strong]:text-foreground">{children}</div>
    </section>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="mt-4 scroll-mt-24 text-h3 font-semibold">
      {children}
    </h3>
  );
}

export function List({ children, ordered = false }: { children: ReactNode; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return <Tag className={cn("grid gap-2 pl-6 marker:text-dim", ordered ? "list-decimal" : "list-disc")}>{children}</Tag>;
}

/** An outside resource. Opens in a new tab and says so with an arrow. */
export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-0.5 text-primary underline decoration-primary/40 underline-offset-3 hover:decoration-primary"
    >
      {children}
      <ArrowUpRight className="size-3.5 shrink-0 self-center opacity-70" aria-hidden />
    </a>
  );
}

/** A page on this site. */
export function In({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-primary underline decoration-primary/40 underline-offset-3 hover:decoration-primary">
      {children}
    </Link>
  );
}

export function Callout({ title, children, tone = "note" }: { title: string; children: ReactNode; tone?: "note" | "warn" }) {
  return (
    <aside
      className={cn(
        "rounded-lg border px-5 py-4 text-[0.9375rem] leading-relaxed",
        tone === "warn" ? "border-primary/40 bg-accent-tint" : "border-border bg-surface",
      )}
    >
      <p className="mb-1 font-semibold">{title}</p>
      <div className="grid gap-2 text-muted-foreground">{children}</div>
    </aside>
  );
}

/** A small key/value table: settings, timelines. */
export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full border-collapse text-[0.9375rem]">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="border-b border-line-strong py-2 pr-4 text-left font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className={cn("border-b border-border py-2.5 pr-4 align-top", j === 0 && "font-medium whitespace-nowrap")}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A kana chart: each cell shows hiragana large, katakana beside it, romaji under. */
export function KanaChart({ rows, caption }: { rows: KanaRow[]; caption: string }) {
  return (
    <figure className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[22rem] border-collapse text-center" lang="ja">
        <caption className="mb-2 text-left text-meta text-dim">{caption}</caption>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.cells.map((c, j) => (
                <td key={j} className="border border-border p-0">
                  {c ? (
                    <div className="px-1 py-2">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="text-2xl leading-none">{c.hiragana}</span>
                        <span className="text-base leading-none text-muted-foreground">{c.katakana}</span>
                      </div>
                      <div className="mt-1.5 font-mono text-xs text-dim" lang="en">
                        {c.romaji}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full min-h-[3.5rem] bg-surface-2/60" aria-hidden />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
