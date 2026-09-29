import { point, s, word } from "../../build";

/** Existence, polite verbs, and the particles that hang off them. */

const PLAIN_NOT_POLITE = "That's the plain form. This sentence is polite: use the ます form.";

export const verbs = [
  point({
    id: "n5-ga",
    title: "が",
    meaning: "subject (who or what)",
    structure: "Noun + が",
    related: ["n5-wa", "n5-arimasu", "n5-ga-suki", "n5-wa-ga"],
    explanation: `
**が** marks the subject: who does something, or what is or exists. Where は says "as for X", が points straight at X.

Three places a beginner meets it first:

- With あります and います: 猫がいます, "there's a cat".
- After question words, which never take は: 誰が来ましたか, "who came?" The answer keeps が: 田中さんが来ました.
- For something new you've just noticed: あ、雨が降っています, "oh, it's raining".

A rough test: if the sentence answers "who?" or "what?", the answer takes が. If it comments on a topic already on the table, は.

Likes, skills and understanding (好き, 上手, 分かる) also put the thing liked or understood before が, a point of its own later.
`,
    sentences: [
      s("誰{が}来ましたか。", "だれ{が}きましたか。", "Who came?", {
        near: [["は", "Question words like 誰 never take は. Use が."]],
      }),
      s("田中さん{が}来ました。", "たなかさん{が}きました。", "Mr Tanaka came.", {
        hint: "answering \"who came?\"",
        near: [["は", "は would make Tanaka the topic. As the answer to \"who came?\", use が."]],
      }),
      s("あ、雨{が}降っています。", "あ、あめ{が}ふっています。", "Oh, it's raining.", {
        near: [["は", "は would contrast the rain with something else. For something you've just noticed, use が."]],
      }),
      s("公園に子ども{が}います。", "こうえんにこども{が}います。", "There are children in the park.", {
        near: [["は", "With います for what's there, the thing that exists takes が."]],
      }),
      s("どの店{が}安いですか。", "どのみせ{が}やすいですか。", "Which shop is cheap?", {
        near: [["は", "A question word like どの never takes は. Use が."]],
      }),
      s("あ、バス{が}来ました。", "あ、バス{が}きました。", "Oh, here comes the bus.", {
        near: [["は", "For something you've just noticed, use が."]],
      }),
    ],
  }),

  point({
    id: "n5-arimasu",
    title: "あります",
    meaning: "there is, have (things)",
    structure: "Place に + thing が + あります",
    register: "Polite. Plain: ある, and its negative is simply ない.",
    related: ["n5-imasu", "n5-ni-location", "n5-ga"],
    explanation: `
**あります** says a thing exists or is somewhere: 机の上に本があります, "there's a book on the desk". It's for things without a life of their own: objects, plants, buildings, events. People and animals use います instead.

The usual order is place に, thing が, あります. When you're asking where something is, the thing becomes the topic instead: 本はどこにありますか.

あります also means "have": 時間がありません, "I don't have time"; 明日テストがあります, "I have a test tomorrow".

The plain form is ある, and its negative is simply ない, not あらない.
`,
    sentences: [
      s("机の上に本が{あります}。", "つくえのうえにほんが{あります}。", "There's a book on the desk.", {
        near: [["います", "います is for people and animals. For a thing, use あります."]],
      }),
      s("駅の前に銀行が{あります}。", "えきのまえにぎんこうが{あります}。", "There's a bank in front of the station.", {
        near: [["います", "います is for people and animals. A bank is a thing: あります."]],
      }),
      s("今日は時間が{ありません}。", "きょうはじかんが{ありません}。", "I don't have time today.", {
        hint: "negative",
        accept: ["ないです"],
        near: [["いません", "いません is for people and animals. Time is a thing: ありません."]],
      }),
      s("明日、テストが{あります}。", "あした、テストが{あります}。", "I have a test tomorrow.", {
        near: [["います", "います is for people and animals. A test is an event: あります."]],
      }),
      s("この町には大きい公園が{ありません}。", "このまちにはおおきいこうえんが{ありません}。", "This town doesn't have a big park.", {
        hint: "negative",
        accept: ["ないです"],
        near: [["いません", "いません is for people and animals. A park is a thing: ありません."]],
      }),
      s("冷蔵庫に牛乳が{ある}よ。", "れいぞうこにぎゅうにゅうが{ある}よ。", "There's milk in the fridge.", {
        hint: "casual",
        near: [
          ["あります", "Right verb, but this sentence is casual: ある."],
          ["いる", "いる is for people and animals. Milk is a thing: ある."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-imasu",
    title: "います",
    meaning: "there is, have (people and animals)",
    structure: "Place に + person/animal が + います",
    register: "Polite. Plain: いる, negative いない.",
    related: ["n5-arimasu", "n5-ni-location"],
    explanation: `
**います** is the "there is" for living things that move by themselves: people and animals. 公園に犬がいます, "there's a dog in the park". Things use あります.

Like あります, it also means "have", for people: 兄が二人います, "I have two older brothers"; 彼女がいません, "I don't have a girlfriend".

The line is about being alive and moving on your own, not about size or importance. A fish in a tank is います; a tree is あります. A taxi waiting outside is often いる too, since there's a driver in it.

Plain form: いる. Negative: いない.
`,
    sentences: [
      s("公園に犬が{います}。", "こうえんにいぬが{います}。", "There's a dog in the park.", {
        near: [["あります", "あります is for things. For animals and people, use います."]],
      }),
      s("教室に先生が{いません}。", "きょうしつにせんせいが{いません}。", "The teacher isn't in the classroom.", {
        hint: "negative",
        accept: ["いないです"],
        near: [["ありません", "ありません is for things. For people, use いません."]],
      }),
      s("私は兄が二人{います}。", "わたしはあにがふたり{います}。", "I have two older brothers.", {
        near: [["あります", "あります is for things. Brothers are people: います."]],
      }),
      s("田中さんは今、二階に{います}。", "たなかさんはいま、にかいに{います}。", "Mr Tanaka is upstairs right now.", {
        near: [["あります", "あります is for things. For where a person is, use います."]],
      }),
      s("家に猫が{いる}よ。", "いえにねこが{いる}よ。", "We've got a cat at home.", {
        hint: "casual",
        near: [
          ["います", "Right verb, but this sentence is casual: いる."],
          ["ある", "ある is for things. A cat is alive: いる."],
        ],
      }),
      s("池に魚が{います}。", "いけにさかなが{います}。", "There are fish in the pond.", {
        near: [["あります", "Fish are alive, so they take います."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-location",
    title: "に (location)",
    meaning: "in, at, on (where something is)",
    structure: "Place + に + あります / います / 住む",
    related: ["n5-de-place", "n5-arimasu", "n5-imasu"],
    explanation: `
With あります and います, **に** marks where something is: 部屋に猫がいます, "there's a cat in the room". It's also used with verbs of staying somewhere: 東京に住んでいます, "I live in Tokyo".

The classic mix-up is に versus で. Both come out as "at" or "in" in English, but they answer different questions:

- **に**: where something **is**
- **で**: where something **happens**

公園に子どもがいます: there are children in the park. 公園で子どもが遊んでいます: children are playing in the park.

A handy test: if the verb is あります, います or 住む, it's に.
`,
    sentences: [
      s("部屋{に}猫がいます。", "へや{に}ねこがいます。", "There's a cat in the room.", {
        near: [["で", "で is where an action happens. For where something is, use に."]],
      }),
      s("机の上{に}辞書があります。", "つくえのうえ{に}じしょがあります。", "There's a dictionary on the desk.", {
        near: [["で", "で is where an action happens. With あります, use に."]],
      }),
      s("姉は大阪{に}住んでいます。", "あねはおおさか{に}すんでいます。", "My older sister lives in Osaka.", {
        near: [["で", "住む marks where you live with に."]],
      }),
      s("かばんの中{に}かさがあります。", "かばんのなか{に}かさがあります。", "There's an umbrella in my bag.", {
        near: [["で", "で is where an action happens. With あります, use に."]],
      }),
      s("駅の近く{に}スーパーがあります。", "えきのちかく{に}スーパーがあります。", "There's a supermarket near the station.", {
        near: [["で", "で is where an action happens. With あります, use に."]],
      }),
    ],
  }),

  point({
    id: "n5-masu",
    title: "〜ます",
    meaning: "does, will do (polite)",
    structure: "Verb ます-stem + ます",
    register: "Polite: use it wherever you'd use です.",
    related: ["n5-masen", "n5-mashita", "n5-plain-present"],
    explanation: `
**〜ます** is the polite ending for verbs, and the first verb form most learners meet: 食べます, "(I) eat" or "(I) will eat".

Japanese has no separate future tense, so the same form covers habits and plans: 毎日コーヒーを飲みます, "I drink coffee every day"; 明日行きます, "I'll go tomorrow".

To make it, take the verb's ます-stem:

- ichidan verbs drop る: 食べる → 食べます
- godan verbs move their last kana to the i-row: 飲む → 飲みます, 帰る → 帰ります
- the irregulars: する → します, 来る → 来ます (きます)
`,
    sentences: [
      s("毎朝コーヒーを{飲みます}。", "まいあさコーヒーを{のみます}。", "I drink coffee every morning.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "polite", marker: "ます" },
        near: [["飲む", PLAIN_NOT_POLITE]],
      }),
      s("私は毎日七時に{起きます}。", "わたしはまいにちしちじに{おきます}。", "I get up at seven every day.", {
        hint: "起きる",
        conj: { word: word("起きる"), form: "polite", marker: "ます" },
        near: [["起きる", PLAIN_NOT_POLITE]],
      }),
      s("明日、友達が{来ます}。", "あした、ともだちが{きます}。", "A friend is coming tomorrow.", {
        hint: "来る",
        conj: { word: word("来る"), form: "polite", marker: "ます" },
        near: [["来る", PLAIN_NOT_POLITE]],
      }),
      s("週末は家で{勉強します}。", "しゅうまつはいえで{べんきょうします}。", "I study at home at weekends.", {
        hint: "勉強する",
        conj: { word: word("勉強する"), form: "polite", marker: "ます" },
        near: [["勉強する", PLAIN_NOT_POLITE]],
      }),
      s("今日は早く{帰ります}。", "きょうははやく{かえります}。", "I'm going home early today.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "polite", marker: "ます" },
        near: [["帰る", PLAIN_NOT_POLITE]],
      }),
      s("夜は日本の本を{読みます}。", "よるはにほんのほんを{よみます}。", "In the evenings I read Japanese books.", {
        hint: "読む",
        conj: { word: word("読む"), form: "polite", marker: "ます" },
        near: [["読む", PLAIN_NOT_POLITE]],
      }),
    ],
  }),

  point({
    id: "n5-masen",
    title: "〜ません",
    meaning: "doesn't, won't (polite)",
    structure: "Verb ます-stem + ません",
    register: "Polite. 〜ないです means the same and is common in conversation.",
    related: ["n5-masu", "n5-masen-deshita", "n5-nai"],
    explanation: `
Swap ます for **ません** and the verb becomes negative: 食べません, "(I) don't eat" or "(I) won't eat". Like ます, it covers both habits and plans: お酒は飲みません, "I don't drink"; 明日は行きません, "I'm not going tomorrow".

You'll also hear the plain negative plus です, 食べないです, which means the same and is very common in conversation. Both are accepted here.

ません is for verbs. After a noun, "isn't" is じゃありません (学生じゃありません), and "there isn't" is ありません. It's easy to mix these up at first because they all end the same way.
`,
    sentences: [
      s("私はお酒を{飲みません}。", "わたしはおさけを{のみません}。", "I don't drink alcohol.", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "polite-negative", marker: "ません" },
        near: [["飲みます", "That's positive. The sentence says you don't."]],
      }),
      s("日曜日は{働きません}。", "にちようびは{はたらきません}。", "I don't work on Sundays.", {
        hint: "働く",
        conj: { word: word("働く"), form: "polite-negative", marker: "ません" },
        near: [["働きます", "That's positive. The sentence says you don't."]],
      }),
      s("朝ご飯は{食べません}。", "あさごはんは{たべません}。", "I don't eat breakfast.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "polite-negative", marker: "ません" },
        near: [["食べない", "That's the plain negative. This sentence is polite."]],
      }),
      s("明日は学校に{来ません}。", "あしたはがっこうに{きません}。", "I'm not coming to school tomorrow.", {
        hint: "来る",
        conj: { word: word("来る"), form: "polite-negative", marker: "ません" },
        near: [["来ます", "That's positive. The sentence says you won't."]],
      }),
      s("テレビはあまり{見ません}。", "テレビはあまり{みません}。", "I don't watch much TV.", {
        hint: "見る",
        conj: { word: word("見る"), form: "polite-negative", marker: "ません" },
        near: [["見ない", "That's the plain negative. This sentence is polite."]],
      }),
    ],
  }),

  point({
    id: "n5-mashita",
    title: "〜ました",
    meaning: "did (polite past)",
    structure: "Verb ます-stem + ました",
    related: ["n5-masu", "n5-masen-deshita", "n5-ta"],
    explanation: `
**ました** is the polite past: 食べました, "(I) ate". Just replace ます with ました; the stem doesn't change.

Japanese past covers both "I ate" and "I have eaten", so 宿題をしました can be "I did my homework" or "I've done my homework", depending on context.

Time words like 昨日 (yesterday), 先週 (last week) and さっき (a moment ago) are good signs that a sentence wants ました.

The casual past, the た-form (食べた), comes later in the deck. It takes more work to build, which is why the polite past comes first.
`,
    sentences: [
      s("昨日、映画を{見ました}。", "きのう、えいがを{みました}。", "I watched a film yesterday.", {
        hint: "見る",
        conj: { word: word("見る"), form: "polite-past", marker: "ました" },
        near: [["見ます", "That's present. 昨日 puts this in the past."]],
      }),
      s("先週、京都に{行きました}。", "せんしゅう、きょうとに{いきました}。", "I went to Kyoto last week.", {
        hint: "行く",
        conj: { word: word("行く"), form: "polite-past", marker: "ました" },
        near: [["行きます", "That's present. 先週 puts this in the past."]],
      }),
      s("宿題はもう{しました}。", "しゅくだいはもう{しました}。", "I've already done my homework.", {
        hint: "する",
        conj: { word: word("する"), form: "polite-past", marker: "ました" },
        near: [["します", "That's present. もう says it's already done."]],
      }),
      s("昨日の夜、母に電話を{かけました}。", "きのうのよる、ははにでんわを{かけました}。", "I called my mother last night.", {
        hint: "かける",
        conj: { word: word("かける", "かける", "ichidan"), form: "polite-past", marker: "ました" },
        near: [["かけます", "That's present. 昨日の夜 puts this in the past."]],
      }),
      s("駅で田中さんに{会いました}。", "えきでたなかさんに{あいました}。", "I ran into Mr Tanaka at the station.", {
        hint: "会う",
        conj: { word: word("会う"), form: "polite-past", marker: "ました" },
        near: [["会った", "That's the casual past. This sentence is polite."]],
      }),
    ],
  }),

  point({
    id: "n5-masen-deshita",
    title: "〜ませんでした",
    meaning: "didn't (polite past)",
    structure: "Verb ます-stem + ませんでした",
    register: "Polite. 〜なかったです is the conversational alternative.",
    related: ["n5-masen", "n5-mashita", "n5-nakatta"],
    explanation: `
Add でした to ません and you have the polite past negative: 食べませんでした, "(I) didn't eat". It's long, but it's two pieces you already know.

The conversational alternative is the plain past negative plus です: 食べなかったです. Both are accepted here.

A common slip is 食べないでした. It sounds logical, but the past goes on the negative ending itself, not with でした added afterwards.

One thing it isn't for: "haven't done it **yet**". That uses まだ with the ている form (まだ食べていません), which comes later. ませんでした is for a finished stretch of time: 昨日は何も食べませんでした, "I didn't eat anything yesterday."
`,
    sentences: [
      s("昨日はどこにも{行きませんでした}。", "きのうはどこにも{いきませんでした}。", "I didn't go anywhere yesterday.", {
        hint: "行く",
        conj: { word: word("行く"), form: "polite-past-negative", marker: "でした" },
        near: [["行きません", "That's present. 昨日 puts this in the past."]],
      }),
      s("今朝は朝ご飯を{食べませんでした}。", "けさはあさごはんを{たべませんでした}。", "I didn't have breakfast this morning.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "polite-past-negative", marker: "でした" },
        near: [["食べないでした", "Close, but the past goes on the negative itself: 食べませんでした."]],
      }),
      s("先週は雨が{降りませんでした}。", "せんしゅうはあめが{ふりませんでした}。", "It didn't rain last week.", {
        hint: "降る",
        conj: { word: word("降る"), form: "polite-past-negative", marker: "でした" },
        near: [["降りません", "That's present. 先週 puts this in the past."]],
      }),
      s("パーティーに田中さんは{来ませんでした}。", "パーティーにたなかさんは{きませんでした}。", "Mr Tanaka didn't come to the party.", {
        hint: "来る",
        conj: { word: word("来る"), form: "polite-past-negative", marker: "でした" },
        near: [["来なかった", "Right, but that's casual. This sentence is polite."]],
      }),
      s("昨日は{勉強しませんでした}。", "きのうは{べんきょうしませんでした}。", "I didn't study yesterday.", {
        hint: "勉強する",
        conj: { word: word("勉強する"), form: "polite-past-negative", marker: "でした" },
        near: [["勉強しないでした", "Close, but the past goes on the negative itself: 勉強しませんでした."]],
      }),
    ],
  }),

  point({
    id: "n5-wo",
    title: "を",
    meaning: "object (what the action is done to)",
    structure: "Noun + を + verb",
    related: ["n5-ga", "n5-ga-suki"],
    explanation: `
**を** marks the direct object: the thing an action is done to. 水を飲みます, "(I) drink water"; 本を読みます, "(I) read a book".

It's pronounced **o**, but written with its own kana, を. On a keyboard, type wo.

In casual speech を often drops out (水飲む?), but in writing and polite speech it stays.

を also marks a place you move through or leave: 公園を歩きます, "walk through the park"; 部屋を出ます, "leave the room".

What it doesn't mark is the thing liked, wanted or understood with 好き, ほしい and 分かる. Those take が, which catches out almost every learner at least once.
`,
    sentences: [
      s("毎朝、水{を}飲みます。", "まいあさ、みず{を}のみます。", "I drink water every morning.", {
        near: [["が", "が would make the water the subject. The thing you drink is the object: を."]],
      }),
      s("日本語の本{を}読んでいます。", "にほんごのほん{を}よんでいます。", "I'm reading a Japanese book.", {
        near: [["は", "は would make the book the topic. As the thing you're reading, it takes を."]],
      }),
      s("駅で写真{を}撮りました。", "えきでしゃしん{を}とりました。", "I took photos at the station.", {
        near: [["が", "が would make the photos the subject. The thing you take is the object: を."]],
      }),
      s("公園{を}散歩しました。", "こうえん{を}さんぽしました。", "I took a walk through the park.", {
        near: [["で", "公園で works too (\"in the park\"). Here, practise を for the place you move through."]],
      }),
      s("七時に家{を}出ます。", "しちじにいえ{を}でます。", "I leave the house at seven.", {
        near: [
          ["から", "家から出る is possible, but the everyday way to say you leave a place is を."],
          ["に", "に would mean going into the house. Leaving it takes を."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-ni-time",
    title: "に (time)",
    meaning: "at, on, in (a specific time)",
    structure: "Time + に",
    related: ["n5-ni-destination", "n5-goro"],
    explanation: `
**に** after a time word says when something happens: 七時に起きます, "I get up at seven"; 日曜日に会いましょう, "let's meet on Sunday"; 八月に, "in August".

The catch is that only **specific** times take に: clock times, dates, months, years, days of the week. Words that are already measured from now stand alone: 今日, 明日, 昨日, 今週, 来年, 毎日 and 今. So it's 明日行きます, never 明日に行きます.

Days of the week sit in between: 日曜日に and plain 日曜日 are both heard, but に is the safer choice.
`,
    sentences: [
      s("毎朝六時{に}起きます。", "まいあさろくじ{に}おきます。", "I get up at six every morning.", {
        near: [["で", "で is for places and means. For a clock time, use に."]],
      }),
      s("日曜日{に}映画を見ましょう。", "にちようび{に}えいがをみましょう。", "Let's see a film on Sunday.", {
        near: [["で", "で is for places and means. For a day, use に."]],
      }),
      s("授業は九時{に}始まります。", "じゅぎょうはくじ{に}はじまります。", "Class starts at nine.", {
        near: [["から", "から would be \"from nine\". For when it starts, use に."]],
      }),
      s("八月{に}日本へ行きます。", "はちがつ{に}にほんへいきます。", "I'm going to Japan in August.", {
        near: [["で", "で is for places and means. For a month, use に."]],
      }),
      s("昨日は夜十一時{に}寝ました。", "きのうはよるじゅういちじ{に}ねました。", "Last night I went to bed at eleven.", {
        near: [["は", "は would make eleven o'clock the topic. For \"at eleven\", use に."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-destination",
    title: "に (destination)",
    meaning: "to (where you're going)",
    structure: "Place + に + 行く / 来る / 帰る / 乗る / 入る",
    related: ["n5-he", "n5-ni-target", "n5-ni-location"],
    explanation: `
With verbs of movement, **に** marks where you end up: 学校に行きます, "I go to school"; 日本に来ました, "I came to Japan"; うちに帰ります, "I'm going home".

It also marks what you get into or onto: 電車に乗ります, "get on the train"; お風呂に入ります, "take a bath", literally "enter the bath".

へ, the next point, is close in meaning and often interchangeable here. に points at the arrival, へ at the direction. In everyday speech に is more common, and it's the one to reach for when unsure.

What に never marks is the place you're doing something in. That's で.
`,
    sentences: [
      s("毎日、学校{に}行きます。", "まいにち、がっこう{に}いきます。", "I go to school every day.", {
        near: [["へ", "へ works too, and stresses the direction. This point practises に."]],
      }),
      s("去年、初めて日本{に}来ました。", "きょねん、はじめてにほん{に}きました。", "I came to Japan for the first time last year.", {
        near: [
          ["へ", "へ works too, and stresses the direction. This point practises に."],
          ["で", "で is where something happens. Where you arrive takes に."],
        ],
      }),
      s("六時にうち{に}帰ります。", "ろくじにうち{に}かえります。", "I'll be home at six.", {
        near: [["へ", "へ works too, and stresses the direction. This point practises に."]],
      }),
      s("駅から電車{に}乗ります。", "えきからでんしゃ{に}のります。", "I'll get on the train at the station.", {
        near: [
          ["を", "乗る takes に for the thing you get on."],
          ["で", "で would mean \"by train\", with a different verb. What you get on takes に."],
        ],
      }),
      s("寝る前にお風呂{に}入ります。", "ねるまえにおふろ{に}はいります。", "I take a bath before bed.", {
        near: [["を", "入る takes に for what you go into."]],
      }),
    ],
  }),

  point({
    id: "n5-he",
    title: "へ",
    meaning: "toward, to (direction)",
    structure: "Place + へ + movement verb",
    related: ["n5-ni-destination"],
    explanation: `
**へ** marks the direction of movement: 東京へ行きます, "go to Tokyo". As a particle it's pronounced **e** but written へ; on a keyboard, type he.

With 行く, 来る and 帰る, へ and に are usually interchangeable. へ stresses the direction you're heading, に the arrival, so へ suits setting out, and it's the one you'll see on signs and in letters.

Unlike に, へ can be followed by の to describe a noun: 母への手紙, "a letter to my mother".

It can't do に's other jobs: not what you get on (電車に乗る), not a time, not where something is.
`,
    sentences: [
      s("来週、北海道{へ}行きます。", "らいしゅう、ほっかいどう{へ}いきます。", "I'm going to Hokkaido next week.", {
        near: [["に", "に works too, and stresses the arrival. This point practises へ."]],
      }),
      s("夏休みに国{へ}帰ります。", "なつやすみにくに{へ}かえります。", "I'm going back to my home country for the summer holidays.", {
        near: [["に", "に works too, and stresses the arrival. This point practises へ."]],
      }),
      s("日本{へ}ようこそ。", "にほん{へ}ようこそ。", "Welcome to Japan!", {
        near: [["に", "You'll hear にようこそ, but the set phrase is へようこそ."]],
      }),
      s("これは母{への}手紙です。", "これははは{への}てがみです。", "This is a letter to my mother.", {
        near: [
          ["にの", "に can't take の. For \"a letter to\", it's への."],
          ["の", "母の手紙 would be a letter from (or belonging to) your mother. \"To her\" is への."],
        ],
      }),
      s("次の角を右{へ}曲がってください。", "つぎのかどをみぎ{へ}まがってください。", "Please turn right at the next corner.", {
        near: [["に", "に works too. This point practises へ, for the direction you turn."]],
      }),
    ],
  }),

  point({
    id: "n5-de-place",
    title: "で (place)",
    meaning: "at, in (where something happens)",
    structure: "Place + で + action verb",
    related: ["n5-ni-location", "n5-de-means"],
    explanation: `
**で** marks the place where an action happens: 図書館で勉強します, "I study at the library"; 家で晩ご飯を食べます, "I eat dinner at home".

Compare に, which marks where something **is**: 図書館にいます, "I'm at the library". Both are "at" in English, but で goes with doing and に with being. Look at the verb: an action (eat, study, work, play, buy) takes で; あります, います and 住む take に.

Events are the one surprise: 駅で祭りがあります, "there's a festival at the station". Even with あります, an event "takes place", so it's で.
`,
    sentences: [
      s("図書館{で}勉強します。", "としょかん{で}べんきょうします。", "I study at the library.", {
        near: [["に", "に says where something is. For where you do something, use で."]],
      }),
      s("駅前の店{で}靴を買いました。", "えきまえのみせ{で}くつをかいました。", "I bought shoes at the shop in front of the station.", {
        near: [["に", "に says where something is. Buying is an action: で."]],
      }),
      s("家{で}晩ご飯を食べます。", "いえ{で}ばんごはんをたべます。", "I eat dinner at home.", {
        near: [["に", "に says where something is. Eating is an action: で."]],
      }),
      s("子どもたちが公園{で}遊んでいます。", "こどもたちがこうえん{で}あそんでいます。", "The children are playing in the park.", {
        near: [["に", "に says where something is. Playing is an action: で."]],
      }),
      s("兄は銀行{で}働いています。", "あにはぎんこう{で}はたらいています。", "My older brother works at a bank.", {
        near: [["に", "With 働く, the workplace takes で. (に goes with 勤める, a different verb.)"]],
      }),
    ],
  }),

  point({
    id: "n5-de-means",
    title: "で (means)",
    meaning: "by, with, in (tool, transport, language)",
    structure: "Noun + で",
    related: ["n5-de-place", "n5-to-with"],
    explanation: `
The same **で** marks how something is done: the tool, the transport, the language. 箸で食べます, "eat with chopsticks"; バスで行きます, "go by bus"; 日本語で話しましょう, "let's talk in Japanese".

It's a different job from "at a place", but the two rarely clash, since places and tools don't look much alike.

Two details trip people up:

- On foot is 歩いて, a verb, not 足で.
- "With a person" is と (友達と行きます), never で. で is for things you use, not people you're with.
`,
    sentences: [
      s("毎日バス{で}会社に行きます。", "まいにちバス{で}かいしゃにいきます。", "I take the bus to work every day.", {
        near: [["に", "バスに would mean getting on the bus. For \"by bus\", use で."]],
      }),
      s("箸{で}食べます。", "はし{で}たべます。", "I eat with chopsticks.", {
        near: [["と", "と is \"together with\" a person. For a tool, use で."]],
      }),
      s("日本語{で}話しましょう。", "にほんご{で}はなしましょう。", "Let's talk in Japanese.", {
        near: [["を", "日本語を話す is \"speak Japanese\". For talking in it, use で."]],
      }),
      s("ボールペン{で}書いてください。", "ボールペン{で}かいてください。", "Please write in ballpoint pen.", {
        near: [["を", "を would make the pen the thing you write. For the tool, use で."]],
      }),
      s("写真はメール{で}送ります。", "しゃしんはメール{で}おくります。", "I'll send the photos by email.", {
        near: [["に", "に would be the person you send to. For how you send it, use で."]],
      }),
    ],
  }),

  point({
    id: "n5-to-with",
    title: "と (with)",
    meaning: "with (a person)",
    structure: "Person + と + verb",
    related: ["n5-to-and", "n5-de-means"],
    explanation: `
After a person, **と** means "with": 友達と映画を見ました, "I watched a film with a friend". It's the same と that joins nouns, doing a neighbouring job.

Some verbs need a partner by nature and take と for them: 結婚する (marry), 話す (talk), けんかする (argue). 田中さんと話しました is "I talked with Mr Tanaka".

Add 一緒に for "together": 家族と一緒に住んでいます, "I live with my family".

For the thing you do something with, a tool or a means, it's で, not と: 箸で食べる. People take と; things take で.
`,
    sentences: [
      s("友達{と}映画を見ました。", "ともだち{と}えいがをみました。", "I watched a film with a friend.", {
        near: [["で", "で is for tools and means. For doing something with a person, use と."]],
      }),
      s("週末は家族{と}出かけます。", "しゅうまつはかぞく{と}でかけます。", "At weekends I go out with my family.", {
        near: [["で", "で is for tools and means. For who you're with, use と."]],
      }),
      s("先生{と}話しました。", "せんせい{と}はなしました。", "I talked with my teacher.", {
        near: [["に", "先生に話す is \"tell the teacher\". A conversation with them takes と."]],
      }),
      s("姉は来月、アメリカ人{と}結婚します。", "あねはらいげつ、アメリカじん{と}けっこんします。", "My sister is marrying an American next month.", {
        near: [["を", "結婚する takes と for the person, never を."]],
      }),
      s("母{と}一緒に料理を作りました。", "はは{と}いっしょにりょうりをつくりました。", "I cooked with my mother.", {
        near: [["の", "母の一緒 doesn't work. \"With my mother\" is 母と一緒に."]],
      }),
    ],
  }),

  point({
    id: "n5-ya",
    title: "や",
    meaning: "and (among other things)",
    structure: "Noun + や + Noun (+ など)",
    related: ["n5-to-and", "n5-nado", "n5-ka-or"],
    explanation: `
**や** joins nouns like と, but hints that the list isn't complete: パンや卵を買いました, "I bought bread, eggs and so on". と says "these and nothing else"; や says "things like these".

It often ends with など, "etc.": 犬や猫など, "dogs, cats and the like". Even without など, the "and others" is understood.

Use it when the items are examples. If someone asks exactly what's in your bag and you answer with や, it sounds like you're leaving something out on purpose.
`,
    sentences: [
      s("冷蔵庫に肉{や}野菜があります。", "れいぞうこににく{や}やさいがあります。", "There's meat, vegetables and so on in the fridge.", {
        near: [["と", "と would say it's only meat and vegetables. To hint there's more, use や."]],
      }),
      s("休みの日は本{や}漫画を読みます。", "やすみのひはほん{や}まんがをよみます。", "On my days off I read books, manga and things.", {
        near: [["と", "と would say it's only books and manga. To give examples, use や."]],
      }),
      s("京都{や}奈良などに行きました。", "きょうと{や}ならなどにいきました。", "I went to places like Kyoto and Nara.", {
        near: [["と", "など already says there were other places, so the list wants や."]],
      }),
      s("机の上にペン{や}ノートなどがあります。", "つくえのうえにペン{や}ノートなどがあります。", "There are pens, notebooks and so on on the desk.", {
        near: [["と", "など already says there's more, so the list wants や."]],
      }),
      s("朝はパン{や}果物を食べます。", "あさはパン{や}くだものをたべます。", "In the mornings I have things like bread and fruit.", {
        near: [["と", "と would say it's only bread and fruit. To give examples, use や."]],
      }),
    ],
  }),

  point({
    id: "n5-nado",
    title: "など",
    meaning: "and so on, things like",
    structure: "Noun (や Noun) + など",
    register: "なんか and とか are the casual equivalents.",
    related: ["n5-ya"],
    explanation: `
**など** after a noun or a list means "and so on" or "things like": 京都や奈良などに行きました, "I went to places like Kyoto and Nara".

It usually closes a や list, but it can follow a single noun to soften a suggestion: お茶などいかがですか, "how about some tea or something?"

Particles attach after it as normal: などに, などを, などが.

In casual speech, なんか and とか do the same job: ゲームとか, "games and stuff". Both are accepted as near misses here, since this point practises など.
`,
    sentences: [
      s("京都や奈良{など}に行きました。", "きょうとやなら{など}にいきました。", "I went to places like Kyoto and Nara.", {
        near: [["とか", "とか means the same and is casual. This point practises など."]],
      }),
      s("スーパーで肉や野菜{など}を買いました。", "スーパーでにくややさい{など}をかいました。", "I bought meat, vegetables and so on at the supermarket.", {
        near: [["も", "も would be \"vegetables too\". To say \"and so on\", use など."]],
      }),
      s("かばんの中に財布やかぎ{など}が入っています。", "かばんのなかにさいふやかぎ{など}がはいっています。", "My bag has my wallet, keys and so on in it.", {
        near: [["とか", "とか means the same and is casual. This point practises など."]],
      }),
      s("お茶{など}いかがですか。", "おちゃ{など}いかがですか。", "How about some tea or something?", {
        near: [["も", "お茶も would be \"tea as well\". To soften the offer, use など."]],
      }),
      s("週末は掃除や洗濯{など}をします。", "しゅうまつはそうじやせんたく{など}をします。", "At weekends I do the cleaning, laundry and so on.", {
        near: [["なんか", "なんか means the same and is casual. This point practises など."]],
      }),
    ],
  }),

  point({
    id: "n5-kara-made",
    title: "から・まで",
    meaning: "from, until / as far as",
    structure: "Time / Place + から … Time / Place + まで",
    related: ["n5-kara-because", "n5-ni-time"],
    explanation: `
**から** marks a starting point and **まで** an end point, in time or in space: 九時から五時まで働きます, "I work from nine to five"; 家から駅まで歩きます, "I walk from home to the station".

Either can appear on its own: 明日から休みです, "I'm off from tomorrow"; 駅まで行きます, "I'll go as far as the station".

まで is "up to and including": 金曜日まで is until Friday, Friday included. Don't mix it up with までに ("by", a deadline), which comes later.

から after a whole sentence rather than a noun means "because", a separate point in this deck.
`,
    sentences: [
      s("銀行は九時{から}三時までです。", "ぎんこうはくじ{から}さんじまでです。", "The bank is open from nine to three.", {
        near: [["に", "に would be a single moment. For where the opening hours start, use から."]],
      }),
      s("家から駅{まで}歩きます。", "いえからえき{まで}あるきます。", "I walk from home to the station.", {
        near: [["に", "With 歩く, how far you walk takes まで."]],
      }),
      s("明日{から}夏休みです。", "あした{から}なつやすみです。", "Summer holidays start tomorrow.", {
        near: [["まで", "まで would mean the holidays end tomorrow. For where they start, use から."]],
      }),
      s("東京{から}大阪まで新幹線で行きました。", "とうきょう{から}おおさかまでしんかんせんでいきました。", "I went from Tokyo to Osaka by bullet train.", {
        near: [["を", "を marks a place you pass through. For the starting point, use から."]],
      }),
      s("昨日は夜十時{まで}働きました。", "きのうはよるじゅうじ{まで}はたらきました。", "Yesterday I worked until ten at night.", {
        near: [["に", "に would be the moment you did something. For \"until ten\", use まで."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-target",
    title: "に (target)",
    meaning: "to (the person on the receiving end)",
    structure: "Person + に + verb",
    related: ["n5-ni-destination", "n5-to-with"],
    explanation: `
**に** also marks the person an action is aimed at: 友達に手紙を書きます, "write a letter to a friend"; 母に電話します, "call my mother"; 先生に聞きます, "ask the teacher".

Think of it as the target of an arrow: the action goes from you to them. Verbs of giving, sending, showing, teaching and telling all work this way: 弟に本をあげました, "I gave my little brother a book".

会う takes に too: 駅で田中さんに会いました, "I ran into Mr Tanaka at the station". と is also possible, since meeting is mutual, but に is the everyday choice. What 会う never takes is を.
`,
    sentences: [
      s("母{に}電話します。", "はは{に}でんわします。", "I'll call my mother.", {
        near: [["を", "を marks the thing, like 電話. The person on the receiving end takes に."]],
      }),
      s("友達{に}手紙を書きました。", "ともだち{に}てがみをかきました。", "I wrote a letter to a friend.", {
        near: [["へ", "へ appears in writing, but the everyday choice for who you write to is に."]],
      }),
      s("分からない時は先生{に}聞いてください。", "わからないときはせんせい{に}きいてください。", "If you don't understand, ask the teacher.", {
        near: [["を", "先生を聞く isn't right. The person you ask takes に."]],
      }),
      s("弟{に}本をあげました。", "おとうと{に}ほんをあげました。", "I gave my little brother a book.", {
        near: [["と", "と would mean you gave it together with him. The person who receives it takes に."]],
      }),
      s("昨日、駅で田中さん{に}会いました。", "きのう、えきでたなかさん{に}あいました。", "I ran into Mr Tanaka at the station yesterday.", {
        near: [
          ["と", "と also works, since meeting is mutual. For running into someone, に is the everyday choice."],
          ["を", "会う never takes を. Use に."],
        ],
      }),
    ],
  }),

  point({
    id: "n5-mashou",
    title: "〜ましょう",
    meaning: "let's (polite)",
    structure: "Verb ます-stem + ましょう",
    register: "Polite. Casual: the volitional form, 行こう, 食べよう.",
    related: ["n5-masen-ka", "n5-mashou-ka"],
    explanation: `
Replace ます with **ましょう** to suggest doing something together: 行きましょう, "let's go"; 始めましょう, "let's start".

It's upbeat and assumes the other person is on board, so it's used when the plan is more or less settled, or by whoever's in charge (a teacher: "let's open our books").

To actually invite someone, where they might say no, 〜ませんか is softer. That's the next point.

The casual version is the volitional form: 行こう, 食べよう. You'll hear it constantly between friends and in anime.
`,
    sentences: [
      s("もう遅いですから、{帰りましょう}。", "もうおそいですから、{かえりましょう}。", "It's late, so let's go home.", {
        hint: "帰る",
        conj: { word: word("帰る"), form: "polite-volitional", marker: "ましょう" },
        near: [["帰ろう", "That's the casual \"let's\". This sentence is polite."]],
      }),
      s("一緒に{食べましょう}。", "いっしょに{たべましょう}。", "Let's eat together.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "polite-volitional", marker: "ましょう" },
        near: [["食べませんか", "That's an invitation (\"would you like to?\"). The sentence says \"let's\"."]],
      }),
      s("では、授業を{始めましょう}。", "では、じゅぎょうを{はじめましょう}。", "Right, let's begin the lesson.", {
        hint: "始める",
        conj: { word: word("始める"), form: "polite-volitional", marker: "ましょう" },
        near: [["始めます", "That's \"I'll start\". For \"let's start\", use ましょう."]],
      }),
      s("駅の前で{会いましょう}。", "えきのまえで{あいましょう}。", "Let's meet in front of the station.", {
        hint: "会う",
        conj: { word: word("会う"), form: "polite-volitional", marker: "ましょう" },
        near: [["会おう", "That's the casual \"let's\". This sentence is polite."]],
      }),
      s("ちょっと{休みましょう}。", "ちょっと{やすみましょう}。", "Let's take a short break.", {
        hint: "休む",
        conj: { word: word("休む"), form: "polite-volitional", marker: "ましょう" },
        near: [["休みませんか", "That's an invitation (\"shall we?\"). The sentence says \"let's\"."]],
      }),
    ],
  }),

  point({
    id: "n5-masen-ka",
    title: "〜ませんか",
    meaning: "won't you…? would you like to…?",
    structure: "Verb ます-stem + ませんか",
    related: ["n5-mashou", "n5-mashou-ka"],
    explanation: `
A negative question makes a polite invitation: 一緒に行きませんか, "would you like to come along?" Literally "won't you go together?", it leaves room for the other person to say no, which makes it softer than ましょう.

If they agree, the usual reply is ましょう: いいですね、行きましょう. Declining is often done without saying no at all: 明日はちょっと…, "tomorrow's a bit…".

The tone does the work. 行きませんか as an invitation is friendly and rising; a real question about someone's plans ("aren't you going?") is usually worded differently, 行かないんですか.
`,
    sentences: [
      s("週末、映画を{見ませんか}。", "しゅうまつ、えいがを{みませんか}。", "Would you like to see a film this weekend?", {
        hint: "見る",
        conj: { word: word("見る"), form: "polite-negative", tail: "か", first: true, marker: "ませんか" },
        near: [["見ましょう", "ましょう is \"let's\", which assumes a yes. To invite, use ませんか."]],
      }),
      s("一緒にお茶を{飲みませんか}。", "いっしょにおちゃを{のみませんか}。", "Would you like to have some tea with me?", {
        hint: "飲む",
        conj: { word: word("飲む"), form: "polite-negative", tail: "か", first: true, marker: "ませんか" },
        near: [["飲みません", "Without か it's a flat \"I won't drink\". Add か to invite."]],
      }),
      s("今度の日曜日、うちに{来ませんか}。", "こんどのにちようび、うちに{きませんか}。", "Would you like to come over this Sunday?", {
        hint: "来る",
        conj: { word: word("来る"), form: "polite-negative", tail: "か", first: true, marker: "ませんか" },
        near: [["来ましょう", "ましょう is \"let's\", which assumes a yes. To invite, use ませんか."]],
      }),
      s("少し{休みませんか}。", "すこし{やすみませんか}。", "Shall we take a little break?", {
        hint: "休む",
        conj: { word: word("休む"), form: "polite-negative", tail: "か", first: true, marker: "ませんか" },
        near: [["休みましょう", "ましょう is \"let's\", which assumes a yes. To suggest it gently, use ませんか."]],
      }),
      s("明日、テニスを{しませんか}。", "あした、テニスを{しませんか}。", "Do you want to play tennis tomorrow?", {
        hint: "する",
        conj: { word: word("する"), form: "polite-negative", tail: "か", first: true, marker: "ませんか" },
        near: [["しないですか", "That asks whether they're not playing. To invite, use ませんか."]],
      }),
    ],
  }),

  point({
    id: "n5-mashou-ka",
    title: "〜ましょうか",
    meaning: "shall I…? shall we…?",
    structure: "Verb ます-stem + ましょうか",
    register: "Polite. Casual: the volitional form plus か, 持とうか.",
    related: ["n5-mashou", "n5-masen-ka"],
    explanation: `
Add か to ましょう and it becomes an offer or a suggestion: 窓を開けましょうか, "shall I open the window?"; 何を食べましょうか, "what shall we eat?"

Whether it means "shall I" or "shall we" comes from context: an offer to help is "shall I", a plan made together is "shall we".

It's the natural way to offer a hand when you notice someone struggling: 持ちましょうか, "shall I carry that?" A polite reply is お願いします ("yes, please") or 大丈夫です ("I'm fine, thanks").

Between friends it's the volitional form plus か: 持とうか.
`,
    sentences: [
      s("暑いですね。窓を{開けましょうか}。", "あついですね。まどを{あけましょうか}。", "It's hot, isn't it? Shall I open the window?", {
        hint: "開ける",
        conj: { word: word("開ける"), form: "polite-volitional", tail: "か", marker: "ましょうか" },
        near: [["開けましょう", "That's \"let's open it\". To offer, add か."]],
      }),
      s("重そうですね。{持ちましょうか}。", "おもそうですね。{もちましょうか}。", "That looks heavy. Shall I carry it?", {
        hint: "持つ",
        conj: { word: word("持つ"), form: "polite-volitional", tail: "か", marker: "ましょうか" },
        near: [["持ちませんか", "That would invite them to carry it. To offer, use ましょうか."]],
      }),
      s("何時に{会いましょうか}。", "なんじに{あいましょうか}。", "What time shall we meet?", {
        hint: "会う",
        conj: { word: word("会う"), form: "polite-volitional", tail: "か", marker: "ましょうか" },
        near: [["会いませんか", "That's an invitation. Here you're settling a time together: ましょうか."]],
      }),
      s("お昼は何を{食べましょうか}。", "おひるはなにを{たべましょうか}。", "What shall we have for lunch?", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "polite-volitional", tail: "か", marker: "ましょうか" },
        near: [["食べますか", "That asks what they'll eat. \"What shall we eat?\" is ましょうか."]],
      }),
      s("駅まで{送りましょうか}。", "えきまで{おくりましょうか}。", "Shall I take you to the station?", {
        hint: "送る",
        conj: { word: word("送る"), form: "polite-volitional", tail: "か", marker: "ましょうか" },
        near: [["送りましょう", "That's \"let's\". To offer, add か."]],
      }),
    ],
  }),

  point({
    id: "n5-ni-iku",
    title: "〜に行く",
    meaning: "go (somewhere) to do",
    structure: "Verb ます-stem + に + 行く / 来る / 帰る",
    related: ["n5-ni-destination", "n5-masu"],
    explanation: `
To say what you're going somewhere to do, put the verb's ます-stem before **に** and a verb of movement: 映画を見に行きます, "I'm going to see a film"; 本を借りに来ました, "I came to borrow a book".

The stem is the part before ます: 見ます → 見, 買います → 買い, 泳ぎます → 泳ぎ. With する nouns, the noun alone can go before に: 買い物に行きます, "I'm going shopping".

The destination, if there is one, comes first with に or へ: 図書館へ本を借りに行きます. Two に in one sentence is fine; they're doing different jobs.
`,
    sentences: [
      s("デパートへ服を{買いに}行きます。", "デパートへふくを{かいに}いきます。", "I'm going to the department store to buy clothes.", {
        hint: "買う",
        conj: { word: word("買う"), form: "polite", cut: "ます", tail: "に" },
        near: [
          ["買うに", "Use the ます-stem before に: 買います → 買い."],
          ["買って", "That's \"buy and then\". For what you're going to do, use the stem + に."],
        ],
      }),
      s("友達がうちに{遊びに}来ました。", "ともだちがうちに{あそびに}きました。", "A friend came over to hang out.", {
        hint: "遊ぶ",
        conj: { word: word("遊ぶ"), form: "polite", cut: "ます", tail: "に" },
        near: [["遊ぶに", "Use the ます-stem before に: 遊びます → 遊び."]],
      }),
      s("図書館に本を{借りに}行きます。", "としょかんにほんを{かりに}いきます。", "I'm going to the library to borrow books.", {
        hint: "借りる",
        conj: { word: word("借りる"), form: "polite", cut: "ます", tail: "に" },
        near: [["借りるに", "Use the ます-stem before に: 借ります → 借り."]],
      }),
      s("海へ{泳ぎに}行きましょう。", "うみへ{およぎに}いきましょう。", "Let's go to the sea for a swim.", {
        hint: "泳ぐ",
        conj: { word: word("泳ぐ"), form: "polite", cut: "ます", tail: "に" },
        near: [["泳いで", "That's \"swim and then\". For what you're going to do, use the stem + に."]],
      }),
      s("昼ご飯を{食べに}帰ります。", "ひるごはんを{たべに}かえります。", "I'm going home to have lunch.", {
        hint: "食べる",
        conj: { word: word("食べる"), form: "polite", cut: "ます", tail: "に" },
        near: [["食べるに", "Use the ます-stem before に: 食べます → 食べ."]],
      }),
    ],
  }),

  point({
    id: "n5-wo-kudasai",
    title: "〜をください",
    meaning: "…, please (asking for something)",
    structure: "Noun + を + ください",
    register: "Polite but direct. お願いします is softer; ちょうだい is casual.",
    related: ["n5-te-kudasai", "n5-wo"],
    explanation: `
Noun + **をください** asks for something: 水をください, "water, please"; これをください, "I'll take this one". It's the everyday way to order in a café or buy something in a shop.

A number goes after the thing, just before ください: りんごを三つください, "three apples, please".

It's polite but direct. お願いします is softer and very common for orders: コーヒーをお願いします. Among friends, ちょうだい. In a shop, pointing and saying これをください is a perfectly good first sentence.

The same ください after a verb's て-form means "please do", a separate point later in the deck.
`,
    sentences: [
      s("すみません、水{をください}。", "すみません、みず{をください}。", "Excuse me, could I have some water?", {
        near: [
          ["ください", "Almost: the thing you're asking for takes を before ください."],
          ["をお願いします", "お願いします works too, and is a little softer. This point practises ください."],
        ],
      }),
      s("このりんごを三つ{ください}。", "このりんごをみっつ{ください}。", "Three of these apples, please.", {
        near: [["ちょうだい", "ちょうだい is casual. In a shop, use ください."]],
      }),
      s("切符を二枚{ください}。", "きっぷをにまい{ください}。", "Two tickets, please.", {
        near: [["お願いします", "お願いします works too, and is a little softer. This point practises ください."]],
      }),
      s("赤いの{をください}。", "あかいの{をください}。", "I'll take the red one, please.", {
        near: [["ください", "Almost: the thing you're asking for takes を before ください."]],
      }),
      s("メニュー{をください}。", "メニュー{をください}。", "Could I see the menu, please?", {
        near: [
          ["ください", "Almost: the thing you're asking for takes を before ください."],
          ["がください", "が doesn't go with ください. The thing you want takes を."],
        ],
      }),
    ],
  }),
];
