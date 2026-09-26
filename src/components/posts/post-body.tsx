import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { isPostImageSrc } from "@/lib/posts";

/** react-markdown's props minus its `node` (the syntax tree), which isn't a DOM attribute. */
function attrs<P extends { node?: unknown }>(props: P): Omit<P, "node"> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

/**
 * Renders a post's Markdown. Raw HTML is dropped (skipHtml), react-markdown's default
 * urlTransform already strips javascript: and other unsafe link schemes, and images
 * render only when they were uploaded here (isPostImageSrc): any other image becomes a
 * link, so a post can't embed a tracking pixel. Headings start at h2 under the post's
 * own h1. No "use client": the post page renders it on the server, the editor's preview
 * in the browser.
 */
const components: Components = {
  h1: (p) => <h2 {...attrs(p)} className="mt-8 mb-3 text-h1 font-semibold" />,
  h2: (p) => <h2 {...attrs(p)} className="mt-8 mb-3 text-h2 font-semibold" />,
  h3: (p) => <h3 {...attrs(p)} className="mt-6 mb-2 text-h3 font-semibold" />,
  h4: (p) => <h4 {...attrs(p)} className="mt-5 mb-2 font-semibold" />,
  h5: (p) => <h5 {...attrs(p)} className="mt-5 mb-2 font-semibold" />,
  h6: (p) => <h6 {...attrs(p)} className="mt-5 mb-2 font-semibold" />,
  p: (p) => <p {...attrs(p)} className="my-4" />,
  ul: (p) => <ul {...attrs(p)} className="my-4 list-disc pl-6 marker:text-dim [&_ul]:my-1" />,
  ol: (p) => <ol {...attrs(p)} className="my-4 list-decimal pl-6 marker:text-dim [&_ol]:my-1" />,
  li: (p) => <li {...attrs(p)} className="my-1 pl-1" />,
  blockquote: (p) => <blockquote {...attrs(p)} className="my-5 border-l-2 border-primary/60 pl-4 text-muted-foreground" />,
  hr: () => <hr className="my-8 border-border" />,
  a: ({ href, ...p }) => {
    const external = !!href && /^https?:\/\//i.test(href);
    return (
      <a
        {...attrs(p)}
        href={href}
        className="text-primary underline decoration-primary/40 underline-offset-3 hover:decoration-primary"
        {...(external ? { target: "_blank", rel: "nofollow ugc noopener noreferrer" } : {})}
      />
    );
  },
  img: ({ src, alt }) => {
    const url = typeof src === "string" ? src : undefined;
    if (!isPostImageSrc(url)) {
      return url ? (
        <a href={url} target="_blank" rel="nofollow ugc noopener noreferrer" className="text-primary underline underline-offset-3">
          {alt || url}
        </a>
      ) : null;
    }
    return (
      // Uploads are already resized WebP served with an immutable cache; next/image
      // would only re-encode them again.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={url} alt={alt ?? ""} loading="lazy" decoding="async" className="my-6 block h-auto max-w-full rounded-md border border-border" />
    );
  },
  code: ({ className, ...p }) => (
    <code className={className ?? "rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.875em]"} {...attrs(p)} />
  ),
  pre: (p) => <pre {...attrs(p)} className="my-5 overflow-x-auto rounded-md border border-border bg-surface-2 p-4 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0" />,
  table: (p) => (
    <div className="my-5 overflow-x-auto">
      <table {...attrs(p)} className="w-full border-collapse text-sm" />
    </div>
  ),
  th: (p) => <th {...attrs(p)} className="border-b border-line-strong px-3 py-2 text-left font-semibold" />,
  td: (p) => <td {...attrs(p)} className="border-b border-border px-3 py-2" />,
};

export function PostBody({ markdown }: { markdown: string }) {
  return (
    <div className="text-[1.0625rem] leading-[1.75] break-words text-foreground [&>*:first-child]:mt-0">
      <Markdown remarkPlugins={[remarkGfm]} skipHtml components={components}>
        {markdown}
      </Markdown>
    </div>
  );
}
