import { point, s } from "../../build";

/** Sentences with です, the first particles, and pointing at things. */

export const basics = [
  point({
    id: "n5-desu",
    title: "です",
    meaning: "is, am, are (polite)",
    structure: "Noun + です",
    register: "Polite. The default with anyone you don't know well: strangers, teachers, shop staff, colleagues.",
    related: ["n5-da", "n5-ja-nai", "n5-deshita"],
    explanation: `
**です** links a topic to what it is, the way "is" or "am" does in English: 私は学生です, "I'm a student". It goes at the very end of the sentence, after the noun.

Two things surprise English speakers. First, です never changes with the subject: I am, you are and it is are all です. Second, the subject is left out whenever it's obvious, so 学生です alone is a complete sentence: "(I'm) a student."

です is the polite form, the one textbooks start with and the one to use with anyone you don't know well. Among friends it becomes だ, or disappears altogether. The final す is so light it usually sounds like "des".
`,
    sentences: [
      s("私は学生{です}。", "わたしはがくせい{です}。", "I'm a student.", {
        hint: "polite",
        near: [["だ", "Right meaning, but だ is the casual version. This sentence is polite."]],
      }),
      s("これは私の本{です}。", "これはわたしのほん{です}。", "This is my book.", {
        hint: "polite",
        near: [["でした", "でした is the past. This is about now."]],
      }),
      s("田中さんは先生{です}。", "たなかさんはせんせい{です}。", "Mr Tanaka is a teacher.", {
        hint: "polite",
        near: [["だ", "だ is the casual version. This sentence is polite."]],
      }),
      s("今日は月曜日{です}。", "きょうはげつようび{です}。", "Today is Monday.", {
        hint: "polite",
        near: [["でした", "でした is the past. Today is still Monday."]],
      }),
      s("山田{です}。よろしくお願いします。", "やまだ{です}。よろしくおねがいします。", "I'm Yamada. Nice to meet you.", {
        hint: "polite",
        near: [["だ", "Introducing yourself calls for the polite です, not the casual だ."]],
      }),
      s("駅はあそこ{です}。", "えきはあそこ{です}。", "The station is over there.", {
        hint: "polite",
        near: [["だ", "だ is the casual version. This sentence is polite."]],
      }),
    ],
  }),

  point({
    id: "n5-da",
    title: "だ",
    meaning: "is, am, are (casual)",
    structure: "Noun / な-adjective + だ",
    register: "Casual: friends and family, and the standard in writing that isn't addressed to anyone (novels, diaries, news).",
    related: ["n5-desu", "n5-yo"],
    explanation: `
**だ** is the casual version of です: 学生だ, "(I'm) a student". Between friends it's normal, and in writing that isn't talking to a reader directly (novels, manga narration, news articles) it's the standard.

A bare だ at the end of a sentence can sound blunt or matter-of-fact, so in conversation you'll often hear it softened with よ or ね: 学生だよ. In casual questions it usually drops out: 学生? not 学生だ?

One rule to remember early: だ goes after nouns and な-adjectives only. い-adjectives don't need it, so 高い alone means "it's expensive", and 高いだ is wrong.
`,
    sentences: [
      s("明日は休み{だ}。", "あしたはやすみ{だ}。", "Tomorrow's a day off.", {
        hint: "casual",
        near: [["です", "です is the polite version. This sentence is casual."]],
      }),
      s("あの人は私の兄{だ}よ。", "あのひとはわたしのあに{だ}よ。", "That guy's my big brother.", {
        hint: "casual",
        near: [["です", "です is the polite version. Talking about your brother to a friend, use だ."]],
      }),
      s("今日も雨{だ}ね。", "きょうもあめ{だ}ね。", "Rain again today, huh.", {
        hint: "casual",
        near: [["です", "です is the polite version. This sentence is casual."]],
      }),
      s("これは僕のかさ{だ}。", "これはぼくのかさ{だ}。", "This umbrella is mine.", {
        hint: "casual",
        near: [["です", "です is polite, and 僕 already tells you the speaker is being casual."]],
      }),
      s("彼女はまだ高校生{だ}。", "かのじょはまだこうこうせい{だ}。", "She's still in high school.", {
        hint: "casual",
        near: [["です", "です is the polite version. This sentence is casual."]],
      }),
    ],
  }),

  point({
    id: "n5-wa",
    title: "は",
    meaning: "as for (topic)",
    structure: "Noun + は",
    related: ["n5-ga", "n5-mo"],
    explanation: `
**は** marks the topic: what the sentence is about. Everything after it is a comment on that topic. 私は学生です is "as for me, (I'm) a student."

As a particle it's pronounced **wa**, but it's still written with the kana は (ha), a leftover from older spelling.

A topic is usually something already known in the conversation, or something general: 猫は魚が好きです, "cats like fish". Once a topic is set, Japanese keeps it without repeating it, which is one reason subjects seem to vanish from sentences.

は versus が is the classic beginner puzzle. For now: は for what you're talking about, が (later in this deck) for who does something or what exists, especially when it's new information.
`,
    sentences: [
      s("私{は}学生です。", "わたし{は}がくせいです。", "I'm a student.", {
        near: [["が", "が would single you out: \"I'm the one who's a student.\" For a plain statement about yourself, use the topic particle."]],
      }),
      s("今日{は}暑いです。", "きょう{は}あついです。", "It's hot today.", {
        near: [["が", "が would mean \"today (of all days) is the hot one\". For a plain remark about today, use the topic particle."]],
      }),
      s("父{は}医者です。", "ちち{は}いしゃです。", "My father is a doctor.", {
        near: [["が", "が would answer \"who's the doctor?\". To say something about your father, make him the topic."]],
      }),
      s("トイレ{は}どこですか。", "トイレ{は}どこですか。", "Where's the toilet?", {
        near: [["が", "With a question word like どこ after it, the thing you're asking about takes the topic particle."]],
      }),
      s("この店{は}安いです。", "このみせ{は}やすいです。", "This shop is cheap.", {
        near: [["の", "の would join 店 to the next noun. Here the shop is the topic of the sentence."]],
      }),
      s("日本語{は}難しいですね。", "にほんご{は}むずかしいですね。", "Japanese is hard, isn't it?", {
        near: [["が", "が would mean \"Japanese is the hard one\". For a comment about Japanese, make it the topic."]],
      }),
    ],
  }),

  point({
    id: "n5-ka",
    title: "か",
    meaning: "? (question)",
    structure: "Sentence + か",
    register: "Natural after polite ます/です. After a plain form it can sound rough or like thinking aloud; friends ask with rising intonation instead.",
    related: ["n5-ne", "n5-question-ka"],
    explanation: `
Put **か** at the end of a polite sentence and it becomes a question. Nothing else moves: 学生です, "(I'm) a student" becomes 学生ですか, "are you a student?"

Written Japanese often ends a か question with 。 rather than ?, since か already does the job.

In casual speech, か after a plain form sounds rough or like musing to yourself, so friends ask with a rising voice instead: 行く? "Are you going?"

Answer yes/no questions with はい and いいえ, or casually うん and ううん. The same か after a question word makes "some-" words (何か, "something"), covered later in the deck.
`,
    sentences: [
      s("学生です{か}。", "がくせいです{か}。", "Are you a student?", {
        near: [["ね", "ね asks for agreement (\"you're a student, right?\"). For a real question, use か."]],
      }),
      s("これは何です{か}。", "これはなんです{か}。", "What is this?", {
        near: [["よ", "よ tells the listener something. To ask, use か."]],
      }),
      s("駅は近いです{か}。", "えきはちかいです{か}。", "Is the station close?", {
        near: [["ね", "ね checks something you already think is true. For an open question, use か."]],
      }),
      s("コーヒーを飲みます{か}。", "コーヒーをのみます{か}。", "Do you drink coffee?", {
        near: [["よ", "よ tells the listener something. To ask, use か."]],
      }),
      s("山田さんは日本人です{か}。", "やまださんはにほんじんです{か}。", "Is Ms Yamada Japanese?", {
        near: [["ね", "ね would assume you already know. For a real question, use か."]],
      }),
    ],
  }),

  point({
    id: "n5-ja-nai",
    title: "じゃない・ではない",
    meaning: "is not",
    structure: "Noun / な-adjective + じゃない (polite: じゃありません / じゃないです)",
    register: "じゃ is spoken; では is written or careful speech. Polite: じゃありません (a little more formal) or じゃないです (very common in speech).",
    related: ["n5-desu", "n5-da", "n5-ja-nakatta", "n5-i-adj-negative"],
    explanation: `
The negative of だ is **じゃない**: 学生じゃない, "(I'm) not a student". じゃ is a contraction of では, so **ではない** is the same thing in careful or written style.

For the polite negative there are two routes, and both are common:

- **じゃありません**, a little more formal
- **じゃないです**, very common in conversation

Each has a では version too (ではありません, ではないです).

じゃない works after nouns and な-adjectives. い-adjectives have their own negative, 高くない, which comes later. ない on its own means "there isn't", so the じゃ can't be dropped.
`,
    sentences: [
      s("私は先生{じゃない}。", "わたしはせんせい{じゃない}。", "I'm not a teacher.", {
        hint: "casual",
        accept: ["ではない"],
        near: [
          ["じゃありません", "That's the polite version. This sentence is casual."],
          ["ない", "ない alone means \"there isn't\". After a noun, it's じゃない."],
        ],
      }),
      s("これは私のかばん{じゃありません}。", "これはわたしのかばん{じゃありません}。", "This isn't my bag.", {
        hint: "polite",
        accept: ["ではありません", "じゃないです", "ではないです"],
        near: [["じゃない", "Right idea, but this sentence is polite: add です, or use じゃありません."]],
      }),
      s("明日は日曜日{じゃない}よ。", "あしたはにちようび{じゃない}よ。", "Tomorrow isn't Sunday, you know.", {
        hint: "casual",
        accept: ["ではない"],
        near: [["じゃないです", "That's polite. With a bare よ between friends, use the casual form."]],
      }),
      s("あの人は日本人{ではありません}。", "あのひとはにほんじん{ではありません}。", "That person isn't Japanese.", {
        hint: "polite",
        accept: ["じゃありません", "じゃないです", "ではないです"],
        near: [["ではない", "Right idea, but this sentence is polite: ではありません or ではないです."]],
      }),
      s("それは田中さんの車{じゃないです}。", "それはたなかさんのくるま{じゃないです}。", "That's not Mr Tanaka's car.", {
        hint: "polite",
        accept: ["じゃありません", "ではありません", "ではないです"],
        near: [["じゃない", "Right idea, but this sentence is polite: add です."]],
      }),
    ],
  }),

  point({
    id: "n5-deshita",
    title: "でした",
    meaning: "was, were (polite)",
    structure: "Noun / な-adjective + でした",
    register: "Polite. The casual version is だった.",
    related: ["n5-desu", "n5-ja-nakatta", "n5-i-adj-past"],
    explanation: `
**でした** is the past of です: 学生でした, "(I) was a student". Japanese marks the past at the end of the sentence, so it's でした whoever you're talking about.

The casual version is **だった**: 学生だった.

Like です, でした comes after nouns and な-adjectives. い-adjectives make their own past with かった, so it's 高かったです, never 高いでした. That's one of the most common beginner slips, and it's worth watching for.

Japanese doesn't need a time word to use the past, but it often has one: 昨日 (yesterday), 先週 (last week), 去年 (last year). They're handy clues that a sentence wants でした.
`,
    sentences: [
      s("昨日は雨{でした}。", "きのうはあめ{でした}。", "It rained yesterday.", {
        hint: "polite, past",
        near: [
          ["です", "です is present. This was yesterday."],
          ["だった", "Right tense, but casual. This sentence is polite."],
        ],
      }),
      s("去年、私は大学生{でした}。", "きょねん、わたしはだいがくせい{でした}。", "Last year I was a university student.", {
        hint: "polite, past",
        near: [["です", "です is present. 去年 puts this in the past."]],
      }),
      s("テストは先週の金曜日{でした}。", "テストはせんしゅうのきんようび{でした}。", "The test was last Friday.", {
        hint: "polite, past",
        near: [["だった", "Right tense, but casual. This sentence is polite."]],
      }),
      s("昨日の夜、町はとても静か{でした}。", "きのうのよる、まちはとてもしずか{でした}。", "The town was very quiet last night.", {
        hint: "polite, past",
        near: [["です", "です is present. This was last night."]],
      }),
      s("先週は休み{でした}。", "せんしゅうはやすみ{でした}。", "I was off last week.", {
        hint: "polite, past",
        near: [["だった", "Right tense, but casual. This sentence is polite."]],
      }),
    ],
  }),

  point({
    id: "n5-ja-nakatta",
    title: "じゃなかった",
    meaning: "was not",
    structure: "Noun / な-adjective + じゃなかった (polite: じゃありませんでした / じゃなかったです)",
    register: "では instead of じゃ is the careful or written version, as in the present.",
    related: ["n5-ja-nai", "n5-deshita"],
    explanation: `
To say something **wasn't**, take じゃない and put it in the past the way an い-adjective does: ない becomes **なかった**. So 学生じゃなかった is "(I) wasn't a student".

The polite versions follow the same two routes as the present:

- **じゃありませんでした**: the ません form plus でした
- **じゃなかったです**: the casual past plus です

As always, では in place of じゃ is the careful, written version.

A very common slip is じゃないでした. It sounds logical, but Japanese marks the past on ない itself, not with でした after it.
`,
    sentences: [
      s("昨日は雨{じゃなかった}。", "きのうはあめ{じゃなかった}。", "It didn't rain yesterday.", {
        hint: "casual, past",
        accept: ["ではなかった"],
        near: [
          ["じゃない", "That's present. This was yesterday."],
          ["じゃないでした", "Close, but the past goes on ない itself: じゃなかった."],
        ],
      }),
      s("あの店は有名{じゃありませんでした}。", "あのみせはゆうめい{じゃありませんでした}。", "That shop wasn't famous.", {
        hint: "polite, past",
        accept: ["ではありませんでした", "じゃなかったです", "ではなかったです"],
        near: [["じゃないでした", "Close, but the past goes on ない itself: じゃなかったです, or じゃありませんでした."]],
      }),
      s("テストは簡単{じゃなかったです}。", "テストはかんたん{じゃなかったです}。", "The test wasn't easy.", {
        hint: "polite, past",
        accept: ["ではなかったです", "じゃありませんでした", "ではありませんでした"],
        near: [["じゃなかった", "Right, but this sentence is polite: add です."]],
      }),
      s("前の先生は日本人{じゃなかった}よ。", "まえのせんせいはにほんじん{じゃなかった}よ。", "My old teacher wasn't Japanese.", {
        hint: "casual, past",
        accept: ["ではなかった"],
        near: [["じゃない", "That's present. 前の先生 is someone from the past."]],
      }),
      s("子どものころ、魚は好き{じゃありませんでした}。", "こどものころ、さかなはすき{じゃありませんでした}。", "As a kid, I didn't like fish.", {
        hint: "polite, past",
        accept: ["ではありませんでした", "じゃなかったです", "ではなかったです"],
        near: [["じゃありません", "That's present. 子どものころ puts it in the past."]],
      }),
    ],
  }),

  point({
    id: "n5-mo",
    title: "も",
    meaning: "also, too",
    structure: "Noun + も (in place of は, が or を)",
    related: ["n5-wa", "n5-question-mo"],
    explanation: `
**も** means "also" or "too". It goes right after the thing that's also true: 私も学生です, "I'm a student too."

It **replaces** は, が and を rather than stacking on them, so it's 私も, never 私はも. With other particles such as に or で it goes after them: 京都にも行きました, "I went to Kyoto too."

With a negative, も means "either": 私も分かりません, "I don't understand either."

Say it twice for "both … and": 犬も猫も好きです, "I like both dogs and cats." With a negative, the doubled version means "neither … nor": 肉も魚も食べません, "I eat neither meat nor fish."
`,
    sentences: [
      s("私{も}学生です。", "わたし{も}がくせいです。", "I'm a student too.", {
        near: [["は", "は would just make you the topic. For \"too\", use も."]],
      }),
      s("明日{も}雨ですか。", "あした{も}あめですか。", "Is it going to rain tomorrow too?", {
        near: [["は", "は asks about tomorrow on its own. For \"tomorrow too\", use も."]],
      }),
      s("田中さん{も}来ます。", "たなかさん{も}きます。", "Mr Tanaka's coming too.", {
        near: [["が", "が would just say Tanaka's coming. For \"too\", use も."]],
      }),
      s("犬が好きです。猫{も}好きです。", "いぬがすきです。ねこ{も}すきです。", "I like dogs. I like cats too.", {
        near: [["が", "が would just say you like cats. To add them to the dogs, use も."]],
      }),
      s("私{も}分かりません。", "わたし{も}わかりません。", "I don't understand either.", {
        near: [["は", "は would just make you the topic. For \"me either\", use も."]],
      }),
      s("京都に{も}行きました。", "きょうとに{も}いきました。", "I went to Kyoto too.", {
        near: [["は", "には would contrast Kyoto with other places. For \"Kyoto too\", use にも."]],
      }),
    ],
  }),

  point({
    id: "n5-no",
    title: "の",
    meaning: "'s, of (linking nouns)",
    structure: "Noun + の + Noun",
    related: ["n5-na-adjectives", "n5-no-one"],
    explanation: `
**の** joins two nouns so that the first describes the second. Often it's possession, like 's: 私の本, "my book"; 田中さんの車, "Mr Tanaka's car".

It covers much more than ownership, though: 日本語の本 is a Japanese book (or a book about Japanese), 大学の先生 is a university teacher, 三時の電車 is the three o'clock train.

The order is always describer first, thing described last. That's the reverse of English "of": 東京の駅 is "the station in Tokyo".

When the second noun is obvious you can leave it out: これは私のです, "this is mine".
`,
    sentences: [
      s("これは私{の}本です。", "これはわたし{の}ほんです。", "This is my book.", {
        near: [["な", "な links な-adjectives to nouns. Between two nouns, use の."]],
      }),
      s("田中さんは日本語{の}先生です。", "たなかさんはにほんご{の}せんせいです。", "Mr Tanaka is a Japanese teacher.", {
        near: [["な", "な links な-adjectives to nouns. Between two nouns, use の."]],
      }),
      s("母{の}車は赤いです。", "はは{の}くるまはあかいです。", "My mother's car is red.", {
        near: [["は", "は would make your mother the topic. To say whose car, use の."]],
      }),
      s("七時{の}電車に乗ります。", "しちじ{の}でんしゃにのります。", "I'll take the seven o'clock train.", {
        near: [["に", "七時に would mean \"at seven\". To describe which train, use の."]],
      }),
      s("そのかさは誰{の}ですか。", "そのかさはだれ{の}ですか。", "Whose umbrella is that?", {
        near: [["が", "誰が asks who does something. For \"whose\", use の."]],
      }),
    ],
  }),

  point({
    id: "n5-kore-sore-are",
    title: "これ・それ・あれ・どれ",
    meaning: "this, that, that over there, which one",
    structure: "これ / それ / あれ / どれ (on their own, as nouns)",
    related: ["n5-kono-sono-ano", "n5-koko-soko-asoko"],
    explanation: `
Japanese splits "this" and "that" three ways, by who it's near:

- **これ**: near me, the speaker
- **それ**: near you, the listener (or something you just mentioned)
- **あれ**: away from both of us
- **どれ**: which one, out of three or more

They stand alone as nouns and take particles directly: これは何ですか, "what is this?"

The same こ・そ・あ・ど pattern runs through a whole family of words (この, ここ, こちら…), so learning it once pays off several times. One detail: どれ, like other question words, takes が rather than は as a subject: どれが好きですか.
`,
    sentences: [
      s("{これ}は私のかばんです。", "{これ}はわたしのかばんです。", "This is my bag.", {
        hint: "near me",
        near: [["この", "この needs a noun right after it (このかばん). On its own, use これ."]],
      }),
      s("{それ}は何ですか。", "{それ}はなんですか。", "What's that you've got?", {
        hint: "near you",
        near: [["あれ", "あれ is for things far from both of you. For something the listener has, use それ."]],
      }),
      s("{あれ}は富士山です。", "{あれ}はふじさんです。", "That's Mount Fuji over there.", {
        hint: "far from both of us",
        near: [["それ", "それ is near the listener. For something far from both of you, use あれ."]],
      }),
      s("{どれ}があなたのですか。", "{どれ}があなたのですか。", "Which one is yours?", {
        hint: "which one",
        near: [
          ["どの", "どの needs a noun right after it. On its own, use どれ."],
          ["何", "何 is \"what\". For \"which one\" out of several, use どれ."],
        ],
      }),
      s("{これ}をください。", "{これ}をください。", "I'll take this one, please.", {
        hint: "near me",
        near: [["この", "この needs a noun right after it. On its own, use これ."]],
      }),
      s("{それ}はいいですね。", "{それ}はいいですね。", "That sounds good.", {
        hint: "what you just said",
        near: [["あれ", "For something the other person just said, use それ."]],
      }),
    ],
  }),

  point({
    id: "n5-kono-sono-ano",
    title: "この・その・あの・どの",
    meaning: "this…, that…, that … over there, which…",
    structure: "この / その / あの / どの + Noun",
    related: ["n5-kore-sore-are"],
    explanation: `
**この, その, あの** and **どの** make the same three-way split as これ, それ, あれ and どれ, but they can't stand alone: they always come right before a noun.

- この本: this book (near me)
- その本: that book (near you)
- あの本: that book over there
- どの本: which book?

Two extras worth knowing. あの also points at something both speakers know about but that isn't here: あの店 can mean "that shop (you know the one)". And その points back at something just mentioned: その人, "that person (I was talking about)".
`,
    sentences: [
      s("{この}本は面白いです。", "{この}ほんはおもしろいです。", "This book is interesting.", {
        hint: "near me",
        near: [["これ", "これ stands alone. Right before a noun, use この."]],
      }),
      s("{その}かばんはいくらですか。", "{その}かばんはいくらですか。", "How much is that bag?", {
        hint: "near you",
        near: [["それ", "それ stands alone. Right before a noun, use その."]],
      }),
      s("{あの}人は誰ですか。", "{あの}ひとはだれですか。", "Who's that person over there?", {
        hint: "over there",
        near: [["あれ", "あれ stands alone. Right before a noun, use あの."]],
      }),
      s("{どの}電車に乗りますか。", "{どの}でんしゃにのりますか。", "Which train are you taking?", {
        hint: "which",
        near: [["どれ", "どれ stands alone. Right before a noun, use どの."]],
      }),
      s("{あの}店のラーメン、おいしかったね。", "{あの}みせのラーメン、おいしかったね。", "The ramen at that place was great, wasn't it?", {
        hint: "the one we both know",
        near: [["その", "その points at something just mentioned. For a place you both remember, use あの."]],
      }),
    ],
  }),

  point({
    id: "n5-koko-soko-asoko",
    title: "ここ・そこ・あそこ・どこ",
    meaning: "here, there, over there, where",
    structure: "ここ / そこ / あそこ / どこ",
    related: ["n5-kore-sore-are"],
    explanation: `
Places follow the same こ・そ・あ・ど pattern:

- **ここ**: here, near me
- **そこ**: there, near you
- **あそこ**: over there, away from both of us
- **どこ**: where?

They're nouns, so they take particles: ここに座ってください, "please sit here"; どこへ行きますか, "where are you going?"

A politer set, **こちら・そちら・あちら・どちら**, literally "this way, that way", is used for directions and in polite speech: お手洗いはあちらです, "the restrooms are that way". You'll hear it constantly in shops and stations.

As with これ and それ, the line between そこ and あそこ is about the listener: somewhere near them, or somewhere they just mentioned, is そこ.
`,
    sentences: [
      s("駅は{どこ}ですか。", "えきは{どこ}ですか。", "Where's the station?", {
        hint: "where",
        near: [["どれ", "どれ is \"which one\". For \"where\", use どこ."]],
      }),
      s("トイレは{あそこ}です。", "トイレは{あそこ}です。", "The toilet's over there.", {
        hint: "over there",
        near: [["あれ", "あれ is a thing. For a place, use あそこ."]],
      }),
      s("{ここ}はどこですか。", "{ここ}はどこですか。", "Where are we?", {
        hint: "here",
        near: [["これ", "これ is a thing. To ask about the place you're in, use ここ."]],
      }),
      s("{そこ}は危ないですよ。", "{そこ}はあぶないですよ。", "It's dangerous where you are!", {
        hint: "where you are",
        near: [["あそこ", "あそこ is far from both of you. For where the listener is, use そこ."]],
      }),
      s("私の家は{ここ}から近いです。", "わたしのいえは{ここ}からちかいです。", "My house is close to here.", {
        hint: "here",
        near: [["これ", "これ is a thing. For a place, use ここ."]],
      }),
      s("すみません、{どこ}で買いましたか。", "すみません、{どこ}でかいましたか。", "Sorry, where did you buy it?", {
        hint: "where",
        near: [["何", "何で would ask \"how\" or \"with what\". For \"where\", use どこ."]],
      }),
    ],
  }),

  point({
    id: "n5-ne",
    title: "ね",
    meaning: "…, isn't it? right? (shared feeling)",
    structure: "Sentence + ね",
    related: ["n5-yo", "n5-ka"],
    explanation: `
**ね** at the end of a sentence invites the listener to agree, or shows you share their feeling: いい天気ですね, "nice weather, isn't it?" It assumes the other person knows or feels the same, so it sounds warm and conversational. You'll hear it constantly.

With a rising voice it checks a fact: 明日ですね? "It's tomorrow, right?"

Compare **よ**, which tells the listener something they don't know. Using ね for news ("my name is Sato, isn't it") sounds odd, and using よ where ね belongs can come across as pushy.
`,
    sentences: [
      s("今日は暑いです{ね}。", "きょうはあついです{ね}。", "It's hot today, isn't it?", {
        near: [["よ", "よ tells someone something new. For weather you're both feeling, use ね."]],
      }),
      s("この本、面白いです{ね}。", "このほん、おもしろいです{ね}。", "This book's interesting, isn't it?", {
        near: [["か", "か would make it a real question. To share your opinion and invite agreement, use ね."]],
      }),
      s("テストは明日です{ね}。", "テストはあしたです{ね}。", "The test's tomorrow, right?", {
        hint: "checking",
        near: [["か", "か asks an open question. To check something you think you know, use ね."]],
      }),
      s("わあ、きれいです{ね}。", "わあ、きれいです{ね}。", "Wow, it's beautiful, isn't it?", {
        near: [["よ", "よ would tell them something they don't know. You're both looking at it: use ね."]],
      }),
      s("日本語が上手です{ね}。", "にほんごがじょうずです{ね}。", "Your Japanese is really good!", {
        near: [["よ", "よ would sound like informing them of their own skill. For a compliment, use ね."]],
      }),
    ],
  }),

  point({
    id: "n5-yo",
    title: "よ",
    meaning: "you know, I tell you (new information)",
    structure: "Sentence + よ",
    related: ["n5-ne"],
    explanation: `
**よ** marks what you're saying as news to the listener, something you want them to know or notice: 電車が来ますよ, "the train's coming!" It's like "you know" or an exclamation mark in English.

Used well it's helpful and friendly ("your bag's open, you know"). Overused, or said to someone who already knows, it can sound pushy, like you're correcting them.

It combines with ね as **よね**, which asks for agreement on something you're fairly sure of: 明日ですよね, "it's tomorrow, isn't it?"
`,
    sentences: [
      s("電車が来ます{よ}。", "でんしゃがきます{よ}。", "The train's coming!", {
        near: [["ね", "ね assumes the listener already knows. To tell them something new, use よ."]],
      }),
      s("このケーキ、おいしいです{よ}。", "このケーキ、おいしいです{よ}。", "This cake is really good, you know.", {
        near: [["ね", "ね would assume they've tried it. To recommend it, use よ."]],
      }),
      s("大丈夫です{よ}。", "だいじょうぶです{よ}。", "It's fine, really.", {
        near: [["か", "か would ask whether it's fine. To reassure someone, use よ."]],
      }),
      s("明日は休みです{よ}。", "あしたはやすみです{よ}。", "Tomorrow's a holiday, you know.", {
        near: [["か", "か would make it a question. To tell them, use よ."]],
      }),
      s("あ、さいふが落ちました{よ}。", "あ、さいふがおちました{よ}。", "Oh, you dropped your wallet.", {
        near: [["ね", "ね assumes they already know. They didn't notice: use よ."]],
      }),
    ],
  }),

  point({
    id: "n5-to-and",
    title: "と (and)",
    meaning: "and (joining nouns)",
    structure: "Noun + と + Noun",
    related: ["n5-ya", "n5-to-with"],
    explanation: `
**と** joins nouns: 犬と猫, "dogs and cats". It gives a complete list, "A and B" and nothing else. For "A, B and so on", Japanese uses や instead.

と only joins nouns. It never links verbs, adjectives or whole sentences: for "I ate and slept", Japanese changes the verb's form instead (the て-form, later in this deck).

With more than two items, と goes between each: パンとたまごと牛乳, "bread, eggs and milk".

The same と after a person means "with" (友達と行きます, "I'm going with a friend"), a separate point further on.
`,
    sentences: [
      s("パン{と}たまごを買いました。", "パン{と}たまごをかいました。", "I bought bread and eggs.", {
        near: [
          ["や", "や suggests there were other things too. For exactly these two, use と."],
          ["そして", "そして joins sentences. Between two nouns, use と."],
        ],
      }),
      s("私{と}妹は学生です。", "わたし{と}いもうとはがくせいです。", "My little sister and I are students.", {
        near: [["も", "も would mean \"I also\". To join the two of you, use と."]],
      }),
      s("月曜日{と}木曜日は忙しいです。", "げつようび{と}もくようびはいそがしいです。", "I'm busy on Mondays and Thursdays.", {
        near: [["や", "や would suggest other days too. For exactly these two, use と."]],
      }),
      s("東京{と}大阪に行きました。", "とうきょう{と}おおさかにいきました。", "I went to Tokyo and Osaka.", {
        near: [["そして", "そして joins sentences. Between two nouns, use と."]],
      }),
      s("机の上に本{と}ペンがあります。", "つくえのうえにほん{と}ペンがあります。", "There's a book and a pen on the desk.", {
        near: [["や", "や suggests other things are there too. For just these two, use と."]],
      }),
    ],
  }),
];
