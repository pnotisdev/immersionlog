import type { Metadata } from "next";
import { countChars } from "@/lib/characters";
import { formatNumber } from "@/lib/format";
import { getSession } from "@/lib/session";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { jitenOf, listPublicTitles, titlePath } from "@/lib/titles";
import { ReadingSpeedTest } from "@/components/tools/reading-speed-test";
import { PASSAGES } from "@/components/tools/reading-passages";

const PATH = "/tools/reading-speed";
const title = "Japanese reading speed test";
const description =
  "Free Japanese reading speed test with beginner, intermediate and advanced passages. Get your speed in characters per minute and per hour, and how long a novel or visual novel would take you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { title: `${title} · immersionlog`, description, url: PATH },
};

export const revalidate = 3600;

const FAQ = [
  {
    q: "What counts as a character?",
    a: "Every kana and kanji. Punctuation and spaces are not counted. This is the same rule immersionlog uses everywhere else, including the texthooker.",
  },
  {
    q: "What is a good Japanese reading speed?",
    a: "There's no single number, and it depends heavily on the text. As rough bands: under 5,000 characters an hour is starting out, 5,000 to 10,000 is building up, 10,000 to 20,000 is comfortable for novels, and above 20,000 is close to how many native readers read for fun.",
  },
  {
    q: "How do I read faster in Japanese?",
    a: "Mostly by reading more, at a level where you understand most of what you read without stopping. Speed follows familiarity with vocabulary and grammar, so it rises with volume rather than with speed-reading tricks.",
  },
  {
    q: "Why is there a comprehension question?",
    a: "Skimming a passage is fast but doesn't tell you much. If you miss the question, the result says so, and your real reading speed is probably a bit lower.",
  },
];

export default async function ReadingSpeedPage() {
  const [session, titles] = await Promise.all([getSession(), listPublicTitles({ limit: 400 })]);
  const references = titles
    .map((t) => ({ title: t.title, path: titlePath(t), chars: jitenOf(t)?.characterCount ?? 0 }))
    .filter((t) => t.chars > 0)
    .slice(0, 6);

  return (
    <div className="mx-auto grid max-w-3xl gap-10">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: title,
            url: absoluteUrl(PATH),
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            inLanguage: ["en", "ja"],
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: title, path: PATH },
          ]),
        ]}
      />
      <header>
        <h1 className="text-2xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Read a short passage, answer one question, and get your speed in characters per minute and per hour. Three levels,
          from a {formatNumber(countChars(PASSAGES[0].text))}-character beginner text to an N1-style essay. No account needed.
        </p>
      </header>

      <ReadingSpeedTest references={references} signedIn={!!session} pageUrl={absoluteUrl(PATH)} />

      <section className="grid gap-5">
        <h2 className="text-h2 font-semibold">Questions</h2>
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3 className="font-medium">{f.q}</h3>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
