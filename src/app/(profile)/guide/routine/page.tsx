import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("routine");

export default function RoutineChapter() {
  return (
    <ChapterShell slug="routine">
      <GuideSection id="first-week" title="Your first week">
        <p>
          A plan for someone starting from zero with an hour or two a day, adapted from VN Club&apos;s quick start and
          TheMoeWay&apos;s 30-day routine. Move faster or slower as it suits you; the order matters more than the days.
        </p>
        <Table
          head={["Days", "Do"]}
          rows={[
            ["1–3", <>Hiragana with mnemonics and the kana quiz, about 10–20 minutes a day. Watch one episode of an anime you&apos;ve seen before with Japanese audio.</>],
            ["3–5", <>Katakana. Install Anki and <In href="/guide/vocabulary#kaishi">Kaishi 1.5k</In> at 10 new cards a day, and set it up as in the vocabulary chapter.</>],
            ["4–6", <>Add a Japanese keyboard. Install <In href="/guide/immersion#tools">Yomitan</In> with Jitendex. Read the first few points of one grammar guide.</>],
            ["6–7", <>Pick your first real thing to watch and your first to read. Watch one episode with Japanese subtitles and look up a handful of words.</>],
          ]}
        />
        <p>
          By the end of the week you should read kana slowly, have Anki running, and have spent a few hours with real Japanese.
          You won&apos;t understand much of it yet. That&apos;s the plan working.
        </p>
      </GuideSection>

      <GuideSection id="first-months" title="The first months">
        <Table
          head={["", "Months 1–4", "After Kaishi"]}
          rows={[
            ["Anki", "10–20 new Kaishi words, plus reviews: 20–40 minutes", "Cards mined from what you read and watch"],
            ["Grammar", "One or two points from one guide (TheMoeWay's routine: three Cure Dolly videos a day)", "Look things up as they come"],
            ["Active immersion", "1–2 hours: anime with Japanese subtitles, graded readers, then easy manga", "As much as you can, mostly native content"],
            ["Passive listening", "Anything you've already watched, while doing other things", "Podcasts and audio from shows you've seen"],
          ]}
        />
        <p>
          A good first reading goal, from TheMoeWay&apos;s routine: 100 pages of <em>Yotsuba&amp;!</em> at around an hour a day. It
          feels slow, often ten minutes a page at first, and it speeds up noticeably within the volume.
        </p>
        <Callout title="If you only have 30 minutes">
          <p>
            Do your Anki reviews (with fewer new cards) and spend the rest on one episode or a few pages. Consistency beats volume;
            a short day keeps the habit and the reviews alive.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="milestones" title="Milestones">
        <p>
          TheMoeWay measures progress in volume rather than time, which is more honest: people learn at different speeds, but
          everyone improves with the amount they&apos;ve understood.
        </p>
        <Table
          head={["When you've done this", "It usually feels like"]}
          rows={[
            ["10 anime series watched raw, without subtitles", "You're starting to get the hang of listening."],
            ["25 series", "Listening feels more natural than it ever has."],
            ["50 series", "You're out of the beginner stage for listening."],
            ["1 novel", "A big jump in reading; you leave the beginner stage."],
            ["5 novels, or one medium-long visual novel", "You're not a beginner any more."],
            ["10 novels, or two medium-long visual novels", "Solidly intermediate."],
          ]}
        />
        <p>
          Other markers people notice: the first time a word from Anki turns up in a show, the first joke you get without
          subtitles, the first time you forget whether you watched something in Japanese or English. Write them down; they&apos;re
          easy to forget and good to look back on.
        </p>
        <p>
          On <In href="/">immersionlog</In>, milestones and finished titles live on your profile, and your{" "}
          <In href="/tools/reading-speed">reading speed</In> is a number worth retesting every few months.
        </p>
      </GuideSection>

      <GuideSection id="consistency" title="Staying consistent">
        <p>
          VN Club&apos;s advice is the best in this whole guide: when and how long you study matters less than never missing a
          day. A few ways to make that easier:
        </p>
        <List>
          <li>
            <strong>Attach it to something you already do.</strong> Anki with morning coffee, a podcast on the commute, an episode
            instead of the evening scroll. A fixed trigger beats willpower.
          </li>
          <li>
            <strong>Set a floor, not a target.</strong> &ldquo;Reviews plus one episode&rdquo; on a bad day, more on a good one.
          </li>
          <li>
            <strong>Spread learning out.</strong> <em>A Year to Learn Japanese</em> distinguishes &ldquo;horizontal&rdquo; time
            (how many days) from &ldquo;vertical&rdquo; time (hours in one sitting). Memory rewards horizontal: five minutes a day
            beats an hour once a week.
          </li>
          <li>
            <strong>Make it enjoyable.</strong> If immersion feels like homework, change what you&apos;re watching or reading, not
            whether you do it.
          </li>
          <li>
            <strong>Look after the basics.</strong> Donkuri&apos;s guide is blunt that sleep, exercise and fresh air affect how much
            sticks.
          </li>
          <li>
            <strong>Track it.</strong> A streak and a growing number of hours are motivating on the days nothing else is.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="mistakes" title="Common mistakes">
        <List>
          <li>
            <strong>Studying in sequence.</strong> Finishing all the kana, all the words, all the grammar, then starting immersion.
            Do them together.
          </li>
          <li>
            <strong>Switching methods.</strong> Jumping between decks, apps and guides costs more than any one of them could save.
            Pick one and stick with it for months.
          </li>
          <li>
            <strong>Staying on beginner material too long.</strong> Leave graded material as soon as native content is bearable
            with a dictionary.
          </li>
          <li>
            <strong>Perfectionism.</strong> You won&apos;t understand everything, for years. Understanding more than last month is
            the goal.
          </li>
          <li>
            <strong>Too many new cards.</strong> Forty a day feels productive for two weeks, then buries you in reviews. Stay at
            10–20.
          </li>
          <li>
            <strong>Only passive listening.</strong> Background audio is a bonus, not a substitute for time spent actually
            following Japanese.
          </li>
          <li>
            <strong>Tool tinkering.</strong> A perfect setup with no reading done is zero hours.
          </li>
          <li>
            <strong>Comparing timelines.</strong> Other people&apos;s &ldquo;N1 in a year&rdquo; stories leave out their hours,
            background and luck. Compare yourself with last month.
          </li>
        </List>
        <H3>Where to go from here</H3>
        <p>
          Back to the <In href="/guide">overview</In>, or straight to <In href="/guide/what-to-watch-and-read">what to watch and
          read</In> if you&apos;re ready to pick your first title. The community guides this is built on (
          <Ext href="https://learnjapanese.moe/guide/">TheMoeWay</Ext>, <Ext href="https://vnclub.org/guide/">VN Club</Ext>,{" "}
          <Ext href="https://donkuri.github.io/learn-japanese/">Donkuri</Ext>) are worth reading in full too.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
