import { point, s, word } from "../../build";

/**
 * The rest of N4: verb pairs and tense traps that grammar questions love, の or こと,
 * "even" and "no matter what", やる and ございます, respect with られる, the
 * adverbs of certainty, and the conjunctions that join whole sentences.
 */

export const extras = [
  point({
    id: "n4-transitivity",
    title: "自動詞・他動詞 (開く・開ける)",
    meaning: "it happens vs. someone does it (verb pairs)",
    structure: "Noun が + intransitive verb · Noun を + transitive verb",
    related: ["n4-te-aru", "n5-te-iru-state", "n5-wo", "n5-ga"],
    explanation: `
Many verbs come in pairs. One says something happens by itself (**ドアが開く**, "the door opens"); the other says someone does it (**ドアを開ける**, "I open the door"). The first takes が, the second を.

Common pairs: 開く/開ける, 閉まる/閉める, つく/つける, 消える/消す, 始まる/始める, 止まる/止める, 落ちる/落とす, 壊れる/壊す, 入る/入れる, 出る/出す.

With ている, the intransitive one describes a state: 電気がついている, "the light is on". With てある, the transitive one describes a state someone set up on purpose: 電気がつけてある.

Picking the wrong half of a pair is one of the most common traps in grammar questions, so check the particle: が or を.
`,
    sentences: [
      s("風でドアが{開いた}。", "かぜでドアが{あいた}。", "The door blew open in the wind.", {
        near: [["開けた", "開ける needs someone to do it (ドアを開ける). For the door opening by itself, use 開いた.", "あけた"]],
      }),
      s("寒いので、窓を{閉めて}ください。", "さむいので、まどを{しめて}ください。", "It's cold, so please close the window.", {
        near: [["閉まって", "閉まる is \"closes by itself\". With を, use 閉めて.", "しまって"]],
      }),
      s("部屋の電気が{ついて}います。", "へやのでんきが{ついて}います。", "The light in the room is on.", {
        near: [["つけて", "つける is \"switch on\" and takes を. For the light being on, use ついて."]],
      }),
      s("会議は九時に{始まります}。", "かいぎはくじに{はじまります}。", "The meeting starts at nine.", {
        near: [["始めます", "始める needs someone to start it (with を). For the meeting starting, use 始まります.", "はじめます"]],
      }),
      s("財布を{落として}しまった。", "さいふを{おとして}しまった。", "I've dropped my wallet.", {
        near: [["落ちて", "落ちる is \"fall\" by itself. With を, use 落として.", "おちて"]],
      }),
      s("電車が急に{止まった}。", "でんしゃがきゅうに{とまった}。", "The train suddenly stopped.", {
        near: [["止めた", "止める needs someone to stop it (with を). For the train stopping, use 止まった.", "とめた"]],
      }),
    ],
  }),

  point({
    id: "n4-toki-tense",
    title: "〜るとき・〜たとき",
    meaning: "when (before it happens vs. after it has happened)",
    structure: "Dictionary form + とき (not yet) · た-form + とき (already)",
    related: ["n5-toki", "n5-mae-ni", "n5-ato-de"],
    explanation: `
With とき, the verb's tense shows the order of events, not when the whole sentence happens.

日本へ**行く**とき、カメラを買った: "when I was about to go to Japan, I bought a camera", so you bought it before leaving. 日本へ**行った**とき、カメラを買った: "when I went to Japan, I bought a camera", so you bought it there.

The rule: use the dictionary form if the とき action hasn't happened yet when the main action takes place, and the た-form if it already has.

Everyday greetings show it clearly: 家を出るとき「いってきます」 (before you're out of the door), 帰ったとき「ただいま」 (once you're home). This is a favourite trick in grammar questions.
`,
    sentences: [
      s("日本へ{行く}とき、空港でカメラを買った。", "にほんへ{いく}とき、くうこうでカメラをかった。", "Before leaving for Japan, I bought a camera at the airport.", {
        near: [["行った", "行ったとき would mean after arriving in Japan. Buying it before you left is 行くとき."]],
      }),
      s("日本へ{行った}とき、京都でお茶を飲んだ。", "にほんへ{いった}とき、きょうとでおちゃをのんだ。", "When I went to Japan, I had tea in Kyoto.", {
        near: [["行く", "行くとき would mean before getting there. Kyoto comes after arriving: 行ったとき."]],
      }),
      s("家を{出る}とき、「いってきます」と言います。", "いえを{でる}とき、「いってきます」といいます。", "When you leave the house, you say \"ittekimasu\".", {
        near: [["出た", "You say it before you're out of the door: 出るとき."]],
      }),
      s("家に{帰った}とき、「ただいま」と言います。", "いえに{かえった}とき、「ただいま」といいます。", "When you get home, you say \"tadaima\".", {
        near: [["帰る", "You say it once you've arrived: 帰ったとき."]],
      }),
      s("朝{起きた}とき、雨が降っていた。", "あさ{おきた}とき、あめがふっていた。", "When I woke up this morning, it was raining.", {
        near: [["起きる", "You noticed after waking up: 起きたとき."]],
      }),
      s("夜{寝る}とき、電気を消します。", "よる{ねる}とき、でんきをけします。", "I turn off the light when I go to bed.", {
        near: [["寝た", "You switch it off before you're asleep: 寝るとき."]],
      }),
    ],
  }),

  point({
    id: "n4-no-vs-koto",
    title: "〜の・〜こと (which one?)",
    meaning: "turning a verb into a noun: when it must be の, and when こと",
    structure: "Plain form + の (見る · 聞こえる · 手伝う · 待つ) · Plain form + こと (です · ができる · にする)",
    related: ["n4-koto-nominalizer", "n4-no-wa", "n5-verb-no"],
    explanation: `
Both の and こと turn a verb into a noun, and often either works: 泳ぐのが好き, 泳ぐことが好き. But some patterns accept only one.

**Only の**: with verbs of seeing, hearing and joining in, like 見る, 聞こえる, 手伝う, 待つ, 止める: 子どもが遊んでいるのを見た, "I watched the children playing". Also in のは〜だ (N4).

**Only こと**: directly before です or だ (私の夢は医者になることです), and in set patterns: ことができる, ことがある, ことにする, ことになる.

A quick check: if you're perceiving or taking part in the action itself, use の. If you're talking about it as an idea, a fact or a rule, use こと.
`,
    sentences: [
      s("子どもたちが公園で遊んでいる{の}を見た。", "こどもたちがこうえんであそんでいる{の}をみた。", "I watched the children playing in the park.", {
        near: [["こと", "見る needs の: 遊んでいるのを見た."]],
      }),
      s("私の夢は医者になる{こと}です。", "わたしのゆめはいしゃになる{こと}です。", "My dream is to become a doctor.", {
        near: [["の", "Right before です like this, use こと."]],
      }),
      s("隣の人が歌っている{の}が聞こえる。", "となりのひとがうたっている{の}がきこえる。", "I can hear the person next door singing.", {
        near: [["こと", "聞こえる needs の."]],
      }),
      s("母が料理を作る{の}を手伝った。", "ははがりょうりをつくる{の}をてつだった。", "I helped my mother cook.", {
        near: [["こと", "手伝う needs の."]],
      }),
      s("日本語を話す{こと}ができます。", "にほんごをはなす{こと}ができます。", "I can speak Japanese.", {
        near: [["の", "ことができる is a set pattern: always こと."]],
      }),
      s("駅で友達が来る{の}を待っています。", "えきでともだちがくる{の}をまっています。", "I'm waiting at the station for my friend to arrive.", {
        near: [["こと", "待つ needs の."]],
      }),
    ],
  }),

  point({
    id: "n4-demo-even",
    title: "〜でも (even)",
    meaning: "even",
    structure: "Noun + でも",
    related: ["n4-demo-suggest", "n5-demo", "n3-sae"],
    explanation: `
After a noun, **でも** can mean "even": この問題は子どもでもわかる, "even a child can understand this problem". It picks an extreme example: if it's true even for that, it's true for everything else.

It's common with people (子ども, 先生, 日本人), times (雨の日でも, 夜遅くでも) and conditions.

It's softer and more everyday than さえ (N3). In casual speech, だって often replaces it: 子どもだってわかる.

The same でも has other jobs: "or something" (お茶でも, N4) and "but" at the start of a sentence (N5). If you can say "even" in English, it's this one.
`,
    sentences: [
      s("この問題は子ども{でも}わかる。", "このもんだいはこども{でも}わかる。", "Even a child can understand this problem.", {
        accept: ["だって"],
        near: [["も", "That's \"also\". For \"even\", use でも."]],
      }),
      s("雨の日{でも}、毎日走っている。", "あめのひ{でも}、まいにちはしっている。", "I run every day, even on rainy days.", {
        accept: ["だって"],
        near: [["も", "That's \"also\". For \"even\", use でも."]],
      }),
      s("日本人{でも}、この漢字は読めない。", "にほんじん{でも}、このかんじはよめない。", "Even Japanese people can't read this kanji.", {
        accept: ["だって"],
        near: [["には", "That works, but for \"even\", use でも."]],
      }),
      s("先生{でも}わからないことがある。", "せんせい{でも}わからないことがある。", "There are things even teachers don't know.", {
        accept: ["だって"],
        near: [["が", "That's plain. For \"even\", use でも."]],
      }),
      s("このレストランは夜遅く{でも}開いている。", "このレストランはよるおそく{でも}あいている。", "This restaurant is open even late at night.", {
        near: [["も", "That's \"also\". For \"even\", use でも."]],
      }),
    ],
  }),

  point({
    id: "n4-question-temo",
    title: "何〜ても・誰〜ても (no matter what, who)",
    meaning: "no matter what / who / where / when",
    structure: "Question word + Verb て-form + も",
    related: ["n4-temo", "n5-question-demo"],
    explanation: `
A question word plus ても means "no matter": 何を食べても太らない, "no matter what I eat, I don't put on weight".

The question word can be 何 (what), 誰 (who), どこ (where), いつ (when) or どう (how): 誰に聞いてもわからなかった, "no matter who I asked, nobody knew"; いつ来ても込んでいる, "whenever I come, it's crowded".

It's ても (N4) with a question word in front, so the verb takes the て-form plus も. The second half is the same result every time.

Compare たら, "if, when": 何を食べたら is "what should I eat", a real question. ても says the answer doesn't matter.
`,
    sentences: [
      s("何を{食べても}太らない。", "なにを{たべても}ふとらない。", "No matter what I eat, I don't put on weight.", {
        hint: "食べる",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "te", tail: "も" },
        near: [["食べたら", "That's \"if I eat\". For \"no matter what\", use 食べても."]],
      }),
      s("誰に{聞いても}、答えがわからなかった。", "だれに{きいても}、こたえがわからなかった。", "No matter who I asked, nobody knew the answer.", {
        hint: "聞く",
        conj: { word: word("聞く", "きく", "godan"), form: "te", tail: "も" },
        near: [["聞いたら", "That's \"if I ask\". For \"no matter who\", use 聞いても."]],
      }),
      s("いつ{来ても}、この店は込んでいる。", "いつ{きても}、このみせはこんでいる。", "Whenever I come, this shop is crowded.", {
        hint: "来る",
        conj: { word: word("来る", "くる", "irregular"), form: "te", tail: "も" },
        near: [["来たら", "That's \"when I came\". For \"whenever\", use 来ても."]],
      }),
      s("どこを{探しても}、鍵が見つからない。", "どこを{さがしても}、かぎがみつからない。", "No matter where I look, I can't find my keys.", {
        hint: "探す",
        conj: { word: word("探す", "さがす", "godan"), form: "te", tail: "も" },
        near: [["探したら", "That's \"if I look\". For \"no matter where\", use 探しても."]],
      }),
      s("どう{説明しても}、わかってもらえない。", "どう{せつめいしても}、わかってもらえない。", "However I explain it, they don't understand.", {
        hint: "説明する",
        conj: { word: word("説明する", "せつめいする", "irregular"), form: "te", tail: "も" },
        near: [["説明したら", "That's \"if I explain\". For \"however\", use 説明しても."]],
      }),
    ],
  }),

  point({
    id: "n4-te-yaru",
    title: "やる・〜てやる",
    meaning: "give / do (for someone lower); I'll show you",
    structure: "Noun に + Noun を + やる · Verb て-form + やる",
    related: ["n4-ageru", "n4-te-ageru"],
    explanation: `
**やる** is a casual form of あげる, used for giving to people or animals below you: 犬にえさをやる, "feed the dog"; 花に水をやる, "water the flowers".

**てやる** does the same for favours: 弟に宿題を教えてやった, "I helped my little brother with his homework". It's fine for younger family members, pets and plants, but with adults it sounds condescending; use てあげる instead.

It also expresses determination or a threat, often in anger: 絶対に勝ってやる, "I'll win, just you watch".

Remember the direction: やる and あげる go out from you; くれる comes to you.
`,
    sentences: [
      s("犬にえさを{やりました}。", "いぬにえさを{やりました}。", "I fed the dog.", {
        near: [["くれました", "くれる is for giving to you. For giving to a pet, use やる."]],
      }),
      s("毎朝、花に水を{やる}。", "まいあさ、はなにみずを{やる}。", "I water the flowers every morning.", {
        near: [["くれる", "くれる is for giving to you. For watering plants, use やる."]],
      }),
      s("弟に宿題を{教えてやった}。", "おとうとにしゅくだいを{おしえてやった}。", "I helped my little brother with his homework.", {
        hint: "教える",
        conj: { word: word("教える", "おしえる", "ichidan"), form: "te", tail: "やった" },
        near: [["教えてくれた", "That's someone helping you. For helping a younger brother, use 教えてやった."]],
      }),
      s("今度こそ、絶対に{勝ってやる}。", "こんどこそ、ぜったいに{かってやる}。", "This time, I'll win, just you watch.", {
        hint: "勝つ",
        conj: { word: word("勝つ", "かつ", "godan"), form: "te", tail: "やる" },
        near: [["勝ってあげる", "あげる is a kind favour. For determination, use 勝ってやる."]],
      }),
      s("子どもに絵本を{読んでやった}。", "こどもにえほんを{よんでやった}。", "I read my child a picture book.", {
        hint: "読む",
        conj: { word: word("読む", "よむ", "godan"), form: "te", tail: "やった" },
        near: [["読んでもらった", "That's having it read to you. For reading to your child, use 読んでやった."]],
      }),
    ],
  }),

  point({
    id: "n4-de-gozaimasu",
    title: "ございます・でございます",
    meaning: "there is; is (very polite)",
    structure: "Noun + でございます · (Place に) + ございます",
    register: "Service language: shops, hotels, announcements.",
    related: ["n4-kenjougo", "n5-desu", "n5-arimasu"],
    explanation: `
**ございます** is the very polite form of ある, and **でございます** of です. You'll hear them constantly in shops, hotels and announcements: お手洗いは二階にございます, "the toilets are on the second floor"; こちらが新しい商品でございます, "this is our new product".

They make the speaker sound courteous without raising anyone in particular, so they work for things as well as people.

Many set phrases contain ございます: ありがとうございます, おはようございます, おめでとうございます, 申し訳ございません.

In your own everyday speech, です and あります are enough. ございます is mainly service and ceremony language, so it's important to recognise.
`,
    sentences: [
      s("お手洗いは二階に{ございます}。", "おてあらいはにかいに{ございます}。", "The toilets are on the second floor.", {
        near: [["あります", "That's plain polite. In service language, use ございます."]],
      }),
      s("こちらが新しい商品{でございます}。", "こちらがあたらしいしょうひん{でございます}。", "This is our new product.", {
        near: [["です", "That's plain polite. In service language, use でございます."]],
      }),
      s("申し訳ございませんが、本日は満席{でございます}。", "もうしわけございませんが、ほんじつはまんせき{でございます}。", "I'm terribly sorry, but we're fully booked today.", {
        near: [["です", "That's plain polite. In service language, use でございます."]],
      }),
      s("何か質問は{ございますか}。", "なにかしつもんは{ございますか}。", "Are there any questions?", {
        near: [["ありますか", "That's plain polite. Formally, use ございますか."]],
      }),
      s("お電話ありがとう{ございます}。", "おでんわありがとう{ございます}。", "Thank you for calling.", {
        near: [["です", "The set phrase is ありがとうございます."]],
      }),
    ],
  }),

  point({
    id: "n4-sonkei-reru",
    title: "〜れる・〜られる (respect)",
    meaning: "(respectful form of a verb)",
    structure: "Passive form used for respect: 行かれる · 読まれる · 来られる · される",
    related: ["n4-o-ni-naru", "n4-sonkeigo", "n4-passive"],
    explanation: `
The passive form doubles as a respectful form: 社長は何時に来られますか, "what time will the president be coming?" It raises the person doing the action, like お〜になる but a little less formal.

It works with most verbs: 帰られる, 書かれる, 読まれる, and する becomes される. Verbs with their own respectful words (いらっしゃる, 召し上がる, おっしゃる) usually use those instead.

How do you tell it from a real passive? A passive has someone acting on the subject (先生に叱られた, "I was scolded by the teacher"). In 先生が本を書かれた, the teacher is doing the writing, so it's respect.

It's common in business, the news and polite conversation about superiors.
`,
    sentences: [
      s("社長は何時に{来られますか}。", "しゃちょうはなんじに{こられますか}。", "What time will the president be coming?", {
        near: [["来ますか", "That's plain polite. For respect, use 来られますか."]],
      }),
      s("先生はもう{帰られました}。", "せんせいはもう{かえられました}。", "The teacher has already gone home.", {
        near: [["帰りました", "That's plain polite. For respect, use 帰られました."]],
      }),
      s("部長はもうこの本を{読まれましたか}。", "ぶちょうはもうこのほんを{よまれましたか}。", "Has the manager read this book yet?", {
        near: [["読みましたか", "That's plain polite. For respect, use 読まれましたか."]],
      }),
      s("これは田中様が{書かれた}記事です。", "これはたなかさまが{かかれた}きじです。", "This is the article Mr Tanaka wrote.", {
        near: [["書いた", "That's plain. For respect towards Mr Tanaka, use 書かれた."]],
      }),
      s("先生は毎朝散歩を{されます}。", "せんせいはまいあささんぽを{されます}。", "The teacher takes a walk every morning.", {
        near: [["します", "That's plain polite. For respect, する becomes されます."]],
      }),
    ],
  }),

  point({
    id: "n4-naa",
    title: "〜な・〜なあ (feeling)",
    meaning: "how …!, I wish (musing)",
    structure: "Plain form + な / なあ",
    register: "Casual, often said to yourself.",
    related: ["n5-ne", "n4-kana"],
    explanation: `
At the end of a sentence, **な** or **なあ** expresses a feeling, often half to yourself: いいなあ, "lucky you" or "how nice"; 今日は暑いなあ, "it's so hot today".

It's like ね, but more inward. ね looks for the listener's agreement; なあ is musing, admiring or envying. With たい, it's a wish: 海に行きたいなあ, "I'd love to go to the beach".

Don't confuse it with the prohibition な after a dictionary form (行くな, "don't go", N4). That one is a sharp command; this one is a soft sigh, and it can follow adjectives and だ.

It's casual. In polite speech, use ですね.
`,
    sentences: [
      s("いい{なあ}。私も行きたい。", "いい{なあ}。わたしもいきたい。", "Lucky you. I want to go too.", {
        accept: ["な"],
        near: [["ね", "ね looks for agreement. For envy or a feeling to yourself, use なあ."]],
      }),
      s("今日は暑い{なあ}。", "きょうはあつい{なあ}。", "It's so hot today.", {
        accept: ["な"],
        near: [["よ", "よ tells someone something. For a feeling to yourself, use なあ."]],
      }),
      s("海に行きたい{なあ}。", "うみにいきたい{なあ}。", "I'd love to go to the beach.", {
        accept: ["な"],
        near: [["ね", "ね looks for agreement. For a wish to yourself, use なあ."]],
      }),
      s("きれいな景色だ{なあ}。", "きれいなけしきだ{なあ}。", "What a beautiful view.", {
        accept: ["な"],
        near: [["ね", "ね looks for agreement. For admiring something to yourself, use なあ."]],
      }),
      s("もう十二時か。時間がたつのは早い{なあ}。", "もうじゅうにじか。じかんがたつのははやい{なあ}。", "Twelve already? Time flies.", {
        accept: ["な"],
        near: [["よ", "よ tells someone something. For a feeling to yourself, use なあ."]],
      }),
    ],
  }),

  point({
    id: "n4-kitto",
    title: "きっと・必ず・絶対に",
    meaning: "surely; without fail; absolutely (never)",
    structure: "きっと + guess · 必ず + habit / promise · 絶対(に) + strong claim",
    related: ["n5-deshou", "n4-zehi"],
    explanation: `
Three words of certainty, each with its own job.

**きっと** is a confident guess about something you don't control: 明日はきっと晴れるでしょう, "I'm sure it'll be sunny tomorrow". It pairs with だろう and と思う.

**必ず** means "without fail", for habits, rules and firm promises: 着いたら必ず電話して, "be sure to call when you arrive".

**絶対(に)** is the strongest and most emotional, and it's the only one that works with a negative: 絶対に誰にも言わないで, "don't ever tell anyone".

The classic trap: 必ず can't be used for a guess about the weather or someone else's result. That's きっと.
`,
    sentences: [
      s("明日は{きっと}晴れるでしょう。", "あしたは{きっと}はれるでしょう。", "I'm sure it'll be sunny tomorrow.", {
        near: [["必ず", "必ず is \"without fail\", for promises and rules. For a confident guess, use きっと.", "かならず"]],
      }),
      s("着いたら{必ず}電話してください。", "ついたら{かならず}でんわしてください。", "Be sure to call me when you arrive.", {
        accept: ["絶対に", "ぜったいに"],
        near: [["きっと", "きっと is a guess. For a firm instruction, use 必ず."]],
      }),
      s("このことは{絶対に}誰にも言わないで。", "このことは{ぜったいに}だれにもいわないで。", "Don't ever tell anyone about this.", {
        accept: ["絶対"],
        near: [["必ず", "必ず doesn't go with a negative. For \"never\", use 絶対に.", "かならず"]],
      }),
      s("{きっと}合格するよ。", "{きっと}ごうかくするよ。", "I'm sure you'll pass.", {
        near: [["必ず", "必ず sounds like a promise. For encouragement, use きっと.", "かならず"]],
      }),
      s("毎朝{必ず}コーヒーを飲む。", "まいあさ{かならず}コーヒーをのむ。", "I have a coffee every morning without fail.", {
        near: [["きっと", "きっと is a guess. For a habit, use 必ず."]],
      }),
    ],
  }),

  point({
    id: "n4-zehi",
    title: "ぜひ",
    meaning: "by all means, definitely (eager wish)",
    structure: "ぜひ + たい / てください / てほしい / ましょう",
    related: ["n4-kitto", "n5-tai"],
    explanation: `
**ぜひ** adds enthusiasm to a wish or an invitation: ぜひ遊びに来てください, "you must come and visit"; 一度ぜひ京都に行きたい, "I'd really love to go to Kyoto sometime".

It goes with positive wishes and requests: たい, てください, てほしい, ましょう. It can't express a guess (use きっと) or a negative (use 絶対に).

On its own, ぜひ! is an eager reply to an invitation: 「一緒に行きませんか。」「ぜひ!」, "I'd love to!"

It's a small word that makes invitations and recommendations sound warm and sincere, so it's worth getting into your speech early.
`,
    sentences: [
      s("{ぜひ}遊びに来てください。", "{ぜひ}あそびにきてください。", "You must come and visit.", {
        near: [["きっと", "きっと is a guess. For an eager invitation, use ぜひ."]],
      }),
      s("一度{ぜひ}京都に行きたいです。", "いちど{ぜひ}きょうとにいきたいです。", "I'd really love to go to Kyoto sometime.", {
        near: [["きっと", "きっと is a guess. For an eager wish, use ぜひ."]],
      }),
      s("「一緒に行きませんか。」「{ぜひ}!」", "「いっしょにいきませんか。」「{ぜひ}!」", "\"Would you like to come along?\" \"I'd love to!\"", {
        near: [["きっと", "きっと is a guess. For an eager yes, use ぜひ."]],
      }),
      s("この本は{ぜひ}読んでほしい。", "このほんは{ぜひ}よんでほしい。", "I really want you to read this book.", {
        near: [["必ず", "That's for a firm instruction. For an eager recommendation, use ぜひ.", "かならず"]],
      }),
      s("{ぜひ}また会いましょう。", "{ぜひ}またあいましょう。", "Let's definitely meet again.", {
        near: [["きっと", "きっと is a guess. For an eager invitation, use ぜひ."]],
      }),
    ],
  }),

  point({
    id: "n4-sorede",
    title: "それで",
    meaning: "so, and so; and then? (result)",
    structure: "Sentence。それで、Sentence。",
    related: ["n4-dakara", "n5-soshite", "n4-soreni"],
    explanation: `
**それで** links a cause to what happened as a result: 電車が遅れました。それで、会議に遅刻しました, "the train was late. So I was late for the meeting".

It describes a natural consequence, so it's used for things that already happened or facts. It can't introduce a command, a request or a suggestion: for "so please…", use だから or ですから.

In conversation, それで? means "and then?" or "so what happened?", encouraging someone to go on with their story.

Compare それに ("what's more"), which adds a point, and それから ("and then"), which is about order in time.
`,
    sentences: [
      s("電車が遅れました。{それで}、会議に遅刻しました。", "でんしゃがおくれました。{それで}、かいぎにちこくしました。", "The train was late. So I was late for the meeting.", {
        accept: ["だから", "ですから"],
        near: [["それに", "それに adds another point. For a result, use それで."]],
      }),
      s("風邪をひきました。{それで}、学校を休みました。", "かぜをひきました。{それで}、がっこうをやすみました。", "I caught a cold. That's why I stayed off school.", {
        accept: ["だから", "ですから"],
        near: [["でも", "でも is \"but\". For a result, use それで."]],
      }),
      s("「昨日、駅で先生に会ったんだ。」「{それで}?」", "「きのう、えきでせんせいにあったんだ。」「{それで}?」", "\"I ran into our teacher at the station yesterday.\" \"And then?\"", {
        near: [["それに", "それに adds a point. To ask for the rest of the story, use それで."]],
      }),
      s("道が込んでいた。{それで}、タクシーをやめて歩いた。", "みちがこんでいた。{それで}、タクシーをやめてあるいた。", "The roads were jammed, so I gave up on a taxi and walked.", {
        accept: ["だから"],
        near: [["それとも", "それとも is \"or\". For a result, use それで."]],
      }),
      s("お金がなかった。{それで}、旅行に行けなかった。", "おかねがなかった。{それで}、りょこうにいけなかった。", "I didn't have any money, so I couldn't go on the trip.", {
        accept: ["だから"],
        near: [["でも", "でも is \"but\". For a result, use それで."]],
      }),
    ],
  }),

  point({
    id: "n4-soreni",
    title: "それに",
    meaning: "besides, what's more",
    structure: "Sentence。それに、Sentence。",
    related: ["n4-sorede", "n4-shi"],
    explanation: `
**それに** adds another point in the same direction: この部屋は広い。それに、駅から近い, "this room is spacious. What's more, it's close to the station".

It's used to pile up reasons, often good ones for a recommendation or bad ones for turning something down: 時間がない。それに、お金もない. The second half often contains も.

It's conversational. In writing, そのうえ and しかも (N3) do the same job.

Compare それで ("so"), which gives a result, and それから ("and then"), which is about order in time. それに only adds; it doesn't show cause or sequence.
`,
    sentences: [
      s("この部屋は広いです。{それに}、駅から近いです。", "このへやはひろいです。{それに}、えきからちかいです。", "This room is spacious. What's more, it's close to the station.", {
        near: [["それで", "それで is a result. For adding a point, use それに."]],
      }),
      s("今日は疲れた。{それに}、雨も降っている。", "きょうはつかれた。{それに}、あめもふっている。", "I'm tired today. Besides, it's raining.", {
        near: [["それから", "それから is \"and then\" in time. For \"besides\", use それに."]],
      }),
      s("彼女は優しい。{それに}、頭もいい。", "かのじょはやさしい。{それに}、あたまもいい。", "She's kind. And she's clever, too.", {
        near: [["それで", "それで is a result. For adding a point, use それに."]],
      }),
      s("その店は安い。{それに}、料理もおいしい。", "そのみせはやすい。{それに}、りょうりもおいしい。", "That place is cheap. And the food's good, too.", {
        near: [["でも", "でも is \"but\". For adding a good point, use それに."]],
      }),
      s("時間がない。{それに}、お金もない。", "じかんがない。{それに}、おかねもない。", "I don't have the time. Or the money, for that matter.", {
        near: [["それから", "それから is \"and then\" in time. For \"besides\", use それに."]],
      }),
    ],
  }),

  point({
    id: "n4-soretomo",
    title: "それとも",
    meaning: "or (in a question)",
    structure: "Question か。それとも、Question か。",
    related: ["n5-ka-or", "n4-sorede"],
    explanation: `
**それとも** offers a choice between two questions: コーヒーにしますか。それとも、紅茶にしますか, "would you like coffee, or tea?"

It's only for questions. Each half is usually a question with か, or with rising intonation in casual speech: 電車で行く?それとも、バス?

Compare か (N5), which joins two nouns directly (コーヒーか紅茶), and または, "or" in statements, instructions and forms: 電話またはメールでご連絡ください.

It's also a way to check what someone meant: 本当なの?それとも、冗談?, "are you serious, or joking?"

In a grammar question, the clue is the question mark: if both halves are asking something, and the listener has to pick one, the answer is それとも. If it's a statement or a list, it's か or または.
`,
    sentences: [
      s("コーヒーにしますか。{それとも}、紅茶にしますか。", "コーヒーにしますか。{それとも}、こうちゃにしますか。", "Would you like coffee, or tea?", {
        near: [["それに", "それに is \"what's more\". For \"or\" in a question, use それとも."]],
      }),
      s("電車で行く?{それとも}、バス?", "でんしゃでいく?{それとも}、バス?", "Shall we go by train, or by bus?", {
        near: [["または", "または is for statements. In a question, use それとも."]],
      }),
      s("今日にしますか、{それとも}明日にしますか。", "きょうにしますか、{それとも}あしたにしますか。", "Shall we make it today, or tomorrow?", {
        near: [["それで", "それで is \"so\". For \"or\" in a question, use それとも."]],
      }),
      s("映画を見る?{それとも}、買い物に行く?", "えいがをみる?{それとも}、かいものにいく?", "Want to see a film, or go shopping?", {
        near: [["または", "または is for statements. In a question, use それとも."]],
      }),
      s("本当なの?{それとも}、冗談?", "ほんとうなの?{それとも}、じょうだん?", "Are you serious, or is it a joke?", {
        near: [["それに", "それに is \"what's more\". For \"or\" in a question, use それとも."]],
      }),
    ],
  }),

  point({
    id: "n4-tokorode",
    title: "ところで",
    meaning: "by the way",
    structure: "ところで、new topic",
    related: ["n3-to-ieba", "n4-soreni"],
    explanation: `
**ところで** changes the subject: ところで、来週の予定はどうですか, "by the way, what are your plans for next week?"

It signals a clean break to a new topic, often one the speaker has been waiting to raise. It works in casual and polite speech alike, and it's common after finishing business: 仕事の話はこれで終わりです。ところで….

Compare そういえば (N3), "that reminds me", which connects to what was just said. ところで doesn't need any connection.

Don't confuse it with たところで (N2, "even if") or ところ (N4, "about to, just did"). At the start of a sentence, ところで is always "by the way".
`,
    sentences: [
      s("{ところで}、来週の予定はどうですか。", "{ところで}、らいしゅうのよていはどうですか。", "By the way, what are your plans for next week?", {
        near: [["それで", "それで is \"so\". To change the subject, use ところで."]],
      }),
      s("{ところで}、田中さんは元気ですか。", "{ところで}、たなかさんはげんきですか。", "By the way, how's Tanaka doing?", {
        near: [["それに", "それに adds a point. To change the subject, use ところで."]],
      }),
      s("仕事の話はこれで終わりです。{ところで}、夏休みはどこへ行きますか。", "しごとのはなしはこれでおわりです。{ところで}、なつやすみはどこへいきますか。", "That's all for work. By the way, where are you going for the summer holidays?", {
        near: [["それで", "それで is \"so\". To change the subject, use ところで."]],
      }),
      s("{ところで}、この前貸した本、読んだ?", "{ところで}、このまえかしたほん、よんだ?", "By the way, did you read that book I lent you?", {
        near: [["それから", "それから is \"and then\". To change the subject, use ところで."]],
      }),
      s("{ところで}、今何時?", "{ところで}、いまなんじ?", "By the way, what time is it?", {
        near: [["それで", "それで is \"so\". To change the subject, use ところで."]],
      }),
    ],
  }),

  point({
    id: "n4-dakara",
    title: "だから・ですから",
    meaning: "so, that's why",
    structure: "Sentence。だから / ですから、Sentence。",
    related: ["n4-sorede", "n5-kara-because"],
    explanation: `
**だから** starts a sentence with "so": 雨が降っている。だから、今日は出かけない, "it's raining. So I'm not going out today". **ですから** is the polite version.

Unlike それで, だから can lead to a command, a request, a suggestion or a strong opinion: だから、早く寝なさい, "so go to bed early"; だから、急いでください.

It can sound a little pushy, as if the conclusion should be obvious. だから言ったでしょう means "I told you so".

At the start of a reply, it can show exasperation: だから、違うって!, "I keep telling you, that's not it!"
`,
    sentences: [
      s("雨が降っている。{だから}、今日は出かけない。", "あめがふっている。{だから}、きょうはでかけない。", "It's raining. So I'm not going out today.", {
        accept: ["それで", "ですから"],
        near: [["でも", "でも is \"but\". For \"so\", use だから."]],
      }),
      s("明日は試験です。{ですから}、今日は早く寝ます。", "あしたはしけんです。{ですから}、きょうははやくねます。", "I have an exam tomorrow. So I'm going to bed early today.", {
        accept: ["だから", "それで"],
        near: [["でも", "でも is \"but\". For \"so\", use ですから."]],
      }),
      s("疲れているんでしょう。{だから}、早く寝なさい。", "つかれているんでしょう。{だから}、はやくねなさい。", "You're tired, aren't you? So go to bed early.", {
        accept: ["ですから"],
        near: [["それで", "それで can't lead to an order. Use だから."]],
      }),
      s("{だから}言ったでしょう。", "{だから}いったでしょう。", "I told you so.", {
        near: [["それで", "The set phrase is だから言ったでしょう."]],
      }),
      s("もう時間がない。{だから}、急いでください。", "もうじかんがない。{だから}、いそいでください。", "There's no time left. So please hurry.", {
        accept: ["ですから"],
        near: [["それで", "それで can't lead to a request. Use だから."]],
      }),
    ],
  }),
];
