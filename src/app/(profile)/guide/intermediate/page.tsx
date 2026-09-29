import { INTERMEDIATE_MEDIA } from "@/lib/guide-media";
import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";
import { LevelRecommendations } from "@/components/guide/media-table";
import { Scene } from "@/components/guide/anime-art";

export const metadata = chapterMetadata("intermediate");

export default function IntermediateChapter() {
  return (
    <ChapterShell
      slug="intermediate"
      art={{
        name: "spy-family",
        caption: "Operation Strix: get a mind-reading six-year-old into an elite school without anyone noticing. Operation Intermediate: get from learner material to native content. Similar difficulty, fewer guns.",
      }}
    >
      <GuideSection id="where-you-are" title="Where you are">
        <p>
          &ldquo;Intermediate&rdquo; is a wide band, but you&apos;re in it when most of these are true:
        </p>
        <List>
          <li>You&apos;ve finished a starter deck and can read kana and common kanji without thinking.</li>
          <li>Slice-of-life anime with Japanese subtitles is followable, if tiring.</li>
          <li>You can read an easy manga or light novel with a pop-up dictionary, looking up a word every line or two.</li>
          <li>Learner material (graded readers, textbooks) has started to feel boring rather than hard.</li>
          <li>Speech aimed at learners is easy; speech between native speakers still loses you often.</li>
        </List>
        <p>
          In JLPT terms that&apos;s roughly N3 into N2, which the learner survey in the{" "}
          <In href="/guide#expectations">overview</In> puts at about 950–2,800 hours for someone without a kanji background.{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>{" "}
          calls the entrance to this stage the &ldquo;nope threshold&rdquo;: the point where native content stops being
          unbearable and becomes merely hard. You&apos;ve crossed it. Congratulations, genuinely. The rest of the road is mostly
          doing more of what you love, in Japanese.
        </p>
      </GuideSection>

      <GuideSection id="plateau" title="The intermediate plateau">
        <p>
          Almost everyone hits it, and it&apos;s the most boring monster in the game. Tofugu&apos;s{" "}
          <Ext href="https://www.tofugu.com/japanese/intermediate-japanese-plateau/">article on the intermediate plateau</Ext>{" "}
          explains why: you&apos;ve learned the basic grammar and conjugation, so the easy, visible wins are gone. You&apos;re still
          improving, but each gain is smaller and harder to notice, and the remaining work is mostly vocabulary: thousands of
          words, each met a few times.
        </p>
        <p>It&apos;s also where many learners quit. What helps:</p>
        <List>
          <li>
            <strong>Measure instead of feeling.</strong> Hours, pages, titles finished and reading speed keep rising even when
            it doesn&apos;t feel like it. Retake the <In href="/tools/reading-speed">reading speed test</In> every few months and
            re-read something from six months ago.
          </li>
          <li>
            <strong>Pick a direction.</strong> Tofugu suggests deciding whether spoken or written Japanese matters more to you
            now, and setting concrete goals: finish this game, follow that podcast without a transcript.
          </li>
          <li>
            <strong>Keep a daily minimum.</strong> Thirty minutes is Tofugu&apos;s floor. Consistency matters more at this stage
            than at any other, because progress is slow enough to lose if you stop.
          </li>
          <li>
            <strong>Make it about the content.</strong> The way through is loving what you&apos;re reading and watching. If a
            title bores you, drop it for one that doesn&apos;t.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="what-changes" title="What to change">
        <Table
          head={["Before", "Now"]}
          rows={[
            ["Learner material with native content on the side", "Native content, with learner material only to fill gaps"],
            ["A pre-made vocabulary deck", "Cards mined from what you read and watch, chosen with a frequency dictionary"],
            ["Japanese subtitles on everything", "No subtitles for genres you know well; Japanese subtitles for new ones"],
            ["Manga and graded readers", "Light novels, easier novels, visual novels: your first long books"],
            ["Polite textbook Japanese", <>Casual speech, from the <In href="/guide/natural-japanese">sounding natural</In> chapter</>],
            ["Input only", <>First conversations, if you haven&apos;t started (see <In href="/guide/speaking">speaking</In>)</>],
          ]}
        />
        <H3>Read long things</H3>
        <p>
          Nothing grows vocabulary faster than novels, because they use far more distinct words than speech. TheMoeWay&apos;s
          milestones are measured in books: after your first novel you leave the beginner stage; after five novels, or one
          medium-length visual novel, you&apos;re not a beginner any more; after ten, you&apos;re solidly intermediate. Pick
          books you&apos;d want to read in English, and don&apos;t be afraid to drop them.
        </p>
        <Scene name="dungeon-meshi" title="Explanatory Japanese is great input">
          <p>
            <em>Delicious in Dungeon</em> stops the adventure to explain, in careful detail, how to cook a walking mushroom.
            Characters who explain things are a gift at this stage: the vocabulary comes with its own definition, and the
            pictures check your understanding.
          </p>
        </Scene>
        <H3>Listen without the safety net</H3>
        <p>
          Once Japanese subtitles feel comfortable for a show, try an episode without them. You&apos;ll miss things; rewatch with
          subtitles to see what. Podcasts and YouTube with no visuals are the next step, which is where the native podcasts
          below come in.
        </p>
      </GuideSection>

      <GuideSection id="dictionaries" title="Japanese-Japanese dictionaries">
        <p>
          This is the stage to start using monolingual dictionaries, which define Japanese in Japanese. A one-word English gloss
          hides nuance: 制御 is &ldquo;control&rdquo;, but which kind? A Japanese definition shows how the word is used, and
          reading definitions is itself reading practice written in simple, clear Japanese.
        </p>
        <p>
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>{" "}
          suggests easing in:
        </p>
        <List ordered>
          <li>Look a word up in your English dictionary as usual.</li>
          <li>Then read its Japanese definition, now that you know what it&apos;s describing.</li>
          <li>Look up words in the definition you don&apos;t know; stop if it turns into a chain.</li>
          <li>Over time, read the Japanese definition first and check the English only if you need to.</li>
        </List>
        <p>
          Yomitan shows several dictionaries at once, so you can put a Japanese one under Jitendex and glance at both. Common
          monolingual dictionaries include 大辞林, 三省堂国語辞典 and 明鏡国語辞典; <Ext href="https://www.weblio.jp/">Weblio</Ext>{" "}
          is a free online option that includes 大辞林. Some words, especially concrete nouns, define badly in any language; for those,
          an English gloss or an image search is fine.
        </p>
      </GuideSection>

      <GuideSection id="grammar-review" title="Filling grammar gaps">
        <p>
          By now you&apos;ve met a lot of grammar in the wild and half-understood much of it. This is where grammar references
          become genuinely useful, because you have real examples to hang them on.
        </p>
        <List>
          <li>
            <strong>Look things up as they come.</strong> Still the main method: a pattern that confuses you twice gets looked up.
          </li>
          <li>
            <strong>A reference, not a course.</strong> <em>A Dictionary of Intermediate Japanese Grammar</em> and the Shin Kanzen
            Master JLPT books compare similar-looking patterns side by side. <em>A Year to Learn Japanese</em> recommends using
            Shin Kanzen Master as a reference after meeting patterns in reading, one short unit a day, rather than as a first
            source.
          </li>
          <li>
            <strong>Grammar in Japanese.</strong> TheMoeWay recommends the NihongoKyoshi Anki deck, which explains JLPT grammar in
            Japanese only.
          </li>
          <li>
            <strong>Check yourself.</strong> The JLPT publishes{" "}
            <Ext href="https://www.jlpt.jp/e/samples/sampleindex.html">sample questions</Ext> for every level; try N3 and N2 to
            see where the gaps are.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="recommendations" title="What to watch and read">
        <p>
          The step up from the <In href="/guide/what-to-watch-and-read">beginner list</In>: everything here scores roughly 2 to 3
          on Jiten.moe&apos;s 0–5 difficulty scale. Live-action dramas and reality TV join the list, because they&apos;re the best
          source of natural, present-day speech.
        </p>
        <LevelRecommendations media={INTERMEDIATE_MEDIA} />
        <H3>Native podcasts and listening</H3>
        <List>
          <li>
            <Ext href="https://bilingualnews.jp/">Bilingual News</Ext>: a Japanese and an English speaker discuss the week&apos;s
            news in both languages. Good for bridging to native listening.
          </li>
          <li>
            <Ext href="https://yurugengo.com/">ゆる言語学ラジオ</Ext>: a hugely popular, light-hearted podcast about language and
            linguistics. Fast and funny, with lots of wordplay.
          </li>
          <li>
            Let&apos;s plays and vlogs from a single creator you like, for hours of consistent, natural speech. Nihongo con
            Teppei&apos;s intermediate series is a gentle step towards native speed.
          </li>
        </List>
        <H3>Web novels</H3>
        <p>
          <Ext href="https://syosetu.com/">小説家になろう</Ext> and <Ext href="https://kakuyomu.jp/">カクヨム</Ext> host
          a vast number of free web novels, from rough drafts to the originals of famous light novels. The writing is often simple and
          dialogue-heavy, and there&apos;s always more of whatever genre you like. <Ext href="https://bookwalker.jp/">BookWalker</Ext>{" "}
          sells Japanese ebooks and manga for when you want the published versions.
        </p>
        <Callout title="Your own list">
          <p>
            By now you know what you like better than any list does. Search your favourite genre on{" "}
            <Ext href="https://jiten.moe/">Jiten.moe</Ext> and sort by difficulty, or check the <In href="/titles">titles</In> other
            immersionlog members are logging.
          </p>
        </Callout>
      </GuideSection>
    </ChapterShell>
  );
}
