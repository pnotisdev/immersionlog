import { point, s, word } from "../../build";

/** How things look, how sure you are, and what's reasonable, expected or right. */

export const judgement = [
  point({
    id: "n3-you-ni-mieru",
    title: "〜ように見える",
    meaning: "looks, seems (to the eye)",
    structure: "Plain form + ように見える (な-adj + な · Noun + の)",
    related: ["n4-you-da", "n4-sou-looks", "n4-mieru-kikoeru"],
    explanation: `
**ように見える** describes how something looks, based on what you can see: 彼は疲れているように見える, "he looks tired".

It follows a plain form, a な-adjective with な, or a noun with の: 二十歳のように見える, "she looks about twenty"; 簡単なように見える, "it looks simple".

Compare そうだ (N4), which is a first impression from appearance and attaches to stems: 疲れていそうだ is odd, but 疲れているように見える is natural. ように見える can describe states and whole situations, and often hints that the appearance might be misleading: 簡単なように見えて、実は難しい, "it looks simple, but it's actually hard".

In casual speech, みたいに見える does the same job, without の after nouns.
`,
    sentences: [
      s("彼は疲れている{ように見える}。", "かれはつかれている{ようにみえる}。", "He looks tired.", {
        near: [["そうに見える", "After a plain verb, it's ように見える."]],
      }),
      s("彼女は二十歳の{ように見える}。", "かのじょははたちの{ようにみえる}。", "She looks about twenty.", {
        near: [["みたいに見える", "みたいに doesn't take の. After の, it's のように見える."]],
      }),
      s("この問題は簡単な{ように見えて}、実は難しい。", "このもんだいはかんたんな{ようにみえて}、じつはむずかしい。", "This problem looks simple, but it's actually hard.", {
        near: [["ように見て", "It's 見える, \"look\" (appear), not 見る, \"look at\"."]],
      }),
      s("遠くから見ると、雲が山の{ように見える}。", "とおくからみると、くもがやまの{ようにみえる}。", "From far away, the clouds look like mountains.", {
        near: [["みたいに見える", "みたいに doesn't take の. After の, it's のように見える."]],
      }),
      s("先生は怒っている{ように見えた}。", "せんせいはおこっている{ようにみえた}。", "The teacher looked angry.", {
        near: [["らしかった", "らしい is hearsay. For how someone looked, use ように見えた."]],
      }),
    ],
  }),

  point({
    id: "n3-ppoi",
    title: "〜っぽい",
    meaning: "-ish, -like; tends to",
    structure: "Noun / Verb ます-stem / い-adj stem + っぽい",
    register: "Casual.",
    related: ["n3-rashii-typical", "n4-mitai", "n3-gachi"],
    explanation: `
**っぽい** makes an い-adjective meaning "-ish" or "having the feel of": 子どもっぽい, "childish"; 白っぽい, "whitish"; 風邪っぽい, "like I'm coming down with a cold".

After a ます-stem, it describes a tendency, usually a bad one: 忘れっぽい, "forgetful"; 怒りっぽい, "short-tempered"; 飽きっぽい, "quickly bored".

It conjugates like any い-adjective: 子どもっぽくない, 忘れっぽくなった.

Compare らしい, "typical of, as it should be": 子どもらしい is a compliment ("like a real kid"), while 子どもっぽい is a criticism ("childish"). In casual speech, っぽい also means "seems like": あの人、先生っぽいね, "that person seems like a teacher".
`,
    sentences: [
      s("この服、ちょっと子ども{っぽい}ね。", "このふく、ちょっとこども{っぽい}ね。", "These clothes are a bit childish.", {
        near: [["らしい", "子どもらしい is \"like a real child\" (a compliment). For \"childish\", use っぽい."]],
      }),
      s("風邪{っぽい}から、今日は早く寝る。", "かぜ{っぽい}から、きょうははやくねる。", "I think I'm coming down with a cold, so I'm going to bed early.", {
        near: [["気味", "That works too. This point practises っぽい."]],
      }),
      s("最近、忘れ{っぽく}なった。", "さいきん、わすれ{っぽく}なった。", "I've become forgetful lately.", {
        near: [["っぽい", "Before なる, the い becomes く: 忘れっぽく."]],
      }),
      s("白{っぽい}シャツを探しています。", "しろ{っぽい}シャツをさがしています。", "I'm looking for a whitish shirt.", {
        near: [["のような", "That works, but for \"-ish\" colours, use っぽい."]],
      }),
      s("彼は怒り{っぽい}性格だ。", "かれはおこり{っぽい}せいかくだ。", "He has a short temper.", {
        near: [["やすい", "That works, but for a personality trait, use 怒りっぽい."]],
      }),
    ],
  }),

  point({
    id: "n3-gachi",
    title: "〜がち",
    meaning: "tend to, be prone to (something bad)",
    structure: "Verb ます-stem / Noun + がち (+ だ · の Noun)",
    related: ["n3-gimi", "n3-ppoi", "n4-yasui-nikui"],
    explanation: `
**がち** says something tends to happen, usually something unwelcome: 冬は風邪をひきがちだ, "people tend to catch colds in winter". It attaches to a ます-stem or a noun.

It works like a な-adjective: 休みがちだ, 遅れがちになる, and with の before a noun: 曇りがちの天気, "mostly cloudy weather". 病気がち means "sickly".

Compare やすい, which says something is easy to do or likely to happen, without judging it. がち implies it happens more than it should.

It describes a pattern over time, not a single event: for "I caught a cold yesterday", use the plain past.
`,
    sentences: [
      s("冬は風邪を{ひきがち}だ。", "ふゆはかぜを{ひきがち}だ。", "People tend to catch colds in winter.", {
        hint: "ひく",
        conj: { word: word("ひく", "ひく", "godan"), form: "polite", cut: "ます", tail: "がち" },
        near: [["ひきやすい", "That works, but for a bad tendency, use ひきがち."]],
      }),
      s("彼は最近、学校を{休みがち}だ。", "かれはさいきん、がっこうを{やすみがち}だ。", "He's been missing school a lot lately.", {
        hint: "休む",
        conj: { word: word("休む", "やすむ", "godan"), form: "polite", cut: "ます", tail: "がち" },
        near: [["休みっぽい", "っぽい is \"-ish\". For a tendency, use 休みがち."]],
      }),
      s("忙しいと、食事が{遅れがち}になる。", "いそがしいと、しょくじが{おくれがち}になる。", "When I'm busy, my meals tend to get pushed back.", {
        hint: "遅れる",
        conj: { word: word("遅れる", "おくれる", "ichidan"), form: "polite", cut: "ます", tail: "がち" },
        near: [["遅れやすい", "That works, but for a bad tendency, use 遅れがち."]],
      }),
      s("{曇りがち}の天気が続いている。", "{くもりがち}のてんきがつづいている。", "It's been mostly cloudy for days.", {
        hint: "曇る",
        conj: { word: word("曇る", "くもる", "godan"), form: "polite", cut: "ます", tail: "がち" },
        near: [["曇りっぽい", "っぽい is \"-ish\". For mostly cloudy weather, use 曇りがち."]],
      }),
      s("一人暮らしだと、野菜が{不足しがち}だ。", "ひとりぐらしだと、やさいが{ふそくしがち}だ。", "When you live alone, you tend not to get enough vegetables.", {
        hint: "不足する",
        conj: { word: word("不足する", "ふそくする", "irregular"), form: "polite", cut: "ます", tail: "がち" },
        near: [["不足しやすい", "That works, but for a bad tendency, use 不足しがち."]],
      }),
    ],
  }),

  point({
    id: "n3-gimi",
    title: "〜気味",
    meaning: "a touch of, slightly, a bit",
    structure: "Noun / Verb ます-stem + 気味 (+ だ · の Noun · に)",
    related: ["n3-gachi", "n3-ppoi"],
    explanation: `
**気味** (ぎみ here) says there's a slight sign of something, usually unwelcome: ちょっと風邪気味なので、早く帰ります, "I've got a bit of a cold, so I'll head home early".

It's common with health and condition: 疲れ気味, "a bit worn out"; 太り気味, "putting on a little weight"; and with situations: 遅れ気味, "running a little late".

Compare がち, which is a repeated tendency ("often catches colds"). 気味 is a present state, a mild one ("feeling a bit under the weather right now").

It works like a な-adjective: 風邪気味だ, 緊張気味に話す. In casual speech, っぽい often replaces it: 風邪っぽい.
`,
    sentences: [
      s("ちょっと風邪{気味}なので、早く帰ります。", "ちょっとかぜ{ぎみ}なので、はやくかえります。", "I've got a bit of a cold, so I'll head home early.", {
        near: [["っぽい", "That works in casual speech. This point practises 気味."]],
      }),
      s("最近、太り{気味}だ。", "さいきん、ふとり{ぎみ}だ。", "I've been putting on a bit of weight lately.", {
        near: [["がち", "がち is a habit. For \"slightly\", right now, use 気味."]],
      }),
      s("仕事で疲れ{気味}です。", "しごとでつかれ{ぎみ}です。", "I'm a bit worn out from work.", {
        near: [["がち", "がち is a habit. For \"a bit\", right now, use 気味."]],
      }),
      s("電車が遅れ{気味}だ。", "でんしゃがおくれ{ぎみ}だ。", "The trains are running a little late.", {
        near: [["がち", "がち is a habit. For \"a little\", right now, use 気味."]],
      }),
      s("彼は緊張{気味}に話し始めた。", "かれはきんちょう{ぎみ}にはなしはじめた。", "He started speaking, a little nervously.", {
        near: [["っぽく", "That's heard casually. This point practises 気味."]],
      }),
    ],
  }),

  point({
    id: "n3-rashii-typical",
    title: "〜らしい (typical of)",
    meaning: "typical of, just as (X) should be",
    structure: "Noun + らしい / らしく / らしくない",
    related: ["n4-rashii", "n3-ppoi"],
    explanation: `
At N4, らしい meant "apparently" (hearsay). After a noun, it has a second meaning: "having the qualities that X should have". 今日は春らしい暖かい日だ, "today is a warm, truly spring-like day".

It's usually a compliment: 子どもらしい, "just like a kid should be"; 学生らしい, "fitting for a student".

The negative is a gentle criticism: 君らしくないね, "that's not like you".

As an adverb, it's らしく: 子どもは子どもらしく遊ぶのが一番だ, "kids should play like kids".

Compare っぽい, which is "-ish" and often negative: 子どもっぽい is "childish". Context usually shows which らしい is meant: after a noun describing character, it's "typical of".
`,
    sentences: [
      s("今日は春{らしい}暖かい日だ。", "きょうははる{らしい}あたたかいひだ。", "Today is a warm, truly spring-like day.", {
        near: [["っぽい", "っぽい is \"-ish\". For \"just as spring should be\", use らしい."]],
      }),
      s("そんなことを言うなんて、君{らしくない}ね。", "そんなことをいうなんて、きみ{らしくない}ね。", "It's not like you to say something like that.", {
        near: [["っぽくない", "That's \"not -ish\". For \"not like you\", use らしくない."]],
      }),
      s("彼女は学生{らしい}服を着ている。", "かのじょはがくせい{らしい}ふくをきている。", "She's wearing clothes that are just right for a student.", {
        near: [["っぽい", "っぽい is \"-ish\". For \"fitting for a student\", use らしい."]],
      }),
      s("子どもは子ども{らしく}遊ぶのが一番だ。", "こどもはこども{らしく}あそぶのがいちばんだ。", "It's best for kids to play like kids.", {
        near: [["っぽく", "っぽく is \"childishly\". For \"like a real child\", use らしく."]],
      }),
      s("久しぶりに夏{らしい}天気になった。", "ひさしぶりになつ{らしい}てんきになった。", "For the first time in a while, it feels like proper summer weather.", {
        near: [["そうな", "そうな is \"looks like\". For \"typical of summer\", use らしい."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-chigainai",
    title: "〜に違いない",
    meaning: "must be, surely",
    structure: "Plain form + に違いない (な-adj, Noun: no だ)",
    related: ["n4-hazu", "n3-ni-kimatteiru", "n4-kamoshirenai"],
    explanation: `
**に違いない** expresses a strong conviction: あの人は日本人に違いない, "that person must be Japanese". Literally, "there's no mistake that".

It follows a plain form; nouns and な-adjectives attach directly, without だ. The polite form is に違いありません.

It's based on the speaker's intuition or impression, which makes it a little more emotional and subjective than はずだ, which reasons from facts or expectations. Compare the scale: かもしれない (maybe) → だろう (probably) → はずだ (should be) → に違いない (must be).

It's more common in writing and narration than in casual speech, where きっと〜と思う or 絶対 often does the same job.
`,
    sentences: [
      s("あの人は日本人{に違いない}。", "あのひとはにほんじん{にちがいない}。", "That person must be Japanese.", {
        near: [["かもしれない", "That's only \"might\". For \"must be\", use に違いない."]],
      }),
      s("電気が消えている。もう寝た{に違いない}。", "でんきがきえている。もうねた{にちがいない}。", "The lights are off. They must have gone to bed.", {
        near: [["はずだ", "はずだ works too. に違いない is a stronger gut feeling."]],
      }),
      s("犯人はこの中にいる{に違いない}。", "はんにんはこのなかにいる{にちがいない}。", "The culprit must be one of these people.", {
        near: [["かもしれない", "That's only \"might\". For \"must be\", use に違いない."]],
      }),
      s("こんなにおいしいのだから、高い{に違いない}。", "こんなにおいしいのだから、たかい{にちがいない}。", "It's this delicious, so it must be expensive.", {
        near: [["だろう", "That's \"probably\". For \"must be\", use に違いない."]],
      }),
      s("彼女は今ごろ、心配している{に違いありません}。", "かのじょはいまごろ、しんぱいしている{にちがいありません}。", "She must be worried by now.", {
        near: [["に違いないです", "The polite form is に違いありません."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-kimatteiru",
    title: "〜に決まっている",
    meaning: "is bound to, obviously",
    structure: "Plain form + に決まっている (な-adj, Noun: no だ)",
    related: ["n3-ni-chigainai", "n4-hazu"],
    explanation: `
**に決まっている** says something is certain, with no room for doubt: そんなの、うそに決まっている, "that's obviously a lie". Literally, "it's been decided that".

It's more emphatic and more casual than に違いない, and it often sounds opinionated or dismissive: 無理に決まってるよ, "that's obviously impossible". In speech, ている shrinks to てる.

Like に違いない, it follows a plain form, and nouns and な-adjectives attach without だ.

Use it for things you're sure of from common sense, not for careful deductions. Because it's so assertive, it can sound rude when used about someone else's plans or opinions.
`,
    sentences: [
      s("そんなの、うそ{に決まっている}。", "そんなの、うそ{にきまっている}。", "That's obviously a lie.", {
        accept: ["に決まってる"],
        near: [["に違いない", "That's a strong guess. For \"obviously\", use に決まっている."]],
      }),
      s("今から行っても、間に合わない{に決まっている}。", "いまからいっても、まにあわない{にきまっている}。", "Even if we go now, we're bound to be too late.", {
        accept: ["に決まってる"],
        near: [["かもしれない", "That's only \"might\". For \"bound to\", use に決まっている."]],
      }),
      s("一人で全部やるなんて、無理{に決まってる}よ。", "ひとりでぜんぶやるなんて、むり{にきまってる}よ。", "Doing it all by yourself? That's obviously impossible.", {
        accept: ["に決まっている"],
        near: [["に決める", "決める is \"decide\". For \"obviously\", use に決まってる."]],
      }),
      s("高い店のほうがおいしい{に決まっている}。", "たかいみせのほうがおいしい{にきまっている}。", "The expensive place is bound to taste better.", {
        accept: ["に決まってる"],
        near: [["に違いない", "That's a strong guess. For \"bound to\", use に決まっている."]],
      }),
      s("子どもは甘いものが好き{に決まっている}。", "こどもはあまいものがすき{にきまっている}。", "Of course kids love sweet things.", {
        accept: ["に決まってる"],
        near: [["に違いない", "That's a strong guess. For \"of course\", use に決まっている."]],
      }),
    ],
  }),

  point({
    id: "n3-wake-da",
    title: "〜わけだ",
    meaning: "no wonder, that's why; which means",
    structure: "Plain form + わけだ (な-adj + な · Noun + の / という)",
    related: ["n3-to-iu-koto-da", "n4-hazu"],
    explanation: `
**わけ** means "reason" or "logic", and **わけだ** says something follows naturally: 暑いわけだ。三十五度もある, "no wonder it's hot. It's all of 35 degrees".

It often comes after learning the cause of something you'd noticed: "so that's why". 道理で ("no wonder") and なるほど ("I see") often come just before it.

It also states the logical result of a calculation or explanation: 毎日三十分歩けば、一週間で三時間半歩くわけだ, "walking thirty minutes a day means three and a half hours a week".

With ね, it checks your understanding of what someone said: つまり、明日は来られないわけですね, "so what you're saying is you can't come tomorrow".
`,
    sentences: [
      s("暑い{わけだ}。三十五度もある。", "あつい{わけだ}。さんじゅうごどもある。", "No wonder it's hot. It's all of 35 degrees.", {
        near: [["はずだ", "That's close, but for \"no wonder\", use わけだ."]],
      }),
      s("十年も日本に住んでいたのか。日本語が上手な{わけだ}。", "じゅうねんもにほんにすんでいたのか。にほんごがじょうずな{わけだ}。", "You lived in Japan for ten years? No wonder your Japanese is good.", {
        near: [["ことだ", "ことだ is advice. For \"no wonder\", use わけだ."]],
      }),
      s("毎日三十分歩けば、一週間で三時間半歩く{わけだ}。", "まいにちさんじゅっぷんあるけば、いっしゅうかんでさんじかんはんあるく{わけだ}。", "If you walk thirty minutes a day, that means three and a half hours a week.", {
        near: [["ということだ", "That works too. This point practises わけだ."]],
      }),
      s("窓が開いている。道理で寒い{わけだ}。", "まどがあいている。どうりでさむい{わけだ}。", "The window's open. So that's why it's cold.", {
        near: [["からだ", "That's \"because\". For \"so that's why\", use わけだ."]],
      }),
      s("つまり、明日は来られない{わけですね}。", "つまり、あしたはこられない{わけですね}。", "So what you're saying is you can't come tomorrow.", {
        near: [["はずですね", "はず is an expectation. For \"so what you're saying is\", use わけですね."]],
      }),
    ],
  }),

  point({
    id: "n3-wake-ga-nai",
    title: "〜わけがない",
    meaning: "there's no way, it can't be",
    structure: "Plain form + わけがない (な-adj + な · Noun + の / である)",
    related: ["n4-hazu-ga-nai", "n3-wake-de-wa-nai", "n2-kkonai"],
    explanation: `
**わけがない** flatly rules something out: 彼がうそをつくわけがない, "there's no way he'd lie". There's no reason or logic that could make it true.

It's very close to はずがない (N4). わけがない is a little more common in conversation and more emotional; はずがない leans on expectations. In casual speech, が often drops: わけない.

The polite form is わけがありません.

Watch out for its lookalikes: わけではない is "it's not that…" (a partial denial), and わけにはいかない is "I can't, given the situation". Only わけがない means "no way".
`,
    sentences: [
      s("こんな難しい問題、私に解ける{わけがない}。", "こんなむずかしいもんだい、わたしにとける{わけがない}。", "There's no way I can solve a problem this hard.", {
        accept: ["はずがない", "わけない"],
        near: [["わけではない", "That's \"it's not that\". For \"no way\", use わけがない."]],
      }),
      s("彼がうそをつく{わけがない}。", "かれがうそをつく{わけがない}。", "There's no way he'd lie.", {
        accept: ["はずがない", "わけない"],
        near: [["わけではない", "That's \"it's not that\". For \"no way\", use わけがない."]],
      }),
      s("一日で終わる{わけがない}よ。", "いちにちでおわる{わけがない}よ。", "There's no way it'll be done in a day.", {
        accept: ["はずがない", "わけない"],
        near: [["わけにはいかない", "That's \"can't, given the situation\". For \"no way\", use わけがない."]],
      }),
      s("そんな安い値段で買える{わけがありません}。", "そんなやすいねだんでかえる{わけがありません}。", "There's no way you can buy it that cheaply.", {
        accept: ["はずがありません"],
        near: [["わけではありません", "That's \"it's not that\". For \"no way\", use わけがありません."]],
      }),
      s("知らない{わけがない}。毎日会っているんだから。", "しらない{わけがない}。まいにちあっているんだから。", "There's no way they don't know. They see each other every day.", {
        accept: ["はずがない", "わけない"],
        near: [["わけではない", "That's \"it's not that\". For \"no way\", use わけがない."]],
      }),
    ],
  }),

  point({
    id: "n3-wake-de-wa-nai",
    title: "〜わけではない",
    meaning: "it's not that; not necessarily",
    structure: "Plain form + わけではない (な-adj + な · Noun + という)",
    related: ["n3-wake-ga-nai", "n3-to-wa-kagiranai", "n3-kara-to-itte"],
    explanation: `
**わけではない** denies a conclusion someone might draw, without denying everything: 肉が嫌いなわけではないが、あまり食べない, "it's not that I dislike meat, I just don't eat much of it".

It softens and corrects. It's common after a sentence that might be misunderstood, and often followed by が or けど and the real reason.

With words like みんな, いつも or 全部, it means "not all" or "not always": 日本人がみんな寿司を好きなわけではない, "not all Japanese people like sushi".

**というわけではない** is common after a whole idea: 高ければいいというわけではない, "expensive doesn't automatically mean good". In speech, it's わけじゃない.
`,
    sentences: [
      s("肉が嫌いな{わけではない}が、あまり食べない。", "にくがきらいな{わけではない}が、あまりたべない。", "It's not that I dislike meat, I just don't eat much of it.", {
        accept: ["わけじゃない"],
        near: [["わけがない", "That's \"no way\". For \"it's not that\", use わけではない."]],
      }),
      s("日本人がみんな寿司を好きな{わけではない}。", "にほんじんがみんなすしをすきな{わけではない}。", "Not all Japanese people like sushi.", {
        accept: ["わけじゃない"],
        near: [["わけがない", "That's \"no way\". For \"not all\", use わけではない."]],
      }),
      s("行きたくない{わけじゃない}けど、今日は忙しい。", "いきたくない{わけじゃない}けど、きょうはいそがしい。", "It's not that I don't want to go, but I'm busy today.", {
        accept: ["わけではない"],
        near: [["わけにはいかない", "That's \"can't, given the situation\". For \"it's not that\", use わけじゃない."]],
      }),
      s("高ければいい{というわけではない}。", "たかければいい{というわけではない}。", "Expensive doesn't automatically mean good.", {
        accept: ["わけではない", "というわけじゃない", "わけじゃない"],
        near: [["わけがない", "That's \"no way\". For \"doesn't automatically mean\", use というわけではない."]],
      }),
      s("お金がない{わけではありません}。", "おかねがない{わけではありません}。", "It's not that I don't have any money.", {
        accept: ["わけじゃありません", "わけじゃないです"],
        near: [["わけがありません", "That's \"no way\". For \"it's not that\", use わけではありません."]],
      }),
    ],
  }),

  point({
    id: "n3-wake-ni-wa-ikanai",
    title: "〜わけにはいかない",
    meaning: "can't (because of duty or circumstances)",
    structure: "Verb dictionary form / ない-form + わけにはいかない",
    related: ["n3-wake-ga-nai", "n4-potential"],
    explanation: `
**わけにはいかない** says you can't do something, not because it's impossible, but because it wouldn't be right given the situation, your duty or other people: 明日は試験だから、遊んでいるわけにはいかない, "the exam's tomorrow, so I can't just sit around playing".

With the ない-form, it means you have no choice but to: 約束したから、行かないわけにはいかない, "I promised, so I can't not go".

Compare the potential form: 飲めない says you're unable to drink; 飲むわけにはいかない says you could, but you mustn't, for example because you're driving.

The polite form is わけにはいきません.
`,
    sentences: [
      s("明日は試験だから、遊んでいる{わけにはいかない}。", "あしたはしけんだから、あそんでいる{わけにはいかない}。", "The exam's tomorrow, so I can't just sit around playing.", {
        near: [["わけがない", "That's \"no way\". For \"I can't, in good conscience\", use わけにはいかない."]],
      }),
      s("約束したから、行かない{わけにはいかない}。", "やくそくしたから、いかない{わけにはいかない}。", "I promised, so I can't not go.", {
        near: [["わけではない", "That's \"it's not that\". For \"I can't not\", use わけにはいかない."]],
      }),
      s("車で来たので、お酒を飲む{わけにはいきません}。", "くるまできたので、おさけをのむ{わけにはいきません}。", "I came by car, so I can't drink.", {
        near: [["ことができません", "That's \"unable\". For \"can't, given the situation\", use わけにはいきません."]],
      }),
      s("大事な会議だから、休む{わけにはいかない}。", "だいじなかいぎだから、やすむ{わけにはいかない}。", "It's an important meeting, so I can't take the day off.", {
        near: [["わけがない", "That's \"no way\". For \"I can't, given the situation\", use わけにはいかない."]],
      }),
      s("人のものを勝手に使う{わけにはいかない}。", "ひとのものをかってにつかう{わけにはいかない}。", "I can't just use someone else's things without asking.", {
        near: [["わけではない", "That's \"it's not that\". For \"I can't, it wouldn't be right\", use わけにはいかない."]],
      }),
    ],
  }),

  point({
    id: "n3-to-wa-kagiranai",
    title: "〜とは限らない",
    meaning: "not necessarily, not always",
    structure: "Plain form + とは限らない",
    related: ["n3-wake-de-wa-nai", "n3-kara-to-itte"],
    explanation: `
**とは限らない** says something isn't always true, heading off a generalisation: 高い物がいい物だとは限らない, "expensive things aren't necessarily good". 限る means "to limit", so it's literally "it isn't limited to".

It often pairs with 必ずしも ("necessarily") or いつも, and with からといって: 日本人だからといって、日本語を教えられるとは限らない.

The polite form is とは限りません.

It's close to わけではない. とは限らない is about exceptions to a general rule ("not always"), while わけではない corrects a specific misunderstanding ("it's not that").

It's a favourite of essays and opinion pieces, where a writer questions an assumption before making their own point. In conversation, it's a polite way to disagree: you don't say the other person is wrong, only that it isn't always so.
`,
    sentences: [
      s("高い物がいい物だ{とは限らない}。", "たかいものがいいものだ{とはかぎらない}。", "Expensive things aren't necessarily good.", {
        near: [["わけがない", "That's \"no way\". For \"not necessarily\", use とは限らない."]],
      }),
      s("日本人だからといって、日本語を教えられる{とは限らない}。", "にほんじんだからといって、にほんごをおしえられる{とはかぎらない}。", "Just because someone is Japanese doesn't mean they can teach Japanese.", {
        accept: ["わけではない"],
        near: [["わけがない", "That's \"no way\". For \"doesn't necessarily\", use とは限らない."]],
      }),
      s("天気予報が必ず当たる{とは限らない}。", "てんきよほうがかならずあたる{とはかぎらない}。", "The weather forecast isn't always right.", {
        near: [["かもしれない", "That's \"might\". For \"not always\", use とは限らない."]],
      }),
      s("有名な店がおいしい{とは限らない}。", "ゆうめいなみせがおいしい{とはかぎらない}。", "Famous restaurants aren't necessarily good.", {
        accept: ["わけではない"],
        near: [["わけがない", "That's \"no way\". For \"not necessarily\", use とは限らない."]],
      }),
      s("お金持ちが幸せだ{とは限りません}。", "おかねもちがしあわせだ{とはかぎりません}。", "Rich people aren't necessarily happy.", {
        near: [["とは限らないです", "That's heard, but the standard polite form is とは限りません."]],
      }),
    ],
  }),

  point({
    id: "n3-sou-ni-nai",
    title: "〜そうにない・〜そうもない",
    meaning: "doesn't look like it will",
    structure: "Verb ます-stem + そうにない / そうもない",
    related: ["n4-sou-looks"],
    explanation: `
The negative of the N4 そうだ ("looks like it will") is **そうにない** or **そうもない**: この雨はやみそうにない, "this rain doesn't look like it'll stop".

It attaches to the ます-stem, just like the positive: 終わりそうもない, 来そうにない. The polite forms are そうにありません and そうもありません.

そうもない is a little more emphatic: "not the slightest sign that…".

The form そうじゃない means something different: "not like that", or "doesn't look (adjective)", as in 難しそうじゃない. For verbs predicting what will happen, use そうにない.

It often comes with potential verbs: 解決できそうにない, "it doesn't look like it can be solved".
`,
    sentences: [
      s("この雨はやみ{そうにない}。", "このあめはやみ{そうにない}。", "This rain doesn't look like it'll stop.", {
        accept: ["そうもない"],
        near: [["そうじゃない", "For a verb predicting what will happen, the negative is そうにない."]],
      }),
      s("今日中に終わり{そうもない}。", "きょうじゅうにおわり{そうもない}。", "It doesn't look like I'll finish today.", {
        accept: ["そうにない"],
        near: [["そうだ", "That's \"looks like it will\". For the opposite, use そうもない."]],
      }),
      s("彼は来{そうにない}ね。", "かれはき{そうにない}ね。", "It doesn't look like he's coming.", {
        accept: ["そうもない"],
        near: [["そうじゃない", "For a verb predicting what will happen, the negative is そうにない."]],
      }),
      s("この問題は簡単に解決でき{そうにない}。", "このもんだいはかんたんにかいけつでき{そうにない}。", "This problem doesn't look like it can be solved easily.", {
        accept: ["そうもない"],
        near: [["そうだ", "That's \"looks like it can\". For the opposite, use そうにない."]],
      }),
      s("今年は休みが取れ{そうもありません}。", "ことしはやすみがとれ{そうもありません}。", "It doesn't look like I'll be able to take any time off this year.", {
        accept: ["そうにありません"],
        near: [["そうではありません", "For a verb predicting what will happen, the negative is そうもありません."]],
      }),
    ],
  }),

  point({
    id: "n3-mono-da",
    title: "〜ものだ",
    meaning: "(that's how it is); used to; you should",
    structure: "Plain form + ものだ · た-form + ものだ (used to)",
    related: ["n3-koto-da", "n3-mono-da-kara"],
    explanation: `
**ものだ** has three related uses, all about how things generally are.

**General truth**: 人は変わるものだ, "people change". It states the nature of things, often with a sigh.

**Nostalgia**: after a た-form, it recalls a past habit: 子どものころは、よくこの川で遊んだものだ, "as a kid, I used to play in this river a lot". It's fond and wistful.

**Social norm**: 人の話は最後まで聞くものだ, "you should listen to people until they've finished". It's how people in general ought to behave, so it can sound like a lecture.

With ね, it expresses feeling: 時間がたつのは早いものですね, "time really flies, doesn't it". In speech it's often もんだ.
`,
    sentences: [
      s("人は変わる{ものだ}。", "ひとはかわる{ものだ}。", "People change.", {
        accept: ["もんだ"],
        near: [["ことだ", "ことだ is advice. For a general truth, use ものだ."]],
      }),
      s("子どものころは、よくこの川で遊んだ{ものだ}。", "こどものころは、よくこのかわであそんだ{ものだ}。", "When I was a child, I used to play in this river a lot.", {
        accept: ["もんだ"],
        near: [["ことだ", "ことだ is advice. For fond memories of a habit, use ものだ."]],
      }),
      s("人の話は最後まで聞く{ものだ}。", "ひとのはなしはさいごまできく{ものだ}。", "You should listen to people until they've finished.", {
        accept: ["もんだ"],
        near: [["ことだ", "ことだ is personal advice. For what people in general should do, use ものだ."]],
      }),
      s("時間がたつのは早い{ものですね}。", "じかんがたつのははやい{ものですね}。", "Time really flies, doesn't it?", {
        near: [["ことですね", "For feelings about how things are, use ものですね."]],
      }),
      s("若いころはよく徹夜した{ものだ}。", "わかいころはよくてつやした{ものだ}。", "When I was young, I often stayed up all night.", {
        accept: ["もんだ"],
        near: [["ことがある", "That's experience. For fond memories of a habit, use ものだ."]],
      }),
    ],
  }),

  point({
    id: "n3-koto-da",
    title: "〜ことだ",
    meaning: "you should, the best thing is to (advice)",
    structure: "Verb dictionary form / ない-form + ことだ",
    related: ["n3-mono-da", "n5-hou-ga-ii", "n3-beki"],
    explanation: `
**ことだ** gives direct advice: "the thing to do is…". 日本語が上手になりたければ、毎日話すことだ, "if you want to get better at Japanese, speak it every day".

It's usually said by someone with more experience, like a teacher, a parent or a senior colleague, and often after a condition (たければ, なら, たいなら). With the ない-form, it's "don't": 甘い物を食べないことだ.

It's firmer than ほうがいい and more personal than ものだ: ものだ is what people in general should do, while ことだ is what this listener should do in this situation.

Because it's directive, don't use it to people above you.
`,
    sentences: [
      s("日本語が上手になりたければ、毎日話す{ことだ}。", "にほんごがじょうずになりたければ、まいにちはなす{ことだ}。", "If you want to get better at Japanese, speak it every day.", {
        near: [["ものだ", "ものだ is a general rule. For advice to one person, use ことだ."]],
      }),
      s("風邪を治したいなら、よく寝る{ことだ}。", "かぜをなおしたいなら、よくねる{ことだ}。", "If you want to get over your cold, get plenty of sleep.", {
        near: [["ものだ", "ものだ is a general rule. For advice to one person, use ことだ."]],
      }),
      s("痩せたいなら、甘い物を食べない{ことだ}。", "やせたいなら、あまいものをたべない{ことだ}。", "If you want to lose weight, don't eat sweet things.", {
        near: [["ほうがいい", "That works too. ことだ is firmer advice."]],
      }),
      s("合格したければ、過去問をたくさん解く{ことだ}。", "ごうかくしたければ、かこもんをたくさんとく{ことだ}。", "If you want to pass, work through plenty of past papers.", {
        near: [["ものだ", "ものだ is a general rule. For advice to one person, use ことだ."]],
      }),
      s("分からないことがあったら、すぐ聞く{ことです}。", "わからないことがあったら、すぐきく{ことです}。", "If there's something you don't understand, ask right away.", {
        near: [["ものです", "ものです is a general rule. For advice to one person, use ことです."]],
      }),
    ],
  }),

  point({
    id: "n3-koto-wa-nai",
    title: "〜ことはない",
    meaning: "there's no need to",
    structure: "Verb dictionary form + ことはない",
    related: ["n4-hitsuyou", "n5-nakute-mo-ii", "n3-koto-da"],
    explanation: `
**ことはない** tells someone there's no need to do something, usually to reassure them: そんなに心配することはないよ, "there's no need to worry so much".

It's warmer than 必要はない, which is more factual, and it's common when comforting or encouraging someone: 謝ることはありません, "there's no need to apologise".

The polite form is ことはありません. In casual speech, は often drops: 心配することない.

Don't confuse it with ことがない, which after a dictionary form means "never" (and after a た-form, "have never"). The particle makes all the difference: ことはない is "no need", ことがない is "never".
`,
    sentences: [
      s("そんなに心配する{ことはない}よ。", "そんなにしんぱいする{ことはない}よ。", "There's no need to worry so much.", {
        accept: ["ことない", "必要はない"],
        near: [["ことがない", "ことがない is \"never\". For \"no need\", use ことはない."]],
      }),
      s("急ぐ{ことはない}。時間はたっぷりある。", "いそぐ{ことはない}。じかんはたっぷりある。", "No need to hurry. There's plenty of time.", {
        accept: ["ことない", "必要はない"],
        near: [["ことがない", "ことがない is \"never\". For \"no need\", use ことはない."]],
      }),
      s("わざわざ来る{ことはない}ですよ。", "わざわざくる{ことはない}ですよ。", "There's no need to come all this way.", {
        accept: ["ことない", "必要はない"],
        near: [["ことにしない", "That's \"decide not to\". For \"no need\", use ことはない."]],
      }),
      s("謝る{ことはありません}。あなたは悪くない。", "あやまる{ことはありません}。あなたはわるくない。", "There's no need to apologise. You did nothing wrong.", {
        accept: ["必要はありません"],
        near: [["ことがありません", "ことがありません is \"never\". For \"no need\", use ことはありません."]],
      }),
      s("一回失敗したくらいで、落ち込む{ことはない}。", "いっかいしっぱいしたくらいで、おちこむ{ことはない}。", "There's no need to get down over one failure.", {
        accept: ["ことない", "必要はない"],
        near: [["ことがない", "ことがない is \"never\". For \"no need\", use ことはない."]],
      }),
    ],
  }),

  point({
    id: "n3-beki",
    title: "〜べき",
    meaning: "should, ought to",
    structure: "Verb dictionary form + べきだ / べきではない (する → するべき / すべき)",
    related: ["n5-hou-ga-ii", "n3-koto-da", "n3-mono-da"],
    explanation: `
**べき** says what's right or proper: 約束は守るべきだ, "you should keep your promises". It's stronger than ほうがいい, which is friendly advice; べき is about duty, principle or common sense.

It follows the dictionary form. する can be するべき or すべき.

The negative is **べきではない**, "shouldn't": 人の悪口を言うべきではない. Don't put the verb in the negative (言わないべき); negate べき itself.

In the past, べきだった is regret: もっと早く相談するべきだった, "I should have asked for advice sooner".

Said to someone directly, it can sound preachy, so it's more common for opinions and for criticising yourself than for telling others what to do.
`,
    sentences: [
      s("約束は守る{べきだ}。", "やくそくはまもる{べきだ}。", "You should keep your promises.", {
        near: [["ほうがいい", "That's softer advice. For \"ought to\", use べきだ."]],
      }),
      s("学生はもっと本を読む{べきだ}。", "がくせいはもっとほんをよむ{べきだ}。", "Students ought to read more books.", {
        near: [["はずだ", "はずだ is an expectation. For \"ought to\", use べきだ."]],
      }),
      s("人の悪口を言う{べきではない}。", "ひとのわるくちをいう{べきではない}。", "You shouldn't speak badly of people.", {
        accept: ["べきじゃない"],
        near: [["べきない", "The negative is べきではない."]],
      }),
      s("もっと早く相談する{べきだった}。", "もっとはやくそうだんする{べきだった}。", "I should have asked for advice sooner.", {
        near: [["べきだ", "It's about the past, so use べきだった."]],
      }),
      s("行く{べき}かどうか迷っている。", "いく{べき}かどうかまよっている。", "I can't decide whether I should go.", {
        near: [["はず", "はず is an expectation. For \"should\", use べき."]],
      }),
    ],
  }),
];
