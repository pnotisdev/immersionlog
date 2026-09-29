import { point, s, word } from "../../build";

/** If, when, even if: the four conditionals and their neighbours. */

export const conditionals = [
  point({
    id: "n4-ba",
    title: "〜ば",
    meaning: "if",
    structure: "Godan: e-row + ば · Ichidan: れば · い-adj: ければ · Noun / な-adj: なら",
    related: ["n4-tara", "n4-to-conditional", "n4-nara"],
    explanation: `
The **ば** form makes a condition: 急げば間に合います, "if you hurry, you'll make it".

- godan verbs: e-row + ば: 行く → 行けば, 飲む → 飲めば, ある → あれば
- ichidan verbs: る → れば: 食べれば, 見れば
- する → すれば, 来る → 来れば (くれば)
- い-adjectives: い → ければ: 安ければ, and いい → よければ
- negatives: ない → なければ: 行かなければ

ば focuses on the condition itself: what it takes for the result to happen. That makes it the natural choice for advice and asking what to do: どうすればいいですか, "what should I do?"

The result usually isn't a past event, and after a verb of motion it avoids commands and requests; たら (next) covers those.
`,
    sentences: [
      s("{安ければ}買います。", "{やすければ}かいます。", "If it's cheap, I'll buy it.", {
        hint: "安い",
        conj: { word: word("安い"), form: "ba", marker: "ば" },
        near: [
          ["安いなら", "なら works too (\"if it's cheap, then\"). This point practises ば: 安ければ."],
          ["安いれば", "い-adjectives swap い for ければ: 安ければ."],
        ],
      }),
      s("{急げば}、まだ間に合いますよ。", "{いそげば}、まだまにあいますよ。", "If you hurry, you'll still make it.", {
        hint: "急ぐ",
        conj: { word: word("急ぐ"), form: "ba", marker: "ば" },
        near: [["急いだら", "たら works too. This point practises ば: 急げば."]],
      }),
      s("この薬を{飲めば}、よくなりますよ。", "このくすりを{のめば}、よくなりますよ。", "Take this medicine and you'll feel better.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "ba", marker: "ば" },
        near: [["飲むば", "Godan verbs move to the e-row before ば: 飲めば."]],
      }),
      s("どう{すれば}いいですか。", "どう{すれば}いいですか。", "What should I do?", {
        hint: "する",
        conj: { word: word("する"), form: "ba", marker: "ば" },
        near: [["したら", "どうしたらいいですか means the same. This point practises ば: どうすれば."]],
      }),
      s("時間が{あれば}、行きたいです。", "じかんが{あれば}、いきたいです。", "If I have time, I'd like to go.", {
        hint: "ある",
        conj: { word: word("ある", "ある", "godan"), form: "ba", marker: "ば" },
        near: [["あったら", "たら works too. This point practises ば: あれば."]],
      }),
      s("天気が{よければ}、散歩しましょう。", "てんきが{よければ}、さんぽしましょう。", "If the weather's nice, let's go for a walk.", {
        hint: "いい",
        conj: { word: word("いい"), form: "ba", marker: "ば" },
        near: [["いければ", "いい goes through よい: よければ."]],
      }),
    ],
  }),

  point({
    id: "n4-tara",
    title: "〜たら",
    meaning: "if, when, once",
    structure: "Verb / adjective た-form + ら · Noun / な-adj + だったら",
    related: ["n4-ba", "n4-to-conditional", "n4-tara-dou"],
    explanation: `
**たら** is the た-form plus ら, and it's the most flexible conditional: when unsure which one to use, たら is usually safe.

It covers "if": 雨が降ったら中止です, "if it rains, it's off". It also covers "once, when": 家に帰ったら電話します, "I'll call when I get home". Here A must happen first, and B can be a request, a plan or an invitation, which ば and と don't allow.

In the past, it describes a discovery: 窓を開けたら、雪が降っていた, "when I opened the window, it was snowing".

Nouns and な-adjectives use だったら: 暇だったら, "if you're free". And the dream version: 宝くじが当たったら, "if I won the lottery".
`,
    sentences: [
      s("家に{帰ったら}、電話します。", "いえに{かえったら}、でんわします。", "I'll call you when I get home.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "tara", marker: "たら" },
        near: [["帰れば", "ば is about the condition. For \"once I'm home, I'll call\", use たら."]],
      }),
      s("雨が{降ったら}、試合は中止です。", "あめが{ふったら}、しあいはちゅうしです。", "If it rains, the match is off.", {
        hint: "降る",
        conj: { word: word("降る"), form: "tara", marker: "たら" },
        near: [["降れば", "ば works too. This point practises たら."]],
      }),
      s("駅に{着いたら}、教えてください。", "えきに{ついたら}、おしえてください。", "Let me know when you get to the station.", {
        hint: "着く",
        conj: { word: word("着く", "つく", "godan"), form: "tara", marker: "たら" },
        near: [["着くと", "と can't be followed by a request. For \"when you arrive, let me know\", use たら."]],
      }),
      s("窓を{開けたら}、雪が降っていました。", "まどを{あけたら}、ゆきがふっていました。", "When I opened the window, it was snowing.", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "tara", marker: "たら" },
        near: [["開けると", "と also works for a discovery like this. This point practises たら."]],
      }),
      s("{暇だったら}、手伝ってくれない？", "{ひまだったら}、てつだってくれない？", "If you're free, could you help me out?", {
        hint: "暇",
        conj: { word: word("暇"), form: "tara", marker: "たら" },
        near: [["暇なら", "なら works too. This point practises たら: 暇だったら."]],
      }),
      s("宝くじが{当たったら}、何をしますか。", "たからくじが{あたったら}、なにをしますか。", "What would you do if you won the lottery?", {
        hint: "当たる",
        conj: { word: word("当たる", "あたる", "godan"), form: "tara", marker: "たら" },
        near: [["当たると", "と is for things that always follow. For an imagined \"if\", use たら."]],
      }),
    ],
  }),

  point({
    id: "n4-to-conditional",
    title: "〜と (whenever)",
    meaning: "when, whenever, if (then naturally)",
    structure: "Verb dictionary form / ない form + と",
    related: ["n4-tara", "n4-ba"],
    explanation: `
Dictionary form + **と** says that B follows A naturally, every time: このボタンを押すとお湯が出ます, "press this button and hot water comes out".

It's for things that always happen: how machines work, laws of nature, habits and directions. 春になると桜が咲く, "when spring comes, the cherry blossoms bloom"; まっすぐ行くと銀行があります, "go straight on and there's a bank".

The limit: the result can't be a request, an invitation or an intention. 駅に着くと電話してください is wrong; use たら.

In the past, と describes what happened next, often a surprise: 窓を開けると富士山が見えた, "when I opened the window, there was Mount Fuji".
`,
    sentences: [
      s("このボタンを押す{と}、お湯が出ます。", "このボタンをおす{と}、おゆがでます。", "Press this button and hot water comes out.", {
        near: [["たら", "押したら works too. For how a machine always works, と is the natural choice."]],
      }),
      s("春になる{と}、桜が咲きます。", "はるになる{と}、さくらがさきます。", "When spring comes, the cherry blossoms bloom.", {
        near: [["から", "から would give a reason. For \"whenever this happens, that follows\", use と."]],
      }),
      s("まっすぐ行く{と}、右に銀行があります。", "まっすぐいく{と}、みぎにぎんこうがあります。", "Go straight on and you'll see a bank on the right.", {
        near: [["たら", "行ったら works too. For directions, と is the usual choice."]],
      }),
      s("私はコーヒーを飲む{と}、眠れなくなります。", "わたしはコーヒーをのむ{と}、ねむれなくなります。", "Whenever I drink coffee, I can't sleep.", {
        near: [["ば", "飲めば would need the ば form. This point practises と: 飲むと."]],
      }),
      s("窓を開ける{と}、富士山が見えました。", "まどをあける{と}、ふじさんがみえました。", "When I opened the window, there was Mount Fuji.", {
        near: [["から", "から would give a reason. For what happened next, use と."]],
      }),
    ],
  }),

  point({
    id: "n4-nara",
    title: "〜なら",
    meaning: "if (that's the case), if it's… you want",
    structure: "Plain form / Noun + なら",
    related: ["n4-tara", "n4-ba"],
    explanation: `
**なら** picks up something the other person said, or a situation, and responds to it: 京都に行くなら、秋がいいですよ, "if you're going to Kyoto, autumn's the best time".

It's the conditional of advice and recommendations. After a noun it means "as for", "if it's … you want": 日本料理なら、この店がおいしい, "if it's Japanese food you're after, this place is good".

Unlike たら, the なら clause doesn't have to happen first. パソコンを買うなら、軽いのがいい: the advice applies before you buy.

It also answers "where's X?": 田中さんなら、もう帰りましたよ, "Tanaka? He's already gone home."
`,
    sentences: [
      s("京都に行く{なら}、秋がいいですよ。", "きょうとにいく{なら}、あきがいいですよ。", "If you're going to Kyoto, autumn's the best time.", {
        near: [["たら", "行ったら would be \"once you've gone\". For advice on a plan, use なら."]],
      }),
      s("日本料理{なら}、この店がおいしいです。", "にほんりょうり{なら}、このみせがおいしいです。", "If it's Japanese food you want, this place is good.", {
        near: [["は", "は would just make it the topic. For \"if it's Japanese food you're after\", use なら."]],
      }),
      s("暇{なら}、映画を見に行かない？", "ひま{なら}、えいがをみにいかない？", "If you're free, want to go and see a film?", {
        near: [["だったら", "だったら works too. This point practises なら."]],
      }),
      s("パソコンを買う{なら}、軽いのがいいですよ。", "パソコンをかう{なら}、かるいのがいいですよ。", "If you're buying a computer, get a light one.", {
        near: [["たら", "買ったら would be \"once you've bought it\". Advice for before buying: なら."]],
      }),
      s("田中さん{なら}、もう帰りましたよ。", "たなかさん{なら}、もうかえりましたよ。", "Tanaka? He's already gone home.", {
        near: [["は", "は just makes him the topic. Picking up who they asked about, use なら."]],
      }),
    ],
  }),

  point({
    id: "n4-temo",
    title: "〜ても",
    meaning: "even if, even though",
    structure: "Verb / adjective て-form + も · Noun / な-adj + でも",
    related: ["n4-tara", "n5-te-mo-ii", "n4-noni"],
    explanation: `
て-form + **も** means "even if" or "even though": 雨が降っても行きます, "I'm going even if it rains". It's the same ても as in てもいい ("even if you do it, it's fine").

Adjectives follow their て-forms: 高くても ("even if it's expensive"), 静かでも ("even if it's quiet"). Nouns: 子どもでも, "even a child".

With a question word it means "no matter…": 何を食べても ("whatever I eat"), いくら勉強しても ("however much I study"), 何度読んでも ("however many times I read it").

The negative is なくても: 行かなくても, "even if I don't go".
`,
    sentences: [
      s("雨が{降っても}、行きます。", "あめが{ふっても}、いきます。", "Even if it rains, I'm going.", {
        hint: "降る",
        conj: { word: word("降る"), form: "te", tail: "も" },
        near: [["降ったら", "たら is \"if\". For \"even if\", use ても."]],
      }),
      s("{高くても}、買いたいです。", "{たかくても}、かいたいです。", "I want to buy it even if it's expensive.", {
        hint: "高い",
        conj: { word: word("高い"), form: "te", tail: "も" },
        near: [["高かったら", "たら is \"if\". For \"even if\", use ても."]],
      }),
      s("いくら{勉強しても}、覚えられません。", "いくら{べんきょうしても}、おぼえられません。", "However much I study, I can't remember it.", {
        hint: "勉強する",
        conj: { word: word("勉強する"), form: "te", tail: "も" },
        near: [["勉強したら", "たら is \"if\". With いくら, \"however much\" is ても."]],
      }),
      s("何度{読んでも}、分かりません。", "なんど{よんでも}、わかりません。", "However many times I read it, I don't get it.", {
        hint: "読む",
        conj: { word: word("読む"), form: "te", tail: "も" },
        near: [["読むても", "ても goes on the て-form: 読んでも."]],
      }),
      s("{静かでも}、この部屋は狭すぎます。", "{しずかでも}、このへやはせますぎます。", "Quiet or not, this room is too small.", {
        hint: "静か",
        conj: { word: word("静か"), form: "te", tail: "も" },
        near: [["静かくても", "静か is a な-adjective: 静かでも."]],
      }),
    ],
  }),

  point({
    id: "n4-tara-dou",
    title: "〜たらどうですか",
    meaning: "why don't you…?",
    structure: "Verb た-form + らどうですか (casual: たらどう? / polite: たらいかがですか)",
    related: ["n4-tara", "n5-hou-ga-ii"],
    explanation: `
た-form + **らどうですか** makes a suggestion: 少し休んだらどうですか, "why don't you rest a bit?" Literally "how would it be if you rested?"

Casually it's たらどう?: 先生に聞いたらどう? The polite version swaps in いかが: タクシーで行ったらいかがですか.

It's gentler than ほうがいい ("you should"), which sounds more like a recommendation from experience. But it's still advice, so with superiors it can come across as telling them what to do; a question about what they'd like is safer.

A reply that accepts the idea is often そうですね or そうします ("I'll do that").
`,
    sentences: [
      s("疲れているなら、少し{休んだらどうですか}。", "つかれているなら、すこし{やすんだらどうですか}。", "If you're tired, why don't you rest a bit?", {
        hint: "休む",
        conj: { word: word("休む"), form: "tara", tail: "どうですか" },
        near: [["休んだほうがいいです", "That's firmer advice (\"you should\"). For a gentle suggestion, use たらどうですか."]],
      }),
      s("先生に{聞いたらどう}？", "せんせいに{きいたらどう}？", "Why don't you ask the teacher?", {
        hint: "聞く, casual",
        conj: { word: word("聞く"), form: "tara", tail: "どう" },
        near: [["聞いたらどうですか", "Right, but that's polite. This sentence is casual: たらどう?"]],
      }),
      s("風邪なら、薬を{飲んだらどうですか}。", "かぜなら、くすりを{のんだらどうですか}。", "If it's a cold, why not take some medicine?", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "tara", tail: "どうですか" },
        near: [["飲めばどうですか", "The suggestion pattern uses たら: 飲んだらどうですか."]],
      }),
      s("眠いなら、もう{寝たらどう}？", "ねむいなら、もう{ねたらどう}？", "If you're sleepy, why not just go to bed?", {
        hint: "寝る, casual",
        conj: { word: word("寝る"), form: "tara", tail: "どう" },
        near: [["寝れば", "寝ればいい (\"you can just sleep\") is close. This point practises たらどう."]],
      }),
      s("タクシーで{行ったらいかがですか}。", "タクシーで{いったらいかがですか}。", "Why not take a taxi?", {
        hint: "行く, polite",
        conj: { word: word("行く"), form: "tara", tail: "いかがですか" },
        near: [["行ったらどうですか", "That works too. To a customer or superior, いかがですか is the polite choice."]],
      }),
    ],
  }),
];
