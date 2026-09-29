import { A_YEAR_TO_LEARN_JAPANESE } from "@/lib/guide";
import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Scene } from "@/components/guide/anime-art";
import { StagesDiagram } from "@/components/guide/figures";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("routine");

export default function RoutineChapter() {
  return (
    <ChapterShell
      slug="routine"
      art={{
        name: "haikyu",
        caption: "Karasuno doesn't get good at volleyball in one heroic practice. They show up every single day, including the days they lose. Same deal.",
      }}
    >
      <GuideSection id="first-week" title="Your first week">
        <p>
          A plan for someone starting from zero with an hour or two a day, adapted from VN Club&apos;s quick start and
          TheMoeWay&apos;s 30-day routine. Move faster or slower as it suits you; the order matters more than the days.
        </p>
        <Table
          head={["Days", "Do"]}
          rows={[
            ["1–3", <>Hiragana with mnemonics and the kana quiz, about 10–20 minutes a day. Watch one episode of an anime you&apos;ve seen before with Japanese audio.</>],
            ["3–5", <>Katakana. Install Anki and <In href="/guide/vocabulary#kaishi">Kaishi 1.5k</In> at 10 new cards a day, and set it up as in the vocabulary chapter.</>],
            ["4–6", <>Add a Japanese keyboard. Install <In href="/guide/immersion#tools">Yomitan</In> with Jitendex. Read the first few points of one grammar guide.</>],
            ["6–7", <>Pick your first real thing to watch and your first to read. Watch one episode with Japanese subtitles and look up a handful of words.</>],
          ]}
        />
        <p>
          By the end of the week you should read kana slowly, have Anki running, and have spent a few hours with real Japanese.
          You won&apos;t understand much of it yet. That&apos;s not the plan failing, that&apos;s the plan working.
        </p>
      </GuideSection>

      <GuideSection id="first-months" title="The first months">
        <Table
          head={["", "Months 1–4", "After Kaishi"]}
          rows={[
            ["Anki", "10–20 new Kaishi words, plus reviews: 20–40 minutes", "Cards mined from what you read and watch"],
            ["Grammar", "One or two points from one guide (TheMoeWay's routine: three Cure Dolly videos a day)", "Look things up as they come"],
            ["Active immersion", "1–2 hours: anime with Japanese subtitles, graded readers, then easy manga", "As much as you can, mostly native content"],
            ["Passive listening", "Anything you've already watched, while doing other things", "Podcasts and audio from shows you've seen"],
          ]}
        />
        <p>
          A good first reading goal, from TheMoeWay&apos;s routine: 100 pages of <em>Yotsuba&amp;!</em> at around an hour a day. It
          feels slow, often ten minutes a page at first, and it speeds up noticeably within the volume. Being out-read by a
          five-year-old is character building.
        </p>
        <p>
          Only have half an hour? That&apos;s the <In href="/guide/routine#short-on-time">next section</In>.
        </p>
      </GuideSection>

      <GuideSection id="short-on-time" title="If you only have 30–45 minutes a day">
        <p>
          Most of this guide assumes an hour or two a day, because that&apos;s what the community routines assume. Plenty of
          adults with jobs, children or both have nothing like that. Slower is not the same as not working: what counts is hours
          of Japanese you understood, and daily half-hours add up to more than people expect.
        </p>
        <Table
          head={["Every day", "In a year", "1,000 hours takes"]}
          rows={[
            ["30 minutes", "about 180 hours", "about 5½ years"],
            ["45 minutes", "about 275 hours", "under 4 years"],
            ["1 hour", "about 365 hours", "under 3 years"],
            ["2 hours", "about 730 hours", "under 1½ years"],
          ]}
        />
        <p>
          For scale, the survey behind the <In href="/guide#expectations">JLPT hour estimates</In> puts N3, everyday Japanese to
          a certain degree, at 950–1,700 hours. At 30 minutes a day you reach the same places as everyone else, on a longer
          road. The one thing that doesn&apos;t work at any pace is stopping, which is why the routine below is
          built to survive bad weeks.
        </p>
        <H3>A 40-minute day</H3>
        <Table
          head={["Minutes", "Months 1–4", "After the starter deck"]}
          rows={[
            ["15", "Anki reviews plus 5–10 new Kaishi words", "Reviews plus a few mined cards"],
            ["5", "One grammar point, read once", "Look up whatever confused you yesterday"],
            ["20", "Input: a graded reader, a Teppei episode or a few pages of manga", "An episode, or a chapter of something you're reading"],
          ]}
        />
        <List>
          <li>
            <strong>Protect the input.</strong> When time is short, Anki grows to fill it. Cap new cards at 5–10 so reviews never
            take more than half your time; the words only stick when you meet them in real Japanese.
          </li>
          <li>
            <strong>Turn leisure into input.</strong> If you already watch an episode of something before bed, make it Japanese.
            That&apos;s an hour a day for some people, without finding a single extra minute.
          </li>
          <li>
            <strong>Use dead time for listening.</strong> Commutes, dishes, the gym and walking the dog are free hours of passive
            listening. Audio from shows you&apos;ve already watched works best, because you know what&apos;s going on.
          </li>
          <li>
            <strong>Keep sessions daily, not long.</strong> Seven 30-minute sessions beat one three-and-a-half-hour Sunday, for
            memory and for the habit.
          </li>
          <li>
            <strong>Skip the extras for now.</strong> Handwriting, pitch accent drills, a second grammar resource: all optional
            until you have more time. Reading, listening and reviews are the core.
          </li>
        </List>
        <Callout title="Your milestones will come later, and that's fine">
          <p>
            The timelines in this guide assume one to two hours a day. At 30–45 minutes, stretch them by two or three times: the
            first finished manga volume might come at month six instead of month three. Measure yourself against last month,
            not against someone else&apos;s timeline.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="goals" title="If you have one main goal">
        <p>
          The path in this guide is general-purpose: it builds reading and listening first, because they feed everything else.
          If you know what you want Japanese <em>for</em>, lean into it. The foundation (kana, the first 1,500 words, basic
          grammar) is the same for everyone; what changes is what you do with your immersion time.
        </p>
        <Callout title="Mainly anime and live-action">
          <List>
            <li>Weight your time towards listening. Watch with Japanese subtitles early, then drop them for shows you know well.</li>
            <li>
              Casual speech is your target language: read <In href="/guide/natural-japanese">sounding natural</In> early, especially
              contractions and <In href="/guide/natural-japanese#role-language">role language</In>.
            </li>
            <li>Mine cards from subtitles with the <In href="/guide/immersion#tools">tools chapter</In>&apos;s setup.</li>
            <li>You can put off handwriting, formal writing and most keigo indefinitely. You still need kanji to read subtitles.</li>
          </List>
        </Callout>
        <Callout title="Mainly novels, light novels and visual novels">
          <List>
            <li>
              Reading volume is everything. Start reading real text early, with <In href="/guide/immersion#tools">Yomitan</In> or
              a texthooker, and go from <In href="/guide/what-to-watch-and-read#learner">graded readers</In> to children&apos;s
              imprints and short light novels.
            </li>
            <li>Kanji recognition matters more than for anyone else; learn it through words, never by writing.</li>
            <li>
              Visual novels are the gentlest bridge: every line is voiced, so you read and hear at once. Retest your{" "}
              <In href="/tools/reading-speed">reading speed</In> every few months.
            </li>
            <li>Speaking can wait until you want it.</li>
          </List>
        </Callout>
        <Callout title="Mainly speaking, for travel">
          <List>
            <li>
              Learn polite です/ます Japanese first and the <In href="/guide/natural-japanese#set-phrases">set phrases</In>{" "}
              (すみません, お願いします, いただきます). A shop or station conversation is mostly these.
            </li>
            <li>Katakana pays off immediately: menus, signs and loanwords you already know are everywhere.</li>
            <li>
              Start speaking early, with a tutor, once you have a few hundred words (see{" "}
              <In href="/guide/speaking#conversations">conversations</In>). Listening to fast replies is the hard part, so
              keep daily listening input anyway.
            </li>
            <li>A few months of steady work covers ordering, directions, shopping and small talk. Novels are not required.</li>
          </List>
        </Callout>
        <Callout title="Mainly work, or living in Japan">
          <List>
            <li>
              Employers and visas often ask for the JLPT, usually N2 or N1 (see{" "}
              <In href="/guide/advanced#tests">tests and credentials</In>); build towards it with news and non-fiction as well as
              entertainment.
            </li>
            <li>
              <In href="/guide/advanced#keigo">Keigo</In> and <In href="/guide/advanced#writing">formal writing</In> matter much
              more for you than for anyone else. Learn to recognise them from the intermediate stage on.
            </li>
            <li>Speak regularly and early; get feedback on emails and messages, not just conversation.</li>
            <li>The full reading-and-listening path still applies: meetings are listening, and documents are reading.</li>
          </List>
        </Callout>
      </GuideSection>

      <GuideSection id="milestones" title="Milestones">
        <p>
          TheMoeWay measures progress in volume rather than time, which is more honest: people learn at different speeds, but
          everyone improves with the amount they&apos;ve understood.
        </p>
        <Table
          head={["When you've done this", "It usually feels like"]}
          rows={[
            ["10 anime series watched raw, without subtitles", "You're starting to get the hang of listening."],
            ["25 series", "Listening feels more natural than it ever has."],
            ["50 series", "You're out of the beginner stage for listening."],
            ["1 novel", "A big jump in reading; you leave the beginner stage."],
            ["5 novels, or one medium-long visual novel", "You're not a beginner any more."],
            ["10 novels, or two medium-long visual novels", "Solidly intermediate."],
          ]}
        />
        <p>
          Other markers people notice: the first time a word from Anki turns up in a show, the first joke you get without
          subtitles, the first time you forget whether you watched something in Japanese or English. Write them down; they&apos;re
          easy to forget and good to look back on.
        </p>
        <p>
          On <In href="/">immersionlog</In>, milestones and finished titles live on your profile, and your{" "}
          <In href="/tools/reading-speed">reading speed</In> is a number worth retesting every few months.
        </p>
      </GuideSection>

      <GuideSection id="plateaus" title="When progress feels invisible">
        <p>
          Somewhere around months three to six, most learners hit a stretch where nothing seems to be happening, and start
          googling &ldquo;is immersion a scam&rdquo;. The early wins
          are gone: you learned the kana in a week and your first thousand words in a few months, and each of those felt like a
          leap. Now you&apos;re adding words that turn up once an episode, and native content is still hard. You&apos;re
          improving as fast as ever. You just can&apos;t see it.
        </p>
        <StagesDiagram />
        <H3>The nope threshold</H3>
        <p>
          <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext> names the first big turning point the{" "}
          <strong>nope threshold</strong>: the day native content becomes <em>tolerable</em>. Not easy, not natural, not even
          efficient; you can simply stomach it without &ldquo;noping&rdquo; out. Before it, every episode feels like a wall. After
          it, the difficulty doesn&apos;t vanish, but it stops being a reason to quit.
        </p>
        <Scene name="mob" title="Mob's meter">
          <p>
            In <em>Mob Psycho 100</em>, a counter slowly fills up as Mob holds his feelings in, and nothing seems to happen until
            it hits 100% and everything happens at once. Progress in Japanese is a lot like that, minus the explosions. Keep
            filling the meter.
          </p>
        </Scene>
        <p>
          You can&apos;t feel yourself approaching it, only notice when you&apos;ve crossed it, and only if you keep trying real
          content. The guide&apos;s advice is to check in regularly: sit down with something native once a week or once a month,
          and one day you&apos;ll think &ldquo;wait, I could do this.&rdquo; If months three to six feel like nothing is working,
          you&apos;re most likely just before that day or just after it.
        </p>
        <H3>Signs you&apos;re still advancing</H3>
        <List>
          <li>
            <strong>Fewer lookups.</strong> A page that took ten lookups last month takes six now. Count them on one page every so
            often.
          </li>
          <li>
            <strong>Old material is easy.</strong> Reread the first graded reader or rewatch the first episode you struggled with.
            This is the most convincing test there is.
          </li>
          <li>
            <strong>Words in the wild.</strong> Anki words turn up in shows, songs and adverts, and you recognise them before the
            subtitle catches up.
          </li>
          <li>
            <strong>Longer stretches without pausing.</strong> You let a scene run because you followed it, not because you gave
            up.
          </li>
          <li>
            <strong>You notice mistakes.</strong> A translation or English subtitle that says something the Japanese didn&apos;t.
          </li>
          <li>
            <strong>You choose by interest.</strong> You start picking things because you want to see them, not because
            they&apos;re on a beginner list.
          </li>
          <li>
            <strong>Numbers going up.</strong> Your <In href="/tools/reading-speed">reading speed</In> and total hours. Neither
            lies, and both move even when it feels like nothing does.
          </li>
        </List>
        <H3>What to do about it</H3>
        <List>
          <li>
            <strong>Keep a benchmark.</strong> Pick one episode or one page now and revisit it every three months. Write down how
            much you understood each time.
          </li>
          <li>
            <strong>Spend a week on something easy.</strong> Read or watch below your level. Fluency on easy material is its own
            reward and reminds you how far you&apos;ve come.
          </li>
          <li>
            <strong>Change the medium, not the method.</strong> Tired of anime? Try a visual novel, a let&apos;s play or a
            podcast. Novelty brings back the feeling of progress.
          </li>
          <li>
            <strong>Don&apos;t switch methods.</strong> A plateau feels like proof the method is wrong. It almost never is;
            jumping to a new deck or app resets the one thing that works, time.
          </li>
        </List>
        <p>
          The same feeling comes back, bigger, at the <In href="/guide/intermediate#plateau">intermediate plateau</In>, and the
          same answer applies.
        </p>
      </GuideSection>

      <GuideSection id="consistency" title="Staying consistent">
        <p>
          VN Club&apos;s advice is the best in this whole guide: when and how long you study matters less than never missing a
          day. Motivation comes and goes; habits don&apos;t care how you feel. A few ways to make that easier:
        </p>
        <List>
          <li>
            <strong>Attach it to something you already do.</strong> A fixed trigger beats willpower. More on this below.
          </li>
          <li>
            <strong>Set a floor, not a target.</strong> Decide in advance what the smallest acceptable day looks like.
          </li>
          <li>
            <strong>Spread learning out.</strong> <Ext href={A_YEAR_TO_LEARN_JAPANESE}><em>A Year to Learn Japanese</em></Ext> distinguishes &ldquo;horizontal&rdquo; time
            (how many days) from &ldquo;vertical&rdquo; time (hours in one sitting). Memory rewards horizontal: five minutes a day
            beats an hour once a week.
          </li>
          <li>
            <strong>Make it enjoyable.</strong> If immersion feels like homework, change what you&apos;re watching or reading, not
            whether you do it.
          </li>
          <li>
            <strong>Look after the basics.</strong> Donkuri&apos;s guide is blunt that sleep, exercise and fresh air affect how much
            sticks.
          </li>
          <li>
            <strong>Track it.</strong> A streak and a growing number of hours are motivating on the days nothing else is.
          </li>
        </List>
        <H3>Habit stacking</H3>
        <p>
          The idea, popularised by BJ Fogg&apos;s <em>Tiny Habits</em> and James Clear&apos;s <em>Atomic Habits</em>: tie the new
          habit to one you already have, in the form &ldquo;after I [do this], I will [do that].&rdquo; The existing habit is
          the reminder, so there&apos;s nothing to remember. Some that work for Japanese:
        </p>
        <Table
          head={["After I…", "I will…"]}
          rows={[
            ["pour my morning coffee", "do my Anki reviews before I drink it"],
            ["sit down on the train or bus", "put on a podcast or read a few pages on my phone"],
            ["start lunch", "read one chapter of manga"],
            ["start the dishes or the laundry", "play audio from an episode I've already watched"],
            ["get into bed", "read in Japanese instead of scrolling"],
            ["open YouTube for fun", "watch one Japanese video first"],
          ]}
        />
        <p>
          Keep the new habit small enough to be silly at first (&ldquo;one card&rdquo;, &ldquo;one page&rdquo;). You&apos;ll
          usually do more; the point is that you start.
        </p>
        <H3>Lower the floor instead of quitting</H3>
        <p>
          Illness, deadlines, a new baby: some weeks, the normal routine isn&apos;t possible. Quitting is what happens when the
          only options are &ldquo;full routine&rdquo; and &ldquo;nothing&rdquo;. Decide your levels in advance, while you have
          the energy to think:
        </p>
        <Table
          head={["Kind of day", "What you do", "About"]}
          rows={[
            ["Good", "Reviews, new cards, and as much input as you like", "1–2 hours"],
            ["Normal", "Reviews, a few new cards, one episode or chapter", "30–60 minutes"],
            ["Bad", "Reviews only, no new cards, plus a song or a short video", "15 minutes"],
            ["Survival", "Open Anki and do ten cards, or listen to one podcast in the background", "5 minutes"],
          ]}
        />
        <p>
          A survival day barely teaches you anything. It&apos;s not supposed to. What it does is keep the habit and the streak alive, so that when life calms
          down you&apos;re restarting a routine rather than starting over. A good rule from habit research: <strong>never miss
          twice</strong>. One missed day is an accident; two is the start of a new habit.
        </p>
        <H3>After a missed week (or month)</H3>
        <List ordered>
          <li>
            <strong>Don&apos;t punish yourself with extra work.</strong> Doubling up to &ldquo;catch up&rdquo; is how one missed
            week turns into quitting.
          </li>
          <li>
            <strong>Set new cards to zero</strong> until the review backlog is gone. With FSRS, overdue cards are scheduled
            sensibly when you return; you don&apos;t need to reset the deck.
          </li>
          <li>
            <strong>Spread the backlog over several days.</strong> Do a few hundred reviews, then stop; the rest will wait.
            Setting the deck&apos;s <em>review sort order</em> to <em>relative overdueness</em> puts the cards you&apos;re most
            likely to have forgotten first.
          </li>
          <li>
            <strong>Restart immersion on something easy</strong> and enjoyable, ideally something you were in the middle of.
            Momentum matters more than difficulty this week.
          </li>
          <li>
            <strong>Go back to your normal routine within a week or two,</strong> and note what broke it, so next time you can
            drop to a lower floor instead of stopping.
          </li>
        </List>
        <p>
          You&apos;ll forget less than you fear. A week off costs a little recall of recent cards; the thousands of hours of
          understanding behind them don&apos;t go anywhere. Your Japanese isn&apos;t a Tamagotchi.
        </p>
      </GuideSection>

      <GuideSection id="mistakes" title="Common mistakes">
        <p>
          The routine-sized ones. For the bigger list (Duolingo, romaji, translation exercises and friends), see{" "}
          <In href="/guide/traps">traps to skip</In>.
        </p>
        <List>
          <li>
            <strong>Studying in sequence.</strong> Finishing all the kana, all the words, all the grammar, then starting immersion.
            Do them together.
          </li>
          <li>
            <strong>Switching methods.</strong> Jumping between decks, apps and guides costs more than any one of them could save.
            Pick one and stick with it for months.
          </li>
          <li>
            <strong>Staying on beginner material too long.</strong> Leave graded material as soon as native content is bearable
            with a dictionary.
          </li>
          <li>
            <strong>Perfectionism.</strong> You won&apos;t understand everything, for years. Understanding more than last month is
            the goal.
          </li>
          <li>
            <strong>Too many new cards.</strong> Forty a day feels productive for two weeks, then buries you in reviews. Stay at
            10–20.
          </li>
          <li>
            <strong>Only passive listening.</strong> Background audio is a bonus, not a substitute for time spent actually
            following Japanese.
          </li>
          <li>
            <strong>Tool tinkering.</strong> A perfect setup with no reading done is zero hours. Your Anki theme does not need
            a fourth colour scheme.
          </li>
          <li>
            <strong>Comparing timelines.</strong> Other people&apos;s &ldquo;N1 in a year&rdquo; stories leave out their hours,
            background and luck. Compare yourself with last month.
          </li>
        </List>
        <H3>Where to go from here</H3>
        <p>
          Back to the <In href="/guide">overview</In>, or straight to <In href="/guide/what-to-watch-and-read">what to watch and
          read</In> if you&apos;re ready to pick your first title. When beginner material starts to feel easy, the{" "}
          <In href="/guide/intermediate">intermediate</In>, <In href="/guide/upper-intermediate">upper-intermediate</In> and{" "}
          <In href="/guide/advanced">advanced</In> chapters pick up from there. The community guides this is built on (
          <Ext href="https://learnjapanese.moe/guide/">TheMoeWay</Ext>, <Ext href="https://vnclub.org/guide/">VN Club</Ext>,{" "}
          <Ext href="https://donkuri.github.io/learn-japanese/">Donkuri</Ext>) are worth reading in full too.
        </p>
      </GuideSection>
    </ChapterShell>
  );
}
