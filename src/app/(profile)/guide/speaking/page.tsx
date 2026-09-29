import { A_YEAR_TO_LEARN_JAPANESE, MORG } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { InputOutputDiagram, PitchAccentDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("speaking");

export default function SpeakingChapter() {
  return (
    <ChapterShell
      slug="speaking"
      art={{
        name: "komi",
        caption: "Komi-san can't get a word out, so she writes everything in a notebook. Your first Japanese conversation will feel exactly like this. It gets better fast.",
      }}
    >
      <GuideSection id="when" title="When to start speaking">
        <p>
          Everyone agrees input matters. On output, well-known learners disagree, loudly, and all of them have succeeded:
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
          The author of{" "}
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}>
            <em>A Year to Learn Japanese</em>
          </Ext>{" "}
          tried both extremes across four languages. The language they had read the most in, Japanese, was the one they could
          express themselves in most precisely; but the one they&apos;d spoken from day one, Russian, was the one they felt most
          comfortable speaking. Their conclusion: input builds what you <em>could</em> say, and only speaking makes it come out
          smoothly.
        </p>
        <InputOutputDiagram />
        <p>
          morg lands in the same place in{" "}
          <Ext href={`${MORG}/Learning-to-Output`}>Learning to Output</Ext>: waiting until you&apos;re &ldquo;ready&rdquo;
          matters less than people claim, early conversation does no harm as long as you don&apos;t force it, but input first
          gives better results. And crucially, input alone won&apos;t make you a speaker. Output is its own skill, and you get it
          by practising it.
        </p>
        <p>
          A reasonable default: immerse first, start low-pressure speaking once you can follow simple conversations in what you
          watch, and speak sooner if you&apos;re moving to Japan or simply want to.
        </p>
        <Callout title="If speaking is your main goal">
          <p>
            For travel, start speaking with a tutor after a few hundred words and focus on polite forms and set phrases. For work,
            add keigo and feedback on your writing early. Both are covered in{" "}
            <In href="/guide/routine#goals">if you have one main goal</In>.
          </p>
        </Callout>
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
            than just words. Not everyone rates it, but it&apos;s a good way to find sounds you can&apos;t make yet. Maybe
            don&apos;t do it on the train.
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
          <li>
            <strong>Know plain from polite.</strong> The <In href="/guide/natural-japanese">sounding natural</In> chapter covers
            when to use which, and the casual forms you&apos;ll hear back.
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
          quickly at first, partly because most of the fear turns out to be unfounded. Nobody has ever been deported for mixing
          up は and が.
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

      <GuideSection id="practice" title="Practising output">
        <p>
          Speaking naturally takes three things at once: grammar that&apos;s right, words that go together, and the social
          sense of what fits the moment. The middle one is sneaky. In English you can say something &ldquo;bodes well&rdquo;,
          but not that the forecast &ldquo;bodes good weather&rdquo;, and nobody can tell you why. Japanese is full of those
          pairings too, and you only learn them by noticing. morg&apos;s{" "}
          <Ext href={`${MORG}/Learning-to-Output`}>Learning to Output</Ext> is built around that idea, and these are the
          techniques from it worth stealing:
        </p>
        <List>
          <li>
            <strong>Notice.</strong> The whole game. Every time you try to say something and can&apos;t, you&apos;ve found a gap,
            and you&apos;ll start spotting how natives fill it in your immersion. Output points at gaps, input fills them.
          </li>
          <li>
            <strong>Self-corrected writing.</strong> Write a few lines, then come back hours later and mark anything that feels
            off. Do you recognise every word? Does it sound like something you&apos;ve actually heard? You don&apos;t have to fix
            it; marking it trains the little alarm that eventually makes your Japanese sound right.
          </li>
          <li>
            <strong>Attentive listening.</strong> Watch unscripted talk (livestreams, podcasts, variety shows) specifically hunting
            for phrases you could use: how people agree, change topic, react.
          </li>
          <li>
            <strong>Predictive listening.</strong> Pause just before someone answers a question and say what you&apos;d reply.
            Then hit play and compare. It&apos;s conversation practice with no one watching.
          </li>
          <li>
            <strong>Try the word out.</strong> Deliberately use the expression you&apos;re not sure about in a real conversation
            and watch the reaction. A confused face teaches you more than a textbook.
          </li>
          <li>
            <strong>Narrate in your head.</strong> Once you&apos;re fairly advanced, switch your inner monologue to Japanese while
            you cook or walk. Too early and you&apos;ll just rehearse your own translations, so wait until you have a lot of input.
          </li>
          <li>
            <strong>Find your people.</strong> morg thinks this may matter most: we pick up phrases and jargon fastest from groups
            we feel we belong to. Play online games on Japanese servers, join a Japanese Discord for your hobby, comment on
            streams. Output that happens because you want to talk about something beats output practice.
          </li>
        </List>
        <Scene name="lucky-star" title="Talk about what you're into">
          <p>
            Konata in <em>Lucky Star</em> can talk for ten minutes about anime, games and cosplay cafés and can&apos;t get through
            a homework page. Be a bit like Konata. Conversation is easiest, and most fun, when it&apos;s about the thing you
            already spend your evenings on.
          </p>
        </Scene>
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
          Nobody thinks you&apos;re asking for a bridge when you want chopsticks. But pitch is a big part of what makes an accent
          sound foreign, and it&apos;s much easier to learn early than to fix later. Accents also differ by region (Osaka&apos;s
          is famously different), so &ldquo;correct&rdquo; usually means Tokyo standard.
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
          messages to people you actually talk to. Try the self-correcting trick from <In href="/guide/speaking#practice">practising
          output</In> before you send it off: you&apos;ll catch more than you expect.
        </p>
        <p>
          Writing kanji by hand is a separate skill; see the <In href="/guide/kanji#writing">kanji chapter</In>. Typing is what
          you&apos;ll use day to day, and the <In href="/guide/kana#typing-fonts">kana chapter</In> explains how.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
