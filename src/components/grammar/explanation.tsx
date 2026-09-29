import Markdown, { type Components } from "react-markdown";

/**
 * A grammar point's explanation. The Markdown is ours (written in the deck files), so
 * this only styles the handful of elements explanations use. Rendered on the server and
 * handed to the lesson session as a prop, which keeps react-markdown out of the
 * browser bundle.
 */
const components: Components = {
  p: ({ children }) => <p className="my-3 first:mt-0 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="my-3 list-disc pl-5 marker:text-dim">{children}</ul>,
  ol: ({ children }) => <ol className="my-3 list-decimal pl-5 marker:text-dim">{children}</ol>,
  li: ({ children }) => <li className="my-1 pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  code: ({ children }) => <code className="rounded-sm bg-muted px-1 py-0.5 text-[0.95em]">{children}</code>,
};

export function GrammarExplanation({ markdown, className }: { markdown: string; className?: string }) {
  return (
    <div className={className ?? "max-w-prose text-sm leading-relaxed text-muted-foreground"}>
      <Markdown components={components} skipHtml>
        {markdown}
      </Markdown>
    </div>
  );
}
