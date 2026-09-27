import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { ImageCredits, KanjiAnatomyDiagram, Photo } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("kanji");

export default function KanjiChapter() {
  return (
    <ChapterShell slug="kanji">
      <GuideSection id="how-kanji-work" title="How kanji work">
        <p>
          There are <strong>2,136 jōyō kanji</strong>, the official list for general use last revised in 2010, and Japanese
          children learn 1,026 of them in primary school. That number scares many learners into months of kanji study before
          reading anything. It helps to know how kanji are put together, because they&apos;re far less arbitrary than they look.
        </p>
        <KanjiAnatomyDiagram />
        <List>
          <li>
            <strong>Most kanji are built from parts.</strong> A few hundred components (often called radicals) recur across
            thousands of characters. Once 亻 means &ldquo;person&rdquo; to you, 休, 体, 住 and 使 stop being random squiggles.
          </li>
          <li>
            <strong>Most kanji hint at their sound.</strong> The largest group are phono-semantic compounds: one part suggests the
            meaning, another the on&apos;yomi. 青 (sei) appears in 清, 晴, 精 and 請, all read <em>sei</em>. The hint isn&apos;t
            reliable, but it&apos;s right often enough to help.
          </li>
          <li>
            <strong>Words, not characters, carry meaning.</strong> 大家 is &ldquo;big&rdquo; plus &ldquo;house&rdquo; but means
            landlord (in the <em>ōya</em> reading). Kanji hint; the word decides.
          </li>
        </List>
        <Photo
          src="/guide/kanji-drill.webp"
          alt="A child writing kanji in a practice drill book"
          width={1200}
          height={900}
          caption="Japanese children work through kanji drill books for years at school. You don't have to: as a reader you need to recognise kanji, not produce them. Photo: Tatsuo Yamashita, CC BY 2.0."
        />
      </GuideSection>

      <GuideSection id="readings" title="Readings">
        <p>
          Most kanji have two kinds of reading, because Japanese borrowed characters from Chinese and kept both the borrowed
          pronunciation and its own native word:
        </p>
        <List>
          <li>
            <strong>On&apos;yomi</strong> come from Chinese pronunciations and appear mostly in compounds of two or more kanji:
            先生 (<em>sensei</em>), 学生 (<em>gakusei</em>).
          </li>
          <li>
            <strong>Kun&apos;yomi</strong> are native Japanese words attached to the character, often with hiragana endings called{" "}
            <strong>okurigana</strong>: 生きる (<em>ikiru</em>), 見る (<em>miru</em>), 赤い (<em>akai</em>).
          </li>
          <li>
            <strong>Rule of thumb:</strong> kanji followed by hiragana usually takes the kun&apos;yomi; kanji stuck together
            usually take on&apos;yomi. There are plenty of exceptions: 日曜日 is <em>nichi-yō-bi</em>, with 日 read two ways in one
            word, and 今日 (<em>kyō</em>, today) ignores its characters&apos; usual readings altogether.
          </li>
        </List>
        <p>
          That&apos;s why memorising a kanji&apos;s list of readings on its own is close to useless: 生 has a dozen, and knowing
          them doesn&apos;t tell you which one a word uses. <strong>Learn readings through words.</strong> Kaishi teaches 先生 and
          生きる as words, and the readings come with them.
        </p>
        <Photo
          src="/guide/furigana.webp"
          alt="The word furigana written in kanji, 振り仮名, with its reading in small hiragana above each kanji"
          width={900}
          height={420}
          className="mx-auto max-w-md"
          caption="Furigana: small kana over kanji giving the reading. Common in manga for younger readers, children's books and many visual novels, and a big help early on. Image: public domain."
        />
      </GuideSection>

      <GuideSection id="routes" title="Three routes through the kanji">
        <p>
          Learners argue endlessly about this, and people have succeeded with every approach. <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext>{" "}
          sorts them into three routes, which is a useful way to choose:
        </p>
        <Table
          head={["Route", "What you do", "Trade-off"]}
          rows={[
            [
              "Through vocabulary",
              "No separate kanji study. Learn words with a deck like Kaishi, then read with a pop-up dictionary; kanji come with the words.",
              "Least overhead and nothing wasted. Similar-looking kanji blur for a while, and you lean on the dictionary early on.",
            ],
            [
              "A short component course",
              "A few hundred of the most common kanji and building blocks by meaning, alongside vocabulary. RRTK450, a recognition-only cut of Remembering the Kanji, is the usual pick; TheMoeWay's 30-day routine adds it at 10 cards a day.",
              "A few weeks of work makes new kanji much easier to tell apart and remember. You still learn readings through words.",
            ],
            [
              "A full system",
              "Work through 2,000–3,000 kanji in a fixed order: Remembering the Kanji (keywords and stories, meaning first), the Kodansha Kanji Learner's Course (meanings with readings and vocabulary), or WaniKani (a paid app with kanji and about 6,000 words).",
              "Everything is planned for you and kanji stop being scary. It's months of work before reading, and the rarer kanji fade if you don't then read a lot.",
            ],
          ]}
        />
        <p>
          The immersion guides (TheMoeWay, VN Club, Donkuri) all lean towards the first route, with the second for people who
          find kanji blurring together. Tofugu, which makes WaniKani, recommends the third. If you&apos;re unsure, start with the
          first and add RRTK450 if you notice you can&apos;t tell 待 from 持 after a few weeks.
        </p>
        <Callout title="One learner's warning">
          <p>
            The author of <em>A Year to Learn Japanese</em> did all of Remembering the Kanji in a few months, writing every
            character by hand, then spent six months away from Japanese and found most of it gone. Their conclusion after about
            1,000 hours on kanji: flashcards are excellent at the start but fade without reading, and the time would have gone
            further spent in actual Japanese. Whatever route you pick, reading is what makes kanji stay.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="frequency" title="Not all kanji are equal">
        <p>
          A full novel uses fewer different kanji than the jōyō list, and a handful of them do most of the work. By Jiten.moe&apos;s
          counts, the Japanese Harry Potter and the Philosopher&apos;s Stone uses 1,596 different kanji, Norwegian Wood 1,767, and
          all of Yotsuba&amp;! 1,204. Most of those appear only a few times. That&apos;s why reading with a dictionary works:
          the common kanji become familiar through repetition, and the rare ones get looked up when they matter.
        </p>
        <p>
          Kanji also get easier the more you know. After the first few hundred, new ones are mostly familiar parts in new
          arrangements, and you start guessing readings from their phonetic parts. Japanese front-loads the effort: it&apos;s hard
          at the start and steadily easier after.
        </p>
      </GuideSection>

      <GuideSection id="writing" title="Writing by hand">
        <p>
          Reading needs recognition; writing needs recall, which is much harder. Most Japanese adults type far more than they
          write, and even native speakers forget how to write characters they read every day. So for most learners, handwriting
          can wait.
        </p>
        <List>
          <li>
            If you want to write, learn the basics of stroke order first (top to bottom, left to right, horizontal before
            vertical); it makes characters easier to write and to recognise.
          </li>
          <li>
            Once you can already read a lot, TheMoeWay and Donkuri both recommend the <strong>Kanken deck</strong> for learning to
            write, built around Japan&apos;s kanji proficiency test.
          </li>
          <li>
            For practice and feedback, the weekly <em>Tegaki Tuesday</em> handwriting challenge is a friendly community habit.
          </li>
        </List>
        <p>
          The <In href="/guide/speaking#writing">speaking and writing chapter</In> covers writing sentences, which is a different
          skill from writing characters.
        </p>
      </GuideSection>

      <p className="text-meta text-dim">
        Sources for this chapter include{" "}
        <Ext href="https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji">Wikipedia on the jōyō kanji</Ext>,{" "}
        <Ext href="https://en.wikipedia.org/wiki/Kanji">Wikipedia on kanji</Ext>, TheMoeWay&apos;s resource list, Tofugu&apos;s
        guide and <em>A Year to Learn Japanese</em>.
      </p>

      <ImageCredits srcs={["/guide/kanji-drill.webp", "/guide/furigana.webp"]} />
    </ChapterShell>
  );
}
