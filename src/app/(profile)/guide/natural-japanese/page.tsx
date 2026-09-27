import { ChapterShell, chapterMetadata } from "@/components/guide/chapter-shell";
import { Callout, Ext, GuideSection, H3, In, List, Table } from "@/components/guide/guide-parts";

export const metadata = chapterMetadata("natural-japanese");

/** Japanese in a table cell, kept from breaking mid-word on narrow screens. */
function J({ children }: { children: string }) {
  return (
    <span lang="ja" className="whitespace-nowrap">
      {children}
    </span>
  );
}

export default function NaturalJapaneseChapter() {
  return (
    <ChapterShell slug="natural-japanese">
      <GuideSection id="why" title="Why textbook Japanese sounds stiff">
        <p>
          Textbooks teach one kind of Japanese: polite, complete, carefully pronounced sentences, the kind you&apos;d use with a
          stranger. That&apos;s the right place to start, because it&apos;s the safest. But it&apos;s not how friends, families,
          anime characters or most of the internet talk, and learners who only know it tend to sound like a customer-service
          announcement.
        </p>
        <p>Compare the same exchange, textbook style and the way two friends would actually say it:</p>
        <Table
          head={["Textbook", "Between friends"]}
          rows={[
            [<J key="a">昨日、何をしましたか。</J>, <J key="b">昨日何してた？</J>],
            [<J key="c">私は家で映画を見ていました。</J>, <J key="d">家で映画見てた。</J>],
            [<J key="e">そうですか。面白かったですか。</J>, <J key="f">へえ、面白かった？</J>],
            [<J key="g">はい、とても面白かったです。</J>, <J key="h">うん、めっちゃ面白かった！</J>],
          ]}
        />
        <p>
          Everything the right-hand column does (plain forms, a contraction, a dropped particle, no subject, a back-channel
          sound, a slang intensifier) is covered below. The point isn&apos;t to replace polite Japanese: you&apos;ll need both,
          and choosing between them is part of sounding natural.
        </p>
      </GuideSection>

      <GuideSection id="plain-polite" title="Plain and polite">
        <p>
          Every Japanese verb and adjective has a plain form (食べる, 高い, 学生だ) and a polite form (食べます, 高いです,
          学生です). Which one you use says something about your relationship with the listener.
        </p>
        <Table
          head={["Use", "With"]}
          rows={[
            ["Plain", "Friends, family, children, people younger than you or at your level once you're close, talking to yourself, most online chat."],
            ["Polite (です/ます)", "Strangers, shop staff, teachers, colleagues, anyone older or senior until they invite you to be casual."],
            ["Respectful and humble (keigo)", "Customers, bosses, formal occasions. See the section at the end."],
          ]}
        />
        <List>
          <li>
            <strong>When in doubt, be polite.</strong> Too polite is slightly distant; too casual can be rude. Polite is the
            safe default for an adult learner.
          </li>
          <li>
            <strong>Mirror the other person.</strong> If a peer switches to plain speech with you, it&apos;s usually an invitation
            to do the same. タメ口 (<em>tameguchi</em>) is the word for talking as equals.
          </li>
          <li>
            <strong>People switch mid-conversation.</strong> A polite speaker slips into plain forms when they talk to themselves
            or get excited (あ、そうなんだ！), and back again. That mixing is natural, not a mistake.
          </li>
          <li>
            <strong>Relationships, not just age.</strong> The idea of <em>uchi</em> and <em>soto</em> (in-group and out-group)
            runs through it: you speak more casually inside your group and more formally about or to people outside it.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="contractions" title="Contractions">
        <p>
          Casual speech smooths out anything that takes effort to say. These contractions are everywhere in anime, manga, dramas
          and conversation, and recognising them is the single biggest step from textbook to real Japanese.
        </p>
        <Table
          head={["Full form", "Spoken", "Example"]}
          rows={[
            [<J key="1">〜ている</J>, <J key="2">〜てる</J>, <J key="3">何してるの？</J>],
            [<J key="4">〜ていく</J>, <J key="5">〜てく</J>, <J key="6">持ってく</J>],
            [<J key="7">〜ておく</J>, <J key="8">〜とく</J>, <J key="9">やっとくね</J>],
            [<J key="10">〜てしまう</J>, <J key="11">〜ちゃう / 〜じゃう</J>, <J key="12">忘れちゃった、飲んじゃった</J>],
            [<J key="13">では</J>, <J key="14">じゃ</J>, <J key="15">じゃあね、学生じゃない</J>],
            [<J key="16">〜なければ</J>, <J key="17">〜なきゃ</J>, <J key="18">行かなきゃ</J>],
            [<J key="19">〜なくては</J>, <J key="20">〜なくちゃ</J>, <J key="21">勉強しなくちゃ</J>],
            [<J key="22">という / と</J>, <J key="23">って / っていう</J>, <J key="24">明日来るって。</J>],
            [<J key="25">〜のだ / 〜のです</J>, <J key="26">〜んだ / 〜んです</J>, <J key="27">行くんだ</J>],
            [<J key="28">〜らない</J>, <J key="29">〜んない</J>, <J key="30">わかんない、つまんない</J>],
            [<J key="31">ところ</J>, <J key="32">とこ</J>, <J key="33">今いいとこ</J>],
            [<J key="34">やはり</J>, <J key="35">やっぱり / やっぱ</J>, <J key="36">やっぱやめた</J>],
          ]}
        />
        <p>
          Rougher speech goes further: vowel pairs merge (ない → ねえ, すごい → すげえ, うるさい → うるせえ). You&apos;ll hear this
          constantly from tough male characters; it&apos;s real, but it&apos;s a strong register. Recognise it before you use
          it.
        </p>
        <p>
          <strong>って</strong> deserves a note of its own, because it does so much: it quotes (明日来るって, &ldquo;(they) said
          they&apos;re coming tomorrow&rdquo;), marks a topic (それってどういう意味？, &ldquo;what does that mean?&rdquo;) and
          reports hearsay. When a sentence has って in it, something is being quoted, named or introduced.
        </p>
      </GuideSection>

      <GuideSection id="fragments" title="Dropped words and fragments">
        <List>
          <li>
            <strong>Particles go missing.</strong> は, が and を are routinely dropped in speech: ご飯食べた？ rather than ご飯を
            食べた？, and これ、いい？ rather than これはいいですか. Context does their job.
          </li>
          <li>
            <strong>Subjects and objects disappear.</strong> If it&apos;s obvious who or what you mean, you don&apos;t say it.
            Learners who say 私は in every sentence sound like they&apos;re giving a presentation.
          </li>
          <li>
            <strong>Word order loosens.</strong> The verb-last rule bends in speech: 行こうよ、一緒に, 何それ？ Afterthoughts get
            tacked onto the end.
          </li>
          <li>
            <strong>Sentences trail off.</strong> ちょっと用事が… (&ldquo;I&apos;ve got something to do…&rdquo;) is a complete,
            polite refusal. The listener fills in the rest; spelling it out can sound blunt.
          </li>
          <li>
            <strong>Questions can be just a rising tone.</strong> 行く？ is a question, 行く。 a statement. Casual speech uses
            the か particle much less than textbooks do.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="particles" title="Sentence-ending particles">
        <p>
          Small particles at the end of a sentence carry attitude: certainty, softness, a request for agreement. They&apos;re
          most of the difference between a sentence that sounds human and one that sounds like a translation.
        </p>
        <Table
          head={["Particle", "Feel", "Example"]}
          rows={[
            [<J key="1">よ</J>, "You're telling them something they don't know, or insisting.", <J key="2">これ、美味しいよ。</J>],
            [<J key="3">ね</J>, "Seeking agreement, or sharing a feeling you assume they share.", <J key="4">いい天気だね。</J>],
            [<J key="5">よね</J>, "Checking something you're fairly sure of.", <J key="6">明日だよね？</J>],
            [<J key="7">の</J>, "Explaining, or asking softly for an explanation.", <J key="8">どうしたの？</J>],
            [<J key="9">かな</J>, "Wondering, half to yourself.", <J key="10">雨降るかな。</J>],
            [<J key="11">っけ</J>, "Trying to remember something.", <J key="12">名前、何だっけ？</J>],
            [<J key="13">じゃん</J>, "\"See? Right?\" Casual, from じゃない.", <J key="14">いいじゃん！</J>],
            [<J key="15">な</J>, "Musing to yourself, or a casual, often masculine ね.", <J key="16">腹減ったな。</J>],
            [<J key="17">ぞ, ぜ</J>, "Forceful, rough, stereotypically male.", <J key="18">行くぞ！</J>],
            [<J key="19">わ</J>, "With rising intonation, stereotypically feminine; with falling intonation, used by men too.", <J key="20">素敵だわ。</J>],
          ]}
        />
        <Callout title="Gendered speech in real life">
          <p>
            Fiction exaggerates it. Researchers have long noted that individual Japanese men and women don&apos;t necessarily
            speak the way their gender is supposed to: few young women today end sentences with わ or かしら, and many men never
            say ぜ. Learn the particles so you understand them, then copy how people around your age and gender actually talk.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="pronouns" title="Pronouns and names">
        <List>
          <li>
            <strong>Avoid あなた for &ldquo;you&rdquo;.</strong> Textbooks teach it early, but in conversation it can sound
            distant or even pointed. Use the person&apos;s name with さん, or leave &ldquo;you&rdquo; out entirely, which is what
            Japanese speakers do most of the time.
          </li>
          <li>
            <strong>&ldquo;I&rdquo; has options.</strong> 私 (<em>watashi</em>) is neutral and always safe. 僕 is a softer male
            &ldquo;I&rdquo;, 俺 a rougher, casual male one; あたし and うち are casual and mostly used by women (うち also in
            western Japan). Very formal speech uses わたくし.
          </li>
          <li>
            <strong>Most of the time, say nothing.</strong> Once the conversation is about you, you don&apos;t need to keep saying
            so.
          </li>
          <li>
            <strong>Titles instead of pronouns.</strong> People are addressed by role: 先生 for teachers and doctors, 店長 for a
            shop manager, お母さん within a family. Using the title is natural; using あなた to your teacher is not.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="fillers" title="Fillers and back-channelling">
        <H3>Fillers</H3>
        <p>
          Everyone hesitates. Japanese hesitation sounds different from English &ldquo;um&rdquo; and &ldquo;like&rdquo;, and
          using the Japanese ones makes you sound far more natural while you think.
        </p>
        <Table
          head={["Filler", "Use"]}
          rows={[
            [<J key="1">えっと / えーと</J>, "\"Um, let me think.\""],
            [<J key="2">あの / あのー</J>, "Getting someone's attention, or easing into something awkward."],
            [<J key="3">なんか</J>, "\"Like\", \"kind of\", \"somehow\"; very common in casual speech."],
            [<J key="4">まあ</J>, "\"Well…\"; softens, concedes a point."],
            [<J key="5">ほら</J>, "\"Look\", \"you know\"; pointing at something shared."],
            [<J key="6">ていうか</J>, "\"I mean\", \"or rather\"; correcting or changing direction."],
          ]}
        />
        <H3>Aizuchi: showing you&apos;re listening</H3>
        <p>
          Japanese listeners make frequent small sounds while the other person talks, called <em>aizuchi</em>: うん, はい, ええ,
          そうなんだ / そうなんですね, へえ, なるほど, 本当？, マジで？ Silence while someone talks can feel like you&apos;re not
          listening. Nods count too.
        </p>
        <Callout title="はい doesn't mean yes" tone="warn">
          <p>
            An aizuchi means &ldquo;I&apos;m following you&rdquo;, not &ldquo;I agree&rdquo;. Someone who says はい all the way
            through your proposal hasn&apos;t accepted it. This trips up learners and business visitors alike. Some people also find
            なるほど a little casual toward a superior; そうなんですね is the safe choice.
          </p>
        </Callout>
      </GuideSection>

      <GuideSection id="softening" title="Softening and indirectness">
        <p>
          Japanese conversation avoids hard edges, especially when refusing, disagreeing or asking for something. A few tools do
          most of the work:
        </p>
        <List>
          <li>
            <strong>ちょっと</strong> (&ldquo;a little&rdquo;): ちょっと難しいです usually means &ldquo;no&rdquo;. ちょっと… on its own,
            trailing off, is a complete refusal.
          </li>
          <li>
            <strong>〜んですけど</strong>: sets up a request or a problem and leaves room for the other person. 道に迷ったんですけど…
            (&ldquo;I&apos;m kind of lost…&rdquo;) invites help without demanding it.
          </li>
          <li>
            <strong>〜と思います, 〜かもしれません, 〜みたい</strong>: hedging an opinion or a fact. Native speakers hedge far more
            than English speakers expect.
          </li>
          <li>
            <strong>Asking instead of telling.</strong> 〜てもらえますか, 〜てくれない？ (&ldquo;could you…?&rdquo;) rather than a
            bare command.
          </li>
        </List>
      </GuideSection>

      <GuideSection id="set-phrases" title="Set phrases">
        <p>
          Some situations have a fixed thing to say, and there&apos;s no natural way around it. Translating from English here
          gives you something grammatical that nobody says.
        </p>
        <Table
          head={["Phrase", "When"]}
          rows={[
            [<J key="1">いただきます / ごちそうさまでした</J>, "Before and after eating."],
            [<J key="2">お疲れ様です</J>, "Greeting colleagues, leaving work, after any shared effort; far more than \"good work\"."],
            [<J key="3">よろしくお願いします</J>, "Meeting someone, asking a favour, starting to work together. No English equivalent."],
            [<J key="4">すみません</J>, "Sorry, excuse me, and thank you (for trouble taken), depending on the moment."],
            [<J key="5">失礼します</J>, "Entering or leaving a room or a call, especially at work."],
            [<J key="6">ただいま / おかえり</J>, "Coming home, and welcoming someone home."],
            [<J key="7">いってきます / いってらっしゃい</J>, "Leaving home, and seeing someone off."],
          ]}
        />
        <p>
          <em>A Year to Learn Japanese</em> puts the lesson well: translate situations, not words. Notice what people say{" "}
          <em>in a situation</em>, and say that.
        </p>
      </GuideSection>

      <GuideSection id="onomatopoeia" title="Onomatopoeia">
        <p>
          Japanese has a huge stock of sound-symbolic words, and not just for sounds. Linguists sort them into words for animal
          and human sounds (擬声語), other sounds (擬音語), states and movements (擬態語) and feelings (擬情語). They&apos;re
          everywhere in manga and casual speech, and many have no neat English translation.
        </p>
        <Table
          head={["Word", "Meaning", "Example"]}
          rows={[
            [<J key="1">ドキドキ</J>, "Heart pounding: nerves, excitement, a crush.", <J key="2">ドキドキする</J>],
            [<J key="3">ワクワク</J>, "Excited anticipation.", <J key="4">ワクワクしてる</J>],
            [<J key="5">イライラ</J>, "Irritated, on edge.", <J key="6">イライラする</J>],
            [<J key="7">ペコペコ</J>, "Starving (also: bowing repeatedly).", <J key="8">お腹ペコペコ</J>],
            [<J key="9">ぐっすり</J>, "Sleeping soundly.", <J key="10">ぐっすり寝た</J>],
            [<J key="11">キラキラ</J>, "Sparkling, glittering.", <J key="12">キラキラ光る</J>],
            [<J key="13">ニコニコ</J>, "Smiling happily.", <J key="14">ニコニコしてる</J>],
            [<J key="15">ゴロゴロ</J>, "Lazing about; also rumbling thunder.", <J key="16">家でゴロゴロ</J>],
            [<J key="17">ペラペラ</J>, "Fluent (and chattering).", <J key="18">日本語ペラペラ</J>],
            [<J key="19">ギリギリ</J>, "Only just, at the last moment.", <J key="20">ギリギリ間に合った</J>],
            [<J key="21">しーん</J>, "Dead silence: a sound word for no sound.", <J key="22">しーんとした</J>],
          ]}
        />
        <p>
          Grammatically they mostly act as adverbs, often with と (キラキラと光る), or become verbs with する (ドキドキする). Many
          come doubled (ドキドキ), with っと (ぎゅっと, tightly) or with り (ぐっすり). In manga they&apos;re also drawn into the
          art as sound effects, often in katakana.
        </p>
      </GuideSection>

      <GuideSection id="slang" title="Slang">
        <p>A few words you&apos;ll hear constantly from younger speakers and online:</p>
        <Table
          head={["Word", "Meaning"]}
          rows={[
            [<J key="1">マジ / マジで</J>, "Seriously, really. マジで？ = \"For real?\""],
            [<J key="2">ヤバい</J>, "Originally \"dangerous\", now also \"amazing\"; which one depends on tone."],
            [<J key="3">めっちゃ</J>, "Very. From Kansai dialect, now used everywhere."],
            [<J key="4">ガチ</J>, "Serious, hardcore, genuinely."],
            [<J key="5">エモい</J>, "Emotional, nostalgic, moving."],
            [<J key="6">草 / ｗ</J>, "Online laughter. ｗ looks like grass (草) when repeated: ｗｗｗ."],
          ]}
        />
        <p>
          Slang ages fast and depends on who you are. It&apos;s good to understand; use it the way the people you actually talk
          with use it.
        </p>
      </GuideSection>

      <GuideSection id="role-language" title="Anime speech and role language">
        <p>
          Fiction uses stock speech styles to tell you who a character is at a glance. Linguist Kinsui Satoshi named this{" "}
          <strong>役割語</strong> (<em>yakuwarigo</em>, role language) in 2003: styles that signal age, gender or class and are
          often quite different from how any real person talks.
        </p>
        <Table
          head={["Character type", "Sounds like"]}
          rows={[
            ["Old man, professor", <J key="1">わしが知っておるのじゃ</J>],
            ["Rich young lady", <J key="2">そうですわよ、わたくしが存じておりますわ</J>],
            ["Samurai, ninja", <J key="3">そうでござる、拙者が存じておる</J>],
            ["Tough guy", <J key="4">俺様に任せろ！</J>],
          ]}
        />
        <p>
          You&apos;ll understand all of these, and that&apos;s useful. But don&apos;t pick up your speaking style from a favourite
          character: an adult learner who talks like a shōnen hero or ends sentences with ござる sounds, at best, like they&apos;re
          doing a bit. For natural speech, copy real people: vloggers, podcasters, dramas set in the present day, reality TV.
        </p>
      </GuideSection>

      <GuideSection id="kansai" title="Kansai dialect">
        <p>
          The dialect of Osaka, Kyoto and Kobe is the one you&apos;re most likely to meet in media, thanks to comedians and the
          manzai tradition; many anime characters speak it too. The basics:
        </p>
        <Table
          head={["Standard", "Kansai", "Example"]}
          rows={[
            [<J key="1">だ (copula)</J>, <J key="2">や</J>, <J key="3">そうや、ほんまや</J>],
            [<J key="4">〜ない</J>, <J key="5">〜へん / 〜ひん</J>, <J key="6">わからへん</J>],
            [<J key="7">だめ</J>, <J key="8">あかん</J>, <J key="9">それはあかん</J>],
            [<J key="10">本当</J>, <J key="11">ほんま</J>, <J key="12">ほんまに？</J>],
            [<J key="13">とても</J>, <J key="14">めっちゃ</J>, <J key="15">めっちゃええやん</J>],
            [<J key="16">〜のだ / 〜んだ</J>, <J key="17">〜ねん</J>, <J key="18">知らんねん</J>],
          ]}
        />
        <p>
          Its pitch accent is very different from Tokyo&apos;s, which is why it&apos;s instantly recognisable. なんでやねん
          (&ldquo;why on earth…?!&rdquo;) is the classic comedy retort. The <In href="/guide/advanced#dialects">advanced chapter</In>{" "}
          has more on dialects.
        </p>
      </GuideSection>

      <GuideSection id="keigo" title="When politeness goes up">
        <p>
          Natural Japanese isn&apos;t only casual. In shops, at work and on formal occasions, speech moves the other way, into{" "}
          <strong>keigo</strong> (敬語): respectful forms that raise the other person (尊敬語) and humble forms that lower yourself
          (謙譲語), on top of ordinary です/ます politeness (丁寧語).
        </p>
        <Table
          head={["Plain", "Respectful (their action)", "Humble (your action)"]}
          rows={[
            [<J key="1">いる</J>, <J key="2">いらっしゃる</J>, <J key="3">おる</J>],
            [<J key="4">言う</J>, <J key="5">おっしゃる</J>, <J key="6">申す</J>],
            [<J key="7">見る</J>, <J key="8">ご覧になる</J>, <J key="9">拝見する</J>],
            [<J key="10">食べる</J>, <J key="11">召し上がる</J>, <J key="12">いただく</J>],
            [<J key="13">する</J>, <J key="14">なさる</J>, <J key="15">いたす</J>],
          ]}
        />
        <p>
          You need to <em>understand</em> keigo early, because every shop and station announcement uses it. You need to{" "}
          <em>produce</em> it only if you work in Japanese; the <In href="/guide/advanced#keigo">advanced chapter</In> covers that.
          Good dramas to hear it in context are workplace ones, like 半沢直樹.
        </p>
      </GuideSection>

      <GuideSection id="practice" title="How to learn it">
        <List>
          <li>
            <strong>Immerse in real conversation.</strong> Podcasts with two hosts, vlogs, reality TV and present-day dramas are
            the best sources; anime is good for listening but exaggerates. The{" "}
            <In href="/guide/intermediate#recommendations">intermediate list</In> includes several.
          </li>
          <li>
            <strong>Mine sentences, not words.</strong> Natural Japanese is in the chunks: a card with 〜しなきゃ in a real line
            teaches more than a card for the word しなければならない.
          </li>
          <li>
            <strong>Notice situations.</strong> When someone in a show thanks, apologises, refuses or disagrees, notice exactly
            what they say. That&apos;s what you&apos;ll say in the same situation.
          </li>
          <li>
            <strong>Shadow casual speech.</strong> Repeating lines from a vlogger or drama gets the rhythm of contractions and
            particles into your mouth; see the <In href="/guide/speaking#before">speaking chapter</In>.
          </li>
          <li>
            <strong>Ask &ldquo;is this natural?&rdquo;</strong> Tutors and exchange partners will tell you a sentence is correct
            when it&apos;s only grammatical. Ask them how <em>they</em> would say it.
          </li>
          <li>
            <strong>Learn in both directions.</strong> Tae Kim&apos;s{" "}
            <Ext href="https://guidetojapanese.org/learn/grammar/casual">casual patterns</Ext> page is a good reference; the rest
            comes from hearing it thousands of times.
          </li>
        </List>
      </GuideSection>
    </ChapterShell>
  );
}
