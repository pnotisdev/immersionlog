import { DAKUTEN, GOJUON, YOON } from "@/lib/kana";
import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { ImageCredits, LengthPairsDiagram, MoraDiagram, Photo } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, KanaChart, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("kana");

export default function KanaChapter() {
  return (
    <ChapterShell
      slug="kana"
      art={{
        name: "bocchi",
        caption: "Bocchi practised guitar alone in her room for three years before anyone heard her. Hiragana takes about a week.",
      }}
    >
      <GuideSection id="kana" title="The two kana scripts">
        <p>
          Japanese is written with two phonetic scripts, <strong>hiragana</strong> and <strong>katakana</strong>, plus kanji.
          Each kana script has <strong>46 basic characters</strong> for the same set of sounds; each character is a syllable (or
          a single vowel, or ん), not a letter. Hiragana carries grammar and native words; katakana is used mostly for loanwords
          (コーヒー, coffee), foreign names, sound effects and SHOUTING. You need both before anything else, and they&apos;re
          much quicker to learn than they look.
        </p>
        <KanaChart rows={GOJUON} caption="The 46 basic kana: hiragana, katakana beside it, romaji under. Columns are the vowels a, i, u, e, o." />
        <p>
          The chart is tidy: each row is a consonant, each column a vowel. The rebels in romaji (shi, chi, tsu, fu) are just how
          those sounds are actually pronounced, which the pronunciation section below covers.
        </p>
      </GuideSection>

      <GuideSection id="how-to-learn" title="How to learn them">
        <List ordered>
          <li>
            <strong>Learn to read, not to write.</strong> Tofugu&apos;s picture mnemonics (
            <Ext href="https://www.tofugu.com/japanese/learn-hiragana/">hiragana</Ext>,{" "}
            <Ext href="https://www.tofugu.com/japanese/learn-katakana/">katakana</Ext>) turn each character into a silly little
            image: き is a key, ぬ is noodles. Many people read all of hiragana after a few days, some after a few hours.
          </li>
          <li>
            <strong>Drill recognition.</strong> immersionlog&apos;s <In href="/tools/kana">kana quiz</In> shows a character and you
            type its sound, one row at a time if you like, and brings back the ones you miss. Start with hiragana only, then add
            the combinations, then katakana.
          </li>
          <li>
            <strong>Then read real kana.</strong> The first levels of the free{" "}
            <Ext href="https://tadoku.org/japanese/en/free-books-en/">Tadoku graded readers</Ext> are written almost entirely in
            kana and have audio. You won&apos;t understand much yet; this is a workout for your eyes, not your brain.
          </li>
          <li>
            <strong>Katakana straight after hiragana.</strong> It&apos;s the same sounds wearing different outfits, and it tends
            to stay slower for longer because you see less of it. That&apos;s normal. Reading menus will fix it.
          </li>
        </List>
        <p>
          How long? Tofugu says a couple of days to a week for hiragana; VN Club says a week at most for both; TheMoeWay allows
          three weeks to a month including reading practice. Take whichever is true for you, but don&apos;t wait for perfect
          recall before moving on. The slow ones become automatic from seeing them thousands of times, not from staring at the
          chart harder.
        </p>
        <Callout title="Recognising is easier than recalling">
          <p>
            You&apos;ll notice you can see が and know it&apos;s <em>ga</em> long before you could write が from memory. That
            isn&apos;t a failure: recognition takes much less effort than recall, and it&apos;s true of everything in a language.
            You&apos;ll always understand more Japanese than you can produce. For reading, recognition is all you need.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="extra-marks" title="Voiced sounds and combinations">
        <p>
          Two small marks change a sound: <strong>dakuten</strong> (゛, two little ticks) voices it, so か ka becomes が ga, and{" "}
          <strong>handakuten</strong> (゜, a little circle) turns the h-row into p, so は ha becomes ぱ pa. That&apos;s 25 new
          sounds for almost no new shapes. Bargain.
        </p>
        <KanaChart rows={DAKUTEN} caption="Voiced and p-sound kana. ぢ and づ sound like じ and ず and are rare." />
        <p>
          A small ゃ, ゅ or ょ after an i-column kana merges into one syllable:{" "}
          <span lang="ja">{YOON.map((y) => `${y.hiragana} ${y.romaji}`).join("、")}</span>. Written full size, きや is two
          syllables (ki-ya); written small, きゃ is one (kya).
        </p>
        <p>
          Katakana has extra combinations for sounds Japanese didn&apos;t originally have, built with small vowels: ティ (ti), ファ
          (fa), ウィ (wi), ヴ (vu). You&apos;ll pick these up from loanwords like パーティー (party) and ファン (fan).
        </p>
      </GuideSection>

      <GuideSection id="quirks" title="Spelling quirks">
        <List>
          <li>
            <strong>Particles keep old spellings.</strong> は is read <em>wa</em>, へ is read <em>e</em> and を is read{" "}
            <em>o</em> when they&apos;re particles. こんにちは ends in は for this reason. Yes, it&apos;s annoying. No, it&apos;s not
            changing.
          </li>
          <li>
            <strong>Long vowels.</strong> In hiragana a long vowel is written with an extra vowel: おかあさん (okāsan). A long o is
            usually written with う (ありがとう, arigatō) and a long e often with い (せんせい, sensei). In katakana a dash does the
            job: コーヒー (kōhī).
          </li>
          <li>
            <strong>Small っ doubles the next consonant.</strong> きって (kitte, stamp) is a different word from きて (kite, come).
            It&apos;s a tiny held pause, one beat long, like the gap in &ldquo;bookcase&rdquo;.
          </li>
          <li>
            <strong>ん is its own beat.</strong> きんえん (kin-en, no smoking) and きねん (ki-nen, commemoration) are different
            words; romaji often uses an apostrophe (kin&apos;en) to show the split.
          </li>
          <li>
            <strong>Look-alikes.</strong> シ and ツ, ソ and ン differ in stroke direction; ぬ/め, ね/れ/わ, る/ろ and さ/ち trip
            everyone up at first. They sort themselves out with reading volume. Until then, blame the font.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="pronunciation" title="Pronunciation">
        <p>
          Japanese pronunciation is kind to English speakers: most of its sounds exist in English, the vowels never change, and
          spelling matches sound almost perfectly. You can be understood with a heavy English accent. But a few minutes on the
          points below now saves years of an accent you&apos;d later want to fix, and, more importantly, helps you{" "}
          <em>hear</em> Japanese correctly. As Refold&apos;s Matt puts it in an interview quoted in{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>
          , you can&apos;t pronounce things more accurately than you can hear them.
        </p>
        <H3>Rhythm: every kana is one beat</H3>
        <MoraDiagram />
        <p>
          The unit of Japanese rhythm is the <em>mora</em>: each kana (plus ん, small っ and the second half of a long vowel)
          gets an equal beat. English squashes unstressed syllables together; Japanese doesn&apos;t. Getting long vowels and
          double consonants the right length matters, because they change words: おばさん (obasan, aunt) and おばあさん
          (obāsan, grandmother) differ only in length. Mix them up and you&apos;ve just aged someone&apos;s aunt by thirty years.
        </p>
        <LengthPairsDiagram />
        <H3>Sounds English speakers get wrong</H3>
        <Table
          head={["Sound", "What to do"]}
          rows={[
            ["Vowels", "Keep them pure and short. English turns 'o' into 'ou' and 'e' into 'ei' without noticing; Japanese お and え stay put."],
            ["う (u)", "Lips relaxed and unrounded, not the pursed 'oo' of 'food'."],
            ["ら行 (r)", "A light tap of the tongue behind the teeth, between English r, l and d. Never the English r of 'red'."],
            ["ふ (fu)", "Blown between both lips, like blowing out a candle; the teeth don't touch the lip as in English 'f'."],
            ["し, ち (shi, chi)", "Softer and further forward than English 'she' and 'cheese'. You'll be understood either way."],
            ["Quiet vowels", "i and u often go nearly silent between voiceless consonants and at the end of です and ます: 'des', 'mas'."],
          ]}
        />
        <p>
          <Ext href="https://www.tofugu.com/japanese/japanese-pronunciation/">Tofugu&apos;s pronunciation guide</Ext> covers
          all of this with audio. Japanese also has pitch accent, a pattern of high and low pitch across each word; it&apos;s
          covered in the <In href="/guide/speaking#pitch-accent">speaking chapter</In>, and you can leave it for later.
        </p>
        <Callout title="Record yourself">
          <p>
            Pick one short line from something you like, record yourself saying it, and compare it with the original. Yes, hearing
            your own voice is horrible. Do it anyway, every week or two. It takes minutes, and it shows you what you&apos;re
            actually doing rather than what you think you&apos;re doing.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="typing-fonts" title="Typing and fonts">
        <H3>Typing Japanese</H3>
        <p>
          Add a Japanese keyboard (IME) in your system settings; every desktop and phone has one built in. You type in romaji
          and the IME turns it into kana as you go, then the space bar offers kanji conversions:
        </p>
        <List>
          <li>
            <code>nihongo</code> becomes にほんご, and space offers 日本語.
          </li>
          <li>
            Type <code>nn</code> for ん when the next letter is a vowel or y (<code>konnnichiha</code> for こんにちは), and double
            a consonant for small っ (<code>kitte</code>).
          </li>
          <li>
            Prefix <code>x</code> or <code>l</code> for a small kana on its own (<code>xtsu</code> → っ, <code>xya</code> → ゃ),
            and type particles as spelled: <code>ha</code>, <code>he</code>, <code>wo</code>.
          </li>
          <li>On a phone, the flick keyboard (swipe from each kana key) is faster once you&apos;re used to it, and it makes you look like a local.</li>
        </List>
        <H3>Make your computer show Japanese, not Chinese, characters</H3>
        <p>
          Chinese and Japanese share character codes, so a device set to English often draws kanji with a Chinese font. Some
          characters look noticeably different: TheMoeWay uses 直 as the test. If your browser draws it the Chinese way,
          you&apos;ll be learning shapes Japanese readers don&apos;t use.
        </p>
        <List>
          <li>
            <strong>Chrome/Edge:</strong> Settings → Appearance → Customize fonts, and choose a Japanese font such as Noto Sans JP
            or Meiryo.
          </li>
          <li>
            <strong>Firefox:</strong> in <code>about:config</code>, move <code>ja</code> to the front of{" "}
            <code>font.cjk_pref_fallback_order</code>.
          </li>
          <li>
            <strong>Anki and Yomitan:</strong> set a Japanese font in the card or pop-up styling if they still show Chinese
            forms.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="origins" title="Where kana came from">
        <p>
          Both scripts grew out of kanji used for their sounds (<em>man&apos;yōgana</em>). Hiragana came from cursive brush forms
          of whole characters, and was long associated with women&apos;s writing (the most famous novel of the Heian period, the{" "}
          <em>Tale of Genji</em>, was written largely in it, by a woman); katakana came from pieces of characters, used by monks to
          annotate Chinese texts. You don&apos;t need this to read, but it explains why あ looks like 安.
        </p>
        <Photo
          src="/guide/hiragana-origin.webp"
          alt="Chart showing each hiragana in black, the cursive kanji it came from in red, and the original kanji above"
          width={1000}
          height={1245}
          className="mx-auto max-w-md"
          caption="Each hiragana (bottom of each cell) with the cursive kanji it came from (red) and the original kanji (top): 安 → あ, 加 → か, 左 → さ. Chart: 合略仮名, CC0."
        />
        <Callout title="Drop romaji early" tone="warn">
          <p>
            Romaji is training wheels that fall off the moment you open anything Japanese. It also quietly sabotages your
            accent: as <Ext href="https://morg.systems/Ignoring-kana-and-studying-with-romaji-instead">morg</Ext> points out,
            seeing &ldquo;ra&rdquo; makes your brain reach for the English r. And different romanisation systems spell the same
            kana differently (shi or si, tsu or tu). Once the kana are in, read kana, including in your Anki cards and
            dictionaries.
          </p>
        </Callout>
        <Scene name="yotsuba" title="Your kana graduation exam">
          <p>
            <em>Yotsuba&amp;!</em> is the classic first manga: a five-year-old&apos;s everyday adventures, with furigana on its
            kanji. Once the kana are in, open volume one. You&apos;ll be looking up most words, and you&apos;ll still be reading
            real Japanese in your first couple of weeks.
          </p>
        </Scene>
      </GuideSection>

      <ImageCredits srcs={["/guide/hiragana-origin.webp"]} />
    </ChapterShell>
  );
}
