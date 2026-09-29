import { UPPER_INTERMEDIATE_MEDIA } from "@/lib/guide-media";
import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Callout, Ext, GuideSection, In, List, Table } from "@/components/guide/guide-parts";
import { LevelRecommendations } from "@/components/guide/media-table";

export const metadata = chapterMetadata("upper-intermediate");

export default function UpperIntermediateChapter() {
  return (
    <ChapterShell
      slug="upper-intermediate"
      art={{
        name: "hyouka",
        caption: "「私、気になります！」 Chitanda's catchphrase in Hyouka, \"I'm curious!\", is the whole mood of this stage: you pick things because you want to know, not because they're on a list.",
      }}
    >
      <GuideSection id="where-you-are" title="Where you are">
        <p>
          At this stage Japanese has become something you do rather than something you study. You probably have opinions about
          light novel translations now. That&apos;s a symptom. You probably recognise yourself
          here if:
        </p>
        <List>
          <li>You watch most anime and many dramas without subtitles and read novels with only occasional lookups.</li>
          <li>You choose what to read or watch by interest, not by difficulty, and have a backlog you want to get through.</li>
          <li>
            What still defeats you is specific: several people talking over each other, wordplay and comedy, a medical or legal
            drama, regional dialects, dense literary narration.
          </li>
          <li>You can hold a conversation, but it&apos;s clear to you how much plainer your Japanese is than what you read.</li>
        </List>
        <p>
          In JLPT terms, that&apos;s around N2 heading for N1.{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>{" "}
          describes the moment you arrive here as an epiphany: something makes you look back and realise Japanese isn&apos;t so
          hard for you any more. It also warns about what comes next: a &ldquo;hurt-ego moment&rdquo;, a book you can&apos;t get
          through or a conversation that goes badly, that pushes you to work on a new area. Progress from here comes in those
          cycles.
        </p>
      </GuideSection>

      <GuideSection id="widen" title="Widen your range">
        <p>
          The biggest risk now is comfort. If you only consume the genres you already know, your Japanese gets very good at
          those genres and stays where it is everywhere else. Isekai fluency is real, and it doesn&apos;t help at the doctor&apos;s. Each new domain brings its own vocabulary and style:
        </p>
        <Table
          head={["Try", "What it adds"]}
          rows={[
            ["Workplace, medical and legal dramas", "Specialist vocabulary, keigo in use, fast formal speech"],
            ["Mystery and literary novels", "Richer narration, written grammar you rarely hear"],
            ["Non-fiction and 新書 (short books on one topic)", "Explanatory Japanese, the language of ideas and arguments"],
            ["Variety shows and comedy (漫才, コント)", "Fast multi-person talk, wordplay, regional speech"],
            ["News and current affairs", "Formal vocabulary, the kanji-heavy register of print"],
            ["Period dramas and historical fiction", "Older expressions and role language"],
          ]}
        />
        <p>
          Stay with an author or creator when you find one you like; ten works by one person are easier than ten by ten people.
          And expect the bump every time you switch medium: your first novel after a year of anime will feel harder than your
          level.
        </p>
      </GuideSection>

      <GuideSection id="listening" title="Native listening">
        <List>
          <li>
            <strong>Podcasts made for Japanese listeners.</strong> ゆる言語学ラジオ (language), COTEN RADIO (history told as
            stories) and countless others; Donkuri&apos;s and Kuzuri&apos;s resource lists keep longer lists.
          </li>
          <li>
            <strong>Radio.</strong> <Ext href="https://www.nhk.or.jp/radio/">NHK radio</Ext> streams online;{" "}
            <Ext href="https://radiko.jp/">radiko</Ext> carries commercial stations, though its free service works only from inside
            Japan.
          </li>
          <li>
            <strong>Audiobooks.</strong> <Ext href="https://audiobook.jp/">audiobook.jp</Ext> and{" "}
            <Ext href="https://www.audible.co.jp/">Audible Japan</Ext> sell Japanese audiobooks. Start with a book you&apos;ve
            read, or an easy one; listening to a novel is much harder than reading it.
          </li>
          <li>
            <strong>Several people at once.</strong> Talk shows, variety shows and discussion programmes, where people interrupt
            and talk over each other, are the last listening wall for many learners.
          </li>
        </List>
        <p>
          Passive listening becomes more useful now than it was as a beginner, because you understand enough of it to learn
          from. A podcast on every commute adds up to hundreds of hours a year.
        </p>
      </GuideSection>

      <GuideSection id="reading" title="Reading faster and longer">
        <p>
          TheMoeWay&apos;s reading guide is blunt: you only get faster by reading more. Speed comes from recognising common chunks
          (なければならない, といっても) as single units instead of word by word, which only happens with volume. Trying to force
          speed just lowers comprehension.
        </p>
        <Table
          head={["Characters per hour", "Roughly"]}
          rows={[
            ["Under 5,000", "Starting out"],
            ["5,000–10,000", "Building up"],
            ["10,000–20,000", "Comfortable for novels"],
            ["Over 20,000", "Close to how many native readers read for fun"],
          ]}
        />
        <p>
          Those bands are the ones immersionlog&apos;s <In href="/tools/reading-speed">reading speed test</In> uses; the{" "}
          <In href="/texthooker">texthooker</In> and ッツ Ebook Reader track your speed as you read. TheMoeWay&apos;s long-range
          benchmark: hundreds of novels, not dozens, is what strong reading proficiency looks like. At this stage, the question
          is how to make reading a daily habit you&apos;d keep anyway.
        </p>
        <Callout title="Mine less, read more">
          <p>
            Most new words now are rare ones. Mine only what you meet repeatedly or genuinely want, and let the long tail come
            from reading. Many learners at this level cut Anki to a few minutes a day or drop it; TheMoeWay&apos;s reading guide
            puts the heavy mining in your first 30 or 40 novels.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="output" title="Output and feedback">
        <p>
          The gap between what you understand and what you can say is now at its widest, and it narrows only with practice.
        </p>
        <List>
          <li>
            <strong>Talk about ideas, not just your day.</strong> Retell the plot of what you&apos;re reading, explain a hobby,
            argue a position on a topic within a time limit, and ask your tutor how they&apos;d have said it more concisely.
          </li>
          <li>
            <strong>Write longer.</strong> A weekly paragraph on anything, corrected by a tutor or exchange partner. Ask whether it
            sounds natural, not just whether it&apos;s correct.
          </li>
          <li>
            <strong>Borrow from your input.</strong> Keep a list of expressions you&apos;ve read or heard and want to use, and
            use them. Output points you at gaps; input fills them.
          </li>
          <li>
            <strong>Polish pronunciation.</strong> Pitch accent and intonation are what separate an understandable accent from a
            natural one; see the <In href="/guide/speaking#pitch-accent">pitch accent</In> section.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="recommendations" title="What to watch and read">
        <p>
          A step up again: most of these score about 3 to 3.8 on Jiten.moe&apos;s scale. Many are famous titles that learners
          try too early; now is when they pay off.
        </p>
        <LevelRecommendations media={UPPER_INTERMEDIATE_MEDIA} />
      </GuideSection>
    </ChapterShell>
  );
}
