import type { Lesson } from "../types";

/** Added real-Japanese lessons: sentence-ending particles and question endings. */

export const sentenceEndings: Lesson = {
  slug: "sentence-endings",
  title: "Sentence-ending particles: ね, よ, な, ぞ, ぜ, さ, わ and more",
  description:
    "The tiny sounds at the end of Japanese sentences, grouped by what they do: seeking agreement, giving information, emphasising, softening, musing. How to hear them, and what they tell you about the speaker.",
  points: ["n5-ne", "n5-yo", "n4-naa", "n4-kana"],
  body: `
Sentence-ending particles are the intonation of Japanese. They tell you the speaker's attitude: sure or unsure, gentle or forceful, asking for agreement or telling you news.

## Agreement and information: ね, よ, よね

| Particle | Core idea | Example |
| --- | --- | --- |
| ね | you know this too; checking | いい天気ですね。 |
| よ | here's something you may not know | もう行くよ。 |
| よね | I think so, right? | 明日休みだよね？ |

> いい ; 天気|てんき|weather ; です ; *ね|isn't it
= Nice weather, isn't it?

> 約束|やくそく|promise ; は ; 守る|まもる|keep ; *よ|I tell you
= I'll keep my promise, I tell you.

> 田中|たなか|Tanaka ; さん ; は ; 来る|くる|come ; *よね|right
= Tanaka is coming, right?

**ね** comes when both parties already know, or when the speaker seeks to share. **よ** comes when the speaker is giving news or pushing a point. Switching them changes the whole feel.

## Self-talk and musing: な, なあ, かな

**な / なあ** is a sigh, a wish, or soft thinking aloud:

> いい ; 天気|てんき|weather ; *だな|isn't it
> 行き|いき|go ; *たいなあ|I want to
= Nice weather... / I want to go...

**かな / かしら** is "I wonder":

> 明日|あした|tomorrow ; 晴れる|はれる|clear ; *かな|I wonder
= I wonder if it'll be sunny tomorrow.

> 彼|かれ|he ; は ; 来る|くる|come ; *かしら|I wonder
= I wonder if he'll come. (feminine/old-fashioned)

## Emphasis: ぞ, ぜ, さ, わ

| Particle | Feel |
| --- | --- |
| ぞ | strong, masculine: warning or declaration |
| ぜ | masculine: "let's", confident |
| さ | casual: matter of fact, "obviously" |
| わ | soft, feminine (or Kansai): emphasis |
| の | soft explanation (see the lesson on の) |

> 行く|いく|go ; *ぞ|I tell you
= I'm going!

> 行こう|いこう|let's go ; *ぜ|man
= Let's go!

> そんな ; の ; 当たり前|あたりまえ|obvious ; *さ|obviously
= That's obvious, of course.

> 私|わたし|I ; も ; 行く|いく|go ; *わ|(emphasis)
= I'm going too. (feminine/refined)

## Questions: か, の, かい, だい

| Particle | Feel |
| --- | --- |
| か | neutral question; polite when after です/ます |
| の | casual question (rising); soft explanation (falling) |
| かい | male, friendly: "…?" |
| だい | male, friendly with a question word: "…?" |

> 元気|げんき|well ; *かい|(friendly question)
= How are you? (older male)

> 何|なに|what ; を ; している|are doing ; んだ|(explaining) ; *い|(friendly)
= What're you doing?

## Pouting and reasons: もん, ってば

| Particle | Feel |
| --- | --- |
| もん | pouty reason: "but..." |
| ってば | impatient: "I told you!" |
| じゃん | casual: "isn't it obvious" |

> だって ; 嫌|いや|unwilling ; *だもん|because
= But I don't want to!

> 聞こえてる|きこえてる|hearing ; *ってば|I said
= I said I can hear you!

> いい ; *じゃん|isn't it
= It's fine, isn't it?

## Hearsay and quotes: って, とさ, そうだ

> 彼|かれ|he ; は ; 来ない|こない|doesn't come ; *って|they say
= He's not coming, apparently.

## Why they matter

The same sentence ends differently:

| Sentence | Feel |
| --- | --- |
| 行く。 | I'm going. (flat) |
| 行くよ。 | I'm going (news for you). |
| 行くね。 | I'm going (sharing, gentle). |
| 行くぞ。 | I'm going! (determined, male) |
| 行くわ。 | I'm going. (feminine, soft) |
| 行くかな。 | I wonder if I'll go. |

In an anime, the ending is often the only clue about who is speaking and how they feel. Hear them as intonation.

## Stacking

Particles can stack: 行くよね, 行くのよ, 行くんだよ, 行くんだよね. Each adds one layer, left to right.

> 行く|いく|go ; *んだ|(explaining) ; *よ|(telling) ; *ね|(sharing)
= I'm going, you know, right?

## Key points

- **ね** shares; **よ** tells; **よね** confirms.
- **な, かな, かしら** muse.
- **ぞ, ぜ, さ, わ** colour the speaker.
- **もん, ってば, じゃん** are casual emotion.
- Particles stack. Hear them as tone of voice.
`,
};

export const questionEndings: Lesson = {
  slug: "question-endings",
  title: "Asking questions: か, の, かな, っけ and indirect questions",
  description:
    "Every way of asking: polite か, casual rising tone, の-questions, tag questions (でしょう, じゃない), 'I wonder' (かな), 'what was it again?' (っけ), and embedding questions in a longer sentence (〜か分からない).",
  points: ["n5-ka", "n5-question-ka", "n5-question-mo", "n4-ka-dou-ka", "n4-embedded-question", "n4-kana"],
  body: `
## か: the question mark

**か** at the end of a sentence makes it a question:

> 学生|がくせい|student ; です ; *か*
= Are you a student?

> これ|this ; は ; 何|なん|what ; です ; *か*
= What is this?

If there is a question word (何, 誰, いつ, どこ), か is still used in polite speech. In casual speech, a question word and a rising tone are enough.

## Rising tone

In casual speech, drop か and raise your voice:

> 行く|いく|go ; ？
> ご飯|ごはん|meal ; 食べた|たべた|ate ; ？
= Are you going? / Did you eat?

## の: casual questions

**Plain form + の** (rising) is a soft, friendly question, often asking for an explanation:

> どうした|how did it go ; *の*
> 何|なに|what ; を ; 見ている|みている|watching ; *の*
= What happened? / What are you watching?

Using **の** instead of か is the usual way to ask a casual question in standard Japanese. In writing it often appears as のか: どうしたのか。

## ですか / ますか

Polite questions: add か to です/ます:

> 毎日|まいにち|every day ; 勉強します|べんきょうします|study ; *か*
= Do you study every day?

## Tag questions: でしょう, じゃない, ね

| Pattern | Meaning |
| --- | --- |
| でしょう？ | right? (confirming) |
| だよね？ | right? |
| じゃない？ | isn't it? / don't you think? |
| よね？ | surely, right? |

> これ|this ; 、 ; おいしい|delicious ; *でしょう|right
= This is delicious, isn't it?

> 変|へん|strange ; *じゃない|isn't it
= Isn't that strange?

Note: **じゃない** with a rising tone is a question, not a negative.

## Wondering: かな, かしら

**かな** (casual) and **かしら** (feminine or older) = "I wonder". They're questions you ask yourself:

> 彼|かれ|he ; は ; 来る|くる|come ; *かな|I wonder
= I wonder if he's coming.

> これ|this ; で ; いい|good ; *かな|I wonder
= Is this okay, I wonder?

## What was it again: っけ

**っけ** is a casual question for something you are trying to recall:

> 明日|あした|tomorrow ; 何時|なんじ|what time ; *だっけ|was it again
= What time is it tomorrow, again?

> あの ; 人|ひと|person ; の ; 名前|なまえ|name ; 何|なん|what ; *だっけ|was it
= What's that person's name, again?

## Questions inside sentences

To make a question part of a longer sentence, put it in plain form, followed by か:

> 彼|かれ|he ; が ; どこ ; に ; 行った|いった|went ; *か|(question) ; 分からない|わからない|don't know
= I don't know where he went.

> 何|なに|what ; を ; 食べたい|たべたい|want to eat ; *か|(question) ; 教えて|おしえて|tell ; ください
= Please tell me what you want to eat.

### Yes/no: かどうか

For yes/no questions, add どうか ("whether or not"):

> 彼|かれ|he ; が ; 来る|くる|come ; *かどうか|whether ; 分からない|わからない|don't know
= I don't know whether he's coming.

> これ|this ; で ; いい|fine ; *かどうか|whether ; 聞いて|きいて|ask ; みる
= I'll ask whether this is okay.

### か〜か: either or

> 行く|いく|go ; *か|or ; 行かない|いかない|not go ; *か|(whether) ; 決める|きめる|decide
= decide whether to go or not

## Answering

Japanese answers say whether the **statement inside the question** is right, not whether the verb is positive.

| Question | Yes | No |
| --- | --- | --- |
| 食べますか。 | はい、食べます。 | いいえ、食べません。 |
| 食べませんか。 | はい、食べません。(that's right, I'm not eating) | いいえ、食べます。(no, I am eating) |

So with a negative question, はい confirms the negative. It feels backwards to English speakers. In casual speech, うん (yes) and ううん (no) work the same way.

## Rhetorical questions

A question can be a statement:

> 誰|だれ|who ; が ; そんな|such ; こと ; を ; *するか|would do
= Who would do such a thing? (Nobody.)

> そんな ; こと ; が ; ある|exist ; *もんか|as if
= As if such a thing could happen!

## Key points

- **か** for polite questions; rising tone or **の** for casual.
- **でしょう / じゃない**: tag questions. **かな / かしら**: wondering.
- **っけ**: "what was it again?".
- **plain form + か / かどうか**: embedded questions.
- Answers agree with the statement, not the question form.
`,
};
