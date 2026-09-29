import { point, s } from "../../build";

/** Adverbs that colour a whole sentence with the speaker's view of it. */

export const adverbs = [
  point({
    id: "n2-semete",
    title: "せめて",
    meaning: "at least, if nothing else",
    structure: "せめて + (Noun だけでも · minimum wish)",
    related: ["n3-kurai", "n2-ichiou"],
    explanation: `
**せめて** introduces a modest wish, the minimum the speaker hopes for when something better isn't possible: せめて一日だけでも休みたい, "I'd like at least one day off".

It's often followed by だけでも ("even just") and ends with a wish or request: たい, てほしい, てください, or the imperative: せめてあと五分寝かせて, "just give me five more minutes".

The first half often sets out what can't be had: 会えないなら、せめて電話してほしい, "if we can't meet, I'd like you to at least call".

Compare 少なくとも, "at least", which is more about numbers and facts. せめて is emotional: a small hope salvaged from a disappointing situation.
`,
    sentences: [
      s("{せめて}一日だけでも休みたい。", "{せめて}いちにちだけでもやすみたい。", "I'd like at least one day off.", {
        near: [["少なくとも", "That works for a factual \"at least\". For a modest wish, use せめて."]],
      }),
      s("会えないなら、{せめて}電話してほしい。", "あえないなら、{せめて}でんわしてほしい。", "If we can't meet, I'd like you to at least call.", {
        near: [["少なくとも", "That works for a factual \"at least\". For a modest wish, use せめて."]],
      }),
      s("{せめて}あと五分寝かせて。", "{せめて}あとごふんねかせて。", "Just give me five more minutes' sleep.", {
        near: [["もっと", "もっと is \"more\". For \"at least, just\", use せめて."]],
      }),
      s("優勝は無理でも、{せめて}三位には入りたい。", "ゆうしょうはむりでも、{せめて}さんいにははいりたい。", "Even if we can't win, I at least want to finish in the top three.", {
        near: [["少なくとも", "That works for a factual \"at least\". For a modest wish, use せめて."]],
      }),
      s("{せめて}名前だけでも教えてください。", "{せめて}なまえだけでもおしえてください。", "Please at least tell me your name.", {
        near: [["もっと", "もっと is \"more\". For \"at least\", use せめて."]],
      }),
    ],
  }),

  point({
    id: "n2-kaette",
    title: "かえって",
    meaning: "on the contrary, instead (it backfired)",
    structure: "かえって + result opposite to the intention",
    related: ["n3-mushiro"],
    explanation: `
**かえって** says an action had the opposite of the intended effect: 手伝ったつもりが、かえって迷惑をかけてしまった, "I meant to help, but I actually made things worse".

The first half is usually an attempt (helping, hurrying, taking medicine, explaining), and the second is a result that backfired: 具合が悪くなった, 時間がかかった, わからなくなった.

It also works for general truths about false economies: 安い物を買うと、かえって高くつく, "buying cheap things ends up costing you more".

Compare むしろ (N3), "rather, if anything", which compares two options. かえって is about expectations being reversed. It's written 却って in kanji, but usually appears in hiragana.
`,
    sentences: [
      s("手伝ったつもりが、{かえって}迷惑をかけてしまった。", "てつだったつもりが、{かえって}めいわくをかけてしまった。", "I meant to help, but I actually made things worse.", {
        near: [["むしろ", "That works too. かえって stresses the result backfiring."]],
      }),
      s("薬を飲んだら、{かえって}具合が悪くなった。", "くすりをのんだら、{かえって}ぐあいがわるくなった。", "I took some medicine, and it actually made me feel worse.", {
        near: [["やっぱり", "やっぱり is \"as expected\". For \"it backfired\", use かえって."]],
      }),
      s("急いだら、{かえって}時間がかかった。", "いそいだら、{かえって}じかんがかかった。", "I hurried, and it ended up taking longer.", {
        near: [["やっぱり", "やっぱり is \"as expected\". For \"it backfired\", use かえって."]],
      }),
      s("安い物を買うと、{かえって}高くつく。", "やすいものをかうと、{かえって}たかくつく。", "Buying cheap things ends up costing you more.", {
        near: [["もっと", "もっと is \"more\". For \"ends up (the opposite)\", use かえって."]],
      }),
      s("説明を聞いて、{かえって}わからなくなった。", "せつめいをきいて、{かえって}わからなくなった。", "Listening to the explanation only confused me more.", {
        near: [["やっぱり", "やっぱり is \"as expected\". For \"it backfired\", use かえって."]],
      }),
    ],
  }),

  point({
    id: "n2-douyara",
    title: "どうやら",
    meaning: "it seems, apparently",
    structure: "どうやら + (らしい · ようだ · みたいだ · そうだ)",
    related: ["n4-rashii", "n4-you-da"],
    explanation: `
**どうやら** signals that the speaker is drawing a conclusion from what they can see or have heard: どうやら雨が降りそうだ, "it looks like it's going to rain".

It almost always pairs with a word of conjecture at the end: らしい, ようだ, みたいだ or そうだ. どうやら on its own sets the tone before the sentence finishes.

It suggests the speaker has only just realised something, often with mild surprise or resignation: どうやら道に迷ったらしい, "it seems we've got lost".

It can also mean "just barely": どうやら間に合いそうだ, "it looks as if we'll just make it". Don't confuse it with どうせ, a resigned "anyway".
`,
    sentences: [
      s("{どうやら}雨が降りそうだ。", "{どうやら}あめがふりそうだ。", "It looks like it's going to rain.", {
        near: [["どうせ", "どうせ is a resigned \"anyway\". For \"it seems\", use どうやら."]],
      }),
      s("{どうやら}道に迷ったらしい。", "{どうやら}みちにまよったらしい。", "It seems we've got lost.", {
        near: [["どうせ", "どうせ is a resigned \"anyway\". For \"it seems\", use どうやら."]],
      }),
      s("{どうやら}彼は来ないようだ。", "{どうやら}かれはこないようだ。", "It looks as if he's not coming.", {
        near: [["きっと", "きっと is \"surely\". For \"it seems\", use どうやら."]],
      }),
      s("{どうやら}風邪をひいたみたいだ。", "{どうやら}かぜをひいたみたいだ。", "I seem to have caught a cold.", {
        near: [["きっと", "きっと is \"surely\". For \"it seems\", use どうやら."]],
      }),
      s("{どうやら}間に合いそうだ。", "{どうやら}まにあいそうだ。", "It looks as if we'll just make it.", {
        near: [["どうせ", "どうせ is a resigned \"anyway\". For \"it looks as if\", use どうやら."]],
      }),
    ],
  }),

  point({
    id: "n2-yohodo",
    title: "よほど・よっぽど",
    meaning: "very, (must have been) so; much (more)",
    structure: "よほど + adjective / state · よほどの + Noun",
    related: ["n3-ni-chigainai", "n2-amari"],
    explanation: `
**よほど** has three common uses.

**Must have been very**: a guess about how strongly someone felt, based on what they did: よほど疲れていたのだろう、彼はすぐに寝てしまった, "he must have been really tired, because he fell asleep straight away". It often pairs with のだろう or んだね.

**Much (more)**, in comparisons: 歩くより、タクシーのほうがよっぽど速い, "a taxi is much faster than walking".

**よほどの** + noun is "something serious": よほどのことがない限り、休まない, "I won't take time off unless something serious happens".

**よっぽど** is the more emphatic, spoken version. With たい or ほうがいい, it also means "I've half a mind to": よっぽど帰ろうかと思った, "I very nearly went home".
`,
    sentences: [
      s("{よほど}疲れていたのだろう、彼はすぐに寝てしまった。", "{よほど}つかれていたのだろう、かれはすぐにねてしまった。", "He must have been really tired, because he fell asleep straight away.", {
        accept: ["よっぽど"],
        near: [["かなり", "That's plain degree. For \"must have been so\", use よほど."]],
      }),
      s("{よほど}のことがない限り、休まない。", "{よほど}のことがないかぎり、やすまない。", "I won't take time off unless something serious happens.", {
        accept: ["よっぽど"],
        near: [["かなり", "The set phrase is よほどのことがない限り."]],
      }),
      s("{よほど}うれしかったのか、彼女は泣き出した。", "{よほど}うれしかったのか、かのじょはなきだした。", "She must have been really happy, because she burst into tears.", {
        accept: ["よっぽど"],
        near: [["かなり", "That's plain degree. For \"must have been so\", use よほど."]],
      }),
      s("歩くより、タクシーのほうが{よっぽど}速い。", "あるくより、タクシーのほうが{よっぽど}はやい。", "A taxi is much faster than walking.", {
        accept: ["よほど"],
        near: [["とても", "とても doesn't sit well in comparisons. For \"much (more)\", use よっぽど."]],
      }),
      s("{よほど}お腹が空いていたんだね。", "{よほど}おなかがすいていたんだね。", "You must have been really hungry.", {
        accept: ["よっぽど"],
        near: [["かなり", "That's plain degree. For \"must have been so\", use よほど."]],
      }),
    ],
  }),

  point({
    id: "n2-ikanimo",
    title: "いかにも",
    meaning: "truly, so typically, just as you'd imagine",
    structure: "いかにも + らしい · そう · Noun らしい",
    related: ["n3-rashii-typical", "n3-sasuga"],
    explanation: `
**いかにも** says something fits a type or impression perfectly: いかにも京都らしい町並みだ, "a townscape that's so typically Kyoto".

It usually pairs with らしい ("typical of") or そう ("looks like"): いかにも楽しそうに話した, "he talked with obvious enjoyment"; いかにも高そうな時計, "a watch that looks really expensive".

It can be neutral or slightly ironic, depending on context: いかにも彼が言いそうなことだ, "that's exactly the sort of thing he'd say".

Compare さすが, which is admiration for living up to a reputation, and まるで, "just like (though it isn't)". In older or formal speech, いかにも on its own means "indeed, quite so".
`,
    sentences: [
      s("{いかにも}京都らしい町並みだ。", "{いかにも}きょうとらしいまちなみだ。", "It's a townscape that's so typical of Kyoto.", {
        near: [["まるで", "まるで is \"just like (though it isn't)\". For \"so typical\", use いかにも."]],
      }),
      s("彼は{いかにも}楽しそうに話した。", "かれは{いかにも}たのしそうにはなした。", "He talked with obvious enjoyment.", {
        near: [["まるで", "まるで is \"just like (though it isn't)\". For \"obviously\", use いかにも."]],
      }),
      s("{いかにも}彼が言いそうなことだ。", "{いかにも}かれがいいそうなことだ。", "That's just the kind of thing he'd say.", {
        near: [["まさか", "まさか is disbelief. For \"just like him\", use いかにも."]],
      }),
      s("{いかにも}高そうな時計をしている。", "{いかにも}たかそうなとけいをしている。", "He's wearing a watch that looks really expensive.", {
        near: [["まるで", "まるで is \"just like (though it isn't)\". For \"obviously\", use いかにも."]],
      }),
      s("{いかにも}プロらしい仕事ぶりだ。", "{いかにも}プロらしいしごとぶりだ。", "That's exactly the kind of work you'd expect from a professional.", {
        near: [["さすが", "That works too. いかにも stresses how typical it looks."]],
      }),
    ],
  }),

  point({
    id: "n2-iwayuru",
    title: "いわゆる",
    meaning: "so-called, what you'd call",
    structure: "いわゆる + Noun",
    related: ["n4-to-iu-name", "n2-to-itta"],
    explanation: `
**いわゆる** introduces a term that people commonly use: 彼はいわゆる天才だ, "he's what you'd call a genius".

It's used to bring in popular labels, jargon or concepts, often ones that are a little vague or loaded: いわゆる「おもてなし」, "so-called hospitality"; いわゆるブラック企業, "what's known as an exploitative company".

Unlike English "so-called", it isn't necessarily sarcastic. It just flags the word as a common label, not the speaker's own invention.

It always comes directly before a noun. It's common in explanations, articles and essays. Compare つまり ("in other words"), which rephrases rather than labels.
`,
    sentences: [
      s("彼は{いわゆる}天才だ。", "かれは{いわゆる}てんさいだ。", "He's what you'd call a genius.", {
        near: [["つまり", "つまり is \"in other words\". For \"what you'd call\", use いわゆる."]],
      }),
      s("これが{いわゆる}日本の「おもてなし」だ。", "これが{いわゆる}にほんの「おもてなし」だ。", "This is what they call Japanese hospitality.", {
        near: [["つまり", "つまり is \"in other words\". For \"what they call\", use いわゆる."]],
      }),
      s("彼女は{いわゆる}帰国子女だ。", "かのじょは{いわゆる}きこくしじょだ。", "She's what's called a returnee: she grew up abroad.", {
        near: [["つまり", "つまり is \"in other words\". For \"what's called\", use いわゆる."]],
      }),
      s("{いわゆる}ブラック企業で働いていた。", "{いわゆる}ブラックきぎょうではたらいていた。", "I used to work for what's known as an exploitative company.", {
        near: [["いかにも", "いかにも is \"so typically\". For \"what's known as\", use いわゆる."]],
      }),
      s("{いわゆる}「オタク」の文化に興味がある。", "{いわゆる}「オタク」のぶんかにきょうみがある。", "I'm interested in so-called otaku culture.", {
        near: [["いかにも", "いかにも is \"so typically\". For \"so-called\", use いわゆる."]],
      }),
    ],
  }),

  point({
    id: "n2-ichiou",
    title: "一応",
    meaning: "just in case; more or less, for what it's worth",
    structure: "一応 + action / statement",
    related: ["n2-semete", "n4-te-oku"],
    explanation: `
**一応** is one of the most common hedging words in Japanese, with two main uses.

**Just in case**: doing something as a precaution, even if it may not be needed: 一応、傘を持っていこう, "I'll take an umbrella, just in case". It often pairs with ておく: 一応確認しておきます.

**More or less, for what it's worth**: a modest or reserved statement, admitting it's not perfect: 一応、完成しました, "it's more or less finished"; 料理は一応できます, "I can cook, after a fashion".

It softens what you say and avoids sounding boastful or overconfident, which is why Japanese speakers use it so often.
`,
    sentences: [
      s("{一応}、傘を持っていこう。", "{いちおう}、かさをもっていこう。", "I'll take an umbrella, just in case.", {
        near: [["せめて", "せめて is \"at least\". For \"just in case\", use 一応."]],
      }),
      s("{一応}、完成しました。", "{いちおう}、かんせいしました。", "It's more or less finished.", {
        near: [["やっと", "やっと is \"finally\". For \"more or less\", use 一応."]],
      }),
      s("{一応}大学は卒業しました。", "{いちおう}だいがくはそつぎょうしました。", "I did graduate from university, for what it's worth.", {
        near: [["やっと", "やっと is \"finally\". For \"for what it's worth\", use 一応."]],
      }),
      s("{一応}、確認しておきます。", "{いちおう}、かくにんしておきます。", "I'll check, just to be sure.", {
        near: [["せめて", "せめて is \"at least\". For \"just to be sure\", use 一応."]],
      }),
      s("料理は{一応}できます。", "りょうりは{いちおう}できます。", "I can cook, after a fashion.", {
        near: [["なかなか", "なかなか is \"pretty well\". For \"after a fashion\", use 一応."]],
      }),
    ],
  }),

  point({
    id: "n2-youyaku",
    title: "ようやく",
    meaning: "at last, finally (after a long time)",
    structure: "ようやく + result",
    related: ["n2-sue-ni"],
    explanation: `
**ようやく** means something finally happened after a long wait or a lot of effort: 三時間待って、ようやく順番が来た, "after waiting three hours, my turn finally came".

It's close to やっと. ようやく is a little more formal and written, and it's a touch calmer: やっと often carries relief or exasperation, while ようやく simply notes that the long process is over.

It works for gradual changes too: ようやく仕事に慣れてきた, "I'm finally getting used to the job".

Compare いよいよ, "at last (something is about to begin)", which looks forward to an imminent event rather than back at a long wait.
`,
    sentences: [
      s("三時間待って、{ようやく}順番が来た。", "さんじかんまって、{ようやく}じゅんばんがきた。", "After waiting three hours, my turn finally came.", {
        accept: ["やっと"],
        near: [["もう", "もう is \"already\". For \"at last\", use ようやく."]],
      }),
      s("長い冬が終わり、{ようやく}春になった。", "ながいふゆがおわり、{ようやく}はるになった。", "The long winter is over, and spring has come at last.", {
        accept: ["やっと"],
        near: [["もう", "もう is \"already\". For \"at last\", use ようやく."]],
      }),
      s("{ようやく}仕事に慣れてきた。", "{ようやく}しごとになれてきた。", "I'm finally getting used to the job.", {
        accept: ["やっと"],
        near: [["いよいよ", "いよいよ is \"at last (about to begin)\". For \"finally, after a long time\", use ようやく."]],
      }),
      s("何度も失敗して、{ようやく}成功した。", "なんどもしっぱいして、{ようやく}せいこうした。", "After failing again and again, I finally succeeded.", {
        accept: ["やっと"],
        near: [["もう", "もう is \"already\". For \"at last\", use ようやく."]],
      }),
      s("事件は{ようやく}解決した。", "じけんは{ようやく}かいけつした。", "The case was finally solved.", {
        accept: ["やっと"],
        near: [["いよいよ", "いよいよ is \"at last (about to begin)\". For \"finally, after a long time\", use ようやく."]],
      }),
    ],
  }),

  point({
    id: "n2-wazawaza",
    title: "わざわざ",
    meaning: "going out of one's way, specially",
    structure: "わざわざ + action",
    related: ["n3-sekkaku"],
    explanation: `
**わざわざ** means doing something that takes extra effort, when it wasn't strictly necessary: わざわざ駅まで迎えに来てくれた, "they went out of their way to meet me at the station".

It's common in thanks: 遠いところを、わざわざありがとうございます, "thank you for coming all this way". It acknowledges the trouble someone went to.

It can also question whether the effort is worth it: わざわざ行かなくても、電話で済む, "there's no need to go specially; a phone call will do".

Don't confuse it with わざと, "on purpose", which is often mischievous. Compare せっかく, which is about not wanting to waste an effort already made.
`,
    sentences: [
      s("遠いところを、{わざわざ}ありがとうございます。", "とおいところを、{わざわざ}ありがとうございます。", "Thank you for coming all this way.", {
        near: [["せっかく", "せっかく is about not wasting an effort. For \"going out of your way\", use わざわざ."]],
      }),
      s("{わざわざ}駅まで迎えに来てくれた。", "{わざわざ}えきまでむかえにきてくれた。", "They went out of their way to meet me at the station.", {
        near: [["せっかく", "せっかく is about not wasting an effort. For \"going out of your way\", use わざわざ."]],
      }),
      s("{わざわざ}行かなくても、電話で済む。", "{わざわざ}いかなくても、でんわですむ。", "There's no need to go specially; a phone call will do.", {
        near: [["わざと", "わざと is \"on purpose\". For \"specially, going to the trouble\", use わざわざ."]],
      }),
      s("{わざわざ}買ったのに、使わなかった。", "{わざわざ}かったのに、つかわなかった。", "I went out and bought it specially, and then didn't use it.", {
        near: [["わざと", "わざと is \"on purpose\". For \"specially\", use わざわざ."]],
      }),
      s("{わざわざ}私のために作ってくれたの?", "{わざわざ}わたしのためにつくってくれたの?", "You made this specially for me?", {
        near: [["わざと", "わざと is \"on purpose\". For \"specially\", use わざわざ."]],
      }),
    ],
  }),
];
