import { point, s, word } from "../../build";

/** What the て-form builds at N4: finishing, preparing, trying, directions, reasons. */

export const tePatterns = [
  point({
    id: "n4-te-shimau",
    title: "〜てしまう",
    meaning: "finish completely; end up doing (regret)",
    structure: "Verb て-form + しまう (casual: 〜ちゃう / 〜じゃう)",
    related: ["n4-te-oku", "n5-mashita"],
    explanation: `
て-form + **しまう** has two sides.

It can mean doing something completely: 宿題をもうやってしまいました, "I've already got my homework done".

More often, it adds regret or "oops": 電車に傘を忘れてしまった, "I left my umbrella on the train (argh)". The plain 忘れた states a fact; 忘れてしまった says how you feel about it.

In speech it shrinks: てしまう → **ちゃう**, でしまう → **じゃう**. 食べちゃった, "I ate it all (oops)"; 飲んじゃった, "I went and drank it". You'll hear these constantly.

It conjugates like any godan verb: しまった, しまいました, and しまった! on its own is "oh no!"
`,
    sentences: [
      s("宿題はもう{やってしまいました}。", "しゅくだいはもう{やってしまいました}。", "I've already got my homework done.", {
        hint: "やる",
        conj: { word: word("やる", "やる", "godan"), form: "te", tail: "しまいました" },
        near: [["やりました", "That's just \"I did it\". To stress it's completely done, use てしまいました."]],
      }),
      s("電車に傘を{忘れてしまった}。", "でんしゃにかさを{わすれてしまった}。", "I left my umbrella on the train.", {
        hint: "忘れる, regret",
        conj: { word: word("忘れる"), form: "te", tail: "しまった" },
        near: [["忘れた", "That's just a fact. To show you regret it, use てしまった."]],
      }),
      s("ケーキを全部{食べちゃった}。", "ケーキをぜんぶ{たべちゃった}。", "Oops, I ate the whole cake.", {
        hint: "食べる, casual",
        near: [["食べてしまった", "Right, but in casual speech てしまった shrinks to ちゃった."]],
      }),
      s("大切な写真を{消してしまいました}。", "たいせつなしゃしんを{けしてしまいました}。", "I accidentally deleted some important photos.", {
        hint: "消す, regret",
        conj: { word: word("消す", "けす", "godan"), form: "te", tail: "しまいました" },
        near: [["消しました", "That's just a fact. To show it was a mistake, use てしまいました."]],
      }),
      s("財布を{落としてしまった}。", "さいふを{おとしてしまった}。", "I've gone and dropped my wallet.", {
        hint: "落とす, regret",
        conj: { word: word("落とす", "おとす", "godan"), form: "te", tail: "しまった" },
        near: [["落ちてしまった", "落ちる is \"fall\" by itself. Dropping something is 落とす: 落としてしまった."]],
      }),
    ],
  }),

  point({
    id: "n4-te-oku",
    title: "〜ておく",
    meaning: "do in advance; leave as is",
    structure: "Verb て-form + おく (casual: 〜とく / 〜どく)",
    related: ["n4-te-aru", "n4-te-shimau"],
    explanation: `
て-form + **おく** means doing something now so it's ready for later: 旅行の前にホテルを予約しておきます, "I'll book the hotel before the trip". It's preparation.

It also means leaving something in a state on purpose: 窓は開けておいてください, "please leave the window open".

In speech ておく shrinks to **とく** (でおく to どく): やっとく, "I'll take care of it"; 読んどいて, "read it beforehand, okay?"

It's the natural thing to say about getting ready: for a trip, a test, guests. 覚えておきます is "I'll make sure to remember that".
`,
    sentences: [
      s("旅行の前にホテルを{予約しておきます}。", "りょこうのまえにホテルを{よやくしておきます}。", "I'll book the hotel before the trip.", {
        hint: "予約する, in advance",
        conj: { word: word("予約する", "よやくする", "irregular"), form: "te", tail: "おきます" },
        near: [["予約します", "That's just \"I'll book\". For doing it ahead of time, use ておきます."]],
      }),
      s("飲み物を冷蔵庫に{入れておいて}ください。", "のみものをれいぞうこに{いれておいて}ください。", "Please put the drinks in the fridge so they're ready.", {
        hint: "入れる, in advance",
        conj: { word: word("入れる", "いれる", "ichidan"), form: "te", tail: "おいて" },
        near: [["入れて", "That's just \"put them in\". For getting them ready, use ておいて."]],
      }),
      s("暑いから、窓は{開けておいて}ください。", "あついから、まどは{あけておいて}ください。", "It's hot, so please leave the window open.", {
        hint: "開ける, leave",
        conj: { word: word("開ける"), form: "te", tail: "おいて" },
        near: [["開けて", "That's \"open it\". For leaving it open, use ておいて."]],
      }),
      s("明日のテストのために、単語を{覚えておきます}。", "あしたのテストのために、たんごを{おぼえておきます}。", "I'll memorise the vocabulary for tomorrow's test.", {
        hint: "覚える, in advance",
        conj: { word: word("覚える"), form: "te", tail: "おきます" },
        near: [["覚えます", "That's just \"I'll memorise\". For preparing ahead, use ておきます."]],
      }),
      s("大丈夫、私が{やっとく}よ。", "だいじょうぶ、わたしが{やっとく}よ。", "Don't worry, I'll take care of it.", {
        hint: "やる, casual",
        near: [["やっておく", "Right, but in casual speech ておく shrinks to とく."]],
      }),
    ],
  }),

  point({
    id: "n4-te-aru",
    title: "〜てある",
    meaning: "has been done (and is still so)",
    structure: "Thing が + transitive verb て-form + ある",
    related: ["n4-te-oku", "n5-te-iru-state"],
    explanation: `
て-form + **ある** describes a state that someone created on purpose: 窓が開けてあります, "the window has been left open" (someone opened it, for a reason).

It uses verbs that take an object (開ける, 書く, 貼る), and the thing becomes the subject with が.

Compare ている with the matching verb that has no object: 窓が開いています just says the window is open, no one in the picture. 窓が開けてあります implies a person did it deliberately.

It's what you use to describe what's been set up or written: 本に名前が書いてあります, "the book has a name written in it"; 壁に地図が貼ってある, "there's a map up on the wall".
`,
    sentences: [
      s("換気のために、窓が{開けてあります}。", "かんきのために、まどが{あけてあります}。", "The window's been left open to air the room.", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "te", tail: "あります" },
        near: [["開いています", "That just says it's open. To show someone opened it on purpose, use 開けてあります."]],
      }),
      s("壁に地図が{貼ってあります}。", "かべにちずが{はってあります}。", "There's a map up on the wall.", {
        hint: "貼る",
        conj: { word: word("貼る", "はる", "godan"), form: "te", tail: "あります" },
        near: [["貼っています", "That would be someone putting it up right now. For what's up there, use てあります."]],
      }),
      s("テーブルに花が{飾ってあります}。", "テーブルにはなが{かざってあります}。", "Flowers have been set out on the table.", {
        hint: "飾る",
        conj: { word: word("飾る", "かざる", "godan"), form: "te", tail: "あります" },
        near: [["飾っています", "That would be someone arranging them right now. For the result, use てあります."]],
      }),
      s("ビールはもう{冷やしてあります}よ。", "ビールはもう{ひやしてあります}よ。", "The beer's already been chilled.", {
        hint: "冷やす",
        conj: { word: word("冷やす", "ひやす", "godan"), form: "te", tail: "あります" },
        near: [["冷えています", "That just says it's cold. To show someone chilled it ready for you, use 冷やしてあります."]],
      }),
      s("この本に名前が{書いてあります}。", "このほんになまえが{かいてあります}。", "This book has a name written in it.", {
        hint: "書く",
        conj: { word: word("書く"), form: "te", tail: "あります" },
        near: [["書いています", "That's \"someone is writing\". For what's written there, use 書いてあります."]],
      }),
    ],
  }),

  point({
    id: "n4-te-miru",
    title: "〜てみる",
    meaning: "try doing (and see)",
    structure: "Verb て-form + みる",
    related: ["n4-tara-dou", "n5-tai"],
    explanation: `
て-form + **みる** means "do it and see": この服を着てみてもいいですか, "may I try this on?"; 日本料理を作ってみたい, "I'd like to try making Japanese food".

It's about trying something out, testing what it's like. It isn't "try (and fail)", "attempt": for making an effort at something difficult, Japanese uses ようとする, at N3.

みる here is the verb "see", but it's always written in kana in this pattern.

It combines with the forms you know: てみたい (want to try), てみたら? (why not try), てみてください (try it), てみました (I tried it).
`,
    sentences: [
      s("この服を{着てみても}いいですか。", "このふくを{きてみても}いいですか。", "May I try this on?", {
        hint: "着る, try",
        conj: { word: word("着る"), form: "te", tail: "みても" },
        near: [["着ても", "着てもいいですか is \"may I wear it?\". For trying it on, use 着てみてもいいですか."]],
      }),
      s("一度、日本料理を{作ってみたい}です。", "いちど、にほんりょうりを{つくってみたい}です。", "I'd like to try making Japanese food sometime.", {
        hint: "作る, try",
        conj: { word: word("作る"), form: "te", tail: "みたい" },
        near: [["作りたい", "That's \"I want to make it\". For \"try making\", use てみたい."]],
      }),
      s("分からないなら、先生に{聞いてみたら}？", "わからないなら、せんせいに{きいてみたら}？", "If you don't know, why not try asking the teacher?", {
        hint: "聞く, try",
        conj: { word: word("聞く"), form: "te", tail: "みたら" },
        near: [["聞いたら", "That's \"why not ask?\". To suggest trying it, use てみたら."]],
      }),
      s("駅前の新しいラーメン屋に{行ってみました}。", "えきまえのあたらしいラーメンやに{いってみました}。", "I tried the new ramen place by the station.", {
        hint: "行く, try",
        conj: { word: word("行く"), form: "te", tail: "みました" },
        near: [["行きました", "That's just \"I went\". To say you tried it out, use てみました."]],
      }),
      s("おいしいよ。ちょっと{食べてみて}。", "おいしいよ。ちょっと{たべてみて}。", "It's good. Have a taste.", {
        hint: "食べる, try, casual",
        conj: { word: word("食べる"), form: "te", tail: "みて" },
        near: [["食べて", "That's \"eat it\". To say \"try it\", use てみて."]],
      }),
    ],
  }),

  point({
    id: "n4-te-iku-kuru",
    title: "〜ていく・〜てくる",
    meaning: "go / come (doing); change over time",
    structure: "Verb て-form + いく / くる",
    related: ["n5-te-and", "n5-naru"],
    explanation: `
て-form + **いく** and **くる** add direction, the way "away" and "back" do in English.

In space: 持っていく is "take (it) there", 持ってくる is "bring (it) here". 買ってくる is "go and buy, and come back": 飲み物を買ってきます, "I'll pop out for some drinks".

In time: てくる is a change up to now, ていく is a change from now on. 寒くなってきた, "it's been getting colder"; これから増えていく, "it will keep increasing".

The いく and くる are written in kana in this pattern, and conjugate as usual: 持ってきて, 持っていった.
`,
    sentences: [
      s("明日、お弁当を{持っていきます}。", "あした、おべんとうを{もっていきます}。", "I'll take a packed lunch tomorrow.", {
        hint: "持つ, taking it there",
        conj: { word: word("持つ"), form: "te", tail: "いきます" },
        near: [["持ってきます", "てくる brings it here. Taking it with you there is ていく."]],
      }),
      s("ちょっと飲み物を{買ってきます}。", "ちょっとのみものを{かってきます}。", "I'll just pop out for some drinks.", {
        hint: "買う, and come back",
        conj: { word: word("買う"), form: "te", tail: "きます" },
        near: [["買っていきます", "ていく would be buying them on your way somewhere. Going and coming back is てきます."]],
      }),
      s("だんだん寒く{なってきました}。", "だんだんさむく{なってきました}。", "It's been getting colder.", {
        hint: "なる, up to now",
        conj: { word: word("なる", "なる", "godan"), form: "te", tail: "きました" },
        near: [["なっていきました", "ていく is a change from now on. For a change up to now, use てきました."]],
      }),
      s("雨が降りそうだから、傘を{持ってきて}ください。", "あめがふりそうだから、かさを{もってきて}ください。", "It looks like rain, so please bring an umbrella.", {
        hint: "持つ, bringing it here",
        conj: { word: word("持つ"), form: "te", tail: "きて" },
        near: [["持っていって", "That's \"take it (away) with you\". For bringing it here, use てきて."]],
      }),
      s("これから日本に住む外国人は{増えていく}でしょう。", "これからにほんにすむがいこくじんは{ふえていく}でしょう。", "The number of foreigners living in Japan will probably keep growing.", {
        hint: "増える, from now on",
        conj: { word: word("増える", "ふえる", "ichidan"), form: "te", tail: "いく" },
        near: [["増えてくる", "てくる is a change up to now. For a change from now on, use ていく."]],
      }),
    ],
  }),

  point({
    id: "n4-naide",
    title: "〜ないで",
    meaning: "without doing, instead of doing",
    structure: "Verb ない-form + で",
    related: ["n4-te-reason", "n5-naide-kudasai"],
    explanation: `
ない-form + **で** means "without doing" or "instead of doing": 朝ご飯を食べないで学校に行きました, "I went to school without eating breakfast".

It's the negative partner of the て-form that joins actions: 食べて行った (ate, then went) vs 食べないで行った (went without eating).

It's the same ないで as in ないでください ("please don't"), which is really "please (go on) without doing".

Don't mix it up with なくて, which gives a reason: 分からなくて困った, "I didn't understand, so I was stuck". A rough test: if English says "without", it's ないで.
`,
    sentences: [
      s("朝ご飯を{食べないで}学校に行きました。", "あさごはんを{たべないで}がっこうにいきました。", "I went to school without eating breakfast.", {
        hint: "食べる, without",
        conj: { word: word("食べる"), form: "negative", tail: "で" },
        near: [["食べなくて", "なくて gives a reason. For \"without eating\", use ないで."]],
      }),
      s("傘を{持たないで}出かけた。", "かさを{もたないで}でかけた。", "I went out without an umbrella.", {
        hint: "持つ, without",
        conj: { word: word("持つ"), form: "negative", tail: "で" },
        near: [["持たなくて", "なくて gives a reason. For \"without\", use ないで."]],
      }),
      s("辞書を{使わないで}読んでみてください。", "じしょを{つかわないで}よんでみてください。", "Try reading it without using a dictionary.", {
        hint: "使う, without",
        conj: { word: word("使う"), form: "negative", tail: "で" },
        near: [["使いないで", "Godan verbs move to the a-row before ない: 使わないで."]],
      }),
      s("昨日は{寝ないで}勉強しました。", "きのうは{ねないで}べんきょうしました。", "Yesterday I studied all night without sleeping.", {
        hint: "寝る, without",
        conj: { word: word("寝る"), form: "negative", tail: "で" },
        near: [["寝なくて", "なくて gives a reason. For \"without sleeping\", use ないで."]],
      }),
      s("電車に{乗らないで}、歩いて帰りました。", "でんしゃに{のらないで}、あるいてかえりました。", "Instead of taking the train, I walked home.", {
        hint: "乗る, instead of",
        conj: { word: word("乗る", "のる", "godan"), form: "negative", tail: "で" },
        near: [["乗らなくて", "なくて gives a reason. For \"instead of\", use ないで."]],
      }),
    ],
  }),

  point({
    id: "n4-te-reason",
    title: "〜て・〜なくて (reason)",
    meaning: "because, and so (cause and effect)",
    structure: "Verb / adjective て-form, result · ない → なくて",
    related: ["n4-naide", "n4-node", "n5-kara-because"],
    explanation: `
The て-form often carries a reason: 風邪を引いて学校を休みました, "I caught a cold and missed school". The first clause causes the second.

For a negative cause, use **なくて**: 意味が分からなくて困った, "I didn't understand, and I was stuck".

Adjectives work the same way: 忙しくて時間がなかった, "I was so busy I had no time".

The limit: the result has to be a state, feeling or thing that happened, not a request, an invitation or a decision. 暑くて窓を開けてください is wrong; use から there.

Feelings are the classic case: 会えて嬉しい, "I'm happy to see you (because I can)".
`,
    sentences: [
      s("風邪を{引いて}、学校を休みました。", "かぜを{ひいて}、がっこうをやすみました。", "I caught a cold and missed school.", {
        hint: "引く",
        conj: { word: word("引く", "ひく", "godan"), form: "te", marker: "て" },
        near: [["引いたから", "から works too, and is more explicit. This point practises the て-form."]],
      }),
      s("皆さんに{会えて}、嬉しいです。", "みなさんに{あえて}、うれしいです。", "I'm so glad to meet you all.", {
        hint: "会う, can",
        conj: { word: word("会える", "あえる", "ichidan"), form: "te", marker: "て" },
        near: [["会って", "会って嬉しい misses the \"being able to\". Use the potential: 会えて."]],
      }),
      s("意味が{分からなくて}、困りました。", "いみが{わからなくて}、こまりました。", "I didn't understand what it meant, and I was stuck.", {
        hint: "分かる, negative",
        conj: { word: word("分かる"), form: "negative", cut: "い", tail: "くて" },
        near: [["分からないで", "ないで is \"without doing\". For a reason, use なくて."]],
      }),
      s("雨が{降って}、試合が中止になりました。", "あめが{ふって}、しあいがちゅうしになりました。", "It rained, and the match was called off.", {
        hint: "降る",
        conj: { word: word("降る"), form: "te", marker: "て" },
        near: [["降ったから", "から works too, and is more explicit. This point practises the て-form."]],
      }),
      s("{忙しくて}、昼ご飯を食べる時間がなかった。", "{いそがしくて}、ひるごはんをたべるじかんがなかった。", "I was so busy I had no time for lunch.", {
        hint: "忙しい",
        conj: { word: word("忙しい"), form: "te", marker: "て" },
        near: [["忙しいで", "い-adjectives drop い and take くて: 忙しくて."]],
      }),
    ],
  }),

  point({
    id: "n4-te-hoshii",
    title: "〜てほしい",
    meaning: "want (someone) to do",
    structure: "Person に + Verb て-form + ほしい",
    related: ["n5-ga-hoshii", "n5-tai"],
    explanation: `
て-form + **ほしい** says you want someone else to do something: 母にもっと休んでほしい, "I want my mother to rest more". The person takes に.

Compare たい, which is only for what you yourself want to do: 休みたい is "I want to rest".

For "I don't want you to", use the ない form: 誰にも言わないでほしい, "I don't want you to tell anyone".

Said to someone's face it can sound demanding, so it's often softened: 早く来てほしいんだけど…, "I'd like you to come early, if that's okay…". With a superior, a request (ていただけませんか) is safer.
`,
    sentences: [
      s("母にもっと{休んでほしい}です。", "ははにもっと{やすんでほしい}です。", "I want my mother to rest more.", {
        hint: "休む",
        conj: { word: word("休む"), form: "te", tail: "ほしい" },
        near: [["休みたい", "That's \"I want to rest\". For wanting her to rest, use てほしい."]],
      }),
      s("隣の人に静かに{してほしい}。", "となりのひとにしずかに{してほしい}。", "I wish the people next door would be quiet.", {
        hint: "する",
        conj: { word: word("する"), form: "te", tail: "ほしい" },
        near: [["したい", "That's \"I want to do it\". For wanting them to, use てほしい."]],
      }),
      s("明日は早く{来てほしい}んだけど。", "あしたははやく{きてほしい}んだけど。", "I'd like you to come early tomorrow, if that's okay.", {
        hint: "来る",
        conj: { word: word("来る"), form: "te", tail: "ほしい" },
        near: [["来たい", "That's \"I want to come\". For wanting them to come, use てほしい."]],
      }),
      s("このことは誰にも{言わないでほしい}。", "このことはだれにも{いわないでほしい}。", "I don't want you to tell anyone about this.", {
        hint: "言う, negative",
        conj: { word: word("言う"), form: "negative", tail: "でほしい" },
        near: [["言いたくない", "That's \"I don't want to say\". For not wanting them to, use ないでほしい."]],
      }),
      s("子どもたちには元気に{育ってほしい}です。", "こどもたちにはげんきに{そだってほしい}です。", "I want my children to grow up healthy.", {
        hint: "育つ",
        conj: { word: word("育つ"), form: "te", tail: "ほしい" },
        near: [["育ちたい", "That's \"I want to grow up\". For wanting them to, use てほしい."]],
      }),
    ],
  }),
];
