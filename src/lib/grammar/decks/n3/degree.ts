import { point, s, word } from "../../build";

/** How much, how far, and what's singled out: degree, emphasis, limits and completeness. */

export const degree = [
  point({
    id: "n3-hodo",
    title: "〜ほど (extent)",
    meaning: "so … that, to the point of; about",
    structure: "Plain form + ほど · Number + ほど",
    related: ["n4-hodo-nai", "n3-kurai", "n3-ba-hodo"],
    explanation: `
**ほど** measures how far something goes by comparing it to an extreme: 泣きたいほど悲しかった, "I was so sad I wanted to cry". 死ぬほど疲れた, "I'm dead tired", is an everyday exaggeration.

The ほど part is the benchmark, often a verb in the plain form (or its negative): 立っていられないほど, "to the point I can't stand".

After a number, ほど means "about", a little more formal than ぐらい: 駅まで十分ほどかかります, "it takes about ten minutes to the station".

くらい and ぐらい can replace ほど in the "so … that" use. ほど is slightly more formal, and it's the one used for "not as … as" (N4) and "the more … the more".
`,
    sentences: [
      s("泣きたい{ほど}悲しかった。", "なきたい{ほど}かなしかった。", "I was so sad I wanted to cry.", {
        accept: ["くらい", "ぐらい"],
        near: [["まで", "まで is \"until\". For \"so … that\", use ほど."]],
      }),
      s("死ぬ{ほど}疲れた。", "しぬ{ほど}つかれた。", "I'm dead tired.", {
        accept: ["くらい", "ぐらい"],
        near: [["まで", "まで is \"until\". For \"so … that\", use ほど."]],
      }),
      s("数え切れない{ほど}星が見えた。", "かぞえきれない{ほど}ほしがみえた。", "There were more stars than I could count.", {
        accept: ["くらい", "ぐらい"],
        near: [["ように", "ように is \"like, as\". For degree, use ほど."]],
      }),
      s("駅まで十分{ほど}かかります。", "えきまでじゅっぷん{ほど}かかります。", "It takes about ten minutes to the station.", {
        accept: ["ぐらい", "くらい"],
        near: [["ごろ", "ごろ is for points in time. For an amount, use ほど or ぐらい."]],
      }),
      s("立っていられない{ほど}、足が痛い。", "たっていられない{ほど}、あしがいたい。", "My feet hurt so much I can't stand.", {
        accept: ["くらい", "ぐらい"],
        near: [["まで", "まで is \"until\". For \"so … that\", use ほど."]],
      }),
    ],
  }),

  point({
    id: "n3-kurai",
    title: "〜くらい・〜ぐらい (at least, to the extent)",
    meaning: "at least, even just; so … that; no one as … as",
    structure: "Noun / Plain form + くらい / ぐらい",
    related: ["n3-hodo", "n5-gurai"],
    explanation: `
At N5, ぐらい meant "about" with numbers. It has more uses.

**At least, even just**: it plays something down as the minimum: 自分の部屋ぐらい自分で掃除しなさい, "at least clean your own room yourself". 電話くらいしてくれてもいいのに, "you could at least have called". It's often a complaint.

**So … that**: like ほど, it gives the extent: 声が出ないくらい驚いた, "I was so surprised I couldn't speak".

**No one as … as**: 彼くらい日本語が上手な人はいない, "no one speaks Japanese as well as he does".

くらい and ぐらい are interchangeable. Some speakers prefer くらい after これ, それ, あれ and どれ.
`,
    sentences: [
      s("自分の部屋{ぐらい}自分で掃除しなさい。", "じぶんのへや{ぐらい}じぶんでそうじしなさい。", "At least clean your own room yourself.", {
        accept: ["くらい"],
        near: [["だけ", "だけ is \"only\". For \"at least this much\", use ぐらい."]],
      }),
      s("電話{くらい}してくれてもいいのに。", "でんわ{くらい}してくれてもいいのに。", "You could at least have called.", {
        accept: ["ぐらい"],
        near: [["しか", "しか needs a negative. For \"at least\", use くらい."]],
      }),
      s("ひらがな{ぐらい}読めるよ。", "ひらがな{ぐらい}よめるよ。", "I can at least read hiragana.", {
        accept: ["くらい"],
        near: [["だけ", "That's \"only hiragana\". For \"at least hiragana\", use ぐらい."]],
      }),
      s("声が出ない{くらい}驚いた。", "こえがでない{くらい}おどろいた。", "I was so surprised I couldn't speak.", {
        accept: ["ぐらい", "ほど"],
        near: [["まで", "まで is \"until\". For \"so … that\", use くらい."]],
      }),
      s("彼{くらい}日本語が上手な人はいない。", "かれ{くらい}にほんごがじょうずなひとはいない。", "No one speaks Japanese as well as he does.", {
        accept: ["ぐらい", "ほど"],
        near: [["より", "For \"no one as … as\", use くらい … はいない."]],
      }),
    ],
  }),

  point({
    id: "n3-ba-hodo",
    title: "〜ば〜ほど",
    meaning: "the more …, the more",
    structure: "ば-form + same word + ほど",
    related: ["n4-ba", "n3-hodo", "n3-ni-tsurete"],
    explanation: `
**ば〜ほど** says two things rise together: 考えれば考えるほど、わからなくなる, "the more I think about it, the less I understand".

Say the same word twice: first in the ば-form, then in the dictionary form with ほど. It works with verbs (使えば使うほど), い-adjectives (早ければ早いほどいい, "the sooner the better") and な-adjectives (静かなら静かなほど).

The first half is often dropped in speech, leaving just the ほど part: 練習するほど上手になる means the same as 練習すれば練習するほど.

It's close to につれて, but more about proportion than gradual change over time. Think of it as a sliding scale: turn one dial up and the other follows.
`,
    sentences: [
      s("考えれば{考えるほど}、わからなくなる。", "かんがえれば{かんがえるほど}、わからなくなる。", "The more I think about it, the less I understand.", {
        near: [["考えたほど", "The second verb is in the dictionary form: 考えるほど."]],
      }),
      s("日本語は{使えば}使うほど上手になる。", "にほんごは{つかえば}つかうほどじょうずになる。", "The more you use Japanese, the better you get.", {
        hint: "使う",
        conj: { word: word("使う", "つかう", "godan"), form: "ba" },
        near: [["使うと", "The pattern starts with the ば-form: 使えば使うほど."]],
      }),
      s("野菜は新しければ{新しいほど}おいしい。", "やさいはあたらしければ{あたらしいほど}おいしい。", "The fresher vegetables are, the better they taste.", {
        near: [["新しくて", "The second part is the plain form with ほど: 新しいほど."]],
      }),
      s("{早ければ}早いほどいい。", "{はやければ}はやいほどいい。", "The sooner, the better.", {
        near: [["早いと", "The pattern starts with the ば-form: 早ければ早いほど."]],
      }),
      s("この本は読めば{読むほど}面白くなる。", "このほんはよめば{よむほど}おもしろくなる。", "The more you read this book, the more interesting it gets.", {
        near: [["読んだほど", "The second verb is in the dictionary form: 読むほど."]],
      }),
    ],
  }),

  point({
    id: "n3-sae",
    title: "〜さえ・〜でさえ",
    meaning: "even",
    structure: "Noun + さえ / でさえ · Noun + に/と + さえ",
    related: ["n3-sae-ba", "n5-mo"],
    explanation: `
**さえ** means "even", picking out an extreme example to make a point: 忙しくて、ご飯を食べる時間さえない, "I'm so busy I don't even have time to eat". If even that is true, everything else surely is.

It usually replaces が and を. Other particles stay in front: 親友にさえ話していない, "I haven't told even my best friend".

**でさえ** is common with people: 子どもでさえ知っている, "even a child knows that".

It's stronger than も (時間もない) and more formal than でも. In writing, すら means the same. With a negative, it's often "not even", and with ば it becomes "as long as", which is the next point.
`,
    sentences: [
      s("忙しくて、ご飯を食べる時間{さえ}ない。", "いそがしくて、ごはんをたべるじかん{さえ}ない。", "I'm so busy I don't even have time to eat.", {
        accept: ["すら"],
        near: [["も", "That works, but さえ is stronger: \"not even\"."]],
      }),
      s("子ども{でさえ}知っている。", "こども{でさえ}しっている。", "Even a child knows that.", {
        accept: ["ですら"],
        near: [["でも", "That works too. This point practises でさえ."]],
      }),
      s("彼は自分の名前{さえ}書けなかった。", "かれはじぶんのなまえ{さえ}かけなかった。", "He couldn't even write his own name.", {
        accept: ["すら"],
        near: [["だけ", "だけ is \"only\". For \"not even\", use さえ."]],
      }),
      s("疲れて、立つこと{さえ}できない。", "つかれて、たつこと{さえ}できない。", "I'm so tired I can't even stand.", {
        accept: ["すら"],
        near: [["しか", "しか is \"only\". For \"not even\", use さえ."]],
      }),
      s("親友に{さえ}話していない秘密がある。", "しんゆうに{さえ}はなしていないひみつがある。", "I have a secret I haven't told even my best friend.", {
        accept: ["すら"],
        near: [["も", "にも works, but さえ is stronger: \"not even\"."]],
      }),
    ],
  }),

  point({
    id: "n3-sae-ba",
    title: "〜さえ〜ば",
    meaning: "as long as, if only",
    structure: "Noun + さえ + ば-form · Verb ます-stem + さえすれば",
    related: ["n3-sae", "n4-ba"],
    explanation: `
**さえ〜ば** says one condition is all it takes: お金さえあれば、何でも買える, "as long as you have money, you can buy anything".

The さえ marks the one thing that matters, and the verb or adjective after it goes into the ば-form: 時間さえあれば, "if only I had the time"; 天気さえよければ, "as long as the weather's good".

With a verb as the key condition, use the ます-stem + さえすれば: この薬を飲みさえすれば、治ります, "as long as you take this medicine, you'll get better". With a て-form, it's てさえいれば.

Depending on context, it's either reassurance ("all you need is…") or a wistful wish ("if only…").
`,
    sentences: [
      s("お金{さえ}あれば、何でも買える。", "おかね{さえ}あれば、なんでもかえる。", "As long as you have money, you can buy anything.", {
        near: [["だけ", "That's heard in speech, but the set pattern is さえ〜ば."]],
      }),
      s("時間{さえ}あれば、もっと旅行したい。", "じかん{さえ}あれば、もっとりょこうしたい。", "If only I had the time, I'd travel more.", {
        near: [["だけ", "That's heard in speech, but the set pattern is さえ〜ば."]],
      }),
      s("この薬を飲み{さえ}すれば、治ります。", "このくすりをのみ{さえ}すれば、なおります。", "As long as you take this medicine, you'll get better.", {
        near: [["だけ", "The set pattern with a verb is ます-stem + さえすれば."]],
      }),
      s("あなた{さえ}よければ、明日行きましょう。", "あなた{さえ}よければ、あしたいきましょう。", "As long as it's fine with you, let's go tomorrow.", {
        near: [["も", "That's \"also\". For \"as long as\", use さえ."]],
      }),
      s("天気{さえ}よければ、富士山が見えます。", "てんき{さえ}よければ、ふじさんがみえます。", "As long as the weather's good, you can see Mount Fuji.", {
        near: [["だけ", "That's heard in speech, but the set pattern is さえ〜ば."]],
      }),
    ],
  }),

  point({
    id: "n3-koso",
    title: "〜こそ",
    meaning: "precisely, this one (for sure)",
    structure: "Noun + こそ · 〜からこそ · こちらこそ",
    related: ["n3-sae", "n5-wa"],
    explanation: `
**こそ** puts strong emphasis on one thing: "this, and no other". 今年こそ、試験に合格したい, "this year, for sure, I want to pass the exam". It suggests previous years didn't work out.

The most common everyday use is **こちらこそ**, "no, thank you" or "the pleasure is mine", in reply to thanks or an apology.

**からこそ** stresses a reason: 失敗したからこそ、学べたことがある, "there are things I could learn precisely because I failed".

It's only for positive emphasis: you pick something out as the right one, the real one or the important one. こそ replaces は, が and を, and other particles go in front of it: 忙しい時にこそ.
`,
    sentences: [
      s("今年{こそ}、日本語能力試験に合格したい。", "ことし{こそ}、にほんごのうりょくしけんにごうかくしたい。", "This year, for sure, I want to pass the JLPT.", {
        near: [["は", "は just marks the topic. For \"this year for sure\", use こそ."]],
      }),
      s("「ありがとう。」「こちら{こそ}。」", "「ありがとう。」「こちら{こそ}。」", "\"Thank you.\" \"No, thank you.\"", {
        near: [["も", "こちらも is \"me too\". For \"no, thank you\", use こちらこそ."]],
      }),
      s("これ{こそ}私が探していた本だ。", "これ{こそ}わたしがさがしていたほんだ。", "This is exactly the book I was looking for.", {
        near: [["が", "That's fine, but こそ adds \"exactly this one\"."]],
      }),
      s("忙しい時{こそ}、休みが必要だ。", "いそがしいとき{こそ}、やすみがひつようだ。", "It's precisely when you're busy that you need a rest.", {
        near: [["は", "は just marks the topic. For \"precisely then\", use こそ."]],
      }),
      s("失敗したから{こそ}、学べたことがある。", "しっぱいしたから{こそ}、まなべたことがある。", "There are things I could learn precisely because I failed.", {
        near: [["でも", "でも is \"even\". For \"precisely because\", use からこそ."]],
      }),
    ],
  }),

  point({
    id: "n3-nanka-nante",
    title: "〜なんか・〜なんて",
    meaning: "things like (dismissive); (surprise) that",
    structure: "Noun + なんか / なんて · Plain form + なんて",
    register: "Casual. The formal equivalent is など.",
    related: ["n5-nado", "n3-sae"],
    explanation: `
**なんか** and **なんて** are casual versions of など, but they add attitude: they play something down, dismiss it or show surprise.

Playing down: 私なんか、まだまだです, "me? I've still got a long way to go". It's modest about yourself.

Dismissing: 宿題なんてやりたくない, "homework? I don't want to do it"; お化けなんかいない, "there's no such thing as ghosts". The speaker thinks little of the thing.

Surprise or disbelief, after a whole clause: 彼がそんなことを言うなんて、信じられない, "I can't believe he'd say that". Here only なんて works.

なんか also works as a filler meaning "like" or "kind of": なんか変だね, "it's kind of weird".
`,
    sentences: [
      s("私{なんか}、まだまだです。", "わたし{なんか}、まだまだです。", "Me? I've still got a long way to go.", {
        accept: ["なんて", "など"],
        near: [["は", "That's neutral. To play yourself down, use なんか."]],
      }),
      s("宿題{なんて}、やりたくない。", "しゅくだい{なんて}、やりたくない。", "Homework? I don't want to do it.", {
        accept: ["なんか"],
        near: [["を", "That's neutral. To show you dislike it, use なんて."]],
      }),
      s("彼がそんなことを言う{なんて}、信じられない。", "かれがそんなことをいう{なんて}、しんじられない。", "I can't believe he'd say something like that.", {
        near: [["なんか", "After a verb, surprise is expressed with なんて."]],
      }),
      s("お化け{なんか}いないよ。", "おばけ{なんか}いないよ。", "There's no such thing as ghosts.", {
        accept: ["なんて"],
        near: [["が", "That's neutral. To wave the idea away, use なんか."]],
      }),
      s("こんな所で会う{なんて}、びっくりした。", "こんなところであう{なんて}、びっくりした。", "Fancy meeting you here! What a surprise.", {
        near: [["なんか", "After a verb, surprise is expressed with なんて."]],
      }),
    ],
  }),

  point({
    id: "n3-dake-de-naku",
    title: "〜だけでなく",
    meaning: "not only … but also",
    structure: "Noun / Plain form + だけでなく … も (な-adj + な)",
    related: ["n5-dake", "n4-shi"],
    explanation: `
**だけでなく** means "not only": 彼は英語だけでなく、中国語も話せる, "he speaks not only English but Chinese too".

The second half usually has も, adding the extra item. It works after nouns, verbs and adjectives: 安いだけでなく、おいしい, "not just cheap, but good too". な-adjectives keep な: 上手なだけでなく.

In speech, it's often だけじゃなく; in writing, だけではなく. **ばかりでなく** is a more formal equivalent.

Don't drop the でなく part: だけ alone is "only", so 英語だけ話せる means the opposite, "he speaks only English".

It's a useful way to pile up good points when recommending something, and it's common in reviews, adverts and self-introductions.
`,
    sentences: [
      s("彼は英語{だけでなく}、中国語も話せる。", "かれはえいご{だけでなく}、ちゅうごくごもはなせる。", "He speaks not only English but Chinese too.", {
        accept: ["だけじゃなく", "だけではなく", "ばかりでなく"],
        near: [["だけ", "だけ alone is \"only\". For \"not only\", use だけでなく."]],
      }),
      s("この店は安い{だけでなく}、おいしい。", "このみせはやすい{だけでなく}、おいしい。", "This place isn't just cheap, it's good too.", {
        accept: ["だけじゃなく", "だけではなく", "ばかりでなく"],
        near: [["しか", "しか needs a negative. For \"not only\", use だけでなく."]],
      }),
      s("子ども{だけでなく}、大人も楽しめる映画だ。", "こども{だけでなく}、おとなもたのしめるえいがだ。", "It's a film that adults can enjoy, not only children.", {
        accept: ["だけじゃなく", "だけではなく", "ばかりでなく"],
        near: [["だけ", "だけ alone is \"only\". For \"not only\", use だけでなく."]],
      }),
      s("彼女は歌が上手な{だけでなく}、ダンスもできる。", "かのじょはうたがじょうずな{だけでなく}、ダンスもできる。", "She's not only a good singer, she can dance too.", {
        accept: ["だけじゃなく", "だけではなく", "ばかりでなく"],
        near: [["だけで", "だけで is \"just by\". For \"not only\", use だけでなく."]],
      }),
      s("日本{だけでなく}、世界中で人気がある。", "にほん{だけでなく}、せかいじゅうでにんきがある。", "It's popular not only in Japan but all over the world.", {
        accept: ["だけじゃなく", "だけではなく", "ばかりでなく"],
        near: [["だけ", "だけ alone is \"only\". For \"not only\", use だけでなく."]],
      }),
    ],
  }),

  point({
    id: "n3-igai",
    title: "〜以外",
    meaning: "except, other than",
    structure: "Noun + 以外 (は · に · の + Noun)",
    related: ["n5-shika-nai", "n5-dake"],
    explanation: `
**以外** means "except" or "other than": 日曜日以外は毎日働いている, "I work every day except Sunday".

It's flexible with particles: 以外は ("apart from"), 以外に ("besides"), and 以外の + noun ("other than"): 日本語以外の言語, "languages other than Japanese".

With a negative, it says "no one/nothing except": 彼以外、誰も知らない, "no one knows except him". This overlaps with しか〜ない (彼しか知らない), which is more common in speech.

On signs, 関係者以外立ち入り禁止 means "staff only", literally "no entry except for those concerned".

Don't confuse it with 意外, pronounced the same way, which means "unexpected": 意外と簡単だった, "it was surprisingly easy".
`,
    sentences: [
      s("日曜日{以外}は毎日働いている。", "にちようび{いがい}はまいにちはたらいている。", "I work every day except Sunday.", {
        near: [["だけ", "だけ is \"only\". For \"except\", use 以外."]],
      }),
      s("関係者{以外}、入らないでください。", "かんけいしゃ{いがい}、はいらないでください。", "Staff only beyond this point.", {
        near: [["だけ", "That would mean \"only staff, don't enter\". For \"except staff\", use 以外."]],
      }),
      s("肉{以外}なら、何でも食べられます。", "にく{いがい}なら、なんでもたべられます。", "I can eat anything except meat.", {
        near: [["しか", "しか needs a negative. For \"except\", use 以外."]],
      }),
      s("彼{以外}、誰も知らない。", "かれ{いがい}、だれもしらない。", "No one knows except him.", {
        near: [["しか", "彼しか知らない works too. This point practises 以外."]],
      }),
      s("日本語{以外}の言語も勉強したい。", "にほんご{いがい}のげんごもべんきょうしたい。", "I want to study languages other than Japanese too.", {
        near: [["より", "より is \"than\" in comparisons. For \"other than\", use 以外."]],
      }),
    ],
  }),

  point({
    id: "n3-shika-nai-verb",
    title: "〜しかない",
    meaning: "have no choice but to, all you can do is",
    structure: "Verb dictionary form + しかない",
    related: ["n5-shika-nai", "n5-nakereba-naranai"],
    explanation: `
At N5, しか〜ない was "only" with nouns. After a verb's dictionary form, **しかない** means "there's nothing to do but this": 電車が止まっているから、歩いて帰るしかない, "the trains aren't running, so I have no choice but to walk home".

It often comes with a sense of resignation or resolve: もう決まったことだから、やるしかない, "it's decided, so we just have to do it".

The polite form is しかありません. **ほかない** and **よりほかない** mean the same and are more formal.

Compare なければならない, which is obligation. しかない says the other options have run out.
`,
    sentences: [
      s("電車が止まっているから、歩いて帰る{しかない}。", "でんしゃがとまっているから、あるいてかえる{しかない}。", "The trains aren't running, so I have no choice but to walk home.", {
        accept: ["ほかない"],
        near: [["だけだ", "That's \"just\". For \"no choice but to\", use しかない."]],
      }),
      s("もう決まったことだから、やる{しかない}。", "もうきまったことだから、やる{しかない}。", "It's already decided, so we just have to do it.", {
        accept: ["ほかない"],
        near: [["ほうがいい", "That's advice. For \"no choice\", use しかない."]],
      }),
      s("誰も手伝ってくれないなら、自分でやる{しかありません}。", "だれもてつだってくれないなら、じぶんでやる{しかありません}。", "If nobody will help, I'll just have to do it myself.", {
        accept: ["ほかありません"],
        near: [["しかします", "しか needs a negative: しかありません."]],
      }),
      s("間に合わないなら、あきらめる{しかない}。", "まにあわないなら、あきらめる{しかない}。", "If we can't make it in time, we'll have to give up.", {
        accept: ["ほかない"],
        near: [["だけだ", "That's \"just\". For \"no choice but to\", use しかない."]],
      }),
      s("こうなったら、謝る{しかない}よ。", "こうなったら、あやまる{しかない}よ。", "Now that it's come to this, all you can do is apologise.", {
        accept: ["ほかない"],
        near: [["ほうがいい", "That's advice. For \"the only option left\", use しかない."]],
      }),
    ],
  }),

  point({
    id: "n3-darake",
    title: "〜だらけ",
    meaning: "covered in, full of (something unwanted)",
    structure: "Noun + だらけ (+ の Noun · + だ · + になる)",
    related: ["n4-bakari"],
    explanation: `
**だらけ** says something is covered in or full of something, usually something unwelcome: 泥だらけ, "covered in mud"; 間違いだらけ, "full of mistakes"; 傷だらけ, "covered in cuts".

It attaches directly to a noun and works like a noun itself: 泥だらけになる, "get covered in mud"; ゴミだらけの部屋, "a room full of rubbish".

The feeling is negative and a bit messy. For good things, use いっぱい: 花がいっぱい, "full of flowers". 花だらけ sounds odd, as if the flowers were a nuisance.

Compare ばかり, "nothing but", which is about what there is, not about something being covered or spoiled.
`,
    sentences: [
      s("子どもたちは泥{だらけ}になって遊んだ。", "こどもたちはどろ{だらけ}になってあそんだ。", "The children played until they were covered in mud.", {
        near: [["いっぱい", "That's neutral. For \"covered in\", and messy, use だらけ."]],
      }),
      s("この作文は間違い{だらけ}だ。", "このさくぶんはまちがい{だらけ}だ。", "This essay is full of mistakes.", {
        near: [["ばかり", "That works, but for \"riddled with\", use だらけ."]],
      }),
      s("部屋がゴミ{だらけ}で、足の踏み場もない。", "へやがゴミ{だらけ}で、あしのふみばもない。", "The room is so full of rubbish there's nowhere to step.", {
        near: [["ばかり", "That works, but for \"covered in\", use だらけ."]],
      }),
      s("彼の手は傷{だらけ}だった。", "かれのてはきず{だらけ}だった。", "His hands were covered in cuts.", {
        near: [["いっぱい", "That's neutral. For \"covered in\" something bad, use だらけ."]],
      }),
      s("借金{だらけ}の生活はもういやだ。", "しゃっきん{だらけ}のせいかつはもういやだ。", "I'm sick of living up to my ears in debt.", {
        near: [["だけ", "だけ is \"only\". For \"full of\", use だらけ."]],
      }),
    ],
  }),

  point({
    id: "n3-kiri",
    title: "〜きり・〜っきり",
    meaning: "only, just; since (and not again)",
    structure: "Noun / Number + きり · Verb た-form + きり",
    related: ["n5-dake", "n4-mama"],
    explanation: `
**きり** has two uses.

After a noun or number, it means "only, just": 二人きりで話したい, "I want to talk, just the two of us"; 一度きりの人生, "you only live once". In speech it's often っきり: これっきり, "only this"; それっきり, "and that was that".

After a た-form, it means something happened and then nothing further did: 彼とは去年会ったきり、連絡していない, "I met him last year, and haven't been in touch since". 出かけたきり帰ってこない, "went out and never came back".

The second half is usually negative. The feeling is that a situation got stuck, or ended without the expected follow-up.
`,
    sentences: [
      s("二人{きり}で話したい。", "ふたり{きり}ではなしたい。", "I want to talk, just the two of us.", {
        accept: ["っきり"],
        near: [["だけ", "That works, but 二人きり is the usual phrase for \"just the two of us\"."]],
      }),
      s("彼とは去年会った{きり}、連絡していない。", "かれとはきょねんあった{きり}、れんらくしていない。", "I met him last year, and I haven't been in touch since.", {
        near: [["から", "That's \"since\" as a starting point. きり adds \"and nothing since\"."]],
      }),
      s("息子は朝出かけた{きり}、まだ帰ってこない。", "むすこはあさでかけた{きり}、まだかえってこない。", "My son went out this morning and still hasn't come back.", {
        near: [["まま", "まま works too. This point practises きり."]],
      }),
      s("一度{きり}の人生だ。", "いちど{きり}のじんせいだ。", "You only live once.", {
        accept: ["っきり"],
        near: [["だけ", "That works, but 一度きり is the usual phrase for \"only once\"."]],
      }),
      s("お金はこれ{っきり}しかない。", "おかねはこれ{っきり}しかない。", "This is all the money I have.", {
        accept: ["きり", "だけ"],
        near: [["ほど", "ほど is degree. For \"only this\", use っきり."]],
      }),
    ],
  }),

  point({
    id: "n3-kiru",
    title: "〜切る・〜切れない",
    meaning: "do completely; can't (possibly) finish",
    structure: "Verb ます-stem + 切る / 切れる / 切れない",
    related: ["n4-hajimeru-owaru", "n4-te-shimau"],
    explanation: `
**切る** after a ます-stem means doing something completely, to the very end: 一晩で本を読み切った, "I read the whole book in one night". 切る means "cut", so the image is of cutting it off at the end.

The potential negative, **切れない**, means you can't finish it all, usually because there's too much: 一人では食べ切れない, "I can't eat all this on my own". 数え切れない, "countless", is a set phrase.

It also means "totally, utterly" with states: 疲れ切る, "be completely exhausted"; 分かり切ったこと, "something utterly obvious".

Compare 終わる, which only says an action ended. 切る says it was done fully, often with effort.
`,
    sentences: [
      s("一晩で本を{読み切った}。", "ひとばんでほんを{よみきった}。", "I read the whole book in a single night.", {
        hint: "読む, completely",
        conj: { word: word("読む", "よむ", "godan"), form: "polite", cut: "ます", tail: "切った" },
        near: [["読み終わった", "That works too. 読み切った stresses \"all the way through\"."]],
      }),
      s("こんなにたくさん、一人では{食べ切れない}。", "こんなにたくさん、ひとりでは{たべきれない}。", "I can't eat this much on my own.", {
        hint: "食べる, can't finish",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "polite", cut: "ます", tail: "切れない" },
        near: [["食べられない", "That's \"can't eat\". For \"can't finish\", use 食べ切れない."]],
      }),
      s("マラソンを最後まで{走り切った}。", "マラソンをさいごまで{はしりきった}。", "I ran the whole marathon, right to the end.", {
        hint: "走る, completely",
        conj: { word: word("走る", "はしる", "godan"), form: "polite", cut: "ます", tail: "切った" },
        near: [["走り終わった", "That works too. 走り切った stresses giving it everything to the end."]],
      }),
      s("夜空には{数え切れない}ほど星があった。", "よぞらには{かぞえきれない}ほどほしがあった。", "There were more stars in the night sky than anyone could count.", {
        hint: "数える, can't finish",
        conj: { word: word("数える", "かぞえる", "ichidan"), form: "polite", cut: "ます", tail: "切れない" },
        near: [["数えられない", "That works, but 数え切れない is the usual phrase for \"countless\"."]],
      }),
      s("{疲れ切って}、何もできない。", "{つかれきって}、なにもできない。", "I'm completely exhausted and can't do anything.", {
        hint: "疲れる, completely",
        conj: { word: word("疲れる", "つかれる", "ichidan"), form: "polite", cut: "ます", tail: "切って" },
        near: [["疲れて", "That's just \"tired\". For \"completely exhausted\", use 疲れ切って."]],
      }),
    ],
  }),

  point({
    id: "n3-kake",
    title: "〜かけ・〜かける",
    meaning: "half-done; start to, nearly",
    structure: "Verb ます-stem + かけ (の Noun) / かける",
    related: ["n3-kiru", "n4-hajimeru-owaru"],
    explanation: `
**かけ** after a ます-stem describes something started but not finished: 食べかけのパン, "a half-eaten piece of bread"; 読みかけの本, "a half-read book". It works like a noun and takes の before another noun.

As a verb, **かける** means "start to, be about to": 何か言いかけて、やめた, "he started to say something, then stopped". The action gets interrupted.

With verbs of change, かける means "nearly": 死にかけた, "nearly died"; 忘れかけていた, "had almost forgotten".

Compare 始める, a plain "start". かける implies the action didn't get far, or was cut off.
`,
    sentences: [
      s("テーブルの上に{食べかけ}のパンがある。", "テーブルのうえに{たべかけ}のパンがある。", "There's a half-eaten piece of bread on the table.", {
        hint: "食べる, half-done",
        conj: { word: word("食べる", "たべる", "ichidan"), form: "polite", cut: "ます", tail: "かけ" },
        near: [["食べた", "That's just \"eaten\". For \"half-eaten\", use 食べかけ."]],
      }),
      s("{読みかけ}の本がたくさんある。", "{よみかけ}のほんがたくさんある。", "I have lots of half-read books.", {
        hint: "読む, half-done",
        conj: { word: word("読む", "よむ", "godan"), form: "polite", cut: "ます", tail: "かけ" },
        near: [["読んだ", "That's \"read\". For \"half-read\", use 読みかけ."]],
      }),
      s("何か{言いかけて}、彼はやめた。", "なにか{いいかけて}、かれはやめた。", "He started to say something, then stopped.", {
        hint: "言う, start to",
        conj: { word: word("言う", "いう", "godan"), form: "polite", cut: "ます", tail: "かけて" },
        near: [["言って", "That's \"said\". For \"started to say\", use 言いかけて."]],
      }),
      s("手紙を{書きかけた}とき、電話が鳴った。", "てがみを{かきかけた}とき、でんわがなった。", "Just as I'd started writing the letter, the phone rang.", {
        hint: "書く, start to",
        conj: { word: word("書く", "かく", "godan"), form: "polite", cut: "ます", tail: "かけた" },
        near: [["書き始めた", "That works too. かけた stresses the action being cut off."]],
      }),
      s("事故で{死にかけた}ことがある。", "じこで{しにかけた}ことがある。", "I once nearly died in an accident.", {
        hint: "死ぬ, nearly",
        conj: { word: word("死ぬ", "しぬ", "godan"), form: "polite", cut: "ます", tail: "かけた" },
        near: [["死んだ", "That's \"died\". For \"nearly died\", use 死にかけた."]],
      }),
    ],
  }),

  point({
    id: "n3-ppanashi",
    title: "〜っぱなし",
    meaning: "left on, left as is (carelessly); nonstop",
    structure: "Verb ます-stem + っぱなし",
    related: ["n4-mama", "n4-te-oku"],
    explanation: `
**っぱなし** means something was started or done and then left that way, when it shouldn't have been: 電気をつけっぱなしで寝てしまった, "I fell asleep with the light left on". 水を出しっぱなしにしないで, "don't leave the water running".

It carries a note of carelessness or complaint, unlike たまま, which is neutral, and ておく, which is deliberate.

It also describes doing something nonstop, usually tiringly: 一日中立ちっぱなしだった, "I was on my feet all day"; 負けっぱなし, "losing every time".

It works like a noun: っぱなしにする, っぱなしだ, っぱなしで. You'll hear it most from parents and flatmates complaining about lights, taps and doors.
`,
    sentences: [
      s("電気を{つけっぱなし}で寝てしまった。", "でんきを{つけっぱなし}でねてしまった。", "I fell asleep with the light left on.", {
        hint: "つける, left",
        conj: { word: word("つける", "つける", "ichidan"), form: "polite", cut: "ます", tail: "っぱなし" },
        near: [["つけたまま", "That works too. っぱなし adds \"carelessly left\"."]],
      }),
      s("水を{出しっぱなし}にしないで。", "みずを{だしっぱなし}にしないで。", "Don't leave the water running.", {
        hint: "出す, left",
        conj: { word: word("出す", "だす", "godan"), form: "polite", cut: "ます", tail: "っぱなし" },
        near: [["出したまま", "That works too. っぱなし adds \"carelessly left\"."]],
      }),
      s("窓を{開けっぱなし}にして出かけた。", "まどを{あけっぱなし}にしてでかけた。", "I went out and left the window open.", {
        hint: "開ける, left",
        conj: { word: word("開ける", "あける", "ichidan"), form: "polite", cut: "ます", tail: "っぱなし" },
        near: [["開けておいて", "That's \"on purpose, in advance\". For carelessly left open, use 開けっぱなし."]],
      }),
      s("今日は一日中{立ちっぱなし}だった。", "きょうはいちにちじゅう{たちっぱなし}だった。", "I was on my feet all day today.", {
        hint: "立つ, nonstop",
        conj: { word: word("立つ", "たつ", "godan"), form: "polite", cut: "ます", tail: "っぱなし" },
        near: [["立っていた", "That's \"was standing\". For \"on my feet the whole time\", use 立ちっぱなし."]],
      }),
      s("服を{脱ぎっぱなし}にしないで。", "ふくを{ぬぎっぱなし}にしないで。", "Don't leave your clothes lying where you took them off.", {
        hint: "脱ぐ, left",
        conj: { word: word("脱ぐ", "ぬぐ", "godan"), form: "polite", cut: "ます", tail: "っぱなし" },
        near: [["脱いだまま", "That works too. っぱなし adds \"carelessly left\"."]],
      }),
    ],
  }),
];
