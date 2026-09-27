import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { SentenceDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("grammar");

export default function GrammarChapter() {
  return (
    <ChapterShell slug="grammar">
      <GuideSection id="approach" title="Learn it in passes">
        <p>
          Grammar guides give you a map, not the territory. Nobody learns a grammar point the first time they read about it; you
          learn it by meeting it hundreds of times in sentences you understand. So read explanations to <em>recognise</em>{" "}
          patterns, not to master them.
        </p>
        <p>
          <em>A Year to Learn Japanese</em> describes learning grammar in passes, and it matches what most learners report:
        </p>
        <List ordered>
          <li>
            <strong>First pass:</strong> you learn what exists. &ldquo;There&apos;s a form for &lsquo;want to&rsquo;, a form for
            &lsquo;if&rsquo;, a way to give reasons.&rdquo; You won&apos;t remember the details, and that&apos;s fine.
          </li>
          <li>
            <strong>Middle passes:</strong> from reading and listening, you collect go-to patterns and start noticing them
            everywhere. Now a grammar explanation makes sense in a way it didn&apos;t before.
          </li>
          <li>
            <strong>Later passes:</strong> you get curious about nuance: why Japanese has two ways to say something that look
            identical. Grammar references become interesting rather than confusing.
          </li>
        </List>
        <p>
          In practice: pick <strong>one</strong> beginner guide, read one or two points a day alongside your Anki and immersion,
          and don&apos;t stop to drill. When something in your reading confuses you, look that point up. That&apos;s the whole
          method.
        </p>
        <Callout title="Explain Japanese as Japanese">
          <p>
            Tae Kim&apos;s guide is built on one idea worth borrowing whatever resource you use: explain Japanese from a Japanese
            point of view rather than forcing English into it. His translations stay deliberately literal, without invented
            subjects or articles, so you see what the Japanese actually says. And his warning about speaking: &ldquo;if you
            don&apos;t know how to say it already, then you don&apos;t know how to say it.&rdquo; Learn from Japanese examples,
            not by translating your English thoughts.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="core-ideas" title="The core ideas">
        <p>A handful of ideas explain most of what you&apos;ll see in your first months.</p>
        <H3>Sentences end with the verb, and particles mark roles</H3>
        <SentenceDiagram />
        <p>
          Particles are small words after a noun that say what it&apos;s doing in the sentence. Because the particles carry the
          roles, word order is flexible, except that the verb (or adjective, or です) comes last.
        </p>
        <Table
          head={["Particle", "Main job", "Example"]}
          rows={[
            ["は (wa)", "Topic: what the sentence is about", "私は学生です。 As for me, (I) am a student."],
            ["が", "Subject: who or what does or is something", "猫がいる。 There's a cat."],
            ["を (o)", "Direct object", "本を読む。 Read a book."],
            ["に", "Target, destination, time, place where something is", "七時に起きる。 Get up at seven."],
            ["で", "Place where an action happens; means", "駅で待つ。 Wait at the station."],
            ["の", "Links nouns: possession and description", "私の本。 My book."],
            ["も", "Also, too", "私も行く。 I'm going too."],
            ["と", "And (between nouns); with", "友達と話す。 Talk with a friend."],
            ["か", "Question, at the end of a sentence", "行きますか。 Are (you) going?"],
          ]}
        />
        <H3>は and が</H3>
        <p>
          The question everyone asks. Roughly, は marks what you&apos;re talking about and が marks who or what does something,
          often something new. 犬は魚を食べている is &ldquo;as for the dog, it&apos;s eating fish&rdquo;; 犬が魚を食べている is
          &ldquo;a dog is eating fish.&rdquo; Rules only get you so far: it clicks from seeing thousands of examples, which is
          exactly what immersion supplies.
        </p>
        <H3>Subjects disappear</H3>
        <p>
          Japanese leaves out anything the listener can work out: 日本に行きました is simply &ldquo;(I) went to Japan.&rdquo; Early
          on this feels like missing information. You get used to tracking who&apos;s doing what from context, and it&apos;s a big
          part of why listening gets easier with practice.
        </p>
        <H3>Verbs and adjectives change their endings</H3>
        <List>
          <li>
            <strong>Verbs</strong> come in two big groups plus two irregulars (する and 来る), and each group changes its endings in
            a regular way for past, negative, polite, &ldquo;-ing&rdquo; and more. 食べる → 食べた (ate), 食べない (don&apos;t
            eat), 食べます (polite), 食べている (eating).
          </li>
          <li>
            <strong>Adjectives</strong> come in two kinds: い-adjectives like 高い conjugate themselves (高かった, was expensive);
            な-adjectives like 静か work like nouns (静かだった).
          </li>
          <li>
            <strong>Plain and polite.</strong> Every verb has a plain form and a polite ます form. Conversations with strangers
            and textbooks use polite; friends, family, anime and most manga use plain. Learn to recognise both from the start.
          </li>
          <li>
            <strong>One form, two meanings.</strong> ～ている is &ldquo;-ing&rdquo; for some verbs and a resulting state for
            others: 葉っぱが落ちている can mean leaves are falling or leaves are lying on the ground. Context decides, which is why
            reading teaches grammar better than lists do.
          </li>
        </List>
        <H3>Modifiers come first</H3>
        <p>
          Anything that describes a noun goes before it, including whole clauses: 昨日読んだ本 is &ldquo;the book (I) read
          yesterday&rdquo;, literally &ldquo;yesterday-read book.&rdquo; Long Japanese sentences often stack these up, so when you
          get lost, find the noun at the end and work backwards.
        </p>
      </GuideSection>

      <GuideSection id="resources" title="Guides and videos">
        <p>Pick one as your main guide. Use the others when an explanation doesn&apos;t click.</p>
        <Table
          head={["Resource", "Style", "Cost"]}
          rows={[
            [<Ext key="y" href="https://yoku.bi/">Yokubi</Ext>, "A condensed, modern take on Tae Kim, designed to get you reading as fast as possible. TheMoeWay's first pick.", "Free"],
            [
              <Ext key="t" href="https://guidetojapanese.org/learn/grammar">Tae Kim</Ext>,
              "The classic free guide, beginner to advanced, with plenty of casual-speech coverage. Quick to read, good as a reference.",
              "Free",
            ],
            [<Ext key="s" href="https://sakubi.neocities.org/">Sakubi</Ext>, "The essentials on one page, for getting to reading fast.", "Free"],
            [
              <Ext key="c" href="https://www.youtube.com/playlist?list=PLg9uYxuZf8x_A-vcqqyOFZu06WlhnypWj">Cure Dolly</Ext>,
              "Video series that explains Japanese on its own terms rather than through English grammar. Full transcripts exist.",
              "Free",
            ],
            [
              <Ext key="a" href="https://www.youtube.com/playlist?list=PLd5-Wp_4tLqYZxS5j3g6kbeOfVXlTkr3N">Japanese Ammo with Misa</Ext>,
              "Friendly, thorough grammar videos in English. Good if you prefer listening to reading.",
              "Free",
            ],
            [
              <Ext key="i" href="https://imabi.org/">IMABI</Ext>,
              "Over 450 lessons from beginner to advanced, plus Classical Japanese, written with linguistic depth. A reference to look things up in, not a first read.",
              "Free",
            ],
            [<Ext key="b" href="https://bunpro.jp/">Bunpro</Ext>, "Grammar as spaced-repetition drills, if you like reviewing grammar like Anki cards.", "Subscription"],
          ]}
        />
        <p>
          Grammar in video games is its own niche: Game Gengo breaks down lines from Japanese games and explains the grammar in
          them. Fun once you know the basics.
        </p>
      </GuideSection>

      <GuideSection id="textbooks" title="Textbooks">
        <p>
          The immersion guides mostly skip textbooks, but they suit people who like structure, exercises and a clear sense of
          progress. If that&apos;s you, use one, and still start immersing early.
        </p>
        <Table
          head={["Book", "Level", "Notes"]}
          rows={[
            [
              <Ext key="ir" href="https://www.irodori.jpf.go.jp/en/">IRODORI</Ext>,
              "Starter (A1) to pre-intermediate",
              "Free from the Japan Foundation, with PDFs and audio. Built around real situations in daily life.",
            ],
            ["Genki I and II", "Beginner", "The most widely used university textbooks. One section a weekday gets through both in about six months."],
            ["Minna no Nihongo", "Beginner", "Used by many language schools; mostly in Japanese, with separate translation books."],
            ["Quartet I and II", "Intermediate", "Picks up after Genki; reading, listening and writing towards N3–N2."],
            ["Tobira", "Intermediate", "A popular next step for self-learners after a beginner series."],
          ]}
        />
        <p>
          A tip from <em>A Year to Learn Japanese</em> for textbook users: do each workbook section a week after the matching
          lesson. The small struggle to remember helps it stick, and weekends are for watching and reading.
        </p>
      </GuideSection>

      <GuideSection id="references" title="When you get stuck">
        <List>
          <li>
            <strong>Search the pattern.</strong> Searching the grammar (for example <code>〜てしまう</code>) plus &ldquo;grammar&rdquo;
            usually finds an explanation; searching it plus <code>意味</code> finds Japanese explanations.
          </li>
          <li>
            <strong>A Dictionary of Basic Japanese Grammar</strong> (and its intermediate and advanced volumes) is the standard
            reference, and the one Tofugu recommends keeping at hand.
          </li>
          <li>
            <strong>Ask.</strong> The r/LearnJapanese daily thread and language-exchange communities answer beginner questions
            every day. Paste the whole sentence, not just the confusing word.
          </li>
          <li>
            <strong>Move on.</strong> If a sentence still doesn&apos;t make sense after a few minutes, skip it. You&apos;ll meet
            the pattern again, often in a clearer sentence.
          </li>
        </List>
        <p>
          Later, grammar decks in Japanese (TheMoeWay recommends the NihongoKyoshi deck) and the{" "}
          <In href="/guide/vocabulary#after-kaishi">monolingual dictionary habit</In> take you further than English explanations
          can.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
