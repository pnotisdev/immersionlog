import Link from "next/link";
import { GUIDE_CHAPTERS, guidePath, A_YEAR_TO_LEARN_JAPANESE, MORG, REFOLD_ROADMAP } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { CoverShelf } from "@/components/guide/anime-art";
import { ImageCredits, Photo, SentenceDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

/**
 * The learning guide's overview. Written from the community guides it links (TheMoeWay,
 * VN Club, Donkuri, Tofugu, Tae Kim, wotaku.wiki, morg.systems, Refold, "A Year to Learn
 * Japanese") and each tool's own documentation, checked 2026-09-27. Facts that go stale
 * (tool names, Anki defaults, links, JLPT data) are the ones to recheck when editing;
 * GUIDE_UPDATED in src/lib/guide.ts is the date shown to readers.
 */

export const metadata = chapterMetadata("");

const FAQ = [
  {
    q: "How long does it take to learn Japanese?",
    a: "Longer than most languages for an English speaker. The US Foreign Service Institute puts Japanese in its hardest group, at around 2,200 classroom hours to professional working proficiency, and marks it as harder than the other languages in that group. A survey of learners in Japan put the top JLPT level (N1) at 3,000–4,800 hours for people without a kanji background. The good news: with daily input you can follow easy manga and slice-of-life anime with a dictionary within months, and comfortable novel reading usually comes within a year or two.",
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
    a: "Not for immersion time. With English subtitles you're practising English, which you're already quite good at. Use Japanese subtitles, or none, and keep English for things you're watching purely for fun.",
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
    <ChapterShell
      slug=""
      faq={FAQ}
      art={{
        name: "frieren",
        caption: "Frieren's journeys take decades. Yours takes a few thousand hours, most of them spent watching and reading things you like.",
      }}
    >
      <GuideSection id="short-version" title="The short version">
        <List ordered>
          <li>
            <strong>Learn hiragana and katakana.</strong> A few days to a week each. Reading them, not writing them. The{" "}
            <In href="/tools/kana">kana quiz</In> will get them into your head.
          </li>
          <li>
            <strong>Install Anki and start Kaishi 1.5k,</strong> a free deck of the 1,500 most useful words, at 10–20 new words
            a day.
          </li>
          <li>
            <strong>Read one short grammar explanation a day</strong> from a single beginner guide. Don&apos;t try to memorise it.
            Just nod along.
          </li>
          <li>
            <strong>Start watching and reading real Japanese now, not later.</strong> An hour or two a day of anime, manga,
            YouTube, visual novels or graded readers, with Japanese subtitles or a pop-up dictionary. You won&apos;t understand
            much. That&apos;s fine, and it&apos;s supposed to be like that.
          </li>
          <li>
            <strong>When Kaishi runs out, make your own cards</strong> from words you keep meeting in what you read and watch.
          </li>
          <li>
            <strong>Keep going every day.</strong> Hours of Japanese you understood are what make you better. Everything else in
            this guide exists to make those hours possible, and ideally fun.
          </li>
        </List>
        <Callout title="Why all at once?">
          <p>
            The classic mistake is doing it like a video game with locked levels: all the kana, then all the words, then all the
            grammar, and only then touching real Japanese. Real Japanese isn&apos;t the final boss, it&apos;s the whole game.
            Words from Anki make sense when you hear them in a show; grammar clicks when you meet it in a sentence you care about.
            Even guides built around textbooks, like{" "}
            <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
              <em>A Year to Learn Japanese</em>
            </Ext>
            , tell you to check in with real content regularly so you notice the day it becomes bearable.
          </p>
        </Callout>
        <p>
          Short on time, or learning for one thing in particular? The routine chapter has a plan for{" "}
          <In href="/guide/routine#short-on-time">30–45 minutes a day</In> and notes on what to emphasise if your goal is{" "}
          <In href="/guide/routine#goals">anime, novels, travel or work</In>. And before you buy anything, skim the{" "}
          <In href="/guide/traps">traps chapter</In>. It&apos;ll save you some money and a few months.
        </p>
      </GuideSection>

      <GuideSection id="loop" title="The loop">
        <p>
          Strip away the tools and the jargon, and learning Japanese this way is one loop, repeated for a very long time. morg
          calls it the{" "}
          <Ext href={`${MORG}/58465ab9`}>Japanese learning loop</Ext>:
        </p>
        <List ordered>
          <li>
            <strong>Find</strong> something you can mostly follow and actually want to watch or read.
          </li>
          <li>
            <strong>Enjoy</strong> it, every day. Not &ldquo;study&rdquo; it. Enjoy it.
          </li>
          <li>
            <strong>Grab</strong> the words and grammar that keep turning up, and make them stick.
          </li>
          <li>
            <strong>Repeat,</strong> with something a bit harder each time the old stuff gets comfortable.
          </li>
        </List>
        <p>
          The &ldquo;enjoy&rdquo; part isn&apos;t a nice extra. Stephen Krashen&apos;s <em>affective filter</em> idea is that
          stress and boredom get in the way of acquiring a language, and relaxed, interested attention lets it in. You don&apos;t
          need to believe every word of the theory to notice that you remember the line from the anime you love and forget the
          textbook dialogue about Mr. Tanaka&apos;s umbrella.
        </p>
        <CoverShelf
          names={["takagi", "polar-bear", "non-non", "yotsuba", "chiikawa", "totoro"]}
          caption="Some of the easiest real Japanese there is, by measured difficulty. More in what to watch and read."
        />
        <H3>The stages, if you like a map</H3>
        <p>
          <Ext href={REFOLD_ROADMAP}>Refold&apos;s roadmap</Ext> splits the same journey into phases. It&apos;s a nice way to see
          where you are and where each chapter of this guide fits:
        </p>
        <Table
          head={["Stage", "What you're doing", "In this guide"]}
          rows={[
            [
              "Foundations",
              "Kana, a starter vocabulary, a first pass through grammar, setting up tools.",
              <>
                <In href="/guide/kana">Kana</In>, <In href="/guide/vocabulary">vocabulary</In>,{" "}
                <In href="/guide/kanji">kanji</In>, <In href="/guide/grammar">grammar</In>
              </>,
            ],
            [
              "Comprehension",
              "Lots of reading and watching with help (subtitles, a pop-up dictionary) until native content is bearable.",
              <>
                <In href="/guide/immersion">Immersion</In>, <In href="/guide/what-to-watch-and-read">what to watch</In>
              </>,
            ],
            ["Listening", "Closing the gap between what you can read and what you can follow by ear.", <In key="l" href="/guide/immersion#listening">Listening</In>],
            ["Speaking", "Turning all that input into things you can say.", <In key="s" href="/guide/speaking">Speaking</In>],
            [
              "Accuracy and fluency",
              "Sounding natural rather than merely correct, and saying it without having to think.",
              <>
                <In href="/guide/natural-japanese">Sounding natural</In>, <In href="/guide/upper-intermediate">upper intermediate</In>
              </>,
            ],
            ["And beyond", "Literature, keigo, dialects: the stuff natives also spend their lives on.", <In key="a" href="/guide/advanced">Advanced</In>],
          ]}
        />
        <p>
          The stages overlap a lot in practice. Nobody finishes &ldquo;comprehension&rdquo; and gets a certificate. But it helps
          to know that the listening gap and the can&apos;t-speak-yet feeling are normal parts of the route, not signs
          you&apos;re doing it wrong.
        </p>
      </GuideSection>

      <GuideSection id="chapters" title="The chapters">
        <p>
          Read them in order the first time; after that, jump to whatever you&apos;re stuck on. Links with an arrow go to other
          sites and open in a new tab, so you won&apos;t lose your place.
        </p>
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
          Let&apos;s get the scary number out of the way. The US Foreign Service Institute puts Japanese in its hardest group
          for English speakers, at around <strong>2,200 classroom hours</strong> to professional working proficiency, and flags
          it as harder than the other languages in that group. Three writing systems, a word order that runs the other way, and
          almost no shared vocabulary all add up.
        </p>
        <p>
          Now the less scary part: those are <em>classroom</em> hours, and you&apos;re not going to spend them in a classroom.
          You&apos;re going to spend them watching anime, reading manga and playing games, which you might have done anyway.
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
          life without noticing.
        </p>
        <H3>Milestones people report</H3>
        <Table
          head={["Around", "What it feels like"]}
          rows={[
            ["Week 1–2", "You can read kana, slowly. Signs and song titles start to look like words instead of squiggles."],
            ["Month 1–3", "Anki words start turning up in shows, and you point at the screen like you've seen a celebrity."],
            ["Month 3–6", "You finish something real: a manga volume, a short visual novel, a season of slice-of-life anime."],
            ["Year 1+", "Reading turns into entertainment rather than study. You pick things because you want to, not because they're easy."],
          ]}
        />
        <p>
          Those assume an hour or two a day. TheMoeWay puts it in terms of volume instead: after about ten anime series watched
          raw you start to get the hang of listening; after your first novel you leave the beginner stage. <em>A Year to Learn
          Japanese</em> calls the first big turning point the &ldquo;nope threshold&rdquo;: the day native content stops being
          unbearable and becomes merely hard. Everything before it is about getting there sooner.
        </p>
        <Callout title="If it feels like nothing is happening">
          <p>
            Months three to six are when most people feel stuck: the quick early wins are over and native content is still hard.
            That&apos;s usually the stretch just before or after the nope threshold, not a sign the method is failing. The
            routine chapter covers <In href="/guide/routine#plateaus">how to tell you&apos;re still improving</In> and{" "}
            <In href="/guide/routine#consistency">how to keep going through bad weeks</In>.
          </p>
        </Callout>
        <Callout title="Measure what matters">
          <p>
            Hours are the one number every method agrees on. <In href="/">immersionlog</In> exists to count them: time per title,
            characters read, streaks and goals. Take the <In href="/tools/reading-speed">reading speed test</In> now and again in
            three months. The <In href="/tools/kana">kana quiz</In> and <In href="/tools/conjugation">conjugation drill</In> are
            there for the stages where drilling helps.
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
            part of Japanese for most English speakers. Enjoy it, it&apos;s the last easy part for a while.
          </li>
          <li>
            <strong>The verb comes last.</strong> The basic order is subject, object, verb, and small words called particles after
            each piece mark its role. Japanese sentences make you wait for the punchline.
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
          The <In href="/guide/grammar">grammar chapter</In> goes further, including the particle everyone argues about, は
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
          It&apos;s a remix of the community guides below and each tool&apos;s own documentation, with the numbers checked
          against their sources. The originals go deeper on their own approaches, and they&apos;re all worth a read:
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
            <Ext href={MORG}>morg.systems</Ext>: opinionated, practical notes on the learning loop, output, reading and the
            weird Japanese textbooks skip.
          </li>
          <li>
            <Ext href={REFOLD_ROADMAP}>Refold</Ext>: a stage-by-stage roadmap for learning any language through immersion.
          </li>
          <li>
            <Ext href="https://www.tofugu.com/learn-japanese/">Tofugu</Ext>: a structured beginner path with strong pronunciation
            and kanji material.
          </li>
          <li>
            <Ext href="https://guidetojapanese.org/learn/grammar">Tae Kim</Ext>: the classic free grammar guide.
          </li>
          <li>
            <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
              <em>A Year to Learn Japanese</em>
            </Ext>{" "}
            by u/SuikaCider: a long reflection on learning, with graded reading and listening ladders.
          </li>
          <li>
            <Ext href="https://wotaku.wiki/japan/language">Wotaku</Ext> and{" "}
            <Ext href="https://github.com/donkuri/japanese-resources">Donkuri&apos;s resource list</Ext>: directories of tools
            and resources.
          </li>
        </ul>
        <p className="mt-3 text-meta text-dim">Anime and manga art throughout the guide is from AniList and links back to it.</p>
      </section>

      <ImageCredits srcs={["/guide/station-sign.webp"]} />
    </ChapterShell>
  );
}
