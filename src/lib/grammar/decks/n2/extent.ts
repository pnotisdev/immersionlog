import { point, s } from "../../build";

/** How far things go: far from, nothing but, not only, on top of, and setting aside. */

export const extent = [
  point({
    id: "n2-dokoro-ka",
    title: "〜どころか",
    meaning: "far from; let alone, not even",
    structure: "Plain form / Noun + どころか (な-adj + な)",
    related: ["n2-dokoro-de-wa-nai", "n2-bakari-ka"],
    explanation: `
**どころか** rejects an expectation and replaces it with something more extreme: 彼は謝るどころか、怒り出した, "far from apologising, he got angry". The truth goes in the opposite direction from what you'd expect.

It also works as "let alone": 漢字どころか、ひらがなも読めない, "forget kanji, I can't even read hiragana". Here the second half is even more basic, and usually has も or さえ with a negative.

The pattern is always a surprise or a letdown: the reality is much worse (or occasionally much better) than the first idea.

Compare ばかりか ("not only… but also"), which piles on more of the same. どころか flips the expectation.
`,
    sentences: [
      s("彼は謝る{どころか}、怒り出した。", "かれはあやまる{どころか}、おこりだした。", "Far from apologising, he got angry.", {
        near: [["だけでなく", "That's \"not only\". For \"far from, the opposite\", use どころか."]],
      }),
      s("貯金する{どころか}、借金がある。", "ちょきんする{どころか}、しゃっきんがある。", "Far from saving money, I'm in debt.", {
        near: [["だけでなく", "That's \"not only\". For \"far from, the opposite\", use どころか."]],
      }),
      s("漢字{どころか}、ひらがなも読めない。", "かんじ{どころか}、ひらがなもよめない。", "Forget kanji, I can't even read hiragana.", {
        near: [["より", "より compares. For \"let alone\", use どころか."]],
      }),
      s("雨は止む{どころか}、ますます強くなった。", "あめはやむ{どころか}、ますますつよくなった。", "Far from stopping, the rain got even heavier.", {
        near: [["だけでなく", "That's \"not only\". For \"far from, the opposite\", use どころか."]],
      }),
      s("休む{どころか}、寝る時間もない。", "やすむ{どころか}、ねるじかんもない。", "Forget resting, I don't even have time to sleep.", {
        near: [["ばかりか", "ばかりか adds more of the same. For \"let alone\", use どころか."]],
      }),
    ],
  }),

  point({
    id: "n2-dokoro-de-wa-nai",
    title: "〜どころではない",
    meaning: "no time for, out of the question",
    structure: "Noun / Verb dictionary form + どころではない (casual: どころじゃない)",
    related: ["n2-dokoro-ka"],
    explanation: `
**どころではない** says the situation is far too serious or busy for something: 忙しくて、旅行どころではない, "I'm so busy that a trip is out of the question".

The first half usually gives the reason (a deadline, an illness, worry, crowds), and the noun or verb before どころではない is what's been pushed aside: 遊んでいるどころではない, "this is no time to be playing around".

It works in the past for things that couldn't be enjoyed: 人が多くて桜どころではなかった, "it was so crowded we couldn't enjoy the blossoms at all".

In speech, it's どころじゃない. Compare どころか, which needs a second half; どころではない ends the sentence.
`,
    sentences: [
      s("忙しくて、旅行{どころではない}。", "いそがしくて、りょこう{どころではない}。", "I'm so busy that a trip is out of the question.", {
        accept: ["どころじゃない"],
        near: [["どころか", "どころか needs a second half. At the end, it's どころではない."]],
      }),
      s("試験前で、遊んでいる{どころではない}。", "しけんまえで、あそんでいる{どころではない}。", "The exam's coming up, so this is no time to be playing around.", {
        accept: ["どころじゃない"],
        near: [["わけがない", "That's \"no way\". For \"no time for\", use どころではない."]],
      }),
      s("熱があって、仕事{どころではなかった}。", "ねつがあって、しごと{どころではなかった}。", "I had a fever, so work was out of the question.", {
        accept: ["どころじゃなかった"],
        near: [["どころではない", "It's about the past: どころではなかった."]],
      }),
      s("花見に行ったが、人が多くて桜{どころではなかった}。", "はなみにいったが、ひとがおおくてさくら{どころではなかった}。", "We went to see the cherry blossoms, but it was so crowded we couldn't enjoy them at all.", {
        accept: ["どころじゃなかった"],
        near: [["だけではなかった", "That's \"it wasn't only\". For \"no chance to enjoy\", use どころではなかった."]],
      }),
      s("心配で、食事{どころじゃない}よ。", "しんぱいで、しょくじ{どころじゃない}よ。", "I'm so worried I can't even think about eating.", {
        accept: ["どころではない"],
        near: [["どころか", "どころか needs a second half. At the end, it's どころじゃない."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-sugi-nai",
    title: "〜にすぎない",
    meaning: "merely, no more than",
    structure: "Noun / Plain form + にすぎない",
    related: ["n2-ni-hoka-naranai", "n5-dake"],
    explanation: `
**にすぎない** plays something down: "it's only this, nothing more". これは私の意見にすぎない, "this is merely my opinion". すぎる means "to exceed", so it's literally "doesn't go beyond".

It's common with numbers, to stress how small they are: 参加者は十人にすぎなかった, "there were only ten participants". And for modesty: 私は自分の仕事をしたにすぎません, "I was only doing my job".

It's a formal, written equivalent of だけだ. It's often written に過ぎない.

Its opposite in feeling is にほかならない, "nothing other than", which asserts something strongly rather than playing it down.
`,
    sentences: [
      s("これは私の意見{にすぎない}。", "これはわたしのいけん{にすぎない}。", "This is merely my opinion.", {
        accept: ["に過ぎない"],
        near: [["だけだ", "That works in speech. In writing, use にすぎない."]],
      }),
      s("彼はただの学生{にすぎない}。", "かれはただのがくせい{にすぎない}。", "He's just a student, nothing more.", {
        accept: ["に過ぎない"],
        near: [["にほかならない", "That's \"nothing other than\", a strong claim. For \"merely\", use にすぎない."]],
      }),
      s("参加者は十人{にすぎなかった}。", "さんかしゃはじゅうにん{にすぎなかった}。", "There were only ten participants.", {
        accept: ["に過ぎなかった"],
        near: [["にすぎない", "It's about the past: にすぎなかった."]],
      }),
      s("それはうわさ{にすぎない}。", "それはうわさ{にすぎない}。", "That's nothing but a rumour.", {
        accept: ["に過ぎない"],
        near: [["にほかならない", "That's \"nothing other than\", a strong claim. For \"merely\", use にすぎない."]],
      }),
      s("私は自分の仕事をした{にすぎません}。", "わたしはじぶんのしごとをした{にすぎません}。", "I was only doing my job.", {
        accept: ["に過ぎません"],
        near: [["だけです", "That works in speech. Formally, use にすぎません."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-hoka-naranai",
    title: "〜にほかならない",
    meaning: "is nothing other than, is precisely",
    structure: "Noun / から + にほかならない",
    related: ["n2-ni-sugi-nai", "n3-koso"],
    explanation: `
**にほかならない** asserts strongly that something is exactly this and nothing else: 成功したのは、努力の結果にほかならない, "the success is nothing other than the result of hard work". ほか means "other", so it's "it doesn't become anything other than".

It's common after から, to insist on a reason: 親が厳しいのは、子どもを愛しているからにほかならない, "parents are strict precisely because they love their children".

It's formal and emphatic, typical of essays, speeches and opinion pieces. It's often written に他ならない.

Compare にすぎない, "merely", which plays things down, and に違いない, "must be", which is a guess. にほかならない isn't a guess; it's a firm claim.
`,
    sentences: [
      s("成功したのは、努力の結果{にほかならない}。", "せいこうしたのは、どりょくのけっか{にほかならない}。", "The success is nothing other than the result of hard work.", {
        accept: ["に他ならない"],
        near: [["にすぎない", "That's \"merely\", which plays it down. For \"nothing other than\", use にほかならない."]],
      }),
      s("親が厳しいのは、子どもを愛しているから{にほかならない}。", "おやがきびしいのは、こどもをあいしているから{にほかならない}。", "Parents are strict precisely because they love their children.", {
        accept: ["に他ならない"],
        near: [["にすぎない", "That's \"merely\", which plays it down. For \"precisely because\", use からにほかならない."]],
      }),
      s("これは差別{にほかならない}。", "これはさべつ{にほかならない}。", "This is nothing short of discrimination.", {
        accept: ["に他ならない"],
        near: [["かもしれない", "That's only \"maybe\". For \"nothing short of\", use にほかならない."]],
      }),
      s("彼の行動は、責任からの逃げ{にほかならない}。", "かれのこうどうは、せきにんからのにげ{にほかならない}。", "His behaviour is simply running away from responsibility.", {
        accept: ["に他ならない"],
        near: [["にすぎない", "That's \"merely\". For \"nothing other than\", use にほかならない."]],
      }),
      s("今日の私があるのは、先生のおかげ{にほかならない}。", "きょうのわたしがあるのは、せんせいのおかげ{にほかならない}。", "I owe who I am today entirely to my teacher.", {
        accept: ["に他ならない"],
        near: [["に違いない", "That's \"must be\", a guess. For \"entirely, nothing other than\", use にほかならない."]],
      }),
    ],
  }),

  point({
    id: "n2-bakari-ka",
    title: "〜ばかりか・〜ばかりでなく",
    meaning: "not only … but (even)",
    structure: "Plain form / Noun + ばかりか … も / まで / さえ (な-adj + な)",
    related: ["n3-dake-de-naku", "n2-nomi-narazu", "n2-dokoro-ka"],
    explanation: `
**ばかりか** adds something to a first point, usually something more surprising or more extreme: 彼は約束を忘れたばかりか、謝りもしなかった, "not only did he forget the promise, he didn't even apologise".

The second half often has も, まで or さえ to mark the addition: 大人ばかりか、子どもまで夢中になっている, "not only adults but even children are hooked".

It works for good things too: 安いばかりか、サービスもいい. **ばかりでなく** is a slightly more neutral equivalent, close to だけでなく.

Compare どころか, which rejects the first idea ("far from"). ばかりか keeps the first idea and piles more on top.
`,
    sentences: [
      s("彼は約束を忘れた{ばかりか}、謝りもしなかった。", "かれはやくそくをわすれた{ばかりか}、あやまりもしなかった。", "Not only did he forget the promise, he didn't even apologise.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["どころか", "どころか is \"far from\". For \"not only … but even\", use ばかりか."]],
      }),
      s("この店は安い{ばかりか}、サービスもいい。", "このみせはやすい{ばかりか}、サービスもいい。", "This shop is not only cheap, but its service is good too.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["どころか", "どころか is \"far from\". For \"not only\", use ばかりか."]],
      }),
      s("彼女は英語{ばかりか}、フランス語も話せる。", "かのじょはえいご{ばかりか}、フランスごもはなせる。", "She speaks not only English but French as well.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["ばかり", "ばかり alone is \"nothing but\". For \"not only\", use ばかりか."]],
      }),
      s("雨が降った{ばかりか}、風も強かった。", "あめがふった{ばかりか}、かぜもつよかった。", "Not only did it rain, but it was windy too.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["どころか", "どころか is \"far from\". For \"not only\", use ばかりか."]],
      }),
      s("大人{ばかりか}、子どもまで夢中になっている。", "おとな{ばかりか}、こどもまでむちゅうになっている。", "Not only adults but even children are hooked on it.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["ばかり", "ばかり alone is \"nothing but\". For \"not only\", use ばかりか."]],
      }),
    ],
  }),

  point({
    id: "n2-nomi-narazu",
    title: "〜のみならず",
    meaning: "not only (formal)",
    structure: "Noun / Plain form + のみならず … も",
    related: ["n2-bakari-ka", "n3-dake-de-naku", "n2-ni-kagirazu"],
    explanation: `
**のみ** is a formal word for "only", and **のみならず** means "not only": この問題は日本のみならず、世界の問題だ, "this is a problem not only for Japan but for the whole world".

It's the most formal member of the "not only" family: だけでなく (neutral), ばかりでなく (a bit formal), のみならず (written, speeches). The second half usually has も.

It follows nouns directly, and plain forms of verbs and adjectives: 才能があるのみならず、努力家でもある.

At the start of a sentence, それのみならず means "moreover". You'll see のみ alone on signs too: 会員のみ, "members only".
`,
    sentences: [
      s("この問題は日本{のみならず}、世界の問題だ。", "このもんだいはにほん{のみならず}、せかいのもんだいだ。", "This is a problem not only for Japan but for the whole world.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["のみ", "のみ alone is \"only\". For \"not only\", use のみならず."]],
      }),
      s("彼は才能がある{のみならず}、努力家でもある。", "かれはさいのうがある{のみならず}、どりょくかでもある。", "He's not only talented but hardworking too.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["のみ", "のみ alone is \"only\". For \"not only\", use のみならず."]],
      }),
      s("学生{のみならず}、社会人にも人気がある。", "がくせい{のみならず}、しゃかいじんにもにんきがある。", "It's popular not only with students but with working adults too.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["に限って", "That's \"of all\". For \"not only\", use のみならず."]],
      }),
      s("この薬は効果がない{のみならず}、副作用もある。", "このくすりはこうかがない{のみならず}、ふくさようもある。", "Not only does this medicine not work, it has side effects too.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["のみ", "のみ alone is \"only\". For \"not only\", use のみならず."]],
      }),
      s("国内{のみならず}、海外でも評価が高い。", "こくない{のみならず}、かいがいでもひょうかがたかい。", "It's highly rated not only at home but overseas as well.", {
        accept: ["だけでなく", "ばかりでなく"],
        near: [["のみ", "のみ alone is \"only\". For \"not only\", use のみならず."]],
      }),
    ],
  }),

  point({
    id: "n2-ue-ni",
    title: "〜上に",
    meaning: "on top of, besides, in addition",
    structure: "Plain form + 上に (な-adj + な · Noun + の / である)",
    related: ["n2-ni-kuwaete", "n4-shi"],
    explanation: `
**上に** adds a second point of the same kind to the first: この部屋は広い上に、駅から近い, "this room is spacious, and on top of that it's close to the station".

Both halves go in the same direction: good plus good, or bad plus bad. 道に迷った上に、雨まで降ってきた, "I got lost, and on top of that it started raining".

It follows a plain form; な-adjectives take な (親切な上に), and nouns take の or である.

Don't confuse it with 上で ("after, based on") or 上は ("now that"). Compare し (N4), which lists reasons more loosely, and に加えて, which adds nouns.
`,
    sentences: [
      s("この部屋は広い{上に}、駅から近い。", "このへやはひろい{うえに}、えきからちかい。", "This room is spacious, and on top of that it's close to the station.", {
        near: [["上で", "上で is \"after, based on\". For \"on top of\", use 上に."]],
      }),
      s("道に迷った{上に}、雨まで降ってきた。", "みちにまよった{うえに}、あめまでふってきた。", "I got lost, and on top of that it started raining.", {
        near: [["上は", "上は is \"now that\". For \"on top of\", use 上に."]],
      }),
      s("彼女は頭がいい{上に}、性格もいい。", "かのじょはあたまがいい{うえに}、せいかくもいい。", "She's clever, and she has a lovely personality too.", {
        near: [["上で", "上で is \"after, based on\". For \"on top of\", use 上に."]],
      }),
      s("この仕事は給料が安い{上に}、休みも少ない。", "このしごとはきゅうりょうがやすい{うえに}、やすみもすくない。", "This job pays badly, and there's hardly any time off either.", {
        near: [["わりに", "わりに is \"considering\". For \"on top of\", use 上に."]],
      }),
      s("親切な{上に}、仕事も早い。", "しんせつな{うえに}、しごともはやい。", "They're kind, and they work fast too.", {
        near: [["上で", "上で is \"after, based on\". For \"on top of\", use 上に."]],
      }),
    ],
  }),

  point({
    id: "n2-wa-mochiron",
    title: "〜はもちろん・〜はもとより",
    meaning: "not to mention, let alone, of course",
    structure: "Noun + はもちろん / はもとより … も",
    related: ["n2-wa-tomokaku", "n3-dake-de-naku"],
    explanation: `
**はもちろん** takes one item as obvious and adds another: 彼は英語はもちろん、中国語も話せる, "he speaks Chinese, not to mention English". The first item is the expected one; the second, with も, is the addition.

It's useful for praising things and making recommendations: この店は味はもちろん、雰囲気もいい, "the atmosphere is great, not to mention the food".

**はもとより** means the same and is more formal and written.

Compare はともかく, which does the opposite: it sets the first item aside instead of taking it for granted. In speech, you'll also hear it the other way round: もちろん英語も話せる, "of course he speaks English too".
`,
    sentences: [
      s("彼は英語{はもちろん}、中国語も話せる。", "かれはえいご{はもちろん}、ちゅうごくごもはなせる。", "He speaks Chinese, and English of course.", {
        accept: ["はもとより"],
        near: [["だけ", "だけ is \"only\". For \"not to mention\", use はもちろん."]],
      }),
      s("この店は味{はもちろん}、雰囲気もいい。", "このみせはあじ{はもちろん}、ふんいきもいい。", "This place has a great atmosphere, not to mention the food.", {
        accept: ["はもとより"],
        near: [["はともかく", "はともかく is \"setting aside\". For \"of course (and also)\", use はもちろん."]],
      }),
      s("週末{はもちろん}、平日も込んでいる。", "しゅうまつ{はもちろん}、へいじつもこんでいる。", "It's busy on weekdays too, never mind weekends.", {
        accept: ["はもとより"],
        near: [["はともかく", "はともかく is \"setting aside\". For \"of course (and also)\", use はもちろん."]],
      }),
      s("子ども{はもちろん}、大人も楽しめる。", "こども{はもちろん}、おとなもたのしめる。", "Adults can enjoy it too, not just children.", {
        accept: ["はもとより"],
        near: [["だけ", "だけ is \"only\". For \"not to mention\", use はもちろん."]],
      }),
      s("日本国内{はもちろん}、海外からも注文がある。", "にほんこくない{はもちろん}、かいがいからもちゅうもんがある。", "We get orders from abroad, not just from within Japan.", {
        accept: ["はもとより"],
        near: [["はともかく", "はともかく is \"setting aside\". For \"of course (and also)\", use はもちろん."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-kuwaete",
    title: "〜に加えて",
    meaning: "in addition to, as well as",
    structure: "Noun + に加えて / に加え",
    related: ["n2-ue-ni", "n2-wa-mochiron"],
    explanation: `
**に加えて** adds one thing to another: 雨に加えて、風も強くなってきた, "on top of the rain, the wind has picked up". 加える means "to add".

It follows a noun, and the second half usually has も. It's neutral and a little formal, common in news, explanations and business: 授業料に加えて、教科書代もかかる, "in addition to tuition, there are textbook costs".

In formal writing, it's に加え. At the start of a sentence, それに加えて means "in addition".

Compare 上に, which joins whole clauses of the same kind, and はもちろん, which treats the first item as obvious.
`,
    sentences: [
      s("雨{に加えて}、風も強くなってきた。", "あめ{にくわえて}、かぜもつよくなってきた。", "On top of the rain, the wind has picked up too.", {
        accept: ["に加え"],
        near: [["によって", "That's \"by\". For \"in addition to\", use に加えて."]],
      }),
      s("授業料{に加えて}、教科書代もかかる。", "じゅぎょうりょう{にくわえて}、きょうかしょだいもかかる。", "In addition to tuition, there's the cost of textbooks.", {
        accept: ["に加え"],
        near: [["に比べて", "That's \"compared with\". For \"in addition to\", use に加えて."]],
      }),
      s("日本語{に加えて}、韓国語も勉強している。", "にほんご{にくわえて}、かんこくごもべんきょうしている。", "I'm studying Korean as well as Japanese.", {
        accept: ["に加え", "だけでなく"],
        near: [["に比べて", "That's \"compared with\". For \"as well as\", use に加えて."]],
      }),
      s("経験{に加え}、資格も必要だ。", "けいけん{にくわえ}、しかくもひつようだ。", "Qualifications are needed in addition to experience.", {
        accept: ["に加えて"],
        near: [["によって", "That's \"by\". For \"in addition to\", use に加え."]],
      }),
      s("仕事の忙しさ{に加えて}、家のこともある。", "しごとのいそがしさ{にくわえて}、いえのこともある。", "On top of being busy at work, I've got things to deal with at home.", {
        accept: ["に加え"],
        near: [["に比べて", "That's \"compared with\". For \"on top of\", use に加えて."]],
      }),
    ],
  }),

  point({
    id: "n2-wa-tomokaku",
    title: "〜はともかく",
    meaning: "setting aside, regardless of",
    structure: "Noun + はともかく(として)",
    related: ["n2-wa-betsu-to-shite", "n2-wa-mochiron"],
    explanation: `
**はともかく** sets one issue aside to focus on something more important: 見た目はともかく、味はいい, "never mind how it looks, it tastes good".

The first item isn't denied, just put on hold: it may matter, but it's not the point right now. 結果はともかく、最後まで頑張ったことが大切だ, "whatever the result, what matters is that you tried your best".

It's also a common way to change the subject: 冗談はともかく、本題に入りましょう, "joking aside, let's get down to business".

**はさておき** means the same and is a little more formal. Compare はもちろん, which takes the first item for granted rather than setting it aside.
`,
    sentences: [
      s("見た目{はともかく}、味はいい。", "みため{はともかく}、あじはいい。", "It may not look much, but it tastes good.", {
        accept: ["はさておき", "は別として"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"setting aside\", use はともかく."]],
      }),
      s("結果{はともかく}、最後まで頑張ったことが大切だ。", "けっか{はともかく}、さいごまでがんばったことがたいせつだ。", "Whatever the result, what matters is that you tried your best to the end.", {
        accept: ["はさておき", "は別として"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"setting aside\", use はともかく."]],
      }),
      s("値段{はともかく}、品質が一番大事だ。", "ねだん{はともかく}、ひんしつがいちばんだいじだ。", "Price aside, quality is what matters most.", {
        accept: ["はさておき", "は別として"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"setting aside\", use はともかく."]],
      }),
      s("冗談{はともかく}、本題に入りましょう。", "じょうだん{はともかく}、ほんだいにはいりましょう。", "Joking aside, let's get down to business.", {
        accept: ["はさておき"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"joking aside\", use はともかく."]],
      }),
      s("他の人{はともかく}、私は反対です。", "ほかのひと{はともかく}、わたしははんたいです。", "I can't speak for anyone else, but I'm against it.", {
        accept: ["は別として", "はさておき"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"leaving others aside\", use はともかく."]],
      }),
    ],
  }),

  point({
    id: "n2-wa-betsu-to-shite",
    title: "〜は別として",
    meaning: "apart from, except for; whether or not",
    structure: "Noun · A か B か + は別として",
    related: ["n2-wa-tomokaku", "n3-igai"],
    explanation: `
**は別として** treats one item as an exception, or as a separate question: 一部の例外は別として、全員が賛成した, "apart from a few exceptions, everyone agreed". 別 means "separate".

After a pair of options (好きか嫌いか, 本当かどうか), it means "whether or not": 本当かどうかは別として、面白い話だ, "whether or not it's true, it's an interesting story".

It overlaps with はともかく. は別として is a little more literal, "that's a separate matter", and is better for true exceptions (日曜日は別として, "except Sunday").

For a plain exception, を除いて and 以外 are also common, and 冗談は別として works like 冗談はともかく.
`,
    sentences: [
      s("一部の例外{は別として}、全員が賛成した。", "いちぶのれいがい{はべつとして}、ぜんいんがさんせいした。", "Apart from a few exceptions, everyone agreed.", {
        accept: ["を除いて"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"apart from\", use は別として."]],
      }),
      s("好きか嫌いか{は別として}、野菜は食べたほうがいい。", "すきかきらいか{はべつとして}、やさいはたべたほうがいい。", "Whether you like them or not, you should eat vegetables.", {
        accept: ["はともかく"],
        near: [["によって", "That's \"depending on\". For \"whether or not\", use は別として."]],
      }),
      s("日曜日{は別として}、毎日開いています。", "にちようび{はべつとして}、まいにちあいています。", "We're open every day except Sunday.", {
        accept: ["を除いて", "以外は"],
        near: [["に限って", "That's \"of all days\". For \"except\", use は別として."]],
      }),
      s("プロ{は別として}、普通の人にはこの曲は難しい。", "プロ{はべつとして}、ふつうのひとにはこのきょくはむずかしい。", "Professionals aside, this piece is hard for ordinary people.", {
        accept: ["はともかく"],
        near: [["はもちろん", "はもちろん is \"of course (and also)\". For \"apart from\", use は別として."]],
      }),
      s("本当かどうか{は別として}、面白い話だ。", "ほんとうかどうか{はべつとして}、おもしろいはなしだ。", "Whether or not it's true, it's an interesting story.", {
        accept: ["はともかく"],
        near: [["によって", "That's \"depending on\". For \"whether or not\", use は別として."]],
      }),
    ],
  }),

  point({
    id: "n2-made",
    title: "〜まで(して)",
    meaning: "even; going as far as",
    structure: "Noun (+ particle) + まで · Verb て-form + まで",
    related: ["n3-sae", "n2-dokoro-ka"],
    explanation: `
Besides "until", **まで** means "even", stressing that something went further than expected: 家族にまでうそをついた, "he even lied to his family". It's stronger than も and often carries surprise or disapproval.

It follows a noun or a particle: 子どもにまで, 雷まで. The unexpected item is the extreme end of a list.

After a て-form, **てまで** means "going as far as doing": 借金してまで、車を買う必要はない, "there's no need to go as far as borrowing money to buy a car". The second half often questions whether it's worth it.

Compare さえ ("even"), which picks out the minimum; まで picks out the maximum, the furthest point.
`,
    sentences: [
      s("家族に{まで}うそをついた。", "かぞくに{まで}うそをついた。", "He even lied to his family.", {
        near: [["でも", "That works, but for \"even (going that far)\", use まで."]],
      }),
      s("借金して{まで}、車を買う必要はない。", "しゃっきんして{まで}、くるまをかうひつようはない。", "There's no need to go as far as borrowing money to buy a car.", {
        near: [["でも", "That's \"even if\". For \"going as far as\", use まで."]],
      }),
      s("子どもに{まで}笑われた。", "こどもに{まで}わらわれた。", "Even the children laughed at me.", {
        near: [["も", "That works, but まで is stronger: \"even\"."]],
      }),
      s("徹夜して{まで}、レポートを仕上げた。", "てつやして{まで}、レポートをしあげた。", "I went as far as staying up all night to finish the report.", {
        near: [["でも", "That's \"even if\". For \"going as far as\", use まで."]],
      }),
      s("雨だけでなく、雷{まで}鳴り出した。", "あめだけでなく、かみなり{まで}なりだした。", "Not only rain, but thunder too, on top of everything.", {
        near: [["も", "That works, but まで adds \"on top of everything\"."]],
      }),
    ],
  }),

  point({
    id: "n2-kurai-nara",
    title: "〜くらいなら",
    meaning: "rather than (do that), I'd sooner",
    structure: "Verb dictionary form + くらいなら / ぐらいなら",
    related: ["n3-kurai", "n4-nara"],
    explanation: `
**くらいなら** rejects an option as so bad that anything else would be better: あんな人と結婚するくらいなら、一生独身でいい, "I'd rather stay single forever than marry someone like that".

The first half is the unacceptable option; the second is the preferred alternative, often with ほうがいい, ほうがましだ, or a simple decision.

It's common in advice: 途中でやめるくらいなら、最初からやらないほうがいい, "if you're going to quit halfway, you'd better not start at all".

くらいなら and ぐらいなら are interchangeable. The くらい here downgrades the first option ("something as bad as that"), and なら makes it a condition.
`,
    sentences: [
      s("あんな人と結婚する{くらいなら}、一生独身でいい。", "あんなひととけっこんする{くらいなら}、いっしょうどくしんでいい。", "I'd rather stay single forever than marry someone like that.", {
        accept: ["ぐらいなら"],
        near: [["よりも", "That works, but for \"rather than do that, I'd sooner\", use くらいなら."]],
      }),
      s("途中でやめる{くらいなら}、最初からやらないほうがいい。", "とちゅうでやめる{くらいなら}、さいしょからやらないほうがいい。", "If you're going to quit halfway, you'd better not start at all.", {
        accept: ["ぐらいなら"],
        near: [["なら", "That's \"if\". For \"rather than (that)\", use くらいなら."]],
      }),
      s("人に頼む{くらいなら}、自分でやる。", "ひとにたのむ{くらいなら}、じぶんでやる。", "I'd rather do it myself than ask someone.", {
        accept: ["ぐらいなら"],
        near: [["よりも", "That works, but for \"rather than do that\", use くらいなら."]],
      }),
      s("満員電車に乗る{ぐらいなら}、歩いて行く。", "まんいんでんしゃにのる{ぐらいなら}、あるいていく。", "I'd rather walk than get on a packed train.", {
        accept: ["くらいなら"],
        near: [["なら", "That's \"if\". For \"rather than (that)\", use ぐらいなら."]],
      }),
      s("後悔する{くらいなら}、今やってみよう。", "こうかいする{くらいなら}、いまやってみよう。", "Rather than live with regrets, let's give it a try now.", {
        accept: ["ぐらいなら"],
        near: [["なら", "That's \"if\". For \"rather than\", use くらいなら."]],
      }),
    ],
  }),

  point({
    id: "n2-dake-no",
    title: "〜だけ(の)",
    meaning: "as much as (possible); enough to",
    structure: "Potential / たい / Verb + だけ · だけの + Noun",
    related: ["n5-dake", "n3-kagiri"],
    explanation: `
**だけ** also means "as much as", setting the limit by what's possible or wanted: やれるだけのことはやった, "I did everything I could". 持てるだけ持って帰っていいよ, "take home as much as you can carry".

It's common after potential verbs (できる, 持てる, 食べられる), after たい (言いたいだけ言う, "say as much as you want") and after 好きな (好きなだけ, "as much as you like").

**だけの** before a noun means "enough to": 歌手になるだけの才能がある, "she has enough talent to become a singer".

This is the same だけ as "only"; here it marks the full extent rather than a narrow limit.
`,
    sentences: [
      s("やれる{だけ}のことはやった。", "やれる{だけ}のことはやった。", "I did everything I could.", {
        near: [["ほど", "That's degree. For \"as much as possible\", use だけ."]],
      }),
      s("持てる{だけ}持って帰っていいよ。", "もてる{だけ}もってかえっていいよ。", "Take home as much as you can carry.", {
        near: [["ほど", "That's degree. For \"as much as you can\", use だけ."]],
      }),
      s("好きな{だけ}食べてください。", "すきな{だけ}たべてください。", "Eat as much as you like.", {
        near: [["ほど", "That's degree. For \"as much as you like\", use だけ."]],
      }),
      s("言いたい{だけ}言って、帰ってしまった。", "いいたい{だけ}いって、かえってしまった。", "He said everything he wanted to say, then left.", {
        near: [["ばかり", "ばかり is \"nothing but\". For \"as much as he wanted\", use だけ."]],
      }),
      s("彼女は歌手になる{だけの}才能がある。", "かのじょはかしゅになる{だけの}さいのうがある。", "She has enough talent to become a singer.", {
        near: [["ための", "That's \"for\". For \"enough to\", use だけの."]],
      }),
    ],
  }),

  point({
    id: "n2-kiri-ga-nai",
    title: "〜きりがない",
    meaning: "there's no end to it",
    structure: "ば-form / たら / と + きりがない",
    related: ["n3-kiri", "n2-ni-sugi-nai"],
    explanation: `
**きりがない** means something could go on forever: 心配すればきりがない, "if you start worrying, there's no end to it". きり is "limit" or "end", from 切る, so it's "there's no cut-off point".

It usually follows a conditional (ば, たら, と) describing something that could be repeated or listed without limit: complaining, worrying, listing wants, comparing yourself with others.

It's often used to justify stopping: 細かいことを言えばきりがないので、この辺で終わります, "I could go on about the details forever, so I'll stop here".

It's often written 切りがない, and in casual writing キリがない.
`,
    sentences: [
      s("心配すれば{きりがない}。", "しんぱいすれば{きりがない}。", "If you start worrying, there's no end to it.", {
        accept: ["切りがない", "キリがない"],
        near: [["しかない", "That's \"no choice but\". For \"no end to it\", use きりがない."]],
      }),
      s("文句を言い出したら{きりがない}。", "もんくをいいだしたら{きりがない}。", "Once you start complaining, there's no end to it.", {
        accept: ["切りがない", "キリがない"],
        near: [["ことはない", "That's \"no need\". For \"no end to it\", use きりがない."]],
      }),
      s("欲しい物を数えたら{きりがない}。", "ほしいものをかぞえたら{きりがない}。", "If I listed everything I wanted, I'd never stop.", {
        accept: ["切りがない", "キリがない"],
        near: [["しかない", "That's \"no choice but\". For \"no end to it\", use きりがない."]],
      }),
      s("上を見れば{きりがない}。", "うえをみれば{きりがない}。", "If you compare yourself with those above you, there's no end to it.", {
        accept: ["切りがない", "キリがない"],
        near: [["わけがない", "That's \"no way\". For \"no end to it\", use きりがない."]],
      }),
      s("細かいことを言えば{きりがない}ので、この辺で終わります。", "こまかいことをいえば{きりがない}ので、このへんでおわります。", "I could go on about the details forever, so I'll stop here.", {
        accept: ["切りがない", "キリがない"],
        near: [["しかない", "That's \"no choice but\". For \"no end to it\", use きりがない."]],
      }),
    ],
  }),
];
