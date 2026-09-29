import { point, s } from "../../build";

/** Adverbs that carry the speaker's attitude: effort, disbelief, admiration, resignation. */

export const attitude = [
  point({
    id: "n3-sekkaku",
    title: "せっかく",
    meaning: "specially, (it's a shame to waste) the effort or chance",
    structure: "せっかく + Verb … のに / から · せっかくの + Noun",
    related: ["n4-noni", "n3-douse", "n2-wazawaza"],
    explanation: `
**せっかく** marks something as valuable because of the effort, trouble or rarity behind it, and says it would be a shame to waste it.

With のに, the effort was wasted: せっかく作ったのに、誰も食べてくれなかった, "I went to the trouble of making it, and nobody ate it".

With から or なら, it's a reason to make the most of it: せっかく京都に来たんだから、お寺を見に行こう, "since we've come all the way to Kyoto, let's see a temple".

With の and a noun, it's a precious thing: せっかくの休み, "my precious day off".

せっかくですが is the polite way to turn down an offer: "it's very kind of you, but…".
`,
    sentences: [
      s("{せっかく}作ったのに、誰も食べてくれなかった。", "{せっかく}つくったのに、だれもたべてくれなかった。", "I went to the trouble of making it, but nobody ate it.", {
        near: [["わざわざ", "That works too. せっかく adds \"and it was wasted\"."]],
      }),
      s("{せっかく}京都に来たんだから、お寺を見に行こう。", "{せっかく}きょうとにきたんだから、おてらをみにいこう。", "Since we've come all the way to Kyoto, let's go and see a temple.", {
        near: [["やっと", "やっと is \"finally\". For \"since we've made the effort\", use せっかく."]],
      }),
      s("{せっかく}の休みなのに、雨だ。", "{せっかく}のやすみなのに、あめだ。", "It's my precious day off, and it's raining.", {
        near: [["やっと", "やっと is \"finally\". For something precious going to waste, use せっかく."]],
      }),
      s("{せっかく}ですが、今回は遠慮します。", "{せっかく}ですが、こんかいはえんりょします。", "It's very kind of you, but I'll pass this time.", {
        near: [["ざんねん", "The polite way to turn down an offer is せっかくですが."]],
      }),
      s("{せっかく}のチャンスだから、やってみたら?", "{せっかく}のチャンスだから、やってみたら?", "It's a rare chance, so why not give it a try?", {
        near: [["たまに", "たまに is \"occasionally\". For a precious chance, use せっかく."]],
      }),
    ],
  }),

  point({
    id: "n3-masaka",
    title: "まさか",
    meaning: "surely not, no way, never imagined",
    structure: "まさか + (negative / とは思わなかった) · まさか!",
    related: ["n3-wake-ga-nai", "n4-hazu-ga-nai"],
    explanation: `
**まさか** expresses disbelief: something is, or was, beyond what you'd imagine. まさか彼が犯人だとは思わなかった, "I never imagined he could be the culprit".

It usually pairs with a negative or a doubt: まさか、そんなことはないでしょう, "surely that can't be true". とは思わなかった ("I never thought") is a very common partner.

On its own, まさか! is "no way!" or "you're kidding!", a reaction to surprising news.

The phrase まさかの時 means "an emergency, a rainy day": まさかの時のために貯金している.

Compare きっと ("surely, certainly"), which is confident the thing is true. まさか is confident it isn't, or can't believe it is.
`,
    sentences: [
      s("{まさか}彼が犯人だとは思わなかった。", "{まさか}かれがはんにんだとはおもわなかった。", "I never imagined he could be the culprit.", {
        near: [["きっと", "きっと is \"surely (yes)\". For \"never imagined\", use まさか."]],
      }),
      s("{まさか}、そんなことはないでしょう。", "{まさか}、そんなことはないでしょう。", "Surely that can't be true.", {
        near: [["たぶん", "たぶん is \"probably\". For disbelief, use まさか."]],
      }),
      s("「宝くじが当たった。」「{まさか}!」", "「たからくじがあたった。」「{まさか}!」", "\"I won the lottery.\" \"No way!\"", {
        near: [["やっぱり", "やっぱり is \"as expected\". For disbelief, use まさか."]],
      }),
      s("{まさか}雪が降るとは思わなかった。", "{まさか}ゆきがふるとはおもわなかった。", "I never expected it to snow.", {
        near: [["きっと", "きっと is \"surely (yes)\". For \"never expected\", use まさか."]],
      }),
      s("{まさか}の時のために、貯金している。", "{まさか}のときのために、ちょきんしている。", "I'm saving for a rainy day.", {
        near: [["もし", "The set phrase for an emergency is まさかの時."]],
      }),
    ],
  }),

  point({
    id: "n3-sasuga",
    title: "さすが",
    meaning: "just as you'd expect (admiring); even (X)",
    structure: "さすが + Noun · さすが(は)〜だ · さすがに",
    related: ["n3-rashii-typical", "n3-masaka", "n2-dake-atte"],
    explanation: `
**さすが** praises someone or something for living up to their reputation: さすがプロだね, "just what you'd expect from a pro". It's admiration, and it's very common as a compliment: さすがですね!

After さすが, the noun names what they are that explains the quality: さすが先生, さすが日本の電車.

**さすがに** is different: it means "even (someone like me), as you'd expect": さすがに今日は疲れた, "even I'm tired today". It admits a limit has been reached, and it's often used with negatives: さすがにそれは無理だ, "that really is too much, even for me".

Compare やはり/やっぱり ("as expected"), which is neutral. さすが adds respect.
`,
    sentences: [
      s("{さすが}プロだね。上手だ。", "{さすが}プロだね。じょうずだ。", "Just what you'd expect from a pro. So good.", {
        near: [["やはり", "That works too. さすが adds admiration."]],
      }),
      s("{さすが}先生、何でも知っている。", "{さすが}せんせい、なんでもしっている。", "Just what you'd expect from a teacher. They know everything.", {
        near: [["まさか", "まさか is disbelief. For admiration, use さすが."]],
      }),
      s("優勝するなんて、{さすが}ですね。", "ゆうしょうするなんて、{さすが}ですね。", "You won the championship? Impressive, as always.", {
        near: [["せっかく", "せっかく is effort not to waste. For admiration, use さすが."]],
      }),
      s("{さすがに}今日は疲れた。", "{さすがに}きょうはつかれた。", "Even I'm tired today.", {
        accept: ["さすが"],
        near: [["やっと", "やっと is \"finally\". For \"even I, as you'd expect\", use さすがに."]],
      }),
      s("{さすが}日本の電車は時間に正確だ。", "{さすが}にほんのでんしゃはじかんにせいかくだ。", "Japanese trains are punctual, just as you'd expect.", {
        near: [["まさか", "まさか is disbelief. For \"just as you'd expect\", use さすが."]],
      }),
    ],
  }),

  point({
    id: "n3-douse",
    title: "どうせ",
    meaning: "anyway (resigned), in any case",
    structure: "どうせ + Sentence · どうせ〜なら",
    related: ["n3-sekkaku", "n4-temo"],
    explanation: `
**どうせ** says the outcome is fixed whatever you do, usually with resignation or cynicism: どうせ間に合わないから、ゆっくり行こう, "we won't make it anyway, so let's take our time".

About yourself, it can be self-pitying: どうせ私には無理だよ, "it's no use, I can't do it anyway".

With なら, it's more positive: "if it's going to happen anyway, let's make the most of it": どうせやるなら、楽しくやろう, "if we're doing it anyway, let's have fun".

Compare せっかく, which values effort and doesn't want to waste it. どうせ has given up on changing the result.
`,
    sentences: [
      s("{どうせ}間に合わないから、ゆっくり行こう。", "{どうせ}まにあわないから、ゆっくりいこう。", "We won't make it anyway, so let's take our time.", {
        near: [["せっかく", "せっかく is \"since we made the effort\". For a resigned \"anyway\", use どうせ."]],
      }),
      s("{どうせ}私には無理だよ。", "{どうせ}わたしにはむりだよ。", "It's no use, I can't do it anyway.", {
        near: [["まさか", "まさか is disbelief. For a resigned \"anyway\", use どうせ."]],
      }),
      s("{どうせ}買うなら、いい物を買いたい。", "{どうせ}かうなら、いいものをかいたい。", "If I'm going to buy one anyway, I want a good one.", {
        near: [["せっかく", "That works too. どうせ is \"if it's going to happen anyway\"."]],
      }),
      s("{どうせ}誰も見ていないんだから。", "{どうせ}だれもみていないんだから。", "Nobody's watching anyway.", {
        near: [["きっと", "きっと is \"surely\". For a resigned \"anyway\", use どうせ."]],
      }),
      s("{どうせ}やるなら、楽しくやろう。", "{どうせ}やるなら、たのしくやろう。", "If we're doing it anyway, let's have fun with it.", {
        near: [["せっかく", "That works too. どうせ is \"if it's going to happen anyway\"."]],
      }),
    ],
  }),

  point({
    id: "n3-nakanaka",
    title: "なかなか",
    meaning: "quite, pretty (good); (not) easily, just won't",
    structure: "なかなか + positive · なかなか + negative · なかなかの + Noun",
    related: ["n5-amari-zenzen", "n5-adverbs"],
    explanation: `
**なかなか** has two uses, depending on what follows.

With a negative, it means something doesn't happen easily, despite waiting or effort: バスがなかなか来ない, "the bus just won't come"; 日本語がなかなか上手にならない, "my Japanese just isn't improving".

With a positive, it means "quite, pretty", better than expected: この料理はなかなかおいしい, "this dish is pretty good". It's a mild compliment, and from a superior it can sound a bit condescending.

Before a noun, it's なかなかの: なかなかの人物, "quite a character".

Compare 全然 (not at all), which is absolute, and あまり (not very). なかなか〜ない implies you're waiting for it to happen.
`,
    sentences: [
      s("バスが{なかなか}来ない。", "バスが{なかなか}こない。", "The bus just won't come.", {
        near: [["全然", "全然 is \"not at all\". For \"just won't\", use なかなか."]],
      }),
      s("この料理は{なかなか}おいしい。", "このりょうりは{なかなか}おいしい。", "This dish is pretty good.", {
        near: [["とても", "That works, but なかなか is \"better than expected\"."]],
      }),
      s("日本語が{なかなか}上手になりません。", "にほんごが{なかなか}じょうずになりません。", "My Japanese just isn't improving.", {
        near: [["全然", "全然 is \"not at all\". For \"just won't\", use なかなか."]],
      }),
      s("彼は{なかなか}の人物だ。", "かれは{なかなか}のじんぶつだ。", "He's quite a character.", {
        near: [["とても", "とても can't go before の. For \"quite a\", use なかなかの."]],
      }),
      s("夜、{なかなか}眠れない。", "よる、{なかなか}ねむれない。", "At night, I just can't get to sleep.", {
        near: [["全然", "全然 is \"not at all\". For \"just can't\", use なかなか."]],
      }),
    ],
  }),

  point({
    id: "n3-mushiro",
    title: "むしろ",
    meaning: "rather, if anything",
    structure: "(A より) むしろ B",
    related: ["n3-to-iu-yori", "n5-yori-no-hou-ga", "n2-kaette"],
    explanation: `
**むしろ** corrects an expectation by saying the opposite, or something else, is more accurate: 今日は寒くない。むしろ暑いくらいだ, "it's not cold today. If anything, it's hot".

It often follows より: 都会よりむしろ田舎に住みたい, "I'd rather live in the countryside than the city". It says B is preferable, or truer, than the obvious choice A.

It's common after a negative statement, to flip it: 失敗は悪いことではない。むしろいい経験だ, "failure isn't bad. If anything, it's good experience".

Compare もっと ("more"), which only adds degree. むしろ switches to a different answer.
`,
    sentences: [
      s("今日は寒くない。{むしろ}暑いくらいだ。", "きょうはさむくない。{むしろ}あついくらいだ。", "It's not cold today. If anything, it's hot.", {
        near: [["もっと", "もっと is \"more\". For \"if anything, rather\", use むしろ."]],
      }),
      s("失敗は悪いことではない。{むしろ}いい経験だ。", "しっぱいはわるいことではない。{むしろ}いいけいけんだ。", "Failure isn't a bad thing. If anything, it's good experience.", {
        near: [["やっぱり", "やっぱり is \"as expected\". For \"if anything\", use むしろ."]],
      }),
      s("謝るより、{むしろ}お礼を言いたい。", "あやまるより、{むしろ}おれいをいいたい。", "Rather than apologise, I'd like to say thank you.", {
        near: [["もっと", "もっと is \"more\". For \"rather\", use むしろ."]],
      }),
      s("都会より{むしろ}田舎に住みたい。", "とかいより{むしろ}いなかにすみたい。", "I'd rather live in the countryside than the city.", {
        near: [["もっと", "もっと is \"more\". For \"rather\", use むしろ."]],
      }),
      s("彼は怒るどころか、{むしろ}喜んでいた。", "かれはおこるどころか、{むしろ}よろこんでいた。", "Far from being angry, he actually seemed pleased.", {
        near: [["もっと", "もっと is \"more\". For \"on the contrary\", use むしろ."]],
      }),
    ],
  }),
];
