import { point, s, word } from "../../build";

/**
 * The rest of N3: adverbs that set up how a sentence will end (いったい…だろう,
 * めったに…ない, まるで…ようだ), and the patterns for near misses, wishes, feelings,
 * reproaches and "in order to".
 */

export const extras = [
  point({
    id: "n3-ittai",
    title: "いったい",
    meaning: "what on earth, (who / where / why) on earth",
    structure: "いったい + question word … (のだろう · のか)",
    related: ["n5-nani", "n3-marude"],
    explanation: `
**いったい** strengthens a question, adding surprise, frustration or bewilderment: いったい何があったんですか, "what on earth happened?"

It always comes with a question word: 何, 誰, どこ, どうして, いくら, どう. The sentence often ends with のだろう, んだろう or の: こんな時間にいったい誰だろう, "who on earth could it be at this hour?"

It's used when the speaker genuinely can't understand something, or is exasperated: いったいどこに行っていたの?, "where on earth have you been?"

Don't use it for an ordinary, neutral question. It's emphatic, and can sound accusing. In writing, it's often in kanji: 一体.
`,
    sentences: [
      s("{いったい}何があったんですか。", "{いったい}なにがあったんですか。", "What on earth happened?", {
        near: [["きっと", "きっと is \"surely\". For \"what on earth\", use いったい."]],
      }),
      s("こんな時間に{いったい}誰だろう。", "こんなじかんに{いったい}だれだろう。", "Who on earth could it be at this hour?", {
        near: [["たぶん", "たぶん is \"probably\". For \"who on earth\", use いったい."]],
      }),
      s("{いったい}どこに行っていたの?", "{いったい}どこにいっていたの?", "Where on earth have you been?", {
        near: [["きっと", "きっと is \"surely\". For \"where on earth\", use いったい."]],
      }),
      s("{いったい}いくら払ったんですか。", "{いったい}いくらはらったんですか。", "Just how much did you pay?", {
        near: [["たぶん", "たぶん is \"probably\". For \"just how much\", use いったい."]],
      }),
      s("{いったい}どうすればいいんだろう。", "{いったい}どうすればいいんだろう。", "What on earth am I supposed to do?", {
        near: [["まさか", "まさか is disbelief. For \"what on earth\", use いったい."]],
      }),
    ],
  }),

  point({
    id: "n3-marude",
    title: "まるで〜ようだ",
    meaning: "just like, as if",
    structure: "まるで + Noun の / Plain form + ようだ / みたいだ",
    related: ["n4-you-da", "n4-mitai"],
    explanation: `
**まるで** strengthens a comparison: "just like, exactly as if". まるで夢のようだ, "it's just like a dream".

It sets up the end of the sentence, which is almost always ようだ, ような, ように or みたいだ. The comparison is usually to something it isn't really: 彼はまるで子どものように泣いた, "he cried just like a child".

It's vivid and descriptive, common in stories and when expressing strong impressions: 今日はまるで夏のような暑さだ, "it's as hot as summer today".

In grammar questions, spotting まるで at the start tells you the sentence will end with ようだ or みたいだ.
`,
    sentences: [
      s("{まるで}夢のようだ。", "{まるで}ゆめのようだ。", "It's just like a dream.", {
        near: [["きっと", "きっと is \"surely\". For \"just like\", use まるで."]],
      }),
      s("彼は{まるで}子どものように泣いた。", "かれは{まるで}こどものようにないた。", "He cried just like a child.", {
        near: [["たぶん", "たぶん is \"probably\". For \"just like\", use まるで."]],
      }),
      s("今日は{まるで}夏のような暑さだ。", "きょうは{まるで}なつのようなあつさだ。", "It's as hot as summer today.", {
        near: [["たぶん", "たぶん is \"probably\". For \"just like\", use まるで."]],
      }),
      s("彼女は日本語が上手で、{まるで}日本人みたいだ。", "かのじょはにほんごがじょうずで、{まるで}にほんじんみたいだ。", "Her Japanese is so good, it's as if she were Japanese.", {
        near: [["きっと", "きっと is \"surely\". For \"as if\", use まるで."]],
      }),
      s("部屋は{まるで}誰も住んでいないように静かだった。", "へやは{まるで}だれもすんでいないようにしずかだった。", "The room was so quiet it was as if no one lived there.", {
        near: [["きっと", "きっと is \"surely\". For \"as if\", use まるで."]],
      }),
    ],
  }),

  point({
    id: "n3-yappari",
    title: "やはり・やっぱり",
    meaning: "as expected, sure enough; after all",
    structure: "やはり / やっぱり + statement",
    related: ["n3-sasuga", "n3-masaka"],
    explanation: `
**やはり**, or casually **やっぱり**, has two related uses.

**As expected, sure enough**: something turned out as you thought: やっぱり、雨が降ってきた, "sure enough, it started raining"; やはり彼が犯人だった, "as I suspected, he was the culprit".

**After all**: you come back to your original choice or feeling after considering others: 赤もいいけど、やっぱり青にします, "red's nice too, but I'll go with blue after all". 自分の家がやっぱり一番落ち着く, "there's no place like home".

It's one of the most frequent words in conversation. Compare まさか, "surely not", which is surprise; やっぱり confirms.
`,
    sentences: [
      s("{やっぱり}、雨が降ってきた。", "{やっぱり}、あめがふってきた。", "Sure enough, it started raining.", {
        accept: ["やはり"],
        near: [["まさか", "まさか is \"surely not\". For \"sure enough\", use やっぱり."]],
      }),
      s("赤もいいけど、{やっぱり}青にします。", "あかもいいけど、{やっぱり}あおにします。", "Red is nice too, but I'll go with blue after all.", {
        accept: ["やはり"],
        near: [["きっと", "きっと is a guess. For coming back to your choice, use やっぱり."]],
      }),
      s("{やはり}、彼が犯人だった。", "{やはり}、かれがはんにんだった。", "As I suspected, he was the culprit.", {
        accept: ["やっぱり"],
        near: [["まさか", "まさか is \"surely not\". For \"as I suspected\", use やはり."]],
      }),
      s("自分の家が{やっぱり}一番落ち着く。", "じぶんのいえが{やっぱり}いちばんおちつく。", "There's no place like home, after all.", {
        accept: ["やはり"],
        near: [["きっと", "きっと is a guess. For \"after all\", use やっぱり."]],
      }),
      s("行かないつもりだったけど、{やっぱり}行くことにした。", "いかないつもりだったけど、{やっぱり}いくことにした。", "I wasn't going to go, but in the end I decided to.", {
        accept: ["やはり"],
        near: [["せっかく", "せっかく is about not wasting effort. For \"after all\", use やっぱり."]],
      }),
    ],
  }),

  point({
    id: "n3-narubeku",
    title: "なるべく",
    meaning: "as much as possible, if possible",
    structure: "なるべく + Verb / adjective",
    related: ["n4-you-ni-suru", "n2-dake-no"],
    explanation: `
**なるべく** means "as much as possible" or "where possible": なるべく早く来てください, "please come as early as you can".

It's softer than an absolute rule. It asks for effort within reason: なるべく野菜を食べるようにしている, "I try to eat vegetables where I can". With a negative, it's "avoid if you can": 夜はなるべく外に出ないでください.

It's interchangeable with **できるだけ** in almost every sentence.

Compare 必ず ("without fail") and 絶対に ("absolutely"), which are strict. なるべく leaves room: do your best, but it's not a rule. In polite requests, なるべく softens what you're asking, so it's very common at work.
`,
    sentences: [
      s("{なるべく}早く来てください。", "{なるべく}はやくきてください。", "Please come as early as you can.", {
        accept: ["できるだけ"],
        near: [["きっと", "きっと is \"surely\". For \"as … as possible\", use なるべく."]],
      }),
      s("{なるべく}野菜を食べるようにしている。", "{なるべく}やさいをたべるようにしている。", "I try to eat vegetables as much as possible.", {
        accept: ["できるだけ"],
        near: [["必ず", "必ず is \"without fail\". For \"as much as possible\", use なるべく.", "かならず"]],
      }),
      s("夜は{なるべく}外に出ないでください。", "よるは{なるべく}そとにでないでください。", "Please avoid going out at night as far as possible.", {
        accept: ["できるだけ"],
        near: [["絶対に", "That's \"absolutely never\". For \"as far as possible\", use なるべく.", "ぜったいに"]],
      }),
      s("荷物は{なるべく}少なくしたほうがいい。", "にもつは{なるべく}すくなくしたほうがいい。", "You'd better keep your luggage as light as you can.", {
        accept: ["できるだけ"],
        near: [["きっと", "きっと is \"surely\". For \"as … as possible\", use なるべく."]],
      }),
      s("{なるべく}日本語で話しましょう。", "{なるべく}にほんごではなしましょう。", "Let's speak in Japanese as much as we can.", {
        accept: ["できるだけ"],
        near: [["必ず", "必ず is \"without fail\". For \"as much as we can\", use なるべく.", "かならず"]],
      }),
    ],
  }),

  point({
    id: "n3-metta-ni",
    title: "めったに〜ない",
    meaning: "rarely, hardly ever",
    structure: "めったに + negative",
    related: ["n5-frequency", "n5-amari-zenzen"],
    explanation: `
**めったに** with a negative means "rarely, hardly ever": 父はめったに怒らない, "my father rarely gets angry".

It always needs a negative verb or ない. Without it, the sentence doesn't work: not めったに怒る.

On the scale of frequency: いつも (always) → よく (often) → 時々 (sometimes) → たまに (occasionally) → めったに〜ない (hardly ever) → 全然〜ない (never). たまに is positive and occasional; めったに is negative and rare.

こんなチャンスはめったにない, "chances like this don't come along often", is a common set phrase. In grammar questions, a めったに at the start is a strong clue that the verb must end in ない.
`,
    sentences: [
      s("父は{めったに}怒らない。", "ちちは{めったに}おこらない。", "My father rarely gets angry.", {
        near: [["たまに", "たまに is \"now and then\" with a positive. For \"rarely\", with a negative, use めったに."]],
      }),
      s("この辺りでは雪は{めったに}降らない。", "このあたりではゆきは{めったに}ふらない。", "It rarely snows around here.", {
        near: [["あまり", "That works too. めったに is rarer: \"hardly ever\"."]],
      }),
      s("最近は{めったに}映画を見ない。", "さいきんは{めったに}えいがをみない。", "These days I hardly ever watch films.", {
        near: [["たまに", "たまに is \"now and then\" with a positive. For \"hardly ever\", use めったに."]],
      }),
      s("彼女は{めったに}休まない。", "かのじょは{めったに}やすまない。", "She hardly ever takes time off.", {
        near: [["全然", "全然 is \"never at all\". For \"hardly ever\", use めったに.", "ぜんぜん"]],
      }),
      s("こんなチャンスは{めったに}ない。", "こんなチャンスは{めったに}ない。", "Chances like this don't come along often.", {
        near: [["たまに", "たまに is \"now and then\" with a positive. For \"rarely\", use めったに."]],
      }),
    ],
  }),

  point({
    id: "n3-chittomo",
    title: "ちっとも〜ない・少しも〜ない",
    meaning: "not at all, not in the least",
    structure: "ちっとも / 少しも + negative",
    related: ["n5-amari-zenzen", "n3-metta-ni"],
    explanation: `
**ちっとも** with a negative means "not at all": この映画はちっとも面白くない, "this film isn't the least bit interesting".

It's like 全然 (N5), but more emotional and a little childish or complaining in tone. **少しも** means the same and is more neutral.

Like めったに, it needs a negative: ちっとも知らなかった, "I had no idea at all"; 雨がちっともやまない, "the rain just won't stop".

Compare あまり〜ない, "not very", which is mild. ちっとも is total, and usually expresses frustration or surprise. Like 全然, it needs a negative, so a positive verb after it is always wrong.
`,
    sentences: [
      s("この映画は{ちっとも}面白くない。", "このえいがは{ちっとも}おもしろくない。", "This film isn't the least bit interesting.", {
        accept: ["全然", "少しも"],
        near: [["あまり", "あまり is \"not very\". For \"not at all\", use ちっとも."]],
      }),
      s("彼は{ちっとも}話を聞いてくれない。", "かれは{ちっとも}はなしをきいてくれない。", "He doesn't listen to me at all.", {
        accept: ["全然", "少しも"],
        near: [["あまり", "あまり is \"not very\". For \"not at all\", use ちっとも."]],
      }),
      s("雨が{ちっとも}やまない。", "あめが{ちっとも}やまない。", "The rain just won't stop.", {
        accept: ["全然", "少しも"],
        near: [["めったに", "めったに is \"rarely\". For \"not at all\", use ちっとも."]],
      }),
      s("何度練習しても、{ちっとも}上手にならない。", "なんどれんしゅうしても、{ちっとも}じょうずにならない。", "However much I practise, I don't get any better at all.", {
        accept: ["全然", "少しも"],
        near: [["あまり", "あまり is \"not very\". For \"not at all\", use ちっとも."]],
      }),
      s("{ちっとも}知らなかった。", "{ちっとも}しらなかった。", "I had no idea at all.", {
        accept: ["全然", "少しも"],
        near: [["たまに", "たまに is \"now and then\". For \"not at all\", use ちっとも."]],
      }),
    ],
  }),

  point({
    id: "n3-doushitemo",
    title: "どうしても",
    meaning: "no matter what; just (can't)",
    structure: "どうしても + たい / なければならない · どうしても + negative",
    related: ["n4-question-temo", "n3-ikura-temo"],
    explanation: `
**どうしても** has two sides.

With a wish or an obligation, it means "no matter what, at all costs": どうしても日本に留学したい, "I really want to study in Japan, whatever it takes"; どうしても今日中に終わらせなければならない.

With a negative, it means "just can't, however hard I try": この問題がどうしてもわからない, "I just can't understand this problem"; 彼の名前がどうしても思い出せない.

It's the fixed form of どう + しても, "whatever I do". どうしても〜と言うなら means "if you insist on".

Don't confuse it with どうやって ("how, by what means") or どうも ("somehow, really"). In a grammar question, look at the ending: a wish or a must means "no matter what", a negative means "just can't".
`,
    sentences: [
      s("{どうしても}日本に留学したい。", "{どうしても}にほんにりゅうがくしたい。", "I really want to study in Japan, no matter what.", {
        near: [["どうやって", "That's \"how, by what means\". For \"no matter what\", use どうしても."]],
      }),
      s("この問題が{どうしても}わからない。", "このもんだいが{どうしても}わからない。", "I just can't understand this problem, however hard I try.", {
        near: [["どうも", "That's \"somehow\". For \"just can't\", use どうしても."]],
      }),
      s("{どうしても}今日中に終わらせなければならない。", "{どうしても}きょうじゅうにおわらせなければならない。", "I absolutely have to finish it today.", {
        near: [["どうやって", "That's \"how, by what means\". For \"absolutely\", use どうしても."]],
      }),
      s("彼の名前が{どうしても}思い出せない。", "かれのなまえが{どうしても}おもいだせない。", "I just can't remember his name.", {
        near: [["どうも", "That's \"somehow\". For \"just can't\", use どうしても."]],
      }),
      s("{どうしても}行くと言うなら、止めません。", "{どうしても}いくというなら、とめません。", "If you insist on going, I won't stop you.", {
        near: [["どうやって", "That's \"how, by what means\". For \"insist\", use どうしても."]],
      }),
    ],
  }),

  point({
    id: "n3-totemo-nai",
    title: "とても〜ない",
    meaning: "can't possibly, quite impossible",
    structure: "とても + potential negative / 無理だ",
    related: ["n3-chittomo", "n2-kkonai"],
    explanation: `
With a negative, **とても** means "can't possibly": こんなにたくさん、とても一人では食べられない, "there's no way I can eat this much on my own".

It's the same とても as "very", but with a potential negative (食べられない, 買えない, 信じられない) or 無理だ it becomes "by no means, quite impossible".

It expresses that something is beyond the speaker's ability or limits, often modestly: 今の私にはとてもできない, "it's quite beyond me at the moment".

Compare ちっとも ("not at all"), which is about degree, and あまり ("not very"). とても〜ない is about possibility.
`,
    sentences: [
      s("こんなにたくさん、{とても}一人では食べられない。", "こんなにたくさん、{とても}ひとりではたべられない。", "There's no way I can eat this much on my own.", {
        near: [["あまり", "あまり is \"not very\". For \"can't possibly\", use とても."]],
      }),
      s("一日で読むなんて、{とても}無理だ。", "いちにちでよむなんて、{とても}むりだ。", "Reading it in a day? That's quite impossible.", {
        near: [["ちっとも", "That's \"not at all\". For \"quite impossible\", use とても."]],
      }),
      s("そんな高い物は、{とても}買えない。", "そんなたかいものは、{とても}かえない。", "There's no way I can afford something that expensive.", {
        near: [["あまり", "あまり is \"not very\". For \"can't possibly\", use とても."]],
      }),
      s("彼の話は{とても}信じられない。", "かれのはなしは{とても}しんじられない。", "I can't possibly believe his story.", {
        near: [["めったに", "めったに is \"rarely\". For \"can't possibly\", use とても."]],
      }),
      s("今の私には{とても}できない。", "いまのわたしには{とても}できない。", "It's quite beyond me at the moment.", {
        near: [["あまり", "あまり is \"not very\". For \"quite beyond me\", use とても."]],
      }),
    ],
  }),

  point({
    id: "n3-itsunomanika",
    title: "いつの間にか",
    meaning: "before I knew it, without noticing",
    structure: "いつの間にか + change or result",
    related: ["n4-uchi-ni", "n4-te-shimau"],
    explanation: `
**いつの間にか** means something happened without anyone noticing when: いつの間にか、寝てしまった, "I fell asleep before I knew it". Literally, "at some point in the interval".

The second half is a change or a result that's already complete: it got dark, the children grew up, the wallet disappeared, I started dreaming in Japanese.

It often pairs with てしまう or ていた, emphasising that the change is already done: いつの間にか、外が暗くなっていた.

Compare いつか ("some day") and いつも ("always"). いつの間にか looks back at a change you missed.
`,
    sentences: [
      s("{いつの間にか}、寝てしまった。", "{いつのまにか}、ねてしまった。", "I fell asleep before I knew it.", {
        near: [["いつか", "いつか is \"some day\". For \"before I knew it\", use いつの間にか."]],
      }),
      s("{いつの間にか}、外が暗くなっていた。", "{いつのまにか}、そとがくらくなっていた。", "Before I knew it, it had got dark outside.", {
        near: [["いつも", "いつも is \"always\". For \"before I knew it\", use いつの間にか."]],
      }),
      s("子どもたちは{いつの間にか}大きくなった。", "こどもたちは{いつのまにか}おおきくなった。", "The children have grown up without my noticing.", {
        near: [["いつか", "いつか is \"some day\". For \"without noticing\", use いつの間にか."]],
      }),
      s("財布が{いつの間にか}なくなっていた。", "さいふが{いつのまにか}なくなっていた。", "My wallet had disappeared without my noticing.", {
        near: [["いつも", "いつも is \"always\". For \"without noticing\", use いつの間にか."]],
      }),
      s("{いつの間にか}、日本語で夢を見るようになった。", "{いつのまにか}、にほんごでゆめをみるようになった。", "Before I knew it, I'd started dreaming in Japanese.", {
        near: [["いつか", "いつか is \"some day\". For \"before I knew it\", use いつの間にか."]],
      }),
    ],
  }),

  point({
    id: "n3-tashika",
    title: "たしか",
    meaning: "if I remember right, I believe",
    structure: "たしか + (half-remembered fact)",
    related: ["n3-kke", "n4-hazu"],
    explanation: `
**たしか** at the start of a statement means "if I remember correctly": 会議はたしか三時からだったと思う, "I think the meeting was from three, if I remember right".

It hedges a memory: the speaker is fairly sure, but not certain. It often pairs with と思う, はずだ or だった.

It comes from 確か, "certain", and as a な-adjective 確かな means "reliable, certain": 確かな情報, "reliable information". The adverb use is almost the opposite: it signals slight uncertainty.

Compare きっと, a confident guess about something you can't know, and やっぱり, which confirms something. たしか is about memory.
`,
    sentences: [
      s("会議は{たしか}三時からだったと思う。", "かいぎは{たしか}さんじからだったとおもう。", "I think the meeting was from three, if I remember right.", {
        near: [["きっと", "きっと is a confident guess. For \"if I remember right\", use たしか."]],
      }),
      s("彼は{たしか}大阪出身だった。", "かれは{たしか}おおさかしゅっしんだった。", "He's from Osaka, if I'm not mistaken.", {
        near: [["必ず", "必ず is \"without fail\". For \"if I remember right\", use たしか.", "かならず"]],
      }),
      s("その本は{たしか}机の上にあったはずだ。", "そのほんは{たしか}つくえのうえにあったはずだ。", "That book should be on the desk, if I remember right.", {
        near: [["きっと", "きっと is a confident guess. For \"if I remember right\", use たしか."]],
      }),
      s("{たしか}、ここに鍵を置いたんだけど。", "{たしか}、ここにかぎをおいたんだけど。", "I'm pretty sure I put my keys here.", {
        near: [["やっぱり", "やっぱり is \"as expected\". For \"I'm pretty sure\", use たしか."]],
      }),
      s("田中さんの誕生日は{たしか}五月だった。", "たなかさんのたんじょうびは{たしか}ごがつだった。", "Tanaka's birthday is in May, if I remember right.", {
        near: [["きっと", "きっと is a confident guess. For \"if I remember right\", use たしか."]],
      }),
    ],
  }),

  point({
    id: "n3-tsuini",
    title: "ついに・とうとう",
    meaning: "at last, finally; in the end",
    structure: "ついに / とうとう + final result",
    related: ["n2-youyaku", "n2-sue-ni"],
    explanation: `
**ついに** and **とうとう** mean "at last, finally", after a long time or a long process: 十年かかって、ついに夢がかなった, "after ten years, my dream finally came true".

Unlike やっと, which is only for good things you were waiting for, とうとう and ついに work for bad outcomes too: 待っていたけど、彼はとうとう来なかった, "I waited, but in the end he never came".

ついに is a little more dramatic and written; とうとう is more conversational.

Compare いよいよ, "at last (something is about to start)", which looks forward. ついに and とうとう mark the moment of arrival.
`,
    sentences: [
      s("十年かかって、{ついに}夢がかなった。", "じゅうねんかかって、{ついに}ゆめがかなった。", "After ten years, my dream finally came true.", {
        accept: ["とうとう", "やっと"],
        near: [["もう", "もう is \"already\". For \"at last\", use ついに."]],
      }),
      s("長い工事が{とうとう}終わった。", "ながいこうじが{とうとう}おわった。", "The long construction work is finally over.", {
        accept: ["ついに", "やっと"],
        near: [["もう", "もう is \"already\". For \"finally\", use とうとう."]],
      }),
      s("待っていたけど、彼は{とうとう}来なかった。", "まっていたけど、かれは{とうとう}こなかった。", "I waited, but in the end he never came.", {
        accept: ["ついに"],
        near: [["やっと", "やっと is for something good you waited for. For \"in the end, never\", use とうとう."]],
      }),
      s("{ついに}、明日から夏休みだ。", "{ついに}、あしたからなつやすみだ。", "At last, the summer holidays start tomorrow.", {
        accept: ["いよいよ", "とうとう"],
        near: [["もう", "もう is \"already\". For \"at last\", use ついに."]],
      }),
      s("何度も失敗したが、{ついに}成功した。", "なんどもしっぱいしたが、{ついに}せいこうした。", "I failed many times, but I finally succeeded.", {
        accept: ["とうとう", "やっと"],
        near: [["もう", "もう is \"already\". For \"finally\", use ついに."]],
      }),
    ],
  }),

  point({
    id: "n3-tokoro-datta",
    title: "〜ところだった",
    meaning: "nearly, almost (but didn't)",
    structure: "Verb dictionary form + ところだった (often with もう少しで)",
    related: ["n4-tokoro", "n3-kake"],
    explanation: `
**ところだった** means something almost happened, but didn't: 寝坊して、遅刻するところだった, "I overslept and nearly ended up late".

It's the past of ところだ ("about to"), and it follows the dictionary form. It's often paired with もう少しで ("a little more and") or 危なかった ("that was close"): もう少しで車にひかれるところだった.

It's usually for narrow escapes from something bad. With a condition, it describes what would have happened: 電話してくれなかったら、約束を忘れるところでした.

Compare はずだった ("was supposed to"), which is about expectations, and かけた (N2), "started to, nearly". Remember the dictionary form: it's 遅刻するところだった, not 遅刻したところだった, which means something else.
`,
    sentences: [
      s("寝坊して、遅刻する{ところだった}。", "ねぼうして、ちこくする{ところだった}。", "I overslept and nearly ended up late.", {
        near: [["ところだ", "ところだ is \"about to\". For \"nearly (but didn't)\", use ところだった."]],
      }),
      s("もう少しで車にひかれる{ところだった}。", "もうすこしでくるまにひかれる{ところだった}。", "I was very nearly hit by a car.", {
        near: [["はずだった", "はずだった is \"was supposed to\". For \"nearly\", use ところだった."]],
      }),
      s("危なかった。財布を忘れる{ところだった}。", "あぶなかった。さいふをわすれる{ところだった}。", "That was close. I nearly forgot my wallet.", {
        near: [["ところだ", "ところだ is \"about to\". For \"nearly (but didn't)\", use ところだった."]],
      }),
      s("電話してくれなかったら、約束を忘れる{ところでした}。", "でんわしてくれなかったら、やくそくをわすれる{ところでした}。", "If you hadn't called, I'd have forgotten our appointment.", {
        near: [["ところです", "It's about the past: ところでした."]],
      }),
      s("気づかなかったら、大変なことになる{ところだった}。", "きづかなかったら、たいへんなことになる{ところだった}。", "If I hadn't noticed, it would have been a disaster.", {
        near: [["はずだった", "はずだった is \"was supposed to\". For \"would have\", use ところだった."]],
      }),
    ],
  }),

  point({
    id: "n3-tate",
    title: "〜たて",
    meaning: "freshly (done), just (made)",
    structure: "Verb ます-stem + たて (の + Noun)",
    related: ["n4-ta-bakari"],
    explanation: `
**たて** after a ます-stem means something has only just been done, and is still fresh: 焼きたてのパン, "freshly baked bread"; できたての料理, "freshly made food".

It works like a noun and takes の before another noun. It's common with food (焼きたて, 揚げたて, 取れたて) and for things that are brand new (塗りたてのペンキ, "wet paint"; 大学を出たての新人, "a new graduate").

Compare たばかり (N4), which is "just did" for any action and works as a verb phrase. たて is more limited and describes a fresh state, usually positive.

You'll see it on shop signs and menus all the time.
`,
    sentences: [
      s("{焼きたて}のパンはおいしい。", "{やきたて}のパンはおいしい。", "Freshly baked bread is delicious.", {
        hint: "焼く, freshly",
        conj: { word: word("焼く", "やく", "godan"), form: "polite", cut: "ます", tail: "たて" },
        near: [["焼いた", "That's just \"baked\". For \"freshly baked\", use 焼きたて."]],
      }),
      s("{できたて}の料理をどうぞ。", "{できたて}のりょうりをどうぞ。", "Please enjoy the food while it's fresh.", {
        hint: "できる, freshly",
        conj: { word: word("できる", "できる", "ichidan"), form: "polite", cut: "ます", tail: "たて" },
        near: [["できた", "That's just \"made\". For \"freshly made\", use できたて."]],
      }),
      s("{塗りたて}のペンキに注意。", "{ぬりたて}のペンキにちゅうい。", "Caution: wet paint.", {
        hint: "塗る, freshly",
        conj: { word: word("塗る", "ぬる", "godan"), form: "polite", cut: "ます", tail: "たて" },
        near: [["塗った", "That's just \"painted\". For \"freshly painted\", use 塗りたて."]],
      }),
      s("彼は大学を{出たて}の新人だ。", "かれはだいがくを{でたて}のしんじんだ。", "He's a new recruit, fresh out of university.", {
        hint: "出る, freshly",
        conj: { word: word("出る", "でる", "ichidan"), form: "polite", cut: "ます", tail: "たて" },
        near: [["出た", "That's just \"left\". For \"fresh out of\", use 出たて."]],
      }),
      s("{取れたて}の野菜を売っています。", "{とれたて}のやさいをうっています。", "We sell freshly picked vegetables.", {
        hint: "取れる, freshly",
        conj: { word: word("取れる", "とれる", "ichidan"), form: "polite", cut: "ます", tail: "たて" },
        near: [["取れた", "That's just \"picked\". For \"freshly picked\", use 取れたて."]],
      }),
    ],
  }),

  point({
    id: "n3-mo-ba-mo",
    title: "〜も〜ば〜も",
    meaning: "both … and; some … and some",
    structure: "Noun も + ば-form、Noun も + Verb",
    related: ["n4-shi", "n4-ba"],
    explanation: `
**も〜ば〜も** lists two things that are both true: 彼はお金もあれば、時間もある, "he has both money and time".

Each item takes も, and the first verb goes into the ば-form, often the same verb repeated: あれば…ある, いれば…いる.

It also describes variety: 人生にはいい時もあれば、悪い時もある, "in life there are good times and bad times"; 賛成する人もいれば、反対する人もいる, "some people are for it, and some against".

It's similar to し (N4) and to て-form lists, but more balanced and rhythmic. In grammar questions, spotting the first も is the clue that a ば-form is coming.
`,
    sentences: [
      s("彼はお金も{あれば}、時間もある。", "かれはおかねも{あれば}、じかんもある。", "He has both money and time.", {
        near: [["あって", "That works too. This point practises the ば-form: あれば."]],
      }),
      s("人生にはいい時も{あれば}、悪い時もある。", "じんせいにはいいときも{あれば}、わるいときもある。", "In life, there are good times and bad times.", {
        near: [["あるし", "That works too. This point practises the ば-form: あれば."]],
      }),
      s("彼女は歌も{歌えば}、ピアノも弾く。", "かのじょはうたも{うたえば}、ピアノもひく。", "She sings, and she plays the piano too.", {
        hint: "歌う",
        conj: { word: word("歌う", "うたう", "godan"), form: "ba" },
        near: [["歌って", "That works too. This point practises the ば-form: 歌えば."]],
      }),
      s("この町は海も{あれば}、山もある。", "このまちはうみも{あれば}、やまもある。", "This town has both the sea and the mountains.", {
        near: [["あって", "That works too. This point practises the ば-form: あれば."]],
      }),
      s("賛成する人も{いれば}、反対する人もいる。", "さんせいするひとも{いれば}、はんたいするひともいる。", "Some people are for it, and some are against.", {
        near: [["いて", "That works too. This point practises the ば-form: いれば."]],
      }),
    ],
  }),

  point({
    id: "n3-you-na-ki-ga-suru",
    title: "〜ような気がする",
    meaning: "I have a feeling that, it feels as if",
    structure: "Plain form + ような気がする (Noun の · な-adj な)",
    related: ["n4-ga-suru", "n4-you-da"],
    explanation: `
**ような気がする** expresses a vague feeling or impression, without much evidence: どこかで会ったような気がする, "I feel like I've met you somewhere".

It's softer than と思う: the speaker isn't making a claim, just reporting a hunch. 明日は雨が降るような気がする, "I have a feeling it'll rain tomorrow".

ような is often dropped, especially in speech: 会った気がする means the same. In the past, it's ような気がした.

It's built on 気がする (N4, "a feeling happens"). Compare ように見える, which is based on how something looks; ような気がする is an inner sense. It's also a polite way to disagree softly: ちょっと違うような気がします, "I feel it might be a little different".
`,
    sentences: [
      s("どこかで会った{ような気がする}。", "どこかであった{ようなきがする}。", "I feel like I've met you somewhere.", {
        accept: ["気がする"],
        near: [["ようにする", "That's \"make sure to\". For \"I have a feeling\", use ような気がする."]],
      }),
      s("明日は雨が降る{ような気がする}。", "あしたはあめがふる{ようなきがする}。", "I have a feeling it'll rain tomorrow.", {
        accept: ["気がする"],
        near: [["ようにする", "That's \"make sure to\". For \"I have a feeling\", use ような気がする."]],
      }),
      s("誰かに見られている{ような気がした}。", "だれかにみられている{ようなきがした}。", "I felt as if someone was watching me.", {
        accept: ["気がした"],
        near: [["ような気がする", "It's about the past: ような気がした."]],
      }),
      s("何か忘れている{ような気がする}。", "なにかわすれている{ようなきがする}。", "I feel like I'm forgetting something.", {
        accept: ["気がする"],
        near: [["ように見える", "That's how something looks. For a feeling you have, use ような気がする."]],
      }),
      s("前より日本語が上手になった{ような気がする}。", "まえよりにほんごがじょうずになった{ようなきがする}。", "I feel like my Japanese has got better than before.", {
        accept: ["気がする"],
        near: [["ように見える", "That's how something looks. For a feeling you have, use ような気がする."]],
      }),
    ],
  }),

  point({
    id: "n3-ba-noni",
    title: "〜ばいいのに・〜ばよかったのに",
    meaning: "I wish; if only; you should have",
    structure: "ば-form / たら + いいのに (now) / よかったのに (past)",
    related: ["n4-ba-ii", "n4-ba-yokatta", "n4-noni"],
    explanation: `
Adding **のに** to ばいい or たらいい turns advice into a wish: もっと時間があればいいのに, "I wish I had more time". The のに adds "but it isn't so", with a touch of regret or frustration.

For the past, it's **ばよかったのに**: 言ってくれればよかったのに, "you should have told me". Aimed at someone else, it's a gentle reproach.

たら works the same way: 明日が休みだったらいいのに, "I wish tomorrow were a day off".

The choice between いいのに and よかったのに depends on time: a wish about now or the future takes いいのに; regret about the past takes よかったのに.
`,
    sentences: [
      s("もっと時間があれば{いいのに}。", "もっとじかんがあれば{いいのに}。", "I wish I had more time.", {
        near: [["いい", "That's advice. For a wish, add のに: いいのに."]],
      }),
      s("雨が早くやめば{いいのに}。", "あめがはやくやめば{いいのに}。", "I wish the rain would stop soon.", {
        near: [["いい", "That's advice. For a wish, add のに: いいのに."]],
      }),
      s("彼も来たら{よかったのに}。", "かれもきたら{よかったのに}。", "It's a shame he didn't come too.", {
        near: [["いいのに", "That's a wish about now. For regret about the past, use よかったのに."]],
      }),
      s("言ってくれれば{よかったのに}。", "いってくれれば{よかったのに}。", "You should have told me.", {
        near: [["いいのに", "That's a wish about now. For regret about the past, use よかったのに."]],
      }),
      s("明日が休みだったら{いいのに}。", "あしたがやすみだったら{いいのに}。", "I wish tomorrow were a day off.", {
        near: [["よかったのに", "That's regret about the past. For a wish about tomorrow, use いいのに."]],
      }),
    ],
  }),

  point({
    id: "n3-n-dakara",
    title: "〜んだから・〜のだから",
    meaning: "since, because (as you well know)",
    structure: "Plain form + んだから (な-adj, Noun + な)",
    related: ["n5-n-desu", "n5-kara-because", "n3-kara-ni-wa"],
    explanation: `
**んだから** gives a reason that the listener already knows or should accept, often to justify advice or a demand: もう大人なんだから、自分で決めなさい, "you're an adult now, so decide for yourself".

It's から with the explanatory ん (N5). That ん makes the reason feel obvious, which adds pressure: "given that, surely you see".

It's common in advice, persuasion and mild scolding. It can also be warm: せっかく来たんだから、ゆっくりしていって, "you've come all this way, so stay and relax".

Nouns and な-adjectives take な: 子どもなんだから. The formal version is のだから.
`,
    sentences: [
      s("もう大人な{んだから}、自分で決めなさい。", "もうおとなな{んだから}、じぶんできめなさい。", "You're an adult now, so decide for yourself.", {
        accept: ["のだから"],
        near: [["から", "That works, but んだから adds \"as you know perfectly well\"."]],
      }),
      s("疲れている{んだから}、早く寝たほうがいい。", "つかれている{んだから}、はやくねたほうがいい。", "You're tired, so you'd better get to bed early.", {
        accept: ["のだから"],
        near: [["から", "That works, but んだから adds \"as you know perfectly well\"."]],
      }),
      s("せっかく来た{んだから}、ゆっくりしていって。", "せっかくきた{んだから}、ゆっくりしていって。", "You've come all this way, so stay and relax.", {
        accept: ["のだから"],
        near: [["から", "That works, but んだから adds \"given that\"."]],
      }),
      s("約束した{んだから}、守らなきゃ。", "やくそくした{んだから}、まもらなきゃ。", "You promised, so you have to keep your word.", {
        accept: ["のだから"],
        near: [["のに", "のに is \"even though\". For \"since (as you know)\", use んだから."]],
      }),
      s("子どもな{んだから}、仕方ないよ。", "こどもな{んだから}、しかたないよ。", "They're only a child, so it can't be helped.", {
        accept: ["のだから"],
        near: [["のに", "のに is \"even though\". For \"since\", use んだから."]],
      }),
    ],
  }),

  point({
    id: "n3-janai-ka",
    title: "〜じゃないか・〜ではないか",
    meaning: "isn't it! (reproach, surprise, invitation)",
    structure: "Plain form + じゃないか · Volitional + じゃないか",
    register: "Emphatic; often masculine or teacherly. Softer: じゃない.",
    related: ["n3-no-dewa-nai-ka", "n4-dakara"],
    explanation: `
**じゃないか** at the end of a sentence isn't really a question. It's emphatic, and its tone depends on context.

**Reproach**: だから言ったじゃないか, "I told you so, didn't I!"; 遅かったじゃないか, "you're late!"

**Surprise or praise**: すごいじゃないか!, "that's amazing!"

**Invitation**, after a volitional: みんなで頑張ろうじゃないか, "let's all give it our best!", typical of speeches.

In casual speech, じゃない with falling intonation does the same job. Compare のではないか (N3), which is a tentative opinion ("I think maybe"), not an exclamation. With rising intonation, じゃない? turns into a real question asking for agreement.
`,
    sentences: [
      s("だから言った{じゃないか}。", "だからいった{じゃないか}。", "I told you so, didn't I!", {
        accept: ["ではないか", "じゃない"],
        near: [["でしょうか", "That's a polite question. For \"didn't I!\", use じゃないか."]],
      }),
      s("遅かった{じゃないか}。心配したよ。", "おそかった{じゃないか}。しんぱいしたよ。", "You're late! I was worried.", {
        accept: ["じゃない"],
        near: [["でしょうか", "That's a polite question. For a reproach, use じゃないか."]],
      }),
      s("すごい{じゃないか}!合格したんだね。", "すごい{じゃないか}!ごうかくしたんだね。", "That's amazing! You passed!", {
        accept: ["じゃない"],
        near: [["かもしれない", "That's \"maybe\". For an exclamation, use じゃないか."]],
      }),
      s("みんなで頑張ろう{じゃないか}。", "みんなでがんばろう{じゃないか}。", "Let's all give it our best!", {
        accept: ["ではないか"],
        near: [["か", "The pattern is volitional + じゃないか."]],
      }),
      s("約束が違う{じゃないか}。", "やくそくがちがう{じゃないか}。", "That's not what we agreed!", {
        accept: ["じゃない", "ではないか"],
        near: [["かもしれない", "That's \"maybe\". For a protest, use じゃないか."]],
      }),
    ],
  }),

  point({
    id: "n3-ka-to-iu-to",
    title: "〜かというと",
    meaning: "if you ask (why / whether); as for whether",
    structure: "Question word … + かというと · A か B か + というと",
    related: ["n3-nazenara", "n3-to-ieba"],
    explanation: `
**かというと** raises a question and then answers it: なぜ遅れたかというと、電車が止まったからだ, "the reason I was late is that the trains stopped". Literally, "if you ask why…".

With a question word, it sets up an explanation, often ending in からだ. With a yes-or-no question (好きか嫌いか), it sets up a nuanced answer: 好きか嫌いかというと、好きなほうだ, "if you ask whether I like it, I'd say I do".

**どちらかというと** is a common set phrase: "if anything, on balance".

It's close to といえば, but the か makes it a question being answered. かといえば means the same.
`,
    sentences: [
      s("なぜ遅れた{かというと}、電車が止まったからだ。", "なぜおくれた{かというと}、でんしゃがとまったからだ。", "The reason I was late is that the trains stopped.", {
        accept: ["かといえば"],
        near: [["というと", "That's \"speaking of\". After a question word, use かというと."]],
      }),
      s("どうして日本語を勉強している{かというと}、アニメが好きだからだ。", "どうしてにほんごをべんきょうしている{かというと}、アニメがすきだからだ。", "Why am I studying Japanese? Because I love anime.", {
        accept: ["かといえば"],
        near: [["というと", "That's \"speaking of\". After a question word, use かというと."]],
      }),
      s("好きか嫌い{かというと}、好きなほうだ。", "すきかきらい{かというと}、すきなほうだ。", "If you ask whether I like it or not, I'd say I like it.", {
        accept: ["かといえば"],
        near: [["といっても", "That's \"although I say\". For \"if you ask whether\", use かというと."]],
      }),
      s("彼が優しい{かというと}、そうでもない。", "かれがやさしい{かというと}、そうでもない。", "Is he kind? Not really.", {
        accept: ["かといえば"],
        near: [["といっても", "That's \"although I say\". For \"if you ask whether\", use かというと."]],
      }),
      s("どちら{かというと}、夏のほうが好きです。", "どちら{かというと}、なつのほうがすきです。", "If anything, I prefer summer.", {
        accept: ["かといえば"],
        near: [["でも", "The set phrase is どちらかというと."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-wa-purpose",
    title: "〜には (in order to, for)",
    meaning: "to (do), for (doing), in order to",
    structure: "Verb dictionary form + には + evaluation / requirement",
    related: ["n4-tame-ni", "n4-no-ni-purpose", "n4-hitsuyou"],
    explanation: `
**には** after a dictionary-form verb means "for the purpose of doing": 駅に行くには、このバスが便利です, "to get to the station, this bus is convenient".

The second half is a judgement or requirement: 便利だ, 必要だ, いい, 難しすぎる, 大切だ, 〜がいちばんだ. That's the difference from ために (N4), which leads to an action you take.

It also means "for (doing)" with difficulty or suitability: この本は子どもが読むには難しすぎる, "this book is too hard for children to read".

ためには and のには mean much the same. In grammar questions, if the second half is an evaluation or a requirement, には is usually the answer.
`,
    sentences: [
      s("駅に行く{には}、このバスが便利です。", "えきにいく{には}、このバスがべんりです。", "To get to the station, this bus is convenient.", {
        accept: ["のには"],
        near: [["ために", "ために leads to an action. Before a judgement like 便利, use には."]],
      }),
      s("日本で働く{には}、ビザが必要だ。", "にほんではたらく{には}、ビザがひつようだ。", "To work in Japan, you need a visa.", {
        accept: ["ためには"],
        near: [["ので", "ので is a reason. For \"in order to\", use には."]],
      }),
      s("この本は子どもが読む{には}難しすぎる。", "このほんはこどもがよむ{には}むずかしすぎる。", "This book is too difficult for children to read.", {
        accept: ["のには"],
        near: [["ために", "ために doesn't fit with 難しすぎる. For \"too hard to\", use には."]],
      }),
      s("健康でいる{には}、よく寝ることが大切だ。", "けんこうでいる{には}、よくねることがたいせつだ。", "To stay healthy, sleeping well is important.", {
        accept: ["ためには"],
        near: [["と", "That's \"whenever\". For \"in order to\", use には."]],
      }),
      s("富士山に登る{には}、夏がいちばんだ。", "ふじさんにのぼる{には}、なつがいちばんだ。", "Summer is the best time for climbing Mount Fuji.", {
        accept: ["のには"],
        near: [["と", "That's \"whenever\". For \"for (doing)\", use には."]],
      }),
    ],
  }),

  point({
    id: "n3-hazu-datta",
    title: "〜はずだった",
    meaning: "was supposed to, should have",
    structure: "Plain form + はずだった / はずじゃなかった",
    related: ["n4-hazu", "n3-tokoro-datta"],
    explanation: `
**はずだった** is the past of はず (N4): something was expected, but didn't happen as planned. 電車は九時に着くはずだった, "the train was supposed to arrive at nine".

It often continues with のに or が to say what actually happened: 彼も来るはずだったのに、来なかった, "he was supposed to come too, but he didn't".

**はずじゃなかった** means "it wasn't supposed to be like this": こんなはずじゃなかった, a common sigh of disappointment.

Compare つもりだった, which is what someone intended, and ところだった, "nearly". はずだった is about what should have happened, based on plans or reasoning.
`,
    sentences: [
      s("電車は九時に着く{はずだった}。", "でんしゃはくじにつく{はずだった}。", "The train was supposed to arrive at nine.", {
        near: [["ところだった", "That's \"nearly\". For \"was supposed to\", use はずだった."]],
      }),
      s("今日は彼も来る{はずだった}のに、来なかった。", "きょうはかれもくる{はずだった}のに、こなかった。", "He was supposed to come today too, but he didn't.", {
        near: [["ところだった", "That's \"nearly\". For \"was supposed to\", use はずだった."]],
      }),
      s("こんな{はずじゃなかった}。", "こんな{はずじゃなかった}。", "This isn't how it was supposed to go.", {
        accept: ["はずではなかった"],
        near: [["わけじゃなかった", "That's \"it's not that\". For \"it wasn't supposed to be\", use はずじゃなかった."]],
      }),
      s("計画では、もう終わっている{はずだった}。", "けいかくでは、もうおわっている{はずだった}。", "According to the plan, it should have been finished by now.", {
        near: [["つもりだった", "That's what someone intended. For what should have happened, use はずだった."]],
      }),
      s("鍵はかばんに入れた{はずだった}のに、ない。", "かぎはかばんにいれた{はずだった}のに、ない。", "I was sure I'd put the key in my bag, but it's not there.", {
        near: [["つもりだった", "That's what you intended. For what you were sure of, use はずだった."]],
      }),
    ],
  }),

  point({
    id: "n3-temo-shikata-ga-nai",
    title: "〜ても仕方がない",
    meaning: "there's no point; it can't be helped if",
    structure: "Verb て-form + も仕方がない / もしょうがない",
    related: ["n3-te-tamaranai", "n4-temo"],
    explanation: `
**ても仕方がない** has two related meanings.

**There's no point**: 今さら後悔しても仕方がない, "there's no use regretting it now". The action wouldn't change anything.

**It's understandable, it can't be helped**: 初めてなんだから、失敗しても仕方がない, "it's your first time, so it's understandable if you fail".

**てもしょうがない** is the casual version. Watch the も: without it, て仕方がない (N3) means "terribly, unbearably", a completely different pattern.

Compare たところで (N2), "even if you did (it'd be pointless)", which is more formal and literary. In grammar questions, the particle も before 仕方がない is the whole difference, so read it carefully.
`,
    sentences: [
      s("今さら後悔し{ても仕方がない}。", "いまさらこうかいし{てもしかたがない}。", "There's no use regretting it now.", {
        accept: ["てもしょうがない", "ても仕方ない"],
        near: [["て仕方がない", "Without も, it's \"terribly\". For \"there's no use\", use ても仕方がない."]],
      }),
      s("一人で悩んでい{ても仕方がない}。", "ひとりでなやんでい{てもしかたがない}。", "There's no point worrying about it alone.", {
        accept: ["てもしょうがない", "ても仕方ない"],
        near: [["て仕方がない", "Without も, it's \"terribly\". For \"there's no point\", use ても仕方がない."]],
      }),
      s("失敗し{ても仕方がない}よ。初めてなんだから。", "しっぱいし{てもしかたがない}よ。はじめてなんだから。", "It's understandable if you fail. It's your first time.", {
        accept: ["てもしょうがない", "ても仕方ない"],
        near: [["てもいい", "That's permission. For \"it can't be helped\", use ても仕方がない."]],
      }),
      s("今から急い{でも仕方がない}。", "いまからいそい{でもしかたがない}。", "There's no point hurrying now.", {
        accept: ["でもしょうがない", "でも仕方ない"],
        near: [["で仕方がない", "Without も, it's \"terribly\". For \"there's no point\", use でも仕方がない."]],
      }),
      s("怒られ{ても仕方がない}ことをした。", "おこられ{てもしかたがない}ことをした。", "I did something I deserved to be told off for.", {
        accept: ["てもしょうがない", "ても仕方ない"],
        near: [["てもいい", "That's permission. For \"deserved\", use ても仕方がない."]],
      }),
    ],
  }),
];
