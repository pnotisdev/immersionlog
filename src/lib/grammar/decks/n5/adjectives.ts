import { point, s, word } from "../../build";

/** Describing things, and saying what you like, want and can do. */

const I_NOT_NA = "い-adjectives go straight before a noun. な is only for な-adjectives.";
const NOUN_NEGATIVE = "じゃない is for nouns and な-adjectives. An い-adjective makes its own negative: drop い, add くない.";
const NOUN_PAST = "でした is for nouns and な-adjectives. An い-adjective makes its own past: drop い, add かった.";
const LIKE_GA = "好き and 嫌い are adjectives in Japanese, so the thing liked takes が, not を.";

export const adjectives = [
  point({
    id: "n5-i-adjectives",
    title: "い-adjectives",
    meaning: "describing words ending in い",
    structure: "い-adjective + Noun / い-adjective + です",
    related: ["n5-na-adjectives", "n5-i-adj-negative", "n5-i-adj-past"],
    explanation: `
**い-adjectives** end in い and behave almost like verbs: they conjugate on their own, with no help from だ. 高い, 安い, 新しい, 面白い, おいしい are all い-adjectives.

They do two jobs:

- Right before a noun, with nothing in between: 高い時計, "an expensive watch". No な, no の.
- At the end of a sentence: この時計は高い, "this watch is expensive". Add です to be polite: 高いです.

Two slips to avoid. 高いな時計 borrows な from the other kind of adjective, and 高いだ adds a だ that い-adjectives never take. The one exception to the family's regular forms is いい, "good", which comes up in the next points.
`,
    sentences: [
      s("これは{高い}時計です。", "これは{たかい}とけいです。", "This is an expensive watch.", {
        hint: "expensive",
        near: [["高いな", I_NOT_NA]],
      }),
      s("{新しい}靴を買いました。", "{あたらしい}くつをかいました。", "I bought new shoes.", {
        hint: "new",
        near: [
          ["新しいな", I_NOT_NA],
          ["新しいの", "No の between an adjective and its noun: 新しい靴."],
        ],
      }),
      s("このラーメン、{おいしい}ね。", "このラーメン、{おいしい}ね。", "This ramen is good, isn't it?", {
        hint: "tasty, casual",
        near: [["おいしいだ", "い-adjectives never take だ. On its own, おいしい is already a full sentence."]],
      }),
      s("今日はとても{寒いです}。", "きょうはとても{さむいです}。", "It's very cold today.", {
        hint: "cold, polite",
        near: [
          ["寒いだ", "い-adjectives never take だ. Politely, add です."],
          ["寒い", "Right adjective, but this sentence is polite: add です."],
        ],
      }),
      s("{大きい}犬がいますね。", "{おおきい}いぬがいますね。", "There's a big dog there, isn't there?", {
        hint: "big",
        near: [
          ["大きいな", I_NOT_NA],
          ["大きいの", "No の between an adjective and its noun: 大きい犬."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-i-adj-negative",
    title: "〜くない",
    meaning: "isn't (い-adjective)",
    structure: "い-adjective − い + くない (polite: くないです / くありません)",
    related: ["n5-i-adjectives", "n5-ja-nai"],
    explanation: `
To make an い-adjective negative, drop the final い and add **くない**: 高い → 高くない, "not expensive"; 面白い → 面白くない, "not interesting".

Politely, add です (高くないです) or use the ません form (高くありません). Both are accepted here; くないです is the more common in conversation.

The trap is reaching for じゃない, which belongs to nouns and な-adjectives: 高いじゃない is wrong.

いい, "good", is the one exception: its forms are built on an older word, よい. So "not good" is **よくない**, never いくない.
`,
    sentences: [
      s("この店はあまり{高くない}。", "このみせはあまり{たかくない}。", "This shop isn't very expensive.", {
        hint: "高い, casual",
        conj: { word: word("高い"), form: "negative", marker: "くない" },
        near: [["高いじゃない", NOUN_NEGATIVE]],
      }),
      s("今日は{寒くないです}。", "きょうは{さむくないです}。", "It isn't cold today.", {
        hint: "寒い, polite",
        conj: { word: word("寒い"), form: "polite-negative", marker: "くないです" },
        accept: ["寒くありません", "さむくありません"],
        near: [
          ["寒くない", "Right, but this sentence is polite: add です."],
          ["寒いじゃないです", NOUN_NEGATIVE],
        ],
      }),
      s("この問題は{難しくない}よ。", "このもんだいは{むずかしくない}よ。", "This question isn't hard.", {
        hint: "難しい, casual",
        conj: { word: word("難しい"), form: "negative", marker: "くない" },
        near: [["難しいじゃない", NOUN_NEGATIVE]],
      }),
      s("天気が{よくない}ですね。", "てんきが{よくない}ですね。", "The weather isn't great, is it?", {
        hint: "いい",
        conj: { word: word("いい"), form: "negative", marker: "くない" },
        near: [["いくない", "いい borrows its forms from よい: \"not good\" is よくない."]],
      }),
      s("駅はここから{遠くないです}。", "えきはここから{とおくないです}。", "The station isn't far from here.", {
        hint: "遠い, polite",
        conj: { word: word("遠い", "とおい", "i-adj"), form: "polite-negative", marker: "くないです" },
        accept: ["遠くありません", "とおくありません"],
        near: [["遠いじゃないです", NOUN_NEGATIVE]],
      }),
    ],
  }),

  point({
    id: "n5-i-adj-past",
    title: "〜かった",
    meaning: "was (い-adjective)",
    structure: "い-adjective − い + かった (polite: かったです)",
    related: ["n5-i-adjectives", "n5-deshita", "n5-i-adj-past-negative"],
    explanation: `
The past of an い-adjective: drop い, add **かった**. 楽しい → 楽しかった, "it was fun"; 寒い → 寒かった, "it was cold". Politely, add です: 楽しかったです.

This is where the two kinds of adjective part ways most visibly. Nouns and な-adjectives use でした (静かでした), but い-adjectives never do: 楽しいでした is one of the most common beginner mistakes, and one worth unlearning early.

And again いい is the exception, built on よい: "it was good" is **よかった**. You'll hear it constantly, as a word of its own: よかった! "Thank goodness!"
`,
    sentences: [
      s("昨日のパーティーは{楽しかったです}。", "きのうのパーティーは{たのしかったです}。", "Yesterday's party was fun.", {
        hint: "楽しい, polite",
        conj: { word: word("楽しい"), form: "polite-past", marker: "かったです" },
        near: [
          ["楽しいでした", NOUN_PAST],
          ["楽しかった", "Right, but this sentence is polite: add です."],
        ],
      }),
      s("昨日はすごく{暑かった}。", "きのうはすごく{あつかった}。", "It was really hot yesterday.", {
        hint: "暑い, casual",
        conj: { word: word("暑い"), form: "past", marker: "かった" },
        near: [["暑いだった", "い-adjectives never take だった. Drop い, add かった."]],
      }),
      s("先週のテストは{難しかったです}。", "せんしゅうのテストは{むずかしかったです}。", "Last week's test was hard.", {
        hint: "難しい, polite",
        conj: { word: word("難しい"), form: "polite-past", marker: "かったです" },
        near: [["難しいでした", NOUN_PAST]],
      }),
      s("あの店のケーキ、{おいしかった}ね。", "あのみせのケーキ、{おいしかった}ね。", "The cake at that place was good, wasn't it?", {
        hint: "おいしい, casual",
        conj: { word: word("おいしい"), form: "past", marker: "かった" },
        near: [["おいしいでした", NOUN_PAST]],
      }),
      s("旅行はとても{よかったです}。", "りょこうはとても{よかったです}。", "The trip was really good.", {
        hint: "いい, polite",
        conj: { word: word("いい"), form: "polite-past", marker: "かったです" },
        near: [["いかったです", "いい borrows its forms from よい: \"was good\" is よかった."]],
      }),
    ],
  }),

  point({
    id: "n5-i-adj-past-negative",
    title: "〜くなかった",
    meaning: "wasn't (い-adjective)",
    structure: "い-adjective − い + くなかった (polite: くなかったです / くありませんでした)",
    related: ["n5-i-adj-negative", "n5-i-adj-past"],
    explanation: `
Put the last two points together: the negative くない is itself shaped like an い-adjective, so it makes its past the same way, ない → なかった. 高い → 高くない → **高くなかった**, "it wasn't expensive".

Politely there are two versions, both accepted here: 高くなかったです (common in speech) and 高くありませんでした (a little more formal).

Watch for 高くないでした. It looks reasonable, but でした never follows an い-adjective ending, even a negative one.

And いい, as always, goes through よい: よくなかった, "it wasn't good".
`,
    sentences: [
      s("その映画は{面白くなかった}。", "そのえいがは{おもしろくなかった}。", "That film wasn't interesting.", {
        hint: "面白い, casual",
        conj: { word: word("面白い"), form: "past-negative", marker: "くなかった" },
        near: [["面白くないでした", "でした never follows an い-adjective ending. ない becomes なかった."]],
      }),
      s("昨日はあまり{寒くなかったです}。", "きのうはあまり{さむくなかったです}。", "It wasn't very cold yesterday.", {
        hint: "寒い, polite",
        conj: { word: word("寒い"), form: "polite-past-negative", marker: "です" },
        accept: ["寒くありませんでした", "さむくありませんでした"],
        near: [["寒くないでした", "でした never follows an い-adjective ending. Say 寒くなかったです."]],
      }),
      s("テストは{難しくなかった}よ。", "テストは{むずかしくなかった}よ。", "The test wasn't hard.", {
        hint: "難しい, casual",
        conj: { word: word("難しい"), form: "past-negative", marker: "くなかった" },
        near: [["難しくない", "That's present. The test is over: なかった."]],
      }),
      s("ホテルの部屋は{広くなかったです}。", "ホテルのへやは{ひろくなかったです}。", "The hotel room wasn't big.", {
        hint: "広い, polite",
        conj: { word: word("広い", "ひろい", "i-adj"), form: "polite-past-negative", marker: "です" },
        accept: ["広くありませんでした", "ひろくありませんでした"],
        near: [["広いじゃなかったです", "じゃなかった is for nouns and な-adjectives. Say 広くなかったです."]],
      }),
      s("天気は{よくなかった}けど、楽しかった。", "てんきは{よくなかった}けど、たのしかった。", "The weather wasn't good, but it was fun.", {
        hint: "いい",
        conj: { word: word("いい"), form: "past-negative", marker: "くなかった" },
        near: [["いくなかった", "いい borrows its forms from よい: よくなかった."]],
      }),
    ],
  }),

  point({
    id: "n5-na-adjectives",
    title: "な-adjectives",
    meaning: "describing words that take な before a noun",
    structure: "な-adjective + な + Noun / な-adjective + です",
    related: ["n5-i-adjectives", "n5-ja-nai", "n5-deshita"],
    explanation: `
**な-adjectives** behave like nouns: at the end of a sentence they take だ or です (静かです, "it's quiet"), and their negative and past are the noun ones: 静かじゃない, 静かでした.

Before a noun they need **な**: 静かな町, "a quiet town"; 有名な人, "a famous person". That な is what gives them their name.

Most don't end in い, but a few that do are traps: きれい (pretty, clean), 嫌い (disliked) and 有名 are な-adjectives, so it's きれいな花, not きれい花, and きれいじゃない, not きれくない.

Common ones at N5: 静か, 元気, 有名, 好き, 嫌い, 上手, 下手, 便利, 簡単, 暇, きれい.
`,
    sentences: [
      s("{静かな}町に住んでいます。", "{しずかな}まちにすんでいます。", "I live in a quiet town.", {
        hint: "静か",
        near: [
          ["静か", "Before a noun, な-adjectives need な."],
          ["静かの", "な-adjectives take な before a noun, not の."],
        ],
      }),
      s("あの人は{有名な}歌手です。", "あのひとは{ゆうめいな}かしゅです。", "That person is a famous singer.", {
        hint: "有名",
        near: [
          ["有名", "Before a noun, な-adjectives need な."],
          ["有名の", "な-adjectives take な before a noun, not の."],
        ],
      }),
      s("{きれいな}花ですね。", "{きれいな}はなですね。", "What beautiful flowers.", {
        hint: "きれい",
        near: [["きれい", "きれい ends in い but is a な-adjective: before a noun it needs な."]],
      }),
      s("これは{便利な}アプリです。", "これは{べんりな}アプリです。", "This is a handy app.", {
        hint: "便利",
        near: [["便利", "Before a noun, な-adjectives need な."]],
      }),
      s("{元気な}子どもたちが走っています。", "{げんきな}こどもたちがはしっています。", "Lively children are running around.", {
        hint: "元気",
        near: [
          ["元気", "Before a noun, な-adjectives need な."],
          ["元気の", "な-adjectives take な before a noun, not の."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-adj-te",
    title: "〜くて・〜で",
    meaning: "…and… (joining adjectives)",
    structure: "い-adjective − い + くて / な-adjective + で",
    related: ["n5-te-and", "n5-i-adjectives", "n5-na-adjectives"],
    explanation: `
To describe something with two adjectives in a row, the first one goes into its て-form:

- い-adjectives: drop い, add **くて**. 安くておいしい, "cheap and tasty".
- な-adjectives and nouns: add **で**. 静かできれい, "quiet and clean".

と can't do this: it only joins nouns, so 安いとおいしい is wrong.

The て-form also gives a loose reason: 暑くて眠れない, "it's so hot I can't sleep". The order of the two adjectives rarely matters, but both should point the same way (both good or both bad). For "cheap but tasty", use が or けど instead.
`,
    sentences: [
      s("この店は{安くて}おいしいです。", "このみせは{やすくて}おいしいです。", "This place is cheap and good.", {
        hint: "安い",
        conj: { word: word("安い"), form: "te", marker: "くて" },
        near: [
          ["安いと", "と only joins nouns. For two adjectives, use the て-form: 安くて."],
          ["安いで", "い-adjectives drop い and add くて: 安くて."],
        ],
      }),
      s("私の部屋は{静かで}明るいです。", "わたしのへやは{しずかで}あかるいです。", "My room is quiet and bright.", {
        hint: "静か",
        conj: { word: word("静か"), form: "te", marker: "で" },
        near: [
          ["静かくて", "静か is a な-adjective: add で, not くて."],
          ["静かな", "な links to a noun. To join another adjective, use で."],
        ],
      }),
      s("田中さんは{優しくて}面白い人です。", "たなかさんは{やさしくて}おもしろいひとです。", "Mr Tanaka is a kind, funny person.", {
        hint: "優しい",
        conj: { word: word("優しい"), form: "te", marker: "くて" },
        near: [["優しいと", "と only joins nouns. For two adjectives, use the て-form: 優しくて."]],
      }),
      s("この町は{きれいで}便利です。", "このまちは{きれいで}べんりです。", "This town is clean and convenient.", {
        hint: "きれい",
        conj: { word: word("きれい"), form: "te", marker: "で" },
        near: [["きれくて", "きれい is a な-adjective, despite the い: add で."]],
      }),
      s("今日は{寒くて}、外に出たくない。", "きょうは{さむくて}、そとにでたくない。", "It's so cold today I don't want to go out.", {
        hint: "寒い",
        conj: { word: word("寒い"), form: "te", marker: "くて" },
        near: [["寒いから", "から works too, and is more explicit. This point practises the て-form: 寒くて."]],
      }),
    ],
  }),

  point({
    id: "n5-adverbs",
    title: "〜く・〜に (adverbs)",
    meaning: "…ly (adjective as adverb)",
    structure: "い-adjective − い + く / な-adjective + に",
    related: ["n5-naru", "n5-i-adjectives", "n5-na-adjectives"],
    explanation: `
Adjectives turn into adverbs, words that describe how something is done:

- い-adjectives: drop い, add **く**. 早い → 早く起きる, "get up early"; 大きい → 大きく書く, "write big".
- な-adjectives: add **に**. 静か → 静かに話す, "speak quietly"; 上手 → 上手に歌う, "sing well".

Some are so common they're worth learning as words of their own: よく (from いい: well, often), 早く (early, quickly), 少し and たくさん, which are adverbs already.

The same く and に forms come back with なる ("become") in a later point: 寒くなる, 静かになる.
`,
    sentences: [
      s("明日は{早く}起きます。", "あしたは{はやく}おきます。", "I'm getting up early tomorrow.", {
        hint: "早い",
        conj: { word: word("早い", "はやい", "i-adj"), form: "adverb", marker: "く" },
        near: [["早い", "Before a verb, an い-adjective drops い and takes く: 早く."]],
      }),
      s("図書館では{静かに}話してください。", "としょかんでは{しずかに}はなしてください。", "Please talk quietly in the library.", {
        hint: "静か",
        conj: { word: word("静か"), form: "adverb", marker: "に" },
        near: [["静かな", "な links to a noun. Before a verb, a な-adjective takes に."]],
      }),
      s("名前を{大きく}書いてください。", "なまえを{おおきく}かいてください。", "Please write your name large.", {
        hint: "大きい",
        conj: { word: word("大きい"), form: "adverb", marker: "く" },
        near: [["大きい", "Before a verb, an い-adjective drops い and takes く: 大きく."]],
      }),
      s("妹はピアノを{上手に}弾きます。", "いもうとはピアノを{じょうずに}ひきます。", "My little sister plays the piano well.", {
        hint: "上手",
        conj: { word: word("上手"), form: "adverb", marker: "に" },
        near: [["上手な", "な links to a noun. Before a verb, a な-adjective takes に."]],
      }),
      s("野菜を{小さく}切ります。", "やさいを{ちいさく}きります。", "Cut the vegetables small.", {
        hint: "小さい",
        conj: { word: word("小さい"), form: "adverb", marker: "く" },
        near: [["小さい", "Before a verb, an い-adjective drops い and takes く: 小さく."]],
      }),
    ],
  }),

  point({
    id: "n5-ga-suki",
    title: "〜が好き・嫌い",
    meaning: "like, dislike",
    structure: "Thing + が + 好き / 嫌い + です",
    related: ["n5-ga", "n5-ga-jouzu", "n5-verb-no"],
    explanation: `
In Japanese, liking isn't a verb. **好き** is a な-adjective meaning "liked", and **嫌い** means "disliked". So 猫が好きです is closer to "cats are liked (by me)" than "I like cats".

That's why the thing liked takes **が**, not を: 猫が好きです. The person who does the liking, when mentioned, is the topic: 私は猫が好きです.

Before a noun they need な: 好きな食べ物, "a food I like, favourite food".

嫌い is strong, more "hate" than "don't like". In conversation, あまり好きじゃない ("not a big fan of") is the gentler choice.
`,
    sentences: [
      s("私は猫{が}好きです。", "わたしはねこ{が}すきです。", "I like cats.", {
        near: [["を", LIKE_GA]],
      }),
      s("弟は野菜{が}嫌いです。", "おとうとはやさい{が}きらいです。", "My little brother hates vegetables.", {
        near: [["を", LIKE_GA]],
      }),
      s("どんな音楽{が}好きですか。", "どんなおんがく{が}すきですか。", "What kind of music do you like?", {
        near: [["を", LIKE_GA]],
      }),
      s("日本の映画{が}大好きです。", "にほんのえいが{が}だいすきです。", "I love Japanese films.", {
        near: [["を", "大好き works like 好き: the thing loved takes が."]],
      }),
      s("{好きな}食べ物は何ですか。", "{すきな}たべものはなんですか。", "What's your favourite food?", {
        hint: "好き",
        near: [
          ["好き", "Before a noun, 好き needs な."],
          ["好きの", "好き is a な-adjective: 好きな, not 好きの."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-ga-jouzu",
    title: "〜が上手・下手",
    meaning: "good at, bad at",
    structure: "Thing + が + 上手 / 下手 + です",
    related: ["n5-ga-suki", "n5-adverbs"],
    explanation: `
**上手** (good at) and **下手** (bad at) work exactly like 好き: they're な-adjectives, and the skill takes **が**. 田中さんは料理が上手です, "Mr Tanaka is good at cooking".

上手 is praise, so it's for other people. Calling your own skill 上手 sounds like boasting. About yourself, say 得意 (a strong point) or play it down: まだ下手です, "I'm still bad at it".

That's why 日本語が上手ですね is the compliment every learner hears, and まだまだです ("not at all, still far to go") is the modest reply.

Before a verb, they take に: 上手に話す, "speak well".
`,
    sentences: [
      s("田中さんは料理{が}上手です。", "たなかさんはりょうり{が}じょうずです。", "Mr Tanaka is good at cooking.", {
        near: [["を", "上手 is an adjective: the skill takes が, not を."]],
      }),
      s("私は歌{が}下手です。", "わたしはうた{が}へたです。", "I'm bad at singing.", {
        near: [["を", "下手 is an adjective: the skill takes が, not を."]],
      }),
      s("妹さんは絵{が}上手ですね。", "いもうとさんはえ{が}じょうずですね。", "Your sister is really good at drawing.", {
        near: [["を", "上手 is an adjective: the skill takes が, not を."]],
      }),
      s("日本語が{上手}ですね。", "にほんごが{じょうず}ですね。", "Your Japanese is very good.", {
        hint: "good at",
        near: [["下手", "下手 is \"bad at\". A compliment is 上手."]],
      }),
      s("私はまだ日本語が{下手}です。", "わたしはまだにほんごが{へた}です。", "My Japanese is still bad.", {
        hint: "bad at",
        near: [["上手じゃない", "That works too, and is a little softer. This point practises 下手."]],
      }),
    ],
  }),

  point({
    id: "n5-wa-ga",
    title: "〜は〜が",
    meaning: "A's B is… (describing a feature)",
    structure: "Topic は + part / aspect が + adjective",
    related: ["n5-wa", "n5-ga", "n5-ga-suki"],
    explanation: `
A very common shape: the topic with **は**, then a part or aspect of it with **が**, then an adjective. 象は鼻が長い, "elephants have long trunks", is literally "as for elephants, the trunk is long".

は sets up who or what you're talking about; が picks out the feature. So 田中さんは背が高い is "Mr Tanaka is tall" (as for him, height is high).

English folds this into "has" or a single adjective, so learners reach for の: 田中さんの背が高い. That's grammatical, but it's a statement about the height, not about Tanaka.

The same pattern gives you 私は頭が痛い, "I have a headache", and この町は人が多い, "this town is crowded".
`,
    sentences: [
      s("象は鼻{が}長いです。", "ぞうははな{が}ながいです。", "Elephants have long trunks.", {
        near: [["は", "A second は would contrast the trunk with something else. For the feature of the topic, use が."]],
      }),
      s("田中さんは背{が}高いです。", "たなかさんはせ{が}たかいです。", "Mr Tanaka is tall.", {
        near: [["を", "を marks an object, and there's no action here. The feature takes が."]],
      }),
      s("今日は頭{が}痛いです。", "きょうはあたま{が}いたいです。", "I have a headache today.", {
        near: [["を", "を marks an object, and there's no action here. What hurts takes が."]],
      }),
      s("この町は人{が}多いです。", "このまちはひと{が}おおいです。", "This town is crowded.", {
        near: [["は", "A second は would contrast people with something else. For the feature of the topic, use が."]],
      }),
      s("姉は髪{が}長いです。", "あねはかみ{が}ながいです。", "My older sister has long hair.", {
        near: [["の", "姉の髪は長い also works, but it describes the hair. To describe your sister, use は…が."]],
      }),
    ],
  }),

  point({
    id: "n5-ga-wakaru",
    title: "〜が分かる",
    meaning: "understand",
    structure: "Thing + が + 分かる",
    related: ["n5-ga", "n5-ga-suki", "n5-ga-dekiru"],
    explanation: `
**分かる** means "understand" or "be clear", and like 好き it puts the thing understood before **が**: 日本語が分かります, "I understand Japanese". The person who understands is the topic: 私は少し日本語が分かります.

It's also the everyday "got it": 分かりました, "understood, will do". To say you don't know or can't tell, 分かりません is the polite and humble answer.

Don't swap it with 知る, "come to know a fact". 知っています is "I know (that fact)"; 分かります is "I understand (it, what you said)". For "I don't know" to a question you have no information about, 分かりません is the safer choice for a beginner.
`,
    sentences: [
      s("私は少し日本語{が}分かります。", "わたしはすこしにほんご{が}わかります。", "I understand a little Japanese.", {
        near: [["を", "分かる takes が for the thing understood, not を."]],
      }),
      s("この漢字の意味{が}分かりません。", "このかんじのいみ{が}わかりません。", "I don't understand what this kanji means.", {
        near: [["を", "分かる takes が for the thing understood, not を."]],
      }),
      s("はい、{分かりました}。", "はい、{わかりました}。", "Yes, understood.", {
        hint: "分かる",
        conj: { word: word("分かる"), form: "polite-past", marker: "ました" },
        near: [["知りました", "知る is finding out a fact. For \"got it\", use 分かる."]],
      }),
      s("答え{が}分かった人は手を上げてください。", "こたえ{が}わかったひとはてをあげてください。", "If you know the answer, raise your hand.", {
        near: [["を", "分かる takes が for the thing understood, not を."]],
      }),
      s("すみません、道{が}分からないんですが。", "すみません、みち{が}わからないんですが。", "Excuse me, I'm lost.", {
        near: [["を", "分かる takes が for the thing understood, not を."]],
      }),
    ],
  }),

  point({
    id: "n5-ga-dekiru",
    title: "〜ができる",
    meaning: "can (do), be able to",
    structure: "Noun + が + できる",
    related: ["n5-ga-wakaru", "n5-ga-jouzu"],
    explanation: `
**できる** means "can do" or "be able to", and like 分かる it puts the thing you can do before **が**: 日本語ができます, "I can speak Japanese"; テニスができますか, "can you play tennis?"

With する-nouns it takes the place of する: 運転する → 運転ができる, "can drive".

It's a regular ichidan verb (できない, できた), and it has two other everyday meanings:

- "be ready, be done": ご飯ができましたよ, "dinner's ready!"
- "come into being": 駅の前に新しい店ができました, "a new shop has opened in front of the station"

For "can" with other verbs, Japanese uses the potential form (食べられる) or ことができる, both at N4.
`,
    sentences: [
      s("私は日本語{が}少しできます。", "わたしはにほんご{が}すこしできます。", "I can speak a little Japanese.", {
        near: [["を", "できる takes が for the thing you can do, not を."]],
      }),
      s("兄は料理{が}できません。", "あにはりょうり{が}できません。", "My older brother can't cook.", {
        near: [["を", "できる takes が for the thing you can do, not を."]],
      }),
      s("テニス{が}できますか。", "テニス{が}できますか。", "Can you play tennis?", {
        near: [["を", "テニスをしますか asks whether you play. With できる, the sport takes が."]],
      }),
      s("ご飯が{できました}よ。", "ごはんが{できました}よ。", "Dinner's ready!", {
        hint: "できる",
        conj: { word: word("できる", "できる", "ichidan"), form: "polite-past", marker: "ました" },
        near: [["作りました", "作りました is \"I made it\". For \"it's ready\", use できました."]],
      }),
      s("駅の前に新しい店が{できました}。", "えきのまえにあたらしいみせが{できました}。", "A new shop has opened in front of the station.", {
        hint: "できる",
        conj: { word: word("できる", "できる", "ichidan"), form: "polite-past", marker: "ました" },
        near: [["開きました", "開きました is \"opened (for the day)\". For a new shop appearing, use できました."]],
      }),
    ],
  }),

  point({
    id: "n5-ga-hoshii",
    title: "〜がほしい",
    meaning: "want (a thing)",
    structure: "Thing + が + ほしい",
    related: ["n5-tai", "n5-ga-suki"],
    explanation: `
**ほしい** means "wanted", and it's an い-adjective, so it conjugates on its own: ほしくない (don't want), ほしかった (wanted). The thing wanted takes **が**: 新しいパソコンがほしいです, "I want a new computer".

ほしい is for things. To want to **do** something, use the たい form of the verb instead (next point): 行きたい, not 行くがほしい.

It describes the speaker's own wants. For someone else, Japanese reports it from outside: 弟は新しいゲームをほしがっています, "my brother wants a new game". And asking a superior 何がほしいですか is too direct; offer instead.
`,
    sentences: [
      s("新しいパソコン{が}ほしいです。", "あたらしいパソコン{が}ほしいです。", "I want a new computer.", {
        near: [["を", "ほしい is an adjective: the thing wanted takes が, not を."]],
      }),
      s("誕生日に何{が}ほしいですか。", "たんじょうびになに{が}ほしいですか。", "What do you want for your birthday?", {
        near: [["を", "ほしい is an adjective: the thing wanted takes が, not を."]],
      }),
      s("今は何も{ほしくない}です。", "いまはなにも{ほしくない}です。", "I don't want anything right now.", {
        hint: "ほしい",
        conj: { word: word("ほしい", "ほしい", "i-adj"), form: "negative", marker: "くない" },
        near: [["ほしいじゃない", "ほしい is an い-adjective: drop い, add くない."]],
      }),
      s("子どもの時、犬{が}ほしかったです。", "こどものとき、いぬ{が}ほしかったです。", "As a kid I wanted a dog.", {
        near: [["を", "ほしい is an adjective: the thing wanted takes が, not を."]],
      }),
      s("もっと時間が{ほしい}な。", "もっとじかんが{ほしい}な。", "I wish I had more time.", {
        hint: "want",
        near: [["ほしがる", "ほしがる reports someone else's wants. For your own, use ほしい."]],
      }),
    ],
  }),

  point({
    id: "n5-tai",
    title: "〜たい",
    meaning: "want to (do)",
    structure: "Verb ます-stem + たい",
    related: ["n5-ga-hoshii", "n5-masu"],
    explanation: `
To want to do something, put **たい** on the verb's ます-stem: 食べます → 食べたい, "want to eat"; 行きます → 行きたい, "want to go". Politely, add です: 行きたいです.

The result is an い-adjective, so it conjugates like one: 行きたくない (don't want to go), 行きたかった (wanted to go).

With たい, the object can take が instead of を: 水が飲みたい and 水を飲みたい are both fine.

Like ほしい, たい is for your own wants, or for asking someone else directly. Asking a superior 何を食べたいですか is too blunt; 何になさいますか is the polite version you'll hear in shops.
`,
    sentences: [
      s("日本に{行きたいです}。", "にほんに{いきたいです}。", "I want to go to Japan.", {
        hint: "行く, polite",
        conj: { word: word("行く"), form: "tai", tail: "です", marker: "たいです" },
        near: [
          ["行きたい", "Right, but this sentence is polite: add です."],
          ["行くがほしい", "ほしい is for things. For wanting to do something, use たい."],
        ],
      }),
      s("冷たい水が{飲みたい}。", "つめたいみずが{のみたい}。", "I want a cold drink of water.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "tai", marker: "たい" },
        near: [["飲みます", "That's \"I'll drink\". For \"want to\", use たい."]],
      }),
      s("今日は何も{したくない}。", "きょうはなにも{したくない}。", "I don't want to do anything today.", {
        hint: "する, negative",
        conj: { word: word("する"), form: "tai-negative", marker: "たくない" },
        near: [["したいじゃない", "たい works like an い-adjective: たくない."]],
      }),
      s("週末、何を{食べたいですか}。", "しゅうまつ、なにを{たべたいですか}。", "What do you want to eat this weekend?", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "tai", tail: "ですか", marker: "たいですか" },
        near: [["食べますか", "That's \"will you eat\". For \"want to\", use たい."]],
      }),
      s("子どもの時、先生に{なりたかった}です。", "こどものとき、せんせいに{なりたかった}です。", "As a kid I wanted to be a teacher.", {
        hint: "なる, past",
        conj: { word: word("なる", "なる", "godan"), form: "tai", cut: "い", tail: "かった", marker: "たかった" },
        near: [["なりたいでした", "たい works like an い-adjective: its past is たかった."]],
      }),
    ],
  }),

  point({
    id: "n5-amari-zenzen",
    title: "あまり・全然 〜ない",
    meaning: "not very, not at all",
    structure: "あまり / 全然 + negative",
    related: ["n5-i-adj-negative", "n5-masen", "n5-frequency"],
    explanation: `
**あまり** with a negative softens it to "not very" or "not much": あまり高くない, "not very expensive"; あまり見ません, "I don't watch it much". **全然** makes it total: 全然分からない, "I don't understand at all".

Both need a negative verb or adjective later in the sentence. とても ("very") is their positive partner and can't be used with a negative: とても高くない is wrong.

あまり is also the polite way to say you don't like something: あまり好きじゃないです sounds far gentler than 嫌いです.

In casual speech, 全然 sometimes appears with a positive to mean "totally": 全然大丈夫, "totally fine".
`,
    sentences: [
      s("この店は{あまり}高くないです。", "このみせは{あまり}たかくないです。", "This shop isn't very expensive.", {
        hint: "not very",
        near: [
          ["とても", "とても goes with positive sentences. With a negative, \"not very\" is あまり."],
          ["全然", "全然 is \"not at all\". For \"not very\", use あまり."],
        ],
      }),
      s("フランス語は{全然}分かりません。", "フランスごは{ぜんぜん}わかりません。", "I don't understand French at all.", {
        hint: "not at all",
        near: [["あまり", "あまり is \"not very\". For \"not at all\", use 全然."]],
      }),
      s("テレビは{あまり}見ません。", "テレビは{あまり}みません。", "I don't watch much TV.", {
        hint: "not much",
        near: [["全然", "全然 is \"never, not at all\". For \"not much\", use あまり."]],
      }),
      s("昨日は{全然}寝られなかった。", "きのうは{ぜんぜん}ねられなかった。", "I couldn't sleep at all last night.", {
        hint: "not at all",
        near: [["あまり", "あまり is \"not much\". For \"not at all\", use 全然."]],
      }),
      s("魚は{あまり}好きじゃないです。", "さかなは{あまり}すきじゃないです。", "I'm not a big fan of fish.", {
        hint: "not very",
        near: [["とても", "とても goes with positive sentences. With a negative, use あまり."]],
      }),
    ],
  }),

  point({
    id: "n5-frequency",
    title: "いつも・よく・時々・たまに",
    meaning: "always, often, sometimes, once in a while",
    structure: "Frequency adverb + verb",
    related: ["n5-amari-zenzen", "n5-adverbs"],
    explanation: `
Four adverbs say how often, from most to least:

- **いつも**: always
- **よく**: often
- **時々** (ときどき): sometimes
- **たまに**: once in a while

Below those come あまり〜ない (not often) and 全然〜ない (never), which need a negative verb.

They usually sit early in the sentence, before the object: いつも朝ご飯を食べます, "I always eat breakfast".

よく also means "well" (よく寝ました, "I slept well"), since it comes from いい; context sorts it out. 々 in 時々 is the repeat mark: the same kanji twice.
`,
    sentences: [
      s("父は{いつも}七時に起きます。", "ちちは{いつも}しちじにおきます。", "My father always gets up at seven.", {
        hint: "always",
        near: [
          ["いつ", "いつ asks \"when\". For \"always\", use いつも."],
          ["よく", "よく is \"often\". For \"always\", use いつも."],
        ],
      }),
      s("週末は{よく}映画を見ます。", "しゅうまつは{よく}えいがをみます。", "I often watch films at weekends.", {
        hint: "often",
        near: [["いつも", "いつも is \"always\". For \"often\", use よく."]],
      }),
      s("{時々}友達と料理を作ります。", "{ときどき}ともだちとりょうりをつくります。", "Sometimes I cook with friends.", {
        hint: "sometimes",
        near: [["たまに", "たまに is \"once in a while\", less often. For \"sometimes\", use 時々."]],
      }),
      s("{たまに}お酒を飲みます。", "{たまに}おさけをのみます。", "I have a drink once in a while.", {
        hint: "once in a while",
        near: [["時々", "時々 is \"sometimes\", a bit more often. For \"once in a while\", use たまに."]],
      }),
      s("雨の日は{いつも}バスで行きます。", "あめのひは{いつも}バスでいきます。", "On rainy days I always go by bus.", {
        hint: "always",
        near: [["よく", "よく is \"often\". For \"always\", use いつも."]],
      }),
    ],
  }),

  point({
    id: "n5-naru",
    title: "〜になる・〜くなる",
    meaning: "become",
    structure: "Noun / な-adjective + に + なる · い-adjective − い + く + なる",
    related: ["n5-adverbs", "n5-ni-suru"],
    explanation: `
**なる** means "become", and it attaches to the adverb forms of adjectives:

- い-adjectives: drop い, add く. 寒い → 寒くなる, "get cold".
- な-adjectives and nouns: add に. 元気 → 元気になる, "get better"; 医者 → 医者になる, "become a doctor".

Japanese uses なる far more than English uses "become": the seasons change (暖かくなりました), people grow up (大きくなったね), and even the time comes round (八時になりました). Often the natural English is "get" or "turn".

The past なりました is the usual way to report a change: 上手になりました, "you've got good".
`,
    sentences: [
      s("だんだん{寒くなりました}。", "だんだん{さむくなりました}。", "It's gradually got colder.", {
        hint: "寒い",
        conj: { word: word("寒い"), form: "adverb", tail: "なりました", marker: "なりました" },
        near: [
          ["寒いになりました", "い-adjectives change い to く before なる: 寒くなりました."],
          ["寒くなります", "That's \"it will get colder\". The change has already happened."],
        ],
      }),
      s("日本語が{上手になりました}ね。", "にほんごが{じょうずになりました}ね。", "Your Japanese has got really good.", {
        hint: "上手",
        conj: { word: word("上手"), form: "adverb", tail: "なりました", marker: "なりました" },
        near: [["上手くなりました", "上手 is a な-adjective: 上手になる, with に."]],
      }),
      s("将来、医者に{なりたい}です。", "しょうらい、いしゃに{なりたい}です。", "I want to be a doctor someday.", {
        hint: "なる",
        conj: { word: word("なる", "なる", "godan"), form: "tai", marker: "たい" },
        near: [["したい", "する is \"do\". To become something, use なる."]],
      }),
      s("部屋が{きれいになりました}。", "へやが{きれいになりました}。", "The room's clean now.", {
        hint: "きれい",
        conj: { word: word("きれい"), form: "adverb", tail: "なりました", marker: "なりました" },
        near: [["きれくなりました", "きれい is a な-adjective: きれいになる, with に."]],
      }),
      s("もう十時に{なりました}よ。", "もうじゅうじに{なりました}よ。", "It's already ten o'clock.", {
        hint: "なる",
        conj: { word: word("なる", "なる", "godan"), form: "polite-past", marker: "ました" },
        near: [["です", "です is a plain \"it's ten\". To say the time has come round, use なりました."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-suru",
    title: "〜にする",
    meaning: "decide on, go with",
    structure: "Noun + に + する",
    related: ["n5-naru", "n5-wo-kudasai"],
    explanation: `
Noun + **にする** means "decide on" or "go with": 私はコーヒーにします, "I'll have coffee". It's the everyday way to choose from options, and you'll hear it at every restaurant table.

The past, にしました, reports a decision: 旅行は京都にしました, "we went with Kyoto for the trip".

Compare なる: 〜になる is something becoming what it is by itself, 〜にする is someone choosing it. 静かにする is "make it quiet, keep quiet", which is why 静かにしてください means "please be quiet".

To ask what someone wants, 何にしますか, "what will you have?"
`,
    sentences: [
      s("私はコーヒー{にします}。", "わたしはコーヒー{にします}。", "I'll have coffee.", {
        near: [
          ["をします", "コーヒーをします doesn't work. For choosing, use にします."],
          ["がいいです", "That works too (\"coffee would be good\"). This point practises にします."],
        ],
      }),
      s("飲み物は何{にしますか}。", "のみものはなに{にしますか}。", "What would you like to drink?", {
        near: [["をしますか", "何をしますか is \"what will you do?\". For choosing, use にしますか."]],
      }),
      s("旅行は京都{にしました}。", "りょこうはきょうと{にしました}。", "We went with Kyoto for the trip.", {
        near: [["になりました", "になりました would mean it turned out that way by itself. Someone chose it: にしました."]],
      }),
      s("じゃあ、この赤いの{にします}。", "じゃあ、このあかいの{にします}。", "Okay, I'll go with this red one.", {
        near: [["をください", "That works too in a shop. This point practises にします."]],
      }),
      s("図書館では静か{にして}ください。", "としょかんではしずか{にして}ください。", "Please be quiet in the library.", {
        near: [["になって", "になって is \"become\". Keeping quiet is something you do: にして."]],
      }),
    ],
  }),
];
