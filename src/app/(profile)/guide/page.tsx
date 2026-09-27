import Link from "next/link";
import { GUIDE_CHAPTERS, guidePath } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { ImageCredits, Photo, SentenceDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

/**
 * The learning guide's overview. Written from the community guides it links (TheMoeWay,
 * VN Club, Donkuri, Tofugu, Tae Kim, wotaku.wiki, "A Year to Learn Japanese") and each
 * tool's own documentation, checked 2026-09-27. Facts that go stale (tool names, Anki
 * defaults, links, JLPT data) are the ones to recheck when editing; GUIDE_UPDATED in
 * src/lib/guide.ts is the date shown to readers.
 */

export const metadata = chapterMetadata("");

const FAQ = [
  {
    q: "How long does it take to learn Japanese?",
    a: "Longer than most languages for an English speaker. The US Foreign Service Institute puts Japanese in its hardest group, at around 2,200 classroom hours to professional working proficiency, and marks it as harder than the other languages in that group. A survey of learners in Japan put the top JLPT level (N1) at 3,000–4,800 hours for people without a kanji background. With daily input you can follow easy manga and slice-of-life anime with a dictionary within months; comfortable novel reading usually takes a year or more.",
  },
  {
    q: "Should I learn hiragana or katakana first?",
    a: "Hiragana first, then katakana straight after. Both have 46 basic characters for the same sounds. Hiragana is everywhere in grammar, katakana mostly in loanwords and names. Together they take days to a week or two, not months.",
  },
  {
    q: "Do I need to study kanji separately?",
    a: "Not necessarily. Most immersion guides recommend learning kanji through the words they appear in, with a vocabulary deck and then reading. Studying all 2,136 jōyō kanji in isolation before reading delays the part that actually teaches you Japanese, though some learners like a short component course first.",
  },
  {
    q: "Do I need Anki?",
    a: "Not strictly, but it's the fastest way to get the first 1,500 words to stick, and those words are what make native content understandable at all. Ten to twenty new cards a day with a starter deck like Kaishi 1.5k, then cards from what you read.",
  },
  {
    q: "Should I watch anime with English subtitles?",
    a: "Not for immersion time. With English subtitles you read English. Use Japanese subtitles, or none, and keep English for things you're watching purely for fun.",
  },
  {
    q: "What is the JLPT, and do I need it?",
    a: "The Japanese-Language Proficiency Test certifies reading and listening at five levels, from N5 to N1. It's held twice a year, in July and December, and doesn't test speaking or writing. You only need it if a school, visa or employer asks for it.",
  },
  {
    q: "What should I watch or read first?",
    a: "Something you actually want to finish, with everyday language. By measured difficulty, Teasing Master Takagi-san, Polar Bear Café and Non Non Biyori are among the easiest anime, and Yotsuba&! is the classic first manga. The 'What to watch and read' chapter ranks around sixty titles.",
  },
];

export default function GuideOverviewPage() {
  const chapters = GUIDE_CHAPTERS.slice(1);
  return (
    <ChapterShell slug="" faq={FAQ}>
      <GuideSection id="short-version" title="The short version">
        <List ordered>
          <li>
            <strong>Learn hiragana and katakana.</strong> A few days to a week each. Reading them, not writing them.
          </li>
          <li>
            <strong>Install Anki and start Kaishi 1.5k,</strong> a free deck of the 1,500 most useful words, at 10–20 new words
            a day.
          </li>
          <li>
            <strong>Read one short grammar explanation a day</strong> from a single beginner guide. Don&apos;t try to memorise it.
          </li>
          <li>
            <strong>Start immersing now, not later.</strong> An hour or two a day of anime, manga, YouTube, visual novels or
            graded readers, with Japanese subtitles or a pop-up dictionary.
          </li>
          <li>
            <strong>When Kaishi runs out, make your own cards</strong> from words you meet in what you read and watch.
          </li>
          <li>
            <strong>Keep going every day.</strong> Hours of understood Japanese are what make you better; everything else exists
            to make those hours possible.
          </li>
        </List>
        <Callout title="Why all at once?">
          <p>
            The common mistake is doing the steps in sequence: all the kana, then all the words, then all the grammar, and only
            then touching real Japanese. The immersion guides agree on the opposite. Words from Anki make sense when you see them
            in a show; grammar clicks when you meet it in a sentence you care about. Even guides built around textbooks, like{" "}
            <em>A Year to Learn Japanese</em>, tell you to check in with real content regularly so you notice the day it becomes
            bearable.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="chapters" title="The chapters">
        <p>Read them in order the first time; after that, jump to whatever you&apos;re stuck on.</p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {chapters.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={guidePath(c.slug)}
                className="group block h-full rounded-lg border border-border bg-surface px-4 py-3.5 transition-colors hover:border-foreground/30"
              >
                <span className="text-meta text-dim">Chapter {i + 1}</span>
                <span className="mt-0.5 block font-semibold group-hover:underline">{c.nav}</span>
                <span className="mt-1 line-clamp-3 block text-sm leading-relaxed text-muted-foreground">{c.description}</span>
              </Link>
            </li>
          ))}
        </ol>
      </GuideSection>

      <GuideSection id="expectations" title="What to expect">
        <p>
          Japanese is a long project for an English speaker. The US Foreign Service Institute places it in its hardest group,
          around <strong>2,200 classroom hours</strong> to professional working proficiency, and flags it as harder than the
          other languages in that group. Three writing systems, a word order that runs the other way, and very little shared
          vocabulary all add up.
        </p>
        <H3>The JLPT, and how many hours</H3>
        <p>
          The <Ext href="https://www.jlpt.jp/e/about/levelsummary.html">Japanese-Language Proficiency Test</Ext> is the standard
          certificate: five levels, sat in July and December. It tests reading and listening only, and its organisers no longer
          publish word or kanji lists for each level. The Japanese Language Education Center&apos;s survey of learners
          (2010–2015, as cited on Wikipedia) gives a feel for the hours involved:
        </p>
        <Table
          head={["Level", "What it certifies", "Hours, no kanji background"]}
          rows={[
            ["N5", "Some basic Japanese: kana, basic kanji, slow short conversations", "325–600"],
            ["N4", "Basic Japanese on familiar daily topics", "575–1,000"],
            ["N3", "Everyday Japanese to a certain degree; newspaper headlines", "950–1,700"],
            ["N2", "Everyday situations and newspaper articles; near-natural-speed speech", "1,600–2,800"],
            ["N1", "Japanese in a wide range of situations, including abstract and complex texts", "3,000–4,800"],
          ]}
        />
        <p>
          Learners who already read Chinese characters need less: about half as long for N1. The exact numbers matter less than
          the scale: the path is measured in thousands of hours, and daily immersion is how people fit thousands of hours into a
          life.
        </p>
        <H3>Milestones people report</H3>
        <Table
          head={["Around", "What it feels like"]}
          rows={[
            ["Week 1–2", "You can read kana, slowly. Signs and song titles start to look like words instead of shapes."],
            ["Month 1–3", "Anki words start turning up in shows. Graded readers and easy manga are readable with a dictionary."],
            ["Month 3–6", "You finish something real: a manga volume, a short visual novel, a season of slice-of-life anime."],
            ["Year 1+", "Reading turns into entertainment rather than study. You choose things by interest, not difficulty."],
          ]}
        />
        <p>
          Those assume an hour or two a day. TheMoeWay puts it in terms of volume instead: after about ten anime series watched
          raw you start to get the hang of listening; after your first novel you leave the beginner stage. <em>A Year to Learn
          Japanese</em> describes the first big turning point as the &ldquo;nope threshold&rdquo;: the day native content stops
          being unbearable and becomes merely hard. Everything before it is about getting there sooner.
        </p>
        <Callout title="Measure what matters">
          <p>
            Hours are the one number every method agrees on. <In href="/">immersionlog</In> exists to count them: time per title,
            characters read, streaks and goals. Take the <In href="/tools/reading-speed">reading speed test</In> now and again in
            three months.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="how-japanese-works" title="How Japanese works, in five minutes">
        <p>A little orientation makes everything after it less mysterious.</p>
        <Photo
          src="/guide/station-sign.webp"
          alt="A train station sign reading 坂本 in kanji, さかもと in hiragana and SAKAMOTO in romaji"
          width={1200}
          height={896}
          caption="One sign, three scripts: the station name 坂本 in kanji, its reading さかもと in hiragana, and SAKAMOTO in romaji for visitors. Photo: トレインファン, CC BY 4.0."
        />
        <List>
          <li>
            <strong>Three scripts, mixed in every sentence.</strong> Kanji carry the meaning of most nouns and the stems of verbs
            and adjectives; hiragana writes grammar, endings and particles; katakana writes loanwords, names and emphasis. Romaji
            is for foreigners and isn&apos;t used in normal writing.
          </li>
          <li>
            <strong>No spaces.</strong> Words run together, and the switch between kanji and kana is what shows you where they
            begin and end. That&apos;s why text written only in kana is harder to read than it looks.
          </li>
          <li>
            <strong>Five vowels, few sounds.</strong> a, i, u, e, o, and every kana is one equal beat. Pronunciation is the easy
            part of Japanese for most English speakers.
          </li>
          <li>
            <strong>The verb comes last.</strong> The basic order is subject, object, verb, and small words called particles after
            each piece mark its role.
          </li>
          <li>
            <strong>Less grammar than you&apos;d fear in some places.</strong> Nouns have no gender, no articles and usually no
            plural. Subjects are dropped whenever context makes them obvious: 日本に行きました is simply &ldquo;(I) went to
            Japan.&rdquo;
          </li>
          <li>
            <strong>Politeness is built into verbs.</strong> 食べます and 食べる both mean &ldquo;eat&rdquo;; the first is polite,
            the second plain. Textbooks start polite; anime and manga are mostly plain.
          </li>
        </List>
        <SentenceDiagram />
        <p>
          The <In href="/guide/grammar">grammar chapter</In> goes further, including the particle everyone wonders about, は
          versus が.
        </p>
      </GuideSection>

      <GuideSection id="faq" title="Questions">
        {FAQ.map((f) => (
          <div key={f.q}>
            <H3>{f.q}</H3>
            <p className="mt-1.5">{f.a}</p>
          </div>
        ))}
      </GuideSection>

      <section className="rounded-lg border border-border bg-surface px-6 py-6">
        <h2 className="text-h2 font-semibold">Where this guide comes from</h2>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
          It&apos;s a synthesis of the community guides below and each tool&apos;s own documentation, with the numbers checked
          against their sources. The originals go deeper on their own approaches:
        </p>
        <ul className="mt-3 grid gap-2 text-[0.9375rem]">
          <li>
            <Ext href="https://learnjapanese.moe/guide/">TheMoeWay</Ext>: the full immersion routine, milestones and a large
            resource list.
          </li>
          <li>
            <Ext href="https://vnclub.org/guide/">VN Club</Ext>: learning through visual novels, with setup guides for every tool.
          </li>
          <li>
            <Ext href="https://donkuri.github.io/learn-japanese/">Donkuri&apos;s guide</Ext>: by the author of Kaishi, with
            detailed Anki and mining setup.
          </li>
          <li>
            <Ext href="https://www.tofugu.com/learn-japanese/">Tofugu</Ext>: a structured beginner path with strong pronunciation
            and kanji material.
          </li>
          <li>
            <Ext href="https://guidetojapanese.org/learn/grammar">Tae Kim</Ext>: the classic free grammar guide.
          </li>
          <li>
            <em>A Year to Learn Japanese</em> by u/SuikaCider: a long reflection on learning, with graded reading and listening
            ladders.
          </li>
          <li>
            <Ext href="https://wotaku.wiki/japan/language">Wotaku</Ext> and{" "}
            <Ext href="https://github.com/donkuri/japanese-resources">Donkuri&apos;s resource list</Ext>: directories of tools
            and resources.
          </li>
        </ul>
      </section>

      <ImageCredits srcs={["/guide/station-sign.webp"]} />
    </ChapterShell>
  );
}
