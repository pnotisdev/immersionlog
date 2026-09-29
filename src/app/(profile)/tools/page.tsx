import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

const PATH = "/tools";
const title = "Free Japanese practice tools";
const description =
  "Free tools for learning Japanese: a hiragana and katakana quiz, a verb and adjective conjugation drill, an N5 grammar list with spaced reviews, and a reading speed test.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { title: `${title} · immersionlog`, description, url: PATH },
};

export default function ToolsPage() {
  return (
    <div className="mx-auto grid max-w-3xl gap-10">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: title,
            itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.title, url: absoluteUrl(t.href) })),
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Tools", path: PATH },
          ]),
        ]}
      />
      <header>
        <h1 className="text-2xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Short drills for the parts of Japanese that reward repetition. They work without an account (grammar reviews need one
          to remember your schedule). For what to do around
          them, the{" "}
          <Link href="/guide" className="text-primary hover:underline">
            learning guide
          </Link>{" "}
          goes from kana to reading novels.
        </p>
      </header>

      <div className="grid gap-4">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group flex items-center gap-5 rounded-lg border bg-surface p-5 transition-colors hover:border-primary/50 sm:p-6"
          >
            <div
              lang="ja"
              aria-hidden
              className="grid size-16 shrink-0 place-items-center rounded-md bg-accent/40 text-lg font-medium text-primary sm:size-20 sm:text-xl"
            >
              {t.sample}
            </div>
            <div>
              <h2 className="text-lg font-semibold group-hover:text-primary">{t.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
