import { point, s } from "../../build";

/** Reasons with a stance: obligation, expectation, blame, evidence and hard-won outcomes. */

export const cause = [
  point({
    id: "n2-ue-wa",
    title: "〜上は",
    meaning: "now that, since (so I must)",
    structure: "Verb plain form (often た-form) + 上は",
    related: ["n3-kara-ni-wa", "n2-ijou-wa"],
    explanation: `
**上は** means "now that this is the situation, it follows that…": 引き受けた上は、最後まで責任を持ちます, "now that I've taken it on, I'll see it through responsibly".

It's a formal, written relative of からには (N3). The first half is a decision, a commitment or an unavoidable situation. The second half is what that obliges you to do, or a strong resolve: なければならない, べきだ, つもりだ, しかない.

Most often it follows a た-form, because the commitment has already been made: 契約した上は, 決めた上は, 選ばれた上は.

Don't confuse it with 上で (N3), "after (and based on)", or 上に, "on top of". The particle は is what makes this one "now that".
`,
    sentences: [
      s("引き受けた{上は}、最後まで責任を持ちます。", "ひきうけた{うえは}、さいごまでせきにんをもちます。", "Now that I've taken it on, I'll take responsibility for it to the end.", {
        accept: ["以上は", "からには"],
        near: [["上で", "上で is \"after (and based on)\". For \"now that\", use 上は."]],
      }),
      s("契約した{上は}、ルールを守らなければならない。", "けいやくした{うえは}、ルールをまもらなければならない。", "Now that you've signed the contract, you have to follow the rules.", {
        accept: ["以上は", "からには"],
        near: [["後は", "後は is just \"after\". For \"now that … must\", use 上は."]],
      }),
      s("こうなった{上は}、覚悟を決めるしかない。", "こうなった{うえは}、かくごをきめるしかない。", "Now that it's come to this, I have no choice but to brace myself.", {
        accept: ["以上は", "からには"],
        near: [["上に", "上に is \"on top of\". For \"now that\", use 上は."]],
      }),
      s("試験を受けると決めた{上は}、毎日勉強するつもりだ。", "しけんをうけるときめた{うえは}、まいにちべんきょうするつもりだ。", "Now that I've decided to take the exam, I intend to study every day.", {
        accept: ["以上は", "からには"],
        near: [["上で", "上で is \"after (and based on)\". For \"now that\", use 上は."]],
      }),
      s("代表に選ばれた{上は}、全力を尽くします。", "だいひょうにえらばれた{うえは}、ぜんりょくをつくします。", "Having been chosen as representative, I'll give it everything I've got.", {
        accept: ["以上は", "からには"],
        near: [["ので", "ので is a plain reason. For \"having been chosen, I must\", use 上は."]],
      }),
    ],
  }),

  point({
    id: "n2-ijou-wa",
    title: "〜以上(は)",
    meaning: "since, as long as (it follows that)",
    structure: "Plain form + 以上(は) (な-adj, Noun + である)",
    related: ["n2-ue-wa", "n3-kara-ni-wa"],
    explanation: `
**以上は** gives a premise that leads to an obligation or a firm conclusion: 約束した以上、守るべきだ, "since you promised, you should keep it". The は is often left off.

It covers both "now that" (a decision already made) and "as long as" (an ongoing state): 学生である以上は、勉強が第一だ, "as long as you're a student, studying comes first".

The second half is a judgement, duty or decision: べきだ, なければならない, わけにはいかない, できない. It sits between からには (a bit more personal) and 上は (the most formal).

After nouns and な-adjectives, use である: 学生である以上. Don't confuse it with 以上 as a noun ("more than", or "that's all" at the end of a speech).
`,
    sentences: [
      s("約束した{以上}、守るべきだ。", "やくそくした{いじょう}、まもるべきだ。", "Since you promised, you should keep your word.", {
        accept: ["以上は", "からには", "上は"],
        near: [["以外", "以外 is \"except\". For \"since\", use 以上."]],
      }),
      s("学生である{以上は}、勉強が第一だ。", "がくせいである{いじょうは}、べんきょうがだいいちだ。", "As long as you're a student, studying comes first.", {
        accept: ["以上", "からには"],
        near: [["以外は", "以外 is \"except\". For \"as long as you're\", use 以上は."]],
      }),
      s("やると言った{以上}、途中でやめるわけにはいかない。", "やるといった{いじょう}、とちゅうでやめるわけにはいかない。", "Since I said I'd do it, I can't quit halfway.", {
        accept: ["以上は", "からには", "上は"],
        near: [["以来", "以来 is \"ever since\". For \"since (so I must)\", use 以上."]],
      }),
      s("日本に住む{以上}、日本の法律に従わなければならない。", "にほんにすむ{いじょう}、にほんのほうりつにしたがわなければならない。", "As long as you live in Japan, you have to obey Japanese law.", {
        accept: ["以上は", "からには"],
        near: [["から", "から is a plain reason. 以上 adds \"so you're obliged\"."]],
      }),
      s("証拠がない{以上}、彼を疑うことはできない。", "しょうこがない{いじょう}、かれをうたがうことはできない。", "As long as there's no evidence, we can't suspect him.", {
        accept: ["以上は"],
        near: [["限り", "ない限り works too. This point practises 以上."]],
      }),
    ],
  }),

  point({
    id: "n2-dake-ni",
    title: "〜だけに",
    meaning: "all the more because; as you'd expect from",
    structure: "Plain form + だけに (な-adj + な · Noun + な / である)",
    related: ["n2-dake-atte", "n2-bakari-ni"],
    explanation: `
**だけに** says a result is stronger because of the circumstances: 期待していただけに、がっかりした, "precisely because I'd been looking forward to it, I was all the more disappointed".

The first half is a situation that intensifies the second. It works for disappointment, shock or joy: 高かっただけに、壊れたときはショックだった.

It also means "as you'd expect, given that": 十年日本に住んでいただけに、日本の事情に詳しい, "having lived in Japan for ten years, he knows it well, as you'd expect". In this use it overlaps with だけあって, which is only ever positive.

Compare ばかりに, which blames one thing for a bad result, and だけで, "just by".
`,
    sentences: [
      s("期待していた{だけに}、がっかりした。", "きたいしていた{だけに}、がっかりした。", "Precisely because I'd been looking forward to it, I was all the more disappointed.", {
        near: [["だけで", "だけで is \"just by\". For \"all the more because\", use だけに."]],
      }),
      s("彼は十年日本に住んでいた{だけに}、日本の事情に詳しい。", "かれはじゅうねんにほんにすんでいた{だけに}、にほんのじじょうにくわしい。", "Having lived in Japan for ten years, he knows how things work there, as you'd expect.", {
        accept: ["だけあって"],
        near: [["ばかりに", "ばかりに leads to a bad result. For \"as you'd expect\", use だけに."]],
      }),
      s("高かった{だけに}、壊れたときはショックだった。", "たかかった{だけに}、こわれたときはショックだった。", "It was expensive, so it was all the more of a shock when it broke.", {
        near: [["だけで", "だけで is \"just by\". For \"all the more because\", use だけに."]],
      }),
      s("若い{だけに}、覚えるのが早い。", "わかい{だけに}、おぼえるのがはやい。", "Being young, they pick things up quickly, as you'd expect.", {
        accept: ["だけあって"],
        near: [["くせに", "くせに is a criticism. For \"as you'd expect\", use だけに."]],
      }),
      s("一生懸命準備した{だけに}、合格したときは本当にうれしかった。", "いっしょうけんめいじゅんびした{だけに}、ごうかくしたときはほんとうにうれしかった。", "I'd prepared so hard that passing made me all the happier.", {
        near: [["だけで", "だけで is \"just by\". For \"all the more because\", use だけに."]],
      }),
    ],
  }),

  point({
    id: "n2-dake-atte",
    title: "〜だけあって・〜だけのことはある",
    meaning: "as you'd expect from, lives up to",
    structure: "Plain form + だけあって / だけのことはある (な-adj + な · Noun directly)",
    related: ["n2-dake-ni", "n3-sasuga"],
    explanation: `
**だけあって** praises something for living up to what you'd expect from it: プロだけあって、さすがに上手だ, "as you'd expect from a professional, they're really good".

The first half is a status, effort or price, and the second is a good quality that matches it. It's always positive, and often appears with さすが.

At the end of a sentence, it's **だけのことはある**, "no wonder" or "it lives up to it": この料理はおいしい。人気があるだけのことはある, "this food is delicious. No wonder it's popular".

Compare だけに, which works for both good and bad results, and くせに, which criticises someone for not living up to expectations.
`,
    sentences: [
      s("プロ{だけあって}、さすがに上手だ。", "プロ{だけあって}、さすがにじょうずだ。", "As you'd expect from a professional, they're really good.", {
        accept: ["だけに"],
        near: [["だけで", "だけで is \"just by\". For \"as you'd expect from\", use だけあって."]],
      }),
      s("高い{だけあって}、この服は品質がいい。", "たかい{だけあって}、このふくはひんしつがいい。", "These clothes are expensive, and the quality shows it.", {
        accept: ["だけに"],
        near: [["くせに", "くせに is a criticism. For \"lives up to it\", use だけあって."]],
      }),
      s("有名な店{だけあって}、いつも込んでいる。", "ゆうめいなみせ{だけあって}、いつもこんでいる。", "It's a famous shop, so, sure enough, it's always crowded.", {
        accept: ["だけに"],
        near: [["ばかりに", "ばかりに leads to a bad result. For \"as you'd expect\", use だけあって."]],
      }),
      s("毎日練習している{だけあって}、彼女の英語は上手だ。", "まいにちれんしゅうしている{だけあって}、かのじょのえいごはじょうずだ。", "She practises every day, and her English shows it.", {
        accept: ["だけに"],
        near: [["のに", "のに is \"even though\". For \"no wonder\", use だけあって."]],
      }),
      s("この料理はおいしい。人気がある{だけのことはある}。", "このりょうりはおいしい。にんきがある{だけのことはある}。", "This food is delicious. No wonder it's popular.", {
        near: [["だけあって", "At the end of a sentence, it's だけのことはある."]],
      }),
    ],
  }),

  point({
    id: "n2-bakari-ni",
    title: "〜ばかりに",
    meaning: "simply because, all because (with a bad result)",
    structure: "Plain form + ばかりに (な-adj + な / である · Noun + である)",
    related: ["n3-sei-de", "n2-dake-ni"],
    explanation: `
**ばかりに** blames a bad result on one single cause, with a sense of regret: 私が余計なことを言ったばかりに、彼女を怒らせてしまった, "simply because I said something unnecessary, I made her angry".

The feeling is "if only it weren't for that one thing". The second half is always unwelcome: failing, losing out, getting into trouble.

After たい, it means "just because I wanted…", describing going to great lengths: 彼に会いたいばかりに、遠い町まで行った, "I went all the way to a distant town, just because I wanted to see him".

Compare せいで, which blames without the regret, and だけに, which intensifies without blaming.
`,
    sentences: [
      s("私が余計なことを言った{ばかりに}、彼女を怒らせてしまった。", "わたしがよけいなことをいった{ばかりに}、かのじょをおこらせてしまった。", "Simply because I said something unnecessary, I made her angry.", {
        near: [["おかげで", "おかげで is for good results. For \"all because\" with a bad one, use ばかりに."]],
      }),
      s("お金がない{ばかりに}、大学に行けなかった。", "おかねがない{ばかりに}、だいがくにいけなかった。", "I couldn't go to university, all because I didn't have the money.", {
        near: [["だけに", "だけに is \"all the more because\". For \"all because\", use ばかりに."]],
      }),
      s("寝坊した{ばかりに}、大事な試験に遅れた。", "ねぼうした{ばかりに}、だいじなしけんにおくれた。", "Just because I overslept, I was late for an important exam.", {
        near: [["おかげで", "おかげで is for good results. For \"all because\" with a bad one, use ばかりに."]],
      }),
      s("彼に会いたい{ばかりに}、遠い町まで行った。", "かれにあいたい{ばかりに}、とおいまちまでいった。", "I went all the way to a distant town, just because I wanted to see him.", {
        near: [["ために", "That works, but after たい, ばかりに means \"just for the sake of\"."]],
      }),
      s("英語が話せない{ばかりに}、いい仕事を逃した。", "えいごがはなせない{ばかりに}、いいしごとをのがした。", "I missed out on a good job, all because I can't speak English.", {
        near: [["だけに", "だけに is \"all the more because\". For \"all because\", use ばかりに."]],
      }),
    ],
  }),

  point({
    id: "n2-koto-kara",
    title: "〜ことから",
    meaning: "from the fact that, because (as evidence or origin)",
    structure: "Plain form + ことから (な-adj + な / である · Noun + である)",
    related: ["n4-node", "n3-kekka"],
    explanation: `
**ことから** gives a fact as the basis for a conclusion, a judgement or a name: 道が濡れていることから、夜中に雨が降ったとわかる, "you can tell from the wet road that it rained in the night".

It's very common for explaining where names come from: 富士山が見えることから、この町は「富士見町」と呼ばれている, "the town is called Fujimicho because you can see Mount Fuji from it".

The tone is objective and written, typical of explanations, articles and reports. It isn't used for personal reasons or requests; for those, use から or ので.

Don't confuse it with ことに, which expresses the speaker's emotion ("surprisingly"), or ことで, "by doing".
`,
    sentences: [
      s("富士山が見える{ことから}、この町は「富士見町」と呼ばれている。", "ふじさんがみえる{ことから}、このまちは「ふじみちょう」とよばれている。", "This town is called Fujimicho because you can see Mount Fuji from it.", {
        near: [["ことに", "ことに is for the speaker's feelings. For \"from the fact that\", use ことから."]],
      }),
      s("道が濡れている{ことから}、夜中に雨が降ったとわかる。", "みちがぬれている{ことから}、よなかにあめがふったとわかる。", "You can tell from the wet road that it rained during the night.", {
        near: [["ことで", "ことで is \"by doing\". For \"judging from the fact that\", use ことから."]],
      }),
      s("指紋が一致した{ことから}、彼が犯人だとわかった。", "しもんがいっちした{ことから}、かれがはんにんだとわかった。", "The fingerprints matched, which showed that he was the culprit.", {
        near: [["ことで", "ことで is \"by doing\". For \"from the fact that\", use ことから."]],
      }),
      s("形が星に似ている{ことから}、この名前がついた。", "かたちがほしににている{ことから}、このなまえがついた。", "It got this name because its shape resembles a star.", {
        near: [["ことに", "ことに is for the speaker's feelings. For \"from the fact that\", use ことから."]],
      }),
      s("事故が多い{ことから}、ここに信号が作られた。", "じこがおおい{ことから}、ここにしんごうがつくられた。", "Because there were so many accidents, traffic lights were put in here.", {
        near: [["ので", "That works, but for a basis in facts, formal writing uses ことから."]],
      }),
    ],
  }),

  point({
    id: "n2-no-koto-dakara",
    title: "〜のことだから",
    meaning: "knowing (someone), being who they are",
    structure: "Person + のことだから",
    related: ["n3-ni-chigainai", "n4-hazu"],
    explanation: `
**のことだから** bases a guess on what you know about someone's character: 時間に厳しい田中さんのことだから、もう着いているだろう, "knowing how strict Tanaka is about time, they're probably already there".

It follows a person, often with a description that explains the guess: 優しい彼女のことだから, 真面目な君のことだから.

The second half is a prediction or judgement: だろう, に違いない, きっと〜. It can be affectionate or exasperated, depending on the trait: あの人のことだから、また遅れてくるに違いない, "knowing them, they're bound to be late again".

It's only for people (or sometimes organisations) whose habits you know well, not for things or weather.
`,
    sentences: [
      s("時間に厳しい田中さん{のことだから}、もう着いているだろう。", "じかんにきびしいたなかさん{のことだから}、もうついているだろう。", "Knowing how strict Tanaka is about time, they're probably already there.", {
        near: [["だから", "That's just \"so\". For \"knowing Tanaka\", use のことだから."]],
      }),
      s("優しい彼女{のことだから}、きっと手伝ってくれるよ。", "やさしいかのじょ{のことだから}、きっとてつだってくれるよ。", "Knowing how kind she is, I'm sure she'll help.", {
        near: [["だから", "That's just \"so\". For \"knowing her\", use のことだから."]],
      }),
      s("あの人{のことだから}、また遅れてくるに違いない。", "あのひと{のことだから}、またおくれてくるにちがいない。", "Knowing them, they're bound to be late again.", {
        near: [["のことで", "That's \"about that person\". For \"knowing them\", use のことだから."]],
      }),
      s("真面目な君{のことだから}、心配していないよ。", "まじめなきみ{のことだから}、しんぱいしていないよ。", "You're so conscientious, I'm not worried.", {
        near: [["だから", "That's just \"so\". For \"knowing you\", use のことだから."]],
      }),
      s("忙しい部長{のことだから}、返事は遅くなるだろう。", "いそがしいぶちょう{のことだから}、へんじはおそくなるだろう。", "Knowing how busy the manager is, the reply will probably be slow.", {
        near: [["だから", "That's just \"so\". For \"knowing the manager\", use のことだから."]],
      }),
    ],
  }),

  point({
    id: "n2-ageku",
    title: "〜あげく(に)",
    meaning: "after all that, in the end (with a bad result)",
    structure: "Verb た-form + あげく(に) · Noun + の + あげく",
    related: ["n2-sue-ni", "n3-kekka"],
    explanation: `
**あげく** describes a long, troublesome process that ends badly: さんざん迷ったあげく、何も買わなかった, "after dithering endlessly, I ended up buying nothing".

The first half is usually something drawn out or repeated: worrying, arguing, getting lost, being dragged around. The second half is the disappointing or annoying outcome. There's often a note of frustration.

It follows a た-form, or a noun with の: 口論のあげく, "after a quarrel".

Compare 末に, which also follows a long process but usually ends in success, and 結果, which is neutral. The idiom あげくの果てに means "and to top it all off".
`,
    sentences: [
      s("さんざん迷った{あげく}、何も買わなかった。", "さんざんまよった{あげく}、なにもかわなかった。", "After dithering endlessly, I ended up buying nothing.", {
        accept: ["あげくに"],
        near: [["結果", "結果 is neutral. After a long process that ends badly, use あげく."]],
      }),
      s("長い時間話し合った{あげく}、結論が出なかった。", "ながいじかんはなしあった{あげく}、けつろんがでなかった。", "After talking it over for ages, we couldn't reach a conclusion.", {
        accept: ["あげくに"],
        near: [["結果", "結果 is neutral. After a long process that ends badly, use あげく."]],
      }),
      s("何度も道を間違えた{あげく}、約束の時間に遅れた。", "なんどもみちをまちがえた{あげく}、やくそくのじかんにおくれた。", "After taking wrong turns again and again, I ended up late.", {
        accept: ["あげくに"],
        near: [["末に", "末に usually ends in success. For a bad ending, use あげく."]],
      }),
      s("悩んだ{あげく}、留学をあきらめた。", "なやんだ{あげく}、りゅうがくをあきらめた。", "After agonising over it, I gave up on studying abroad.", {
        accept: ["あげくに"],
        near: [["結果", "結果 is neutral. After agonising, with a sad end, use あげく."]],
      }),
      s("彼は酔って騒いだ{あげく}、店の物を壊した。", "かれはよってさわいだ{あげく}、みせのものをこわした。", "He got drunk and rowdy, and in the end he broke things in the bar.", {
        accept: ["あげくに"],
        near: [["うえに", "That's \"on top of\". For \"and in the end\", use あげく."]],
      }),
    ],
  }),

  point({
    id: "n2-sue-ni",
    title: "〜末(に)",
    meaning: "after (a long process), finally",
    structure: "Verb た-form + 末(に) · Noun + の + 末(に)",
    related: ["n2-ageku", "n3-kekka"],
    explanation: `
**末** means "end", and **末に** describes the outcome reached after a long, difficult process: 長い話し合いの末、ようやく合意した, "after long discussions, we finally reached an agreement".

The first half stresses time and effort: thinking hard, struggling, fighting, researching. The outcome is usually a decision or an achievement, though it can be neutral.

It follows a た-form, or a noun with の: 苦労の末, "after much hardship". The に is optional.

Compare あげく, which is used when the long process ends badly, and 結果, which just states an outcome without stressing the struggle. On its own, 末 also means "the end of" a period: 月末, "the end of the month".
`,
    sentences: [
      s("長い話し合いの{末}、ようやく合意した。", "ながいはなしあいの{すえ}、ようやくごういした。", "After long discussions, we finally reached an agreement.", {
        accept: ["末に"],
        near: [["あげく", "あげく usually ends badly. For a hard-won result, use 末."]],
      }),
      s("いろいろ考えた{末に}、この大学に決めた。", "いろいろかんがえた{すえに}、このだいがくにきめた。", "After a lot of thought, I decided on this university.", {
        accept: ["末"],
        near: [["あげく", "あげく usually ends badly. For a considered decision, use 末に."]],
      }),
      s("苦労の{末}、店を開くことができた。", "くろうの{すえ}、みせをひらくことができた。", "After much hardship, I was able to open my own shop.", {
        accept: ["末に"],
        near: [["結果", "That works too. 末 stresses the long struggle."]],
      }),
      s("激しい戦いの{末}、チームは優勝した。", "はげしいたたかいの{すえ}、チームはゆうしょうした。", "After a fierce battle, the team won the championship.", {
        accept: ["末に"],
        near: [["あげく", "あげく usually ends badly. For a hard-won victory, use 末."]],
      }),
      s("三年の研究の{末}、新しい薬が完成した。", "さんねんのけんきゅうの{すえ}、あたらしいくすりがかんせいした。", "After three years of research, the new medicine was completed.", {
        accept: ["末に"],
        near: [["結果", "That works too. 末 stresses the long effort."]],
      }),
    ],
  }),

  point({
    id: "n2-koto-dashi",
    title: "〜ことだし",
    meaning: "since (among other things), so",
    structure: "Plain form + ことだし (な-adj + な · Noun + の / である)",
    related: ["n4-shi", "n4-node"],
    explanation: `
**ことだし** gives a reason for a suggestion or decision, softly implying there are other reasons too: 雨も止んだことだし、散歩に行こうか, "the rain's stopped, so shall we go for a walk?"

It's conversational and gentle. The second half is almost always a suggestion (ましょう, よう, ませんか) or the speaker's own decision (ます, ことにする).

It's related to し (N4), which lists reasons. ことだし picks one reason out and leaves the rest unsaid, which makes the suggestion sound natural and unforced.

The first half often contains も: 天気もいいことだし, 夜も遅いことだし. That も hints "and there are other reasons as well".
`,
    sentences: [
      s("雨も止んだ{ことだし}、散歩に行こうか。", "あめもやんだ{ことだし}、さんぽにいこうか。", "The rain's stopped, so shall we go for a walk?", {
        near: [["ことで", "ことで is \"by doing\". For a gentle reason, use ことだし."]],
      }),
      s("みんな揃った{ことだし}、始めましょう。", "みんなそろった{ことだし}、はじめましょう。", "Now that everyone's here, let's begin.", {
        near: [["ので", "That works, but ことだし is softer and hints at other reasons."]],
      }),
      s("天気もいい{ことだし}、外で食べよう。", "てんきもいい{ことだし}、そとでたべよう。", "The weather's nice, so let's eat outside.", {
        near: [["ので", "That works, but ことだし is softer and hints at other reasons."]],
      }),
      s("夜も遅い{ことだし}、そろそろ帰ります。", "よるもおそい{ことだし}、そろそろかえります。", "It's getting late, so I'll be heading home.", {
        near: [["ものだから", "That's an excuse. For a gentle reason behind a decision, use ことだし."]],
      }),
      s("仕事も終わった{ことだし}、飲みに行きませんか。", "しごともおわった{ことだし}、のみにいきませんか。", "Now that work's done, how about going for a drink?", {
        near: [["ので", "That works, but ことだし is softer and hints at other reasons."]],
      }),
    ],
  }),

  point({
    id: "n2-amari",
    title: "〜あまり(に)",
    meaning: "so (much) that, out of sheer",
    structure: "Noun + の + あまり · Verb dictionary form + あまり · あまりの + Noun",
    related: ["n3-hodo", "n3-sei-de"],
    explanation: `
**あまり** says an emotion or state went so far that it caused something unusual, usually unwanted: 緊張のあまり、何も言えなかった, "I was so nervous I couldn't say a thing".

After a noun, it takes の: 心配のあまり, うれしさのあまり. After a verb, the dictionary form: 心配するあまり, 集中するあまり.

**あまりの** before a noun describes an overwhelming quality: あまりの暑さに、倒れそうになった, "the heat was so intense I nearly collapsed". The に after the noun marks it as the cause.

It's the same あまり as "not very" (あまり〜ない), but here it means "excess". Compare ほど, which states degree more neutrally.
`,
    sentences: [
      s("緊張の{あまり}、何も言えなかった。", "きんちょうの{あまり}、なにもいえなかった。", "I was so nervous I couldn't say a thing.", {
        accept: ["あまりに"],
        near: [["せいで", "That works, but for \"out of sheer (feeling)\", use あまり."]],
      }),
      s("心配する{あまり}、眠れなかった。", "しんぱいする{あまり}、ねむれなかった。", "I was so worried I couldn't sleep.", {
        accept: ["あまりに"],
        near: [["ほど", "That works too. This point practises あまり."]],
      }),
      s("うれしさの{あまり}、泣いてしまった。", "うれしさの{あまり}、ないてしまった。", "I was so happy I cried.", {
        accept: ["あまりに"],
        near: [["せいで", "せいで blames. For \"out of sheer joy\", use あまり."]],
      }),
      s("仕事に集中する{あまり}、食事を忘れた。", "しごとにしゅうちゅうする{あまり}、しょくじをわすれた。", "I was so absorbed in work that I forgot to eat.", {
        accept: ["あまりに"],
        near: [["ために", "That's purpose. For \"so much that\", use あまり."]],
      }),
      s("{あまりの}暑さに、倒れそうになった。", "{あまりの}あつさに、たおれそうになった。", "The heat was so intense that I nearly collapsed.", {
        near: [["あまり", "Before a noun, it's あまりの."]],
      }),
    ],
  }),

  point({
    id: "n2-te-koso",
    title: "〜てこそ",
    meaning: "only by (doing), only when",
    structure: "Verb て-form + こそ · Noun + であってこそ",
    related: ["n3-koso", "n3-te-hajimete"],
    explanation: `
**てこそ** says something only becomes real, meaningful or possible through a particular condition: 自分でやってみてこそ、本当の意味がわかる, "only by trying it yourself do you understand what it really means".

It's こそ (N3) attached to a て-form, stressing that this condition, and no other, is the key. The second half is usually a value or an insight: わかる, 意味がある, 価値がある, できる.

After nouns and な-adjectives, it's であってこそ: 健康であってこそ、仕事ができる, "you can only work if you're healthy".

The set pattern てこその + noun means "that only exists because of": 家族がいてこその私です, "I am who I am because of my family".
`,
    sentences: [
      s("自分でやってみて{こそ}、本当の意味がわかる。", "じぶんでやってみて{こそ}、ほんとうのいみがわかる。", "Only by trying it yourself do you understand what it really means.", {
        near: [["から", "That's \"after\". For \"only by\", use てこそ."]],
      }),
      s("健康であって{こそ}、仕事ができる。", "けんこうであって{こそ}、しごとができる。", "You can only work if you're healthy.", {
        near: [["も", "That's \"even if\". For \"only if\", use てこそ."]],
      }),
      s("苦労して{こそ}、成功の喜びがある。", "くろうして{こそ}、せいこうのよろこびがある。", "The joy of success only comes through hard work.", {
        near: [["でも", "That's \"even if it means\". For \"only through\", use てこそ."]],
      }),
      s("家族がいて{こそ}の私です。", "かぞくがいて{こそ}のわたしです。", "I am who I am because of my family.", {
        near: [["から", "That's \"because\". The set pattern here is てこその."]],
      }),
      s("互いに信頼して{こそ}、いいチームになれる。", "たがいにしんらいして{こそ}、いいチームになれる。", "Only with mutual trust can you become a good team.", {
        near: [["から", "That's \"after\" or \"because\". For \"only with\", use てこそ."]],
      }),
    ],
  }),
];
