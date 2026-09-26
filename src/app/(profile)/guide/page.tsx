import type { Metadata } from "next";
import Link from "next/link";
import { DAKUTEN, GOJUON, YOON } from "@/lib/kana";
import { getSession } from "@/lib/session";
import { absoluteUrl, breadcrumbs, JsonLd } from "@/lib/seo";
import { Callout, Ext, GuideSection, H3, In, KanaChart, List, Table } from "@/components/guide/guide-parts";
import { Button } from "@/components/ui/button";

/**
 * The getting-started guide: kana, Anki, kanji, grammar, comprehensible input, tools and
 * what to read and watch. Written from the community guides it links (TheMoeWay, VN Club,
 * Donkuri, wotaku.wiki) and each tool's own documentation, checked on 2026-09-26. Facts
 * that go stale (tool names, Anki defaults, links) are the ones to recheck when editing.
 */

const PATH = "/guide";
const UPDATED = "2026-09-26";
const title = "How to learn Japanese: a getting-started guide";
const description =
  "A practical path from zero to reading and watching real Japanese: hiragana and katakana, Anki with Kaishi 1.5k, kanji without the grind, grammar, comprehensible input, the free tools, and what to immerse in first.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PATH },
  openGraph: { type: "article", title: `${title} · immersionlog`, description, url: PATH, modifiedTime: UPDATED },
};

const TOC = [
  { id: "short-version", label: "The short version" },
  { id: "expectations", label: "What to expect" },
  { id: "kana", label: "1. Hiragana and katakana" },
  { id: "anki", label: "2. Anki and your first words" },
  { id: "kanji", label: "3. Kanji" },
  { id: "grammar", label: "4. Grammar" },
  { id: "input", label: "5. Comprehensible input" },
  { id: "tools", label: "6. Set up your tools" },
  { id: "what-to-immerse-in", label: "7. What to immerse in" },
  { id: "mining", label: "8. After the starter deck: mining" },
  { id: "routine", label: "A daily routine" },
  { id: "output", label: "Speaking, writing, pitch accent" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "faq", label: "Questions" },
];

const FAQ = [
  {
    q: "How long does it take to learn Japanese?",
    a: "Longer than most languages for an English speaker. The US Foreign Service Institute puts Japanese in its hardest group, at around 2,200 classroom hours to professional working proficiency, and marks it as harder than the other languages in that group. With daily input you can be reading easy manga and following slice-of-life anime with a dictionary within months; comfortable reading of novels usually takes a year or more.",
  },
  {
    q: "Should I learn hiragana or katakana first?",
    a: "Hiragana first, then katakana straight after. Both have 46 basic characters for the same sounds. Hiragana is everywhere in grammar, katakana mostly in loanwords and names. Together they take days to a week or two, not months.",
  },
  {
    q: "Do I need to study kanji separately?",
    a: "No. The community guides this page draws on agree: learn kanji through the words they appear in, with a vocabulary deck and then reading. Studying all 2,136 jōyō kanji in isolation before reading delays the part that actually teaches you Japanese.",
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
    q: "What is comprehensible input?",
    a: "Language you can mostly understand, a little above your level. The idea comes from Stephen Krashen's input hypothesis (late 1970s): we acquire language by understanding messages. It's contested as a complete theory, and output matters too, but lots of understood input is the backbone of every guide here.",
  },
];

export default async function GuidePage() {
  const session = await getSession();
  const start = session ? (
    <Button render={<Link href="/log/new" />} nativeButton={false}>
      Log today&apos;s immersion
    </Button>
  ) : (
    <Button render={<Link href="/signup" />} nativeButton={false}>
      Start your log, free
    </Button>
  );

  return (
    <div className="mx-auto max-w-[1080px]">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            url: absoluteUrl(PATH),
            dateModified: UPDATED,
            inLanguage: "en",
            about: { "@type": "Language", name: "Japanese", alternateName: "ja" },
            publisher: { "@type": "Organization", name: "immersionlog", url: absoluteUrl("/") },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
          breadcrumbs([
            { name: "immersionlog", path: "/" },
            { name: "Learning guide", path: PATH },
          ]),
        ]}
      />

      <header className="max-w-[44rem]">
        <p className="section-label mb-3">Learning guide</p>
        <h1 className="text-[2rem] leading-10 font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[3rem]">
          How to learn Japanese from zero, by reading and watching things you like
        </h1>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
          The path most self-taught learners take: learn the kana, get a starter vocabulary into your head with Anki, pick up
          grammar as you go, and start reading and watching real Japanese far earlier than feels comfortable. Everything here
          is free.
        </p>
        <p className="mt-3 text-meta text-dim">
          Updated {new Date(UPDATED).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })} · about 20
          minutes to read
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,44rem)_1fr] lg:gap-16">
        <div className="grid min-w-0 gap-12">
          <GuideSection id="short-version" title="The short version">
            <List ordered>
              <li>
                <strong>Learn hiragana and katakana.</strong> A few days to a week each. Reading them, not writing them.
              </li>
              <li>
                <strong>Install Anki and start Kaishi 1.5k,</strong> a free deck of the 1,500 most useful words, at 10–20 new
                words a day.
              </li>
              <li>
                <strong>Read one short grammar explanation a day</strong> from a single beginner guide. Don&apos;t try to
                memorise it.
              </li>
              <li>
                <strong>Start immersing now, not later.</strong> An hour or two a day of anime, manga, YouTube, visual novels
                or graded readers, with Japanese subtitles or a pop-up dictionary.
              </li>
              <li>
                <strong>When Kaishi runs out, make your own cards</strong> from words you meet in what you read and watch.
              </li>
              <li>
                <strong>Keep going every day.</strong> Hours of understood Japanese are what make you better; everything else
                exists to make those hours possible.
              </li>
            </List>
            <Callout title="Why all at once?">
              <p>
                The common mistake is doing the steps in sequence: all the kana, then all the words, then all the grammar, and
                only then touching real Japanese. Every guide below says the opposite. Words from Anki make sense when you see
                them in a show; grammar clicks when you meet it in a sentence you care about.
              </p>
            </Callout>
          </GuideSection>

          <GuideSection id="expectations" title="What to expect">
            <p>
              Japanese is a long project for an English speaker. The US Foreign Service Institute places it in its hardest
              group, around <strong>2,200 classroom hours</strong> to professional working proficiency, and flags it as harder
              than the other languages in that group. Three writing systems, a word order that runs the other way, and very
              little shared vocabulary all add up.
            </p>
            <p>
              The good news is that you don&apos;t need to be fluent to enjoy it. The milestones learners report look roughly
              like this for someone doing an hour or two a day:
            </p>
            <Table
              head={["Around", "What it feels like"]}
              rows={[
                ["Week 1–2", "You can read kana, slowly. Signs and song titles start to look like words instead of shapes."],
                ["Month 1–3", "Anki words start turning up in shows. Graded readers and easy manga are readable with a dictionary."],
                ["Month 3–6", "You finish something real: a manga volume, a short visual novel, a season of a slice-of-life anime with Japanese subs."],
                ["Year 1+", "Reading turns into entertainment rather than study. You choose things by interest, not by difficulty."],
              ]}
            />
            <p>
              TheMoeWay puts it in terms of volume rather than time: after about ten anime series watched raw you start to get
              the hang of listening; after your first novel you leave the beginner stage; five novels or one long visual novel
              and you are &ldquo;not a beginner anymore&rdquo;. Time spent is the input; what you&apos;ve understood is the
              result.
            </p>
            <Callout title="Measure what matters">
              <p>
                Hours are the one number every method agrees on. <In href="/">immersionlog</In> exists to count them: time per
                title, characters read, streaks and goals. Your{" "}
                <In href="/tools/reading-speed">reading speed test</In> result is a good baseline to beat in three months.
              </p>
            </Callout>
          </GuideSection>

          <GuideSection id="kana" step="Step 1" title="Hiragana and katakana">
            <p>
              Japanese is written with two phonetic scripts, <strong>hiragana</strong> and <strong>katakana</strong>, plus
              kanji. Each kana script has <strong>46 basic characters</strong> for the same set of sounds. Hiragana carries
              grammar and native words; katakana is used mostly for loanwords (コーヒー, coffee), names and emphasis. You need
              both before anything else, and they are quick to learn.
            </p>
            <KanaChart rows={GOJUON} caption="The 46 basic kana: hiragana, katakana beside it, romaji under. Columns are the vowels a, i, u, e, o." />
            <H3>How to learn them</H3>
            <List ordered>
              <li>
                Learn to <strong>read</strong>, not write. Tofugu&apos;s picture mnemonics (
                <Ext href="https://www.tofugu.com/japanese/learn-hiragana/">hiragana</Ext>,{" "}
                <Ext href="https://www.tofugu.com/japanese/learn-katakana/">katakana</Ext>) get most people through hiragana in
                a few days.
              </li>
              <li>
                Drill recognition with the free <Ext href="https://djtguide.neocities.org/kana/">kana quiz</Ext>: hiragana
                first, then hiragana combinations, then katakana, then katakana combinations.
              </li>
              <li>
                Then read real kana right away: the first levels of the free{" "}
                <Ext href="https://tadoku.org/japanese/en/free-books-en/">Tadoku graded readers</Ext> are written almost
                entirely in kana and have audio. You won&apos;t understand much yet. That&apos;s fine: this is practice for
                your eyes.
              </li>
            </List>
            <H3>The extra marks</H3>
            <p>
              Two small marks change a sound: <strong>dakuten</strong> (゛) voices it, so か ka becomes が ga, and{" "}
              <strong>handakuten</strong> (゜) turns the h-row into p, so は ha becomes ぱ pa.
            </p>
            <KanaChart rows={DAKUTEN} caption="Voiced and p-sound kana. ぢ and づ sound like じ and ず and are rare." />
            <p>
              A small ゃ, ゅ or ょ after an i-column kana merges into one syllable:{" "}
              <span lang="ja">{YOON.map((y) => `${y.hiragana} ${y.romaji}`).join("、")}</span>. A small っ doubles the next
              consonant (きって kitte, stamp). In katakana a dash lengthens a vowel (コーヒー kōhī).
            </p>
            <Callout title="Drop romaji early" tone="warn">
              <p>
                Romaji is a crutch that stops working the moment you open anything Japanese, and different romanisation systems
                spell the same kana differently. Once the kana are in, read kana. Don&apos;t wait for perfect recall either:
                the slow ones become automatic from seeing them thousands of times.
              </p>
            </Callout>
          </GuideSection>

          <GuideSection id="anki" step="Step 2" title="Anki and your first 1,500 words">
            <p>
              You can&apos;t understand input without some vocabulary, and the first few thousand words are the hardest to
              pick up from context. <strong>Anki</strong> is free flashcard software that shows each card just before
              you&apos;d forget it, so a few minutes a day keeps hundreds of words alive.
            </p>
            <H3>Install</H3>
            <p>
              Get <Ext href="https://apps.ankiweb.net/">Anki</Ext>: free on Windows, macOS and Linux, free as AnkiDroid on
              Android, and paid as AnkiMobile on iOS (the purchase funds Anki&apos;s development). A free AnkiWeb account syncs
              them.
            </p>
            <H3>Kaishi 1.5k</H3>
            <p>
              <Ext href="https://github.com/donkuri/Kaishi/releases">Kaishi 1.5k</Ext> is the starter deck most current guides
              recommend. It has about 1,500 common words picked by frequency from the older Core 2k/10k and Tango N5/N4 decks,
              each with an example sentence, native audio for the word and the sentence, and optional pitch accent. Download
              the <code>.apkg</code> and open it with Anki (File → Import).
            </p>
            <H3>Settings that matter</H3>
            <Table
              head={["Option", "Set it to", "Why"]}
              rows={[
                ["New cards/day", "10–20", "Reviews settle at about ten times your new cards: Anki's manual puts 20 new a day at roughly 200 reviews a day."],
                ["Maximum reviews/day", "9999", "The default cap hides overdue cards and lets a backlog build silently."],
                ["FSRS", "On", "The modern scheduler. It's off by default: turn it on at the bottom of Deck options."],
                ["Desired retention", "90% (the default)", "Higher costs a lot more reviews for little gain."],
                ["Learning steps", "Under a day (e.g. 1m 10m)", "Anki's manual advises against steps of a day or more with FSRS."],
                ["Optimize", "About once a month", "Fits FSRS to your own review history."],
              ]}
            />
            <H3>How to review</H3>
            <List>
              <li>
                For a card you&apos;ve never seen, just look at the answer, press <strong>Again</strong>, and move on.
              </li>
              <li>
                After that, try to recall the reading and meaning before flipping. If you didn&apos;t get it, press{" "}
                <strong>Again</strong>. Never press Hard for a card you forgot: FSRS treats Hard as a pass and your intervals
                will grow too long.
              </li>
              <li>
                Do your reviews every day, even when you add no new cards. Skipped reviews pile up fast.
              </li>
            </List>
            <p>
              At 15 new words a day Kaishi takes a little over three months. You don&apos;t need to finish it before
              immersing; start watching and reading in the first week.
            </p>
          </GuideSection>

          <GuideSection id="kanji" step="Step 3" title="Kanji, without the grind">
            <p>
              There are <strong>2,136 jōyō kanji</strong>, the official list for general use last revised in 2010, and
              Japanese children learn 1,026 of them in primary school. That number scares a lot of learners into months of
              kanji study before reading anything.
            </p>
            <p>
              <strong>Don&apos;t do that.</strong> Kanji only mean something inside words, and most have several readings that
              depend on the word. Every guide this page draws on recommends learning kanji <em>through vocabulary</em>: Kaishi
              teaches you 日本 and 学生 as words, and the characters come along with them. Reading with a pop-up dictionary
              then shows you each word&apos;s reading on hover, so an unknown kanji never blocks you.
            </p>
            <List>
              <li>
                If similar-looking kanji keep blurring together, a short component course helps: learn the building blocks
                (radicals) so 待 and 持 look different. <Ext href="https://www.kanjidamage.com/">KanjiDamage</Ext> takes this
                approach with mnemonics.
              </li>
              <li>
                Full courses like <em>Remembering the Kanji</em> work for some people, but the guides advise against doing all
                of one before reading: it&apos;s months of English keywords instead of Japanese.
              </li>
              <li>
                Writing by hand is optional. Reading recognition is what immersion needs; you can learn to write later if you
                want to.
              </li>
            </List>
          </GuideSection>

          <GuideSection id="grammar" step="Step 4" title="Grammar: read it once, then meet it in the wild">
            <p>
              Grammar guides give you a map, not the territory. Pick <strong>one</strong> beginner guide, read a point or two a
              day, and don&apos;t try to memorise it. The goal is to recognise a pattern when you meet it in a sentence, then
              let exposure do the rest. When something in your reading confuses you, look that point up.
            </p>
            <Table
              head={["Guide", "Style"]}
              rows={[
                [<Ext key="y" href="https://yoku.bi/">Yokubi</Ext>, "Short, modern and beginner-first. A common first pick."],
                [
                  <Ext key="c" href="https://www.youtube.com/playlist?list=PLg9uYxuZf8x_A-vcqqyOFZu06WlhnypWj">
                    Cure Dolly
                  </Ext>,
                  "A video series that explains Japanese on its own terms rather than through English grammar.",
                ],
                [<Ext key="t" href="https://guidetojapanese.org/learn/">Tae Kim</Ext>, "The classic free guide. Quick to read, good as a reference."],
                [<Ext key="s" href="https://sakubi.neocities.org/">Sakubi</Ext>, "The essentials on one page, for getting to reading fast."],
                [<Ext key="i" href="https://imabi.org/">IMABI</Ext>, "Enormous and precise. A reference to look things up in, not a first read."],
                [<Ext key="b" href="https://bunpro.jp/">Bunpro</Ext>, "Grammar as spaced-repetition drills, if you like reviewing grammar like Anki cards. Paid subscription."],
              ]}
            />
          </GuideSection>

          <GuideSection id="input" step="Step 5" title="Comprehensible input: the part that actually teaches you">
            <p>
              <strong>Comprehensible input</strong> is language you can mostly understand, just a little above your level.
              The term comes from linguist Stephen Krashen&apos;s input hypothesis, first proposed in 1977: we acquire a
              language by understanding messages in it, moving from our current level (<em>i</em>) to the next (
              <em>i+1</em>) through input that&apos;s slightly beyond us.
            </p>
            <p>
              It&apos;s fair to say the theory is debated. Critics point out it&apos;s hard to test, and researchers like
              Merrill Swain have argued that producing language matters too. But the practical core is what every immersion
              guide is built on: <strong>lots of Japanese that you understand</strong>, over a long time.
            </p>
            <H3>How much should you understand?</H3>
            <p>
              Reading research suggests comfortable, unassisted reading needs around <strong>98% of the words</strong> on a page
              to be known. You won&apos;t be anywhere near that for a while, which is exactly why the tools in the next step
              exist: a pop-up dictionary closes the gap, and easier content keeps the gap small. VN Club&apos;s rule of thumb is
              good: aim to understand most of what you read <em>with some effort</em>. Not nearly nothing, not everything
              easily.
            </p>
            <H3>Listening and reading</H3>
            <List>
              <li>
                Early on, TheMoeWay suggests roughly <strong>70% listening, 30% reading</strong>, moving toward an even split as
                reading gets easier.
              </li>
              <li>
                Active beats passive. Actually following what&apos;s said counts; a podcast in the background while you work is
                a bonus on top, not a substitute.
              </li>
              <li>
                Expect your listening to lag behind your reading for a long time. That&apos;s normal: text waits for you, speech
                doesn&apos;t.
              </li>
              <li>
                Don&apos;t pause on every unknown word. Look up what repeats or what the story hinges on; let the rest go by.
              </li>
            </List>
          </GuideSection>

          <GuideSection id="tools" step="Step 6" title="Set up your tools">
            <p>
              One tool matters more than the rest: a <strong>pop-up dictionary</strong>. Hover over a word, press a key, and
              you get its reading and meaning without leaving what you&apos;re reading. Everything else is about getting
              Japanese text somewhere that dictionary can see it.
            </p>
            <H3 id="yomitan">Yomitan (browser pop-up dictionary)</H3>
            <List ordered>
              <li>
                Install <Ext href="https://yomitan.wiki/">Yomitan</Ext> for Chrome, Firefox or Edge. It&apos;s the maintained
                successor to Yomichan, which was discontinued.
              </li>
              <li>
                In its settings, choose <strong>Get recommended dictionaries</strong> and install{" "}
                <Ext href="https://jitendex.org/">Jitendex</Ext>, an improved JMdict for English speakers. Add a frequency
                dictionary too: it shows how common a word is, which tells you whether it&apos;s worth learning.
              </li>
              <li>
                Hold <strong>Shift</strong> and hover over Japanese text. That&apos;s it.
              </li>
            </List>
            <p>
              On phones: Yomitan runs in Android browsers that support extensions. On iOS,{" "}
              <Ext href="https://jisho.org/">Jisho</Ext> in the browser or a dictionary app like Shirabe Jisho covers lookups.
            </p>
            <H3>Per medium</H3>
            <Table
              head={["You want to", "Use"]}
              rows={[
                [
                  "Watch anime or drama",
                  <>
                    <Ext href="https://github.com/killergerbah/asbplayer">asbplayer</Ext> puts Japanese subtitles over Netflix,
                    YouTube, Crunchyroll or local files, with a subtitle sidebar and Yomitan lookups. Subtitle files:{" "}
                    <Ext href="https://jimaku.cc/">Jimaku</Ext>.
                  </>,
                ],
                [
                  "Read manga",
                  <>
                    <Ext href="https://github.com/kha-white/mokuro">mokuro</Ext> runs text recognition on manga pages so you can
                    hover words, and <Ext href="https://reader.mokuro.app/">reader.mokuro.app</Ext> reads the result in a
                    browser.
                  </>,
                ],
                [
                  "Read novels",
                  <>
                    <Ext href="https://reader.ttsu.app/">ッツ Ebook Reader</Ext> opens EPUBs in the browser with vertical text,
                    Yomitan support and a character counter.
                  </>,
                ],
                [
                  "Play visual novels",
                  <>
                    A texthooker pulls text out of the game:{" "}
                    <Ext href="https://github.com/Artikash/Textractor">Textractor</Ext> or{" "}
                    <Ext href="https://github.com/HIllya51/LunaTranslator">LunaTranslator</Ext>. Point it at immersionlog&apos;s{" "}
                    <In href="/texthooker">texthooker page</In> and each line appears in your browser, ready for Yomitan, with
                    characters and reading speed counted as you go.
                  </>,
                ],
              ]}
            />
            <Callout title="Don't let setup eat your time" tone="warn">
              <p>
                VN Club&apos;s warning is worth repeating: tools are a means to read, not a hobby. Get Yomitan working, pick one
                thing to read or watch, and start. You can polish the setup later.
              </p>
            </Callout>
          </GuideSection>

          <GuideSection id="what-to-immerse-in" step="Step 7" title="What to immerse in">
            <p>
              The single most important rule: <strong>pick things you actually want to finish</strong>. Something you care
              about carries you through confusion that a &ldquo;perfect-level&rdquo; textbook story never will. Past that, a
              few things make a first title easier:
            </p>
            <List>
              <li>
                <strong>Furigana</strong>, the small kana printed over kanji. Manga aimed at younger readers has it; many visual
                novels can show it.
              </li>
              <li>
                <strong>Everyday language.</strong> Slice of life, school and romance beat fantasy politics and period drama.
              </li>
              <li>
                <strong>Voice.</strong> Fully voiced visual novels and anime give you listening and reading at once.
              </li>
              <li>
                <strong>Short.</strong> Finishing things builds momentum. A short series you finish beats a 60-hour epic you
                drop.
              </li>
              <li>
                <strong>Something you&apos;ve already seen in English.</strong> Knowing the plot frees your attention for the
                language.
              </li>
            </List>
            <H3>A rough ladder</H3>
            <Table
              head={["Level", "Try"]}
              rows={[
                [
                  "First weeks",
                  <>
                    <Ext href="https://tadoku.org/japanese/en/free-books-en/">Tadoku graded readers</Ext> (free, levels Start to
                    5, many with audio), NHK News Web Easy (news rewritten simply, with furigana), anime you&apos;ve seen before
                    with Japanese subtitles.
                  </>,
                ],
                [
                  "First months",
                  "Slice-of-life manga for younger readers, slice-of-life anime, YouTube in Japanese on topics you already follow, short free visual novels.",
                ],
                [
                  "After Kaishi",
                  "Light novels and visual novels you're excited about, drama, variety shows, podcasts, games.",
                ],
              ]}
            />
            <p>
              To find titles at your level, <In href="/titles">browse titles on immersionlog</In>: each page shows length and
              Jiten.moe&apos;s difficulty estimate, and with your <In href="/tools/reading-speed">reading speed</In> you can see
              roughly how long a book or visual novel would take you.
            </p>
            <Callout title="Subtitles">
              <p>
                For immersion, watch with <strong>Japanese subtitles or none</strong>. With English subtitles your eyes read
                English and the Japanese becomes background noise. Keep English subtitles for things you&apos;re watching
                purely to relax, and don&apos;t count that time.
              </p>
            </Callout>
          </GuideSection>

          <GuideSection id="mining" step="Step 8" title="After the starter deck: mining">
            <p>
              Once Kaishi is done, stop adding pre-made cards and start <strong>mining</strong>: making cards from words you
              meet in your own reading and watching. They stick far better because you remember where you saw them. Yomitan can
              create a card with the sentence, audio and definition in one keypress through the AnkiConnect add-on; asbplayer
              adds a screenshot and the audio line from video.
            </p>
            <p>VN Club&apos;s test for whether a word is worth a card:</p>
            <List>
              <li>It feels learnable: something clicks when you look it up.</li>
              <li>It&apos;s useful: frequent, or central to what you&apos;re reading.</li>
              <li>It isn&apos;t obscure, archaic or jargon you won&apos;t meet again.</li>
            </List>
            <p>
              Skip words you already understood from context, and don&apos;t mine everything: the new-cards-per-day limit
              still applies. <Ext href="https://donkuri.github.io/learn-japanese/mining/">Donkuri&apos;s mining guide</Ext>{" "}
              covers card setup in detail.
            </p>
          </GuideSection>

          <GuideSection id="routine" title="A daily routine">
            <Table
              head={["", "Week 1", "Months 1–4", "After Kaishi"]}
              rows={[
                ["Anki", "—", "10–20 new Kaishi words + reviews (20–40 min)", "Mined cards + reviews"],
                ["Grammar", "—", "1–2 points from one guide", "Look things up as they come"],
                ["Kana", "Hiragana, then katakana", "—", "—"],
                ["Immersion", "Graded readers, anime with JP subs", "1–2 hours", "As much as you can"],
              ]}
            />
            <p>
              VN Club&apos;s advice on consistency is the best in this whole guide: <em>when and how long you study matters
              less than never missing a day.</em> Fifteen minutes on a bad day keeps the habit and your Anki reviews alive.
            </p>
          </GuideSection>

          <GuideSection id="output" title="Speaking, writing and pitch accent">
            <p>
              Input builds understanding, but it doesn&apos;t automatically make you a speaker. As Donkuri&apos;s guide puts it,
              getting good at reading isn&apos;t enough to get good at writing, and listening isn&apos;t enough for speaking.
              Most guides now suggest starting some output early instead of waiting until you&apos;re &ldquo;ready&rdquo;: talk
              to a tutor or language-exchange partner, keep a short diary, shadow lines from shows you like.
            </p>
            <p>
              Pitch accent, the rise and fall that distinguishes words like 箸 (chopsticks) and 橋 (bridge), is worth learning if
              you want to sound natural. If you don&apos;t mind an accent, it can wait. Kaishi can show pitch accent on its
              cards when you&apos;re ready to pay attention to it.
            </p>
          </GuideSection>

          <GuideSection id="mistakes" title="Common mistakes">
            <List>
              <li>
                <strong>Studying in sequence.</strong> Finishing all the kana, all the words, all the grammar, then starting
                immersion. Do them together.
              </li>
              <li>
                <strong>Staying on beginner material too long.</strong> Leave graded material as soon as native content is
                bearable with a dictionary.
              </li>
              <li>
                <strong>Perfectionism.</strong> You will not understand everything, for years. Understanding more than last month
                is the goal.
              </li>
              <li>
                <strong>Tool tinkering.</strong> A perfect setup with no reading done is zero hours.
              </li>
              <li>
                <strong>Too many new cards.</strong> 40 new cards a day feels productive for two weeks and then buries you in
                reviews. Stay at 10–20.
              </li>
              <li>
                <strong>Skipping reviews.</strong> Missed days come back as a wall of overdue cards.
              </li>
            </List>
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
            <h2 className="text-h2 font-semibold">Further reading</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              This guide is a summary. The community guides it draws on go much deeper:
            </p>
            <ul className="mt-3 grid gap-2 text-[0.9375rem]">
              <li>
                <Ext href="https://learnjapanese.moe/guide/">TheMoeWay</Ext>: the full routine, milestones and a large resource
                list.
              </li>
              <li>
                <Ext href="https://vnclub.org/guide/">VN Club</Ext>: learning through visual novels, with setup guides for every
                tool.
              </li>
              <li>
                <Ext href="https://donkuri.github.io/learn-japanese/">Donkuri&apos;s guide</Ext>: by the author of Kaishi, with
                detailed Anki and mining setup.
              </li>
              <li>
                <Ext href="https://wotaku.wiki/japan/language">Wotaku</Ext>: a directory of resources by category.
              </li>
            </ul>
          </section>

          <section className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <div className="max-w-md">
              <h2 className="text-h2 font-semibold">Count your hours</h2>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                immersionlog tracks every hour of anime, manga, visual novels, books, YouTube and podcasts, and shows how far
                you&apos;ve come. Free.
              </p>
            </div>
            {start}
          </section>
        </div>

        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="section-label mb-3">On this page</p>
            <ol className="grid gap-1.5 border-l border-border text-sm">
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-0.5 pl-4 text-muted-foreground hover:border-foreground hover:text-foreground">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}
