import { point, s, word } from "../../build";

/** Trying, meaning, pretending, habits, permission, strong feelings and risks. */

export const intent = [
  point({
    id: "n3-you-to-suru",
    title: "〜ようとする",
    meaning: "try to; be about to; (not) willing to",
    structure: "Verb volitional form + とする / としない",
    related: ["n4-volitional", "n4-you-to-omou", "n4-te-miru"],
    explanation: `
The volitional form plus **とする** describes an attempt, often one that doesn't succeed: 何度も思い出そうとしたが、だめだった, "I tried again and again to remember, but it was no good".

It also describes the moment just before something happens: 家を出ようとしたとき、電話が鳴った, "just as I was about to leave, the phone rang". With things, not people, it's "on the point of": ドアが閉まろうとしている.

The negative, **ようとしない**, says someone refuses: 子どもは野菜を食べようとしない, "my child won't eat vegetables". It's always about other people.

Compare てみる, "try it and see". てみる actually does the action; ようとする is the effort to.
`,
    sentences: [
      s("家を{出ようとした}とき、電話が鳴った。", "いえを{でようとした}とき、でんわがなった。", "Just as I was about to leave the house, the phone rang.", {
        hint: "出る",
        conj: { word: word("出る", "でる", "ichidan"), form: "volitional", tail: "とした" },
        near: [["出るとした", "とする follows the volitional form: 出ようとした."]],
      }),
      s("何度も{思い出そうとした}が、だめだった。", "なんども{おもいだそうとした}が、だめだった。", "I tried again and again to remember, but it was no good.", {
        hint: "思い出す",
        conj: { word: word("思い出す", "おもいだす", "godan"), form: "volitional", tail: "とした" },
        near: [["思い出してみた", "That's \"tried it and saw\". For an effort that fails, use 思い出そうとした."]],
      }),
      s("子どもは野菜を{食べようとしない}。", "こどもはやさいを{たべようとしない}。", "My child refuses to eat vegetables.", {
        hint: "食べる, refuses",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "volitional", tail: "としない" },
        near: [["食べたくない", "That's \"doesn't want to\". For \"won't, refuses to\", use 食べようとしない."]],
      }),
      s("電車のドアが{閉まろうとしている}。", "でんしゃのドアが{しまろうとしている}。", "The train doors are about to close.", {
        hint: "閉まる",
        conj: { word: word("閉まる", "しまる", "godan"), form: "volitional", tail: "としている" },
        near: [["閉まるところだ", "That works too. This point practises 閉まろうとしている."]],
      }),
      s("彼は私の話を{聞こうとしない}。", "かれはわたしのはなしを{きこうとしない}。", "He won't listen to what I'm saying.", {
        hint: "聞く, refuses",
        conj: { word: word("聞く", "きく", "godan"), form: "volitional", tail: "としない" },
        near: [["聞かない", "That's a plain \"doesn't listen\". For \"refuses to\", use 聞こうとしない."]],
      }),
    ],
  }),

  point({
    id: "n3-tsumori-de",
    title: "〜たつもり・〜つもりで",
    meaning: "thought I had; as if; meant it as",
    structure: "Verb た-form / ている / Noun + の + つもり(で)",
    related: ["n5-tsumori", "n3-furi"],
    explanation: `
At N5, つもり was an intention: 行くつもりだ, "I plan to go". After a た-form or a state, it's what someone **believes** is true, often wrongly: 鍵をかけたつもりだったが、開いていた, "I thought I'd locked it, but it was open".

About someone else, it can be critical: 彼は何でも知っているつもりだ, "he thinks he knows everything".

With で, it means acting "as if": 旅行したつもりで、お金を貯金した, "I saved the money as if I'd gone on the trip".

After a noun with の, it's what you meant something as: 冗談のつもりだった, "I meant it as a joke". Compare ふり, which is pretending to others; つもり is what's in your own head.
`,
    sentences: [
      s("鍵をかけた{つもり}だったが、開いていた。", "かぎをかけた{つもり}だったが、あいていた。", "I thought I'd locked it, but it was open.", {
        near: [["はず", "はず is an expectation from facts. For what you believed you'd done, use つもり."]],
      }),
      s("旅行した{つもり}で、お金を貯金した。", "りょこうした{つもり}で、おかねをちょきんした。", "I saved the money as if I'd gone on the trip.", {
        near: [["ように", "That's \"like\". For acting as if, use つもりで."]],
      }),
      s("自分では丁寧に書いた{つもり}です。", "じぶんではていねいにかいた{つもり}です。", "I believe I wrote it carefully.", {
        near: [["はず", "はず is an expectation from facts. For what you believe you did, use つもり."]],
      }),
      s("彼は何でも知っている{つもり}だ。", "かれはなんでもしっている{つもり}だ。", "He thinks he knows everything.", {
        near: [["ふり", "ふり is pretending to others. For what he believes, use つもり."]],
      }),
      s("冗談の{つもり}だったのに、怒られた。", "じょうだんの{つもり}だったのに、おこられた。", "I meant it as a joke, but they got angry.", {
        near: [["ため", "That's purpose. For what you meant it as, use つもり."]],
      }),
    ],
  }),

  point({
    id: "n3-koto-ni-shiteiru",
    title: "〜ことにしている",
    meaning: "make a point of, have a rule of",
    structure: "Verb dictionary form / ない-form + ことにしている",
    related: ["n4-koto-ni-suru", "n4-koto-ni-naru", "n4-you-ni-suru"],
    explanation: `
At N4, ことにする meant deciding something. **ことにしている** is a decision that has become a habit: 毎朝ジョギングすることにしている, "I make a point of jogging every morning".

It's a personal rule that you keep to. With the ない-form, it's something you've decided not to do: 夜十時以降は何も食べないことにしている.

Compare ことになっている, which is a rule set by someone else (a school, a company, a schedule). ことにしている is always your own choice.

It's close to ようにしている, which is more about trying to do something. ことにしている is firmer: you've made it a rule.
`,
    sentences: [
      s("毎朝ジョギングする{ことにしている}。", "まいあさジョギングする{ことにしている}。", "I make a point of jogging every morning.", {
        near: [["ことになっている", "That's a rule set by others. For your own habit, use ことにしている."]],
      }),
      s("夜十時以降は何も食べない{ことにしている}。", "よるじゅうじいこうはなにもたべない{ことにしている}。", "I make it a rule not to eat anything after ten at night.", {
        near: [["ことになっている", "That's a rule set by others. For your own rule, use ことにしている."]],
      }),
      s("寝る前にスマホを見ない{ことにしています}。", "ねるまえにスマホをみない{ことにしています}。", "I make a point of not looking at my phone before bed.", {
        near: [["ことにします", "That's a new decision. For an ongoing habit, use ことにしています."]],
      }),
      s("週末は家族と過ごす{ことにしている}。", "しゅうまつはかぞくとすごす{ことにしている}。", "I make a point of spending weekends with my family.", {
        near: [["ことにする", "That's a new decision. For an ongoing habit, use ことにしている."]],
      }),
      s("分からない言葉はすぐ調べる{ことにしている}。", "わからないことばはすぐしらべる{ことにしている}。", "I make a habit of looking up words I don't know straight away.", {
        near: [["ようにしている", "That works too. ことにしている is a firmer personal rule."]],
      }),
    ],
  }),

  point({
    id: "n3-sasete-morau",
    title: "〜させてもらう・〜させていただく",
    meaning: "be allowed to; let me (humbly)",
    structure: "Causative て-form + もらう / いただく",
    related: ["n4-sasete-kudasai", "n4-te-morau", "n4-causative"],
    explanation: `
The causative plus もらう means someone let you do something, and you're grateful: 先週は休みを取らせてもらった, "I was allowed to take time off last week". The person who gave permission takes に.

As a request, it's a polite way to ask permission: この部屋を使わせてもらえますか, "could I use this room?"; 明日、休ませていただけませんか, "could I take tomorrow off?"

**させていただきます** is extremely common in business and on formal occasions for announcing your own actions humbly: では、会議を始めさせていただきます, "allow me to begin the meeting".

Don't mix it up with てもらう alone: 使ってもらう is getting someone else to use it.
`,
    sentences: [
      s("明日、{休ませていただけませんか}。", "あした、{やすませていただけませんか}。", "Could I take tomorrow off?", {
        hint: "休む, let me",
        conj: { word: word("休む", "やすむ", "godan"), form: "causative", cut: "る", tail: "ていただけませんか" },
        near: [["休んでいただけませんか", "That asks them to rest. For \"let me rest\", use the causative: 休ませていただけませんか."]],
      }),
      s("先週は休みを{取らせてもらった}。", "せんしゅうはやすみを{とらせてもらった}。", "I was allowed to take time off last week.", {
        hint: "取る, allowed to",
        conj: { word: word("取る", "とる", "godan"), form: "causative", cut: "る", tail: "てもらった" },
        near: [["取ってもらった", "That's \"someone took it for me\". For \"was allowed to\", use 取らせてもらった."]],
      }),
      s("では、会議を{始めさせていただきます}。", "では、かいぎを{はじめさせていただきます}。", "Well then, allow me to begin the meeting.", {
        hint: "始める, humbly",
        conj: { word: word("始める", "はじめる", "ichidan"), form: "causative", cut: "る", tail: "ていただきます" },
        near: [["始めていただきます", "That asks them to begin. For \"allow me to begin\", use 始めさせていただきます."]],
      }),
      s("この部屋を{使わせてもらえますか}。", "このへやを{つかわせてもらえますか}。", "Could I use this room?", {
        hint: "使う, let me",
        conj: { word: word("使う", "つかう", "godan"), form: "causative", cut: "る", tail: "てもらえますか" },
        near: [["使ってもらえますか", "That asks them to use it. For \"let me use it\", use 使わせてもらえますか."]],
      }),
      s("父に車を{運転させてもらった}。", "ちちにくるまを{うんてんさせてもらった}。", "My father let me drive the car.", {
        hint: "運転する, allowed to",
        conj: { word: word("運転する", "うんてんする", "irregular"), form: "causative", cut: "る", tail: "てもらった" },
        near: [["運転してもらった", "That's \"had him drive\". For \"was allowed to drive\", use 運転させてもらった."]],
      }),
    ],
  }),

  point({
    id: "n3-furi",
    title: "〜ふりをする",
    meaning: "pretend to",
    structure: "Plain form + ふりをする (な-adj + な · Noun + の)",
    related: ["n3-tsumori-de", "n3-you-ni-mieru"],
    explanation: `
**ふりをする** means pretending, putting on a show for others: 彼は寝たふりをしている, "he's pretending to be asleep". 知らないふりをした, "I pretended not to know".

It follows a plain form: a verb, an い-adjective, a な-adjective with な (平気なふり, "pretending to be fine"), or a noun with の (学生のふり).

With a た-form, the state is already in place: 寝たふり is "pretending to be asleep", not "pretending to have slept".

Compare つもり, which is what someone believes in their own head. ふり is always about deceiving others, even if only a little.
`,
    sentences: [
      s("彼は寝た{ふり}をしている。", "かれはねた{ふり}をしている。", "He's pretending to be asleep.", {
        near: [["つもり", "つもり is what you believe or intend. For pretending, use ふり."]],
      }),
      s("知らない{ふり}をした。", "しらない{ふり}をした。", "I pretended not to know.", {
        near: [["つもり", "つもり is what you believe or intend. For pretending, use ふり."]],
      }),
      s("忙しい{ふり}をして、電話に出なかった。", "いそがしい{ふり}をして、でんわにでなかった。", "I pretended to be busy and didn't answer the phone.", {
        near: [["よう", "That's \"seems\". For pretending, use ふり."]],
      }),
      s("彼女は平気な{ふり}をしていた。", "かのじょはへいきな{ふり}をしていた。", "She was pretending she was fine.", {
        near: [["つもり", "つもり is what you believe or intend. For pretending, use ふり."]],
      }),
      s("聞こえない{ふり}をするのはやめて。", "きこえない{ふり}をするのはやめて。", "Stop pretending you can't hear me.", {
        near: [["まね", "まね is imitating someone. For pretending, use ふり."]],
      }),
    ],
  }),

  point({
    id: "n3-tsuide-ni",
    title: "〜ついでに",
    meaning: "while (you're) at it, on the way",
    structure: "Verb plain form / Noun + の + ついでに",
    related: ["n5-nagara"],
    explanation: `
**ついでに** means taking the chance to do something extra while doing something else: 買い物のついでに、郵便局に寄った, "while I was out shopping, I dropped by the post office".

The first part is the main purpose; the second is the bonus. It follows a plain verb or a noun with の.

On its own, ついでに means "while you're at it", and it's handy for small requests: コンビニに行くなら、ついでに牛乳も買ってきて, "if you're going to the shop, could you get some milk while you're at it?"

Compare ながら, which is two actions at the same moment. ついでに is about piggybacking one errand on another.
`,
    sentences: [
      s("買い物の{ついでに}、郵便局に寄った。", "かいものの{ついでに}、ゆうびんきょくによった。", "While I was out shopping, I dropped by the post office.", {
        near: [["ために", "ために is purpose. For \"while I was at it\", use ついでに."]],
      }),
      s("散歩の{ついでに}、パンを買ってきた。", "さんぽの{ついでに}、パンをかってきた。", "I picked up some bread while I was out for a walk.", {
        near: [["ながら", "ながら is doing two things at once. For \"while I was at it\", use ついでに."]],
      }),
      s("東京に行く{ついでに}、友達に会うつもりだ。", "とうきょうにいく{ついでに}、ともだちにあうつもりだ。", "While I'm in Tokyo, I plan to see a friend.", {
        near: [["ために", "ために is purpose. For \"while I'm at it\", use ついでに."]],
      }),
      s("コンビニに行くなら、{ついでに}牛乳も買ってきて。", "コンビニにいくなら、{ついでに}ぎゅうにゅうもかってきて。", "If you're going to the shop, could you get some milk while you're at it?", {
        near: [["いっしょに", "That's \"together\". For \"while you're at it\", use ついでに."]],
      }),
      s("部屋を掃除した{ついでに}、窓も拭いた。", "へやをそうじした{ついでに}、まどもふいた。", "While I was cleaning the room, I wiped the windows too.", {
        near: [["あとで", "That's \"after\". For \"while I was at it\", use ついでに."]],
      }),
    ],
  }),

  point({
    id: "n3-toori",
    title: "〜とおり(に)・〜どおり(に)",
    meaning: "exactly as, in the way that",
    structure: "Verb plain form / Noun + の + とおり(に) · Noun + どおり(に)",
    related: ["n3-you-ni-as"],
    explanation: `
**とおり** means "just as, exactly as": 先生が言ったとおりに、やってみた, "I did it exactly as the teacher said". 通り is "road", so the image is following the same path.

It follows a plain verb (often 言う, 思う, 書く, 見る) or a noun with の: 説明書のとおりに, "according to the instructions".

Directly after a noun, it becomes **どおり**: 予定どおり, "as planned"; 時間どおり, "on time".

思ったとおり, "just as I thought", is a common set phrase. Compare ように, "as, like": とおり is stricter, "exactly as", which makes it the natural choice for instructions and plans.
`,
    sentences: [
      s("先生が言った{とおりに}、やってみた。", "せんせいがいった{とおりに}、やってみた。", "I did it exactly as the teacher said.", {
        accept: ["とおり", "通りに", "通り"],
        near: [["ように", "That works too, but とおりに means \"exactly as\"."]],
      }),
      s("説明書の{とおりに}組み立ててください。", "せつめいしょの{とおりに}くみたててください。", "Please put it together exactly as the instructions say.", {
        accept: ["とおり", "通りに", "通り"],
        near: [["ように", "That works too, but とおりに means \"exactly as\"."]],
      }),
      s("思った{とおり}、彼は来なかった。", "おもった{とおり}、かれはこなかった。", "Just as I thought, he didn't come.", {
        accept: ["通り", "とおりに", "通りに"],
        near: [["ように", "That works too. This point practises 思ったとおり."]],
      }),
      s("予定{どおり}、会議は三時に始まった。", "よてい{どおり}、かいぎはさんじにはじまった。", "The meeting started at three, as planned.", {
        accept: ["通り", "どおりに", "通りに"],
        near: [["とおり", "Straight after a noun, とおり becomes どおり."]],
      }),
      s("私が言う{とおりに}書いてください。", "わたしがいう{とおりに}かいてください。", "Please write it down exactly as I say it.", {
        accept: ["とおり", "通りに", "通り"],
        near: [["ように", "That works too, but とおりに means \"exactly as\"."]],
      }),
    ],
  }),

  point({
    id: "n3-te-kara-de-nai-to",
    title: "〜てからでないと",
    meaning: "not until, unless (you) first",
    structure: "Verb て-form + からでないと / からでなければ + negative",
    related: ["n5-te-kara", "n3-te-hajimete"],
    explanation: `
**てからでないと** says one thing has to happen before another is possible: 手を洗ってからでないと、食べてはいけません, "you can't eat until you've washed your hands".

The second part is always negative or a prohibition: できない, 決められない, 入れません, てはいけない.

It's てから ("after") plus でないと ("if it's not"), so the literal sense is "if it's not after…". **てからでなければ** is a slightly more formal version; in speech, it's からじゃないと.

Compare てはじめて, which looks back ("I only realised after"). てからでないと looks forward and sets a condition, which is why it's so common in rules, instructions and polite refusals.
`,
    sentences: [
      s("手を洗って{からでないと}、食べてはいけません。", "てをあらって{からでないと}、たべてはいけません。", "You can't eat until you've washed your hands.", {
        accept: ["からでなければ", "からじゃないと"],
        near: [["から", "から alone is \"after\". For \"not until\", use からでないと."]],
      }),
      s("実物を見て{からでないと}、買うかどうか決められない。", "じつぶつをみて{からでないと}、かうかどうかきめられない。", "I can't decide whether to buy it until I've seen the real thing.", {
        accept: ["からでなければ", "からじゃないと"],
        near: [["から", "から alone is \"after\". For \"not until\", use からでないと."]],
      }),
      s("家族と相談して{からでないと}、返事できません。", "かぞくとそうだんして{からでないと}、へんじできません。", "I can't give you an answer until I've talked it over with my family.", {
        accept: ["からでなければ", "からじゃないと"],
        near: [["からでも", "That's \"even after\". For \"not until\", use からでないと."]],
      }),
      s("二十歳になって{からでないと}、お酒は飲めない。", "はたちになって{からでないと}、おさけはのめない。", "You can't drink until you're twenty.", {
        accept: ["からでなければ", "からじゃないと"],
        near: [["から", "から alone is \"after\". For \"not until\", use からでないと."]],
      }),
      s("予約して{からでないと}、入れません。", "よやくして{からでないと}、はいれません。", "You can't get in without booking first.", {
        accept: ["からでなければ", "からじゃないと"],
        near: [["から", "から alone is \"after\". For \"not unless first\", use からでないと."]],
      }),
    ],
  }),

  point({
    id: "n3-te-tamaranai",
    title: "〜てたまらない・〜てしょうがない",
    meaning: "unbearably, terribly, dying to",
    structure: "い-adj くて · な-adj で · Verb て-form + たまらない / しょうがない / しかたがない",
    related: ["n4-sugiru", "n5-tai", "n2-te-naranai"],
    explanation: `
**てたまらない** says a feeling or sensation is so strong you can't stand it: 暑くてたまらない, "it's unbearably hot". たまる means "to bear", so it's literally "can't bear it".

It's used for your own feelings and physical sensations: hot, cold, sleepy, painful, worried, lonely, and wanting something (会いたくてたまらない, "dying to see them").

**てしょうがない** and **てしかたがない** mean the same: "it can't be helped, it's so…". しょうがない is the more casual of the two.

い-adjectives use the くて form, な-adjectives take で (心配でたまらない), and verbs use the て-form. Don't use them for other people's feelings without そう or らしい.
`,
    sentences: [
      s("暑く{てたまらない}。", "あつく{てたまらない}。", "It's unbearably hot.", {
        accept: ["てしょうがない", "て仕方がない", "てしかたがない"],
        near: [["てならない", "That's more formal. This point practises てたまらない."]],
      }),
      s("国の家族に会いたく{てたまらない}。", "くにのかぞくにあいたく{てたまらない}。", "I'm dying to see my family back home.", {
        accept: ["てしょうがない", "て仕方がない", "てしかたがない"],
        near: [["たまらない", "Connect with the て-form: 会いたくてたまらない."]],
      }),
      s("試験の結果が心配{でたまらない}。", "しけんのけっかがしんぱい{でたまらない}。", "I'm terribly worried about my exam results.", {
        accept: ["でしょうがない", "で仕方がない", "でしかたがない"],
        near: [["てたまらない", "After a な-adjective, it's でたまらない."]],
      }),
      s("足が痛く{てしょうがない}。", "あしがいたく{てしょうがない}。", "My feet are killing me.", {
        accept: ["てたまらない", "て仕方がない", "てしかたがない"],
        near: [["てしかない", "The phrase is てしょうがない."]],
      }),
      s("朝から眠く{てしかたがない}。", "あさからねむく{てしかたがない}。", "I've been terribly sleepy since this morning.", {
        accept: ["てしょうがない", "てたまらない", "て仕方がない"],
        near: [["てしかたがある", "It's always negative: てしかたがない."]],
      }),
    ],
  }),

  point({
    id: "n3-nai-koto-wa-nai",
    title: "〜ないことはない",
    meaning: "it's not that (I) can't; could, if need be",
    structure: "Verb ない-form + ことはない / こともない",
    related: ["n3-koto-wa-nai", "n3-wake-de-wa-nai"],
    explanation: `
A double negative, **ないことはない** means "it's not that … not": 行けないことはないが、ちょっと遠い, "I could go, but it's a bit far".

It's a reluctant yes. The speaker admits something is possible or true, but with reservations, and often a けど or が follows with the catch.

It's very common with potential verbs: 食べられないことはない, "it's not that I can't eat it"; 間に合わないことはない, "we might just make it".

**ないこともない** is a softer version. Don't confuse it with ことはない alone (after a dictionary form), which means "there's no need to".
`,
    sentences: [
      s("納豆は食べられない{ことはない}けど、好きではない。", "なっとうはたべられない{ことはない}けど、すきではない。", "It's not that I can't eat natto, but I don't like it.", {
        accept: ["こともない"],
        near: [["ことがない", "That's \"have never\". For \"it's not that … not\", use ないことはない."]],
      }),
      s("行けない{ことはない}が、ちょっと遠い。", "いけない{ことはない}が、ちょっととおい。", "I could go, but it's a bit far.", {
        accept: ["こともない"],
        near: [["ことがない", "That's \"never\". For \"it's not that I can't\", use ないことはない."]],
      }),
      s("急げば間に合わない{ことはない}。", "いそげばまにあわない{ことはない}。", "If we hurry, we might just make it.", {
        accept: ["こともない"],
        near: [["わけがない", "That's \"no way\". For \"it's not impossible\", use ないことはない."]],
      }),
      s("分からない{こともない}けど、説明が難しい。", "わからない{こともない}けど、せつめいがむずかしい。", "It's not that I don't understand, but it's hard to explain.", {
        accept: ["ことはない"],
        near: [["ことがない", "That's \"never\". For \"it's not that … not\", use ないこともない."]],
      }),
      s("辛い料理も食べない{ことはないです}よ。", "からいりょうりもたべない{ことはないです}よ。", "It's not that I never eat spicy food.", {
        accept: ["ことはありません", "こともないです"],
        near: [["ことがないです", "That's \"never\". For \"it's not that I don't\", use ないことはないです."]],
      }),
    ],
  }),

  point({
    id: "n3-osore",
    title: "〜おそれがある",
    meaning: "there's a risk that, may (something bad)",
    structure: "Verb dictionary form / Noun + の + おそれがある",
    related: ["n4-kamoshirenai"],
    explanation: `
**おそれがある** warns that something bad might happen: 明日は大雨になるおそれがあります, "there's a risk of heavy rain tomorrow". 恐れ means "fear".

It's formal and impersonal, the language of weather forecasts, news reports, warnings on medicine and official notices. In conversation, かもしれない is more natural.

It follows a dictionary-form verb or a noun with の: 台風のおそれ, "the risk of a typhoon". It's only for bad outcomes: you wouldn't use it for winning a prize.

You'll often see it written in kanji: 恐れがある. The negative, おそれはない, reassures: "there's no danger of".
`,
    sentences: [
      s("明日は大雨になる{おそれがあります}。", "あしたはおおあめになる{おそれがあります}。", "There's a risk of heavy rain tomorrow.", {
        accept: ["恐れがあります"],
        near: [["かもしれません", "That works in speech. Forecasts and warnings use おそれがあります."]],
      }),
      s("この薬は眠くなる{おそれがある}。", "このくすりはねむくなる{おそれがある}。", "This medicine may cause drowsiness.", {
        accept: ["恐れがある"],
        near: [["かもしれない", "That works in speech. Warnings use おそれがある."]],
      }),
      s("台風が上陸する{おそれがある}。", "たいふうがじょうりくする{おそれがある}。", "There's a risk the typhoon will make landfall.", {
        accept: ["恐れがある"],
        near: [["はずだ", "はずだ is an expectation. For a risk, use おそれがある."]],
      }),
      s("このままでは、川があふれる{おそれがある}。", "このままでは、かわがあふれる{おそれがある}。", "At this rate, the river may overflow.", {
        accept: ["恐れがある"],
        near: [["かもしれない", "That works in speech. Warnings use おそれがある."]],
      }),
      s("感染が広がる{おそれがあります}。", "かんせんがひろがる{おそれがあります}。", "There's a risk the infection will spread.", {
        accept: ["恐れがあります"],
        near: [["ことがあります", "That's \"sometimes happens\". For a risk, use おそれがあります."]],
      }),
    ],
  }),

  point({
    id: "n3-buri",
    title: "〜ぶり",
    meaning: "for the first time in (a period)",
    structure: "Time period + ぶり(に / の Noun) · 久しぶり",
    related: ["n3-te-irai"],
    explanation: `
**ぶり** after a length of time means something happened again after that long a gap: 三年ぶりに国へ帰った, "I went home for the first time in three years".

It takes に before a verb and の before a noun: 一週間ぶりの雨, "the first rain in a week"; 五年ぶりの優勝, "their first win in five years".

**久しぶり** ("it's been a while") is the most common use of all, a standard greeting when you haven't seen someone for some time: 久しぶり!, お久しぶりです.

After a verb stem or a noun, ぶり can also mean "manner": 話しぶり, "way of talking". That use is less common and usually becomes っぷり in speech: 食べっぷり, "the way someone eats".
`,
    sentences: [
      s("三年{ぶり}に国へ帰った。", "さんねん{ぶり}にくにへかえった。", "I went home for the first time in three years.", {
        near: [["後", "That's \"after\". For \"for the first time in\", use ぶり."]],
      }),
      s("{久しぶり}ですね。", "{ひさしぶり}ですね。", "It's been a long time, hasn't it?", {
        near: [["久しい", "The set phrase is 久しぶり."]],
      }),
      s("十年{ぶり}に友達に会った。", "じゅうねん{ぶり}にともだちにあった。", "I saw a friend for the first time in ten years.", {
        near: [["間", "That's \"for ten years\". For \"for the first time in ten years\", use ぶり."]],
      }),
      s("一週間{ぶり}の雨だ。", "いっしゅうかん{ぶり}のあめだ。", "It's the first rain in a week.", {
        near: [["後", "That's \"after\". For \"the first in a week\", use ぶり."]],
      }),
      s("五年{ぶり}の優勝だ。", "ごねん{ぶり}のゆうしょうだ。", "It's their first win in five years.", {
        near: [["まで", "まで is \"until\". For \"the first in five years\", use ぶり."]],
      }),
    ],
  }),
];
