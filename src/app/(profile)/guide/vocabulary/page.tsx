import { MORG } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { CoverageDiagram, IntervalsDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("vocabulary");

export default function VocabularyChapter() {
  return (
    <ChapterShell
      slug="vocabulary"
      art={{
        name: "nichijou",
        caption: "日常 (nichijō) means \"everyday life\", which is exactly what your first 1,500 words are for. The robot girl and the deer are extra.",
      }}
    >
      <GuideSection id="why" title="How many words you need">
        <p>
          Vocabulary is the single biggest thing standing between you and native Japanese. Grammar tells you how words relate,
          but if you don&apos;t know the words, there&apos;s nothing for the grammar to relate. And for an English speaker
          Japanese starts from almost nothing: apart from loanwords like テレビ and アイス, there are no free cognates the way there
          are in French or Spanish.
        </p>
        <p>
          The good news is that words aren&apos;t equally common. A small core does most of the heavy lifting, which is why the
          first few thousand words are worth learning on purpose and the rest can come from reading and listening. Research on
          English, the best-studied case, shows the shape clearly:
        </p>
        <CoverageDiagram />
        <p>
          Paul Nation&apos;s study concludes that reading novels without a dictionary takes 8,000–9,000 word families and
          understanding speech 6,000–7,000, with 98% of words known. Nobody memorises that many from a deck (well, somebody
          does, but they don&apos;t have hobbies). The plan instead: learn about 1,500 of the most common words on purpose, which
          gets easy material within reach with a dictionary, and let reading and listening supply the rest.
        </p>
        <Callout title="Coverage isn't comprehension">
          <p>
            Knowing 95% of the words on a page still means an unknown word every couple of sentences, and knowing every word
            doesn&apos;t guarantee you understand a sentence. Flashcards get you to the starting line. Understanding comes from
            seeing words in use, which is why the deck is paired with immersion from day one.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="anki" title="Anki">
        <p>
          <strong>Anki</strong> is free flashcard software that uses spaced repetition: each card comes back just before
          you&apos;re likely to forget it, and every time you remember it, the gap grows. A card you know well costs a few seconds
          every few months. It looks like it was designed in 2006 because it more or less was. It works anyway.
        </p>
        <IntervalsDiagram />
        <p>
          Get <Ext href="https://apps.ankiweb.net/">Anki</Ext>: free on Windows, macOS and Linux, free as AnkiDroid on Android,
          and paid as AnkiMobile on iOS (the purchase funds Anki&apos;s development). A free AnkiWeb account syncs them, so you
          can review on your phone and add cards on your computer.
        </p>
        <p>
          Alternatives exist: <Ext href="https://jpdb.io/">jpdb</Ext> is a website with its own spaced repetition and decks built
          from anime, novels and games; WaniKani and Bunpro are paid apps for kanji and grammar. Anki is the one almost every
          guide builds on, and it&apos;s free, so this chapter assumes it.
        </p>
      </GuideSection>

      <GuideSection id="kaishi" title="Kaishi 1.5k">
        <p>
          <Ext href="https://github.com/donkuri/Kaishi/releases">Kaishi 1.5k</Ext> (開始, &ldquo;start&rdquo;) is the starter deck
          most current guides recommend. Its authors picked about 1,500 words by frequency from the older Core 2k/10k and Tango
          N5/N4 decks and fixed around 120 of their example sentences. Each card has:
        </p>
        <List>
          <li>the word with furigana (reading) and its meaning;</li>
          <li>an example sentence with the word highlighted, and its translation;</li>
          <li>native audio for both the word and the sentence;</li>
          <li>an optional pitch accent display, and pictures you can switch off.</li>
        </List>
        <p>
          Download the <code>.apkg</code> from the releases page (it&apos;s also on AnkiWeb) and open it with Anki. It needs Anki
          2.1.50 or newer. At 15 new words a day it takes a little over three months, and you don&apos;t need to finish it before
          you start immersing.
        </p>
        <p>
          Older guides point to the Core 2k deck or the Tango N5/N4 decks; they&apos;re fine, but Kaishi is Core&apos;s best
          words with the errors fixed, so there&apos;s little reason to start elsewhere today.
        </p>
        <Scene name="frieren" title="Collect common spells first">
          <p>
            Frieren will spend a week hunting for a spell that makes flowers bloom or removes rust from statues, and honestly,
            respect. But your deck should be the opposite of her grimoire: the boring, everyday words first. The fancy ones will
            find you later.
          </p>
        </Scene>
      </GuideSection>

      <GuideSection id="settings" title="Settings that matter">
        <p>Open the deck&apos;s options (the gear next to it) and change these:</p>
        <Table
          head={["Option", "Set it to", "Why"]}
          rows={[
            ["New cards/day", "10–20", "Reviews settle at about ten times your new cards: Anki's manual puts 20 new a day at roughly 200 reviews a day."],
            ["Maximum reviews/day", "9999", "The default cap hides overdue cards and lets a backlog build silently."],
            ["FSRS", "On", "The modern scheduler. It's off by default: turn it on at the bottom of the options page."],
            ["Desired retention", "90% (the default)", "Higher costs a lot more reviews for little gain; lower saves time at the cost of forgetting more."],
            ["Learning steps", "Under a day (e.g. 1m 10m)", "Anki's manual advises against steps of a day or more with FSRS."],
            ["Optimize", "About once a month", "Fits FSRS to your own review history once you have a few weeks of reviews."],
          ]}
        />
        <p>
          <strong>Easy Days</strong>, further down, lets you mark days of the week as lighter; Anki nudges due dates away from
          them. Useful if your weekends are busy.
        </p>
      </GuideSection>

      <GuideSection id="reviewing" title="How to review">
        <List>
          <li>
            <strong>New card:</strong> look at the answer, listen to the audio, read the sentence, press <strong>Again</strong>,
            move on. You&apos;re being introduced, not tested.
          </li>
          <li>
            <strong>Every card after that:</strong> before flipping, try to recall the reading and the meaning. If you got both,
            press <strong>Good</strong>. If you didn&apos;t, press <strong>Again</strong>, even if you were close. Anki
            can&apos;t hear you say &ldquo;I totally knew that&rdquo;.
          </li>
          <li>
            <strong>Never press Hard for a card you forgot.</strong> FSRS treats Hard as a pass with hesitation; using it for
            failures makes every interval too long.
          </li>
          <li>
            <strong>Easy</strong> is for cards that were effortless. Most people barely use it.
          </li>
          <li>
            <strong>Do your reviews every day</strong>, even on days you add nothing new. Skipped days come back as a wall of
            overdue cards, and the wall is not your friend.
          </li>
        </List>
        <Callout title="Japanese on the front, always">
          <p>
            Some pre-made decks include &ldquo;recall&rdquo; cards with English on the front and Japanese on the back. Delete or
            suspend them. <Ext href={`${MORG}/Doing-anki-cards-with-English-on-the-front-and-Japanese-on-the-back`}>morg</Ext>{" "}
            is blunt about it: words don&apos;t map one-to-one between languages (is &ldquo;understand&rdquo; 分かる or 知る? is
            &ldquo;bat&rdquo; the animal?), and drilling English → Japanese trains exactly the translate-in-your-head habit you
            want to lose. The <In href="/guide/traps#exercises">traps chapter</In> has more like this.
          </p>
        </Callout>
        <Callout title="Read the sentence">
          <p>
            Kaishi&apos;s example sentences are the easiest reading practice you&apos;ll get: five or six words, basic grammar,
            clear audio. Read them, and sometimes close your eyes and try to follow the audio alone. That turns ten minutes of
            flashcards into ten minutes of reading and listening too.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="leeches" title="Cards that won't stick">
        <p>
          A card you&apos;ve failed eight times becomes a <strong>leech</strong>: Anki tags it and suspends it by default. The
          manual&apos;s advice is to change how the card is presented (add a picture, a mnemonic, a clearer sentence) or delete it
          if the word isn&apos;t worth the time. Some words only stick once you&apos;ve met them in a story, and some pairs
          interfere with each other until one of them is solid; suspending one for a while helps. Deleting a card is allowed.
          Nobody is keeping score.
        </p>
        <p>
          If reviews start taking more time than you have, lower new cards first. Reviews are the cost of words you&apos;ve
          already started; new cards are the debt you&apos;re taking on.
        </p>
      </GuideSection>

      <GuideSection id="after-kaishi" title="After the starter deck">
        <p>
          Once Kaishi is done (or once native content is bearable), stop adding pre-made cards and start{" "}
          <In href="/guide/immersion#mining">mining</In>: making cards from words you meet in what you read and watch. Those
          stick far better, because you remember where you saw them: that word is the one Anya said, not card #1,137.
        </p>
        <H3>What vocabulary learning looks like over time</H3>
        <Table
          head={["Stage", "How words come in"]}
          rows={[
            ["Starting out", "On purpose, from a deck of the most common words, until native content is bearable."],
            ["Immersing", "Mostly from reading and listening, with cards for words you meet that feel useful."],
            ["Later", "Anki becomes insurance: for words you want to be sure of, or for a field you need (work, a hobby, an exam)."],
          ]}
        />
        <H3>Monolingual definitions, eventually</H3>
        <p>
          At some point, look words up in a Japanese-Japanese dictionary as well as an English one. A Japanese definition
          explains a word with simpler Japanese, which is reading practice in itself and gives you the nuance a one-word
          translation hides. Start by reading the Japanese definition after the English one; later, try it first. Yomitan can show
          both (see the <In href="/guide/immersion#tools">tools</In> section).
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
