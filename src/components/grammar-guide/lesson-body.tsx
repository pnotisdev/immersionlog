import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { alignReading } from "@/lib/grammar/sentence";
import type { BoxKind, Chunk, Node } from "@/lib/grammar-guide/types";
import { cn } from "@/lib/utils";

/**
 * Renders a parsed lesson (src/lib/grammar-guide/parse.ts). Server-rendered: the lesson
 * text is ours, so react-markdown stays out of the browser bundle.
 */

const md: Components = {
  p: ({ children }) => <p>{children}</p>,
  ul: ({ children }) => <ul className="grid list-disc gap-1.5 pl-6 marker:text-dim">{children}</ul>,
  ol: ({ children }) => <ol className="grid list-decimal gap-1.5 pl-6 marker:text-dim">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  code: ({ children }) => <code className="rounded-sm bg-muted px-1 py-0.5 text-[0.9em]">{children}</code>,
  table: ({ children }) => (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full border-collapse text-[0.9375rem]">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="border-b border-line-strong py-2 pr-4 text-left font-semibold whitespace-nowrap">{children}</th>,
  td: ({ children }) => <td className="border-b border-border py-2 pr-4 align-top">{children}</td>,
  a: ({ href, children }) => (
    <a href={href} className="text-primary underline decoration-primary/40 underline-offset-3 hover:decoration-primary">
      {children}
    </a>
  ),
};

function Prose({ text }: { text: string }) {
  return (
    <div className="grid gap-4">
      <Markdown components={md} remarkPlugins={[remarkGfm]} skipHtml>
        {text}
      </Markdown>
    </div>
  );
}

function Japanese({ jp, kana }: { jp: string; kana?: string }) {
  const tokens = kana ? alignReading(jp, kana) : null;
  if (!tokens) return <>{jp}</>;
  return (
    <>
      {tokens.map((t, i) =>
        t.ruby ? (
          <ruby key={i} className="[ruby-align:center]">
            {t.text}
            <rt className="text-[0.5em] font-normal text-muted-foreground">{t.ruby}</rt>
          </ruby>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </>
  );
}

function ChunkCell({ c, glossed }: { c: Chunk; glossed: boolean }) {
  return (
    <span className="inline-flex max-w-full flex-col items-start gap-0.5">
      <span lang="ja" className={cn("text-[1.125rem] leading-[2.1] [overflow-wrap:anywhere] sm:text-[1.375rem]", c.hl && "font-semibold text-primary")}>
        <Japanese jp={c.jp} kana={c.kana} />
      </span>
      {glossed && <span className="max-w-[9rem] text-[0.8125rem] leading-snug text-muted-foreground">{c.gloss ?? " "}</span>}
    </span>
  );
}

function Example({ node }: { node: Extract<Node, { t: "ex" }> }) {
  const rows = [node.chunks, ...(node.more ?? [])];
  return (
    <figure className="min-w-0 rounded-lg border border-border/70 bg-surface px-3.5 py-2.5 sm:px-5 sm:py-3">
      <div className={cn("grid", rows.length > 1 && "gap-y-3")}>
        {rows.map((chunks, r) => {
          const glossed = chunks.some((c) => c.gloss);
          return (
            <div key={r} className={cn("flex flex-wrap items-start", glossed ? "gap-x-3 gap-y-1" : "gap-x-0")}>
              {chunks.map((c, i) => (
                <ChunkCell key={i} c={c} glossed={glossed} />
              ))}
            </div>
          );
        })}
      </div>
      {(node.en || node.note) && (
        <figcaption className="mt-2 grid gap-1 text-[0.9375rem] leading-relaxed">
          {node.en && <span className="whitespace-pre-line text-foreground">{node.en}</span>}
          {node.note && <span className="text-meta text-dim">{node.note}</span>}
        </figcaption>
      )}
    </figure>
  );
}

const BOX: Record<BoxKind, { label: string; className: string }> = {
  note: { label: "Note", className: "border-transparent bg-surface" },
  key: { label: "Remember", className: "border-primary/30 bg-accent-tint" },
  warn: { label: "Careful", className: "border-primary/30 bg-accent-tint" },
  try: { label: "Look for it", className: "border-transparent bg-surface-2" },
  read: { label: "Step by step", className: "border-transparent bg-surface-2" },
};

function Nodes({ nodes }: { nodes: Node[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.t) {
          case "h2":
            return (
              <h2 key={i} id={n.id} className="mt-6 scroll-mt-24 text-[1.375rem] leading-8 font-semibold tracking-tight text-balance first:mt-0 sm:mt-4 sm:border-t sm:border-border sm:pt-8 sm:text-[1.5rem] sm:first:border-t-0 sm:first:pt-0">
                {n.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-4 text-h3 font-semibold text-foreground">
                {n.text}
              </h3>
            );
          case "md":
            return <Prose key={i} text={n.text} />;
          case "ex":
            return <Example key={i} node={n} />;
          case "box": {
            const b = BOX[n.kind];
            return (
              <aside key={i} className={cn("rounded-lg border px-4 py-3.5 text-[0.9375rem] leading-relaxed sm:px-5 sm:py-4", b.className)}>
                <p className="mb-1.5 font-semibold">
                  <span className="mr-2 text-meta font-medium tracking-wide text-dim uppercase">{b.label}</span>
                  {n.title}
                </p>
                <div className="grid gap-3 text-muted-foreground [&_strong]:text-foreground">
                  <Nodes nodes={n.children} />
                </div>
              </aside>
            );
          }
        }
      })}
    </>
  );
}

export function LessonBody({ nodes }: { nodes: Node[] }) {
  return (
    <div className="grid gap-4 text-[1.0625rem] leading-[1.75] sm:gap-5 [&_strong]:font-semibold [&_strong]:text-foreground">
      <Nodes nodes={nodes} />
    </div>
  );
}
