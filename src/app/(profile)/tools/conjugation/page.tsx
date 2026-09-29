import type { Metadata } from "next";
import Link from "next/link";
import { FORMS, WORDS } from "@/lib/conjugation";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { MoreTools } from "@/components/tools/more-tools";
import { ConjugationDrill } from "@/components/tools/conjugation-drill";

const PATH = "/tools/conjugation";
const title = "Japanese conjugation practice";
const description =
  "Free Japanese verb and adjective conjugation drill: negative, past, polite, て-form, potential, passive, causative, conditionals, volitional and imperative. Type in romaji or kana and see why when you miss.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { title: `${title} · immersionlog`, description, url: PATH },
};

const FAQ = [
  {
    q: "Do I need a Japanese keyboard?",
    a: "No. Type in romaji and it turns into hiragana as you go: tabemashita becomes たべました. A Japanese input method works too, and answers in kanji or kana are both accepted.",
  },
  {
    q: "Which answers count as right?",
    a: "The textbook form, plus the everyday alternatives: 食べないです as well as 食べません, じゃない as well as ではない, the short causative passive (飲まされる), and the contracted ている (食べてる).",
  },
  {
    q: "What's the difference between godan and ichidan verbs?",
    a: "Ichidan verbs drop る and add an ending (食べる → 食べない). Godan verbs change their last kana to another row of the kana chart (書く → 書かない, 書きます). Some godan verbs end in る and look like ichidan verbs, such as 帰る and 入る; the drill includes them for that reason.",
  },
  {
    q: "How much conjugation practice do I need?",
    a: "Enough that the common forms (negative, past, polite, て-form) come without thinking about the rules. After that, reading and listening do the rest: you'll see each form thousands of times in real Japanese.",
  },
];

export default function ConjugationPage() {
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
          {WORDS.length} common verbs and adjectives, {FORMS.length} forms. Choose what to practise, type the conjugated form in romaji or kana,
          and get the rule when you miss. Missed questions come back a few questions later. No account needed. The{" "}
          <Link href="/guide/grammar" className="text-primary hover:underline">
            guide&apos;s grammar chapter
          </Link>{" "}
          explains how conjugation fits into learning grammar.
        </p>
      </header>

      <ConjugationDrill />

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
