import { ADVANCED_MEDIA } from "@/lib/guide-media";
import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";
import { LevelRecommendations } from "@/components/guide/media-table";
import { Scene } from "@/components/guide/anime-art";

export const metadata = chapterMetadata("advanced");

function J({ children }: { children: string }) {
  return (
    <span lang="ja" className="whitespace-nowrap">
      {children}
    </span>
  );
}

export default function AdvancedChapter() {
  return (
    <ChapterShell
      slug="advanced"
      art={{
        name: "bungo",
        caption: "In Bungo Stray Dogs, Dazai, Akutagawa and Mori Ōgai fight with superpowers named after their own books. In this chapter they just have the books, and you can read them.",
      }}
    >
      <GuideSection id="where-you-are" title="What advanced means">
        <p>
          Advanced isn&apos;t a finish line. An advanced learner can do almost anything with some preparation, and many things
          on the spot: read a novel for pleasure, follow a heated group discussion, handle a work meeting. What&apos;s left is the
          long tail that native speakers also spend their lives on: literary style, formal writing, specialist fields, the
          history buried in the language. The final boss has no health bar; it&apos;s just more interesting bosses.
        </p>
        <p>
          It&apos;s also worth asking whether you need it.{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>{" "}
          compares proficiency to housing: beginner is a foundation, intermediate a house, advanced a mansion. Very few people
          need the mansion to do what they want in Japanese. If you do, for work, study or love of the language, this chapter is
          a map of what&apos;s left. If not, the house is a fine place to live, and it keeps growing as long as you keep reading
          and listening.
        </p>
      </GuideSection>

      <GuideSection id="literature" title="Literature">
        <p>
          Modern novels are readable at upper-intermediate level. Literature, especially from before the war, is a different
          step: older vocabulary and kanji, older spellings, longer sentences and denser style.
        </p>
        <List>
          <li>
            <strong><Ext href="https://www.aozora.gr.jp/">Aozora Bunko</Ext></strong> has thousands of out-of-copyright works
            free online, including Natsume Sōseki, Akutagawa Ryūnosuke, Dazai Osamu, Mori Ōgai and Miyazawa Kenji. Short stories
            are the way in: Akutagawa&apos;s 羅生門, Dazai&apos;s 走れメロス and Sōseki&apos;s 夢十夜 are each short enough to read
            slowly and more than once.
          </li>
          <li>
            <strong>Old spellings.</strong> Some editions keep pre-war kana spelling (歴史的仮名遣い), such as いふ for いう and
            ゐ, ゑ for い, え. They&apos;re read as modern Japanese; you just need to recognise them.
          </li>
          <li>
            <strong>Post-war and contemporary literature</strong>, from Mishima and Kawabata to prize-winners today, sits in
            between: modern grammar, literary style.
          </li>
        </List>
        <p>
          <em>A Year to Learn Japanese</em>&apos;s reading ladder puts Meiji-era short stories after modern short stories and
          before full novels: short enough to reread until they make sense, and a step up that makes everything after it feel
          easier.
        </p>
      </GuideSection>

      <GuideSection id="news" title="News and non-fiction">
        <List>
          <li>
            <strong>News articles</strong> use a compressed, kanji-heavy written style: headlines drop particles and verbs, and
            Sino-Japanese compounds replace everyday words. <Ext href="https://www3.nhk.or.jp/news/">NHK News</Ext> is the
            standard starting point, and its <em>Easy</em> version is a useful crib for the same stories.
          </li>
          <li>
            <strong>Editorials and columns</strong> (社説, and columns like the Asahi&apos;s 天声人語) argue a position in formal,
            allusive prose; they&apos;re a classic exercise for advanced readers in Japan too.
          </li>
          <li>
            <strong>新書</strong>, short non-fiction paperbacks on a single topic, are the best way into explanatory and
            academic Japanese: history, science, economics, psychology, written for a general reader.
          </li>
          <li>
            <strong>Specialist fields.</strong> Whatever you work in has its own vocabulary. Anki earns its place again here: a
            focused deck for your field, the way <em>A Year to Learn Japanese</em>&apos;s author crammed psychology terms for a
            university course taught in Japanese.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="keigo" title="Keigo you can use">
        <p>
          Understanding keigo comes from exposure; producing it correctly, under pressure, takes deliberate practice. The{" "}
          <In href="/guide/natural-japanese#keigo">sounding natural chapter</In> introduces the three kinds. For work, add:
        </p>
        <Table
          head={["Expression", "Use"]}
          rows={[
            [<J key="1">お世話になっております</J>, "The standard opening of a business email or call to someone outside your company."],
            [<J key="2">恐れ入りますが</J>, "A polite lead-in to a request or an interruption."],
            [<J key="3">〜させていただきます</J>, "\"I'll (humbly) do …\". Correct, but overused; stacking it on everything sounds odd to many people."],
            [<J key="4">承知しました / かしこまりました</J>, "\"Understood\" to a superior or customer, instead of 了解です."],
          ]}
        />
        <List>
          <li>
            <strong>Watch for double keigo.</strong> Stacking two respectful forms (おっしゃられる instead of おっしゃる) is a common
            mistake even among native speakers.
          </li>
          <li>
            <strong>In-group and out-group.</strong> You use respectful language about your boss inside your company, but humble
            language about the same boss when speaking to a customer, because to an outsider your company is &ldquo;us&rdquo;.
          </li>
          <li>
            <strong>Learn from models.</strong> Business Japanese is formulaic: collect real emails and phrases, and adapt them.
            Workplace dramas like 半沢直樹 show keigo under pressure.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="writing" title="Formal writing">
        <p>
          Written Japanese has styles speech never uses. Essays, reports and newspapers are written in the plain{" "}
          <strong>である調</strong> (これは問題である) rather than です/ます; academic and business writing favour Sino-Japanese
          vocabulary (実施する rather than やる, 困難 rather than 難しいこと) and connectives like したがって, 一方で and すなわち.
        </p>
        <List>
          <li>Read the kind of writing you want to produce, and imitate its structure before its vocabulary.</li>
          <li>Get corrections from someone who writes that style professionally; everyday tutors often don&apos;t.</li>
          <li>
            Handwriting for formal documents is rare now, but if you need it, the <In href="/guide/kanji#writing">kanji
            chapter</In> covers learning to write.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="idioms" title="Idioms and set expressions">
        <p>
          Educated Japanese leans on fixed expressions that textbooks barely touch. Three families to know:
        </p>
        <Table
          head={["Type", "Examples"]}
          rows={[
            [
              "四字熟語 (four-character compounds)",
              <>
                <J key="1">一石二鳥</J> (two birds with one stone), <J key="2">一期一会</J> (a once-in-a-lifetime meeting),{" "}
                <J key="3">試行錯誤</J> (trial and error)
              </>,
            ],
            [
              "慣用句 (idioms)",
              <>
                <J key="4">顔が広い</J> (to know a lot of people), <J key="5">猫の手も借りたい</J> (so busy you&apos;d take help from a
                cat)
              </>,
            ],
            [
              "ことわざ (proverbs)",
              <>
                <J key="6">猿も木から落ちる</J> (even monkeys fall from trees), <J key="7">石の上にも三年</J> (perseverance pays off)
              </>,
            ],
          ]}
        />
        <p>
          They turn up in speeches, headlines, novels and anime titles. Mine them when you meet them; Donkuri&apos;s resource list
          includes a 四字熟語 deck for people who like to be thorough.
        </p>
      </GuideSection>

      <GuideSection id="dialects" title="Dialects">
        <p>
          Standard Japanese (標準語) is based on Tokyo speech, and it&apos;s what media and schools use. But regional speech is
          alive, especially among older people and in the regions: Kansai (see the{" "}
          <In href="/guide/natural-japanese#kansai">sounding natural</In> chapter), Hakata and other Kyūshū dialects, Tōhoku
          dialects that even other Japanese speakers find hard, and the Ryukyuan languages of Okinawa, which linguists treat as
          separate languages. Anime and dramas use dialect to place characters, so listening to it becomes necessary; speaking it
          is optional, and usually best left to people who live there.
        </p>
        <p>
          IMABI, whose lessons run up to advanced grammar, also has an Okinawan section for the curious.
        </p>
      </GuideSection>

      <GuideSection id="classical" title="Classical Japanese">
        <p>
          Classical Japanese (古文, written Japanese before modern reforms) is taught in Japanese high schools, and pieces of it
          survive everywhere: proverbs, song lyrics, formal signs, fantasy dialogue, and set forms like 〜べし (should), 〜ず and 〜ぬ
          (negatives), 〜なり (is). You don&apos;t need to read the Tale of Genji, but recognising these makes a lot of
          &ldquo;weird grammar&rdquo; suddenly obvious.
        </p>
        <Scene name="chihayafuru" title="Classical poetry as a contact sport">
          <p>
            <em>Chihayafuru</em> is about competitive karuta, a card game built on the <em>Hyakunin Isshu</em>, a hundred
            classical poems, some of them over 1,300 years old, collected in the 13th century. Top players know all hundred by heart and slap the right card
            before the reader finishes the first syllables. You don&apos;t need to go that far, but it&apos;s the most exciting way
            there is to hear what classical Japanese sounds like.
          </p>
        </Scene>
        <List>
          <li>
            <Ext href="https://imabi.org/">IMABI</Ext> has a full Classical Japanese course alongside its modern lessons.
          </li>
          <li>
            Japanese school YouTube channels teach 古文 as Japanese students learn it; TheMoeWay&apos;s resource list links a
            playlist.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="linguistics" title="Going deeper: linguistics and language history">
        <p>
          At some point &ldquo;how do I say this?&rdquo; turns into &ldquo;why is it like this?&rdquo; Why does 日曜日 read 日 two
          ways, why does は sound like <em>wa</em>, why do 人々 (ひとびと) and 時々 (ときどき) change their second sound? That&apos;s linguistics, and
          Japanese is a famously fun language to ask it about. None of this is needed to get good at Japanese; all of it makes
          Japanese more interesting.
        </p>
        <H3>Linguistics in general</H3>
        <List>
          <li>
            <Ext href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtP5mp25nStsuDzk2blncJDW">Crash Course Linguistics</Ext>:
            sixteen short episodes on sounds, grammar, meaning and how languages change. The quickest overview there is.
          </li>
          <li>
            <Ext href="https://lingthusiasm.com/">Lingthusiasm</Ext>: a podcast of two linguists being extremely enthusiastic
            about language. Accurate, friendly and fun.
          </li>
          <li>
            <Ext href="https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/">Essentials of Linguistics</Ext>: a free
            open textbook, if you want the structured university-intro version.
          </li>
          <li>
            <Ext href="https://www.youtube.com/@NativLang">NativLang</Ext> and{" "}
            <Ext href="https://www.youtube.com/@Langfocus">Langfocus</Ext>: animated language history and &ldquo;how this
            language works&rdquo; videos, including Japanese and the Japonic family.
          </li>
          <li>
            <Ext href="https://wals.info/">WALS</Ext> and <Ext href="https://glottolog.org/">Glottolog</Ext>: databases of how
            the world&apos;s languages differ and how they&apos;re related. Dangerous to open late at night.
          </li>
        </List>
        <H3>Japanese linguistics and history</H3>
        <List>
          <li>
            <Ext href="https://yurugengo.com/">ゆる言語学ラジオ</Ext>: two friends chatting about linguistics in Japanese. Linguistics
            and listening practice at the same time.
          </li>
          <li>
            <Ext href="https://www.ninjal.ac.jp/english/">NINJAL</Ext>, Japan&apos;s national language research institute, makes
            its research tools free: OJAD for pitch accent, the{" "}
            <Ext href="https://ccd.ninjal.ac.jp/chj/">Corpus of Historical Japanese</Ext> (real texts from Old Japanese to the
            Meiji era, searchable) and the <Ext href="https://oncoj.ninjal.ac.jp/">Oxford-NINJAL Corpus of Old Japanese</Ext>,
            with the 8th-century poems and texts glossed word by word.
          </li>
          <li>
            <Ext href="https://imabi.org/">IMABI</Ext> explains the history behind many modern forms alongside its Classical
            Japanese lessons.
          </li>
          <li>
            <Ext href="https://japanese.stackexchange.com/">Japanese Stack Exchange</Ext> is the best free place for &ldquo;why is
            it like this?&rdquo; questions: rendaku, sound changes, where a word came from. Good answers cite their sources.
          </li>
          <li>
            Wikipedia is unusually strong here: the articles on Japanese phonology, Old Japanese, Early Middle Japanese, the
            Japonic languages and rendaku are well referenced and a good way in.
          </li>
        </List>
        <H3>Books worth buying</H3>
        <Table
          head={["Book", "What it's for"]}
          rows={[
            ["Natsuko Tsujimura, An Introduction to Japanese Linguistics", "The standard textbook: sounds, words, grammar, meaning and variation."],
            ["Masayoshi Shibatani, The Languages of Japan", "Japanese and Ainu, with a lot of history. Older, still a classic."],
            ["Bjarke Frellesvig, A History of the Japanese Language", "The modern standard on how Old Japanese became today's Japanese."],
            ["Haruhiko Kindaichi, The Japanese Language", "A readable classic for a general audience, by one of Japan's best-known linguists."],
            [<span key="y" lang="ja">山口仲美『日本語の歴史』（岩波新書）</span>, "A short, lively history of Japanese, written for Japanese readers. Doubles as advanced reading practice."],
            [<span key="k" lang="ja">金水敏『ヴァーチャル日本語 役割語の謎』</span>, "The book that named role language (役割語): why anime professors say じゃ and ojōsama say ですわ."],
          ]}
        />
        <Callout title="Careful with etymology sites" tone="warn">
          <p>
            Popular etymology sites such as 語源由来辞典 mix real history with folk etymology, and a good story spreads faster than
            a true one. For anything that matters, check it against Japanese Stack Exchange or a proper dictionary; 日本国語大辞典
            is the authority.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="tests" title="Tests and credentials">
        <Table
          head={["Test", "What it shows"]}
          rows={[
            [
              <Ext key="j" href="https://www.jlpt.jp/e/">JLPT N1</Ext>,
              "The top level of the standard test: reading and listening, no speaking or writing. Asked for by employers and universities.",
            ],
            [
              "BJT Business Japanese Proficiency Test",
              "Business communication, scored 0–800 in levels J5 to J1+. Computer-based; run by the Japan Kanji Aptitude Testing Foundation since 2009.",
            ],
            [
              <Ext key="k" href="https://www.kanken.or.jp/">漢字検定 (Kanji Kentei)</Ext>,
              "Japan's kanji test for native speakers, levels 10 to 1. Level 2 covers all 2,136 jōyō kanji; level 1 about 6,000, with a pass rate under 10%.",
            ],
          ]}
        />
        <Callout title="Tests aren't the goal">
          <p>
            Passing N1 means you can read and listen at a high level; it says nothing about speaking or writing, and plenty of
            people who have passed it can&apos;t hold a comfortable conversation. Take the test if you need the paper, and keep
            measuring yourself by what you can actually do.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="recommendations" title="The hardest popular media">
        <p>
          The top of Jiten.moe&apos;s scale among well-known titles: shows and books that native speakers also find demanding.
          The Sōseki and Dazai here are free on Aozora Bunko.
        </p>
        <LevelRecommendations media={ADVANCED_MEDIA} />
        <H3>After this</H3>
        <p>
          There&apos;s no next chapter, only more Japanese. Keep a backlog of things you&apos;re excited about, keep logging your
          hours, and every so often reread something that once defeated you. That&apos;s the best measure of how far you&apos;ve
          come.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
