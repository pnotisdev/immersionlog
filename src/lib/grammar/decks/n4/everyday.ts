import { point, s, word } from "../../build";

/** The rest of everyday N4: instructions, "without", sudden starts, advice, regret and casual quoting. */

export const everyday = [
  point({
    id: "n4-nasai",
    title: "〜なさい",
    meaning: "do it (an instruction from a parent or teacher)",
    structure: "Verb ます-stem + なさい",
    related: ["n4-imperative", "n5-te-kudasai"],
    explanation: `
**なさい** after the ます-stem gives an instruction from above: 早く寝なさい, "go to bed now". It's what parents say to children and teachers say to students, and it's what you'll read in exam instructions: 正しいものを選びなさい, "choose the correct answer".

It's firmer than てください and softer than the plain command (寝ろ). Because it assumes authority, don't use it to people above you or to strangers.

In casual speech the さい often drops: 早く寝な, "go to bed". The irregular verbs are regular here: する → しなさい, 来る → 来なさい.

It comes from なさる, the respectful する, which is why it still sounds a little polite.
`,
    sentences: [
      s("もう九時だよ。早く{寝なさい}。", "もうくじだよ。はやく{ねなさい}。", "It's nine o'clock. Go to bed now.", {
        hint: "寝る",
        conj: { word: word("寝る", "ねる", "ichidan"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["寝てください", "That's a polite request. A parent telling a child uses 寝なさい."]],
      }),
      s("正しい答えを{選びなさい}。", "ただしいこたえを{えらびなさい}。", "Choose the correct answer.", {
        hint: "選ぶ",
        conj: { word: word("選ぶ", "えらぶ", "godan"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["選んでください", "That's a request. Test instructions use 選びなさい."]],
      }),
      s("野菜もちゃんと{食べなさい}。", "やさいもちゃんと{たべなさい}。", "Make sure you eat your vegetables as well.", {
        hint: "食べる",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["食べろ", "食べろ is a blunt command. A parent would say 食べなさい."]],
      }),
      s("ゲームはやめて、宿題を{しなさい}。", "ゲームはやめて、しゅくだいを{しなさい}。", "Stop playing games and do your homework.", {
        hint: "する",
        conj: { word: word("する", "する", "irregular"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["しろ", "しろ is a blunt command. A parent would say しなさい."]],
      }),
      s("次の文を{読みなさい}。", "つぎのぶんを{よみなさい}。", "Read the following sentence.", {
        hint: "読む",
        conj: { word: word("読む", "よむ", "godan"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["読むなさい", "なさい goes on the ます-stem: 読みなさい."]],
      }),
      s("ちょっと{待ちなさい}。", "ちょっと{まちなさい}。", "Hold on a moment.", {
        hint: "待つ",
        conj: { word: word("待つ", "まつ", "godan"), form: "polite", cut: "ます", tail: "なさい" },
        near: [["待って", "That's casual and friendly. From a parent or teacher, it's 待ちなさい."]],
      }),
    ],
  }),

  point({
    id: "n4-zu-ni",
    title: "〜ずに",
    meaning: "without doing",
    structure: "Verb ない-form minus ない + ずに (する → せずに)",
    related: ["n4-naide", "n5-naide-kudasai"],
    explanation: `
**ずに** means "without doing", like ないで: 朝ご飯を食べずに出かけた, "I went out without eating breakfast". Build it by dropping ない from the negative and adding ずに: 食べない → 食べずに, 行かない → 行かずに.

The one exception is する, which becomes **せずに**, not しずに: 勉強せずにテストを受けた, "I took the test without studying".

ずに is a little more formal and written than ないで, so you'll see it in books, news and instructions. In conversation ないで is more common, but the meaning is the same.

ずに only means "without"; it can't make a request, so 食べずにください is wrong. Use 食べないでください for that.
`,
    sentences: [
      s("朝ご飯を{食べずに}学校に行きました。", "あさごはんを{たべずに}がっこうにいきました。", "I went to school without eating breakfast.", {
        hint: "食べる, written style",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "negative", cut: "ない", tail: "ずに" },
        near: [["食べないで", "That means the same, but this point practises the written ずに: 食べずに."]],
      }),
      s("辞書を{使わずに}読めますか。", "じしょを{つかわずに}よめますか。", "Can you read it without using a dictionary?", {
        hint: "使う",
        conj: { word: word("使う", "つかう", "godan"), form: "negative", cut: "ない", tail: "ずに" },
        near: [["使うずに", "ずに goes on the ない-form, minus ない: 使わずに."]],
      }),
      s("昨日は{勉強せずに}寝てしまった。", "きのうは{べんきょうせずに}ねてしまった。", "Yesterday I went to sleep without studying.", {
        hint: "勉強する",
        near: [
          ["勉強しずに", "する is the exception: it becomes せずに."],
          ["勉強しないで", "That means the same, but in the ずに form it's 勉強せずに."],
        ],
      }),
      s("傘を{持たずに}出かけた。", "かさを{もたずに}でかけた。", "I went out without taking an umbrella.", {
        hint: "持つ",
        conj: { word: word("持つ", "もつ", "godan"), form: "negative", cut: "ない", tail: "ずに" },
        near: [["持てずに", "That's \"unable to take\". Without taking is 持たずに."]],
      }),
      s("誰にも{言わずに}会社を辞めた。", "だれにも{いわずに}かいしゃをやめた。", "They quit their job without telling anyone.", {
        hint: "言う",
        conj: { word: word("言う", "いう", "godan"), form: "negative", cut: "ない", tail: "ずに" },
        near: [["言いずに", "ずに goes on the ない-form, minus ない: 言わずに."]],
      }),
    ],
  }),

  point({
    id: "n4-dasu",
    title: "〜出す",
    meaning: "suddenly start doing, burst into",
    structure: "Verb ます-stem + 出す",
    related: ["n4-hajimeru-owaru"],
    explanation: `
Add **出す** to the ます-stem and the action bursts out, suddenly and often without warning: 急に雨が降り出した, "it suddenly started pouring". Compare 降り始めた, which just says it started.

It's common with things that happen to people, or with the weather, rather than planned actions: 泣き出す, "burst into tears"; 笑い出す, "burst out laughing"; 走り出す, "break into a run".

Because it suggests something unplanned, it's odd with deliberate starts. For "I started studying Japanese last year", use 始める, not 出す.

It conjugates like 出す itself, a godan verb: 出した, 出して, 出しそう.
`,
    sentences: [
      s("急に雨が{降り出した}。", "きゅうにあめが{ふりだした}。", "It suddenly started raining.", {
        hint: "降る, suddenly",
        conj: { word: word("降る", "ふる", "godan"), form: "polite", cut: "ます", tail: "出した" },
        near: [["降り始めた", "That's just \"started\". For a sudden start, use 降り出した."]],
      }),
      s("赤ちゃんが急に{泣き出しました}。", "あかちゃんがきゅうに{なきだしました}。", "The baby suddenly burst into tears.", {
        hint: "泣く, suddenly",
        conj: { word: word("泣く", "なく", "godan"), form: "polite", cut: "ます", tail: "出しました" },
        near: [["泣きました", "That's just \"cried\". For bursting into tears, use 泣き出しました."]],
      }),
      s("みんなが一斉に{笑い出した}。", "みんながいっせいに{わらいだした}。", "Everyone burst out laughing at once.", {
        hint: "笑う, suddenly",
        conj: { word: word("笑う", "わらう", "godan"), form: "polite", cut: "ます", tail: "出した" },
        near: [["笑った", "That's just \"laughed\". For bursting out laughing, use 笑い出した."]],
      }),
      s("信号が青になると、車が{走り出しました}。", "しんごうがあおになると、くるまが{はしりだしました}。", "When the light turned green, the cars pulled away.", {
        hint: "走る",
        conj: { word: word("走る", "はしる", "godan"), form: "polite", cut: "ます", tail: "出しました" },
        near: [["走り始めました", "That works, but 走り出す is the usual way to say a vehicle pulls away."]],
      }),
      s("その話を聞いて、彼は急に{怒り出した}。", "そのはなしをきいて、かれはきゅうに{おこりだした}。", "When he heard that, he suddenly got angry.", {
        hint: "怒る, suddenly",
        conj: { word: word("怒る", "おこる", "godan"), form: "polite", cut: "ます", tail: "出した" },
        near: [["怒った", "That's just \"got angry\". For flaring up suddenly, use 怒り出した."]],
      }),
    ],
  }),

  point({
    id: "n4-ga-suru",
    title: "〜がする",
    meaning: "there's a smell, sound, taste or feeling of",
    structure: "Noun (音 · 声 · におい · 味 · 気) + がする",
    related: ["n5-ga", "n4-mieru-kikoeru"],
    explanation: `
Sensations that simply reach you take **がする**: いいにおいがする, "something smells good"; 変な音がする, "there's a strange noise". The sensation itself is the subject, so the particle is が.

The common ones are 音 (sound), 声 (voice), におい (smell), 味 (taste) and 気 (feeling): 誰かに見られている気がする, "I feel like someone's watching me".

Compare 聞こえる and 見える, which say something can be perceived. がする describes the sensation you're getting, often with an adjective or のような in front: 甘い味がする, "it tastes sweet".

You're not doing anything, so を doesn't fit: 音をする is wrong. For making a noise on purpose, Japanese uses 音を立てる.
`,
    sentences: [
      s("台所からいいにおい{がします}。", "だいどころからいいにおい{がします}。", "Something smells good in the kitchen.", {
        near: [["をします", "A smell isn't something you do. It happens to you: においがします."]],
      }),
      s("隣の部屋から変な音{がする}。", "となりのへやからへんなおと{がする}。", "There's a strange noise coming from the next room.", {
        near: [["をする", "A sound isn't something you do. It happens to you: 音がする."]],
      }),
      s("このお茶は花のような味{がします}。", "このおちゃははなのようなあじ{がします}。", "This tea tastes like flowers.", {
        near: [["です", "That works, but this point practises how something tastes: 味がします."]],
      }),
      s("誰かに見られている気{がする}。", "だれかにみられているき{がする}。", "I feel like someone's watching me.", {
        near: [["をする", "A feeling happens to you, so it takes が: 気がする."]],
      }),
      s("外で子どもの声{がします}。", "そとでこどものこえ{がします}。", "I can hear children's voices outside.", {
        near: [["が聞こえます", "That's right too. This point practises 声がします."]],
      }),
    ],
  }),

  point({
    id: "n4-hodo-nai",
    title: "〜ほど〜ない",
    meaning: "not as … as",
    structure: "A は B ほど + negative",
    related: ["n5-yori", "n5-yori-no-hou-ga", "n3-hodo"],
    explanation: `
**ほど** with a negative says something doesn't reach a level: 今年の夏は去年ほど暑くない, "this summer isn't as hot as last year". A is compared with B and falls short.

What comes after ほど must be negative. For positive comparisons, use より: 去年より暑い, "hotter than last year".

It works with verbs too: 思ったほど難しくなかった, "it wasn't as hard as I thought", a very common phrase with 思った.

A related pattern, 〜ほど〜はない, means "there's nothing as … as": 家ほど落ち着く所はない, "nowhere is as relaxing as home". It's a strong way to say something is the best.
`,
    sentences: [
      s("今年の夏は去年{ほど}暑くない。", "ことしのなつはきょねん{ほど}あつくない。", "This summer isn't as hot as last year.", {
        near: [["より", "より is \"more than\", with a positive. For \"not as … as\", use ほど."]],
      }),
      s("テストは思った{ほど}難しくなかった。", "テストはおもった{ほど}むずかしくなかった。", "The test wasn't as hard as I thought.", {
        near: [["より", "より is \"more than\", with a positive. For \"not as … as\", use ほど."]],
      }),
      s("私の町は東京{ほど}大きくありません。", "わたしのまちはとうきょう{ほど}おおきくありません。", "My town isn't as big as Tokyo.", {
        near: [["より", "より is \"more than\", with a positive. For \"not as … as\", use ほど."]],
      }),
      s("兄は父{ほど}背が高くない。", "あにはちち{ほど}せがたかくない。", "My older brother isn't as tall as my father.", {
        near: [["より", "より is \"more than\", with a positive. For \"not as … as\", use ほど."]],
      }),
      s("今日は昨日{ほど}寒くないですね。", "きょうはきのう{ほど}さむくないですね。", "Today isn't as cold as yesterday, is it?", {
        near: [["ぐらい", "That's heard, but the standard \"not as … as\" is ほど."]],
      }),
      s("家{ほど}落ち着く所はない。", "いえ{ほど}おちつくところはない。", "Nowhere is as relaxing as home.", {
        near: [["より", "\"There's nothing as … as\" is ほど〜はない."]],
      }),
    ],
  }),

  point({
    id: "n4-hazu-ga-nai",
    title: "〜はずがない",
    meaning: "there's no way that, can't possibly",
    structure: "Plain form + はずがない (な-adj + な · Noun + の)",
    related: ["n4-hazu", "n4-kamoshirenai", "n3-wake-ga-nai"],
    explanation: `
**はずがない** turns はず, "should be", into a firm denial: 彼がそんなことを言うはずがない, "there's no way he'd say something like that". From what they know, the speaker is sure it can't be true.

It's much stronger than はずじゃない, "it's not supposed to". And it differs from ないはずだ: 来ないはずだ says "they're not expected to come", while 来るはずがない says "there's no way they're coming".

Before it, nouns take の and な-adjectives keep な: 本物のはずがない, "it can't be the real thing"; 簡単なはずがない, "it can't be easy".

In conversation, わけがない means much the same, and in casual speech the が often drops: そんなはずない!
`,
    sentences: [
      s("あの人がそんなことを言う{はずがない}。", "あのひとがそんなことをいう{はずがない}。", "There's no way that person would say something like that.", {
        accept: ["わけがない", "はずない"],
        near: [["はずだ", "はずだ says it should happen. For \"no way\", use はずがない."]],
      }),
      s("鍵はかけた。開いている{はずがない}。", "かぎはかけた。あいている{はずがない}。", "I locked it. There's no way it's open.", {
        accept: ["わけがない", "はずない"],
        near: [["はずだ", "はずだ says it should be. For \"no way\", use はずがない."]],
      }),
      s("こんなに安い物が本物の{はずがありません}。", "こんなにやすいものがほんものの{はずがありません}。", "Something this cheap can't possibly be genuine.", {
        accept: ["わけがありません"],
        near: [["はずです", "That says it should be genuine. For \"can't possibly\", use はずがありません."]],
      }),
      s("毎日練習しているから、下手な{はずがない}。", "まいにちれんしゅうしているから、へたな{はずがない}。", "They practise every day, so there's no way they're bad at it.", {
        accept: ["わけがない", "はずない"],
        near: [["はずじゃない", "That's weaker: \"not supposed to be\". For \"no way\", use はずがない."]],
      }),
      s("彼女が約束を忘れる{はずがありません}。", "かのじょがやくそくをわすれる{はずがありません}。", "There's no way she'd forget a promise.", {
        accept: ["わけがありません"],
        near: [["かもしれません", "That's \"might\". For \"no way\", use はずがありません."]],
      }),
    ],
  }),

  point({
    id: "n4-hitsuyou",
    title: "〜必要がある",
    meaning: "need to, it's necessary to",
    structure: "Verb dictionary form + 必要がある / 必要はない",
    related: ["n5-nakereba-naranai", "n5-nakute-mo-ii"],
    explanation: `
**必要** means "necessity". After a dictionary-form verb, **必要がある** says something needs doing: ビザを取る必要があります, "you need to get a visa".

It's more neutral and objective than なければならない, and you'll see it in instructions, notices and explanations.

The negative usually takes は: **必要はない**, "there's no need": 急ぐ必要はない, "there's no need to hurry". It's a gentle way to say "you don't have to", like なくてもいい.

With nouns, 必要 works as a な-adjective with が in front: パスポートが必要です, "you need a passport"; 準備が必要だ, "preparation is needed".
`,
    sentences: [
      s("日本で働くには、ビザを取る{必要があります}。", "にほんではたらくには、ビザをとる{ひつようがあります}。", "To work in Japan, you need to get a visa.", {
        near: [["必要です", "Close. After a verb, it's 必要があります."]],
      }),
      s("時間はたくさんあるから、急ぐ{必要はない}。", "じかんはたくさんあるから、いそぐ{ひつようはない}。", "There's plenty of time, so there's no need to hurry.", {
        near: [["必要がない", "That works, but with a negative the usual choice is 必要はない."]],
      }),
      s("申し込む前に、書類を読む{必要があります}。", "もうしこむまえに、しょるいをよむ{ひつようがあります}。", "You need to read the documents before applying.", {
        near: [["必要します", "必要 isn't a verb. Use 必要があります."]],
      }),
      s("明日は来る{必要はありません}。", "あしたはくる{ひつようはありません}。", "There's no need to come tomorrow.", {
        near: [["必要がありません", "That works, but with a negative the usual choice is 必要はありません."]],
      }),
      s("もう一度確認する{必要がある}。", "もういちどかくにんする{ひつようがある}。", "We need to check it once more.", {
        near: [["必要だ", "Close. After a verb, it's 必要がある."]],
      }),
    ],
  }),

  point({
    id: "n4-tte",
    title: "〜って",
    meaning: "(casual) they said; (casual topic) what's …",
    structure: "Plain form + って · Noun + って",
    register: "Casual: everyday speech with friends and family.",
    related: ["n4-to-iu", "n4-sou-hearsay", "n3-to-iu-no-wa"],
    explanation: `
**って** is the casual stand-in for the quoting と and for という, and you'll hear it constantly in conversation.

Quoting: 田中さん、明日は来ないって, "Tanaka says they're not coming tomorrow". The verb 言う is often dropped, so って alone means "they said" or "apparently".

Asking about a word or thing: 「積ん読」って何?, "what's tsundoku?" Here it stands in for というのは, marking what you're asking about.

It also passes on hearsay, like そうだ: 明日は雨だって, "apparently it'll rain tomorrow".

Keep it for speech and casual messages. In writing, use と, という and そうです.
`,
    sentences: [
      s("田中さん、明日は来ない{って}。", "たなかさん、あしたはこない{って}。", "Tanaka says they're not coming tomorrow.", {
        near: [["と", "と needs a verb after it (と言っていた). On its own at the end, casual speech uses って."]],
      }),
      s("「積ん読」{って}何?", "「つんどく」{って}なに?", "What's \"tsundoku\"?", {
        near: [["は", "That works, but for \"what's this word?\", casual speech uses って."]],
      }),
      s("明日は雨だ{って}。", "あしたはあめだ{って}。", "Apparently it's going to rain tomorrow.", {
        near: [["そう", "雨だそう works too. This point practises the casual って."]],
      }),
      s("先生が明日テストがある{って}言ってたよ。", "せんせいがあしたテストがある{って}いってたよ。", "The teacher said there's a test tomorrow.", {
        near: [["と", "と is right in careful speech. Casually, it's って."]],
      }),
      s("駅前のパン屋、すごくおいしい{って}。", "えきまえのパンや、すごくおいしい{って}。", "People say the bakery by the station is really good.", {
        near: [["そうです", "おいしいそうです is the polite version. Casually, just って."]],
      }),
    ],
  }),

  point({
    id: "n4-naito",
    title: "〜ないと・〜なきゃ",
    meaning: "have to, must (casual)",
    structure: "Verb ない-form + と · ない-form minus い + きゃ",
    register: "Casual: the everyday way to say \"I have to\".",
    related: ["n5-nakereba-naranai", "n5-nakute-wa-ikenai"],
    explanation: `
Nobody says なければなりません between friends. Casual speech cuts obligation down to the condition alone, and the "or it won't do" part is understood.

**ないと** is short for ないといけない: もう帰らないと, "I've got to go home now".

**なきゃ** is short for なければ (ならない): 宿題しなきゃ, "I have to do my homework". Build it from the ない-form: 帰らない → 帰らなきゃ, 食べない → 食べなきゃ.

Both are extremely common, often with a small sigh: 早く寝ないと…, "I really should go to bed".

The full ないといけない is fine in polite speech too: 行かないといけません. なきゃ stays casual.
`,
    sentences: [
      s("もうこんな時間。{帰らないと}。", "もうこんなじかん。{かえらないと}。", "Look at the time. I've got to go home.", {
        hint: "帰る, casual",
        conj: { word: word("帰る", "かえる", "godan"), form: "negative", tail: "と" },
        accept: ["帰らなきゃ", "かえらなきゃ"],
        near: [["帰らなければなりません", "Correct, but very formal for talking to yourself. Casually, just 帰らないと."]],
      }),
      s("明日テストだから、{勉強しなきゃ}。", "あしたテストだから、{べんきょうしなきゃ}。", "There's a test tomorrow, so I have to study.", {
        hint: "勉強する, casual",
        conj: { word: word("勉強する"), form: "negative", cut: "い", tail: "きゃ" },
        accept: ["勉強しないと", "べんきょうしないと"],
        near: [["勉強しなければ", "Right, and in casual speech なければ shrinks to なきゃ."]],
      }),
      s("薬を{飲まないと}いけませんよ。", "くすりを{のまないと}いけませんよ。", "You have to take your medicine.", {
        hint: "飲む",
        conj: { word: word("飲む", "のむ", "godan"), form: "negative", tail: "と" },
        near: [["飲んでと", "と goes on the ない-form: 飲まないと."]],
      }),
      s("早く{寝なきゃ}。明日は六時起きだ。", "はやく{ねなきゃ}。あしたはろくじおきだ。", "I need to get to bed. I'm up at six tomorrow.", {
        hint: "寝る, casual",
        conj: { word: word("寝る", "ねる", "ichidan"), form: "negative", cut: "い", tail: "きゃ" },
        accept: ["寝ないと", "ねないと"],
        near: [["寝るきゃ", "きゃ goes on the ない-form, minus い: 寝なきゃ."]],
      }),
      s("あ、母に{電話しないと}。", "あ、ははに{でんわしないと}。", "Oh, I need to call my mum.", {
        hint: "電話する, casual",
        conj: { word: word("電話する", "でんわする", "irregular"), form: "negative", tail: "と" },
        accept: ["電話しなきゃ", "でんわしなきゃ"],
        near: [["電話しなければ", "Right, and in casual speech that's shortened to 電話しないと."]],
      }),
    ],
  }),

  point({
    id: "n4-ba-ii",
    title: "〜ばいい・〜といい",
    meaning: "should, all you have to do is; I hope",
    structure: "Verb ば-form + いい · Plain form + といい (hope)",
    related: ["n4-ba", "n4-tara-dou", "n4-ba-yokatta"],
    explanation: `
**ばいい** gives advice or asks for it: "it'd be good if …". どうすればいいですか, "what should I do?", is one of the most useful questions in Japanese. The answer often uses it too: この駅で降りればいいです, "you just need to get off at this station".

たらいい means the same and is common in speech: どうしたらいい?

**といい** after a plain verb expresses a hope: 明日晴れるといいですね, "I hope it's sunny tomorrow". With ね it's a friendly wish shared with someone; with な it's a wish to yourself: 早く夏休みになるといいな.

Put the advice form in the past, ばよかった, and it becomes regret.
`,
    sentences: [
      s("すみません、どう{すればいい}ですか。", "すみません、どう{すればいい}ですか。", "Excuse me, what should I do?", {
        hint: "する",
        conj: { word: word("する", "する", "irregular"), form: "ba", tail: "いい" },
        accept: ["したらいい"],
        near: [["するといい", "といい is for hopes. To ask for advice, use すればいい."]],
      }),
      s("駅までは、このバスに{乗ればいい}ですよ。", "えきまでは、このバスに{のればいい}ですよ。", "To get to the station, you just need to take this bus.", {
        hint: "乗る",
        conj: { word: word("乗る", "のる", "godan"), form: "ba", tail: "いい" },
        accept: ["乗ったらいい", "のったらいい", "乗るといい", "のるといい"],
        near: [["乗ればよかった", "That's regret about the past. For advice, use 乗ればいい."]],
      }),
      s("明日、晴れる{といいですね}。", "あした、はれる{といいですね}。", "I hope it's sunny tomorrow.", {
        near: [["ばいいですね", "ばいい goes on the ば-form. After the dictionary form, it's といいですね."]],
      }),
      s("早く夏休みになる{といいな}。", "はやくなつやすみになる{といいな}。", "I wish the summer holidays would hurry up and come.", {
        near: [["たいな", "たい is for your own actions. For hoping something happens, use といいな."]],
      }),
      s("漢字は毎日少しずつ{覚えればいい}。", "かんじはまいにちすこしずつ{おぼえればいい}。", "With kanji, you just need to learn a few every day.", {
        hint: "覚える",
        conj: { word: word("覚える", "おぼえる", "ichidan"), form: "ba", tail: "いい" },
        accept: ["覚えたらいい", "おぼえたらいい"],
        near: [["覚えるいい", "いい follows the ば-form: 覚えればいい."]],
      }),
    ],
  }),

  point({
    id: "n4-ba-yokatta",
    title: "〜ばよかった",
    meaning: "I should have, I wish I had",
    structure: "Verb ば-form + よかった · なければよかった",
    related: ["n4-ba", "n4-ba-ii", "n5-hou-ga-ii"],
    explanation: `
**ばよかった** is regret: literally, "if I'd done it, it would have been good". 傘を持ってくればよかった, "I should have brought an umbrella".

For something you wish you hadn't done, use the negative ば-form: 食べなければよかった, "I shouldn't have eaten it".

Add のに for a wistful or reproachful ending: もっと早く言えばよかったのに, "you should have said so sooner". Aimed at someone else, it's a gentle complaint.

In casual speech the たら version is just as common: 聞いたらよかった. The present form, ばいい, looks forward instead and gives advice.
`,
    sentences: [
      s("雨だ。傘を{持ってくればよかった}。", "あめだ。かさを{もってくればよかった}。", "It's raining. I should have brought an umbrella.", {
        accept: ["持ってきたらよかった", "もってきたらよかった"],
        near: [["持ってくるよかった", "よかった follows the ば-form: 持ってくればよかった."]],
      }),
      s("もっと早く{起きればよかった}。", "もっとはやく{おきればよかった}。", "I should have got up earlier.", {
        hint: "起きる",
        conj: { word: word("起きる", "おきる", "ichidan"), form: "ba", tail: "よかった" },
        near: [["起きたほうがいい", "That's advice for the future. For regret about the past, use 起きればよかった."]],
      }),
      s("あんなに{食べなければよかった}。", "あんなに{たべなければよかった}。", "I shouldn't have eaten so much.", {
        hint: "食べる, wish you hadn't",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "ba-negative", tail: "よかった" },
        near: [["食べればよかった", "That's \"I should have eaten\". For regret about eating, use the negative: 食べなければよかった."]],
      }),
      s("先生に{聞けばよかった}。", "せんせいに{きけばよかった}。", "I should have asked the teacher.", {
        hint: "聞く",
        conj: { word: word("聞く", "きく", "godan"), form: "ba", tail: "よかった" },
        near: [["聞いてよかった", "That's \"I'm glad I asked\". For regret, use 聞けばよかった."]],
      }),
      s("もっと早く{言えばよかった}のに。", "もっとはやく{いえばよかった}のに。", "You should have said so sooner.", {
        hint: "言う",
        conj: { word: word("言う", "いう", "godan"), form: "ba", tail: "よかった" },
        near: [["言ったらいい", "That's advice. For \"should have\", use 言えばよかった."]],
      }),
    ],
  }),

  point({
    id: "n4-koto-ga-aru",
    title: "〜ることがある",
    meaning: "sometimes (does), there are times when",
    structure: "Verb dictionary form / ない-form + ことがある",
    related: ["n5-ta-koto-ga-aru", "n5-frequency"],
    explanation: `
After the dictionary form, **ことがある** means something happens now and then: 朝ご飯を食べないこともある, "sometimes I skip breakfast". Literally, "there are occasions of …".

Don't confuse it with the た-form version from N5: 行ったことがある is experience, "I've been"; 行くことがある is an occasional habit, "I sometimes go".

も often replaces が for a softer "it also happens that": 電車が遅れることもあります, "the trains are sometimes late, too".

It's vaguer than ときどき, with a sense of "it's not unheard of". With たまに it means "once in a while": たまに料理することがある.
`,
    sentences: [
      s("この電車はよく遅れる{ことがあります}。", "このでんしゃはよくおくれる{ことがあります}。", "This train is often late.", {
        accept: ["こともあります"],
        near: [["たことがあります", "That's experience. For something that happens now and then, put ことがあります after the dictionary form."]],
      }),
      s("忙しいときは、昼ご飯を食べない{ことがある}。", "いそがしいときは、ひるごはんをたべない{ことがある}。", "When I'm busy, I sometimes skip lunch.", {
        accept: ["こともある"],
        near: [["ことができる", "That's \"can\". For \"sometimes\", use ことがある."]],
      }),
      s("週末は家族と映画を見に行く{こともあります}。", "しゅうまつはかぞくとえいがをみにいく{こともあります}。", "At weekends I sometimes go to see a film with my family, too.", {
        accept: ["ことがあります"],
        near: [["ことができます", "That's \"can\". For \"sometimes\", use こともあります."]],
      }),
      s("父は夜遅くまで働く{ことがあります}。", "ちちはよるおそくまではたらく{ことがあります}。", "My father sometimes works until late at night.", {
        accept: ["こともあります"],
        near: [["ことにします", "That's \"decide to\". For \"sometimes\", use ことがあります."]],
      }),
      s("たまに自分で料理する{ことがある}。", "たまにじぶんでりょうりする{ことがある}。", "Once in a while, I cook for myself.", {
        accept: ["こともある"],
        near: [["ことにする", "That's \"decide to\". For \"sometimes\", use ことがある."]],
      }),
    ],
  }),

  point({
    id: "n4-temo-kamawanai",
    title: "〜ても構わない",
    meaning: "it's fine if, I don't mind if",
    structure: "Verb て-form + も構わない",
    related: ["n5-te-mo-ii", "n4-temo"],
    explanation: `
**ても構わない** gives permission, like てもいい, but with more of a sense of "I don't mind": 窓を開けても構いません, "you're welcome to open the window".

構う means "to mind" or "care about", so the negative says there's nothing to mind. It's a little more formal than てもいい, which makes 構いません common at work and in shops: カードで払っても構いませんか, "is it all right if I pay by card?"

The negative version works too: 来なくても構わない, "it's fine if you don't come".

On its own, 構いません is a polite "that's fine", while 構わないで means "leave me alone" or "don't go to any trouble".
`,
    sentences: [
      s("暑かったら、窓を{開けても構いません}。", "あつかったら、まどを{あけてもかまいません}。", "If it's hot, feel free to open the window.", {
        hint: "開ける",
        conj: { word: word("開ける", "あける", "ichidan"), form: "te", tail: "も構いません" },
        near: [["開けてもいいです", "That works too. This point practises 構いません."]],
      }),
      s("カードで{払っても構いませんか}。", "カードで{はらってもかまいませんか}。", "Is it all right if I pay by card?", {
        hint: "払う",
        conj: { word: word("払う", "はらう", "godan"), form: "te", tail: "も構いませんか" },
        near: [["払っても構いますか", "The question stays negative: 構いませんか."]],
      }),
      s("忙しかったら、{来なくても構わない}よ。", "いそがしかったら、{こなくてもかまわない}よ。", "If you're busy, it's fine if you don't come.", {
        hint: "来る, not",
        conj: { word: word("来る", "くる", "irregular"), form: "te-negative", tail: "も構わない" },
        near: [["来ても構わない", "That's \"it's fine if you come\". For not coming, use 来なくても構わない."]],
      }),
      s("この部屋のパソコンは誰が{使っても構いません}。", "このへやのパソコンはだれが{つかってもかまいません}。", "Anyone can use the computers in this room.", {
        hint: "使う",
        conj: { word: word("使う", "つかう", "godan"), form: "te", tail: "も構いません" },
        near: [["使うも構いません", "構いません follows the て-form: 使っても構いません."]],
      }),
      s("日本語でも英語でも{構いません}。", "にほんごでもえいごでも{かまいません}。", "Either Japanese or English is fine.", {
        near: [["いいです", "That works too. This point practises 構いません."]],
      }),
    ],
  }),

  point({
    id: "n4-you-ni-iu",
    title: "〜ように言う",
    meaning: "tell (someone) to, ask (someone) to",
    structure: "Verb dictionary / ない-form + ように + 言う · 頼む · 注意する",
    related: ["n4-you-ni", "n4-passive"],
    explanation: `
To report an instruction or request, put **ように** after the verb and follow it with 言う, 頼む (ask) or 注意する (warn): 先生は学生に静かにするように言いました, "the teacher told the students to be quiet".

For "told not to", use the ない-form: 医者にお酒を飲まないように言われた, "the doctor told me not to drink".

It reports the instruction rather than quoting it, so it's softer and more indirect than 静かにしろと言った.

With the passive 言われる, it's how you say "I was told to": 早く来るように言われました.

The same ように on its own can end a notice as an instruction: 遅れないように, "don't be late".
`,
    sentences: [
      s("先生は学生に静かにする{ように言いました}。", "せんせいはがくせいにしずかにする{ようにいいました}。", "The teacher told the students to be quiet.", {
        near: [["と言いました", "と needs the actual words: 静かにしなさいと言いました. After the dictionary form, use ように言いました."]],
      }),
      s("医者にお酒を飲まない{ように言われた}。", "いしゃにおさけをのまない{ようにいわれた}。", "The doctor told me not to drink.", {
        near: [["ように言った", "That's \"told someone\". The doctor told you, so it's passive: ように言われた."]],
      }),
      s("母に早く帰る{ように言われました}。", "ははにはやくかえる{ようにいわれました}。", "My mother told me to come home early.", {
        near: [["ように言いました", "That would mean you told her. You were told: ように言われました."]],
      }),
      s("友達に駅で待つ{ように頼みました}。", "ともだちにえきでまつ{ようにたのみました}。", "I asked my friend to wait at the station.", {
        near: [["ために頼みました", "ために is purpose. For asking someone to do something, use ように頼みました."]],
      }),
      s("部長に遅れない{ように注意されました}。", "ぶちょうにおくれない{ようにちゅういされました}。", "My manager warned me not to be late.", {
        near: [["ように注意しました", "That's you warning someone. You were warned: ように注意されました."]],
      }),
    ],
  }),

  point({
    id: "n4-demo-suggest",
    title: "〜でも (or something)",
    meaning: "or something, … perhaps",
    structure: "Noun + でも",
    related: ["n4-toka", "n5-masen-ka", "n5-mashou-ka"],
    explanation: `
After a noun, **でも** softens a suggestion by making the item just one example: お茶でも飲みませんか, "shall we have some tea or something?" The speaker isn't insisting on tea; they're inviting you to take a break.

It replaces が and を, but goes after other particles: 公園にでも行こうか, "shall we go to the park or something?"

It's very common in invitations and offers: 映画でも見ようか, "how about a film?"; 雑誌でも読んで待っていてください, "please read a magazine or something while you wait".

Don't confuse it with the でも that means "but" at the start of a sentence, or with 〜でも〜でも, "either … or".
`,
    sentences: [
      s("ちょっと休んで、お茶{でも}飲みませんか。", "ちょっとやすんで、おちゃ{でも}のみませんか。", "Let's take a break. How about some tea?", {
        near: [["を", "お茶を is fine, but でも makes it a softer suggestion: \"tea or something\"."]],
      }),
      s("暇なら、映画{でも}見に行こうか。", "ひまなら、えいが{でも}みにいこうか。", "If you're free, shall we go and see a film or something?", {
        near: [["を", "That works, but でも makes it a lighter suggestion."]],
      }),
      s("雑誌{でも}読んで待っていてください。", "ざっし{でも}よんでまっていてください。", "Please read a magazine or something while you wait.", {
        near: [["も", "も is \"also\". For \"or something\", use でも."]],
      }),
      s("週末、公園に{でも}行かない?", "しゅうまつ、こうえんに{でも}いかない?", "Want to go to the park or something at the weekend?", {
        near: [["も", "にも is \"to the park too\". For \"or something\", use にでも."]],
      }),
      s("コーヒー{でも}いかがですか。", "コーヒー{でも}いかがですか。", "Would you like a coffee or something?", {
        near: [["は", "は makes it about coffee in particular. でも keeps it a gentle offer."]],
      }),
    ],
  }),
];
