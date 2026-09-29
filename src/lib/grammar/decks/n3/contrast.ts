import { point, s, word } from "../../build";

/** Suppositions, concessions and contrasts: what if, even if, considering, and on the other hand. */

export const contrast = [
  point({
    id: "n3-ni-shite-wa",
    title: "〜にしては",
    meaning: "for (a), considering",
    structure: "Noun / Plain form + にしては",
    related: ["n3-wari-ni", "n3-ni-shitemo"],
    explanation: `
**にしては** says something is surprising given what you'd expect from a standard: 初めてにしては、上手ですね, "you're good, considering it's your first time".

The first part sets up an expectation (a first attempt, a ten-year-old, winter), and the second part goes against it, in either direction: better or worse than expected.

It follows a noun directly, or a plain verb form: 一生懸命勉強したにしては、点が悪かった, "for someone who studied so hard, the score was bad".

It's close to わりに, which works the same way but is more about proportion. Compare として ("as"), which gives a role, not an expectation.
`,
    sentences: [
      s("初めて{にしては}、上手ですね。", "はじめて{にしては}、じょうずですね。", "You're good, considering it's your first time.", {
        near: [["として", "として is \"as\". For \"considering\", use にしては."]],
      }),
      s("この店は駅前{にしては}静かだ。", "このみせはえきまえ{にしては}しずかだ。", "This place is quiet, considering it's right by the station.", {
        near: [["なのに", "なのに complains. For \"considering\", use にしては."]],
      }),
      s("十歳{にしては}、しっかりしている。", "じゅっさい{にしては}、しっかりしている。", "They're very mature for a ten-year-old.", {
        near: [["として", "として is \"as\". For \"for a ten-year-old\", use にしては."]],
      }),
      s("一生懸命勉強した{にしては}、点が悪かった。", "いっしょうけんめいべんきょうした{にしては}、てんがわるかった。", "For someone who studied so hard, the score was bad.", {
        near: [["のに", "That works too. にしては compares with what you'd expect."]],
      }),
      s("冬{にしては}暖かい日だ。", "ふゆ{にしては}あたたかいひだ。", "It's a warm day for winter.", {
        near: [["なのに", "That works, but for \"for winter\", use にしては."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-shitemo",
    title: "〜にしても",
    meaning: "even if, even allowing for; whether … or",
    structure: "Noun / Plain form + にしても · Aにしても Bにしても",
    related: ["n3-to-shitemo", "n4-temo", "n3-ni-shite-wa"],
    explanation: `
**にしても** grants a point, then says it doesn't change the conclusion: 冗談にしても、言いすぎだ, "even as a joke, that's going too far". 忙しいにしても、電話ぐらいはできるでしょう, "even if you're busy, you can at least call".

Doubled, it means "whether … or": 参加するにしても、しないにしても、返事をください, "whether you're coming or not, please reply".

The set phrase **それにしても** means "even so" or "all the same", and often introduces a sudden comment: それにしても、暑いですね, "still, it's awfully hot, isn't it?"

In formal writing, にしろ and にせよ mean the same. Compare にしては, "considering", which it looks very like but doesn't mean.
`,
    sentences: [
      s("冗談{にしても}、言いすぎだ。", "じょうだん{にしても}、いいすぎだ。", "Even as a joke, that's going too far.", {
        accept: ["にしろ", "にせよ"],
        near: [["にしては", "にしては is \"considering\". For \"even if it's\", use にしても."]],
      }),
      s("忙しい{にしても}、電話ぐらいはできるでしょう。", "いそがしい{にしても}、でんわぐらいはできるでしょう。", "Even if you're busy, you can at least call.", {
        accept: ["としても", "にしろ", "にせよ"],
        near: [["から", "That's a reason. For \"even if\", use にしても."]],
      }),
      s("参加するにしても、しない{にしても}、返事をください。", "さんかするにしても、しない{にしても}、へんじをください。", "Whether you're coming or not, please reply.", {
        accept: ["にしろ", "にせよ"],
        near: [["としても", "The pair is にしても … にしても."]],
      }),
      s("遅れる{にしても}、連絡してほしかった。", "おくれる{にしても}、れんらくしてほしかった。", "Even if you were going to be late, I wish you'd let me know.", {
        accept: ["としても"],
        near: [["ので", "That's a reason. For \"even if\", use にしても."]],
      }),
      s("それ{にしても}、暑いですね。", "それ{にしても}、あついですね。", "Still, it's awfully hot, isn't it?", {
        near: [["でも", "でも is \"but\". The set phrase for \"all the same\" is それにしても."]],
      }),
    ],
  }),

  point({
    id: "n3-to-shitemo",
    title: "〜としても",
    meaning: "even if, even supposing",
    structure: "Plain form + としても",
    related: ["n3-to-shitara", "n3-ni-shitemo", "n3-tatoe"],
    explanation: `
**としても** means "even supposing": 今から出発したとしても、間に合わないだろう, "even if we left now, we probably wouldn't make it".

It's a hypothetical: the speaker imagines a situation, which may or may not be real, and says the result wouldn't change. It follows a plain form, often a past: 宝くじが当たったとしても、仕事は続けます, "even if I won the lottery, I'd keep working".

It pairs naturally with たとえ, "even if": たとえ反対されたとしても.

Compare ても (N4), which is more everyday, and としたら, the positive version: "supposing …, then". としても says "supposing …, it still wouldn't matter".
`,
    sentences: [
      s("今から出発した{としても}、間に合わないだろう。", "いまからしゅっぱつした{としても}、まにあわないだろう。", "Even if we left now, we probably wouldn't make it.", {
        accept: ["にしても"],
        near: [["としたら", "としたら is \"supposing … then\". For \"even supposing\", use としても."]],
      }),
      s("宝くじが当たった{としても}、仕事は続けます。", "たからくじがあたった{としても}、しごとはつづけます。", "Even if I won the lottery, I'd keep working.", {
        near: [["としたら", "としたら is \"supposing … then\". For \"even supposing\", use としても."]],
      }),
      s("たとえ反対された{としても}、留学したい。", "たとえはんたいされた{としても}、りゅうがくしたい。", "Even if people are against it, I want to study abroad.", {
        near: [["ても", "ても needs the て-form (反対されても). After a plain past, use としても."]],
      }),
      s("本当だ{としても}、信じられない。", "ほんとうだ{としても}、しんじられない。", "Even if it's true, I can't believe it.", {
        near: [["としたら", "としたら is \"supposing … then\". For \"even supposing\", use としても."]],
      }),
      s("失敗する{としても}、やってみたい。", "しっぱいする{としても}、やってみたい。", "Even if I fail, I want to give it a try.", {
        near: [["とすれば", "とすれば is \"if so, then\". For \"even if\", use としても."]],
      }),
    ],
  }),

  point({
    id: "n3-to-shitara",
    title: "〜としたら・〜とすれば",
    meaning: "supposing, if (hypothetically)",
    structure: "Plain form + としたら / とすれば / とすると",
    related: ["n3-to-shitemo", "n4-tara", "n4-ba"],
    explanation: `
**としたら** sets up a hypothetical and asks or says what follows: もし一億円あったとしたら、何をしますか, "if you had a hundred million yen, what would you do?"

It's more clearly imaginary than たら or ば: the speaker is supposing, often something unlikely or not yet known. もし often comes first.

**とすれば** and **とすると** mean much the same. They're common for reasoning from something you've heard: 彼の話が本当だとすれば、大変なことだ, "if what he says is true, it's a serious matter". とすると also works for working out a consequence: 今から行くとすると、着くのは夜になる.

The negative version is としても, "even supposing".
`,
    sentences: [
      s("もし一億円あった{としたら}、何をしますか。", "もしいちおくえんあった{としたら}、なにをしますか。", "If you had a hundred million yen, what would you do?", {
        accept: ["とすれば", "とすると"],
        near: [["としても", "としても is \"even if\". For \"supposing\", use としたら."]],
      }),
      s("生まれ変わる{としたら}、鳥になりたい。", "うまれかわる{としたら}、とりになりたい。", "If I were reborn, I'd want to be a bird.", {
        accept: ["とすれば", "とすると"],
        near: [["としても", "としても is \"even if\". For \"supposing\", use としたら."]],
      }),
      s("彼の話が本当だ{とすれば}、大変なことだ。", "かれのはなしがほんとうだ{とすれば}、たいへんなことだ。", "If what he says is true, it's a serious matter.", {
        accept: ["としたら", "とすると"],
        near: [["としても", "としても is \"even if\". For \"if that's so\", use とすれば."]],
      }),
      s("留学する{としたら}、どこの国がいいですか。", "りゅうがくする{としたら}、どこのくにがいいですか。", "If you were to study abroad, which country would be good?", {
        accept: ["とすれば", "とすると"],
        near: [["として", "として is \"as\". For \"supposing\", use としたら."]],
      }),
      s("今から行く{とすると}、着くのは夜になる。", "いまからいく{とすると}、つくのはよるになる。", "If we go now, we'll get there at night.", {
        accept: ["としたら", "とすれば"],
        near: [["としても", "としても is \"even if\". For \"if we do that\", use とすると."]],
      }),
    ],
  }),

  point({
    id: "n3-wari-ni",
    title: "〜わりに",
    meaning: "for, considering (more or less than expected)",
    structure: "Plain form / Noun + の + わりに (な-adj + な)",
    related: ["n3-ni-shite-wa", "n3-kawari-ni"],
    explanation: `
**わりに** says something doesn't match what you'd expect from a standard: この店は値段のわりにおいしい, "this place is good for the price". 割 means "proportion", so it's "out of proportion to".

It follows a noun with の, a plain verb or adjective, or a な-adjective with な: 大変なわりに給料が安い, "the pay is low for such hard work".

It's very close to にしては. わりに is a little more colloquial, and is common with nouns of degree like 年 (age), 値段 (price), 大きさ (size).

On its own, わりと or わりに means "relatively, fairly": わりと簡単だった, "it was fairly easy". Don't confuse it with 代わりに, "instead".
`,
    sentences: [
      s("この店は値段の{わりに}おいしい。", "このみせはねだんの{わりに}おいしい。", "This place is good for the price.", {
        accept: ["割に"],
        near: [["代わりに", "代わりに is \"instead\". For \"considering\", use わりに."]],
      }),
      s("彼は年の{わりに}若く見える。", "かれはとしの{わりに}わかくみえる。", "He looks young for his age.", {
        accept: ["割に"],
        near: [["にしては", "年にしては is possible, but after a noun with の, the usual phrase is 年のわりに."]],
      }),
      s("たくさん勉強した{わりに}、成績が上がらなかった。", "たくさんべんきょうした{わりに}、せいせきがあがらなかった。", "For all the studying I did, my grades didn't improve.", {
        accept: ["割に"],
        near: [["代わりに", "代わりに is \"instead\". For \"considering\", use わりに."]],
      }),
      s("この仕事は大変な{わりに}、給料が安い。", "このしごとはたいへんな{わりに}、きゅうりょうがやすい。", "The pay is low for how hard this job is.", {
        accept: ["割に"],
        near: [["くせに", "くせに criticises a person. For \"considering\", use わりに."]],
      }),
      s("今日は寒い{わりに}、人が多い。", "きょうはさむい{わりに}、ひとがおおい。", "There are a lot of people out, considering how cold it is.", {
        accept: ["割に"],
        near: [["代わりに", "代わりに is \"instead\". For \"considering\", use わりに."]],
      }),
    ],
  }),

  point({
    id: "n3-kawari-ni",
    title: "〜代わりに",
    meaning: "instead of; in place of; in exchange for",
    structure: "Verb plain form / Noun + の + 代わりに",
    related: ["n3-ni-kawatte", "n3-wari-ni"],
    explanation: `
**代わりに** has three related uses.

**Instead of**: 映画に行く代わりに、家で本を読んだ, "instead of going to the cinema, I read at home".

**In place of** a person: 母の代わりに私が行きます, "I'll go in my mother's place". This is the everyday version of に代わって.

**In exchange for, to make up for**: 英語を教える代わりに、日本語を教えてもらった, "in exchange for teaching English, I was taught Japanese"; 狭い代わりに家賃が安い, "it's small, but to make up for it the rent is cheap".

On its own at the start of a clause, 代わりに means "instead": ペンがなかったので、代わりに鉛筆で書いた.
`,
    sentences: [
      s("映画に行く{代わりに}、家で本を読んだ。", "えいがにいく{かわりに}、いえでほんをよんだ。", "Instead of going to the cinema, I read a book at home.", {
        near: [["わりに", "わりに is \"considering\". For \"instead of\", use 代わりに."]],
      }),
      s("母の{代わりに}、私が行きます。", "ははの{かわりに}、わたしがいきます。", "I'll go in my mother's place.", {
        near: [["ために", "That's \"for her sake\". For \"in her place\", use 代わりに."]],
      }),
      s("英語を教える{代わりに}、日本語を教えてもらった。", "えいごをおしえる{かわりに}、にほんごをおしえてもらった。", "In exchange for teaching English, I was taught Japanese.", {
        near: [["わりに", "わりに is \"considering\". For \"in exchange for\", use 代わりに."]],
      }),
      s("ペンがなかったので、{代わりに}鉛筆で書いた。", "ペンがなかったので、{かわりに}えんぴつでかいた。", "I didn't have a pen, so I wrote in pencil instead.", {
        near: [["わりに", "わりに is \"relatively\". For \"instead\", use 代わりに."]],
      }),
      s("この部屋は狭い{代わりに}、家賃が安い。", "このへやはせまい{かわりに}、やちんがやすい。", "This room is small, but to make up for it, the rent is cheap.", {
        near: [["わりに", "わりに is \"considering\". For a trade-off, use 代わりに."]],
      }),
    ],
  }),

  point({
    id: "n3-kuse-ni",
    title: "〜くせに",
    meaning: "even though (and I don't like it)",
    structure: "Plain form + くせに (な-adj + な · Noun + の)",
    register: "Critical, and rude if aimed at someone directly.",
    related: ["n4-noni", "n3-wari-ni"],
    explanation: `
**くせに** is like のに, but with open criticism of the person: 知っているくせに、教えてくれない, "they know perfectly well, yet they won't tell me".

It's aimed at people, and it says their behaviour doesn't fit what they are or know: 子どものくせに, "for a mere kid"; お金がないくせに, "when they have no money". The subject of both halves must be the same person.

Because it's so judgemental, it's mostly used when complaining about someone, or in arguments. On its own at the end of a sentence, it's a sulky retort: 知ってるくせに!, "you know perfectly well!"

For a neutral "considering", use わりに; for mild disappointment, のに.
`,
    sentences: [
      s("知っている{くせに}、教えてくれない。", "しっている{くせに}、おしえてくれない。", "They know perfectly well, yet they won't tell me.", {
        near: [["のに", "That works, but くせに adds real annoyance."]],
      }),
      s("子どもの{くせに}、生意気だ。", "こどもの{くせに}、なまいきだ。", "You're awfully cheeky for a kid.", {
        near: [["なのに", "After a noun and の, it's のくせに. It adds real annoyance."]],
      }),
      s("自分ではやらない{くせに}、文句ばかり言う。", "じぶんではやらない{くせに}、もんくばかりいう。", "He never does it himself, yet all he does is complain.", {
        near: [["のに", "That works, but くせに adds real annoyance."]],
      }),
      s("下手な{くせに}、歌いたがる。", "へたな{くせに}、うたいたがる。", "They're bad at it, yet they always want to sing.", {
        near: [["のに", "That works, but くせに adds real annoyance."]],
      }),
      s("お金がない{くせに}、高い物ばかり買う。", "おかねがない{くせに}、たかいものばかりかう。", "He has no money, yet he keeps buying expensive things.", {
        near: [["わりに", "わりに is \"considering\", without the blame. For a criticism, use くせに."]],
      }),
    ],
  }),

  point({
    id: "n3-hanmen",
    title: "〜反面",
    meaning: "on the other hand (two sides of one thing)",
    structure: "Plain form + 反面 (な-adj + な / である · Noun + である)",
    related: ["n3-ippou-de", "n4-noni"],
    explanation: `
**反面** presents two opposite sides of the same thing: この仕事は楽しい反面、大変なことも多い, "this job is fun, but it also has a lot of hard parts". 反面 is literally "the other face".

The subject is the same in both halves, and the two qualities pull in opposite directions: convenient but stressful, strict but kind, free but lonely.

It's common in writing, essays and balanced opinions. な-adjectives take な: 便利な反面.

Compare 一方で, which can compare two different things (city vs. countryside), and のに, which complains. 反面 is neutral: it just weighs up pros and cons.
`,
    sentences: [
      s("この仕事は楽しい{反面}、大変なことも多い。", "このしごとはたのしい{はんめん}、たいへんなこともおおい。", "This job is fun, but it also has a lot of hard parts.", {
        near: [["一方で", "That works too. This point practises 反面."]],
      }),
      s("都会の生活は便利な{反面}、ストレスも多い。", "とかいのせいかつはべんりな{はんめん}、ストレスもおおい。", "City life is convenient, but it's also stressful.", {
        near: [["のに", "のに is a complaint. For two sides of one thing, use 反面."]],
      }),
      s("彼は厳しい{反面}、優しいところもある。", "かれはきびしい{はんめん}、やさしいところもある。", "He's strict, but he also has a kind side.", {
        near: [["のに", "のに is a complaint. For two sides of one person, use 反面."]],
      }),
      s("インターネットは便利な{反面}、危険もある。", "インターネットはべんりな{はんめん}、きけんもある。", "The internet is convenient, but it also has its dangers.", {
        near: [["くせに", "くせに criticises a person. For two sides of one thing, use 反面."]],
      }),
      s("一人暮らしは自由な{反面}、寂しいこともある。", "ひとりぐらしはじゆうな{はんめん}、さびしいこともある。", "Living alone gives you freedom, but it can also be lonely.", {
        near: [["一方で", "That works too. This point practises 反面."]],
      }),
    ],
  }),

  point({
    id: "n3-ippou-de",
    title: "〜一方(で)",
    meaning: "while, on the other hand; at the same time",
    structure: "Plain form + 一方(で) · Sentence。一方、Sentence。",
    related: ["n3-hanmen", "n3-ippou-da", "n3-ni-taishite"],
    explanation: `
**一方で** contrasts two facts, often about two different things: 都会では人口が増えている一方で、田舎では減っている, "while the population is growing in cities, it's shrinking in the countryside".

At the start of a sentence, **一方** (with or without で) means "on the other hand": 兄はスポーツが得意だ。一方、弟は勉強が得意だ.

It can also describe two activities one person keeps up side by side: 彼は仕事をする一方で、大学にも通っている, "he works, and at the same time attends university".

It's common in news and essays. Don't confuse it with 一方だ at the end of a sentence, which means "keeps going one way".
`,
    sentences: [
      s("兄はスポーツが得意だ。{一方}、弟は勉強が得意だ。", "あにはスポーツがとくいだ。{いっぽう}、おとうとはべんきょうがとくいだ。", "My older brother is good at sports. My younger brother, on the other hand, is good at studying.", {
        accept: ["一方で"],
        near: [["反面", "反面 is two sides of one thing. For comparing two different things, use 一方."]],
      }),
      s("都会では人口が増えている{一方で}、田舎では減っている。", "とかいではじんこうがふえている{いっぽうで}、いなかではへっている。", "While the population is growing in cities, it's shrinking in the countryside.", {
        accept: ["一方"],
        near: [["一方だ", "一方だ is \"keeps doing\". For \"while, on the other hand\", use 一方で."]],
      }),
      s("彼は仕事をする{一方で}、大学にも通っている。", "かれはしごとをする{いっぽうで}、だいがくにもかよっている。", "He works, and at the same time attends university.", {
        accept: ["一方"],
        near: [["ながら", "ながら is for two actions at the same moment. For two roles side by side, use 一方で."]],
      }),
      s("賛成する人がいる{一方で}、反対する人もいる。", "さんせいするひとがいる{いっぽうで}、はんたいするひともいる。", "While some people are in favour, others are against.", {
        accept: ["一方"],
        near: [["反面", "反面 is two sides of one thing. For two different groups, use 一方で."]],
      }),
      s("物価は上がる{一方で}、給料は上がらない。", "ぶっかはあがる{いっぽうで}、きゅうりょうはあがらない。", "Prices go up, while wages don't.", {
        accept: ["一方"],
        near: [["一方だ", "一方だ is \"keeps doing\". For \"while, on the other hand\", use 一方で."]],
      }),
    ],
  }),

  point({
    id: "n3-nagara-mo",
    title: "〜ながら(も) (although)",
    meaning: "although, even though",
    structure: "Verb ます-stem / い-adj / Noun + ながら(も)",
    related: ["n5-nagara", "n4-noni", "n2-tsutsu"],
    explanation: `
At N5, ながら meant doing two things at once. With states, it means **"although"**: 狭いながらも、快適な部屋だ, "it's small, but it's a comfortable room". The も is optional and adds emphasis.

It attaches to a ます-stem (知っていながら), an い-adjective (狭いながら), a noun (子どもながら) or a な-adjective stem (残念ながら).

The feeling is "despite that": 知っていながら、何も言わなかった, "even though I knew, I said nothing". It often admits something awkward.

Set phrases: 残念ながら, "unfortunately"; 勝手ながら, "we apologise, but" (on shop notices); 陰ながら, "from the sidelines". Context tells you which ながら you're reading: an action verb means "while", a state means "although".
`,
    sentences: [
      s("狭い{ながらも}、快適な部屋だ。", "せまい{ながらも}、かいてきなへやだ。", "It's small, but it's a comfortable room.", {
        accept: ["ながら"],
        near: [["のに", "のに complains. For \"although\" in a positive light, use ながらも."]],
      }),
      s("知ってい{ながら}、何も言わなかった。", "しってい{ながら}、なにもいわなかった。", "Even though I knew, I didn't say anything.", {
        accept: ["ながらも"],
        near: [["ても", "That's \"even if\". For \"even though (I knew)\", use ながら."]],
      }),
      s("残念{ながら}、今回は参加できません。", "ざんねん{ながら}、こんかいはさんかできません。", "Unfortunately, I can't take part this time.", {
        near: [["なのに", "The set phrase is 残念ながら, \"unfortunately\"."]],
      }),
      s("子ども{ながら}、よく頑張った。", "こども{ながら}、よくがんばった。", "Although just a child, they did very well.", {
        accept: ["ながらも"],
        near: [["なのに", "なのに complains. For \"although (and well done)\", use ながら."]],
      }),
      s("体に悪いと分かってい{ながら}、たばこをやめられない。", "からだにわるいとわかってい{ながら}、たばこをやめられない。", "Even though I know it's bad for me, I can't quit smoking.", {
        accept: ["ながらも"],
        near: [["ても", "That's \"even if\". For \"even though I know\", use ながら."]],
      }),
    ],
  }),

  point({
    id: "n3-tatte",
    title: "〜たって・〜だって",
    meaning: "even if (casual)",
    structure: "Verb た-form + って · い-adj かったって / くたって · Noun, な-adj + だって",
    register: "Casual: the spoken form of ても and でも.",
    related: ["n4-temo", "n3-ikura-temo"],
    explanation: `
**たって** is a casual version of ても, "even if": 今から走ったって、間に合わないよ, "even if you run now, you won't make it".

Build it from the た-form plus って: 走った → 走ったって, 言った → 言ったって. い-adjectives use the く-form: 高くたって, "even if it's expensive". Nouns and な-adjectives use **だって**: 雨だって行くよ, "even if it rains, I'm going".

It's common with いくら and どんなに: いくら言ったって、彼は聞かない, "no matter what you say, he won't listen".

Keep it for conversation. In writing, use ても. And don't confuse this だって with the sentence-starting だって, "but" or "because".
`,
    sentences: [
      s("今から{走ったって}、間に合わないよ。", "いまから{はしったって}、まにあわないよ。", "Even if you run now, you won't make it.", {
        hint: "走る, casual",
        conj: { word: word("走る", "はしる", "godan"), form: "past", tail: "って" },
        near: [["走っても", "That's the standard form. Casually, ても becomes たって: 走ったって."]],
      }),
      s("いくら{言ったって}、彼は聞かない。", "いくら{いったって}、かれはきかない。", "No matter what you say, he won't listen.", {
        hint: "言う, casual",
        conj: { word: word("言う", "いう", "godan"), form: "past", tail: "って" },
        near: [["言っても", "That's the standard form. Casually, it's 言ったって."]],
      }),
      s("{高くたって}、買いたい。", "{たかくたって}、かいたい。", "Even if it's expensive, I want to buy it.", {
        hint: "高い, casual",
        near: [["高くても", "That's the standard form. Casually, it's 高くたって."]],
      }),
      s("雨{だって}、行くよ。", "あめ{だって}、いくよ。", "Even if it rains, I'm going.", {
        near: [["でも", "That's the standard form. Casually, it's だって."]],
      }),
      s("今{謝ったって}、もう遅い。", "いま{あやまったって}、もうおそい。", "Even if you apologise now, it's too late.", {
        hint: "謝る, casual",
        conj: { word: word("謝る", "あやまる", "godan"), form: "past", tail: "って" },
        near: [["謝っても", "That's the standard form. Casually, it's 謝ったって."]],
      }),
    ],
  }),

  point({
    id: "n3-tatoe",
    title: "たとえ〜ても",
    meaning: "even if",
    structure: "たとえ + て-form + も · たとえ + Noun + でも",
    related: ["n4-temo", "n3-to-shitemo", "n3-ikura-temo"],
    explanation: `
**たとえ** at the start of a clause signals that a ても ("even if") is coming: たとえ雨が降っても、試合は行われる, "even if it rains, the match will go ahead".

It adds emphasis and a sense of determination: whatever happens, the result won't change. たとえ失敗しても、後悔しない, "even if I fail, I won't regret it".

After a noun, the pair is たとえ〜でも: たとえ冗談でも, "even as a joke". It also pairs with としても: たとえ反対されたとしても.

It's the ても version of もし: もし goes with たら and ば ("if"), and たとえ goes with ても ("even if"). Mixing them (たとえ〜たら) is a common slip.
`,
    sentences: [
      s("{たとえ}雨が降っても、試合は行われる。", "{たとえ}あめがふっても、しあいはおこなわれる。", "Even if it rains, the match will go ahead.", {
        near: [["もし", "もし is for \"if\". With ても, \"even if\", the word is たとえ."]],
      }),
      s("たとえ反対{されても}、私は行く。", "たとえはんたい{されても}、わたしはいく。", "Even if people are against it, I'm going.", {
        near: [["されたら", "たとえ pairs with ても: されても."]],
      }),
      s("たとえ失敗{しても}、後悔しない。", "たとえしっぱい{しても}、こうかいしない。", "Even if I fail, I won't regret it.", {
        near: [["したら", "たとえ pairs with ても: しても."]],
      }),
      s("たとえ冗談{でも}、そんなことは言わないで。", "たとえじょうだん{でも}、そんなことはいわないで。", "Even as a joke, please don't say things like that.", {
        near: [["なら", "たとえ pairs with でも after a noun."]],
      }),
      s("たとえ時間が{かかっても}、最後までやります。", "たとえじかんが{かかっても}、さいごまでやります。", "Even if it takes time, I'll see it through.", {
        hint: "かかる",
        conj: { word: word("かかる", "かかる", "godan"), form: "te", tail: "も" },
        near: [["かかったら", "たとえ pairs with ても: かかっても."]],
      }),
    ],
  }),

  point({
    id: "n3-ikura-temo",
    title: "いくら〜ても",
    meaning: "no matter how (much)",
    structure: "いくら / どんなに + て-form + も",
    related: ["n3-tatoe", "n4-temo", "n3-tatte"],
    explanation: `
**いくら〜ても** means "no matter how much": いくら食べても太らない, "no matter how much I eat, I don't put on weight".

At N5, いくら was "how much" (price). Here, with ても, it stresses that however much effort or quantity you add, the result doesn't change: いくら呼んでも、返事がない, "no matter how many times I call, there's no answer".

**どんなに** means the same and is a little more emotional: どんなに高くても、この服が欲しい.

With い-adjectives, it's いくら高くても. With nouns and な-adjectives, it's でも: いくら好きでも. In casual speech, ても often becomes たって: いくら言ったって.
`,
    sentences: [
      s("{いくら}食べても太らない。", "{いくら}たべてもふとらない。", "No matter how much I eat, I don't put on weight.", {
        accept: ["どんなに"],
        near: [["たとえ", "たとえ is \"even if\". For \"no matter how much\", use いくら."]],
      }),
      s("いくら{呼んでも}、返事がない。", "いくら{よんでも}、へんじがない。", "No matter how many times I call, there's no answer.", {
        hint: "呼ぶ",
        conj: { word: word("呼ぶ", "よぶ", "godan"), form: "te", tail: "も" },
        near: [["呼んだら", "いくら pairs with ても: 呼んでも."]],
      }),
      s("いくら{考えても}、答えがわからない。", "いくら{かんがえても}、こたえがわからない。", "No matter how hard I think, I can't work out the answer.", {
        hint: "考える",
        conj: { word: word("考える", "かんがえる", "ichidan"), form: "te", tail: "も" },
        near: [["考えれば", "いくら pairs with ても: 考えても."]],
      }),
      s("{いくら}高くても、この服が欲しい。", "{いくら}たかくても、このふくがほしい。", "No matter how expensive they are, I want these clothes.", {
        accept: ["どんなに"],
        near: [["とても", "とても is \"very\". For \"no matter how\", use いくら."]],
      }),
      s("いくら練習し{ても}、上手にならない。", "いくられんしゅうし{ても}、じょうずにならない。", "No matter how much I practise, I don't get any better.", {
        near: [["たら", "いくら pairs with ても."]],
      }),
    ],
  }),

  point({
    id: "n3-kagiri",
    title: "〜限り",
    meaning: "as long as; as far as; unless (ない限り)",
    structure: "Plain form + 限り · ない-form + 限り",
    related: ["n4-uchi-ni", "n3-baai"],
    explanation: `
**限り** means "limit", and after a plain form it sets the boundary of a condition.

**As long as**: 生きている限り、あなたのことは忘れない, "as long as I live, I won't forget you". The second part holds true while the first does.

**As far as**: 私が知っている限り、彼はまじめな人だ, "as far as I know, he's a serious person". Common with 知る, 見る and 聞く.

**Unless**, with the ない-form: 雨が降らない限り、試合は行われる, "unless it rains, the match will go ahead".

The set phrase できる限り means "as much as possible", like できるだけ.
`,
    sentences: [
      s("生きている{限り}、あなたのことは忘れない。", "いきている{かぎり}、あなたのことはわすれない。", "As long as I live, I won't forget you.", {
        near: [["うちに", "うちに is \"while there's still time\". For \"as long as\", use 限り."]],
      }),
      s("私が知っている{限り}、彼はまじめな人だ。", "わたしがしっている{かぎり}、かれはまじめなひとだ。", "As far as I know, he's a serious person.", {
        near: [["ように", "That's \"as\". For \"as far as I know\", use 限り."]],
      }),
      s("雨が降らない{限り}、試合は行われる。", "あめがふらない{かぎり}、しあいはおこなわれる。", "Unless it rains, the match will go ahead.", {
        near: [["なら", "That's \"if\". For \"unless\", use ない限り."]],
      }),
      s("できる{限り}、お手伝いします。", "できる{かぎり}、おてつだいします。", "I'll help as much as I can.", {
        near: [["だけ", "できるだけ works too. This point practises できる限り."]],
      }),
      s("練習しない{限り}、上手にはならない。", "れんしゅうしない{かぎり}、じょうずにはならない。", "Unless you practise, you won't get better.", {
        near: [["なら", "That's \"if\". For \"unless\", use ない限り."]],
      }),
    ],
  }),

  point({
    id: "n3-baai",
    title: "〜場合",
    meaning: "in the case of, if",
    structure: "Plain form / Noun + の + 場合(は)",
    related: ["n3-sai", "n4-tara", "n3-kagiri"],
    explanation: `
**場合** means "case" or "situation", and 場合は sets a condition: 雨の場合は、試合は中止です, "in case of rain, the match is cancelled".

It's the standard word in rules, instructions, notices and forms: 遅れる場合は、必ず連絡してください, "if you're going to be late, be sure to get in touch". In conversation, たら or なら is more natural.

It follows a plain form, a noun with の, or a な-adjective with な. It's for situations that may or may not happen, not for things that will definitely happen: for "when I get home", use 帰ったら, not 帰る場合.

With a person, it means "in X's case": 私の場合、朝のほうが集中できる, "in my case, I concentrate better in the morning".
`,
    sentences: [
      s("雨の{場合}は、試合は中止です。", "あめの{ばあい}は、しあいはちゅうしです。", "In case of rain, the match will be cancelled.", {
        near: [["時", "That works, but for rules and conditions, use 場合."]],
      }),
      s("遅れる{場合}は、必ず連絡してください。", "おくれる{ばあい}は、かならずれんらくしてください。", "If you're going to be late, be sure to get in touch.", {
        near: [["なら", "That works in speech. In instructions, use 場合は."]],
      }),
      s("火事の{場合}、エレベーターは使わないでください。", "かじの{ばあい}、エレベーターはつかわないでください。", "In the event of a fire, do not use the lifts.", {
        near: [["際", "That works too. This point practises 場合."]],
      }),
      s("分からない{場合}は、係の者に聞いてください。", "わからない{ばあい}は、かかりのものにきいてください。", "If anything is unclear, please ask a member of staff.", {
        near: [["なら", "That works in speech. In instructions, use 場合は."]],
      }),
      s("私の{場合}、朝のほうが集中できる。", "わたしの{ばあい}、あさのほうがしゅうちゅうできる。", "In my case, I can concentrate better in the morning.", {
        near: [["として", "として is \"as\". For \"in my case\", use 場合."]],
      }),
    ],
  }),
];
