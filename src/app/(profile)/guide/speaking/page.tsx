import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { PitchAccentDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("speaking");

export default function SpeakingChapter() {
  return (
    <ChapterShell slug="speaking">
      <GuideSection id="when" title="When to start speaking">
        <p>
          Everyone agrees input matters. On output, well-known learners disagree, and all of them have succeeded:
        </p>
        <Table
          head={["View", "Held by", "The idea"]}
          rows={[
            ["Speak from day one", "Benny Lewis (Fluent in 3 Months)", "Conversation is the goal, so practise it from the start and learn what you need as you go."],
            ["Pronunciation first", "Dogen", "Work on sounds early by recording yourself, but not conversation yet."],
            ["Speak when you're ready", "Steve Kaufman (LingQ)", "Build a base from lots of listening, then speak after some months: 'to speak well, you must speak'."],
            ["Wait for the input to build up", "Matt vs Japan (Refold)", "Early speaking forces you to express things you haven't learned and can build bad habits; speech emerges from input."],
          ]}
        />
        <p>
          The author of <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext> tried both extremes across four languages. The language they had read
          the most in, Japanese, was the one they could express themselves in most precisely; but the one they&apos;d spoken from
          day one, Russian, was the one they felt most comfortable speaking. Their conclusion: input builds what you <em>could</em>{" "}
          say, and only speaking makes it come out smoothly.
        </p>
        <p>
          A reasonable default: immerse first, start low-pressure speaking once you can follow simple conversations in what you
          watch, and speak sooner if you&apos;re moving to Japan or simply want to.
        </p>
      </GuideSection>

      <GuideSection id="before" title="Before your first conversation">
        <List>
          <li>
            <strong>Get the sounds right.</strong> The <In href="/guide/kana#pronunciation">pronunciation section</In> covers the
            handful of sounds that give English speakers away.
          </li>
          <li>
            <strong>Record and compare.</strong> Pick a short line from something you like, record yourself, listen to both, and
            fix one difference. Repeat every week or two.
          </li>
          <li>
            <strong>Shadow.</strong> Speak along with audio a split second behind the speaker, copying rhythm and melody rather
            than just words. Not everyone rates it, but it&apos;s a good way to find sounds you can&apos;t make yet.
          </li>
          <li>
            <strong>Script your self-introduction.</strong> Write what you&apos;d say about yourself, have a tutor or exchange
            partner correct it and record it naturally, then practise along with their recording until it&apos;s smooth. It feels
            artificial, but you&apos;ll say it in every first conversation, and it takes the fear out of the first one.
          </li>
          <li>
            <strong>Learn a few lifelines.</strong> もう一度お願いします (once more, please), ゆっくり話してください (please speak
            slowly), 〜ってどういう意味ですか (what does ... mean?), 日本語で何と言いますか (how do you say it in Japanese?).
          </li>
        </List>
      </GuideSection>

      <GuideSection id="conversations" title="Conversations">
        <H3>Where to find them</H3>
        <List>
          <li>
            <strong>Tutors</strong> on <Ext href="https://www.italki.com/">italki</Ext> and similar sites: paid, patient, and
            there to help. For early conversations you don&apos;t need an expensive teacher, just a patient one.
          </li>
          <li>
            <strong>Language exchange</strong>: apps like <Ext href="https://www.hellotalk.com/">HelloTalk</Ext> and communities
            like the English-Japanese Language Exchange Discord pair you with Japanese speakers learning English. Free, but half
            the time is in English and quality varies.
          </li>
        </List>
        <H3>Early conversations</H3>
        <p>
          The first few will be full of &ldquo;I want to say this and can&apos;t.&rdquo; That&apos;s the point. Your only goals are
          to get through them, note what you couldn&apos;t say, and bring one new thing to each session. You&apos;ll improve
          quickly at first, partly because most of the fear turns out to be unfounded.
        </p>
        <H3>Getting more out of them later</H3>
        <p>
          Once small talk is easy, it stops teaching you much. <em>A Year to Learn Japanese</em> suggests three habits:
        </p>
        <List>
          <li>
            <strong>Prepare</strong>: bring questions from your reading, retell a story you watched, or argue a position on a topic
            within a time limit.
          </li>
          <li>
            <strong>Prime</strong>: keep a list of words and patterns from your input that you want to try out, and use them.
          </li>
          <li>
            <strong>Flag</strong>: note what you struggled to say, then watch for how native speakers say it in your immersion.
            Output gives your input direction.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="pitch-accent" title="Pitch accent">
        <p>
          English marks words with stress (loudness and length): uni<strong>ver</strong>sity. Japanese marks them with pitch
          instead: each word has a pattern of high and low across its beats. In Tokyo speech there are four pattern types, and a
          handful of words are told apart by pitch alone:
        </p>
        <PitchAccentDiagram />
        <Table
          head={["Pattern", "What happens"]}
          rows={[
            ["平板 heiban (flat)", "Starts low, rises, and stays up, even on a following particle."],
            ["頭高 atamadaka", "Starts high on the first beat, then drops."],
            ["中高 nakadaka", "Rises, then drops somewhere in the middle of the word."],
            ["尾高 odaka", "Rises and stays up to the end of the word, then drops on the particle after it."],
          ]}
        />
        <p>
          How much does it matter? You&apos;ll be understood with mistakes, because context almost always makes the word clear.
          But pitch is a big part of what makes an accent sound foreign, and it&apos;s much easier to learn early than to fix
          later. Accents also differ by region (Osaka&apos;s is famously different), so &ldquo;correct&rdquo; usually means Tokyo
          standard.
        </p>
        <H3>Resources</H3>
        <List>
          <li>
            <Ext href="https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home">OJAD</Ext>, from the University of Tokyo, is free: it
            shows the pitch of thousands of words and all their conjugations, with audio, and its Suzuki-kun tool marks the pitch
            of any sentence you paste.
          </li>
          <li>
            <Ext href="https://kotu.io/">kotu.io</Ext> trains your ear with minimal pairs, so you can check whether you actually
            hear the difference.
          </li>
          <li>Kaishi 1.5k can show pitch accent on its cards, and Yomitan can show it in lookups with a pitch dictionary.</li>
          <li>Dogen&apos;s course on Patreon is the best-known structured course; it&apos;s paid.</li>
        </List>
        <Callout title="Hearing comes first">
          <p>
            You can&apos;t reproduce a pitch pattern you can&apos;t hear. Start by listening for it in words you know, and check
            yourself on kotu.io, before worrying about your own speech.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="writing" title="Writing">
        <p>
          Writing sentences is output, like speaking, and the same advice applies: it follows input, and it improves with
          feedback. A short daily diary corrected now and then by a tutor or exchange partner works well; so does writing
          messages to people you actually talk to.
        </p>
        <p>
          Writing kanji by hand is a separate skill; see the <In href="/guide/kanji#writing">kanji chapter</In>. Typing is what
          you&apos;ll use day to day, and the <In href="/guide/kana#typing-fonts">kana chapter</In> explains how.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
