import { point, s, word } from "../../build";

/**
 * The rest of N5: where things are, contrast, particles doubled up with も, describing
 * nouns with whole clauses, what else を and で do, and the small words every textbook
 * covers in its first chapters (time, counters, name suffixes, お and ご).
 */

export const everyday = [
  point({
    id: "n5-position",
    title: "上・下・中・前・後ろ・隣",
    meaning: "on, under, in, in front of, behind, next to",
    structure: "Noun + の + 上 / 下 / 中 / 前 / 後ろ / 隣 / 横 / 外 + に · で",
    related: ["n5-ni-location", "n5-arimasu", "n5-imasu"],
    explanation: `
Japanese says where something is with a position noun after の: 机の上, "the top of the desk", so "on the desk". Then add に with あります or います: 机の上に本があります, "there's a book on the desk".

The common ones: **上** (on, above), **下** (under), **中** (in, inside), **外** (outside), **前** (in front of), **後ろ** (behind), **隣** (next to), **横** (beside).

With an action, use で instead of に: 駅の前で待っています, "I'm waiting in front of the station".

隣 is for things of the same kind side by side (two buildings, two people); 横 is for anything beside something else.
`,
    sentences: [
      s("机の{上}に本があります。", "つくえの{うえ}にほんがあります。", "There's a book on the desk.", {
        near: [["下", "下 is \"under\". For \"on top of\", use 上.", "した"]],
      }),
      s("猫はテーブルの{下}にいます。", "ねこはテーブルの{した}にいます。", "The cat is under the table.", {
        near: [["上", "上 is \"on top of\". For \"under\", use 下.", "うえ"]],
      }),
      s("かばんの{中}に財布があります。", "かばんの{なか}にさいふがあります。", "My wallet is in my bag.", {
        near: [["外", "外 is \"outside\". For \"inside\", use 中.", "そと"]],
      }),
      s("駅の{前}で待っています。", "えきの{まえ}でまっています。", "I'm waiting in front of the station.", {
        near: [["後ろ", "後ろ is \"behind\". For \"in front of\", use 前.", "うしろ"]],
      }),
      s("銀行はスーパーの{隣}です。", "ぎんこうはスーパーの{となり}です。", "The bank is next to the supermarket.", {
        near: [["横", "横 works too, but for two buildings side by side, 隣 is the usual word.", "よこ"]],
      }),
      s("木の{後ろ}に犬がいます。", "きの{うしろ}にいぬがいます。", "There's a dog behind the tree.", {
        near: [["前", "前 is \"in front of\". For \"behind\", use 後ろ.", "まえ"]],
      }),
    ],
  }),

  point({
    id: "n5-wa-contrast",
    title: "は (contrast)",
    meaning: "(this one, at least); but as for",
    structure: "Noun (+ particle) + は, contrasting with another",
    related: ["n5-wa", "n5-ga-but"],
    explanation: `
Besides marking the topic, **は** sets one thing against another: 肉は食べますが、魚は食べません, "I eat meat, but I don't eat fish".

It often appears twice, once in each half, with が or けど joining them. But even a single は can hint at a contrast: ビールは飲みません, "beer I don't drink (though I might drink other things)".

It replaces を and が. With other particles, it goes after them: 大阪には, 家では, 友達とは.

This is why は is so common in negative sentences: saying "not X" invites the question "then what?", and は answers it.
`,
    sentences: [
      s("肉は食べますが、魚{は}食べません。", "にくはたべますが、さかな{は}たべません。", "I eat meat, but I don't eat fish.", {
        near: [
          ["を", "を is neutral. To contrast fish with meat, use は."],
          ["も", "That's \"also\". For a contrast, use は."],
        ],
      }),
      s("英語は話せますが、フランス語{は}話せません。", "えいごははなせますが、フランスご{は}はなせません。", "I can speak English, but not French.", {
        near: [["が", "が is fine, but for a contrast, use は."]],
      }),
      s("平日は忙しいですが、週末{は}暇です。", "へいじつはいそがしいですが、しゅうまつ{は}ひまです。", "I'm busy on weekdays, but free at weekends.", {
        accept: ["には"],
        near: [["に", "に marks a time, but the contrast needs は."]],
      }),
      s("ビール{は}飲みません。", "ビール{は}のみません。", "Beer, I don't drink.", {
        near: [["を", "を is neutral. は hints \"beer, at least\"."]],
      }),
      s("東京には行きましたが、大阪に{は}行っていません。", "とうきょうにはいきましたが、おおさかに{は}いっていません。", "I've been to Tokyo, but I haven't been to Osaka.", {
        near: [["も", "That's \"also\". For a contrast, use には."]],
      }),
    ],
  }),

  point({
    id: "n5-particle-mo",
    title: "にも・でも・とも・からも",
    meaning: "(to, at, with, from) … too",
    structure: "Noun + に / で / と / から + も",
    related: ["n5-mo", "n5-question-mo"],
    explanation: `
**も** ("also") replaces は, が and を. But other particles stay, and も goes after them:

- に + も → **にも**: 京都にも行きたい, "I want to go to Kyoto too".
- で + も → **でも**: 家でも勉強します, "I study at home too".
- と + も → **とも**: 田中さんとも話しました, "I talked with Tanaka as well".
- から + も → **からも**: 友達からも手紙が来た, "a letter came from my friend as well".

Dropping the first particle is a common beginner slip: 京都も行きたい is heard in casual speech, but にも is standard.

With question words and a negative, the same pattern means "not anywhere, not with anyone": どこにも行かなかった.
`,
    sentences: [
      s("京都{にも}行きたいです。", "きょうと{にも}いきたいです。", "I want to go to Kyoto, too.", {
        near: [["も", "After a place you go to, keep に: にも."]],
      }),
      s("家{でも}勉強します。", "いえ{でも}べんきょうします。", "I study at home, too.", {
        near: [["も", "Keep で and add も: でも."]],
      }),
      s("田中さん{とも}話しました。", "たなかさん{とも}はなしました。", "I talked with Tanaka as well.", {
        near: [["も", "Keep と and add も: とも."]],
      }),
      s("友達{からも}手紙が来ました。", "ともだち{からも}てがみがきました。", "A letter came from my friend as well.", {
        near: [["も", "Keep から and add も: からも."]],
      }),
      s("どこ{にも}行きませんでした。", "どこ{にも}いきませんでした。", "I didn't go anywhere.", {
        near: [["も", "With a place and a negative, it's どこにも."]],
      }),
    ],
  }),

  point({
    id: "n5-relative-clause",
    title: "Noun-modifying clauses",
    meaning: "the (thing) that …, the (person) who …",
    structure: "Plain form + Noun",
    related: ["n5-plain-present", "n5-ta", "n5-te-iru"],
    explanation: `
To describe a noun with a whole clause, put the clause in front of the noun, in the **plain form**: 母が作ったケーキ, "the cake (that) my mother made". There's no word for "that" or "who"; the position does the work.

The verb can be any plain form: past (見た映画, "the film I saw"), ている (話している人, "the person who's talking"), negative (わからない言葉, "words I don't understand").

The subject inside the clause usually takes が, not は: 私が住んでいる町, "the town I live in".

Polite forms (作りました) don't go in front of a noun. The politeness goes at the end of the whole sentence instead.
`,
    sentences: [
      s("これは母が{作った}ケーキです。", "これはははが{つくった}ケーキです。", "This is a cake my mother made.", {
        hint: "作る",
        conj: { word: word("作る", "つくる", "godan"), form: "past" },
        near: [["作りました", "In front of a noun, use the plain form: 作った."]],
      }),
      s("昨日{見た}映画は面白かった。", "きのう{みた}えいがはおもしろかった。", "The film I saw yesterday was good.", {
        hint: "見る",
        conj: { word: word("見る", "みる", "ichidan"), form: "past" },
        near: [["見ました", "In front of a noun, use the plain form: 見た."]],
      }),
      s("あそこで{話している}人は誰ですか。", "あそこで{はなしている}ひとはだれですか。", "Who's the person talking over there?", {
        hint: "話す",
        conj: { word: word("話す", "はなす", "godan"), form: "progressive" },
        near: [["話しています", "In front of a noun, use the plain form: 話している."]],
      }),
      s("私が{住んでいる}町は静かです。", "わたしが{すんでいる}まちはしずかです。", "The town I live in is quiet.", {
        hint: "住む",
        conj: { word: word("住む", "すむ", "godan"), form: "progressive" },
        near: [["住んでいます", "In front of a noun, use the plain form: 住んでいる."]],
      }),
      s("日本語が{わかる}人を探しています。", "にほんごが{わかる}ひとをさがしています。", "I'm looking for someone who understands Japanese.", {
        near: [["わかります", "In front of a noun, use the plain form: わかる."]],
      }),
    ],
  }),

  point({
    id: "n5-wo-through",
    title: "を (through, along, out of)",
    meaning: "through, along, across; out of",
    structure: "Place + を + movement verb (歩く · 渡る · 出る · 降りる)",
    related: ["n5-wo", "n5-de-place"],
    explanation: `
With verbs of movement, **を** marks the space you move through or along, or the place you leave. It's still pronounced o.

**Through, along, across**: 公園を散歩します, "walk in the park"; この道をまっすぐ行ってください, "go straight along this road"; 橋を渡る, "cross the bridge".

**Leaving**: 家を出ます, "leave the house"; バスを降ります, "get off the bus"; 大学を卒業する, "graduate from university".

Compare に, which is the destination (バスに乗る, "get on the bus"), and で, which is where an action happens. 公園で散歩する is also heard, but を stresses moving through the space.
`,
    sentences: [
      s("毎朝、公園{を}散歩します。", "まいあさ、こうえん{を}さんぽします。", "I walk in the park every morning.", {
        near: [["で", "That's heard, but for walking through a place, use を."]],
      }),
      s("八時に家{を}出ます。", "はちじにいえ{を}でます。", "I leave the house at eight.", {
        near: [["から", "That works too, but 出る usually takes を."]],
      }),
      s("この道{を}まっすぐ行ってください。", "このみち{を}まっすぐいってください。", "Go straight along this road.", {
        near: [["に", "に is a destination. For the route you take, use を."]],
      }),
      s("橋{を}渡ると、駅があります。", "はし{を}わたると、えきがあります。", "Cross the bridge and you'll find the station.", {
        near: [["に", "に is a destination. For what you cross, use を."]],
      }),
      s("次の駅でバス{を}降ります。", "つぎのえきでバス{を}おります。", "I get off the bus at the next stop.", {
        near: [["に", "に is for getting on (バスに乗る). For getting off, use を."]],
      }),
    ],
  }),

  point({
    id: "n5-de-cause",
    title: "で (because of)",
    meaning: "because of, due to",
    structure: "Noun + で",
    related: ["n5-de-means", "n5-kara-because"],
    explanation: `
**で** after a noun can give a cause: 病気で学校を休みました, "I was off school because I was ill". It's short and neutral, and it only works with nouns: 病気, 雨, 事故, 風邪, 仕事.

It's the same で as "by means of", stretched: the illness is what brought about the absence.

For a cause expressed as a whole clause, use から or ので instead: 雨が降ったから. After a noun, から needs だ (雨だから), so で is the natural short choice.

With 仕事, it can mean "on business": 仕事で大阪に行きます, "I'm going to Osaka for work".
`,
    sentences: [
      s("病気{で}学校を休みました。", "びょうき{で}がっこうをやすみました。", "I was off school because I was ill.", {
        near: [["に", "に isn't a cause. For \"because of\", use で."]],
      }),
      s("雨{で}試合が中止になりました。", "あめ{で}しあいがちゅうしになりました。", "The match was called off because of the rain.", {
        near: [["から", "After a noun, から needs だ (雨だから). The short way is で."]],
      }),
      s("事故{で}電車が遅れています。", "じこ{で}でんしゃがおくれています。", "The trains are late because of an accident.", {
        near: [["に", "に isn't a cause. For \"because of\", use で."]],
      }),
      s("風邪{で}声が出ません。", "かぜ{で}こえがでません。", "I've lost my voice because of a cold.", {
        near: [["に", "に isn't a cause. For \"because of\", use で."]],
      }),
      s("仕事{で}大阪に行きます。", "しごと{で}おおさかにいきます。", "I'm going to Osaka for work.", {
        near: [["に", "に goes with the place. For the reason, use で."]],
      }),
    ],
  }),

  point({
    id: "n5-de-material",
    title: "で・から (made of, made from)",
    meaning: "(made) of, out of; from",
    structure: "Material + で + 作る / できている · Raw material + から + 作る",
    related: ["n5-de-means", "n5-de-cause"],
    explanation: `
**で** marks what something is made of, when you can still see the material: この机は木で作りました, "I made this desk out of wood"; 紙で飛行機を作る, "make a plane out of paper".

**から** is used when the raw material changes completely and can't be seen in the product: ワインはぶどうから作ります, "wine is made from grapes"; 紙は木から作る.

The thing being made takes を: 紙で飛行機を作る.

できている means "is made of": このかばんは革でできています, "this bag is made of leather".

A handy test: if you can point to the material in the finished thing (the wood in a desk, the paper in a plane), use で. If it has turned into something else entirely (grapes into wine), use から.
`,
    sentences: [
      s("この机は木{で}作りました。", "このつくえはき{で}つくりました。", "I made this desk out of wood.", {
        near: [["を", "を is the thing you make. The material takes で."]],
      }),
      s("紙{で}飛行機を作りましょう。", "かみ{で}ひこうきをつくりましょう。", "Let's make a paper plane.", {
        near: [["の", "紙の飛行機 is fine as a noun, but with 作る, the material takes で."]],
      }),
      s("このかばんは革{で}できています。", "このかばんはかわ{で}できています。", "This bag is made of leather.", {
        near: [["から", "から is for raw materials that change completely. For what you can see, use で."]],
      }),
      s("雪{で}大きな家を作った。", "ゆき{で}おおきないえをつくった。", "We built a big house out of snow.", {
        near: [["を", "を is the thing you make. The material takes で."]],
      }),
      s("ワインはぶどう{から}作ります。", "ワインはぶどう{から}つくります。", "Wine is made from grapes.", {
        near: [["で", "で is for materials you can still see. For something that changes completely, use から."]],
      }),
    ],
  }),

  point({
    id: "n5-to-onaji",
    title: "〜と同じ・〜と違う",
    meaning: "the same as; different from",
    structure: "Noun + と同じ / と違う · 同じ + Noun",
    related: ["n5-yori", "n5-to-and"],
    explanation: `
**と同じ** means "the same as": 私の誕生日は兄の誕生日と同じです, "my birthday is the same as my brother's". **と違う** means "different from": これはあれと違います.

同じ is unusual: it goes straight in front of a noun, with no な or の: 同じかばん, 同じ学校. So "the same bag as Tanaka" is 田中さんと同じかばん.

違う is a verb, so it conjugates: 違います, 違った, and 違って, which means "unlike": イギリスの夏と違って、日本の夏は暑い.

A and B can also both go before は: 兄と私は同じ学校に通っている, "my brother and I go to the same school". In speech, 同じ on its own often means "same here".
`,
    sentences: [
      s("私の誕生日は兄の誕生日{と同じ}です。", "わたしのたんじょうびはあにのたんじょうび{とおなじ}です。", "My birthday is the same as my brother's.", {
        near: [["と違う", "That's \"different from\". For \"the same as\", use と同じ."]],
      }),
      s("これはあれ{と違います}。", "これはあれ{とちがいます}。", "This one is different from that one.", {
        near: [["と同じです", "That's \"the same as\". For \"different from\", use と違います."]],
      }),
      s("私も田中さん{と同じ}かばんを持っています。", "わたしもたなかさん{とおなじ}かばんをもっています。", "I have the same bag as Tanaka.", {
        near: [["と同じの", "Before a noun, 同じ attaches directly: と同じかばん."]],
      }),
      s("日本の夏はイギリスの夏{と違って}、とても暑いです。", "にほんのなつはイギリスのなつ{とちがって}、とてもあついです。", "Unlike British summers, Japanese summers are very hot.", {
        near: [["と同じで", "That's \"just like\". For \"unlike\", use と違って."]],
      }),
      s("兄と私は{同じ}学校に通っています。", "あにとわたしは{おなじ}がっこうにかよっています。", "My brother and I go to the same school.", {
        near: [["同じな", "同じ goes straight before a noun, without な."]],
      }),
    ],
  }),

  point({
    id: "n5-ku-suru",
    title: "〜くする・〜にする (make it …)",
    meaning: "make (something) …, turn it …",
    structure: "い-adjective − い + く + する · な-adjective / Noun + に + する",
    related: ["n5-naru", "n5-adverbs", "n5-ni-suru"],
    explanation: `
**する** after an adjective's adverb form means making something that way: 音を小さくしてください, "please make the sound smaller", so "turn it down". 部屋をきれいにしました, "I made the room clean".

い-adjectives change い to く: 小さい → 小さくする, 安い → 安くする, 短い → 短くする. な-adjectives and nouns take に: 静かにする, きれいにする.

Compare **なる** (N5): 短くなった is "it became short"; 短くした is "I made it short". する is someone doing it; なる is it happening.

静かにしてください, "please be quiet", is one of the most common uses.
`,
    sentences: [
      s("音を{小さくして}ください。", "おとを{ちいさくして}ください。", "Please turn the volume down.", {
        near: [["小さいして", "い-adjectives change い to く: 小さくして."]],
      }),
      s("部屋を{きれいにしました}。", "へやを{きれいにしました}。", "I tidied up the room.", {
        near: [["きれいくしました", "な-adjectives take に: きれいにしました."]],
      }),
      s("もう少し{安くして}もらえませんか。", "もうすこし{やすくして}もらえませんか。", "Could you make it a bit cheaper?", {
        near: [["安いにして", "い-adjectives change い to く: 安くして."]],
      }),
      s("図書館では{静かにして}ください。", "としょかんでは{しずかにして}ください。", "Please be quiet in the library.", {
        near: [["静かくして", "な-adjectives take に: 静かにして."]],
      }),
      s("髪を{短くしました}。", "かみを{みじかくしました}。", "I had my hair cut short.", {
        near: [["短くなりました", "That's \"it became short\". For making it short, use 短くしました."]],
      }),
    ],
  }),

  point({
    id: "n5-question-demo",
    title: "何でも・いつでも・どこでも・誰でも",
    meaning: "anything, any time, anywhere, anyone",
    structure: "Question word + でも",
    related: ["n5-question-mo", "n5-question-ka"],
    explanation: `
A question word plus **でも** means "any … at all": **何でも** (anything), **いつでも** (any time), **どこでも** (anywhere), **誰でも** (anyone), **どれでも** (whichever).

It's positive and open: 何でも食べます, "I'll eat anything"; いつでも電話してください, "call me any time".

Compare the three question-word patterns:
- か: 何か, "something" (one thing, unknown).
- も + negative: 何も食べない, "I don't eat anything".
- でも: 何でも食べる, "I eat anything".

Mixing up 何も and 何でも is a very common slip, and it flips the meaning. Note too that 何でも is read なんでも, while 何も is read なにも.
`,
    sentences: [
      s("{何でも}食べます。", "{なんでも}たべます。", "I'll eat anything.", {
        near: [["何も", "何も needs a negative: \"nothing\". For \"anything\", use 何でも.", "なにも"]],
      }),
      s("{いつでも}電話してください。", "{いつでも}でんわしてください。", "Call me any time.", {
        near: [["いつも", "いつも is \"always\". For \"any time\", use いつでも."]],
      }),
      s("このカードは{どこでも}使えます。", "このカードは{どこでも}つかえます。", "You can use this card anywhere.", {
        near: [["どこにも", "どこにも needs a negative. For \"anywhere\", use どこでも."]],
      }),
      s("この問題は{誰でも}わかります。", "このもんだいは{だれでも}わかります。", "Anyone can understand this problem.", {
        near: [["誰も", "誰も needs a negative: \"no one\". For \"anyone\", use 誰でも.", "だれも"]],
      }),
      s("{どれでも}好きなのを取ってください。", "{どれでも}すきなのをとってください。", "Take whichever one you like.", {
        near: [["どれも", "どれも is \"all of them\". For \"whichever\", use どれでも."]],
      }),
    ],
  }),

  point({
    id: "n5-time",
    title: "〜時・〜分・半",
    meaning: "o'clock, minutes, half past",
    structure: "Number + 時 + Number + 分 · 時 + 半 · 何時",
    related: ["n5-goro", "n5-ni-time"],
    explanation: `
Telling the time: **時** is "o'clock", **分** is "minutes", and **半** is "half past": 三時, 九時十分, 四時半.

A few readings are irregular: 四時 is よじ, 七時 is しちじ, 九時 is くじ. 分 changes too: 一分 (いっぷん), 三分 (さんぷん), 十分 (じゅっぷん), but 二分 (にふん) and 五分 (ごふん).

To ask the time: 今、何時ですか. For a length of time, add 間: 三時間 is "three hours", 十分間 "ten minutes". Confusing 三時 and 三時間 is a classic mistake.

With a specific time, add に: 七時に起きます. With an approximate one, ごろ.
`,
    sentences: [
      s("今、{三時}です。", "いま、{さんじ}です。", "It's three o'clock now.", {
        accept: ["3時"],
        near: [["三時間", "三時間 is \"three hours\". For \"three o'clock\", use 三時.", "さんじかん"]],
      }),
      s("会議は{四時半}からです。", "かいぎは{よじはん}からです。", "The meeting starts at half past four.", {
        accept: ["4時半", "四時三十分", "よじさんじゅっぷん", "4時30分"],
        near: [["四時半分", "半 replaces 三十分: just 四時半.", "よじはんぷん"]],
      }),
      s("朝{七時}に起きます。", "あさ{しちじ}におきます。", "I get up at seven in the morning.", {
        accept: ["7時", "ななじ"],
        near: [["七時間", "That's \"seven hours\". For the time, use 七時.", "しちじかん"]],
      }),
      s("電車は九時{十分}に出ます。", "でんしゃはくじ{じゅっぷん}にでます。", "The train leaves at ten past nine.", {
        accept: ["10分", "じっぷん"],
        near: [["十分間", "分間 is a length of time. For a time on the clock, just 十分.", "じゅっぷんかん"]],
      }),
      s("すみません、今{何時}ですか。", "すみません、いま{なんじ}ですか。", "Excuse me, what time is it?", {
        near: [["何時間", "何時間 is \"how many hours\". For \"what time\", use 何時.", "なんじかん"]],
      }),
    ],
  }),

  point({
    id: "n5-counters-more",
    title: "〜冊・〜台・〜匹・〜杯・〜階",
    meaning: "counters for books, machines, small animals, cupfuls, floors",
    structure: "Noun + が/を + Number + counter",
    related: ["n5-counter-tsu", "n5-counter-hon", "n5-counter-mai"],
    explanation: `
Beyond つ, 人, 本 and 枚, a few more counters come up constantly:

- **冊** for books and notebooks: 三冊.
- **台** for cars, bikes and machines: 二台.
- **匹** for small animals: 一匹 (いっぴき), 三匹 (さんびき).
- **杯** for cupfuls and glassfuls: 二杯 (にはい), 三杯 (さんばい).
- **階** for floors: 三階 (さんがい).

Like other counters, they usually follow the noun and its particle: 本を三冊買った.

Sound changes are common: 一, 六, 八 and 十 often double the next consonant (いっぴき, ろっぴき), and 三 often voices it (さんびき, さんばい). When in doubt, つ works for small objects, but not for people, animals or floors.
`,
    sentences: [
      s("本を{三冊}買いました。", "ほんを{さんさつ}かいました。", "I bought three books.", {
        accept: ["3冊"],
        near: [["三本", "本 is for long, thin things. Books are counted with 冊.", "さんぼん"]],
      }),
      s("家に車が{二台}あります。", "いえにくるまが{にだい}あります。", "We have two cars.", {
        accept: ["2台"],
        near: [["二つ", "つ works for small things. Cars and machines take 台.", "ふたつ"]],
      }),
      s("庭に猫が{一匹}います。", "にわにねこが{いっぴき}います。", "There's a cat in the garden.", {
        accept: ["1匹"],
        near: [["一人", "人 is for people. Small animals take 匹.", "ひとり"]],
      }),
      s("コーヒーを{二杯}飲みました。", "コーヒーを{にはい}のみました。", "I drank two cups of coffee.", {
        accept: ["2杯"],
        near: [["二本", "本 is for bottles. Cups and glasses take 杯.", "にほん"]],
      }),
      s("トイレは{三階}にあります。", "トイレは{さんがい}にあります。", "The toilets are on the third floor.", {
        accept: ["3階"],
        near: [["三回", "回 is \"times\". Floors are counted with 階.", "さんかい"]],
      }),
    ],
  }),

  point({
    id: "n5-name-suffixes",
    title: "〜さん・〜ちゃん・〜くん・〜様・〜先生",
    meaning: "Mr/Ms (name suffixes)",
    structure: "Name + さん / ちゃん / くん / 様 / 先生",
    related: ["n5-o-go", "n5-desu"],
    explanation: `
Japanese names are almost always followed by a suffix:

- **さん**: the all-purpose polite one, for adults you don't know well, colleagues and neighbours.
- **ちゃん**: for small children, close friends and family members; affectionate.
- **くん**: for boys and younger men, often from teachers or seniors.
- **様**: very formal, for customers (お客様) and in letters.
- **先生**: for teachers, doctors and other experts, used instead of さん.

Never add a suffix to your own name: 私は田中です, not 田中さんです. Family names are the usual choice at work and school; given names with ちゃん or くん are for closer relationships.
`,
    sentences: [
      s("田中{さん}はどこですか。", "たなか{さん}はどこですか。", "Where's Tanaka?", {
        near: [["様", "様 is very formal, for customers and letters. For a colleague, use さん.", "さま"]],
      }),
      s("妹のゆき{ちゃん}は五歳です。", "いもうとのゆき{ちゃん}はごさいです。", "My little sister Yuki is five.", {
        near: [["さん", "That's fine, but for a small child, ちゃん is warmer."]],
      }),
      s("山田{先生}、質問があります。", "やまだ{せんせい}、しつもんがあります。", "Professor Yamada, I have a question.", {
        near: [["さん", "For a teacher or doctor, use 先生."]],
      }),
      s("お客{様}、こちらへどうぞ。", "おきゃく{さま}、こちらへどうぞ。", "This way, please.", {
        near: [["さん", "For customers, shops use 様: お客様."]],
      }),
      s("佐藤{くん}、ちょっと来て。", "さとう{くん}、ちょっときて。", "Sato, come here a second.", {
        near: [["ちゃん", "ちゃん is for small children and close friends. A teacher calling a boy uses くん."]],
      }),
    ],
  }),

  point({
    id: "n5-o-go",
    title: "お〜・ご〜 (polite prefixes)",
    meaning: "(polite prefix)",
    structure: "お + Japanese-origin noun · ご + Chinese-origin noun",
    related: ["n5-name-suffixes", "n4-sonkeigo"],
    explanation: `
**お** and **ご** in front of a noun make it polite. お usually goes with native Japanese words (お茶, お金, お名前, お水), and ご with words of Chinese origin (ご家族, ご両親, ご飯, ご住所).

Some words almost always have their prefix, even in casual speech: お茶, お金, ご飯, お風呂, お手洗い.

With other people's things, it shows respect: お名前は何ですか, "what's your name?"; ご家族は何人ですか, "how many are in your family?" You don't use it for your own family or things, except for words that always take it.

There are exceptions to the rule (お電話, お時間 use お with Chinese-origin words), so learn common ones as whole words.
`,
    sentences: [
      s("{お}茶を飲みませんか。", "{お}ちゃをのみませんか。", "Would you like some tea?", {
        near: [["ご", "Japanese words like 茶 take お. ご is for Chinese-origin words."]],
      }),
      s("{ご}家族は何人ですか。", "{ご}かぞくはなんにんですか。", "How many people are in your family?", {
        near: [["お", "家族 is a Chinese-origin word, so it takes ご."]],
      }),
      s("{お}名前は何ですか。", "{お}なまえはなんですか。", "What's your name?", {
        near: [["ご", "名前 is a Japanese word, so it takes お."]],
      }),
      s("{ご}飯を食べましょう。", "{ご}はんをたべましょう。", "Let's eat.", {
        near: [["お", "ご飯 always takes ご."]],
      }),
      s("{お}金がありません。", "{お}かねがありません。", "I don't have any money.", {
        near: [["ご", "金 is a Japanese word here, so it takes お: お金."]],
      }),
    ],
  }),

  point({
    id: "n5-jin-go",
    title: "〜人・〜語・〜屋",
    meaning: "(nationality), (language), (shop)",
    structure: "Country + 人 / 語 · Thing + 屋",
    related: ["n5-counter-nin", "n5-no"],
    explanation: `
Three suffixes turn one word into another:

- Country + **人** (じん): a person from there: 日本人, アメリカ人, スペイン人.
- Country + **語** (ご): the language: 日本語, スペイン語, 中国語. English is the exception: 英語.
- Thing + **屋** (や): a shop that sells it: パン屋 (bakery), 本屋 (bookshop), 花屋 (florist).

Don't confuse 人 as a suffix (じん) with 人 as a counter (にん: 三人) or the word ひと ("person").

屋 can also describe a person's character in casual speech: 恥ずかしがり屋, "a shy person".
`,
    sentences: [
      s("マリアさんはスペイン{人}です。", "マリアさんはスペイン{じん}です。", "Maria is Spanish.", {
        near: [["語", "語 is the language. For a person's nationality, use 人.", "ご"]],
      }),
      s("日本{語}が少し話せます。", "にほん{ご}がすこしはなせます。", "I can speak a little Japanese.", {
        near: [["人", "人 is a person. For a language, use 語.", "じん"]],
      }),
      s("駅の前にパン{屋}があります。", "えきのまえにパン{や}があります。", "There's a bakery in front of the station.", {
        near: [["店", "That works too, but shops that sell one thing are usually 〜屋.", "みせ"]],
      }),
      s("アメリカ{人}の友達がいます。", "アメリカ{じん}のともだちがいます。", "I have an American friend.", {
        near: [["語", "語 is the language. For a person's nationality, use 人.", "ご"]],
      }),
      s("本{屋}で辞書を買いました。", "ほん{や}でじしょをかいました。", "I bought a dictionary at the bookshop.", {
        near: [["店", "That works too, but shops that sell one thing are usually 〜屋.", "みせ"]],
      }),
    ],
  }),
];
