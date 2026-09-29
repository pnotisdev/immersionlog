import { GUIDE_ANIME, GUIDE_BOOKS, GUIDE_FILMS, GUIDE_GAMES, GUIDE_MANGA, GUIDE_VISUAL_NOVELS, guideFinderItems } from "@/lib/guide-media";
import { A_YEAR_TO_LEARN_JAPANESE, MORG } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { ImageCredits, Photo } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";
import { MediaFinder } from "@/components/guide/media-finder";
import { MediaTable, VnFacts } from "@/components/guide/media-table";

export const metadata = chapterMetadata("what-to-watch-and-read");

export default function MediaChapter() {
  return (
    <ChapterShell
      slug="what-to-watch-and-read"
      art={{
        name: "yotsuba",
        caption: "Yotsuba in a room full of instruments, wondering which one to try first. That's this chapter.",
      }}
    >
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
          carries you through confusion that a perfectly levelled textbook story never will. A show you love at 60%
          comprehension beats a show you&apos;re bored by at 90%. Past that, a few things make a first title easier:
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
            language. Rewatching a childhood favourite in Japanese is a great first project, and very nostalgic.
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
          <In href="/guide/advanced#recommendations">advanced</In> chapters, including live-action dramas. The finder below
          searches all of them at once.
        </p>
      </GuideSection>

      <GuideSection id="find" title="Find something">
        <p>
          Every title the guide ranks, from this chapter and the level chapters, in one list. Filter by medium, difficulty, length
          or whether there&apos;s audio to listen along with; each title links to the chapter that recommends it.
        </p>
        <MediaFinder items={guideFinderItems()} />
        <p className="text-meta text-dim">
          Length is Jiten&apos;s count of Japanese characters in the whole work, so a long-running anime counts every episode.
          Furigana isn&apos;t tracked; manga for younger readers and children&apos;s imprints usually have it, most adult novels
          don&apos;t.
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
            [
              <Ext key="h" href="https://www.hukumusume.com/">Hukumusume</Ext>,
              "Folk tales and children's stories for Japanese primary-school children, with audio. Short, but fairy-tale Japanese is full of old-fashioned set phrases, so don't worry if it feels odd.",
              "Free",
            ],
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
        <p>
          One warning about picture books for toddlers, which seem like the obvious place to start. As{" "}
          <Ext href={`${MORG}/Reading-children-books-or-fairytales`}>morg</Ext> points out, they&apos;re often packed with
          onomatopoeia, baby talk and wordplay aimed at three-year-olds, and they&apos;re boring for adults. Manga and graded
          readers are usually a better use of the same time.
        </p>
      </GuideSection>

      <GuideSection id="podcasts" title="Podcasts and YouTube">
        <p>
          Video and audio you can fit around a day: on the commute, over lunch, while cooking. The best advice for all of it comes
          from <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext>: <strong>follow one person a lot</strong>{" "}
          rather than sampling many. Each speaker has their own pace, accent and favourite words, and once you&apos;re used to
          them you can listen for meaning instead of fighting to parse. Going from a forty-year-old office worker to a
          twenty-year-old student is a real adjustment.
        </p>
        <H3>For learners, in Japanese</H3>
        <p>Made for learners but spoken in Japanese: the bridge between textbooks and native content.</p>
        <Table
          head={["Channel", "Level", "Why this one"]}
          rows={[
            [
              <Ext key="c" href="https://www.youtube.com/@nijapanese">Natural Japanese</Ext>,
              "Complete beginner and up",
              "Formerly Comprehensible Japanese. Drawings, gestures and props carry the meaning, so it works from week one. Over 1,500 videos, searchable by level on its site.",
            ],
            [
              <Ext key="t" href="https://nihongoconteppei.com/">Nihongo con Teppei</Ext>,
              "Beginner, then intermediate",
              "Short podcast episodes on everyday topics. The beginner series repeats a lot on purpose; Teppei is a language learner himself and knows which words will trip you up. Free.",
            ],
            [
              <Ext key="s" href="https://www.youtube.com/@JapanesewithShun">Japanese with Shun</Ext>,
              "N5–N3",
              "Vlogs, interviews and travel in clear Japanese, mostly with the grammar from Genki I and II. Real places, not a studio.",
            ],
            [
              <Ext key="n" href="https://www.japanesewithnoriko.com/">Learn Japanese with Noriko</Ext>,
              "Upper beginner and up",
              "Short episodes on daily-life topics, with free transcripts. Good for reading along while you listen.",
            ],
            [
              <Ext key="y" href="https://www.youtube.com/@yuyunihongopodcast">YUYUの日本語Podcast</Ext>,
              "Intermediate",
              "Longer talks for learners about culture, daily life and language, at a pace closer to natural speech. A step towards native podcasts.",
            ],
            [
              <Ext key="m" href="https://www.youtube.com/@MikuRealJapanese">Miku Real Japanese</Ext>,
              "Intermediate",
              "A Japanese teacher's podcast in natural Japanese about life and culture. Real conversational speed, but clear.",
            ],
          ]}
        />
        <H3>Japanese explained in English</H3>
        <p>
          Not immersion, but useful when something won&apos;t click. Treat these like a grammar guide: look things up, then go
          back to Japanese.
        </p>
        <Table
          head={["Channel", "Good for", "Why this one"]}
          rows={[
            [
              <Ext key="a" href="https://www.youtube.com/@TokiniAndy">ToKini Andy</Ext>,
              "Grammar, textbook learners",
              "Lessons that follow the Genki and Quartet textbooks chapter by chapter. The one to have open alongside a textbook.",
            ],
            [
              <Ext key="g" href="https://www.youtube.com/@GameGengo">Game Gengo</Ext>,
              "Grammar in context",
              "Breaks down real lines from Japanese games and explains the grammar in them. Great if games are why you're learning.",
            ],
            [
              <Ext key="k" href="https://www.youtube.com/@kanamenaito">Kaname Naito</Ext>,
              "Nuance, natural phrasing",
              "Explains the difference between near-synonyms and what natives actually say. Best from the intermediate stage.",
            ],
            [
              <Ext key="d" href="https://www.youtube.com/@Dogen">Dogen</Ext>,
              "Pronunciation, pitch accent",
              "The best-known pitch accent teacher; free videos on YouTube, the full phonetics course on Patreon (paid). See pitch accent.",
            ],
            [
              <Ext key="u" href="https://www.youtube.com/@ThatJapaneseManYuta">That Japanese Man Yuta</Ext>,
              "How people really talk",
              "Street interviews with ordinary people and explanations of casual speech, with Japanese and English subtitles.",
            ],
          ]}
        />
        <H3>Native YouTube, roughly easiest first</H3>
        <p>
          Made for Japanese viewers. These aren&apos;t measured the way the lists below are; the order is a judgement. Most
          Japanese YouTubers put big captions (テロップ) on screen for their key lines, which makes them far easier to follow than
          TV drama.
        </p>
        <Table
          head={["Channel", "What it is", "Why this one"]}
          rows={[
            [
              <Ext key="r" href="https://www.youtube.com/@ryuji825">料理研究家リュウジのバズレシピ</Ext>,
              "Cooking",
              "You watch what he's doing while he says it, so every verb and ingredient comes with a picture. Casual, friendly speech.",
            ],
            [
              <Ext key="h" href="https://www.youtube.com/@HikakinTV">HikakinTV</Ext>,
              "Reviews, challenges",
              "One of Japan's biggest YouTubers. Clear, energetic and family-friendly, with captions for almost everything.",
            ],
            [
              <Ext key="f" href="https://www.youtube.com/@Fischers">Fischer&apos;s</Ext>,
              "Group challenges",
              "Six friends doing challenges and outdoor games, made with a young audience in mind. Simple language, lots of action.",
            ],
            [
              <Ext key="j" href="https://www.youtube.com/@hajimesyacho">はじめしゃちょー</Ext>,
              "Experiments, pranks",
              "Big, visual experiments with heavy captions. Easy to follow even when you miss words.",
            ],
            [
              <Ext key="ko" href="https://www.youtube.com/@InugamiKorone">戌神ころね</Ext>,
              "VTuber, game streams",
              "Hours of casual talk over games; one voice to get used to. Fan clip channels (切り抜き) cut streams into short, captioned highlights, which are much easier to start with.",
            ],
            [
              <Ext key="p" href="https://www.youtube.com/@UsadaPekora">兎田ぺこら</Ext>,
              "VTuber, game streams",
              "Same idea. She ends sentences with ぺこ as a character quirk: fun to hear, not something to copy (see role language).",
            ],
            [
              <Ext key="q" href="https://www.youtube.com/@QuizKnock">QuizKnock</Ext>,
              "Quizzes, puzzles",
              "A group of quiz players making knowledge entertainment. Lots of on-screen text and a wide vocabulary; intermediate and up.",
            ],
            [
              <Ext key="l" href="https://www.youtube.com/@yurugengo">ゆる言語学ラジオ</Ext>,
              "Linguistics talk",
              "Two friends talking about language, light-hearted and very popular. No visuals to lean on, so it's a listening test.",
            ],
            [
              <Ext key="to" href="https://www.youtube.com/@tokaionair">東海オンエア</Ext>,
              "Group variety",
              "Six friends and fast, overlapping banter. A real upper-intermediate listening challenge.",
            ],
            [
              <Ext key="an" href="https://www.youtube.com/@annnewsCH">ANNnewsCH</Ext>,
              "TV news",
              "TV Asahi's news channel: standard, carefully pronounced Japanese and news vocabulary. Short clips; advanced.",
            ],
          ]}
        />
        <List>
          <li>
            <strong>Let&apos;s plays</strong> are worth seeking out in whatever game you like: gamers narrate what they&apos;re
            doing, so the screen tells you what the words mean.
          </li>
          <li>
            <strong>COTEN RADIO</strong> (history) is another well-loved native podcast for intermediate listeners.
          </li>
          <li>
            Turn on Japanese captions where they exist, and use <In href="/guide/immersion#tools">the tools chapter</In>&apos;s
            setup to look words up in YouTube subtitles.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="anime" title="Anime and films">
        <p>
          Watch with Japanese subtitles (see <In href="/guide/immersion#subtitles">subtitles</In>). Slice of life is the easiest
          genre by far, which is why it dominates the top of this list: people drinking tea and talking about their day is,
          it turns out, exactly the Japanese you need.
        </p>
        <MediaTable items={GUIDE_ANIME} />
        <H3>Films</H3>
        <p>
          A film is two hours of complete story, which makes it a satisfying first finish. Studio Ghibli films are among the
          easiest, and you may already know them in English.
        </p>
        <MediaTable items={GUIDE_FILMS} />
        <p>
          Popular doesn&apos;t mean easy: Kaguya-sama and Steins;Gate are community favourites but score among the hardest here
          (Kaguya&apos;s narrator talks like a sports commentator on espresso), while quiet shows like Polar Bear Café and Non Non
          Biyori score among the easiest.
        </p>
      </GuideSection>

      <GuideSection id="manga" title="Manga">
        <p>
          Pictures carry the story, so manga needs far less vocabulary than a novel. Most of it is dialogue, which means lots of
          casual speech and slang, and furigana is common in manga for younger readers. morg&apos;s top pick for a
          beginner&apos;s first real reading, and ours too. Read it with{" "}
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
          Club and many immersion learners swear by them because you can read for hours without the fatigue of a plain novel,
          and the voice actors do half the work of explaining what a line means. Set
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
          Games are reading with a reason to understand: if you don&apos;t get what the old man said, you don&apos;t get the
          sword. RPGs and adventure games are text-heavy; Animal Crossing is endless low-stakes conversation with a raccoon who
          wants your money. One surprise in the data: older games written only in kana score as harder than they look.
          Without kanji there are no visual cues for where words begin and end, so Pokémon Red, with one kanji in the whole game,
          scores harder than Pokémon Sword.
        </p>
        <MediaTable items={GUIDE_GAMES} />
        <p>Newer Pokémon games, and some others, let you choose kana-only or kanji text; pick kanji as soon as you can.</p>
      </GuideSection>

      <GuideSection id="books" title="Books">
        <p>
          Novels are the hardest medium to start with and the most rewarding once you can: nothing builds vocabulary faster, and
          the first time you finish one is a genuinely great day.
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
