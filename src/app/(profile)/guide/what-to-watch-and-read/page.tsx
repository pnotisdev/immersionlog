import { GUIDE_ANIME, GUIDE_BOOKS, GUIDE_FILMS, GUIDE_GAMES, GUIDE_MANGA, GUIDE_VISUAL_NOVELS } from "@/lib/guide-media";
import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { ImageCredits, Photo } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";
import { MediaTable, VnFacts } from "@/components/guide/media-table";

export const metadata = chapterMetadata("what-to-watch-and-read");

export default function MediaChapter() {
  return (
    <ChapterShell slug="what-to-watch-and-read">
      <GuideSection id="choosing" title="How to choose">
        <Photo
          src="/guide/manga-bookshop.webp"
          alt="Shelves of manga volumes in a Japanese bookshop"
          width={1200}
          height={900}
          caption="There's no shortage of material; the hard part is picking the right first things. Anime and manga bookshop in Kyoto. Photo: Marek Ślusarczyk (Tupungato), CC BY 3.0."
        />
        <p>
          The single most important rule: <strong>pick things you actually want to finish.</strong> Something you care about
          carries you through confusion that a perfectly levelled textbook story never will. Past that, a few things make a first
          title easier:
        </p>
        <List>
          <li>
            <strong>Everyday language.</strong> Slice of life, school and family stories beat fantasy politics, science fiction
            and period drama.
          </li>
          <li>
            <strong>Short.</strong> Finishing things builds momentum. A short series you finish beats a sixty-hour epic you drop.
          </li>
          <li>
            <strong>Furigana and voice.</strong> Readings over the kanji, and voice acting in games, take pressure off.
          </li>
          <li>
            <strong>Something you&apos;ve already seen in English.</strong> Knowing the plot frees your attention for the
            language.
          </li>
          <li>
            <strong>Made for Japanese people.</strong> Beyond the first weeks, native content teaches you real Japanese, including
            the stylised speech (役割語, &ldquo;role language&rdquo;) that marks characters as old, rough, posh or childish.
          </li>
        </List>
        <Callout title="How to read the rankings below">
          <p>
            Each list is sorted by <Ext href="https://jiten.moe/">Jiten.moe</Ext>&apos;s difficulty estimate, from 0 (easiest) to
            5, which it computes from the vocabulary and kanji in each work. Click a score to see the title on Jiten. It
            measures words, not plot or speed: a gentle show with fast talkers can still be hard to follow. Treat it as a
            comparison, not a verdict. Numbers were fetched on 27 September 2026.
          </p>
        </Callout>
        <p>
          This chapter covers the beginner end, roughly 0 to 3. Harder titles are in the{" "}
          <In href="/guide/intermediate#recommendations">intermediate</In>,{" "}
          <In href="/guide/upper-intermediate#recommendations">upper-intermediate</In> and{" "}
          <In href="/guide/advanced#recommendations">advanced</In> chapters, including live-action dramas.
        </p>
      </GuideSection>

      <GuideSection id="learner" title="Made for learners">
        <p>For your first weeks, before native content is bearable, and for the easy end of every day after.</p>
        <Table
          head={["Resource", "What it is", "Cost"]}
          rows={[
            [
              <Ext key="t" href="https://tadoku.org/japanese/en/free-books-en/">Tadoku graded readers</Ext>,
              "Short illustrated books in levels Start to 5, PDF, many with audio. Level Start is readable with kana alone.",
              "Free",
            ],
            ["NHK News Web Easy", "Current news rewritten in simple Japanese for children and learners, with furigana and audio.", "Free"],
            [<Ext key="w" href="https://watanoc.com/">Watanoc</Ext>, "Online magazine with articles graded by JLPT level.", "Free"],
            [<Ext key="h" href="https://www.hukumusume.com/">Hukumusume</Ext>, "Folk tales and children's stories written for Japanese primary-school children.", "Free"],
            [
              <Ext key="i" href="https://www.irodori.jpf.go.jp/en/">IRODORI</Ext>,
              "The Japan Foundation's textbook for daily life in Japan, with audio; doubles as reading and listening practice.",
              "Free",
            ],
            [
              <Ext key="s" href="https://www.satorireader.com/">Satori Reader</Ext>,
              "Serialised stories and articles for intermediate learners, with native audio, adjustable furigana and explanations.",
              "Subscription",
            ],
          ]}
        />
        <p>
          Between learner material and adult novels, Japanese children&apos;s imprints are an overlooked step:{" "}
          <strong>角川つばさ文庫</strong> and <strong>講談社青い鳥文庫</strong> publish children&apos;s editions, including novels of
          popular films and anime, in large type with furigana throughout.
        </p>
      </GuideSection>

      <GuideSection id="podcasts" title="Podcasts and YouTube">
        <H3>For learners, in Japanese</H3>
        <Table
          head={["Show", "Level", "What it is"]}
          rows={[
            [
              <Ext key="t" href="https://nihongoconteppei.com/">Nihongo con Teppei</Ext>,
              "Beginner, then intermediate",
              "Teppei talks about everyday topics in simple, natural Japanese; the beginner series repeats a lot on purpose. Free.",
            ],
            [
              <Ext key="n" href="https://www.japanesewithnoriko.com/">Learn Japanese with Noriko</Ext>,
              "Upper beginner and up",
              "Short episodes on daily-life topics, with free transcripts to read along.",
            ],
            [
              <Ext key="s" href="https://www.youtube.com/@JapanesewithShun">Japanese with Shun</Ext>,
              "N5–N3",
              "Vlogs, interviews and travel in clear Japanese, mostly using the grammar from Genki I and II.",
            ],
            [
              <Ext key="c" href="https://nijapanese.com/">Natural Japanese</Ext>,
              "Complete beginner and up",
              "Formerly Comprehensible Japanese: videos in simple Japanese, with drawings and gestures carrying the meaning.",
            ],
          ]}
        />
        <H3>Native shows that are easy to follow</H3>
        <List>
          <li>
            <strong>Let&apos;s plays.</strong> Gamers narrate what they&apos;re doing, so the screen tells you what the words mean.
            Pick one person and stay with them.
          </li>
          <li>
            <strong>Vlogs and daily-life channels.</strong> Same advice: one speaker, lots of episodes.
          </li>
          <li>
            <strong>ゆる言語学ラジオ</strong> (a light-hearted linguistics podcast) and <strong>COTEN RADIO</strong> (history) are
            well-loved native podcasts for intermediate listeners.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="anime" title="Anime and films">
        <p>
          Watch with Japanese subtitles (see <In href="/guide/immersion#subtitles">subtitles</In>). Slice of life is the easiest
          genre by far, which is why it dominates the top of this list.
        </p>
        <MediaTable items={GUIDE_ANIME} />
        <H3>Films</H3>
        <p>
          A film is two hours of complete story, which makes it a satisfying first finish. Studio Ghibli films are among the
          easiest, and you may already know them in English.
        </p>
        <MediaTable items={GUIDE_FILMS} />
        <p>
          Popular doesn&apos;t mean easy: Kaguya-sama and Steins;Gate are community favourites but score among the hardest here,
          while quiet shows like Polar Bear Café and Non Non Biyori score among the easiest.
        </p>
      </GuideSection>

      <GuideSection id="manga" title="Manga">
        <p>
          Pictures carry the story, so manga needs far less vocabulary than a novel. Most of it is dialogue, which means lots of
          casual speech and slang, and furigana is common in manga for younger readers. Read it with{" "}
          <In href="/guide/immersion#tools">mokuro</In> for lookups, or on paper with a dictionary app.
        </p>
        <MediaTable items={GUIDE_MANGA} />
        <p>
          TheMoeWay&apos;s 30-day routine ends with a challenge worth stealing: read 100 pages of <em>Yotsuba&amp;!</em> at about an
          hour a day.
        </p>
      </GuideSection>

      <GuideSection id="visual-novels" title="Visual novels">
        <p>
          Visual novels are novels with pictures, music and usually full voice acting: you read every line while hearing it. VN
          Club and many immersion learners swear by them because you can read for hours without the fatigue of a plain novel. Set
          one up with a texthooker (see <In href="/guide/immersion#tools">tools</In>).
        </p>
        <Callout title="About age ratings" tone="warn">
          <p>
            Many titles on community VN lists are adult games. Every title below has at least one all-ages or teen-rated Japanese
            release, checked on VNDB; the rating shown is the youngest one found. Make sure you get that edition.
          </p>
        </Callout>
        <MediaTable items={GUIDE_VISUAL_NOVELS} extra={(vn) => <VnFacts vn={vn} />} />
        <p>
          Several of these come from <Ext href="https://vnclub.org/beginner-vns/">VN Club&apos;s beginner list</Ext>. Lengths are
          VNDB&apos;s community averages; as a learner, expect to take considerably longer at first.
        </p>
      </GuideSection>

      <GuideSection id="games" title="Games">
        <p>
          Games are reading with a reason to understand. RPGs and adventure games are text-heavy; Animal Crossing is endless
          low-stakes conversation. One surprise in the data: older games written only in kana score as harder than they look.
          Without kanji there are no visual cues for where words begin and end, so Pokémon Red, with one kanji in the whole game,
          scores harder than Pokémon Sword.
        </p>
        <MediaTable items={GUIDE_GAMES} />
        <p>Newer Pokémon games, and some others, let you choose kana-only or kanji text; pick kanji as soon as you can.</p>
      </GuideSection>

      <GuideSection id="books" title="Books">
        <p>
          Novels are the hardest medium to start with and the most rewarding once you can: nothing builds vocabulary faster.
          Start with short books, and consider reading something after watching its adaptation. The list climbs from a
          children&apos;s novel to a popular intermediate target:
        </p>
        <MediaTable items={GUIDE_BOOKS} />
        <p>
          For free classics, <Ext href="https://www.aozora.gr.jp/">Aozora Bunko</Ext> has thousands of out-of-copyright works,
          though most are old-fashioned and hard. <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext> recommends short horror stories by Otsuichi
          (乙一) as a first step into adult fiction: plot-driven, simple and short.
        </p>
        <Callout title="Track what you finish">
          <p>
            Every finished title is a milestone. Log your time on <In href="/">immersionlog</In> and you&apos;ll see how long each
            one took you, which helps you judge what to pick next.
          </p>
        </Callout>
      </GuideSection>

      <ImageCredits srcs={["/guide/manga-bookshop.webp"]} />
    </ChapterShell>
  );
}
