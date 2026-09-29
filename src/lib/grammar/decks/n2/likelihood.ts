import { point, s, word } from "../../build";

/** Could, couldn't, mustn't, can't help it, can't avoid it, and got away without it. */

export const likelihood = [
  point({
    id: "n2-kanenai",
    title: "〜かねない",
    meaning: "could well (happen), might (something bad)",
    structure: "Verb ます-stem + かねない",
    related: ["n2-kaneru", "n3-osore", "n4-kamoshirenai"],
    explanation: `
**かねない** warns that something bad could easily happen: そんな運転をしていたら、事故を起こしかねない, "driving like that, you could easily cause an accident".

It attaches to the ます-stem and is only used for unwelcome outcomes. It's a warning or a criticism, stronger than かもしれない and more personal than おそれがある.

It can also describe someone's character: あの人なら、そんなことも言いかねない, "that person is quite capable of saying something like that".

Be careful: despite the ない, it doesn't mean "can't". It's the opposite of かねる, which means "can't (bring myself to)". The double negative works out as "can't be ruled out".
`,
    sentences: [
      s("そんな運転をしていたら、事故を{起こしかねない}。", "そんなうんてんをしていたら、じこを{おこしかねない}。", "Driving like that, you could easily cause an accident.", {
        hint: "起こす",
        conj: { word: word("起こす", "おこす", "godan"), form: "polite", cut: "ます", tail: "かねない" },
        near: [["起こしかねる", "かねる is \"can't (bring myself to)\". For \"could well\", use かねない."]],
      }),
      s("このままでは、会社は{倒産しかねない}。", "このままでは、かいしゃは{とうさんしかねない}。", "At this rate, the company could go bankrupt.", {
        hint: "倒産する",
        conj: { word: word("倒産する", "とうさんする", "irregular"), form: "polite", cut: "ます", tail: "かねない" },
        near: [["倒産するかもしれない", "That works too, but かねない warns of a bad outcome."]],
      }),
      s("無理をすると、体を{壊しかねない}。", "むりをすると、からだを{こわしかねない}。", "If you overdo it, you could ruin your health.", {
        hint: "壊す",
        conj: { word: word("壊す", "こわす", "godan"), form: "polite", cut: "ます", tail: "かねない" },
        near: [["壊しかねる", "かねる is \"can't (bring myself to)\". For \"could well\", use かねない."]],
      }),
      s("あの人なら、そんなことも{言いかねない}。", "あのひとなら、そんなことも{いいかねない}。", "That person is quite capable of saying something like that.", {
        hint: "言う",
        conj: { word: word("言う", "いう", "godan"), form: "polite", cut: "ます", tail: "かねない" },
        near: [["言いかねる", "かねる is \"can't (bring myself to)\". For \"quite capable of\", use かねない."]],
      }),
      s("小さなミスが大きな問題に{なりかねない}。", "ちいさなミスがおおきなもんだいに{なりかねない}。", "A small mistake could turn into a big problem.", {
        hint: "なる",
        conj: { word: word("なる", "なる", "godan"), form: "polite", cut: "ます", tail: "かねない" },
        near: [["なりかねる", "かねる is \"can't (bring myself to)\". For \"could well\", use かねない."]],
      }),
    ],
  }),

  point({
    id: "n2-kaneru",
    title: "〜かねる",
    meaning: "can't, be unable to (politely)",
    structure: "Verb ます-stem + かねる / かねます",
    related: ["n2-kanenai", "n4-kenjougo"],
    explanation: `
**かねる** is a polite, indirect way to say you can't do something, usually because it would be difficult, inappropriate or against the rules: その質問にはお答えしかねます, "I'm afraid I'm unable to answer that question".

It's a staple of customer service and business: ご要望には応じかねます, "we're unable to meet your request". It softens a refusal: the speaker could, in theory, but can't bring themselves to.

It also expresses hesitation about agreeing or understanding: その意見には賛成しかねます, "I can't quite agree with that".

The set phrase 見るに見かねて means "unable to stand by and watch". Don't confuse かねる with かねない, which means "could well happen".
`,
    sentences: [
      s("その質問にはお答え{しかねます}。", "そのしつもんにはおこたえ{しかねます}。", "I'm afraid I'm unable to answer that question.", {
        near: [["しかねない", "かねない is \"could well\". For a polite \"can't\", use しかねます."]],
      }),
      s("申し訳ありませんが、ご要望には{応じかねます}。", "もうしわけありませんが、ごようぼうには{おうじかねます}。", "I'm sorry, but we're unable to meet your request.", {
        hint: "応じる, politely can't",
        conj: { word: word("応じる", "おうじる", "ichidan"), form: "polite", cut: "ます", tail: "かねます" },
        near: [["応じかねません", "That flips the meaning. For a polite \"can't\", use 応じかねます."]],
      }),
      s("その意見には{賛成しかねます}。", "そのいけんには{さんせいしかねます}。", "I'm afraid I can't agree with that opinion.", {
        hint: "賛成する, politely can't",
        conj: { word: word("賛成する", "さんせいする", "irregular"), form: "polite", cut: "ます", tail: "かねます" },
        near: [["賛成できかねます", "かねる goes on the verb itself: 賛成しかねます."]],
      }),
      s("見るに{見かねて}、手伝った。", "みるに{みかねて}、てつだった。", "I couldn't bear to just stand by and watch, so I helped.", {
        near: [["見かねない", "The set phrase is 見るに見かねて."]],
      }),
      s("彼の話は{理解しかねる}。", "かれのはなしは{りかいしかねる}。", "I find what he says hard to understand.", {
        hint: "理解する, can't",
        conj: { word: word("理解する", "りかいする", "irregular"), form: "polite", cut: "ます", tail: "かねる" },
        near: [["理解しかねない", "かねない is \"could well\". For \"can't\", use かねる."]],
      }),
    ],
  }),

  point({
    id: "n2-uru",
    title: "〜得る・〜得ない",
    meaning: "can, is possible; cannot, is impossible",
    structure: "Verb ます-stem + 得る (うる / える) · 得ない (えない)",
    related: ["n4-potential", "n2-kanenai"],
    explanation: `
**得る** after a ます-stem means something is possible: 事故は誰にでも起こり得る, "accidents can happen to anyone". It's formal and written, and is about possibility in principle rather than personal ability.

The dictionary form can be read うる or える; the other forms always use え: 得ない (えない), 得ます (えます).

The most common word built on it is **あり得ない**, "impossible, unthinkable", which is everyday slang for "no way!" among young people: あり得ない!

Other useful combinations: 考え得る, "conceivable"; 起こり得る, "could happen". For a person's ability, use the potential form or できる instead.
`,
    sentences: [
      s("そんなことは{あり得ない}。", "そんなことは{ありえない}。", "That's impossible.", {
        near: [["あり得る", "That's \"possible\". For \"impossible\", use あり得ない."]],
      }),
      s("事故は誰にでも{起こり得る}。", "じこはだれにでも{おこりうる}。", "Accidents can happen to anyone.", {
        accept: ["起こりえる", "おこりえる"],
        near: [["起こり得ない", "That's \"can't happen\". For \"can happen\", use 起こり得る."]],
      }),
      s("考え{得る}方法はすべて試した。", "かんがえ{うる}ほうほうはすべてためした。", "I've tried every method I can think of.", {
        accept: ["える"],
        near: [["られる", "That's the plain potential. In writing, 考え得る means \"conceivable\"."]],
      }),
      s("それは十分{あり得る}話だ。", "それはじゅうぶん{ありうる}はなしだ。", "That's entirely possible.", {
        accept: ["ありえる"],
        near: [["あり得ない", "That's \"impossible\". For \"possible\", use あり得る."]],
      }),
      s("彼が犯人だなんて、{あり得ない}よ。", "かれがはんにんだなんて、{ありえない}よ。", "Him, the culprit? No way.", {
        near: [["ありません", "That's \"there isn't\". For \"no way, impossible\", use あり得ない."]],
      }),
    ],
  }),

  point({
    id: "n2-zaru-wo-enai",
    title: "〜ざるを得ない",
    meaning: "have no choice but to, can't help but",
    structure: "Verb ない-form minus ない + ざるを得ない (する → せざる)",
    related: ["n3-shika-nai-verb", "n2-zu-ni-wa-irarenai", "n1-wo-yoginaku"],
    explanation: `
**ざるを得ない** means you're forced to do something, usually against your wishes: 雨なので、試合を中止せざるを得ない, "it's raining, so we have no choice but to cancel the match".

ざる is an old negative, so it's literally "can't get not doing". Build it from the ない-form: 従わない → 従わざる, 認めない → 認めざる. The exception is する, which becomes **せざる**: 中止せざるを得ない.

It's more formal and more reluctant than しかない. The situation leaves no choice: an order, the weather, evidence, circumstances.

With 認める and 言う, it's a common way to concede a point: 認めざるを得ない, "I have to admit it".
`,
    sentences: [
      s("雨なので、試合を{中止せざるを得ない}。", "あめなので、しあいを{ちゅうしせざるをえない}。", "It's raining, so we have no choice but to cancel the match.", {
        near: [["中止しざるを得ない", "する becomes せ: 中止せざるを得ない."]],
      }),
      s("上司の命令なので、{従わざるを得ない}。", "じょうしのめいれいなので、{したがわざるをえない}。", "It's my boss's order, so I have no choice but to obey.", {
        hint: "従う",
        conj: { word: word("従う", "したがう", "godan"), form: "negative", cut: "ない", tail: "ざるを得ない" },
        near: [["従うざるを得ない", "ざる goes on the ない-form: 従わざるを得ない."]],
      }),
      s("体調が悪いので、今日は{休まざるを得ない}。", "たいちょうがわるいので、きょうは{やすまざるをえない}。", "I'm not well, so I have no choice but to take today off.", {
        hint: "休む",
        conj: { word: word("休む", "やすむ", "godan"), form: "negative", cut: "ない", tail: "ざるを得ない" },
        near: [["休まなければならない", "That works too. ざるを得ない adds \"against my will\"."]],
      }),
      s("証拠があるから、{認めざるを得ない}。", "しょうこがあるから、{みとめざるをえない}。", "There's evidence, so I have to admit it.", {
        hint: "認める",
        conj: { word: word("認める", "みとめる", "ichidan"), form: "negative", cut: "ない", tail: "ざるを得ない" },
        near: [["認めるしかない", "That works too. This point practises 認めざるを得ない."]],
      }),
      s("終電がないので、タクシーで{帰らざるを得なかった}。", "しゅうでんがないので、タクシーで{かえらざるをえなかった}。", "The last train had gone, so I had no choice but to take a taxi home.", {
        hint: "帰る",
        conj: { word: word("帰る", "かえる", "godan"), form: "negative", cut: "ない", tail: "ざるを得なかった" },
        near: [["帰らざるを得ない", "It's about the past: 帰らざるを得なかった."]],
      }),
    ],
  }),

  point({
    id: "n2-zu-ni-wa-irarenai",
    title: "〜ずにはいられない",
    meaning: "can't help (doing), can't stop oneself",
    structure: "Verb ない-form minus ない + ずにはいられない (する → せずには)",
    related: ["n2-zaru-wo-enai", "n3-te-tamaranai", "n1-zu-ni-wa-okanai", "n1-wo-kinjienai"],
    explanation: `
**ずにはいられない** says an urge is too strong to resist: あの映画を見ると、泣かずにはいられない, "I can't help crying when I watch that film".

Build it from the ない-form, like ずに (N4): 泣かない → 泣かずには, 笑わない → 笑わずには. する becomes せずには: 心配せずにはいられない.

It's about the speaker's own emotional or instinctive reactions: crying, laughing, worrying, helping, being moved. The trigger is usually in the first half.

**ないではいられない** means the same and is a little more colloquial. Compare ざるを得ない, which is being forced by circumstances; ずにはいられない is being moved from inside.
`,
    sentences: [
      s("あの映画を見ると、{泣かずにはいられない}。", "あのえいがをみると、{なかずにはいられない}。", "I can't help crying when I watch that film.", {
        hint: "泣く",
        conj: { word: word("泣く", "なく", "godan"), form: "negative", cut: "ない", tail: "ずにはいられない" },
        accept: ["泣かないではいられない", "なかないではいられない"],
        near: [["泣かずにいられない", "Close. The set phrase keeps は: 泣かずにはいられない."]],
      }),
      s("彼の話を聞いて、{笑わずにはいられなかった}。", "かれのはなしをきいて、{わらわずにはいられなかった}。", "Listening to his story, I couldn't help laughing.", {
        hint: "笑う",
        conj: { word: word("笑う", "わらう", "godan"), form: "negative", cut: "ない", tail: "ずにはいられなかった" },
        near: [["笑わずにはいられない", "It's about the past: 笑わずにはいられなかった."]],
      }),
      s("そのニュースを聞いて、{心配せずにはいられない}。", "そのニュースをきいて、{しんぱいせずにはいられない}。", "Hearing that news, I can't help worrying.", {
        near: [["心配しずにはいられない", "する becomes せ: 心配せずにはいられない."]],
      }),
      s("困っている人を見ると、{助けずにはいられない}。", "こまっているひとをみると、{たすけずにはいられない}。", "When I see someone in trouble, I can't help stepping in.", {
        hint: "助ける",
        conj: { word: word("助ける", "たすける", "ichidan"), form: "negative", cut: "ない", tail: "ずにはいられない" },
        near: [["助けないでいられない", "The set phrase is 助けずにはいられない."]],
      }),
      s("美しい景色に、{感動せずにはいられなかった}。", "うつくしいけしきに、{かんどうせずにはいられなかった}。", "I couldn't help being moved by the beautiful scenery.", {
        near: [["感動しずにはいられなかった", "する becomes せ: 感動せずにはいられなかった."]],
      }),
    ],
  }),

  point({
    id: "n2-you-ga-nai",
    title: "〜ようがない",
    meaning: "there's no way to",
    structure: "Verb ます-stem + ようがない / ようもない",
    related: ["n2-you-ni-mo-nai", "n4-kata"],
    explanation: `
**ようがない** says there's no method or means to do something: 連絡先がわからないので、連絡しようがない, "I don't have their details, so there's no way to contact them". よう here means "way, method", related to 方 (N4).

It attaches to the ます-stem: 直しようがない, 説明しようがない. The reason is usually a missing piece of information or an impossible situation, not a lack of skill.

**ようもない** is a slightly stronger version. The set phrase どうしようもない means "hopeless, nothing can be done".

Compare the potential negative (直せない), which is about ability. ようがない says the means simply don't exist.
`,
    sentences: [
      s("連絡先がわからないので、{連絡しようがない}。", "れんらくさきがわからないので、{れんらくしようがない}。", "I don't have their details, so there's no way to contact them.", {
        hint: "連絡する",
        conj: { word: word("連絡する", "れんらくする", "irregular"), form: "polite", cut: "ます", tail: "ようがない" },
        near: [["連絡しようとしない", "That's \"refuses to\". For \"no way to\", use 連絡しようがない."]],
      }),
      s("こんなに壊れていては、{直しようがない}。", "こんなにこわれていては、{なおしようがない}。", "It's so badly broken that there's no way to fix it.", {
        hint: "直す",
        conj: { word: word("直す", "なおす", "godan"), form: "polite", cut: "ます", tail: "ようがない" },
        near: [["直せない", "That works too. This point practises 直しようがない."]],
      }),
      s("言葉では{説明しようがない}。", "ことばでは{せつめいしようがない}。", "There's no way to explain it in words.", {
        hint: "説明する",
        conj: { word: word("説明する", "せつめいする", "irregular"), form: "polite", cut: "ます", tail: "ようがない" },
        near: [["説明しにくい", "That's \"hard to\". For \"no way to\", use 説明しようがない."]],
      }),
      s("住所がわからないと、{届けようがない}。", "じゅうしょがわからないと、{とどけようがない}。", "Without the address, there's no way to deliver it.", {
        hint: "届ける",
        conj: { word: word("届ける", "とどける", "ichidan"), form: "polite", cut: "ます", tail: "ようがない" },
        near: [["届けようとしない", "That's \"refuses to\". For \"no way to\", use 届けようがない."]],
      }),
      s("今さら{謝りようもない}。", "いまさら{あやまりようもない}。", "It's far too late even to apologise now.", {
        hint: "謝る",
        conj: { word: word("謝る", "あやまる", "godan"), form: "polite", cut: "ます", tail: "ようもない" },
        accept: ["謝りようがない", "あやまりようがない"],
        near: [["謝れない", "That works too. This point practises 謝りようもない."]],
      }),
    ],
  }),

  point({
    id: "n2-you-ni-mo-nai",
    title: "〜ようにも〜ない",
    meaning: "can't, even if (I) wanted to",
    structure: "Verb volitional form + にも + potential negative",
    related: ["n2-you-ga-nai", "n4-volitional"],
    explanation: `
**ようにも〜ない** says you'd like to do something, but circumstances make it impossible: 忙しくて、休もうにも休めない, "I'm so busy I can't take a break even if I want to".

Take the volitional form (休もう, 買おう, 連絡しよう), add にも, then repeat the verb in the potential negative: 買おうにも買えない, 歩こうにも歩けない. With する-verbs, the second verb is often できない.

The first half gives the obstacle: no money, no time, an injury, bad weather, a forgotten phone number.

It's a vivid way to express frustration. たくても〜ない (休みたくても休めない) means much the same and is more common in speech.
`,
    sentences: [
      s("忙しくて、{休もうにも}休めない。", "いそがしくて、{やすもうにも}やすめない。", "I'm so busy I can't take a break even if I want to.", {
        hint: "休む",
        conj: { word: word("休む", "やすむ", "godan"), form: "volitional", tail: "にも" },
        near: [["休みたくても", "That works too. This point practises 休もうにも."]],
      }),
      s("お金がなくて、{買おうにも}買えない。", "おかねがなくて、{かおうにも}かえない。", "I have no money, so I couldn't buy it even if I wanted to.", {
        hint: "買う",
        conj: { word: word("買う", "かう", "godan"), form: "volitional", tail: "にも" },
        near: [["買うにも", "The pattern uses the volitional: 買おうにも."]],
      }),
      s("電話番号を忘れて、{連絡しようにも}できない。", "でんわばんごうをわすれて、{れんらくしようにも}できない。", "I've forgotten the number, so I can't get in touch even if I want to.", {
        hint: "連絡する",
        conj: { word: word("連絡する", "れんらくする", "irregular"), form: "volitional", tail: "にも" },
        near: [["連絡するにも", "The pattern uses the volitional: 連絡しようにも."]],
      }),
      s("足が痛くて、{歩こうにも}歩けない。", "あしがいたくて、{あるこうにも}あるけない。", "My feet hurt so much that I can't walk even if I try.", {
        hint: "歩く",
        conj: { word: word("歩く", "あるく", "godan"), form: "volitional", tail: "にも" },
        near: [["歩いても", "That's \"even if I walk\". For \"even if I try to\", use 歩こうにも."]],
      }),
      s("雪で、{出かけようにも}出かけられない。", "ゆきで、{でかけようにも}でかけられない。", "Because of the snow, I can't go out even if I want to.", {
        hint: "出かける",
        conj: { word: word("出かける", "でかける", "ichidan"), form: "volitional", tail: "にも" },
        near: [["出かけるにも", "The pattern uses the volitional: 出かけようにも."]],
      }),
    ],
  }),

  point({
    id: "n2-kkonai",
    title: "〜っこない",
    meaning: "no way (it'll happen), can't possibly",
    structure: "Verb ます-stem + っこない",
    register: "Casual.",
    related: ["n3-wake-ga-nai", "n4-hazu-ga-nai"],
    explanation: `
**っこない** is a casual, emphatic "no way": そんなの、できっこないよ, "there's no way I can do that". It attaches to the ます-stem, often of a potential verb: できっこない, 覚えられっこない, わかりっこない.

It's used in conversation to dismiss a possibility completely, often with a hint of frustration or defeatism.

The meaning is the same as わけがない and はずがない, but っこない is much more casual and a bit childish. Don't use it in formal speech or writing.

It usually goes with things that simply can't happen given the circumstances: winning the lottery, memorising something in a day, making it on time.
`,
    sentences: [
      s("そんなの、{できっこない}よ。", "そんなの、{できっこない}よ。", "There's no way I can do that.", {
        hint: "できる",
        conj: { word: word("できる", "できる", "ichidan"), form: "polite", cut: "ます", tail: "っこない" },
        near: [["できない", "That works, but っこない is a stronger, casual \"no way\"."]],
      }),
      s("一日で覚えられ{っこない}。", "いちにちでおぼえられ{っこない}。", "There's no way I can memorise it in a day.", {
        near: [["ない", "That's a plain \"can't\". For \"no way\", use っこない."]],
      }),
      s("宝くじなんて、当たり{っこない}。", "たからくじなんて、あたり{っこない}。", "There's no way you'll win the lottery.", {
        near: [["そうもない", "That's \"doesn't look like\". For \"no way\", use っこない."]],
      }),
      s("彼に言っても、わかり{っこない}。", "かれにいっても、わかり{っこない}。", "Even if you tell him, there's no way he'll understand.", {
        near: [["はずがない", "That works too, but in casual speech, っこない is common."]],
      }),
      s("今から走っても、間に合い{っこない}。", "いまからはしっても、まにあい{っこない}。", "Even if we run now, there's no way we'll make it.", {
        near: [["そうもない", "That's \"doesn't look like\". For \"no way\", use っこない."]],
      }),
    ],
  }),

  point({
    id: "n2-mai",
    title: "〜まい",
    meaning: "will not (resolve); probably not",
    structure: "Verb dictionary form + まい (する → するまい / すまい)",
    related: ["n4-volitional", "n5-deshou", "n1-you-ga-mai-ga", "n1-dewa-arumai-shi"],
    explanation: `
**まい** is an old negative volitional, and it has two uses.

**Resolve**: the speaker's determination not to do something: 二度とあの店には行くまい, "I'll never go to that shop again". It's often followed by と決めた or と思う.

**Negative guess**: "probably not", like ないだろう: こんなにいい天気なら、雨は降るまい, "with weather this good, it probably won't rain".

It follows the dictionary form of most verbs. With する and 来る, several forms exist (するまい, すまい, 来るまい, こまい).

It's formal and literary. In conversation, ないつもりだ and ないだろう are far more common, but まい appears in novels, speeches and set phrases.
`,
    sentences: [
      s("二度とあの店には{行くまい}。", "にどとあのみせには{いくまい}。", "I'll never go to that shop again.", {
        near: [["行かない", "That's plain. まい adds a firm resolution."]],
      }),
      s("もう彼には{頼むまい}と決めた。", "もうかれには{たのむまい}ときめた。", "I've decided I'll never ask him for anything again.", {
        near: [["頼まない", "That's plain. まい adds a firm resolution."]],
      }),
      s("こんなにいい天気なら、雨は{降るまい}。", "こんなにいいてんきなら、あめは{ふるまい}。", "With weather this good, it probably won't rain.", {
        near: [["降らないだろう", "That works too. まい is the written \"probably not\"."]],
      }),
      s("彼がそんなことを{言うまい}。", "かれがそんなことを{いうまい}。", "He surely wouldn't say such a thing.", {
        near: [["言わない", "That's plain. まい adds \"surely not\"."]],
      }),
      s("失敗を{繰り返すまい}と、毎日練習した。", "しっぱいを{くりかえすまい}と、まいにちれんしゅうした。", "Determined not to repeat my mistake, I practised every day.", {
        near: [["繰り返さない", "That's plain. まい adds determination: 繰り返すまい."]],
      }),
    ],
  }),

  point({
    id: "n2-gatai",
    title: "〜がたい",
    meaning: "hard to (accept, believe, forgive)",
    structure: "Verb ます-stem + がたい",
    related: ["n4-yasui-nikui", "n2-kaneru"],
    explanation: `
**がたい** means something is very hard or almost impossible to do, for emotional or moral reasons: 彼がうそをついたとは信じがたい, "it's hard to believe that he lied".

It attaches to the ます-stem of verbs of thinking and feeling: 信じる, 理解する, 受け入れる, 許す, 忘れる. It's a formal, written word.

Compare にくい (N4), which is used for practical difficulty: 読みにくい字, "handwriting that's hard to read". がたい is about the mind resisting: 受け入れがたい提案, "a proposal that's hard to accept".

It works like an い-adjective: 忘れがたい思い出, "an unforgettable memory". 得難い ("rare, precious") and ありがたい ("grateful") come from the same word.
`,
    sentences: [
      s("彼がうそをついたとは{信じがたい}。", "かれがうそをついたとは{しんじがたい}。", "It's hard to believe that he lied.", {
        hint: "信じる",
        conj: { word: word("信じる", "しんじる", "ichidan"), form: "polite", cut: "ます", tail: "がたい" },
        near: [["信じにくい", "にくい is practical difficulty. For \"hard to accept\", use 信じがたい."]],
      }),
      s("その提案は{受け入れがたい}。", "そのていあんは{うけいれがたい}。", "That proposal is hard to accept.", {
        hint: "受け入れる",
        conj: { word: word("受け入れる", "うけいれる", "ichidan"), form: "polite", cut: "ます", tail: "がたい" },
        near: [["受け入れにくい", "にくい is practical difficulty. For \"hard to accept\", use 受け入れがたい."]],
      }),
      s("彼の行動は{理解しがたい}。", "かれのこうどうは{りかいしがたい}。", "His behaviour is hard to understand.", {
        hint: "理解する",
        conj: { word: word("理解する", "りかいする", "irregular"), form: "polite", cut: "ます", tail: "がたい" },
        near: [["理解しにくい", "にくい is practical difficulty. For \"hard to fathom\", use 理解しがたい."]],
      }),
      s("{忘れがたい}思い出になった。", "{わすれがたい}おもいでになった。", "It became an unforgettable memory.", {
        hint: "忘れる",
        conj: { word: word("忘れる", "わすれる", "ichidan"), form: "polite", cut: "ます", tail: "がたい" },
        near: [["忘れにくい", "にくい is practical difficulty. For \"unforgettable\", use 忘れがたい."]],
      }),
      s("これは{許しがたい}行為だ。", "これは{ゆるしがたい}こういだ。", "This is an unforgivable act.", {
        hint: "許す",
        conj: { word: word("許す", "ゆるす", "godan"), form: "polite", cut: "ます", tail: "がたい" },
        near: [["許しにくい", "にくい is practical difficulty. For \"unforgivable\", use 許しがたい."]],
      }),
    ],
  }),

  point({
    id: "n2-te-naranai",
    title: "〜てならない",
    meaning: "can't help feeling, terribly",
    structure: "Verb て-form · い-adj くて · な-adj で + ならない",
    related: ["n3-te-tamaranai", "n2-te-wa-naranai"],
    explanation: `
**てならない** expresses a feeling that wells up and can't be controlled: 試験の結果が気になってならない, "I can't stop worrying about the exam results".

It's used with verbs and adjectives of emotion and sensation: 気になる, 心配だ, 残念だ, 不安だ, and with spontaneous verbs like 思える and 思い出される: 故郷のことが思い出されてならない.

It's like てたまらない and てしょうがない (N3), but more formal and written. It's especially common with 気がする: 何か隠しているような気がしてならない, "I can't shake the feeling they're hiding something".

Don't confuse it with てはならない ("must not"): the は makes all the difference.
`,
    sentences: [
      s("試験の結果が{気になってならない}。", "しけんのけっかが{きになってならない}。", "I can't stop worrying about the exam results.", {
        accept: ["気になってしょうがない", "気になってたまらない"],
        near: [["気になってはならない", "That's \"must not\". For \"can't help feeling\", use 気になってならない."]],
      }),
      s("故郷のことが思い出され{てならない}。", "こきょうのことがおもいだされ{てならない}。", "I can't stop thinking of my hometown.", {
        accept: ["てしょうがない", "てたまらない"],
        near: [["てはならない", "That's \"must not\". For \"can't help\", use てならない."]],
      }),
      s("彼が何か隠しているような気がし{てならない}。", "かれがなにかかくしているようなきがし{てならない}。", "I can't shake the feeling that he's hiding something.", {
        accept: ["てしょうがない", "てたまらない"],
        near: [["てはならない", "That's \"must not\". For \"can't help\", use てならない."]],
      }),
      s("残念{でならない}。", "ざんねん{でならない}。", "It's terribly disappointing.", {
        accept: ["でしょうがない", "でたまらない"],
        near: [["てならない", "After a な-adjective, it's でならない."]],
      }),
      s("将来が不安{でならない}。", "しょうらいがふあん{でならない}。", "I'm terribly anxious about the future.", {
        accept: ["でしょうがない", "でたまらない"],
        near: [["てならない", "After a な-adjective, it's でならない."]],
      }),
    ],
  }),

  point({
    id: "n2-te-wa-naranai",
    title: "〜てはならない",
    meaning: "must not (formal)",
    structure: "Verb て-form + はならない",
    related: ["n5-te-wa-ikenai", "n2-te-naranai"],
    explanation: `
**てはならない** is the formal, written version of てはいけない: この事件を忘れてはならない, "we must never forget this incident".

It's used for rules, principles and moral statements rather than personal instructions: in laws, speeches, notices, essays and the news. It often states what society or people in general must not do: 人を見た目で判断してはならない, "you must not judge people by appearances".

With 決して, it becomes very strong: 決してあきらめてはならない, "you must never give up".

Watch the similar pair: なくてはならない means "must", and てならない (without は) means "can't help feeling".
`,
    sentences: [
      s("この事件を忘れ{てはならない}。", "このじけんをわすれ{てはならない}。", "We must never forget this incident.", {
        accept: ["てはいけない"],
        near: [["てならない", "That's \"can't help\". For \"must not\", use てはならない."]],
      }),
      s("試験中は、話し{てはならない}。", "しけんちゅうは、はなし{てはならない}。", "Talking is not permitted during the exam.", {
        accept: ["てはいけない"],
        near: [["てならない", "That's \"can't help\". For \"must not\", use てはならない."]],
      }),
      s("同じ過ちを繰り返し{てはならない}。", "おなじあやまちをくりかえし{てはならない}。", "We must not repeat the same mistake.", {
        accept: ["てはいけない"],
        near: [["てならない", "That's \"can't help\". For \"must not\", use てはならない."]],
      }),
      s("人を見た目で判断し{てはならない}。", "ひとをみためではんだんし{てはならない}。", "You must not judge people by their appearance.", {
        accept: ["てはいけない"],
        near: [["なくてはならない", "That's \"must\". For \"must not\", use てはならない."]],
      }),
      s("決してあきらめ{てはならない}。", "けっしてあきらめ{てはならない}。", "You must never give up.", {
        accept: ["てはいけない"],
        near: [["なくてはならない", "That's \"must\". For \"must not\", use てはならない."]],
      }),
    ],
  }),

  point({
    id: "n2-zu-ni-sumu",
    title: "〜ずに済む・〜ないで済む",
    meaning: "get away without, not have to",
    structure: "Verb ない-form minus ない + ずに済む · ない-form + で済む",
    related: ["n4-zu-ni", "n5-nakute-mo-ii", "n1-zu-ni-wa-sumanai"],
    explanation: `
**ずに済む** means you managed to avoid something you expected to have to do, usually with relief: 友達が車で送ってくれたので、タクシーを使わずに済んだ, "a friend gave me a lift, so I didn't have to take a taxi". 済む means "to be settled, to end".

It's built like ずに (N4): 使わない → 使わずに済む. **ないで済む** means the same and is more common in speech.

The first half usually explains what saved you: booking early, having insurance, someone's help. It often appears in the past, 済んだ.

A related phrase, で済む after a noun, means "it ends with just that": 謝るだけで済む問題じゃない, "it's not a problem an apology will fix".
`,
    sentences: [
      s("友達が車で送ってくれたので、タクシーを{使わずに済んだ}。", "ともだちがくるまでおくってくれたので、タクシーを{つかわずにすんだ}。", "A friend gave me a lift, so I didn't have to take a taxi.", {
        hint: "使う",
        conj: { word: word("使う", "つかう", "godan"), form: "negative", cut: "ない", tail: "ずに済んだ" },
        accept: ["使わないで済んだ", "つかわないですんだ"],
        near: [["使わなくてよかった", "That works, but for \"got away without\", use 使わずに済んだ."]],
      }),
      s("早めに予約したので、{並ばずに済んだ}。", "はやめによやくしたので、{ならばずにすんだ}。", "I booked early, so I didn't have to queue.", {
        hint: "並ぶ",
        conj: { word: word("並ぶ", "ならぶ", "godan"), form: "negative", cut: "ない", tail: "ずに済んだ" },
        accept: ["並ばないで済んだ", "ならばないですんだ"],
        near: [["並ばなかった", "That's a plain \"didn't queue\". For \"didn't have to\", use 並ばずに済んだ."]],
      }),
      s("薬を飲めば、手術を{受けずに済む}。", "くすりをのめば、しゅじゅつを{うけずにすむ}。", "If you take the medicine, you won't need surgery.", {
        hint: "受ける",
        conj: { word: word("受ける", "うける", "ichidan"), form: "negative", cut: "ない", tail: "ずに済む" },
        accept: ["受けないで済む", "うけないですむ"],
        near: [["受けなくてもいい", "That works too. This point practises 受けずに済む."]],
      }),
      s("保険に入っていたので、お金を{払わずに済んだ}。", "ほけんにはいっていたので、おかねを{はらわずにすんだ}。", "I was insured, so I didn't have to pay anything.", {
        hint: "払う",
        conj: { word: word("払う", "はらう", "godan"), form: "negative", cut: "ない", tail: "ずに済んだ" },
        accept: ["払わないで済んだ", "はらわないですんだ"],
        near: [["払わなかった", "That's a plain \"didn't pay\". For \"didn't have to\", use 払わずに済んだ."]],
      }),
      s("謝ってくれたので、大きな問題に{ならずに済んだ}。", "あやまってくれたので、おおきなもんだいに{ならずにすんだ}。", "They apologised, so it didn't turn into a big problem.", {
        hint: "なる",
        conj: { word: word("なる", "なる", "godan"), form: "negative", cut: "ない", tail: "ずに済んだ" },
        accept: ["ならないで済んだ", "ならないですんだ"],
        near: [["ならなかった", "That's a plain \"didn't become\". For \"avoided becoming\", use ならずに済んだ."]],
      }),
    ],
  }),
];
