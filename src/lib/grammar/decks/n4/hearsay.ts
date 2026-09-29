import { point, s, word } from "../../build";

/** Guessing, hearsay, thinking and quoting. */

const MITAI_CASUAL = "みたい means the same and is more casual. This point practises ようです.";

export const hearsay = [
  point({
    id: "n4-sou-looks",
    title: "〜そう (looks like)",
    meaning: "looks, seems (from what you see)",
    structure: "Verb ます-stem / い-adj − い / な-adj + そう",
    related: ["n4-sou-hearsay", "n4-you-da"],
    explanation: `
**そう** after a stem says how something looks, judging by appearance: おいしそう, "looks delicious"; 雨が降りそう, "looks like it's going to rain".

- verbs: ます-stem + そう: 降りそう, 落ちそう (about to happen)
- い-adjectives: drop い: おいしい → おいしそう, 難しい → 難しそう
- な-adjectives: add directly: 元気そう, 便利そう
- いい → よさそう, ない → なさそう

Before a noun it takes な (おいしそうなケーキ); before a verb, に (楽しそうに話す).

It can't follow a noun (学生そう is wrong; see ようだ or みたい). And watch the い: おいしいそう, with the い kept, is the hearsay そう, "I hear it's good", the next point.
`,
    sentences: [
      s("このケーキ、{おいしそう}！", "このケーキ、{おいしそう}！", "This cake looks delicious!", {
        hint: "おいしい",
        near: [["おいしいそう", "Drop the い before this そう: おいしそう. (おいしいそう means \"I hear it's good\".)"]],
      }),
      s("空が暗いですね。雨が{降りそう}です。", "そらがくらいですね。あめが{ふりそう}です。", "The sky's dark. It looks like rain.", {
        hint: "降る",
        conj: { word: word("降る"), form: "polite", cut: "ます", tail: "そう", marker: "そう" },
        near: [["降るそう", "降るそうです is \"I hear it will rain\". For \"looks like\", use the ます-stem: 降りそう."]],
      }),
      s("田中さんは{元気そう}でした。", "たなかさんは{げんきそう}でした。", "Mr Tanaka looked well.", {
        hint: "元気",
        near: [["元気だそう", "元気だそう is \"I hear he's well\". For how he looked, 元気そう."]],
      }),
      s("この本は{難しそう}ですね。", "このほんは{むずかしそう}ですね。", "This book looks hard.", {
        hint: "難しい",
        near: [["難しいそう", "Drop the い before this そう: 難しそう. (難しいそう means \"I hear it's hard\".)"]],
      }),
      s("{よさそう}なホテルですね。", "{よさそう}なホテルですね。", "That looks like a nice hotel.", {
        hint: "いい",
        near: [["いいそう", "いい goes through よい: よさそう."]],
      }),
    ],
  }),

  point({
    id: "n4-sou-hearsay",
    title: "〜そうだ (I hear)",
    meaning: "I hear that, apparently",
    structure: "Plain form + そうです · Noun / な-adj + だそうです",
    related: ["n4-sou-looks", "n4-rashii", "n4-to-iu"],
    explanation: `
Plain form + **そうです** reports something you've heard: 明日は雨が降るそうです, "I hear it's going to rain tomorrow". The source often comes first with によると: 天気予報によると, "according to the forecast".

Nouns and な-adjectives keep だ: 医者だそうです, 有名だそうです.

This そう doesn't change for past or negative; that goes on the verb before it: 行かなかったそうです, "I hear he didn't go".

It's easy to confuse with the "looks like" そう. The difference is what comes before: a full plain form (降るそう, おいしいそう) is hearsay; a stem (降りそう, おいしそう) is appearance.
`,
    sentences: [
      s("天気予報によると、明日は雨が降る{そうです}。", "てんきよほうによると、あしたはあめがふる{そうです}。", "According to the forecast, it'll rain tomorrow.", {
        near: [
          ["でしょう", "でしょう is your own guess. For something you heard, use そうです."],
          ["らしいです", "らしい is close, but more of an inference. With a source like the forecast, そうです."],
        ],
      }),
      s("田中さんは来月結婚する{そうです}。", "たなかさんはらいげつけっこんする{そうです}。", "I hear Mr Tanaka is getting married next month.", {
        near: [["ようです", "ようです is your own judgement from evidence. For news you heard, use そうです."]],
      }),
      s("あの店のラーメンはとてもおいしい{そうです}。", "あのみせのラーメンはとてもおいしい{そうです}。", "Apparently the ramen at that place is really good.", {
        near: [["みたいです", "みたい is your own impression. For something you've heard, use そうです."]],
      }),
      s("山田さんの妹さんは医者だ{そうです}。", "やまださんのいもうとさんはいしゃだ{そうです}。", "I hear Ms Yamada's younger sister is a doctor.", {
        near: [["です", "That states it as fact. To report what you heard, use そうです."]],
      }),
      s("昨日の試験は難しかった{そうです}。", "きのうのしけんはむずかしかった{そうです}。", "I hear yesterday's exam was hard.", {
        near: [["でした", "That states it as your own experience. To report what you heard, use そうです."]],
      }),
    ],
  }),

  point({
    id: "n4-you-da",
    title: "〜ようだ",
    meaning: "it seems, apparently (from evidence); like",
    structure: "Plain form + ようです · Noun + のようです · な-adj + なようです",
    register: "みたい is the casual equivalent.",
    related: ["n4-mitai", "n4-rashii", "n4-sou-looks"],
    explanation: `
Plain form + **ようです** gives your judgement from what you've noticed: 誰もいないようです, "there doesn't seem to be anyone here" (it's quiet, the lights are off).

Nouns take の (雨のようです) and な-adjectives take な (静かなようです).

It also makes comparisons, "like": まるで夢のようです, "it's just like a dream". まるで ("just like") often signals this use.

Compare the neighbours: そう (looks like) is about appearance, そうだ (I hear) is about what you were told, and らしい leans towards hearsay. ようだ is your own conclusion from the evidence in front of you.

Casually, the same thing is みたい, the next point.
`,
    sentences: [
      s("電気が消えています。誰もいない{ようです}。", "でんきがきえています。だれもいない{ようです}。", "The lights are off. There doesn't seem to be anyone here.", {
        near: [
          ["みたいです", MITAI_CASUAL],
          ["そうです", "そうです here would be \"I hear\". For your own judgement from what you see, use ようです."],
        ],
      }),
      s("田中さんは風邪を引いた{ようです}。", "たなかさんはかぜをひいた{ようです}。", "Mr Tanaka seems to have caught a cold.", {
        near: [["みたいです", MITAI_CASUAL]],
      }),
      s("外は寒い{ようです}ね。", "そとはさむい{ようです}ね。", "It seems cold outside.", {
        near: [["そうです", "寒いそうです is \"I hear it's cold\". For your own judgement, use ようです."]],
      }),
      s("会議はもう終わった{ようです}。", "かいぎはもうおわった{ようです}。", "The meeting seems to be over already.", {
        near: [["みたいです", MITAI_CASUAL]],
      }),
      s("まるで夢{のようです}。", "まるでゆめ{のようです}。", "It's just like a dream.", {
        near: [
          ["ようです", "After a noun, add の: 夢のようです."],
          ["みたいです", "夢みたい means the same and is casual. This point practises のようです."],
        ],
      }),
    ],
  }),

  point({
    id: "n4-mitai",
    title: "〜みたい",
    meaning: "seems, looks like; like (casual)",
    structure: "Plain form / Noun + みたい (だ) · みたいな + Noun · みたいに + Verb",
    register: "Casual. ようだ is the neutral or written equivalent.",
    related: ["n4-you-da", "n4-rashii"],
    explanation: `
**みたい** is the everyday, casual version of ようだ. It attaches straight to nouns, with no の: 雨みたい, "looks like rain"; 子どもみたい, "like a child".

It does both of ようだ's jobs:

- a judgement: 田中さん、今日は休みみたい, "Tanaka seems to be off today"
- a comparison: 夢みたい!, "it's like a dream!"

Before a noun it becomes みたいな: 子どもみたいなことを言わないで, "don't say such childish things". Before a verb, みたいに: 猫みたいに寝ている, "sleeping like a cat".

In polite speech, みたいです is fine in conversation; in writing, use ようです.
`,
    sentences: [
      s("外は雨{みたい}。", "そとはあめ{みたい}。", "Looks like it's raining out.", {
        near: [["のみたい", "みたい attaches straight to the noun: 雨みたい."]],
      }),
      s("田中さん、今日は休み{みたい}だよ。", "たなかさん、きょうはやすみ{みたい}だよ。", "Tanaka seems to be off today.", {
        near: [["のようだ", "のようだ means the same but is more formal. Between friends, みたい."]],
      }),
      s("本当に夢{みたい}！", "ほんとうにゆめ{みたい}！", "It's like a dream!", {
        near: [["のよう", "That's the formal version. This sentence is casual: みたい."]],
      }),
      s("子ども{みたいな}ことを言わないで。", "こども{みたいな}ことをいわないで。", "Don't say such childish things.", {
        near: [["みたい", "Before a noun, add な: みたいなこと."]],
      }),
      s("うちの犬は猫{みたいに}寝ている。", "うちのいぬはねこ{みたいに}ねている。", "Our dog sleeps like a cat.", {
        near: [["みたいな", "みたいな goes before a noun. Before a verb, use みたいに."]],
      }),
    ],
  }),

  point({
    id: "n4-rashii",
    title: "〜らしい",
    meaning: "apparently; typical of, like a proper",
    structure: "Plain form / Noun + らしい · Noun + らしい (typical)",
    related: ["n4-sou-hearsay", "n4-you-da"],
    explanation: `
**らしい** has two jobs.

After a plain form or a noun, it's "apparently", a conclusion from what you've heard or picked up: 田中さんは会社を辞めるらしい, "apparently Tanaka's quitting". It sounds a little more distant than そうだ, as if you're passing on what you gathered. Nouns and な-adjectives take it directly, with no だ.

After a noun, it can also mean "typical of, a proper": 春らしい天気, "real spring weather"; 君らしくない, "that's not like you". This らしい is an い-adjective, so it conjugates: らしくない, らしかった.

Which one it is usually comes from context: 男らしい is "manly", not "apparently a man".
`,
    sentences: [
      s("田中さんは会社を辞める{らしい}よ。", "たなかさんはかいしゃをやめる{らしい}よ。", "Apparently Tanaka's quitting the company.", {
        near: [["そうだ", "そうだ works too, and is more direct about having heard it. This point practises らしい."]],
      }),
      s("あの店は来月閉まる{らしい}です。", "あのみせはらいげつしまる{らしい}です。", "It seems that shop is closing next month.", {
        near: [["ようです", "ようです is your own judgement from evidence. For something you've picked up, らしい."]],
      }),
      s("今日は春{らしい}天気ですね。", "きょうははる{らしい}てんきですね。", "Real spring weather today, isn't it?", {
        near: [["みたいな", "春みたいな would be \"like spring\" (but it isn't). For \"typical of spring\", use らしい."]],
      }),
      s("そんなことを言うなんて、君{らしくない}ね。", "そんなことをいうなんて、きみ{らしくない}ね。", "Saying something like that isn't like you.", {
        near: [["みたいじゃない", "That would be \"doesn't seem like you\". For \"not like you (at all)\", use らしくない."]],
      }),
      s("犯人はまだ見つかっていない{らしい}。", "はんにんはまだみつかっていない{らしい}。", "Apparently they still haven't found the culprit.", {
        near: [["ようだ", "ようだ is your own judgement from evidence. For something you've picked up from the news, use らしい."]],
      }),
    ],
  }),

  point({
    id: "n4-kamoshirenai",
    title: "〜かもしれない",
    meaning: "might, may",
    structure: "Plain form / Noun + かもしれない",
    register: "Polite: かもしれません. Casual: かも.",
    related: ["n5-deshou", "n4-hazu"],
    explanation: `
**かもしれない** means "might" or "maybe": 明日は雨が降るかもしれません, "it might rain tomorrow". It's a real possibility, but no more than about even odds.

It attaches to plain forms, and nouns and な-adjectives take it directly, without だ: 間違いかもしれない, "it might be a mistake".

Compare でしょう ("probably"), which is more confident, and はず ("should be"), which is based on reasoning.

In casual speech it shrinks to かも: 間に合わないかも, "we might not make it". Politely, かもしれません.

It's also a handy softener. もしかしたら ("perhaps") at the start of the sentence often goes with it: もしかしたら、田中さんはもう帰ったかもしれません.
`,
    sentences: [
      s("明日は雨が降る{かもしれません}。", "あしたはあめがふる{かもしれません}。", "It might rain tomorrow.", {
        near: [["でしょう", "でしょう is \"probably\", more confident. For \"might\", use かもしれません."]],
      }),
      s("田中さんはもう帰った{かもしれない}。", "たなかさんはもうかえった{かもしれない}。", "Tanaka might have gone home already.", {
        near: [["かもしれません", "Right, but that's polite. This sentence is casual."]],
      }),
      s("この答えは間違い{かもしれません}。", "このこたえはまちがい{かもしれません}。", "This answer might be wrong.", {
        near: [["だかもしれません", "Nouns take かもしれない directly, without だ."]],
      }),
      s("来週は忙しい{かもしれない}。", "らいしゅうはいそがしい{かもしれない}。", "I might be busy next week.", {
        near: [["でしょう", "でしょう is \"probably\". For \"might\", use かもしれない."]],
      }),
      s("急がないと、間に合わない{かも}。", "いそがないと、まにあわない{かも}。", "If we don't hurry, we might not make it.", {
        hint: "casual",
        near: [["かもしれない", "Right, but this sentence is casual and clipped: かも."]],
      }),
    ],
  }),

  point({
    id: "n4-hazu",
    title: "〜はず",
    meaning: "should be, is supposed to",
    structure: "Plain form + はずだ · Noun + のはず · な-adj + なはず",
    related: ["n4-kamoshirenai", "n5-deshou"],
    explanation: `
**はず** is an expectation based on reasoning or what you know: 田中さんはもうすぐ来るはずです, "Mr Tanaka should be here soon" (he said he'd come, he's always on time).

Nouns take の (三時からのはず) and な-adjectives take な (上手なはず).

The negative はずがない means "can't possibly": そんなはずはありません, "that can't be right".

Compare its neighbours: でしょう is a plain guess, かもしれない is a possibility, and はず is "if everything's as I understand it, then…". Past はずだった is "was supposed to", often when something didn't go to plan.
`,
    sentences: [
      s("田中さんはもうすぐ来る{はずです}。", "たなかさんはもうすぐくる{はずです}。", "Mr Tanaka should be here soon.", {
        near: [["でしょう", "でしょう is a guess. For \"should (by all accounts)\", use はずです."]],
      }),
      s("荷物は明日着く{はずです}。", "にもつはあしたつく{はずです}。", "The parcel should arrive tomorrow.", {
        near: [["かもしれません", "かもしれません is only \"might\". For an expectation, use はずです."]],
      }),
      s("会議は三時から{のはずです}。", "かいぎはさんじから{のはずです}。", "The meeting is supposed to start at three.", {
        near: [["はずです", "After から, add の: からのはずです."]],
      }),
      s("そんな{はずはありません}。", "そんな{はずはありません}。", "That can't be right.", {
        near: [["ことはありません", "そんなことはありません is \"that's not so\". For \"that can't be\", use はずはありません."]],
      }),
      s("日本に十年住んでいたから、日本語が上手な{はずだ}。", "にほんにじゅうねんすんでいたから、にほんごがじょうずな{はずだ}。", "He lived in Japan for ten years, so his Japanese must be good.", {
        near: [["みたいだ", "みたい is an impression. Reasoning from the ten years, use はずだ."]],
      }),
    ],
  }),

  point({
    id: "n4-to-omou",
    title: "〜と思う",
    meaning: "I think (that)",
    structure: "Plain form + と思う · Noun / な-adj + だと思う",
    related: ["n4-you-to-omou", "n4-to-iu"],
    explanation: `
Plain form + **と思う** says what you think: 明日は晴れると思います, "I think it'll be sunny tomorrow". と marks the content of the thought, just as it marks a quote.

Nouns and な-adjectives need だ: 学生だと思う, 静かだと思う.

Japanese puts the negative inside the thought: 彼は来ないと思う ("I think he won't come"), where English says "I don't think he'll come". 来ると思わない exists but sounds like a strong denial.

と思っています describes an opinion held over time, or someone else's: 母は私が医者になると思っている.

と思います also softens opinions, so you'll hear it far more than English speakers say "I think".
`,
    sentences: [
      s("明日は晴れる{と思います}。", "あしたははれる{とおもいます}。", "I think it'll be sunny tomorrow.", {
        near: [["を思います", "What you think takes と, not を: 晴れると思います."]],
      }),
      s("田中さんは学生だ{と思います}。", "たなかさんはがくせいだ{とおもいます}。", "I think Mr Tanaka is a student.", {
        near: [["でしょう", "でしょう works too (\"probably\"). This point practises と思います."]],
      }),
      s("この映画は面白い{と思う}。", "このえいがはおもしろい{とおもう}。", "I think this film's good.", {
        near: [["と思います", "Right, but that's polite. This sentence is casual."]],
      }),
      s("彼は来ない{と思います}。", "かれはこない{とおもいます}。", "I don't think he's coming.", {
        near: [["と思いません", "Japanese puts the negative inside the thought: 来ないと思います."]],
      }),
      s("日本語はそんなに難しくない{と思います}。", "にほんごはそんなにむずかしくない{とおもいます}。", "I don't think Japanese is all that hard.", {
        near: [["と思いません", "Japanese puts the negative inside the thought: 難しくないと思います."]],
      }),
    ],
  }),

  point({
    id: "n4-to-iu",
    title: "〜と言う",
    meaning: "say (that), tell",
    structure: "「Quote」/ plain form + と言う (casual: って)",
    related: ["n4-to-omou", "n4-to-iu-name", "n4-sou-hearsay"],
    explanation: `
**と** marks what was said, and **言う** is "say": 田中さんは明日来ると言っていました, "Tanaka said he'd come tomorrow".

A direct quote goes in 「」: 母に「早く寝なさい」と言われた, "my mother told me to go to bed early". An indirect one is a plain-form clause, as in the first example.

と言っていました ("was saying") is the usual way to pass on what someone said. と言いました is more like reporting the exact moment.

Casual speech replaces と言う with って: 彼女、行かないって, "she says she's not going". It's one of the most common words in spoken Japanese.
`,
    sentences: [
      s("田中さんは明日来る{と言っていました}。", "たなかさんはあしたくる{といっていました}。", "Tanaka said he'd come tomorrow.", {
        near: [["を言っていました", "What was said takes と: 来ると言っていた."]],
      }),
      s("母に「早く寝なさい」{と言われました}。", "ははに「はやくねなさい」{といわれました}。", "My mother told me to go to bed early.", {
        near: [["と言いました", "That would be you saying it. Your mother said it to you: と言われました."]],
      }),
      s("「いただきます」{と言ってから}食べます。", "「いただきます」{といってから}たべます。", "We say \"itadakimasu\" before we eat.", {
        near: [["を言ってから", "A quote takes と: 「いただきます」と言ってから."]],
      }),
      s("彼女、今日は来ない{って}。", "かのじょ、きょうはこない{って}。", "She says she's not coming today.", {
        hint: "casual",
        near: [["と言っていました", "That's the full version. Between friends, just って."]],
      }),
      s("英語で「ありがとう」は何{と言いますか}。", "えいごで「ありがとう」はなん{といいますか}。", "How do you say \"arigatou\" in English?", {
        near: [["を言いますか", "何を言いますか is \"what will you say?\". For \"how do you say\", use 何と言いますか."]],
      }),
    ],
  }),

  point({
    id: "n4-to-iu-name",
    title: "〜という",
    meaning: "called, named",
    structure: "Name + という + Noun",
    related: ["n4-to-iu"],
    explanation: `
Name + **という** + noun means "a … called X": 山田という人から電話がありました, "there was a call from someone called Yamada". Literally "a person one calls Yamada".

It's how you introduce a name the listener might not know: a person, a shop, a book, a place. これは何という花ですか asks "what's this flower called?"

Compare の: 山田の人 would be "Yamada's person", which isn't what you mean.

In casual speech it's often shortened to って: 山田って人, "some guy called Yamada". And a very common set phrase is と申します, the humble way to give your own name: 田中と申します.
`,
    sentences: [
      s("山田{という}人から電話がありました。", "やまだ{という}ひとからでんわがありました。", "There was a call from someone called Yamada.", {
        near: [["の", "山田の人 would be \"Yamada's person\". For \"someone called Yamada\", use という."]],
      }),
      s("「千と千尋」{という}映画を見たことがありますか。", "「せんとちひろ」{という}えいがをみたことがありますか。", "Have you seen a film called \"Sen to Chihiro\"?", {
        near: [["の", "の would make it the film belonging to it. For \"a film called\", use という."]],
      }),
      s("これは何{という}花ですか。", "これはなん{という}はなですか。", "What's this flower called?", {
        near: [["の", "何の花 asks what kind. For its name, use 何という花."]],
      }),
      s("駅の前の「さくら」{という}店で会いましょう。", "えきのまえの「さくら」{という}みせであいましょう。", "Let's meet at a place called Sakura in front of the station.", {
        near: [["って", "って works too in casual speech. This point practises という."]],
      }),
      s("私の町には「みどり」{という}公園があります。", "わたしのまちには「みどり」{という}こうえんがあります。", "There's a park called Midori in my town.", {
        near: [["の", "の would make it Midori's park. For \"a park called\", use という."]],
      }),
    ],
  }),

  point({
    id: "n4-ka-dou-ka",
    title: "〜かどうか",
    meaning: "whether (or not)",
    structure: "Plain form / Noun + かどうか",
    related: ["n4-embedded-question"],
    explanation: `
**かどうか** turns a yes/no question into part of a sentence: 明日行けるかどうか分かりません, "I don't know whether I can go tomorrow". It's literally "whether … or how".

It follows plain forms; nouns and な-adjectives take it directly, without だ: 本当かどうか, "whether it's true".

It usually goes with verbs of knowing, asking and deciding: 分かる, 知る, 聞く, 決める, 確かめる.

For questions with a question word (who, what, when), you just use か, the next point: 誰が来るか分からない.

In speech, かどうか is often cut to just か (行けるか分からない), but the full form is clearer, and it's the one you'll see in writing.
`,
    sentences: [
      s("明日行ける{かどうか}分かりません。", "あしたいける{かどうか}わかりません。", "I don't know whether I can go tomorrow.", {
        near: [["か", "か alone works in speech. For \"whether or not\", use かどうか."]],
      }),
      s("この話が本当{かどうか}知りません。", "このはなしがほんとう{かどうか}しりません。", "I don't know if this story is true.", {
        near: [["だかどうか", "Nouns take かどうか directly, without だ."]],
      }),
      s("おいしい{かどうか}、食べてみます。", "おいしい{かどうか}、たべてみます。", "I'll try it and see whether it's any good.", {
        near: [["か", "か alone works in speech. For \"whether or not\", use かどうか."]],
      }),
      s("田中さんが来る{かどうか}聞いてください。", "たなかさんがくる{かどうか}きいてください。", "Please ask whether Tanaka's coming.", {
        near: [["と", "と would quote what he says. To ask whether, use かどうか."]],
      }),
      s("行く{かどうか}、まだ決めていません。", "いく{かどうか}、まだきめていません。", "I haven't decided yet whether to go.", {
        near: [["か", "か alone works in speech. For \"whether or not\", use かどうか."]],
      }),
    ],
  }),

  point({
    id: "n4-embedded-question",
    title: "Question word + 〜か",
    meaning: "(who / what / where …) inside a sentence",
    structure: "Question word … plain form + か + 分かる / 知る / 教える",
    related: ["n4-ka-dou-ka", "n5-question-ka"],
    explanation: `
A question can sit inside a longer sentence: 会議が何時に始まるか知っていますか, "do you know what time the meeting starts?" The inner question ends in plain form + **か**, then comes a verb like 知る, 分かる, 教える, 聞く or 覚える.

Nouns and question words take か directly, without だ: 駅はどこか教えてください, "please tell me where the station is".

Use this when the inner question has a question word (who, what, when, where, why, how). For a yes/no question, it's かどうか, the previous point.

In speech the か is sometimes dropped (何時に始まる知ってる?), but it's safer to keep it.
`,
    sentences: [
      s("会議が何時に始まる{か}知っていますか。", "かいぎがなんじにはじまる{か}しっていますか。", "Do you know what time the meeting starts?", {
        near: [["かどうか", "かどうか is for yes/no questions. With a question word like 何時, just か."]],
      }),
      s("駅はどこ{か}教えてください。", "えきはどこ{か}おしえてください。", "Please tell me where the station is.", {
        near: [["だか", "Question words take か directly, without だ."]],
      }),
      s("誰が来る{か}分かりません。", "だれがくる{か}わかりません。", "I don't know who's coming.", {
        near: [["かどうか", "かどうか is for yes/no questions. With 誰, just か."]],
      }),
      s("何を買った{か}覚えていません。", "なにをかった{か}おぼえていません。", "I don't remember what I bought.", {
        near: [["のを", "のを would be \"the thing I bought\". For \"what I bought\", with 何, use か."]],
      }),
      s("どうして遅れた{か}説明してください。", "どうしておくれた{か}せつめいしてください。", "Please explain why you were late.", {
        near: [["かどうか", "かどうか is for yes/no questions. With どうして, just か."]],
      }),
    ],
  }),
];
