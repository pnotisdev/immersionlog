import { Panel } from "@/components/layout/panel";
import { CopyButton } from "@/components/ui/copy-button";

/**
 * "Put your stats on your GitHub/blog/forum signature": the /u/<name>/card.svg image
 * plus paste-ready snippets. Every embed is a link back to the profile.
 */
export function EmbedCard({ base, username }: { base: string; username: string }) {
  const profile = `${base}/u/${username}`;
  const img = `${profile}/card.svg`;
  const snippets = [
    { label: "Markdown", hint: "GitHub, Reddit, Notion", value: `[![Japanese immersion on immersionlog](${img})](${profile})` },
    { label: "HTML", hint: "Blogs, websites", value: `<a href="${profile}"><img src="${img}" alt="Japanese immersion on immersionlog" width="495" height="195"></a>` },
    { label: "BBCode", hint: "Forums", value: `[url=${profile}][img]${img}[/img][/url]` },
  ];
  return (
    <Panel title="Embed your stats" description="A live card for your GitHub, blog or forum signature. Updates as you log.">
      {/* eslint-disable-next-line @next/next/no-img-element -- our own SVG route, not an optimisable photo */}
      <img src={img} alt="Your immersionlog stats card" width={495} height={195} className="h-auto w-full max-w-[495px] rounded-md" />
      <ul className="mt-4 grid gap-3">
        {snippets.map((s) => (
          <li key={s.label} className="grid gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium">
                {s.label} <span className="text-meta font-normal text-dim">· {s.hint}</span>
              </span>
              <CopyButton value={s.value} label="Copy" copiedLabel="Copied" />
            </div>
            <code className="block truncate rounded-sm bg-muted px-2 py-1.5 font-mono text-micro text-muted-foreground">{s.value}</code>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-meta text-dim">
        Add <code className="font-mono">?theme=light</code> to the image address for light backgrounds.
      </p>
    </Panel>
  );
}
