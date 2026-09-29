import type { ReactNode } from "react";
import { MORG } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { Ext, GuideSection, In, List } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("traps");

/**
 * The traps chapter follows morg.systems' "List of Bad Ideas for Japanese Study"
 * (https://morg.systems/List-of-Bad-Ideas-for-Japanese-Study), each linked to morg's own
 * page on it, with the guide's own tone and the occasional softer verdict.
 */

function Trap({ title, page, tempting, problem, instead }: { title: string; page: string; tempting: ReactNode; problem: ReactNode; instead: ReactNode }) {
  return (
    <article className="rounded-lg border border-border bg-surface px-5 py-4">
      <h3 className="text-h3 font-semibold">{title}</h3>
      <dl className="mt-2 grid gap-2 text-[0.9375rem] leading-relaxed">
        <div>
          <dt className="inline font-medium">Why it&apos;s tempting: </dt>
          <dd className="inline text-muted-foreground">{tempting}</dd>
        </div>
        <div>
          <dt className="inline font-medium">Why it backfires: </dt>
          <dd className="inline text-muted-foreground">{problem}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-primary">Instead: </dt>
          <dd className="inline text-muted-foreground">{instead}</dd>
        </div>
      </dl>
      <p className="mt-2 text-meta text-dim">
        <a href={`${MORG}/${page}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
          morg&apos;s take
        </a>
      </p>
    </article>
  );
}

export default function TrapsChapter() {
  return (
    <ChapterShell
      slug="traps"
      art={{
        name: "konosuba",
        caption: "Kazuma's party in KonoSuba makes every bad decision available, so you don't have to. This chapter is the language-learning version.",
      }}
    >
      <GuideSection id="why" title="Why a list of bad ideas">
        <p>
          Most ways of learning Japanese work, eventually, if you keep doing them. But some cost you months for very little,
          and they&apos;re popular exactly because they <em>feel</em> productive. This chapter is a tour of the classics, based
          on morg&apos;s{" "}
          <Ext href={`${MORG}/List-of-Bad-Ideas-for-Japanese-Study`}>List of Bad Ideas for Japanese Study</Ext>, which is
          gloriously opinionated and worth reading in the original.
        </p>
        <p>
          As morg says up front: you may disagree, and that&apos;s normal. If something on this list is the only thing keeping
          you motivated, keep doing it, and add real Japanese alongside. The goal is to choose knowingly, not to feel guilty.
        </p>
      </GuideSection>

      <GuideSection id="shortcuts" title="Shortcuts that aren't">
        <div className="grid gap-4">
          <Trap
            title="Studying with romaji instead of kana"
            page="Ignoring-kana-and-studying-with-romaji-instead"
            tempting="Kana look intimidating, and you can already read the Latin alphabet."
            problem="You have to learn kana eventually, so you're only postponing it. Romaji also drags your English pronunciation along (ra, re, ro), and resources built on romaji tend to be sloppy."
            instead={
              <>
                Learn kana in a week with mnemonics and the <In href="/tools/kana">kana quiz</In>. It&apos;s really not that bad.
              </>
            }
          />
          <Trap
            title="Learning to speak without learning to read"
            page="Trying-to-learn-Japanese-without-learning-to-read"
            tempting="You only care about conversation, and kanji are the scariest part of Japanese."
            problem="Listening-only courses are few and mostly weak, and reading is one of the best ways to build vocabulary. Unless you have a live-in tutor, skipping reading makes the whole thing slower, not faster."
            instead={
              <>
                Read anyway, with a pop-up dictionary doing the kanji work. Your speaking will thank you. See the{" "}
                <In href="/guide/kanji">kanji chapter</In>.
              </>
            }
          />
          <Trap
            title="Memorising every reading of every kanji"
            page="Trying-to-memorize-each-kanji-reading-without-knowing-the-words"
            tempting="Kanji look like an alphabet, so surely you learn each one's sounds first."
            problem="Readings depend on the word. 生 has around a dozen, and the most common words are often the most irregular, because everyday speech wears words down over centuries."
            instead={
              <>
                Learn words, and the readings come with them. <In href="/guide/kanji#readings">More in the kanji chapter</In>.
              </>
            }
          />
          <Trap
            title="Duolingo as your main course"
            page="Using-Duolingo"
            tempting="It's free, it's a game, and the owl is very persuasive."
            problem="morg's examples are specific: it has taught お腹 as おはら (it's おなか), its synthetic voices get pitch and intonation wrong, and many of its sentences are awkward or unnatural. morg's verdict, in capitals, is to stay away."
            instead={
              <>
                If the streak is what gets you to open something Japanese every day, fine, but treat it as a warm-up. Real learning
                is Anki plus real content; start with <In href="/guide/vocabulary">the vocabulary chapter</In>.
              </>
            }
          />
          <Trap
            title="Checking everything with a machine translator"
            page="Using-machine-translators"
            tempting="Not understanding feels bad, and a translation feels like certainty."
            problem="Machine translation invents what Japanese leaves out (who, how many, which gender), assumes your input is correct even when it's garbage, and silently drops parts it can't translate. You get confidence, not understanding."
            instead={
              <>
                A dictionary, a search, a question on a learner forum, or <In href="/guide/immersion#ambiguity">letting it go</In>.
                It&apos;s fine in a real emergency (stuck in a lift, a form you must fill in), and Google Lens is handy for
                identifying a kanji you can&apos;t type.
              </>
            }
          />
        </div>
      </GuideSection>

      <GuideSection id="exercises" title="Exercises that waste your time">
        <div className="grid gap-4">
          <Trap
            title="Fill-in-the-particle textbook exercises"
            page="Doing-textbook-exercises"
            tempting="They look like studying. They produce a score. Your textbook has hundreds of them."
            problem="Assembling sentences like Lego before you have a feel for the language is slow, frustrating and does little for your actual Japanese. Confusingly worded exercises are worse when there's no teacher to ask."
            instead="Keep the textbook explanations if you like them, and skip the exercises without guilt. Spend the time reading or watching."
          />
          <Trap
            title="Correct-the-mistakes exercises"
            page="Doing-exercises-that-ask-you-to-fix-incorrect-Japanese"
            tempting="Spotting errors sounds like a clever test of understanding."
            problem="You can't fix a language you don't have a feel for yet, and staring at broken Japanese risks your brain quietly absorbing it. morg's words: absolutely evil. (They're not a fan.)"
            instead="Fill your head with correct Japanese: lots of it, from native sources."
          />
          <Trap
            title="Translating sentences to and from English"
            page="Doing-exercises-that-ask-you-to-translate-from-English-to-Japanese"
            tempting="It feels like proof you understand."
            problem="Translation is a separate, harder skill than understanding, and doing it all the time keeps your brain in English mode. You're practising being a (bad) translator, not a Japanese speaker."
            instead="Understand Japanese as Japanese. If you want to be a translator one day, learn the language properly first."
          />
          <Trap
            title="Flashcards with English on the front"
            page="Doing-anki-cards-with-English-on-the-front-and-Japanese-on-the-back"
            tempting="You want to be able to produce words, so surely you should practise producing them."
            problem="English and Japanese words don't map one to one (is 'understand' 分かる or 知る?), so the cards reward wrong associations and pile on frustrating reviews."
            instead="Japanese on the front, always. The one exception: practising writing kanji from a keyword, if you learned them that way."
          />
        </div>
        <p>
          The one drill this guide does recommend is conjugation (食べる → 食べなかった), because it&apos;s mechanical, the rules
          are regular, and you&apos;ll meet every one of those forms thousands of times. A few minutes with the{" "}
          <In href="/tools/conjugation">conjugation drill</In> until the common forms are automatic, then back to real Japanese.
        </p>
      </GuideSection>

      <GuideSection id="material" title="Material traps">
        <div className="grid gap-4">
          <Trap
            title="Studying song lyrics"
            page="Learning-Japanese-by-studying-song-lyrics"
            tempting="You love the song and want to know what it's about. Very relatable."
            problem="Lyrics are poetic, ambiguous on purpose and often odd even to natives, with unusual words and pronunciations you'll never hear in conversation."
            instead="Listen to all the J-pop you want, and enjoy the lines you start to catch. Just don't make lyrics your textbook."
          />
          <Trap
            title="Toddlers' picture books and fairy tales"
            page="Reading-children-books-or-fairytales"
            tempting="Children learn from them, so they must be easy."
            problem="Picture books are packed with onomatopoeia, baby talk and wordplay for three-year-olds, fairy tales use old-fashioned narrative set phrases, and both are boring for an adult brain. Boredom kills more study plans than difficulty."
            instead={
              <>
                Graded readers written for learners, or manga you actually like. The{" "}
                <In href="/guide/what-to-watch-and-read">what to watch and read</In> chapter ranks them by measured difficulty.
              </>
            }
          />
          <Trap
            title="Waiting until you're ready"
            page="Waiting-to-read-until-you-have-100-percent-language-comprehension"
            tempting="Native content is intimidating, so you'll just do a bit more grammar first. And then a bit more."
            problem="You never feel ready. Plenty of people pass N1 without ever reading a manga and then can't read one; plenty of others read novels comfortably and couldn't pass N2. The difference is who started before they felt ready."
            instead={
              <>
                Start now, with something easy, and let it be hard. <In href="/guide/immersion#when">When to start</In> has
                more.
              </>
            }
          />
        </div>
      </GuideSection>

      <GuideSection id="people" title="The study-buddy trap">
        <Trap
          title="Finding a study partner to keep you accountable"
          page="Looking-for-a-study-partner"
          tempting="Motivation is hard, and doing it together sounds like it would help."
          problem="Two learners never move at the same pace. Either you slow down and get frustrated, or they do and you feel behind. And two beginners can't correct each other's Japanese."
          instead="Community without the lockstep: a learner Discord like EJLX for questions and company, and a tutor or native speakers for actual conversation."
        />
        <p>
          That doesn&apos;t mean learning alone. Sharing what you&apos;re reading, swapping recommendations and complaining about
          keigo together are great. The trap is tying your progress to someone else&apos;s schedule.
        </p>
      </GuideSection>

      <GuideSection id="fine" title="Things that are actually fine">
        <p>The flip side: things people feel guilty about that are completely okay.</p>
        <List>
          <li>
            <strong>Rewatching things you&apos;ve seen.</strong> Knowing the story frees your attention for the language. It&apos;s
            one of the best listening exercises there is.
          </li>
          <li>
            <strong>Reading &ldquo;easy&rdquo; things.</strong> Krashen&apos;s advice was to read things so easy you almost feel
            guilty. Easy reading is where speed and automatic recognition come from.
          </li>
          <li>
            <strong>Using furigana and a pop-up dictionary.</strong> It isn&apos;t cheating. Nobody gives out prizes for suffering.
          </li>
          <li>
            <strong>English subtitles for pure fun.</strong> Some things you just want to enjoy. Just don&apos;t count them as
            immersion hours.
          </li>
          <li>
            <strong>Taking the JLPT for motivation.</strong> A deadline can be exactly what you need, and morg counts personal
            satisfaction as a perfectly good reason. Only N2 and N1 tend to matter for jobs, scholarships and Japan&apos;s
            points-based visas.
          </li>
          <li>
            <strong>Having anime as your reason.</strong> It&apos;s the most common reason there is, and a great one: it&apos;s
            what keeps you going on the bad days.
          </li>
          <li>
            <strong>Taking a break.</strong> A week off costs you a little recall, not your Japanese. See{" "}
            <In href="/guide/routine#consistency">staying consistent</In>.
          </li>
        </List>
        <Scene name="chiikawa" title="Tiny counts">
          <p>
            <em>Chiikawa</em> episodes are about two minutes long. On a bad day, watching one in Japanese is a perfectly
            respectable day of immersion. Chiikawa would be proud of you.
          </p>
        </Scene>
      </GuideSection>
    </ChapterShell>
  );
}
