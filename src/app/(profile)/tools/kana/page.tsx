import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { MoreTools } from "@/components/tools/more-tools";
import { KanaQuiz } from "@/components/tools/kana-quiz";

const PATH = "/tools/kana";
const title = "Hiragana and katakana quiz";
const description =
  "Free hiragana and katakana drill. Pick the rows you're learning, type the romaji or pick the kana, and missed characters come back until you get them. Covers all 46 basic kana, voiced kana and combinations.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { title: `${title} · immersionlog`, description, url: PATH },
};

const FAQ = [
  {
    q: "Which romaji spellings work?",
    a: "Hepburn, the one most textbooks use (shi, chi, tsu, fu, ja), and the Kunrei spellings you'd type on a Japanese keyboard (si, ti, tu, hu, zya). を is o or wo, and ん is n or nn.",
  },
  {
    q: "What happens when I get one wrong?",
    a: "You see the answer, and the kana comes back a few cards later in the same round. At the end you can drill only the ones you missed.",
  },
  {
    q: "How long does it take to learn kana?",
    a: "Most people can read all of hiragana after a few days to a week, and katakana takes about as long again. Don't wait for perfect recall before you start reading: the slow ones become automatic from seeing them in real text.",
  },
  {
    q: "Should I learn to write them too?",
    a: "For reading, recognising kana is what you need, and it's much quicker than learning to write them from memory. Writing helps some people remember the shapes, so do it if you enjoy it.",
  },
];

export default function KanaQuizPage() {
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
            { name: "Tools", path: "/tools" },
            { name: title, path: PATH },
          ]),
        ]}
      />
      <header>
        <h1 className="text-2xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Pick the rows you&apos;re learning, then name each kana as it comes up. Anything you miss comes back a few cards later. Start
          with the basic hiragana, add rows as they stick, then do the same with katakana. No account needed. New to kana? The{" "}
          <Link href="/guide/kana" className="text-primary hover:underline">
            guide&apos;s kana chapter
          </Link>{" "}
          has the charts and how to learn them.
        </p>
      </header>

      <KanaQuiz />

      <section className="grid gap-5">
        <h2 className="text-h2 font-semibold">Questions</h2>
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3 className="font-medium">{f.q}</h3>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </section>

      <MoreTools current={PATH} />
    </div>
  );
}
