import { point, s, word } from "../../build";

/** Although, despite, even if it's pointless, if only, unless, and not caring. */

export const concession = [
  point({
    id: "n2-mono-no",
    title: "〜ものの",
    meaning: "although, but",
    structure: "Plain form + ものの (な-adj + な / である)",
    related: ["n4-noni", "n2-to-wa-ie"],
    explanation: `
**ものの** admits the first part is true, then adds that the expected result didn't follow: 日本に来たものの、まだ一度も富士山を見ていない, "I've come to Japan, but I still haven't seen Mount Fuji".

It's a formal, written "although", often with a sense of things falling short: buying something and never using it, taking medicine and not getting better, understanding something but not being able to do it.

It follows a plain form, most often a past one. な-adjectives take な or である.

It's calmer than のに, which complains, and more formal than けど. Don't confuse it with もので ("because") or ものなら ("if only").
`,
    sentences: [
      s("日本に来た{ものの}、まだ一度も富士山を見ていない。", "にほんにきた{ものの}、まだいちどもふじさんをみていない。", "I've come to Japan, but I still haven't seen Mount Fuji even once.", {
        near: [["もので", "もので is \"because\". For \"although\", use ものの."]],
      }),
      s("薬を飲んだ{ものの}、全然よくならない。", "くすりをのんだ{ものの}、ぜんぜんよくならない。", "I took the medicine, but I'm not getting any better.", {
        near: [["ので", "That's \"because\". For \"although\", use ものの."]],
      }),
      s("買った{ものの}、一度も使っていない。", "かった{ものの}、いちどもつかっていない。", "I bought it, but I haven't used it once.", {
        near: [["もので", "もので is \"because\". For \"although\", use ものの."]],
      }),
      s("頭ではわかっている{ものの}、なかなか実行できない。", "あたまではわかっている{ものの}、なかなかじっこうできない。", "I understand it in my head, but I just can't put it into practice.", {
        near: [["ものなら", "That's \"if only I could\". For \"although\", use ものの."]],
      }),
      s("約束はした{ものの}、行きたくない。", "やくそくはした{ものの}、いきたくない。", "I did promise, but I don't want to go.", {
        near: [["もので", "もので is \"because\". For \"although\", use ものの."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-mo-kakawarazu",
    title: "〜にもかかわらず",
    meaning: "despite, even though",
    structure: "Noun / Plain form + にもかかわらず (な-adj, Noun + である)",
    related: ["n2-ni-kakawarazu", "n4-noni"],
    explanation: `
**にもかかわらず** means "despite": 雨にもかかわらず、多くの人が集まった, "despite the rain, lots of people turned up".

The first half is a fact that you'd expect to prevent the second, but it didn't. It's the formal, written equivalent of のに, without のに's note of complaint, so it's also used for gratitude: 忙しいにもかかわらず、手伝ってくれてありがとう.

It follows nouns directly, and plain forms of verbs and adjectives; な-adjectives and nouns can take である.

The も is essential: without it, にかかわらず means "regardless of". At the start of a sentence, それにもかかわらず means "nevertheless".
`,
    sentences: [
      s("雨{にもかかわらず}、多くの人が集まった。", "あめ{にもかかわらず}、おおくのひとがあつまった。", "Despite the rain, lots of people turned up.", {
        accept: ["にも関わらず"],
        near: [["にかかわらず", "Without も, it's \"regardless of\". For \"despite\", use にもかかわらず."]],
      }),
      s("一生懸命勉強した{にもかかわらず}、不合格だった。", "いっしょうけんめいべんきょうした{にもかかわらず}、ふごうかくだった。", "Despite studying really hard, I failed.", {
        accept: ["にも関わらず"],
        near: [["にかかわらず", "Without も, it's \"regardless of\". For \"despite\", use にもかかわらず."]],
      }),
      s("注意された{にもかかわらず}、彼はまた遅刻した。", "ちゅういされた{にもかかわらず}、かれはまたちこくした。", "Despite being warned, he was late again.", {
        accept: ["にも関わらず"],
        near: [["のに", "That works in speech. In writing, use にもかかわらず."]],
      }),
      s("忙しい{にもかかわらず}、手伝ってくれてありがとう。", "いそがしい{にもかかわらず}、てつだってくれてありがとう。", "Thank you for helping, even though you're so busy.", {
        accept: ["にも関わらず"],
        near: [["にかかわらず", "Without も, it's \"regardless of\". For \"even though\", use にもかかわらず."]],
      }),
      s("休日である{にもかかわらず}、会社に行った。", "きゅうじつである{にもかかわらず}、かいしゃにいった。", "Even though it was a holiday, I went to work.", {
        accept: ["にも関わらず"],
        near: [["のに", "That works in speech. In writing, use にもかかわらず."]],
      }),
    ],
  }),

  point({
    id: "n2-to-wa-ie",
    title: "〜とはいえ",
    meaning: "that said, even though, it's true … but",
    structure: "Plain form / Noun + とはいえ · Sentence。とはいえ、…",
    related: ["n3-to-ittemo", "n2-mono-no", "n1-to-iedomo", "n1-to-wa-iu-mono-no"],
    explanation: `
**とはいえ** grants a point, then qualifies it: 春とはいえ、まだ寒い, "it may be spring, but it's still cold". The first half is true, but it doesn't lead where you'd expect.

It follows nouns and plain forms directly; nouns and な-adjectives don't need だ: 仕事とはいえ, 冗談だったとはいえ.

At the start of a sentence, とはいえ means "that said, even so": 練習した。とはいえ、まだ自信はない, "I've practised. That said, I'm still not confident".

It's a more formal relative of といっても (N3). とはいうものの means the same and is a little more literary.
`,
    sentences: [
      s("春{とはいえ}、まだ寒い。", "はる{とはいえ}、まださむい。", "It may be spring, but it's still cold.", {
        accept: ["とはいっても"],
        near: [["というより", "That's \"rather than\". For \"it may be … but\", use とはいえ."]],
      }),
      s("安い{とはいえ}、必要ない物は買わない。", "やすい{とはいえ}、ひつようないものはかわない。", "It may be cheap, but I don't buy things I don't need.", {
        accept: ["とはいっても"],
        near: [["というより", "That's \"rather than\". For \"it may be … but\", use とはいえ."]],
      }),
      s("冗談だった{とはいえ}、言いすぎた。", "じょうだんだった{とはいえ}、いいすぎた。", "It was only a joke, but I went too far.", {
        accept: ["とはいっても"],
        near: [["として", "として is \"as\". For \"even though\", use とはいえ."]],
      }),
      s("仕事{とはいえ}、休日に働くのはつらい。", "しごと{とはいえ}、きゅうじつにはたらくのはつらい。", "It's my job, I know, but working on a day off is hard.", {
        accept: ["とはいっても"],
        near: [["として", "として is \"as\". For \"it's true … but\", use とはいえ."]],
      }),
      s("練習した。{とはいえ}、まだ自信はない。", "れんしゅうした。{とはいえ}、まだじしんはない。", "I've practised. That said, I'm still not confident.", {
        accept: ["とはいっても", "とはいうものの"],
        near: [["ところで", "ところで changes the subject. For \"that said\", use とはいえ."]],
      }),
    ],
  }),

  point({
    id: "n2-ni-shiro",
    title: "〜にしろ・〜にせよ",
    meaning: "whether … or; even if; whatever",
    structure: "Noun / Plain form + にしろ / にせよ · A にしろ B にしろ",
    related: ["n3-ni-shitemo", "n3-to-shitemo", "n1-de-are"],
    explanation: `
**にしろ** and **にせよ** are formal versions of にしても (N3). They grant a point, then say it doesn't change the conclusion: 冗談にせよ、言っていいことと悪いことがある, "even as a joke, there are things you shouldn't say".

Doubled, they mean "whether … or": 行くにしろ行かないにしろ、連絡してください, "whether you go or not, let me know"; 肉にしろ魚にしろ, "whether it's meat or fish".

With question words, they mean "whatever": 理由は何にしろ, "whatever the reason".

The set phrase **いずれにせよ** means "either way, in any case", and is common in business and news. にしろ comes from the imperative of する, and にせよ from its written form.
`,
    sentences: [
      s("行くにしろ行かない{にしろ}、連絡してください。", "いくにしろいかない{にしろ}、れんらくしてください。", "Whether you go or not, let me know.", {
        accept: ["にせよ", "にしても"],
        near: [["として", "The pair is にしろ … にしろ."]],
      }),
      s("冗談{にせよ}、言っていいことと悪いことがある。", "じょうだん{にせよ}、いっていいこととわるいことがある。", "Even as a joke, there are things you shouldn't say.", {
        accept: ["にしろ", "にしても"],
        near: [["にしては", "にしては is \"considering\". For \"even if it's\", use にせよ."]],
      }),
      s("理由は何{にしろ}、遅刻はよくない。", "りゆうはなん{にしろ}、ちこくはよくない。", "Whatever the reason, being late isn't good.", {
        accept: ["にせよ", "にしても"],
        near: [["にしては", "にしては is \"considering\". For \"whatever\", use にしろ."]],
      }),
      s("いずれ{にせよ}、明日までに決めなければならない。", "いずれ{にせよ}、あしたまでにきめなければならない。", "Either way, we have to decide by tomorrow.", {
        accept: ["にしろ", "にしても"],
        near: [["として", "The set phrase is いずれにせよ."]],
      }),
      s("肉{にしろ}魚にしろ、新鮮なものがいい。", "にく{にしろ}さかなにしろ、しんせんなものがいい。", "Whether it's meat or fish, fresh is best.", {
        accept: ["にせよ", "にしても"],
        near: [["とか", "とか lists examples. For \"whether … or\", use にしろ."]],
      }),
    ],
  }),

  point({
    id: "n2-ta-tokoro-de",
    title: "〜たところで",
    meaning: "even if (it'd be pointless)",
    structure: "Verb た-form + ところで",
    related: ["n3-to-shitemo", "n3-ta-tokoro", "n1-to-shita-tokoro-de"],
    explanation: `
**たところで** means "even if you did", with the strong implication that it wouldn't help: 今から急いだところで、間に合わない, "even if we hurry now, we won't make it".

The second half is negative or pessimistic: it won't change, won't help, is too late, is only a small amount. It's often paired with いくら or どんなに: いくら説明したところで、彼にはわからない.

It always follows a た-form, even for the future. That's what distinguishes it from たところ (N3), "when I did (and found)", which is about something that actually happened.

It can also downplay an amount: 失敗したところで、大した損はない, "even if it fails, it's no big loss".
`,
    sentences: [
      s("今から急いだ{ところで}、間に合わない。", "いまからいそいだ{ところで}、まにあわない。", "Even if we hurry now, we won't make it.", {
        accept: ["としても"],
        near: [["ところ", "たところ alone is \"when I did\". For \"even if (it's pointless)\", use たところで."]],
      }),
      s("謝った{ところで}、許してもらえないだろう。", "あやまった{ところで}、ゆるしてもらえないだろう。", "Even if I apologise, they probably won't forgive me.", {
        accept: ["としても"],
        near: [["ところ", "たところ alone is \"when I did\". For \"even if\", use たところで."]],
      }),
      s("いくら説明した{ところで}、彼にはわからない。", "いくらせつめいした{ところで}、かれにはわからない。", "No matter how much I explain, he won't understand.", {
        accept: ["としても"],
        near: [["ところに", "ところに is \"just when\". For \"even if\", use たところで."]],
      }),
      s("心配した{ところで}、何も変わらない。", "しんぱいした{ところで}、なにもかわらない。", "Worrying won't change anything.", {
        accept: ["としても"],
        near: [["ところ", "たところ alone is \"when I did\". For \"even if\", use たところで."]],
      }),
      s("今さら後悔した{ところで}、もう遅い。", "いまさらこうかいした{ところで}、もうおそい。", "It's too late for regrets now.", {
        accept: ["としても"],
        near: [["ところに", "ところに is \"just when\". For \"even if\", use たところで."]],
      }),
    ],
  }),

  point({
    id: "n2-mono-nara",
    title: "〜ものなら",
    meaning: "if (I) could (but it's unlikely)",
    structure: "Potential verb + ものなら",
    related: ["n2-you-mono-nara", "n4-nara"],
    explanation: `
**ものなら** after a potential verb expresses a wish for something unlikely or impossible: できるものなら、もう一度学生に戻りたい, "if only I could, I'd go back to being a student".

The second half is a wish (たい, てみたい) or a request. The speaker suspects it can't really happen, so there's a wistful, longing tone.

As a challenge, it's provocative: やれるものなら、やってみろ, "go on, try it if you think you can". The speaker doubts the other person can.

Don't confuse it with ものの ("although") or もので ("because"). The volitional version, ようものなら, is the next point and has a very different meaning.
`,
    sentences: [
      s("できる{ものなら}、もう一度学生に戻りたい。", "できる{ものなら}、もういちどがくせいにもどりたい。", "If only I could, I'd go back to being a student.", {
        near: [["もので", "もので is \"because\". For \"if only I could\", use ものなら."]],
      }),
      s("行ける{ものなら}、月に行ってみたい。", "いける{ものなら}、つきにいってみたい。", "If it were possible, I'd love to go to the moon.", {
        near: [["もので", "もので is \"because\". For \"if it were possible\", use ものなら."]],
      }),
      s("やれる{ものなら}、やってみろ。", "やれる{ものなら}、やってみろ。", "Go on, try it if you think you can.", {
        near: [["ものの", "ものの is \"although\". For \"if you think you can\", use ものなら."]],
      }),
      s("戻れる{ものなら}、あの日に戻りたい。", "もどれる{ものなら}、あのひにもどりたい。", "If I could go back, I'd return to that day.", {
        near: [["もので", "もので is \"because\". For \"if only I could\", use ものなら."]],
      }),
      s("休める{ものなら}、一週間ぐらい休みたい。", "やすめる{ものなら}、いっしゅうかんぐらいやすみたい。", "If I could take time off, I'd take about a week.", {
        near: [["ものの", "ものの is \"although\". For \"if only I could\", use ものなら."]],
      }),
    ],
  }),

  point({
    id: "n2-you-mono-nara",
    title: "〜ようものなら",
    meaning: "if (you dared to), then (disaster)",
    structure: "Verb volitional form + ものなら",
    related: ["n2-mono-nara", "n4-volitional"],
    explanation: `
**ようものなら** says that if someone did something, even a little, the result would be terrible: 少しでも遅れようものなら、部長に叱られる, "if I'm even a little late, the manager tells me off".

It uses the volitional form (遅れよう, 話そう, 転ぼう) plus ものなら. The first half is a small or ordinary action; the second is an exaggerated bad consequence.

It's often used to describe strict people or dangerous situations, with a slightly humorous, exasperated tone: 母に口答えしようものなら、ひどく怒られる, "if I ever talk back to my mother, I get a real telling-off".

Compare ものなら after a potential verb, which is a wistful wish. With the volitional, it's a warning.
`,
    sentences: [
      s("母に{口答えしようものなら}、ひどく怒られる。", "ははに{くちごたえしようものなら}、ひどくおこられる。", "If I ever talk back to my mother, I get a real telling-off.", {
        hint: "口答えする",
        conj: { word: word("口答えする", "くちごたえする", "irregular"), form: "volitional", tail: "ものなら" },
        near: [["口答えしたら", "That's a plain \"if\". For \"if you dared to\", use 口答えしようものなら."]],
      }),
      s("少しでも{遅れようものなら}、部長に叱られる。", "すこしでも{おくれようものなら}、ぶちょうにしかられる。", "If I'm even a little late, the manager tells me off.", {
        hint: "遅れる",
        conj: { word: word("遅れる", "おくれる", "ichidan"), form: "volitional", tail: "ものなら" },
        near: [["遅れたら", "That's a plain \"if\". For \"if you so much as\", use 遅れようものなら."]],
      }),
      s("彼に秘密を{話そうものなら}、すぐにみんなに広まる。", "かれにひみつを{はなそうものなら}、すぐにみんなにひろまる。", "If you ever tell him a secret, everyone will know in no time.", {
        hint: "話す",
        conj: { word: word("話す", "はなす", "godan"), form: "volitional", tail: "ものなら" },
        near: [["話したら", "That's a plain \"if\". For \"if you dared to\", use 話そうものなら."]],
      }),
      s("こんな所で{転ぼうものなら}、大けがをする。", "こんなところで{ころぼうものなら}、おおけがをする。", "If you fell somewhere like this, you'd be badly hurt.", {
        hint: "転ぶ",
        conj: { word: word("転ぶ", "ころぶ", "godan"), form: "volitional", tail: "ものなら" },
        near: [["転んだら", "That's a plain \"if\". For \"if you so much as\", use 転ぼうものなら."]],
      }),
      s("試験に{落ちようものなら}、親に何を言われるか。", "しけんに{おちようものなら}、おやになにをいわれるか。", "If I failed the exam, I dread to think what my parents would say.", {
        hint: "落ちる",
        conj: { word: word("落ちる", "おちる", "ichidan"), form: "volitional", tail: "ものなら" },
        near: [["落ちたら", "That's a plain \"if\". For \"if I dared to\", use 落ちようものなら."]],
      }),
    ],
  }),

  point({
    id: "n2-nai-koto-ni-wa",
    title: "〜ないことには",
    meaning: "unless, until (you) … (nothing can happen)",
    structure: "Verb ない-form + ことには + negative",
    related: ["n3-te-kara-de-nai-to", "n3-kagiri"],
    explanation: `
**ないことには** sets a necessary condition: without it, nothing can move forward. 実際に見ないことには、何とも言えない, "I can't say anything until I've actually seen it".

The second half is always negative or impossible: わからない, 始められない, 何もできない, 何とも言えない.

It's close to てからでないと (N3), but broader: it doesn't have to be a sequence. お金がないことには、何もできない, "without money, you can't do anything".

Don't confuse it with ないうちに ("before") or ことに ("to my surprise"). The ことには here marks "as for the case of not doing". It's common when someone presses you for an answer you can't give yet.
`,
    sentences: [
      s("実際に見ない{ことには}、何とも言えない。", "じっさいにみない{ことには}、なんともいえない。", "I can't say anything until I've actually seen it.", {
        near: [["ことに", "ことに alone is \"to my surprise\". For \"unless\", use ないことには."]],
      }),
      s("社長が来ない{ことには}、会議を始められない。", "しゃちょうがこない{ことには}、かいぎをはじめられない。", "We can't start the meeting until the president arrives.", {
        near: [["うちに", "ないうちに is \"before\". For \"unless\", use ないことには."]],
      }),
      s("やってみない{ことには}、わからない。", "やってみない{ことには}、わからない。", "You won't know unless you try.", {
        near: [["ことに", "ことに alone is \"to my surprise\". For \"unless\", use ないことには."]],
      }),
      s("お金がない{ことには}、何もできない。", "おかねがない{ことには}、なにもできない。", "Without money, you can't do anything.", {
        near: [["うちに", "ないうちに is \"before\". For \"without\", use ないことには."]],
      }),
      s("本人に聞かない{ことには}、本当のことはわからない。", "ほんにんにきかない{ことには}、ほんとうのことはわからない。", "We won't know the truth unless we ask them directly.", {
        near: [["ことから", "ことから is \"from the fact that\". For \"unless\", use ないことには."]],
      }),
    ],
  }),

  point({
    id: "n2-nuki-de",
    title: "〜抜きで・〜抜きには",
    meaning: "without, leaving out",
    structure: "Noun + 抜きで / 抜きに / 抜きの · 抜きには + negative",
    related: ["n4-zu-ni", "n1-naku-shite"],
    explanation: `
**抜きで** means leaving out something that would normally be included: 朝ご飯抜きで学校に行った, "I went to school without breakfast". 抜く means "to pull out".

At a restaurant, it's how you ask to leave out an ingredient: わさび抜きでお願いします, "no wasabi, please".

The set phrase **冗談抜きで** means "joking aside, seriously".

**抜きには** with a negative stresses that something is essential: 彼抜きには、この計画は成功しなかった, "this plan wouldn't have succeeded without him". 堅い話は抜きにして means "let's skip the serious talk".

It's close to なしで, but 抜き suggests removing something that's usually there.
`,
    sentences: [
      s("朝ご飯{抜きで}、学校に行った。", "あさごはん{ぬきで}、がっこうにいった。", "I went to school without breakfast.", {
        accept: ["抜きに"],
        near: [["なしで", "That works too. 抜きで suggests leaving out something usual."]],
      }),
      s("冗談{抜きで}、本当に困っているんです。", "じょうだん{ぬきで}、ほんとうにこまっているんです。", "Joking aside, I'm really in trouble.", {
        accept: ["抜きに"],
        near: [["はともかく", "That works too. The set phrase is 冗談抜きで."]],
      }),
      s("わさび{抜き}でお願いします。", "わさび{ぬき}でおねがいします。", "No wasabi, please.", {
        near: [["なし", "That works too. At a sushi counter, 抜き is the usual word."]],
      }),
      s("彼{抜きには}、この計画は成功しなかった。", "かれ{ぬきには}、このけいかくはせいこうしなかった。", "This plan wouldn't have succeeded without him.", {
        accept: ["抜きでは"],
        near: [["なしで", "That's a plain \"without\". For \"it couldn't have been done without\", use 抜きには."]],
      }),
      s("堅い話は{抜きに}して、楽しみましょう。", "かたいはなしは{ぬきに}して、たのしみましょう。", "Let's skip the serious talk and just have fun.", {
        near: [["なし", "The set phrase is 抜きにして."]],
      }),
    ],
  }),

  point({
    id: "n2-te-demo",
    title: "〜てでも",
    meaning: "even if it means (doing)",
    structure: "Verb て-form + でも",
    related: ["n4-temo", "n2-made"],
    explanation: `
**てでも** expresses strong determination: the speaker is willing to do something drastic to achieve a goal. 借金をしてでも、この家を買いたい, "I want to buy this house, even if it means borrowing money".

The first half is a sacrifice or an extreme measure (borrowing, staying up all night, taking time off, queuing). The second is the goal: たい, つもりだ, or a firm statement.

It's the て-form plus でも. With verbs whose て-form ends in で, it becomes ででも: 休んででも, 並んででも.

Compare ても ("even if"), which is neutral. てでも says "I'm prepared to go that far". 何をしてでも means "whatever it takes".
`,
    sentences: [
      s("借金をし{てでも}、この家を買いたい。", "しゃっきんをし{てでも}、このいえをかいたい。", "I want to buy this house, even if it means borrowing money.", {
        near: [["ても", "ても is \"even if\". For \"even if it means doing\", use てでも."]],
      }),
      s("徹夜し{てでも}、明日までに終わらせる。", "てつやし{てでも}、あしたまでにおわらせる。", "I'll finish it by tomorrow, even if I have to stay up all night.", {
        near: [["ても", "ても is \"even if\". For \"even if it means doing\", use てでも."]],
      }),
      s("何をし{てでも}、夢をかなえたい。", "なにをし{てでも}、ゆめをかなえたい。", "I want to make my dream come true, whatever it takes.", {
        near: [["ても", "ても is \"even if\". For \"whatever it takes\", use てでも."]],
      }),
      s("仕事を休ん{ででも}、子どもの試合を見に行く。", "しごとをやすん{ででも}、こどものしあいをみにいく。", "I'll go and watch my child's match, even if it means taking time off work.", {
        near: [["でも", "That's \"even if\". For \"even if it means\", use ででも."]],
      }),
      s("並ん{ででも}、あの店のラーメンが食べたい。", "ならん{ででも}、あのみせのラーメンがたべたい。", "I want to eat that shop's ramen, even if I have to queue.", {
        near: [["でも", "That's \"even if\". For \"even if it means\", use ででも."]],
      }),
    ],
  }),

  point({
    id: "n2-mo-kamawazu",
    title: "〜も構わず",
    meaning: "without caring about, heedless of",
    structure: "Noun / Plain form + の + も構わず",
    related: ["n2-wo-towazu", "n4-temo-kamawanai", "n1-wo-yoso-ni"],
    explanation: `
**も構わず** means doing something without caring about something that would normally hold you back: 人目も構わず、泣き出した, "she burst into tears, not caring who saw".

It comes from 構う, "to mind" (N4 ても構わない). The first half is something people usually worry about: others' eyes, getting dirty, getting wet, bothering people, the time of day.

After a verb, add の: 服が汚れるのも構わず, "not caring that their clothes got dirty".

The tone is often critical of other people's behaviour, or describes a strong emotion overriding normal restraint. Compare を問わず, "regardless of (a category)", which is neutral.
`,
    sentences: [
      s("人目{も構わず}、泣き出した。", "ひとめ{もかまわず}、なきだした。", "She burst into tears, not caring who saw.", {
        near: [["を問わず", "を問わず is \"regardless of\" a category. For \"not caring about\", use も構わず."]],
      }),
      s("服が汚れるの{も構わず}、子どもたちは遊んだ。", "ふくがよごれるの{もかまわず}、こどもたちはあそんだ。", "The children played, not caring that their clothes got dirty.", {
        near: [["を問わず", "を問わず is \"regardless of\" a category. For \"not caring about\", use も構わず."]],
      }),
      s("雨にぬれるの{も構わず}、走って行った。", "あめにぬれるの{もかまわず}、はしっていった。", "They ran off without caring about getting soaked.", {
        near: [["にもかかわらず", "That's \"despite\". For \"not caring about\", use も構わず."]],
      }),
      s("周りの迷惑{も構わず}、大声で話している。", "まわりのめいわく{もかまわず}、おおごえではなしている。", "They're talking loudly without caring whether they bother anyone.", {
        near: [["を問わず", "を問わず is \"regardless of\" a category. For \"not caring about\", use も構わず."]],
      }),
      s("夜中{も構わず}、電話をかけてくる。", "よなか{もかまわず}、でんわをかけてくる。", "They call me even in the middle of the night, not caring what time it is.", {
        near: [["にもかかわらず", "That's \"despite\". For \"not caring about\", use も構わず."]],
      }),
    ],
  }),

  point({
    id: "n2-you-de-wa",
    title: "〜ようでは",
    meaning: "if (you're like that), then (it's no good)",
    structure: "Plain form + ようでは (casual: ようじゃ)",
    related: ["n4-nara", "n2-nai-koto-ni-wa"],
    explanation: `
**ようでは** criticises a situation and predicts a bad result: こんな簡単な問題ができないようでは、合格は無理だ, "if you can't do a simple problem like this, you've no chance of passing".

The first half describes behaviour or a state the speaker disapproves of; the second is a negative consequence: 信頼されない, 困る, 無理だ, 上達しない.

It's typical of teachers, parents and managers giving warnings. In speech, it's ようじゃ.

It's a critical "if". Plain なら or たら would state the condition neutrally, without the judgement. The よう softens it slightly, as if to say "if it's the case that you're like this".
`,
    sentences: [
      s("こんな簡単な問題ができない{ようでは}、合格は無理だ。", "こんなかんたんなもんだいができない{ようでは}、ごうかくはむりだ。", "If you can't do a simple problem like this, you've no chance of passing.", {
        accept: ["ようじゃ"],
        near: [["ようには", "That's \"so that\". For a critical \"if you're like that\", use ようでは."]],
      }),
      s("毎日遅刻する{ようでは}、信頼されない。", "まいにちちこくする{ようでは}、しんらいされない。", "If you're late every day, nobody will trust you.", {
        accept: ["ようじゃ"],
        near: [["ようには", "That's \"so that\". For a critical \"if you're like that\", use ようでは."]],
      }),
      s("こんなことで泣く{ようでは}、社会に出てから困るよ。", "こんなことでなく{ようでは}、しゃかいにでてからこまるよ。", "If you cry over something like this, you'll struggle once you start working.", {
        accept: ["ようじゃ"],
        near: [["なら", "That's a plain \"if\". For a critical \"if you're like that\", use ようでは."]],
      }),
      s("人の話を聞かない{ようでは}、上達しない。", "ひとのはなしをきかない{ようでは}、じょうたつしない。", "If you don't listen to others, you won't improve.", {
        accept: ["ようじゃ"],
        near: [["なら", "That's a plain \"if\". For a critical \"if you're like that\", use ようでは."]],
      }),
      s("この程度で疲れる{ようでは}、山には登れない。", "このていどでつかれる{ようでは}、やまにはのぼれない。", "If this is enough to tire you out, you'll never climb a mountain.", {
        accept: ["ようじゃ"],
        near: [["なら", "That's a plain \"if\". For a critical \"if you're like that\", use ようでは."]],
      }),
    ],
  }),
];
