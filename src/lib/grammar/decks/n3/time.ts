import { point, s, word } from "../../build";

/** Moments, occasions, spans and change over time. */

export const time = [
  point({
    id: "n3-ta-totan",
    title: "〜たとたん(に)",
    meaning: "the moment, just as",
    structure: "Verb た-form + とたん(に)",
    related: ["n3-to-douji-ni", "n4-ta-bakari"],
    explanation: `
**とたん** says the second thing happened the instant the first one did: 家を出たとたん、雨が降り出した, "the moment I left the house, it started raining".

It always follows the た-form, and the second part is usually something sudden or unexpected, outside the speaker's control: a feeling, a reaction, an event. That's why it can't be used for your own planned actions: not 家に帰ったとたん、宿題をした.

**とたんに** means the same; the に is optional.

Compare すぐ, "straight away", which doesn't carry the surprise, and と同時に, which is more neutral and can follow the dictionary form.
`,
    sentences: [
      s("家を{出たとたん}、雨が降り出した。", "いえを{でたとたん}、あめがふりだした。", "The moment I left the house, it started raining.", {
        hint: "出る",
        conj: { word: word("出る", "でる", "ichidan"), form: "past", tail: "とたん" },
        accept: ["出たとたんに", "でたとたんに"],
        near: [["出るとたん", "とたん follows the た-form: 出たとたん."]],
      }),
      s("立ち上がった{とたん}、めまいがした。", "たちあがった{とたん}、めまいがした。", "The moment I stood up, I felt dizzy.", {
        accept: ["とたんに"],
        near: [["ところ", "ところ is \"just as\" or \"when I did\". For \"the instant\", use とたん."]],
      }),
      s("ベッドに{入ったとたん}、寝てしまった。", "ベッドに{はいったとたん}、ねてしまった。", "I fell asleep the moment I got into bed.", {
        hint: "入る",
        conj: { word: word("入る", "はいる", "godan"), form: "past", tail: "とたん" },
        accept: ["入ったとたんに", "はいったとたんに"],
        near: [["入ってから", "That's \"after\". For \"the instant\", use 入ったとたん."]],
      }),
      s("窓を開けた{とたん}、冷たい風が入ってきた。", "まどをあけた{とたん}、つめたいかぜがはいってきた。", "The moment I opened the window, a cold wind blew in.", {
        accept: ["とたんに"],
        near: [["あとで", "That's \"after\". For \"the moment\", use とたん."]],
      }),
      s("彼は私の顔を見た{とたんに}、笑い出した。", "かれはわたしのかおをみた{とたんに}、わらいだした。", "The instant he saw my face, he burst out laughing.", {
        accept: ["とたん"],
        near: [["ときに", "That's just \"when\". For \"the instant\", use とたんに."]],
      }),
    ],
  }),

  point({
    id: "n3-to-douji-ni",
    title: "〜と同時に",
    meaning: "at the same time as, as soon as",
    structure: "Verb dictionary form / Noun + と同時に · い-adj + と同時に",
    related: ["n3-ta-totan", "n5-nagara"],
    explanation: `
**と同時に** means "at the same moment as": ベルが鳴ると同時に、学生たちは教室を出た, "the moment the bell rang, the students left". It's more neutral and written than とたん, and it follows the dictionary form or a noun.

With nouns for life events, it means "as soon as": 卒業と同時に働き始めた, "I started work as soon as I graduated".

It also joins two roles or feelings that exist at once: 彼は歌手であると同時に、俳優でもある, "he's a singer and at the same time an actor"; うれしいと同時に不安だ, "I'm happy but also anxious".

Compare ながら, which is one person doing two actions side by side.
`,
    sentences: [
      s("ベルが鳴る{と同時に}、学生たちは教室を出た。", "ベルがなる{とどうじに}、がくせいたちはきょうしつをでた。", "The moment the bell rang, the students left the classroom.", {
        near: [["とたん", "とたん follows a past verb. After the dictionary form, use と同時に."]],
      }),
      s("卒業{と同時に}、東京で働き始めた。", "そつぎょう{とどうじに}、とうきょうではたらきはじめた。", "As soon as I graduated, I started working in Tokyo.", {
        near: [["の時", "That's just \"when\". For \"at the same time as\", use と同時に."]],
      }),
      s("彼は歌手である{と同時に}、俳優でもある。", "かれはかしゅである{とどうじに}、はいゆうでもある。", "He's a singer and, at the same time, an actor.", {
        near: [["ながら", "ながら is for two actions. For two roles at once, use と同時に."]],
      }),
      s("合格してうれしい{と同時に}、少し不安だ。", "ごうかくしてうれしい{とどうじに}、すこしふあんだ。", "I'm happy I passed, but at the same time a little anxious.", {
        near: [["のに", "のに is \"even though\". For two feelings at once, use と同時に."]],
      }),
      s("ドアが開く{と同時に}、客が入ってきた。", "ドアがひらく{とどうじに}、きゃくがはいってきた。", "Customers came in as soon as the doors opened.", {
        near: [["とたん", "とたん follows a past verb. After the dictionary form, use と同時に."]],
      }),
    ],
  }),

  point({
    id: "n3-ta-tokoro",
    title: "〜たところ",
    meaning: "when I did (and found)",
    structure: "Verb た-form + ところ",
    related: ["n4-tokoro", "n4-to-conditional"],
    explanation: `
**たところ** reports an action and what you found or what happened as a result: 店に電話したところ、今日は休みだった, "when I called the shop, it turned out it was closed today".

The first part is something you did deliberately (called, asked, tried, looked into); the second is the discovery or outcome, often unexpected. It's common in reports, emails and storytelling.

Don't confuse it with the N4 たところだ, "have just done": 今、着いたところだ. Here ところ is followed by a comma and a second clause.

The meaning is close to the past と or たら of discovery (電話したら、休みだった), but たところ sounds more formal and careful.
`,
    sentences: [
      s("店に電話した{ところ}、今日は休みだった。", "みせにでんわした{ところ}、きょうはやすみだった。", "When I called the shop, it turned out it was closed today.", {
        near: [["とたん", "とたん is \"the instant\", for sudden events. For \"when I did, I found\", use ところ."]],
      }),
      s("先生に相談した{ところ}、いいアドバイスをもらえた。", "せんせいにそうだんした{ところ}、いいアドバイスをもらえた。", "When I talked it over with my teacher, I got some good advice.", {
        near: [["ばかり", "That's \"just did\". For \"when I did, I found\", use ところ."]],
      }),
      s("調べてみた{ところ}、簡単な問題だった。", "しらべてみた{ところ}、かんたんなもんだいだった。", "When I looked into it, it turned out to be a simple problem.", {
        near: [["とたん", "とたん is \"the instant\", for sudden events. For \"when I did, I found\", use ところ."]],
      }),
      s("駅に着いた{ところ}、電車はもう出た後だった。", "えきについた{ところ}、でんしゃはもうでたあとだった。", "When I got to the station, the train had already left.", {
        near: [["から", "That's a reason. For \"when I did, I found\", use ところ."]],
      }),
      s("新しい薬を試した{ところ}、よく効いた。", "あたらしいくすりをためした{ところ}、よくきいた。", "When I tried the new medicine, it worked well.", {
        near: [["あとで", "That's just \"after\". For \"when I tried, I found\", use ところ."]],
      }),
    ],
  }),

  point({
    id: "n3-sai",
    title: "〜際(に)",
    meaning: "when, at the time of (formal)",
    structure: "Verb plain form / Noun + の + 際(に) · 際は",
    related: ["n5-toki", "n3-saichuu"],
    explanation: `
**際** is a formal word for "occasion", and it works like とき: お帰りの際は、忘れ物にご注意ください, "when leaving, please take care not to forget your belongings".

You'll hear it in announcements, read it in instructions and notices, and use it in business emails: 日本に来た際には、ぜひご連絡ください, "when you come to Japan, do get in touch".

After a noun it takes の; after a verb it follows the plain form. The に is optional, and 際は picks out the occasion as a topic: 地震の際は, "in the event of an earthquake".

In everyday conversation, とき is the natural choice. Using 際 with friends sounds stiff.
`,
    sentences: [
      s("お帰りの{際}は、忘れ物にご注意ください。", "おかえりの{さい}は、わすれものにごちゅういください。", "When leaving, please take care not to forget your belongings.", {
        near: [["時", "That works, but in announcements, 際 is the formal choice."]],
      }),
      s("入場の{際}、チケットを見せてください。", "にゅうじょうの{さい}、チケットをみせてください。", "Please show your ticket on entry.", {
        accept: ["際に", "さいに"],
        near: [["ために", "ために is purpose. For \"at the time of\", use 際."]],
      }),
      s("日本に来た{際}には、ぜひ連絡してください。", "にほんにきた{さい}には、ぜひれんらくしてください。", "When you come to Japan, please do get in touch.", {
        near: [["とき", "That works in speech. In a formal letter, use 際."]],
      }),
      s("地震の{際}は、エレベーターを使わないでください。", "じしんの{さい}は、エレベーターをつかわないでください。", "In the event of an earthquake, do not use the lifts.", {
        near: [["ために", "ために is purpose. For \"at the time of\", use 際."]],
      }),
      s("会議の{際に}、資料を配ります。", "かいぎの{さいに}、しりょうをくばります。", "We'll hand out the documents at the meeting.", {
        accept: ["際", "さい"],
        near: [["間に", "That's \"during, while\". For \"at the time of\", use 際に."]],
      }),
    ],
  }),

  point({
    id: "n3-saichuu",
    title: "〜最中(に)",
    meaning: "right in the middle of",
    structure: "Noun + の + 最中(に) · Verb ている + 最中(に)",
    related: ["n4-aida", "n3-sai"],
    explanation: `
**最中** is "the very middle" of an activity, and it's usually used when something interrupts it: 食事の最中に、電話が鳴った, "the phone rang right in the middle of dinner".

After a noun it takes の; with a verb it follows the ている form: 試験を受けている最中に.

最中だ at the end of a sentence says you're busy right now: 今考えている最中だから、ちょっと待って, "I'm in the middle of thinking about it, so hang on".

Compare 間に, which covers any point in a span of time, and うちに, "while it's still". 最中 stresses the peak of the activity, making the interruption feel worse.
`,
    sentences: [
      s("食事の{最中に}、電話が鳴った。", "しょくじの{さいちゅうに}、でんわがなった。", "The phone rang right in the middle of dinner.", {
        accept: ["最中", "さいちゅう"],
        near: [["間", "That's \"while\" over a span. For \"right in the middle of\", use 最中に."]],
      }),
      s("会議の{最中に}、寝てしまった。", "かいぎの{さいちゅうに}、ねてしまった。", "I fell asleep right in the middle of the meeting.", {
        accept: ["最中", "さいちゅう"],
        near: [["うちに", "うちに is \"while it's still\". For \"right in the middle of\", use 最中に."]],
      }),
      s("試験を受けている{最中に}、お腹が痛くなった。", "しけんをうけている{さいちゅうに}、おなかがいたくなった。", "My stomach started hurting in the middle of the exam.", {
        accept: ["最中", "さいちゅう"],
        near: [["ながら", "ながら is doing two things. For \"right in the middle of\", use 最中に."]],
      }),
      s("今考えている{最中}だから、ちょっと待って。", "いまかんがえている{さいちゅう}だから、ちょっとまって。", "I'm right in the middle of thinking about it, so hang on.", {
        near: [["ところ", "That works too. This point practises 最中."]],
      }),
      s("話している{最中に}、邪魔しないでください。", "はなしている{さいちゅうに}、じゃましないでください。", "Please don't interrupt while I'm in the middle of speaking.", {
        accept: ["最中", "さいちゅう"],
        near: [["うちに", "うちに is \"while it's still\". For \"right in the middle of\", use 最中に."]],
      }),
    ],
  }),

  point({
    id: "n3-tabi-ni",
    title: "〜たびに",
    meaning: "every time, whenever",
    structure: "Verb dictionary form / Noun + の + たびに",
    related: ["n3-goto-ni", "n4-to-conditional"],
    explanation: `
**たびに** means "every time": この歌を聞くたびに、高校時代を思い出す, "every time I hear this song, I remember my high-school days".

After a verb it follows the dictionary form; after a noun it takes の: 旅行のたびに, "every time I travel".

The second part is something that happens or changes each time, often a feeling or a habit. It stresses repetition more than とき or と, which could describe a single occasion.

Compare ごとに, "every" for regular units (every station, every hour, every season). たびに is for occasions, whenever they happen: meetings, trips, phone calls, moves.
`,
    sentences: [
      s("この歌を聞く{たびに}、高校時代を思い出す。", "このうたをきく{たびに}、こうこうじだいをおもいだす。", "Every time I hear this song, I remember my high-school days.", {
        near: [["ときに", "That's just \"when\". For \"every time\", use たびに."]],
      }),
      s("会う{たびに}、彼女はきれいになる。", "あう{たびに}、かのじょはきれいになる。", "Every time I see her, she looks more beautiful.", {
        near: [["と", "That's \"when\". For \"every time\", use たびに."]],
      }),
      s("旅行の{たびに}、お土産を買ってくる。", "りょこうの{たびに}、おみやげをかってくる。", "I bring back souvenirs every time I travel.", {
        near: [["ために", "ために is purpose. For \"every time\", use たびに."]],
      }),
      s("引っ越す{たびに}、物が増える。", "ひっこす{たびに}、ものがふえる。", "Every time I move house, I end up with more stuff.", {
        near: [["ごとに", "ごとに is for regular units. For \"every time something happens\", use たびに."]],
      }),
      s("父は電話する{たびに}、同じことを聞く。", "ちちはでんわする{たびに}、おなじことをきく。", "My father asks the same thing every time he calls.", {
        near: [["ときに", "That's just \"when\". For \"every time\", use たびに."]],
      }),
    ],
  }),

  point({
    id: "n3-te-irai",
    title: "〜て以来",
    meaning: "ever since",
    structure: "Verb て-form + 以来 · Noun + 以来",
    related: ["n5-te-kara", "n3-te-hajimete"],
    explanation: `
**以来** means "since then, ever since": 日本に来て以来、ずっと東京に住んでいる, "I've lived in Tokyo ever since I came to Japan".

After a verb it follows the て-form; after a noun it attaches directly: 卒業以来, "since graduation"; あの日以来, "since that day".

The second part is a state that has continued from that point until now: living somewhere, not having seen someone, being afraid of something. That's the difference from てから, which just gives an order ("after"). 以来 insists on "and it has been that way ever since".

It's a little formal. In conversation, てから、ずっと often does the same job.
`,
    sentences: [
      s("日本に来て{以来}、ずっと東京に住んでいる。", "にほんにきて{いらい}、ずっととうきょうにすんでいる。", "I've lived in Tokyo ever since I came to Japan.", {
        near: [["から", "That works too. 以来 stresses \"ever since, continuously\"."]],
      }),
      s("卒業{以来}、彼には会っていない。", "そつぎょう{いらい}、かれにはあっていない。", "I haven't seen him since graduation.", {
        near: [["から", "That gives a starting point, but for \"ever since\", use 以来."]],
      }),
      s("事故にあって{以来}、車の運転が怖い。", "じこにあって{いらい}、くるまのうんてんがこわい。", "Ever since the accident, I've been afraid of driving.", {
        near: [["後で", "That's \"after\". For \"ever since\", use 以来."]],
      }),
      s("子どもが生まれて{以来}、生活が変わった。", "こどもがうまれて{いらい}、せいかつがかわった。", "Life has changed ever since our child was born.", {
        near: [["までに", "That's \"by\". For \"ever since\", use 以来."]],
      }),
      s("あの日{以来}、彼女とは話していない。", "あのひ{いらい}、かのじょとははなしていない。", "I haven't spoken to her since that day.", {
        near: [["まで", "That's \"until\". For \"since\", use 以来."]],
      }),
    ],
  }),

  point({
    id: "n3-te-hajimete",
    title: "〜てはじめて",
    meaning: "only after, not until",
    structure: "Verb て-form + はじめて",
    related: ["n5-te-kara", "n3-te-irai"],
    explanation: `
**てはじめて** means you only realised, understood or could do something after a particular experience: 病気になってはじめて、健康の大切さがわかった, "only when I got ill did I realise how important health is".

The second part is usually a realisation: わかる, 知る, 気づく, 気がつく. The first part is the experience that made it possible, often an unpleasant or eye-opening one.

It's stronger than てから ("after"): it says "not before then". English often uses "it wasn't until …" or "only once …".

はじめて can also be written 初めて. It's the same word as "for the first time".
`,
    sentences: [
      s("病気になって{はじめて}、健康の大切さがわかった。", "びょうきになって{はじめて}、けんこうのたいせつさがわかった。", "Only when I got ill did I realise how important health is.", {
        accept: ["初めて"],
        near: [["から", "That's just \"after\". For \"only after\", use てはじめて."]],
      }),
      s("一人で暮らして{はじめて}、親のありがたさを知った。", "ひとりでくらして{はじめて}、おやのありがたさをしった。", "It wasn't until I lived alone that I appreciated my parents.", {
        accept: ["初めて"],
        near: [["から", "That's just \"after\". For \"not until\", use てはじめて."]],
      }),
      s("言われて{はじめて}、間違いに気がついた。", "いわれて{はじめて}、まちがいにきがついた。", "I only noticed the mistake when someone pointed it out.", {
        accept: ["初めて"],
        near: [["たら", "That's \"when\". For \"only when\", use てはじめて."]],
      }),
      s("実際に行って{はじめて}、その町のよさがわかる。", "じっさいにいって{はじめて}、そのまちのよさがわかる。", "You only see what's good about that town once you actually go.", {
        accept: ["初めて"],
        near: [["から", "That's just \"after\". For \"only once\", use てはじめて."]],
      }),
      s("失って{はじめて}、大切なものに気づく。", "うしなって{はじめて}、たいせつなものにきづく。", "You only realise what's precious once you've lost it.", {
        accept: ["初めて"],
        near: [["も", "ても is \"even if\". For \"only once\", use てはじめて."]],
      }),
    ],
  }),

  point({
    id: "n3-ue-de",
    title: "〜上で",
    meaning: "after (and based on); when it comes to",
    structure: "Verb た-form + 上で · Noun + の + 上で · Verb dictionary form + 上で",
    related: ["n5-ato-de", "n3-kekka"],
    explanation: `
**上で** has two uses.

After a た-form, it means "after doing, and on that basis": よく考えた上で、決めてください, "please decide after thinking it over carefully". The first step is a necessary preparation for the second. It's more deliberate than あとで, which only gives the order.

After a dictionary form, it means "when it comes to, in the course of": 日本で生活する上で、日本語は欠かせない, "when it comes to living in Japan, Japanese is essential". The second part is usually a statement about what's important, necessary or a problem.

Both are a little formal and common at work. After a noun, use の: 相談の上で.
`,
    sentences: [
      s("よく考えた{上で}、決めてください。", "よくかんがえた{うえで}、きめてください。", "Please decide after thinking it over carefully.", {
        near: [["後で", "That's just \"after\". For \"after (and based on)\", use 上で."]],
      }),
      s("両親と相談した{上で}、返事をします。", "りょうしんとそうだんした{うえで}、へんじをします。", "I'll give you my answer after discussing it with my parents.", {
        near: [["後で", "That's just \"after\". For \"after (and based on)\", use 上で."]],
      }),
      s("説明をよく読んだ{上で}、サインしてください。", "せつめいをよくよんだ{うえで}、サインしてください。", "Please sign after reading the explanation carefully.", {
        near: [["から", "That works, but 上で stresses \"having done that first\"."]],
      }),
      s("日本で生活する{上で}、日本語は欠かせない。", "にほんでせいかつする{うえで}、にほんごはかかせない。", "When it comes to living in Japan, Japanese is essential.", {
        near: [["ために", "ために works too. 上で means \"when it comes to\"."]],
      }),
      s("仕事をする{上で}、一番大切なのは信頼だ。", "しごとをする{うえで}、いちばんたいせつなのはしんらいだ。", "When it comes to work, the most important thing is trust.", {
        near: [["上に", "上に is \"on top of\". For \"when it comes to\", use 上で."]],
      }),
    ],
  }),

  point({
    id: "n3-ippou-da",
    title: "〜一方だ",
    meaning: "keeps (getting more / less), only ever",
    structure: "Verb dictionary form + 一方だ",
    related: ["n3-tsutsu-aru", "n4-you-ni-naru"],
    explanation: `
**一方だ** describes a trend that keeps going in one direction: 物価は上がる一方だ, "prices just keep going up". 一方 means "one way", so it's literally "only the one way".

It goes after the dictionary form of verbs of change: 増える, 減る, 上がる, 下がる, 悪くなる, 大きくなる. The trend is usually unwelcome, and the sentence often carries a complaint or worry.

In the past, 一方だった describes a trend that kept going: 雨は強くなる一方だった, "the rain just kept getting heavier".

Don't confuse it with 一方で, "on the other hand", which joins two contrasting facts. That comes later in this deck.
`,
    sentences: [
      s("物価は上がる{一方だ}。", "ぶっかはあがる{いっぽうだ}。", "Prices just keep going up.", {
        near: [["ばかりだ", "ばかりだ works too. This point practises 一方だ."]],
      }),
      s("最近、仕事が増える{一方です}。", "さいきん、しごとがふえる{いっぽうです}。", "Lately my workload just keeps growing.", {
        near: [["ところです", "That's \"about to\". For a steady trend, use 一方です."]],
      }),
      s("町の人口は減る{一方だ}。", "まちのじんこうはへる{いっぽうだ}。", "The town's population keeps shrinking.", {
        near: [["つもりだ", "That's intention. For a trend, use 一方だ."]],
      }),
      s("雨は強くなる{一方だった}。", "あめはつよくなる{いっぽうだった}。", "The rain just kept getting heavier.", {
        near: [["一方で", "一方で is \"on the other hand\". For \"kept getting\", end with 一方だった."]],
      }),
      s("このままでは、問題は大きくなる{一方だ}。", "このままでは、もんだいはおおきくなる{いっぽうだ}。", "At this rate, the problem will only get bigger.", {
        near: [["はずだ", "はずだ is an expectation. For \"will only keep getting\", use 一方だ."]],
      }),
    ],
  }),

  point({
    id: "n3-tsutsu-aru",
    title: "〜つつある",
    meaning: "is in the process of (changing)",
    structure: "Verb ます-stem + つつある",
    related: ["n3-ippou-da", "n5-te-iru"],
    explanation: `
**つつある** describes a change that's under way and still progressing: 景気は回復しつつある, "the economy is recovering". It attaches to the ます-stem.

It's used with verbs of change (増える, 減る, 変わる, 広まる, 回復する), and it's typical of news, reports and formal writing. In speech, ている does the same job: 回復している.

The difference is focus. ている can describe a finished state (窓が開いている, "the window is open"); つつある only ever means "gradually becoming", so it's clearer for trends.

Compare 一方だ, which also describes a trend, but with the sense of "only ever going that way", often with a complaint.
`,
    sentences: [
      s("景気は{回復しつつある}。", "けいきは{かいふくしつつある}。", "The economy is recovering.", {
        hint: "回復する",
        conj: { word: word("回復する", "かいふくする", "irregular"), form: "polite", cut: "ます", tail: "つつある" },
        near: [["回復している", "That works, but for a change in progress, formal writing uses 回復しつつある."]],
      }),
      s("地球の気温は{上がりつつある}。", "ちきゅうのきおんは{あがりつつある}。", "Global temperatures are rising.", {
        hint: "上がる",
        conj: { word: word("上がる", "あがる", "godan"), form: "polite", cut: "ます", tail: "つつある" },
        near: [["上がっている", "That works, but for a change in progress, formal writing uses 上がりつつある."]],
      }),
      s("日本の人口は{減りつつある}。", "にほんのじんこうは{へりつつある}。", "Japan's population is shrinking.", {
        hint: "減る",
        conj: { word: word("減る", "へる", "godan"), form: "polite", cut: "ます", tail: "つつある" },
        near: [["減っている", "That works, but for a change in progress, formal writing uses 減りつつある."]],
      }),
      s("町の様子は{変わりつつあります}。", "まちのようすは{かわりつつあります}。", "The town is gradually changing.", {
        hint: "変わる",
        conj: { word: word("変わる", "かわる", "godan"), form: "polite", cut: "ます", tail: "つつあります" },
        near: [["変わっています", "That works, but for a change in progress, formal writing uses 変わりつつあります."]],
      }),
      s("新しい技術が{広まりつつある}。", "あたらしいぎじゅつが{ひろまりつつある}。", "New technology is spreading.", {
        hint: "広まる",
        conj: { word: word("広まる", "ひろまる", "godan"), form: "polite", cut: "ます", tail: "つつある" },
        near: [["広まるつつある", "つつある goes on the ます-stem: 広まりつつある."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-tsurete",
    title: "〜につれて",
    meaning: "as (one thing changes, so does another)",
    structure: "Verb dictionary form / Noun + につれて",
    related: ["n3-ni-shitagatte", "n3-to-tomo-ni"],
    explanation: `
**につれて** links two changes: as the first progresses, the second follows. 年をとるにつれて、体が弱くなる, "as you get older, your body gets weaker".

Both parts describe gradual change, so the verbs are words like なる, 増える, 上がる, 近づく, 慣れる, 経つ. It doesn't work for a single event: not ベルが鳴るにつれて.

It's very close to にしたがって and とともに. につれて sounds a little more natural in speech, and focuses on the second change naturally following the first.

Compare ながら, which is one person doing two actions at once, not one change dragging another along.
`,
    sentences: [
      s("年をとる{につれて}、体が弱くなる。", "としをとる{につれて}、からだがよわくなる。", "As you get older, your body gets weaker.", {
        accept: ["にしたがって", "とともに"],
        near: [["ながら", "ながら is two actions at once. For one change following another, use につれて."]],
      }),
      s("時間がたつ{につれて}、悲しみは薄れていった。", "じかんがたつ{につれて}、かなしみはうすれていった。", "As time passed, the sadness faded.", {
        accept: ["にしたがって", "とともに"],
        near: [["うちに", "うちに is \"while\". For one change following another, use につれて."]],
      }),
      s("山を登る{につれて}、気温が下がってきた。", "やまをのぼる{につれて}、きおんがさがってきた。", "As we climbed the mountain, the temperature dropped.", {
        accept: ["にしたがって", "とともに"],
        near: [["ながら", "ながら is two actions at once. For one change following another, use につれて."]],
      }),
      s("日本語が上手になる{につれて}、日本の生活が楽しくなった。", "にほんごがじょうずになる{につれて}、にほんのせいかつがたのしくなった。", "As my Japanese improved, life in Japan became more fun.", {
        accept: ["にしたがって", "とともに"],
        near: [["によって", "によって is \"by\". For \"as one thing changes\", use につれて."]],
      }),
      s("試験が近づく{につれて}、不安になってきた。", "しけんがちかづく{につれて}、ふあんになってきた。", "As the exam got closer, I started getting anxious.", {
        accept: ["にしたがって", "とともに"],
        near: [["ながら", "ながら is two actions at once. For one change following another, use につれて."]],
      }),
    ],
  }),

  point({
    id: "n3-ni-shitagatte",
    title: "〜にしたがって",
    meaning: "in accordance with; as (one thing changes)",
    structure: "Noun + にしたがって · Verb dictionary form + にしたがって",
    related: ["n3-ni-tsurete", "n3-to-tomo-ni"],
    explanation: `
**にしたがって** comes from 従う, "to follow, obey", and has two uses.

After a noun for rules, instructions or guides, it means "following, in accordance with": 先生の指示にしたがって実験を進めた, "we carried out the experiment according to the teacher's instructions". ルールにしたがって, 地図にしたがって.

After a verb of change, it means "as": 町が大きくなるにしたがって、交通も便利になった, "as the town grew, transport improved too". Here it overlaps with につれて, but sounds a bit more formal and written.

It's often written in kanji as に従って. The formal short form is に従い.
`,
    sentences: [
      s("先生の指示{にしたがって}、実験を進めた。", "せんせいのしじ{にしたがって}、じっけんをすすめた。", "We carried out the experiment according to the teacher's instructions.", {
        accept: ["に従って"],
        near: [["によって", "によって is \"by\". For \"following instructions\", use にしたがって."]],
      }),
      s("地図{にしたがって}歩いていくと、駅に着いた。", "ちず{にしたがって}あるいていくと、えきについた。", "Following the map, I reached the station.", {
        accept: ["に従って"],
        near: [["によると", "That's a source. For following a map, use にしたがって."]],
      }),
      s("ルール{にしたがって}、ゴミを出してください。", "ルール{にしたがって}、ゴミをだしてください。", "Please put out your rubbish according to the rules.", {
        accept: ["に従って"],
        near: [["について", "について is \"about\". For \"in line with\", use にしたがって."]],
      }),
      s("高く登る{にしたがって}、景色がよくなる。", "たかくのぼる{にしたがって}、けしきがよくなる。", "The higher you climb, the better the view.", {
        accept: ["に従って", "につれて"],
        near: [["ながら", "ながら is two actions at once. For \"as one thing changes\", use にしたがって."]],
      }),
      s("町が大きくなる{にしたがって}、交通も便利になった。", "まちがおおきくなる{にしたがって}、こうつうもべんりになった。", "As the town grew, transport also became more convenient.", {
        accept: ["に従って", "につれて", "とともに"],
        near: [["ために", "ために is purpose or cause. For \"as it grew\", use にしたがって."]],
      }),
    ],
  }),

  point({
    id: "n3-to-tomo-ni",
    title: "〜とともに",
    meaning: "together with; as, along with",
    structure: "Noun / Verb dictionary form + とともに",
    related: ["n3-ni-tsurete", "n3-to-douji-ni", "n5-to-with"],
    explanation: `
**とともに** is the formal "together with": 家族とともに新しい年を迎えた, "I welcomed the new year together with my family". In speech, と一緒に does this job.

It also links two changes, like につれて: 経済の発展とともに、生活が豊かになった, "as the economy developed, life became more prosperous". And it can mean "at the same time as": 春の訪れとともに, "with the arrival of spring".

In speeches and formal letters, it joins two feelings or actions: 感謝とともに、お祝いを申し上げます, "with thanks, I offer my congratulations".

It's often written 共に. Because it's formal, it's much more common in writing and the news than in conversation.
`,
    sentences: [
      s("家族{とともに}、新しい年を迎えた。", "かぞく{とともに}、あたらしいとしをむかえた。", "I welcomed the new year together with my family.", {
        accept: ["と共に"],
        near: [["と一緒に", "That's the everyday version. In writing, use とともに."]],
      }),
      s("年齢{とともに}、考え方も変わる。", "ねんれい{とともに}、かんがえかたもかわる。", "Your way of thinking changes as you age.", {
        accept: ["と共に"],
        near: [["によって", "によって is \"depending on\". For \"as you age\", use とともに."]],
      }),
      s("経済の発展{とともに}、生活が豊かになった。", "けいざいのはってん{とともに}、せいかつがゆたかになった。", "As the economy developed, life became more prosperous.", {
        accept: ["と共に"],
        near: [["と一緒に", "と一緒に is for people doing things together. For one change with another, use とともに."]],
      }),
      s("春の訪れ{とともに}、花が咲き始めた。", "はるのおとずれ{とともに}、はながさきはじめた。", "With the arrival of spring, the flowers began to bloom.", {
        accept: ["と共に"],
        near: [["と一緒に", "と一緒に is for people doing things together. For one event with another, use とともに."]],
      }),
      s("感謝{とともに}、お祝いを申し上げます。", "かんしゃ{とともに}、おいわいをもうしあげます。", "With thanks, I offer my congratulations.", {
        accept: ["と共に"],
        near: [["と一緒に", "In formal speech and writing, use とともに."]],
      }),
    ],
  }),

  point({
    id: "n3-okini",
    title: "〜おきに",
    meaning: "at intervals of; every other",
    structure: "Number + counter + おきに",
    related: ["n3-goto-ni", "n4-zutsu"],
    explanation: `
**おきに** describes regular intervals: このバスは十分おきに来る, "this bus comes every ten minutes".

With time and distance, おきに and ごとに mean the same: 六時間おきに and 六時間ごとに both mean "every six hours".

With countable things, though, おきに skips one: 一日おきに is "every other day", 一行おきに is "every other line". It's literally "leaving one in between". ごとに with the same number means "every single one": 一日ごとに, "every day".

That difference is easy to get wrong, so check which one you mean when the number is one.
`,
    sentences: [
      s("このバスは十分{おきに}来る。", "このバスはじゅっぷん{おきに}くる。", "This bus comes every ten minutes.", {
        accept: ["ごとに"],
        near: [["ずつ", "ずつ is \"each\". For intervals, use おきに."]],
      }),
      s("一日{おきに}ジムに行っている。", "いちにち{おきに}ジムにいっている。", "I go to the gym every other day.", {
        near: [["ごとに", "一日ごとに is every day. Every other day is 一日おきに."]],
      }),
      s("薬は六時間{おきに}飲んでください。", "くすりはろくじかん{おきに}のんでください。", "Please take the medicine every six hours.", {
        accept: ["ごとに"],
        near: [["ずつ", "ずつ is \"each\". For intervals, use おきに."]],
      }),
      s("道には五メートル{おきに}木が植えてある。", "みちにはごメートル{おきに}きがうえてある。", "Trees have been planted every five metres along the road.", {
        accept: ["ごとに"],
        near: [["ずつ", "ずつ is \"each\". For intervals, use おきに."]],
      }),
      s("一行{おきに}書いてください。", "いちぎょう{おきに}かいてください。", "Please write on every other line.", {
        near: [["ごとに", "一行ごとに is every line. Every other line is 一行おきに."]],
      }),
    ],
  }),

  point({
    id: "n3-goto-ni",
    title: "〜ごとに",
    meaning: "every, each",
    structure: "Noun / Number + counter + ごとに",
    related: ["n3-okini", "n3-tabi-ni"],
    explanation: `
**ごとに** means "every" or "each": オリンピックは四年ごとに開かれる, "the Olympics are held every four years".

With units, it's a regular interval: 一時間ごとに, "every hour". With nouns, it means "each, one by one": 駅ごとに止まる, "stop at every station"; グループごとに発表する, "present group by group".

It also describes change with each unit: 季節ごとに景色が変わる, "the scenery changes with each season"; 一雨ごとに暖かくなる, "it gets warmer with every rainfall".

Compare たびに, for occasions ("every time I travel"), and おきに, which with countable things skips one. Before a noun, ごとに becomes ごとの: 月ごとの売り上げ, "monthly sales".
`,
    sentences: [
      s("オリンピックは四年{ごとに}開かれる。", "オリンピックはよねん{ごとに}ひらかれる。", "The Olympics are held every four years.", {
        accept: ["おきに"],
        near: [["ずつ", "ずつ is \"each, per\". For regular intervals, use ごとに."]],
      }),
      s("駅{ごとに}止まる電車に乗った。", "えき{ごとに}とまるでんしゃにのった。", "I took a train that stops at every station.", {
        near: [["おきに", "駅おきに would skip stations. For every station, use ごとに."]],
      }),
      s("季節{ごとに}、町の景色が変わる。", "きせつ{ごとに}、まちのけしきがかわる。", "The town looks different each season.", {
        near: [["たびに", "たびに is for occasions. For each season, use ごとに."]],
      }),
      s("一時間{ごとに}休憩をとってください。", "いちじかん{ごとに}きゅうけいをとってください。", "Please take a break every hour.", {
        accept: ["おきに"],
        near: [["ずつ", "ずつ is \"each, per\". For regular intervals, use ごとに."]],
      }),
      s("グループ{ごとに}発表してください。", "グループ{ごとに}はっぴょうしてください。", "Please give your presentations group by group.", {
        near: [["ずつ", "ずつ is for amounts. For each group, use ごとに."]],
      }),
    ],
  }),
];
