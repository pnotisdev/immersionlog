import { A_YEAR_TO_LEARN_JAPANESE, MORG } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { ImageCredits, Photo, SweetSpotDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("immersion");

/** The same sentence with different kinds of words blanked out, to show which ones carry the story. */
function GuessingDemo() {
  const rows = [
    { know: "Only the grammar words", line: "The glorp frimbled the wug and zanned out of the plonk.", verdict: "No idea what happened." },
    { know: "Nouns and verbs, not the rest", line: "The cat snatched the fish and ran out of the kitchen, very blimsily.", verdict: "You've got the story. Who cares how blimsily." },
    { know: "Everything but one verb", line: "The cat zanned the fish and ran out of the kitchen.", verdict: "Zanned = took, stole, grabbed. You just learned a word from context." },
  ];
  return (
    <figure className="my-2 overflow-hidden rounded-lg border border-border bg-surface">
      <ol className="divide-y divide-border">
        {rows.map((r) => (
          <li key={r.know} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
            <span className="text-meta text-dim">{r.know}</span>
            <span>
              <span className="font-medium">&ldquo;{r.line}&rdquo;</span>
              <span className="mt-0.5 block text-sm text-muted-foreground">{r.verdict}</span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="border-t border-border px-4 py-2.5 text-meta text-dim">
        Nouns and verbs carry the story; adjectives and adverbs decorate it. Idea from morg&apos;s &ldquo;The science of letting go&rdquo;.
      </figcaption>
    </figure>
  );
}

export default function ImmersionChapter() {
  return (
    <ChapterShell
      slug="immersion"
      art={{
        name: "yuru-camp",
        caption: "Immersion done right looks a lot like Laid-Back Camp: find a comfy spot, settle in, stay for hours. Nobody at the campsite is doing flashcards.",
      }}
    >
      <GuideSection id="input" title="Comprehensible input, without the hype">
        <p>
          <strong>Comprehensible input</strong> is language you can mostly understand, just a little above your level. The term
          comes from linguist Stephen Krashen&apos;s input hypothesis, first proposed in 1977: we acquire a language by
          understanding messages in it, moving from our current level (<em>i</em>) to the next (<em>i+1</em>) through input
          that&apos;s slightly beyond us.
        </p>
        <p>
          It&apos;s fair to say the theory is contested, and some corners of the internet treat it like a religion. Critics point
          out that it&apos;s hard to test; Merrill Swain and others argue that producing language teaches things input alone
          doesn&apos;t; and some researchers think confusing input has value too, because noticing a gap makes you want to fill
          it. But nobody argues that input doesn&apos;t matter. The practical core that every guide here builds on is simple:{" "}
          <strong>lots of Japanese that you understand</strong>, over a long time.
        </p>
        <SweetSpotDiagram />
        <p>
          One way to think about the balance, from{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>
          : input sets your ceiling (what you could understand or say), output sets your floor (what you can actually produce
          smoothly). You need both eventually, but input comes first and does most of the work.
        </p>
      </GuideSection>

      <GuideSection id="when" title="When to start">
        <p>
          Earlier than feels comfortable. The immersion guides say to start in your first week, with kana-level material and
          anime you&apos;ve already seen. Even textbook-based plans suggest checking in with something real every week or so, so
          you notice the day it becomes bearable instead of waiting months past it. There&apos;s no &ldquo;ready&rdquo; moment;
          people who pass N1 without ever opening a manga still find their first one hard.
        </p>
        <p>
          Expect the first page of anything to be miserable. Tofugu calls it{" "}
          <Ext href="https://www.tofugu.com/japanese/language-first-page-syndrome/">first page syndrome</Ext>: the first page of a
          book is the hardest, because every name, word and style quirk is new. By chapter three the same book is noticeably
          easier. How early you can start comes down to two things: how much you mind not understanding, and how patient you are
          with looking things up.
        </p>
        <H3>Active and passive</H3>
        <List>
          <li>
            <strong>Active</strong> means paying full attention and trying to follow: watching with Japanese subtitles, reading
            with a dictionary, listening to a podcast with nothing else going on. This is where the learning clearly happens.
          </li>
          <li>
            <strong>Passive</strong> means Japanese in the background while you do something else. Its value is less clear, but
            it&apos;s free time: commutes, chores, the gym. Replaying audio from shows you&apos;ve already watched works well,
            because you already know what&apos;s being said.
          </li>
        </List>
        <p>
          TheMoeWay suggests an hour or two of active immersion a day to start, about 70% listening and 30% reading at first,
          moving towards half and half as reading gets easier. Donkuri&apos;s simpler rule: always have one thing to read and one
          thing to watch or listen to on the go.
        </p>
      </GuideSection>

      <GuideSection id="ambiguity" title="Letting things go">
        <p>
          Here&apos;s the skill nobody warns you about: <strong>not understanding things, and being fine with it</strong>. Refold
          calls it &ldquo;tolerating the ambiguity&rdquo;, and morg wrote a whole piece on{" "}
          <Ext href={`${MORG}/The-science-of-letting-go`}>the science of letting go</Ext>. For a long time you&apos;ll understand
          part of every sentence. If you stop for every gap, an episode takes four hours and you quit by Thursday.
        </p>
        <p>The trick is knowing which gaps matter. Try it in English with some made-up words:</p>
        <GuessingDemo />
        <List>
          <li>
            <strong>Look up nouns and verbs first.</strong> They carry the plot. An unknown adjective or adverb can usually wait.
          </li>
          <li>
            <strong>Guess, then move on.</strong> A wrong guess costs you nothing; the word will come back, and the next time
            context will correct you. That correction is learning.
          </li>
          <li>
            <strong>Look it up on the third meeting.</strong> A word that keeps coming back is worth the lookup. A word you saw
            once can stay a mystery.
          </li>
          <li>
            <strong>Don&apos;t reach for a translator.</strong> It feels like certainty, but machine translation makes up the
            parts it doesn&apos;t understand. A dictionary, a search, or letting it go are all better. See the{" "}
            <In href="/guide/traps#shortcuts">traps chapter</In>.
          </li>
        </List>
        <p>
          This gets easier with practice, and it&apos;s the thing that separates people who read a hundred books from people who
          read one very carefully.
        </p>
      </GuideSection>

      <GuideSection id="listening" title="Listening">
        <p>
          Listening lags behind reading for a long time; text waits for you and speech doesn&apos;t. When you don&apos;t understand
          something you hear, it helps to know why, because the fixes are different. <em>A Year to Learn Japanese</em> lists six
          reasons:
        </p>
        <Table
          head={["Problem", "What it looks like", "What helps"]}
          rows={[
            ["Sounds", "You can't tell where words start and end.", "Pronunciation basics; listening to things you've read."],
            ["Knowledge", "You hear the words clearly but don't know them.", "More vocabulary: Anki and reading."],
            ["Register", "Casual speech shortens and slurs forms you know (している → してる, ではない → じゃない).", "Anime and conversation; a note of common contractions."],
            ["Speed", "You'd understand it if you had a second longer.", "Re-listening, slower audio, material you know well."],
            ["Context", "You understand the words but not who or what they refer to.", "Following one show or speaker for a long time."],
            ["Attention", "You drifted for a few seconds and lost the thread.", "Shorter sessions at a better time of day."],
          ]}
        />
        <List>
          <li>
            <strong>Stick with one voice.</strong> Following one YouTuber, podcast host or show for weeks is much easier than
            sampling, because you get used to their speed, accent and favourite words.
          </li>
          <li>
            <strong>Rewatch.</strong> An episode you&apos;ve seen twice is a better listening lesson than a new one you half
            followed. Rewatching your favourite show is now homework. You&apos;re welcome.
          </li>
          <li>
            <strong>Condensed audio</strong> cuts the silence out of an episode so only the dialogue is left; half an hour of
            anime becomes ten or fifteen minutes of listening. TheMoeWay&apos;s resource list links ready-made collections and the
            tools to make your own.
          </li>
          <li>
            <strong>Reading helps listening.</strong> Every word you know from reading is one you can catch by ear, and it&apos;s
            easier to diagnose what you missed in text than in speech.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="reading" title="Reading">
        <List>
          <li>
            <strong>Intensive reading</strong> is slow and careful: look up everything, pick sentences apart. It&apos;s how you get
            through your first native texts.
          </li>
          <li>
            <strong>Extensive reading</strong> (多読, <em>tadoku</em>) is reading lots of easier text quickly, for the story, without
            stopping for every word. It builds speed and makes common words automatic.
          </li>
        </List>
        <p>
          Reading research suggests comfortable reading without a dictionary needs about 98% of the words on the page known. You
          won&apos;t be near that for a while, which is why a pop-up dictionary matters so much and why easier material pays off.
          VN Club&apos;s rule of thumb: aim to understand most of what you read <em>with some effort</em>. Not nearly nothing, not
          everything easily.
        </p>
        <H3>Habits that make reading easier</H3>
        <List>
          <li>
            <strong>Drop things that are too hard.</strong> In the time it takes to struggle through one hard book you could
            enjoy two or three easier ones, and improve enough to come back. Dropping a book is not a moral failing.
          </li>
          <li>
            <strong>Expect a bump when you switch medium.</strong> Manga, novels, visual novels and news each have their own
            vocabulary and style; the first of each is harder than your level suggests.
          </li>
          <li>
            <strong>Try pre-reading</strong> for difficult texts: skim a chapter, look up the words that recur, then read it
            properly.
          </li>
          <li>
            <strong>Look up what repeats.</strong> Words you meet three times in a chapter are worth it; one-off words you can
            skip once the sentence makes sense.
          </li>
        </List>
        <Callout title="Tools make kanji a non-issue">
          <p>
            A generation ago, reading a Japanese book meant flipping through a paper dictionary for every unknown kanji. As{" "}
            <Ext href={`${MORG}/Practical-Tips-to-Facilitate-Early-Reading`}>morg</Ext> points out, that&apos;s why older advice
            says to learn thousands of kanji first. With a pop-up dictionary, you hover and move on. The{" "}
            <In href="/guide/immersion#tools">tools</In> below are what make early reading possible.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="narrow" title="Read narrow">
        <p>
          The usual advice is to read widely. For learners, Krashen argued the opposite: <strong>narrow reading</strong>, lots of
          books by one author, or lots of books on one topic, or one long series. morg&apos;s{" "}
          <Ext href={`${MORG}/Optimal-Reading-Immersion---Narrow-Reading`}>write-up of the idea</Ext> is worth reading in full;
          the short version:
        </p>
        <List>
          <li>
            <strong>The first pages are always the hardest.</strong> Krashen noticed that the first few pages of a new author are
            tough going, and the rest of the book goes much easier. Every time you switch author you pay that toll again. Stay put
            and you only pay once.
          </li>
          <li>
            <strong>The same words keep coming back.</strong> One series reuses its characters, places, jargon and favourite
            phrases, so each new word gets dozens of repetitions in context. It&apos;s Anki without Anki.
          </li>
          <li>
            <strong>Context does half the work.</strong> When you already know the world and the people, you can follow scenes
            your vocabulary alone couldn&apos;t.
          </li>
          <li>
            <strong>Easy and fun beats hard and worthy.</strong> Krashen&apos;s advice was to read things so easy and so enjoyable
            that you almost feel guilty. Don&apos;t. Feel smug instead.
          </li>
        </List>
        <p>
          Your interests will widen on their own as reading gets easier. Nobody needs to force themselves onto a new genre in
          month three.
        </p>
        <Scene name="one-piece" title="Narrow reading, maximum edition">
          <p>
            One Piece is about 2.5 million characters of Japanese by one author about the same crew of pirates, which makes it
            the most narrow reading you could ask for. Just maybe not as your first manga: it&apos;s dense, full of made-up words,
            and scores among the harder titles on Jiten.
          </p>
        </Scene>
      </GuideSection>

      <GuideSection id="subtitles" title="Subtitles">
        <p>
          The guides differ in how strict they are. TheMoeWay says Japanese subtitles or none, full stop. Donkuri allows English
          subtitles as long as you&apos;re genuinely listening rather than just reading English. Both agree that an English-subbed
          episode you mostly read is not immersion, no matter how hard you squint at the Japanese audio.
        </p>
        <Table
          head={["Subtitles", "Good for"]}
          rows={[
            ["Japanese", "The default. You read and hear the same words, and a pop-up dictionary works on them."],
            ["None", "Shows you know well, and listening practice once Japanese subtitles become a crutch."],
            ["English", "Watching something for the first time purely to enjoy it. Don't count it as immersion."],
          ]}
        />
        <p>
          TheMoeWay&apos;s 30-day routine starts total beginners with a three-step trick for one episode: watch it with English
          subtitles, then again with no subtitles, then play it in the background. By the third time the Japanese is attached to
          scenes you understand.
        </p>
      </GuideSection>

      <GuideSection id="tools" title="Tools">
        <p>
          One tool matters more than the rest: a <strong>pop-up dictionary</strong>. Hover over a word, press a key, and you get
          its reading and meaning without leaving what you&apos;re reading. The rest of the tools exist to get Japanese text
          somewhere that dictionary can see it.
        </p>
        <H3>Yomitan</H3>
        <List ordered>
          <li>
            Install <Ext href="https://yomitan.wiki/">Yomitan</Ext> for Chrome, Firefox or Edge. It&apos;s the maintained
            successor to Yomichan, which was discontinued (old guides that say &ldquo;Yomichan&rdquo; mean this), and it also
            works in Android browsers that support extensions.
          </li>
          <li>
            In its settings, choose <strong>Get recommended dictionaries</strong>. Install{" "}
            <Ext href="https://jitendex.org/">Jitendex</Ext>, an improved version of the JMdict dictionary for English speakers
            that&apos;s updated monthly, and a frequency dictionary such as JPDB&apos;s, which shows how common each word is.
          </li>
          <li>
            Hold <strong>Shift</strong> and hover over Japanese text. You can change the key, or turn it off, in the settings.
          </li>
          <li>
            Later, add a Japanese-Japanese dictionary and a pitch accent dictionary. Donkuri&apos;s guide recommends ordering them:
            English dictionaries first, then Japanese, kanji, pitch accent and frequency last.
          </li>
        </List>
        <p>
          On phones without extension support, use a dictionary app: <Ext href="https://jisho.org/">Jisho</Ext> in the browser,
          Takoboto or Akebi on Android, Shirabe Jisho on iOS. A physical Kindle is also great for novels: tap a word to look it
          up, and highlight it to mine later.
        </p>
        <H3>By medium</H3>
        <Table
          head={["You want to", "Use"]}
          rows={[
            [
              "Watch anime, drama, YouTube",
              <>
                <Ext href="https://github.com/killergerbah/asbplayer">asbplayer</Ext> shows Japanese subtitles over Netflix,
                YouTube, Crunchyroll or your own files, with a subtitle sidebar, Yomitan lookups and card mining. Subtitle files:{" "}
                <Ext href="https://jimaku.cc/">Jimaku</Ext>. For local files, <Ext href="https://github.com/ripose-jp/Memento">Memento</Ext>{" "}
                is a video player built for lookups.
              </>,
            ],
            [
              "Read manga",
              <>
                <Ext href="https://github.com/kha-white/mokuro">mokuro</Ext> runs text recognition on manga pages so you can hover
                words, and <Ext href="https://reader.mokuro.app/">reader.mokuro.app</Ext> reads the result in a browser. On a phone,
                all-in-one apps with built-in text recognition (TheMoeWay lists several) do the same.
              </>,
            ],
            [
              "Read novels",
              <>
                <Ext href="https://reader.ttsu.app/">ッツ Ebook Reader</Ext> opens EPUBs in the browser with vertical text, Yomitan
                support and a character counter. It&apos;s in maintenance mode but still widely used.
              </>,
            ],
            [
              "Play visual novels and games",
              <>
                A texthooker copies each line of text out of the game:{" "}
                <Ext href="https://github.com/Artikash/Textractor">Textractor</Ext> or{" "}
                <Ext href="https://github.com/HIllya51/LunaTranslator">LunaTranslator</Ext>. Point it at immersionlog&apos;s{" "}
                <In href="/texthooker">texthooker page</In> and each line appears in your browser, ready for Yomitan, with
                characters and reading speed counted. For games a hooker can&apos;t read, OCR tools like{" "}
                <Ext href="https://github.com/AuroraWright/owocr">owocr</Ext> recognise text on screen.
              </>,
            ],
          ]}
        />
        <Photo
          src="/guide/visual-novel.webp"
          alt="A visual novel scene: an empty classroom with a Japanese dialogue box at the bottom"
          width={640}
          height={480}
          className="mx-auto max-w-lg"
          caption="A visual novel: pictures, often voice, and text in a box. A texthooker copies each line out of the game so a pop-up dictionary can read it. Screenshot: 31NOVA, CC0."
        />
        <H3>Finding things at your level</H3>
        <List>
          <li>
            <Ext href="https://jiten.moe/">Jiten.moe</Ext> analyses more than 16,000 anime, novels, visual novels, manga and
            games: difficulty, length and vocabulary, and if you import your Anki or jpdb words, what share of a title you already
            know. It can export a title&apos;s vocabulary as an Anki deck to study before you start.
          </li>
          <li>
            <Ext href="https://learnnatively.com/">Natively</Ext> has community difficulty ratings for books, manga and shows.
          </li>
          <li>
            <Ext href="https://www.immersionkit.com/">Immersion Kit</Ext> and <Ext href="https://massif.la/">Massif</Ext> search
            for example sentences from anime, games and novels, for when a dictionary entry isn&apos;t enough.
          </li>
          <li>
            The <In href="/guide/what-to-watch-and-read">next chapter</In> ranks around sixty beginner-friendly titles by Jiten&apos;s
            difficulty.
          </li>
        </List>
        <Callout title="Don't let setup eat your time" tone="warn">
          <p>
            VN Club&apos;s warning is worth repeating: tools are a means to read, not a hobby. It is very possible to spend a
            whole weekend perfecting an Anki card template and read zero lines of Japanese. Get Yomitan working, pick one thing to
            read or watch, and start. Polish the setup later.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="mining" title="Mining">
        <p>
          Once your starter deck is done, make your own cards from words you meet in what you read and watch. Mined cards stick
          far better than deck cards because you remember the scene. With the{" "}
          <Ext href="https://ankiweb.net/shared/info/2055492159">AnkiConnect</Ext> add-on, Yomitan can create a card with the
          sentence, the word&apos;s audio and its definition in one click, and asbplayer adds a screenshot and the spoken line.
        </p>
        <H3>What to mine</H3>
        <p>VN Club&apos;s test for whether a word is worth a card:</p>
        <List>
          <li>it feels learnable: something clicks when you look it up;</li>
          <li>it&apos;s useful: frequent, or central to what you&apos;re reading;</li>
          <li>it isn&apos;t obscure, archaic, or jargon you won&apos;t meet again (sorry, the full name of every sword technique in Demon Slayer).</li>
        </List>
        <p>
          Skip words you understood from context, and don&apos;t mine everything: your new-cards-per-day limit still applies. A
          frequency dictionary in Yomitan helps you decide at a glance.
        </p>
        <H3>Card setup</H3>
        <p>
          A mining card needs a note type with fields for the word, reading, sentence, definition, audio and picture. Donkuri&apos;s
          and TheMoeWay&apos;s current pick is <Ext href="https://github.com/donkuri/lapis">Lapis</Ext>, a simple note type designed
          to work with Yomitan and the other tools; jp-mining-note is a more feature-rich alternative.{" "}
          <Ext href="https://donkuri.github.io/learn-japanese/mining/">Donkuri&apos;s mining guide</Ext> walks through the whole
          setup.
        </p>
      </GuideSection>

      <ImageCredits srcs={["/guide/visual-novel.webp"]} />
    </ChapterShell>
  );
}
