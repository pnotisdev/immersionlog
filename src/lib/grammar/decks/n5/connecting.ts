import { point, s, word } from "../../build";

/** Linking clauses, giving reasons and plans, and comparing. */

const TA_BEFORE_MAE = "前に always takes the dictionary form, even when the whole sentence is in the past.";

export const connecting = [
  point({
    id: "n5-mae-ni",
    title: "〜前に",
    meaning: "before (doing)",
    structure: "Verb dictionary form + 前に / Noun + の + 前に",
    related: ["n5-ato-de", "n5-te-kara", "n5-plain-present"],
    explanation: `
**前に** means "before": 寝る前に歯を磨きます, "I brush my teeth before I go to bed".

The verb before 前に is always in the **dictionary form**, whatever the tense of the sentence. 日本に来る前に勉強しました, "I studied before I came to Japan": the coming hadn't happened yet at the time of studying, so it stays 来る.

After a noun, add の: 食事の前に, "before the meal"; 授業の前に, "before class".

On its own, 前に is "before, previously": 前に一度会いました, "we've met once before". And without に, 前 is simply "in front of": 駅の前, "in front of the station".
`,
    sentences: [
      s("毎晩、{寝る前に}歯を磨きます。", "まいばん、{ねるまえに}はをみがきます。", "I brush my teeth every night before bed.", {
        hint: "寝る",
        near: [
          ["寝た前に", TA_BEFORE_MAE],
          ["寝ます前に", "Before 前に, use the plain dictionary form, even in a polite sentence."],
        ],
      }),
      s("{出かける前に}電話してください。", "{でかけるまえに}でんわしてください。", "Please call before you leave.", {
        hint: "出かける",
        near: [["出かけた前に", TA_BEFORE_MAE]],
      }),
      s("日本に{来る前に}、少し日本語を勉強しました。", "にほんに{くるまえに}、すこしにほんごをべんきょうしました。", "Before I came to Japan I studied a little Japanese.", {
        hint: "来る",
        near: [["来た前に", TA_BEFORE_MAE]],
      }),
      s("{食事の前に}手を洗いましょう。", "{しょくじのまえに}てをあらいましょう。", "Let's wash our hands before the meal.", {
        hint: "食事",
        near: [
          ["食事前に", "食事前に is used too, especially in writing. This point practises the の: 食事の前に."],
          ["食事前", "After a noun, add の and に: 食事の前に."],
        ],
      }),
      s("授業が{始まる前に}、トイレに行きます。", "じゅぎょうが{はじまるまえに}、トイレにいきます。", "I'll go to the toilet before class starts.", {
        hint: "始まる",
        near: [["始まった前に", TA_BEFORE_MAE]],
      }),
    ],
  }),

  point({
    id: "n5-ato-de",
    title: "〜後で",
    meaning: "after (doing), later",
    structure: "Verb た-form + 後で / Noun + の + 後で",
    related: ["n5-mae-ni", "n5-te-kara"],
    explanation: `
**後で** (あとで) means "after": 食べた後で薬を飲んでください, "please take the medicine after eating".

It's the mirror image of 前に: the verb before it is in the **た-form**, because the first action is finished by then. After a noun, add の: 仕事の後で, "after work".

On its own, 後で means "later": 後で電話します, "I'll call you later". It's the classic polite way to put something off.

てから (after doing) is close. 後で simply places B after A in time; てから stresses doing A first, then B, as a sequence.
`,
    sentences: [
      s("ご飯を{食べた後で}、薬を飲んでください。", "ごはんを{たべたあとで}、くすりをのんでください。", "Please take the medicine after eating.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "past", tail: "後で", marker: "で" },
        near: [["食べる後で", "後で takes the た-form: 食べた後で."]],
      }),
      s("授業が{終わった後で}、図書館に行きます。", "じゅぎょうが{おわったあとで}、としょかんにいきます。", "After class finishes I'll go to the library.", {
        hint: "終わる",
        conj: { word: word("終わる", "おわる", "godan"), form: "past", tail: "後で", marker: "で" },
        near: [["終わる後で", "後で takes the た-form: 終わった後で."]],
      }),
      s("{仕事の後で}、飲みに行きませんか。", "{しごとのあとで}、のみにいきませんか。", "Would you like to go for a drink after work?", {
        hint: "仕事",
        near: [["仕事後で", "After a noun, add の: 仕事の後で."]],
      }),
      s("映画を{見た後で}、ご飯を食べました。", "えいがを{みたあとで}、ごはんをたべました。", "We had dinner after the film.", {
        hint: "見る",
        conj: { word: word("見る"), form: "past", tail: "後で", marker: "で" },
        near: [["見る後で", "後で takes the た-form: 見た後で."]],
      }),
      s("宿題は{後で}します。", "しゅくだいは{あとで}します。", "I'll do my homework later.", {
        hint: "later",
        near: [["前に", "前に is \"before\". For \"later\", use 後で."]],
      }),
    ],
  }),

  point({
    id: "n5-toki",
    title: "〜時",
    meaning: "when, at the time",
    structure: "Plain form / い-adjective / な-adjective + な / Noun + の + 時",
    related: ["n5-mae-ni", "n5-ato-de"],
    explanation: `
**時** (とき) means "when" or "the time when": 子どもの時, "when I was a child"; 暇な時, "when I'm free". It's a noun, so whatever comes before it connects the way it would to any noun:

- verbs and い-adjectives in the plain form: 分からない時, 寒い時
- な-adjectives with な: 暇な時
- nouns with の: 子どもの時

The verb's tense matters. 日本に行く時 is "when I go to Japan", on the way or before; 日本に行った時 is "when I went to Japan", once there. So a book bought in Japan is 行った時に買った.

Even in a polite sentence, the part before 時 stays plain: 分からない時は聞いてください.
`,
    sentences: [
      s("子ども{の}時、よく川で泳ぎました。", "こども{の}とき、よくかわでおよぎました。", "As a kid I often swam in the river.", {
        near: [["な", "な is for な-adjectives. After a noun, 時 takes の."]],
      }),
      s("{暇な}時、何をしますか。", "{ひまな}とき、なにをしますか。", "What do you do in your free time?", {
        hint: "暇",
        near: [["暇の", "暇 is a な-adjective: 暇な時."]],
      }),
      s("日本に{行った}時、この本を買いました。", "にほんに{いった}とき、このほんをかいました。", "I bought this book when I went to Japan.", {
        hint: "行く",
        conj: { word: word("行く"), form: "past", marker: "た" },
        near: [["行く", "行く時 would be on the way there. You bought it after arriving: 行った時."]],
      }),
      s("{分からない}時は、聞いてください。", "{わからない}ときは、きいてください。", "When you don't understand, please ask.", {
        hint: "分かる, negative",
        conj: { word: word("分かる"), form: "negative", marker: "ない" },
        near: [["分かりません", "Before 時, use the plain form, even in a polite sentence."]],
      }),
      s("{寒い}時は、温かいお茶を飲みます。", "{さむい}ときは、あたたかいおちゃをのみます。", "When it's cold, I drink hot tea.", {
        hint: "寒い",
        near: [
          ["寒いの", "い-adjectives go straight before 時: 寒い時."],
          ["寒いな", "い-adjectives go straight before 時, with no な."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-nagara",
    title: "〜ながら",
    meaning: "while (doing)",
    structure: "Verb ます-stem + ながら",
    related: ["n5-te-and", "n5-toki"],
    explanation: `
**ながら** joins two actions done at the same time by the same person: 音楽を聞きながら勉強します, "I study while listening to music".

It goes on the ます-stem: 聞きます → 聞きながら, 見ます → 見ながら, 食べます → 食べながら.

The main action comes last; the ながら one is in the background. テレビを見ながらご飯を食べる is mostly about eating, with the TV on.

Both actions have to be yours. For "while someone else was doing something", Japanese uses a different pattern (間に, later). And the て-form isn't the same: 聞いて勉強する would mean listening first, then studying.
`,
    sentences: [
      s("音楽を{聞きながら}勉強します。", "おんがくを{ききながら}べんきょうします。", "I study while listening to music.", {
        hint: "聞く",
        conj: { word: word("聞く"), form: "polite", cut: "ます", tail: "ながら" },
        near: [["聞いて", "The て-form lists actions in order. For doing both at once, use ながら."]],
      }),
      s("テレビを{見ながら}ご飯を食べます。", "テレビを{みながら}ごはんをたべます。", "I eat while watching TV.", {
        hint: "見る",
        conj: { word: word("見る"), form: "polite", cut: "ます", tail: "ながら" },
        near: [["見るながら", "ながら goes on the ます-stem: 見ながら."]],
      }),
      s("{歩きながら}電話するのは危ないですよ。", "{あるきながら}でんわするのはあぶないですよ。", "It's dangerous to talk on the phone while walking.", {
        hint: "歩く",
        conj: { word: word("歩く"), form: "polite", cut: "ます", tail: "ながら" },
        near: [["歩くながら", "ながら goes on the ます-stem: 歩き."]],
      }),
      s("コーヒーを{飲みながら}話しましょう。", "コーヒーを{のみながら}はなしましょう。", "Let's talk over coffee.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "polite", cut: "ます", tail: "ながら" },
        near: [["飲んで", "The て-form lists actions in order. For doing both at once, use ながら."]],
      }),
      s("母はいつも歌を{歌いながら}料理を作ります。", "はははいつもうたを{うたいながら}りょうりをつくります。", "My mother always sings while she cooks.", {
        hint: "歌う",
        conj: { word: word("歌う", "うたう", "godan"), form: "polite", cut: "ます", tail: "ながら" },
        near: [["歌うながら", "ながら goes on the ます-stem: 歌い."]],
      }),
    ],
  }),

  point({
    id: "n5-kara-because",
    title: "〜から (reason)",
    meaning: "because, so",
    structure: "Sentence + から, result",
    related: ["n5-doushite", "n5-kara-made", "n5-te-kara"],
    explanation: `
After a full clause, **から** gives a reason: 暑いから、窓を開けてください, "it's hot, so please open the window".

The order is the reverse of English "because": reason first, then から, then the result. Read it as "…, so …".

It can end a sentence too, as the answer to どうして: どうして休んだの? —— 熱があったから, "(because) I had a fever".

After nouns and な-adjectives, the だ stays: 雨だから, 暇だから. Politely, です/ます can come before から: 雨ですから.

ので means much the same and sounds softer and more objective; you'll meet it at N4.
`,
    sentences: [
      s("暑い{から}、窓を開けてください。", "あつい{から}、まどをあけてください。", "It's hot, so please open the window.", {
        near: [
          ["ので", "ので works too and sounds softer. This point practises から."],
          ["けど", "けど is \"but\". For a reason, use から."],
        ],
      }),
      s("明日はテストがあります{から}、今日は勉強します。", "あしたはテストがあります{から}、きょうはべんきょうします。", "I have a test tomorrow, so I'm studying today.", {
        near: [["が", "が after a clause is \"but\". For \"so\", use から."]],
      }),
      s("雨だ{から}、今日は行かない。", "あめだ{から}、きょうはいかない。", "It's raining, so I'm not going today.", {
        near: [["けど", "けど is \"but\". For \"so\", use から."]],
      }),
      s("忙しかった{から}、行けませんでした。", "いそがしかった{から}、いけませんでした。", "I was busy, so I couldn't go.", {
        near: [["ので", "ので works too and sounds softer. This point practises から."]],
      }),
      s("危ないです{から}、触らないでください。", "あぶないです{から}、さわらないでください。", "It's dangerous, so please don't touch it.", {
        near: [["けど", "けど is \"but\". For a reason, use から."]],
      }),
    ],
  }),

  point({
    id: "n5-ga-but",
    title: "〜が (but)",
    meaning: "but, and (softening)",
    structure: "Sentence + が, sentence",
    register: "Polite and a little formal. In casual speech, けど.",
    related: ["n5-kedo", "n5-demo", "n5-ga"],
    explanation: `
After a whole clause, **が** means "but": 日本語は難しいですが、面白いです, "Japanese is hard, but it's interesting".

This isn't the subject が. You can tell them apart by what comes before: the subject が follows a noun (猫が), the "but" が follows a complete clause, usually ending in です or ます.

It also softens an opening, with no real contrast at all: すみませんが、駅はどこですか, "excuse me, (but) where's the station?"; 失礼ですが…, "pardon me, but…".

In polite speech it's the natural "but". Among friends, けど (next point) is more common.
`,
    sentences: [
      s("日本語は難しいです{が}、面白いです。", "にほんごはむずかしいです{が}、おもしろいです。", "Japanese is hard, but it's interesting.", {
        near: [
          ["けど", "けど means the same and is more casual. This point practises が."],
          ["から", "から is \"so\". For \"but\", use が."],
        ],
      }),
      s("行きたいです{が}、時間がありません。", "いきたいです{が}、じかんがありません。", "I'd like to go, but I don't have time.", {
        near: [["から", "から is \"so\". For \"but\", use が."]],
      }),
      s("すみません{が}、駅はどこですか。", "すみません{が}、えきはどこですか。", "Excuse me, where's the station?", {
        near: [["けど", "けど works in casual speech. With a stranger, すみませんが."]],
      }),
      s("この店は高いです{が}、とてもおいしいです。", "このみせはたかいです{が}、とてもおいしいです。", "This place is expensive, but it's really good.", {
        near: [["そして", "そして is \"and\". The two halves contrast, so use が."]],
      }),
      s("失礼です{が}、お名前は？", "しつれいです{が}、おなまえは？", "Excuse me, may I ask your name?", {
        near: [["けど", "けど is casual. For this polite opening, use が."]],
      }),
    ],
  }),

  point({
    id: "n5-kedo",
    title: "〜けど",
    meaning: "but, though",
    structure: "Sentence + けど, sentence",
    register: "Casual. けれど and けれども are the fuller, slightly more careful versions.",
    related: ["n5-ga-but", "n5-demo"],
    explanation: `
**けど** is the everyday "but": 日本語は難しいけど、楽しい, "Japanese is hard, but it's fun". It follows a full clause, like the "but" が, and sounds more casual.

It also does a lot of softening. Ending a sentence with けど leaves it hanging politely: ちょっと聞きたいんだけど…, "I wanted to ask you something…", inviting the other person to respond.

After nouns and な-adjectives, the だ stays: 雨だけど.

けれど and けれども are the longer, slightly more formal versions; all are accepted here. In polite conversation けど is still fine, just a little relaxed; in formal writing, が.
`,
    sentences: [
      s("日本語は難しい{けど}、楽しい。", "にほんごはむずかしい{けど}、たのしい。", "Japanese is hard, but it's fun.", {
        accept: ["けれど", "けれども"],
        near: [["が", "が means the same and is more formal. In casual speech, けど."]],
      }),
      s("行きたい{けど}、お金がない。", "いきたい{けど}、おかねがない。", "I want to go, but I've got no money.", {
        accept: ["けれど", "けれども"],
        near: [["から", "から is \"so\". For \"but\", use けど."]],
      }),
      s("雨だ{けど}、出かけよう。", "あめだ{けど}、でかけよう。", "It's raining, but let's go out anyway.", {
        accept: ["けれど", "けれども"],
        near: [["から", "から is \"so\". For \"but\", use けど."]],
      }),
      s("ちょっと聞きたいんだ{けど}、今いい？", "ちょっとききたいんだ{けど}、いまいい？", "Can I ask you something? Have you got a minute?", {
        accept: ["けれど", "けれども"],
        near: [["が", "が is formal. Between friends, this softening is done with けど."]],
      }),
      s("昨日電話した{けど}、出なかったね。", "きのうでんわした{けど}、でなかったね。", "I called yesterday, but you didn't pick up.", {
        accept: ["けれど", "けれども"],
        near: [["から", "から is \"so\". For \"but\", use けど."]],
      }),
    ],
  }),

  point({
    id: "n5-soshite",
    title: "そして・それから",
    meaning: "and, and then",
    structure: "Sentence。そして / それから、sentence。",
    related: ["n5-demo", "n5-te-and", "n5-to-and"],
    explanation: `
**そして** and **それから** start a new sentence that adds to the last one.

- そして is "and", adding another point or the next step: この店は安いです。そして、おいしいです.
- それから is "and then, after that", putting things in order: 朝ご飯を食べました。それから、学校へ行きました. It also adds one more item to a list: それから、牛乳もお願いします, "oh, and some milk too".

In sequences, either works. For adding a quality or a point, そして is more natural.

Inside a single sentence, Japanese links verbs with the て-form rather than そして: 食べて、寝ました.
`,
    sentences: [
      s("朝ご飯を食べました。{それから}、学校へ行きました。", "あさごはんをたべました。{それから}、がっこうへいきました。", "I had breakfast. Then I went to school.", {
        accept: ["そして"],
        near: [["でも", "でも is \"but\". For what came next, use それから."]],
      }),
      s("この店は安いです。{そして}、おいしいです。", "このみせはやすいです。{そして}、おいしいです。", "This place is cheap. And it's good, too.", {
        near: [["それから", "それから is \"after that\". For adding another good point, そして."]],
      }),
      s("京都に行きました。{それから}、奈良にも行きました。", "きょうとにいきました。{それから}、ならにもいきました。", "I went to Kyoto. After that I went to Nara too.", {
        accept: ["そして"],
        near: [["でも", "でも is \"but\". For what came next, use それから."]],
      }),
      s("手を洗ってください。{それから}、座ってください。", "てをあらってください。{それから}、すわってください。", "Please wash your hands. Then have a seat.", {
        accept: ["そして"],
        near: [["だから", "だから is \"so, therefore\". For the next step, use それから."]],
      }),
      s("彼は頭がいいです。{そして}、とても優しいです。", "かれはあたまがいいです。{そして}、とてもやさしいです。", "He's clever. And he's very kind.", {
        near: [["でも", "でも is \"but\". Both are good things, so use そして."]],
      }),
    ],
  }),

  point({
    id: "n5-demo",
    title: "でも",
    meaning: "but (at the start of a sentence)",
    structure: "Sentence。でも、sentence。",
    related: ["n5-ga-but", "n5-kedo", "n5-soshite"],
    explanation: `
**でも** starts a new sentence that contrasts with the last one: 日本語は難しいです。でも、面白いです, "Japanese is hard. But it's interesting."

It's the conversational "but" for the start of a sentence. が and けど do the same job inside a sentence, joined to the first clause. でも can't go there: 難しいでも is wrong.

It's used in replies too, often to push back gently: でも、高いですよ, "but it's expensive, you know".

In writing and formal speech you'll see しかし, "however", in the same position. だけど is a casual alternative in speech.
`,
    sentences: [
      s("日本語は難しいです。{でも}、面白いです。", "にほんごはむずかしいです。{でも}、おもしろいです。", "Japanese is hard. But it's interesting.", {
        near: [
          ["が", "が joins inside one sentence. At the start of a new sentence, use でも."],
          ["そして", "そして is \"and\". The two sentences contrast: でも."],
        ],
      }),
      s("行きたかったです。{でも}、時間がありませんでした。", "いきたかったです。{でも}、じかんがありませんでした。", "I wanted to go. But I didn't have time.", {
        near: [["しかし", "しかし is the written, formal \"however\". In speech, でも."]],
      }),
      s("{でも}、高いですよ。", "{でも}、たかいですよ。", "But it's expensive, you know.", {
        near: [["けど", "けど goes at the end of a clause. At the start of a sentence, use でも."]],
      }),
      s("雨が降っています。{でも}、出かけます。", "あめがふっています。{でも}、でかけます。", "It's raining. But I'm going out anyway.", {
        near: [["だから", "だから is \"so\". Going out despite the rain is a contrast: でも."]],
      }),
      s("疲れました。{でも}、楽しかったです。", "つかれました。{でも}、たのしかったです。", "I'm tired. But it was fun.", {
        near: [["それから", "それから is \"and then\". For a contrast, use でも."]],
      }),
    ],
  }),

  point({
    id: "n5-deshou",
    title: "〜でしょう",
    meaning: "probably, …right?",
    structure: "Plain form + でしょう (casual: だろう)",
    related: ["n5-desu", "n5-ne"],
    explanation: `
**でしょう** after a plain form makes a guess: 明日は雨が降るでしょう, "it'll probably rain tomorrow". It's what weather forecasters say every night.

After nouns and な-adjectives it replaces です directly: 学生でしょう, "(they're) probably a student".

With a rising tone it checks that the listener agrees: おいしいでしょう? "it's good, isn't it?" That's more insistent than ね.

でしょうか is a soft, polite question: 駅はどこでしょうか, "I wonder where the station is?" The casual version of the whole family is だろう (for guesses) and でしょ (for checking).
`,
    sentences: [
      s("明日は雨が降る{でしょう}。", "あしたはあめがふる{でしょう}。", "It'll probably rain tomorrow.", {
        near: [["です", "降るです isn't right, and です would state it as fact. For \"probably\", use でしょう."]],
      }),
      s("田中さんはもう家に帰った{でしょう}。", "たなかさんはもういえにかえった{でしょう}。", "Mr Tanaka has probably gone home already.", {
        near: [["だろう", "だろう means the same but is plain. This sentence is polite: でしょう."]],
      }),
      s("このケーキ、おいしい{でしょう}？", "このケーキ、おいしい{でしょう}？", "This cake's good, isn't it?", {
        near: [["ね", "ね shares the feeling. でしょう? checks they agree, a little more insistently. This point practises でしょう."]],
      }),
      s("明日はたぶん晴れる{だろう}。", "あしたはたぶんはれる{だろう}。", "It'll probably be sunny tomorrow.", {
        hint: "plain",
        near: [["でしょう", "Right idea, but this sentence is plain: だろう."]],
      }),
      s("すみません、駅はあちら{でしょう}か。", "すみません、えきはあちら{でしょう}か。", "Excuse me, would the station be that way?", {
        near: [["です", "ですか asks directly. でしょうか is softer and more polite."]],
      }),
    ],
  }),

  point({
    id: "n5-tsumori",
    title: "〜つもり",
    meaning: "plan to, intend to",
    structure: "Verb dictionary form / ない form + つもりです",
    related: ["n5-tai", "n5-deshou"],
    explanation: `
**つもり** states an intention: 来年、日本へ行くつもりです, "I'm planning to go to Japan next year". The verb before it is in the dictionary form, or the ない form for "plan not to": もう飲まないつもりです.

It's firmer than たい. 行きたい is a wish; 行くつもり is a decision you've made.

To ask about someone's plans, つもりですか is fine among friends, but can sound nosy to a superior: 何をするつもりですか can come across as "what do you think you're doing?". 予定 ("schedule") is the neutral alternative: 週末の予定は?
`,
    sentences: [
      s("来年、日本へ{行くつもりです}。", "らいねん、にほんへ{いくつもりです}。", "I'm planning to go to Japan next year.", {
        hint: "行く",
        near: [
          ["行きたいです", "That's \"want to\". For a plan you've made, use つもり."],
          ["行きますつもりです", "つもり takes the dictionary form: 行くつもり."],
        ],
      }),
      s("今晩は早く{寝るつもりだ}。", "こんばんははやく{ねるつもりだ}。", "I'm going to bed early tonight.", {
        hint: "寝る, casual",
        near: [["寝るつもりです", "Right, but this sentence is casual: つもりだ."]],
      }),
      s("週末は何を{するつもりですか}。", "しゅうまつはなにを{するつもりですか}。", "What are you planning to do at the weekend?", {
        hint: "する",
        near: [["しますつもりですか", "つもり takes the dictionary form: するつもり."]],
      }),
      s("もうお酒は{飲まないつもりです}。", "もうおさけは{のまないつもりです}。", "I'm not going to drink anymore.", {
        hint: "飲む, negative",
        conj: { word: word("飲む"), form: "negative", tail: "つもりです", marker: "つもりです" },
        near: [["飲むつもりじゃないです", "That's heard, but the usual way to say \"plan not to\" is ないつもり."]],
      }),
      s("大学で日本語を{勉強するつもりです}。", "だいがくでにほんごを{べんきょうするつもりです}。", "I plan to study Japanese at university.", {
        hint: "勉強する",
        near: [["勉強したいです", "That's \"want to\". For a plan you've made, use つもり."]],
      }),
    ],
  }),

  point({
    id: "n5-hou-ga-ii",
    title: "〜ほうがいい",
    meaning: "had better, should",
    structure: "Verb た-form / ない form + ほうがいい",
    related: ["n5-yori-no-hou-ga", "n5-nakereba-naranai"],
    explanation: `
**ほうがいい** gives advice: 早く寝たほうがいいですよ, "you'd better get to bed early". Literally "the side of having slept is good".

For advice to do something, the verb is usually in the **た-form**, even though it's about the future. For advice not to, use the ない form: 食べないほうがいい, "better not eat".

It's fairly direct, so with a superior it's softer to add かもしれません ("it might be better") or just share your own experience. Between friends and to family, it's the everyday "you should".

The dictionary form (寝るほうがいい) is also heard, and tends to compare two options rather than give advice.
`,
    sentences: [
      s("早く{寝たほうがいいです}よ。", "はやく{ねたほうがいいです}よ。", "You'd better get to bed early.", {
        hint: "寝る",
        conj: { word: word("寝る"), form: "past", tail: "ほうがいいです", marker: "ほうがいいです" },
        near: [["寝るほうがいいです", "Advice usually uses the た-form: 寝たほうがいい."]],
      }),
      s("風邪なら、薬を{飲んだほうがいい}。", "かぜなら、くすりを{のんだほうがいい}。", "If it's a cold, you should take some medicine.", {
        hint: "飲む, casual",
        conj: { word: word("飲む"), form: "past", tail: "ほうがいい", marker: "ほうがいい" },
        near: [["飲むほうがいい", "Advice usually uses the た-form: 飲んだほうがいい."]],
      }),
      s("夜は{食べすぎないほうがいいです}。", "よるは{たべすぎないほうがいいです}。", "It's better not to eat too much at night.", {
        hint: "食べすぎる, negative",
        conj: { word: word("食べすぎる", "たべすぎる", "ichidan"), form: "negative", tail: "ほうがいいです", marker: "ほうがいいです" },
        near: [["食べすぎなかったほうがいいです", "For \"better not\", use the plain ない form: 食べすぎないほうがいい."]],
      }),
      s("熱があるなら、病院に{行ったほうがいいです}よ。", "ねつがあるなら、びょういんに{いったほうがいいです}よ。", "If you have a fever, you should go to the hospital.", {
        hint: "行く",
        conj: { word: word("行く"), form: "past", tail: "ほうがいいです", marker: "ほうがいいです" },
        near: [["行ってください", "That's a request. For advice, use ほうがいい."]],
      }),
      s("夜は一人で{歩かないほうがいい}。", "よるはひとりで{あるかないほうがいい}。", "Better not to walk alone at night.", {
        hint: "歩く, negative",
        conj: { word: word("歩く"), form: "negative", tail: "ほうがいい", marker: "ほうがいい" },
        near: [["歩かなかったほうがいい", "For \"better not\", use the plain ない form: 歩かないほうがいい."]],
      }),
    ],
  }),

  point({
    id: "n5-yori",
    title: "より",
    meaning: "than",
    structure: "A は B より + adjective",
    related: ["n5-yori-no-hou-ga", "n5-ichiban"],
    explanation: `
**より** marks what something is being compared against: 東京は大阪より大きいです, "Tokyo is bigger than Osaka". It goes after B, the thing being beaten.

Japanese adjectives have no "-er" form. 大きい means "big" or "bigger" depending on whether there's a comparison in the sentence, so より carries all the work.

It works after verbs too: 思ったより簡単でした, "it was easier than I thought".

Word order is flexible (大阪より東京は大きい is fine), because より, not position, shows what's compared to what. The next point adds のほうが, to mark the winner as well.
`,
    sentences: [
      s("東京は大阪{より}大きいです。", "とうきょうはおおさか{より}おおきいです。", "Tokyo is bigger than Osaka.", {
        near: [["から", "から is \"from\". For \"than\", use より."]],
      }),
      s("今日は昨日{より}暑いですね。", "きょうはきのう{より}あついですね。", "Today's hotter than yesterday, isn't it?", {
        near: [["から", "から is \"from\". For \"than\", use より."]],
      }),
      s("私は兄{より}背が高いです。", "わたしはあに{より}せがたかいです。", "I'm taller than my older brother.", {
        near: [["のほうが", "のほうが marks the winner. Your brother is what you're compared against: より."]],
      }),
      s("バスは電車{より}安いです。", "バスはでんしゃ{より}やすいです。", "The bus is cheaper than the train.", {
        near: [["と", "と would join the two. For \"than\", use より."]],
      }),
      s("テストは思った{より}簡単でした。", "テストはおもった{より}かんたんでした。", "The test was easier than I thought.", {
        near: [["から", "思ったから would be \"because I thought\". For \"than I thought\", use より."]],
      }),
    ],
  }),

  point({
    id: "n5-yori-no-hou-ga",
    title: "〜より〜のほうが",
    meaning: "A is more … than B",
    structure: "B より A のほうが + adjective",
    related: ["n5-yori", "n5-dochira", "n5-ichiban"],
    explanation: `
To make the winner of a comparison clear, mark it with **のほうが**: 犬より猫のほうが好きです, "I like cats more than dogs". ほう (方) means "side", so this is "the cat side is liked".

It's the natural answer to a どちら question: 夏と冬と、どちらが好きですか。 —— 冬のほうが好きです.

After a verb, drop the の: 書くより話すほうが簡単です, "speaking is easier than writing".

ほう is often written in kanji, 方; both spellings are accepted here. The same ほう appears in ほうがいい (advice), from a few points back: it's the "side" that's better.
`,
    sentences: [
      s("犬より猫{のほうが}好きです。", "いぬよりねこ{のほうが}すきです。", "I like cats more than dogs.", {
        accept: ["の方が"],
        near: [["が", "が alone works, but のほうが makes it clear which side wins. This point practises のほうが."]],
      }),
      s("バスより電車{のほうが}速いです。", "バスよりでんしゃ{のほうが}はやいです。", "The train is faster than the bus.", {
        accept: ["の方が"],
        near: [["より", "より marks the loser. For the winner, use のほうが."]],
      }),
      s("夏より冬{のほうが}好きです。", "なつよりふゆ{のほうが}すきです。", "I prefer winter to summer.", {
        accept: ["の方が"],
        near: [["は", "は would make winter the topic. For the winner of a comparison, use のほうが."]],
      }),
      s("東京より京都{のほうが}静かです。", "とうきょうよりきょうと{のほうが}しずかです。", "Kyoto is quieter than Tokyo.", {
        accept: ["の方が"],
        near: [["より", "より marks the loser. For the winner, use のほうが."]],
      }),
      s("書くより話す{ほうが}簡単です。", "かくよりはなす{ほうが}かんたんです。", "Speaking is easier than writing.", {
        accept: ["方が"],
        near: [["のほうが", "After a verb, ほう comes straight after it, without の."]],
      }),
    ],
  }),

  point({
    id: "n5-dochira",
    title: "どちら・どっち",
    meaning: "which (of two)",
    structure: "A と B と、どちらが…ですか",
    register: "どちら is polite; どっち is casual.",
    related: ["n5-yori-no-hou-ga", "n5-kore-sore-are"],
    explanation: `
**どちら** asks "which one" when there are **two** choices: 肉と魚と、どちらが好きですか, "which do you prefer, meat or fish?" For three or more, it's どれ (or 何が一番…).

The answer uses のほうが: 魚のほうが好きです.

どっち is the casual version: コーヒーと紅茶、どっちがいい?

どちらでもいいです means "either is fine", and どちらも means "both" (with a negative, "neither").

どちら is also the polite word for "where" and "who": どちらからですか, "where are you from?" That's why you'll hear it from shop staff and on the phone, well beyond comparisons.

Its family is こちら・そちら・あちら, "this way, that way", which you met with ここ and そこ.
`,
    sentences: [
      s("肉と魚と、{どちら}が好きですか。", "にくとさかなと、{どちら}がすきですか。", "Which do you prefer, meat or fish?", {
        accept: ["どっち"],
        near: [["どれ", "どれ is for three or more. Between two, use どちら."]],
      }),
      s("電車とバスと、{どちら}が速いですか。", "でんしゃとバスと、{どちら}がはやいですか。", "Which is faster, the train or the bus?", {
        accept: ["どっち"],
        near: [["何", "何 is \"what\". Choosing between two, use どちら."]],
      }),
      s("コーヒーと紅茶、{どっち}がいい？", "コーヒーとこうちゃ、{どっち}がいい？", "Coffee or tea, which do you want?", {
        hint: "casual",
        near: [["どちら", "どちら is polite. Between friends, どっち."]],
      }),
      s("{どちら}でもいいです。", "{どちら}でもいいです。", "Either is fine.", {
        accept: ["どっち"],
        near: [["どれ", "どれでも is \"any of them\" (three or more). With two, どちらでも."]],
      }),
      s("赤いのと青いのと、{どちら}にしますか。", "あかいのとあおいのと、{どちら}にしますか。", "Which will you go with, the red one or the blue one?", {
        accept: ["どっち"],
        near: [["どれ", "どれ is for three or more. Between two, use どちら."]],
      }),
    ],
  }),

  point({
    id: "n5-ichiban",
    title: "一番",
    meaning: "the most, -est",
    structure: "(Group の中で) A が 一番 + adjective",
    related: ["n5-yori", "n5-yori-no-hou-ga"],
    explanation: `
**一番** (いちばん), literally "number one", makes a superlative: 富士山は日本で一番高い山です, "Mount Fuji is the highest mountain in Japan".

The group being compared is marked with で or の中で: クラスで一番, "(the most) in the class"; 果物の中で一番, "of all fruit".

To ask which is the most, use a question word with が: 何が一番好きですか, "what do you like best?"; どれが一番安いですか, "which is the cheapest?"

Before a noun it works like any adverb: 一番好きな食べ物, "my favourite food".

一番 also keeps its literal meaning, "number one": 一番になる is "come first", and 一番電車 is the first train of the day.
`,
    sentences: [
      s("果物の中で、りんごが{一番}好きです。", "くだもののなかで、りんごが{いちばん}すきです。", "Of all fruit, I like apples best.", {
        near: [["もっと", "もっと is \"more\". For \"the most\", use 一番."]],
      }),
      s("日本で{一番}高い山は富士山です。", "にほんで{いちばん}たかいやまはふじさんです。", "The highest mountain in Japan is Mount Fuji.", {
        near: [["とても", "とても is \"very\". For \"the highest\", use 一番."]],
      }),
      s("クラスで{一番}背が高いのは誰ですか。", "クラスで{いちばん}せがたかいのはだれですか。", "Who's the tallest in the class?", {
        near: [["もっと", "もっと is \"more\". For \"the tallest\", use 一番."]],
      }),
      s("一年で{一番}好きな季節は秋です。", "いちねんで{いちばん}すきなきせつはあきです。", "My favourite season is autumn.", {
        near: [["とても", "とても好き is \"really like\". For the favourite, use 一番."]],
      }),
      s("この店のラーメンが{一番}おいしいです。", "このみせのラーメンが{いちばん}おいしいです。", "This place's ramen is the best.", {
        near: [["もっと", "もっと is \"more\". For \"the best\", use 一番."]],
      }),
    ],
  }),

  point({
    id: "n5-no-one",
    title: "の (the one)",
    meaning: "one, the one (that…)",
    structure: "Adjective / plain verb / Noun の + の",
    related: ["n5-no", "n5-wo-kudasai"],
    explanation: `
**の** can stand in for a noun that's obvious from context, like "one" in English: 赤いのをください, "I'll take the red one"; もっと安いのはありますか, "do you have a cheaper one?"

It follows い-adjectives and plain verbs directly: 大きいの, 昨日買ったの ("the one I bought yesterday"). な-adjectives keep their な: 静かなの.

After a noun, it's the possessive の you already know, with the second noun dropped: 私のです, "it's mine".

もの ("thing") does the same job more formally, and やつ more casually. Pointing at something in a shop and saying これと同じのをください, "the same one as this, please", is a handy use.
`,
    sentences: [
      s("もっと安い{の}はありますか。", "もっとやすい{の}はありますか。", "Do you have a cheaper one?", {
        near: [["もの", "もの works too and is a little more formal. The everyday \"one\" is の."]],
      }),
      s("この赤い{の}をください。", "このあかい{の}をください。", "I'll take this red one.", {
        near: [["な", "な is for な-adjectives. After an い-adjective, \"one\" is の."]],
      }),
      s("私{の}はこれです。", "わたし{の}はこれです。", "Mine is this one.", {
        near: [["は", "私はこれです would be \"I am this\". For \"mine\", use 私の."]],
      }),
      s("大きい{の}がいいです。", "おおきい{の}がいいです。", "I'd like the big one.", {
        near: [["な", "な is for な-adjectives. After an い-adjective, \"one\" is の."]],
      }),
      s("これは昨日買った{の}です。", "これはきのうかった{の}です。", "This is the one I bought yesterday.", {
        near: [["もの", "もの works too and is a little more formal. The everyday \"one\" is の."]],
      }),
    ],
  }),

  point({
    id: "n5-shika-nai",
    title: "しか〜ない",
    meaning: "only, nothing but",
    structure: "Noun / amount + しか + negative",
    related: ["n5-dake"],
    explanation: `
**しか** means "only", but it always comes with a **negative** verb: 千円しかありません, "I only have 1,000 yen", literally "apart from 1,000 yen, there isn't any".

Compare だけ, which is neutral and goes with a positive verb. しか adds a feeling that it's not enough, or less than expected: 三時間しか寝なかった, "I only got three hours' sleep".

は, が and を disappear before しか; other particles stay in front: 日曜日にしか会えない, "I can only see them on Sundays".

A positive verb after しか is a mistake learners make for months. If the sentence ends in ます or だ, reach for だけ.
`,
    sentences: [
      s("財布に千円{しか}ありません。", "さいふにせんえん{しか}ありません。", "I've only got 1,000 yen in my wallet.", {
        near: [["だけ", "だけ goes with a positive verb. With ありません, use しか."]],
      }),
      s("日本語は少し{しか}話せません。", "にほんごはすこし{しか}はなせません。", "I can only speak a little Japanese.", {
        near: [["だけ", "だけ goes with a positive verb. With a negative, use しか."]],
      }),
      s("昨日は三時間{しか}寝ませんでした。", "きのうはさんじかん{しか}ねませんでした。", "I only got three hours' sleep last night.", {
        near: [["だけ", "だけ goes with a positive verb. With a negative, use しか."]],
      }),
      s("教室には学生が二人{しか}いない。", "きょうしつにはがくせいがふたり{しか}いない。", "There are only two students in the classroom.", {
        near: [["だけ", "だけ goes with a positive verb. With いない, use しか."]],
      }),
      s("朝はコーヒー{しか}飲みません。", "あさはコーヒー{しか}のみません。", "In the mornings I only drink coffee.", {
        near: [["だけ", "だけ goes with a positive verb. With 飲みません, use しか."]],
      }),
    ],
  }),
];
