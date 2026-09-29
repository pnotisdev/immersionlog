import { point, s } from "../../build";

/** Sentence endings: forced to, bound to, can't get away without, never cease to, tendencies, guesses and estimates. */

export const endings = [
  point({
    id: "n1-wo-yoginaku",
    title: "〜を余儀なくされる・〜を余儀なくさせる",
    meaning: "be forced to; force (someone) to",
    structure: "Noun (中止, 変更, 避難) + を余儀なくされる / を余儀なくさせる",
    related: ["n2-zaru-wo-enai"],
    explanation: `
**を余儀なくされる** means circumstances forced someone to do something they didn't want to: 大雨のため、試合は中止を余儀なくされた, "the match had to be called off because of heavy rain".

余儀 means "other means", so 余儀ない is "no other choice". The noun is usually a する-verb noun for an unwelcome change: 中止 ("cancellation"), 変更, 避難 ("evacuation"), 引退, 転職, 入院.

The passive **される** has the affected person as its subject. The causative **させる** has the cause as its subject: 台風が住民に避難を余儀なくさせた, "the typhoon forced residents to evacuate".

It's formal and very common in news. Compare ざるを得ない (N2), which is more personal: "I have no choice but to".
`,
    sentences: [
      s(
        "大雨のため、試合は中止{を余儀なくされた}。",
        "おおあめのため、しあいはちゅうし{をよぎなくされた}。",
        "The match had to be called off because of heavy rain.",
        {
          near: [
            [
              "を禁じ得なかった",
              'を禁じ得ない is about a feeling you can\'t hold back. For "was forced to", use を余儀なくされた.',
              "をきんじえなかった",
            ],
          ],
        },
      ),
      s(
        "会社の倒産で、彼は転職{を余儀なくされた}。",
        "かいしゃのとうさんで、かれはてんしょく{をよぎなくされた}。",
        "When his company went bankrupt, he was forced to change jobs.",
        {
          near: [
            [
              "を余儀なくさせた",
              "させた has the cause as subject. With the affected person as subject, use を余儀なくされた.",
              "をよぎなくさせた",
            ],
          ],
        },
      ),
      s(
        "台風が、多くの住民に避難{を余儀なくさせた}。",
        "たいふうが、おおくのじゅうみんにひなん{をよぎなくさせた}。",
        "The typhoon forced many residents to evacuate.",
        {
          near: [
            [
              "を余儀なくされた",
              'される is passive ("be forced"). With the cause as subject, use を余儀なくさせた.',
              "をよぎなくされた",
            ],
          ],
        },
      ),
      s(
        "けがのため、彼は引退{を余儀なくされた}。",
        "けがのため、かれはいんたい{をよぎなくされた}。",
        "Injury forced him to retire.",
        {
          near: [
            [
              "を余儀なくさせた",
              "させた has the cause as subject. With the affected person as subject, use を余儀なくされた.",
              "をよぎなくさせた",
            ],
          ],
        },
      ),
      s(
        "不況が、多くの企業に人員削減{を余儀なくさせた}。",
        "ふきょうが、おおくのきぎょうにじんいんさくげん{をよぎなくさせた}。",
        "The recession forced many companies to cut staff.",
        {
          near: [
            [
              "を余儀なくされた",
              'される is passive ("be forced"). With the cause as subject, use を余儀なくさせた.',
              "をよぎなくされた",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-zu-ni-wa-okanai",
    title: "〜ずにはおかない・〜ないではおかない",
    meaning: "is bound to (make someone feel); will definitely",
    structure: "Verb ない-stem + ずにはおかない (する → せずにはおかない)",
    related: ["n2-zu-ni-wa-irarenai", "n1-zu-ni-wa-sumanai"],
    explanation: `
**ずにはおかない** has two uses.

With a causative verb, something is bound to affect people: 彼の演技は、観客を感動させずにはおかない, "his performance can't fail to move the audience". The subject is a work, event or words, and the effect is on others' feelings: 感動させる, 泣かせる, 考えさせる, 心を動かす.

With a person as the subject, it's a strong resolve: 今度こそ、真相を明らかにせずにはおかない, "this time, I'll uncover the truth whatever it takes".

It's literally "won't leave it without doing". Compare ずにはいられない (N2), which is about your own irresistible urge: 笑わずにはいられない, "I can't help laughing".
`,
    sentences: [
      s(
        "彼の演技は、観客を感動させ{ずにはおかない}。",
        "かれのえんぎは、かんきゃくをかんどうさせ{ずにはおかない}。",
        "His performance can't fail to move the audience.",
        {
          accept: ["ないではおかない"],
          near: [
            [
              "ずにはいられない",
              'ずにはいられない is your own urge. For "is bound to make others feel", use ずにはおかない.',
            ],
          ],
        },
      ),
      s(
        "この映画は、見る人を泣かせ{ずにはおかない}。",
        "このえいがは、みるひとをなかせ{ずにはおかない}。",
        "This film is bound to make anyone who sees it cry.",
        {
          accept: ["ないではおかない"],
          near: [
            [
              "ずにはいられない",
              'ずにはいられない is your own urge. For "is bound to make others", use ずにはおかない.',
            ],
          ],
        },
      ),
      s(
        "今度こそ、真相を明らかにせ{ずにはおかない}。",
        "こんどこそ、しんそうをあきらかにせ{ずにはおかない}。",
        "This time, I'll uncover the truth whatever it takes.",
        {
          accept: ["ずにはすまない"],
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "will definitely", use ずにはおかない.',
              "ずにすむ",
            ],
          ],
        },
      ),
      s(
        "彼の言葉は、人の心を動かさ{ずにはおかない}。",
        "かれのことばは、ひとのこころをうごかさ{ずにはおかない}。",
        "His words can't fail to move people's hearts.",
        {
          accept: ["ないではおかない"],
          near: [
            [
              "ずにはいられない",
              'ずにはいられない is your own urge. For "can\'t fail to move others", use ずにはおかない.',
            ],
          ],
        },
      ),
      s(
        "警察は、必ず犯人を捕まえ{ずにはおかない}だろう。",
        "けいさつは、かならずはんにんをつかまえ{ずにはおかない}だろう。",
        "The police won't rest until they've caught the culprit.",
        {
          accept: ["ないではおかない"],
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "won\'t rest until", use ずにはおかない.',
              "ずにすむ",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-zu-ni-wa-sumanai",
    title: "〜ずには済まない・〜ないでは済まない",
    meaning: "can't get away without, will have to",
    structure: "Verb ない-stem + ずには済まない (する → せずには済まない)",
    related: ["n2-zu-ni-sumu", "n1-zu-ni-wa-okanai"],
    explanation: `
**ずには済まない** means that, given the situation or social rules, you can't avoid doing something: 人に迷惑をかけたのだから、謝らずには済まない, "you caused trouble, so you'll have to apologise".

The verb is usually an obligation you'd rather avoid: apologising, reporting, paying for damage, explaining or taking responsibility. The pressure comes from the situation, not from your own feelings.

It's the exact opposite of ずに済む (N2), "get away without doing": 謝らずに済んだ, "I got away without apologising". ないでは済まない means the same.

Compare ずにはおかない, which is about something being bound to happen, or someone's strong resolve.
`,
    sentences: [
      s(
        "人に迷惑をかけたのだから、謝ら{ずには済まない}。",
        "ひとにめいわくをかけたのだから、あやまら{ずにはすまない}。",
        "You caused trouble, so you'll have to apologise.",
        {
          accept: ["ないでは済まない"],
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "can\'t get away without", use ずには済まない.',
              "ずにすむ",
            ],
          ],
        },
      ),
      s(
        "このミスは、部長に報告せ{ずには済まない}だろう。",
        "このミスは、ぶちょうにほうこくせ{ずにはすまない}だろう。",
        "We'll have to report this mistake to the department head.",
        {
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "will have to", use ずには済まない.',
              "ずにすむ",
            ],
          ],
        },
      ),
      s(
        "高い花瓶を割ってしまった。弁償せ{ずには済まない}。",
        "たかいかびんをわってしまった。べんしょうせ{ずにはすまない}。",
        "I broke an expensive vase. I'll have to pay for it.",
        {
          near: [
            [
              "ずにはいられない",
              "ずにはいられない is an urge you can't resist. For an obligation, use ずには済まない.",
            ],
          ],
        },
      ),
      s(
        "これだけの問題になれば、社長が説明せ{ずには済まない}。",
        "これだけのもんだいになれば、しゃちょうがせつめいせ{ずにはすまない}。",
        "Now that it's become such a big problem, the president will have to explain.",
        {
          near: [
            [
              "ずに済む",
              'ずに済む is "get away without". For "will have to", use ずには済まない.',
              "ずにすむ",
            ],
          ],
        },
      ),
      s(
        "約束を破ったのだから、責任を取ら{ずには済まない}。",
        "やくそくをやぶったのだから、せきにんをとら{ずにはすまない}。",
        "You broke your promise, so you'll have to take responsibility.",
        {
          accept: ["ないでは済まない"],
          near: [
            [
              "ずにはいられない",
              "ずにはいられない is an urge you can't resist. For an obligation, use ずには済まない.",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-yamanai",
    title: "〜てやまない",
    meaning: "never cease to, sincerely (hope, love)",
    structure:
      "Verb て-form (願う, 祈る, 愛する, 期待する) + やまない / やみません",
    related: ["n3-te-tamaranai"],
    explanation: `
**てやまない** expresses a deep, lasting feeling that never stops: 平和を願ってやまない, "I never stop hoping for peace".

It goes with a small set of verbs of hoping, loving and respecting: 願う, 祈る, 愛する, 期待する, 尊敬する. It's formal and heartfelt, and it's a staple of speeches, letters and closing greetings: 皆様のご健康を願ってやみません, "I sincerely wish you all good health".

It can describe others in the past: 母が愛してやまなかった町, "the town my mother loved so dearly".

It's literally "doesn't stop (feeling)". Compare てたまらない (N3), "so … I can't stand it", which is casual and about intense physical or emotional states.
`,
    sentences: [
      s(
        "皆様のご健康を願っ{てやみません}。",
        "みなさまのごけんこうをねがっ{てやみません}。",
        "I sincerely wish you all good health.",
        {
          accept: ["てやまない"],
          near: [
            [
              "てたまりません",
              'てたまらない is "so … I can\'t stand it". For a heartfelt wish, use てやみません.',
            ],
          ],
        },
      ),
      s(
        "世界の平和を願っ{てやまない}。",
        "せかいのへいわをねがっ{てやまない}。",
        "I never stop hoping for world peace.",
        {
          near: [
            [
              "てたまらない",
              'てたまらない is "so … I can\'t stand it". For "never cease to", use てやまない.',
            ],
          ],
        },
      ),
      s(
        "彼は、母が愛し{てやまなかった}町に帰った。",
        "かれは、ははがあいし{てやまなかった}まちにかえった。",
        "He returned to the town his mother had loved so dearly.",
        {
          near: [
            [
              "てたまらなかった",
              'てたまらない is "so … I can\'t stand it". For "loved so dearly", use てやまなかった.',
            ],
          ],
        },
      ),
      s(
        "皆様の今後のご活躍を期待し{てやみません}。",
        "みなさまのこんごのごかつやくをきたいし{てやみません}。",
        "I look forward to your continued success.",
        {
          accept: ["てやまない"],
          near: [
            [
              "てたまりません",
              'てたまらない is "so … I can\'t stand it". For a heartfelt wish, use てやみません.',
            ],
          ],
        },
      ),
      s(
        "子どもたちの幸せを祈っ{てやまない}。",
        "こどもたちのしあわせをいのっ{てやまない}。",
        "I never stop praying for the children's happiness.",
        {
          near: [
            [
              "てならない",
              'てならない is "can\'t help feeling". For "never cease to", use てやまない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-wa-kanawanai",
    title: "〜てはかなわない",
    meaning: "can't stand it if, it's too much",
    structure: "Verb て-form / い-adj くて + は + かなわない",
    related: ["n3-te-tamaranai"],
    explanation: `
**てはかなわない** complains that something is unbearable, especially if it goes on: こう暑くてはかなわない, "I can't stand this heat".

The first half is an unpleasant situation, often repeated or ongoing: heat, rain that won't stop, constant overtime, being asked the same thing again and again. Passive verbs are common, because something is being done to you: 騒がれては, 聞かれては.

It's close to てはたまらない and てたまらない (N3), but more of a grumble. かなう means "to match, cope with", so it's literally "if it's like this, I can't cope".

Don't confuse it with てもかまわない (N4), "it's fine if".
`,
    sentences: [
      s(
        "こう暑く{てはかなわない}。",
        "こうあつく{てはかなわない}。",
        "I can't stand this heat.",
        {
          accept: ["てはたまらない"],
          near: [
            [
              "てもかまわない",
              'てもかまわない is "it\'s fine if". For "I can\'t stand it", use てはかなわない.',
            ],
          ],
        },
      ),
      s(
        "毎日こんなに残業させられ{てはかなわない}。",
        "まいにちこんなにざんぎょうさせられ{てはかなわない}。",
        "I can't take being made to work this much overtime every day.",
        {
          accept: ["てはたまらない"],
          near: [
            [
              "てもかまわない",
              'てもかまわない is "it\'s fine if". For "I can\'t take it", use てはかなわない.',
            ],
          ],
        },
      ),
      s(
        "夜中に騒がれ{てはかなわない}。",
        "よなかにさわがれ{てはかなわない}。",
        "I can't put up with noise in the middle of the night.",
        {
          accept: ["てはたまらない"],
          near: [
            [
              "てはいけない",
              'てはいけない is "must not". For "I can\'t put up with", use てはかなわない.',
            ],
          ],
        },
      ),
      s(
        "こんなに雨が続い{てはかなわない}。",
        "こんなにあめがつづい{てはかなわない}。",
        "I can't take any more of this rain.",
        {
          accept: ["てはたまらない"],
          near: [
            [
              "てもかまわない",
              'てもかまわない is "it\'s fine if". For "I can\'t take any more", use てはかなわない.',
            ],
          ],
        },
      ),
      s(
        "何度も同じことを聞かれ{てはかなわない}。",
        "なんどもおなじことをきかれ{てはかなわない}。",
        "It's too much being asked the same thing over and over.",
        {
          accept: ["てはたまらない"],
          near: [
            [
              "てはいけない",
              'てはいけない is "must not". For "it\'s too much", use てはかなわない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-te-habakaranai",
    title: "〜てはばからない",
    meaning: "not hesitate to, openly (say / claim)",
    structure:
      "Verb て-form (言う, 公言する, 断言する, 主張する) + はばからない",
    related: ["n1-te-yamanai"],
    explanation: `
**てはばからない** means someone says or does something openly, without any reserve, often something bold or controversial: 彼は自分が天才だと言ってはばからない, "he openly claims to be a genius".

The verb is usually one of speaking or asserting: 言う, 公言する ("declare publicly"), 断言する ("assert"), 主張する, 批判する. It describes someone else's attitude, often with surprise or mild disapproval.

はばかる means "to hesitate, hold back out of consideration", so it's literally "not holding back". It's written and journalistic.

Compare てやまない, "never cease to", which looks similar but is about heartfelt wishes.
`,
    sentences: [
      s(
        "彼は自分が天才だと言っ{てはばからない}。",
        "かれはじぶんがてんさいだといっ{てはばからない}。",
        "He openly claims to be a genius.",
        {
          near: [
            [
              "てやまない",
              'てやまない is "never cease to (hope)". For "openly, without hesitation", use てはばからない.',
            ],
          ],
        },
      ),
      s(
        "彼女は政府を批判し{てはばからない}。",
        "かのじょはせいふをひはんし{てはばからない}。",
        "She doesn't hesitate to criticise the government.",
        {
          near: [
            [
              "てたまらない",
              'てたまらない is "so … I can\'t stand it". For "doesn\'t hesitate to", use てはばからない.',
            ],
          ],
        },
      ),
      s(
        "彼は「金がすべてだ」と公言し{てはばからない}。",
        "かれは「かねがすべてだ」とこうげんし{てはばからない}。",
        "He openly declares that money is everything.",
        {
          near: [
            [
              "てやまない",
              'てやまない is "never cease to (hope)". For "openly declares", use てはばからない.',
            ],
          ],
        },
      ),
      s(
        "その選手は、必ず優勝すると断言し{てはばからない}。",
        "そのせんしゅは、かならずゆうしょうするとだんげんし{てはばからない}。",
        "The athlete doesn't hesitate to declare that he'll win.",
        {
          near: [
            [
              "てたまらない",
              'てたまらない is "so … I can\'t stand it". For "doesn\'t hesitate to", use てはばからない.',
            ],
          ],
        },
      ),
      s(
        "彼は自分の意見だけが正しいと主張し{てはばからない}。",
        "かれはじぶんのいけんだけがただしいとしゅちょうし{てはばからない}。",
        "He insists without reserve that only his opinion is right.",
        {
          near: [
            [
              "てやまない",
              'てやまない is "never cease to (hope)". For "without reserve", use てはばからない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nai-mono-demo-nai",
    title: "〜ないものでもない",
    meaning: "it's not impossible, could (under the right conditions)",
    structure: "Verb ない-form + ものでもない",
    related: ["n3-nai-koto-wa-nai", "n1-nai-de-mo-nai"],
    explanation: `
**ないものでもない** is a cautious, double-negative "it's not impossible": 条件次第では、引き受けないものでもない, "depending on the terms, I might take it on".

The first half usually sets a condition: 次第では, れば, によっては. The speaker is reluctant or noncommittal, but leaves the door open, so it's useful in negotiations.

It's close to ないことはない (N3) and ないでもない. ないものでもない sounds the most formal and hesitant.

Don't confuse it with ないものか (N2), "isn't there some way to…?", which is a wish, not a possibility. In business, it's a polite way to signal flexibility without making any promise, so listen for the condition that comes before it.
`,
    sentences: [
      s(
        "条件次第では、引き受け{ないものでもない}。",
        "じょうけんしだいでは、ひきうけ{ないものでもない}。",
        "Depending on the terms, I might take it on.",
        {
          accept: ["ないこともない", "ないことはない", "ないでもない"],
          near: [
            [
              "ないものか",
              'ないものか is "isn\'t there some way…?". For "it\'s not impossible", use ないものでもない.',
            ],
          ],
        },
      ),
      s(
        "今から急げば、間に合わ{ないものでもない}。",
        "いまからいそげば、まにあわ{ないものでもない}。",
        "If we hurry now, we might just make it.",
        {
          accept: ["ないこともない", "ないことはない", "ないでもない"],
          near: [
            [
              "ないものか",
              'ないものか is "isn\'t there some way…?". For "we might just", use ないものでもない.',
            ],
          ],
        },
      ),
      s(
        "頼まれれば、手伝わ{ないものでもない}。",
        "たのまれれば、てつだわ{ないものでもない}。",
        "If I'm asked, I might help.",
        {
          accept: ["ないこともない", "ないことはない", "ないでもない"],
          near: [
            [
              "ないものだ",
              'ないものだ is "that\'s not how it is". For "I might", use ないものでもない.',
            ],
          ],
        },
      ),
      s(
        "練習すれば、でき{ないものでもない}。",
        "れんしゅうすれば、でき{ないものでもない}。",
        "With practice, it's not impossible.",
        {
          accept: ["ないこともない", "ないことはない", "ないでもない"],
          near: [
            [
              "ないものか",
              'ないものか is "isn\'t there some way…?". For "it\'s not impossible", use ないものでもない.',
            ],
          ],
        },
      ),
      s(
        "事情によっては、許さ{ないものでもない}。",
        "じじょうによっては、ゆるさ{ないものでもない}。",
        "Depending on the circumstances, I might forgive it.",
        {
          accept: ["ないこともない", "ないことはない", "ないでもない"],
          near: [
            [
              "ないものだ",
              'ないものだ is "that\'s not how it is". For "I might", use ないものでもない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nai-to-mo-kagiranai",
    title: "〜ないとも限らない",
    meaning: "it might (so be careful), you never know",
    structure: "Verb ない-form + とも限らない",
    related: ["n3-to-wa-kagiranai", "n3-osore"],
    explanation: `
**ないとも限らない** is a double negative meaning "it's not certain that it won't happen", so "it might happen": 事故が起きないとも限らないから、気をつけて, "you never know, there could be an accident, so be careful".

The second half is usually a precaution: 気をつけて, 傘を持っていこう, 小さい声で話そう, or 備えておこう. The possibility is small, but worth guarding against.

Don't confuse it with とは限らない (N3), "not necessarily". とは限らない doubts a certainty, while ないとも限らない warns of a risk.

Compare おそれがある (N3), "there's a risk of", which is formal and used for serious dangers.
`,
    sentences: [
      s(
        "事故が起き{ないとも限らない}から、気をつけて。",
        "じこがおき{ないともかぎらない}から、きをつけて。",
        "You never know, there could be an accident, so be careful.",
        {
          near: [
            [
              "とは限らない",
              'とは限らない is "not necessarily". For "it might happen (so be careful)", use ないとも限らない.',
              "とはかぎらない",
            ],
          ],
        },
      ),
      s(
        "雨が降ら{ないとも限らない}ので、傘を持っていこう。",
        "あめがふら{ないともかぎらない}ので、かさをもっていこう。",
        "It might rain, so let's take an umbrella.",
        {
          near: [
            [
              "とは限らない",
              'とは限らない is "not necessarily". For "it might", use ないとも限らない.',
              "とはかぎらない",
            ],
          ],
        },
      ),
      s(
        "誰かに聞かれ{ないとも限らない}。小さい声で話そう。",
        "だれかにきかれ{ないともかぎらない}。ちいさいこえではなそう。",
        "Someone might hear us. Let's keep our voices down.",
        {
          near: [
            [
              "とは限らない",
              'とは限らない is "not necessarily". For "might", use ないとも限らない.',
              "とはかぎらない",
            ],
          ],
        },
      ),
      s(
        "彼の気が変わら{ないとも限らない}。",
        "かれのきがかわら{ないともかぎらない}。",
        "He might change his mind, you never know.",
        {
          near: [
            [
              "ないに限る",
              'ないに限る is "it\'s best not to". For "you never know", use ないとも限らない.',
              "ないにかぎる",
            ],
          ],
        },
      ),
      s(
        "地震が来{ないとも限らない}ので、備えておこう。",
        "じしんがこ{ないともかぎらない}ので、そなえておこう。",
        "An earthquake could come, so let's be prepared.",
        {
          near: [
            [
              "とは限らない",
              'とは限らない is "not necessarily". For "could come", use ないとも限らない.',
              "とはかぎらない",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-nai-de-mo-nai",
    title: "〜ないでもない",
    meaning: "sort of, somewhat (can see, feel)",
    structure: "Verb ない-form + でもない",
    related: ["n3-nai-koto-wa-nai", "n1-nai-mono-demo-nai"],
    explanation: `
**ないでもない** is a hesitant double negative meaning "I do, a little": その気持ちも分からないでもない, "I can sort of understand how you feel".

It softens an admission, as if you're reluctant to agree fully. It's common with verbs of understanding, feeling and seeing: 分かる, 理解できる, 気がする, 似ている, 考える.

It's close to ないことはない (N3), and ないものでもない is the most formal of the three.

Don't confuse it with ないで, "without". Here でもない is "it's not that it isn't". The effect is a grudging, partial agreement, which is useful when you want to be fair to someone's view without fully endorsing it.
`,
    sentences: [
      s(
        "その気持ちも分から{ないでもない}。",
        "そのきもちもわから{ないでもない}。",
        "I can sort of understand how you feel.",
        {
          accept: ["ないこともない", "ないことはない"],
          near: [
            [
              "ないで",
              'ないで is "without". For "sort of, a little", use ないでもない.',
            ],
          ],
        },
      ),
      s(
        "彼の言うことも理解でき{ないでもない}。",
        "かれのいうこともりかいでき{ないでもない}。",
        "I can see where he's coming from, to some extent.",
        {
          accept: ["ないこともない", "ないことはない"],
          near: [
            [
              "ないで",
              'ないで is "without". For "to some extent", use ないでもない.',
            ],
          ],
        },
      ),
      s(
        "少し寂しい気がし{ないでもない}。",
        "すこしさびしいきがし{ないでもない}。",
        "I do feel a little lonely, I suppose.",
        {
          accept: ["ないこともない", "ないことはない"],
          near: [
            [
              "ないで",
              'ないで is "without". For "I do, I suppose", use ないでもない.',
            ],
          ],
        },
      ),
      s(
        "言われてみれば、似てい{ないでもない}。",
        "いわれてみれば、にてい{ないでもない}。",
        "Now that you mention it, they do look a bit alike.",
        {
          accept: ["ないこともない", "ないことはない"],
          near: [
            [
              "ないものか",
              'ないものか is "isn\'t there some way…?". For "a bit", use ないでもない.',
            ],
          ],
        },
      ),
      s(
        "転職を考え{ないでもない}が、まだ決めていない。",
        "てんしょくをかんがえ{ないでもない}が、まだきめていない。",
        "I have sort of been thinking about changing jobs, but I haven't decided.",
        {
          accept: ["ないこともない", "ないことはない"],
          near: [
            [
              "ないで",
              'ないで is "without". For "I have sort of", use ないでもない.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-mieru",
    title: "〜とみえる・〜とみえて",
    meaning: "it seems, apparently (judging by the signs)",
    structure: "Plain form + とみえる / とみえて",
    related: ["n3-you-ni-mieru", "n4-rashii"],
    explanation: `
**とみえる** draws a conclusion from visible evidence: 彼女は何かいいことがあったとみえる, "she seems to have had some good news".

**とみえて** gives the conclusion and then the evidence: 雨が降ったとみえて、道が濡れている, "it must have rained, because the road is wet". This order, guess first and evidence second, is typical of this pattern.

It's a literary cousin of らしい (N4) and ようだ, and it's common in narration. The subject is someone or something the speaker is observing, not the speaker.

It's written とみえる or と見える, and it comes from 見える, "to appear". Compare ように見える (N3), which is about how something looks, not a conclusion.
`,
    sentences: [
      s(
        "彼は疲れている{とみえて}、電車で眠っていた。",
        "かれはつかれている{とみえて}、でんしゃでねむっていた。",
        "He must have been tired. He was asleep on the train.",
        {
          accept: ["と見えて", "ようで", "らしく"],
          near: [
            [
              "といって",
              'といって is "saying". For "apparently (judging by the signs)", use とみえて.',
            ],
          ],
        },
      ),
      s(
        "彼女は何かいいことがあった{とみえる}。",
        "かのじょはなにかいいことがあった{とみえる}。",
        "She seems to have had some good news.",
        {
          accept: ["と見える", "ようだ", "らしい"],
          near: [
            [
              "と思う",
              'と思う is "I think". For "it seems (judging by the signs)", use とみえる.',
              "とおもう",
            ],
          ],
        },
      ),
      s(
        "雨が降った{とみえて}、道が濡れている。",
        "あめがふった{とみえて}、みちがぬれている。",
        "It must have rained, because the road is wet.",
        {
          accept: ["と見えて", "ようで", "らしく"],
          near: [
            [
              "といって",
              'といって is "saying". For "it must have (judging by the signs)", use とみえて.',
            ],
          ],
        },
      ),
      s(
        "よほど嬉しかった{とみえて}、彼はずっと笑っている。",
        "よほどうれしかった{とみえて}、かれはずっとわらっている。",
        "He must have been really pleased. He hasn't stopped smiling.",
        {
          accept: ["と見えて", "ようで", "らしく"],
          near: [
            [
              "といって",
              'といって is "saying". For "he must have", use とみえて.',
            ],
          ],
        },
      ),
      s(
        "この店は人気がある{とみえる}。いつも行列だ。",
        "このみせはにんきがある{とみえる}。いつもぎょうれつだ。",
        "This place must be popular. There's always a queue.",
        {
          accept: ["と見える", "ようだ", "らしい"],
          near: [
            [
              "と思う",
              'と思う is "I think". For "must be (judging by the signs)", use とみえる.',
              "とおもう",
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mono-to-omowareru",
    title: "〜ものと思われる",
    meaning: "it is thought that, it is believed (formal)",
    structure: "Plain form + ものと思われる / ものとみられる",
    related: ["n4-to-omou"],
    explanation: `
**ものと思われる** is an impersonal, cautious conclusion typical of news reports and official statements: 事故の原因は、ブレーキの故障によるものと思われる, "the accident is thought to have been caused by a brake failure".

It avoids saying who thinks so. The passive 思われる makes it sound objective, and もの adds formality. ものとみられる, "it is believed", is used the same way, especially in news.

Typical topics are causes, estimates of damage, forecasts and suspects' whereabouts.

Compare と思う (N4), "I think", which is personal. In conversation, you'd say みたいだ, らしい or と思う.
`,
    sentences: [
      s(
        "事故の原因は、ブレーキの故障による{ものと思われる}。",
        "じこのげんいんは、ブレーキのこしょうによる{ものとおもわれる}。",
        "The accident is thought to have been caused by a brake failure.",
        {
          accept: ["ものとみられる", "と思われる"],
          near: [
            [
              "ものと思う",
              'ものと思う is "I think". For an impersonal "it is thought", use ものと思われる.',
              "ものとおもう",
            ],
          ],
        },
      ),
      s(
        "犯人は、まだ近くにいる{ものと思われる}。",
        "はんにんは、まだちかくにいる{ものとおもわれる}。",
        "The culprit is believed to still be in the area.",
        {
          accept: ["ものとみられる", "と思われる"],
          near: [
            [
              "ものと思う",
              'ものと思う is "I think". For an impersonal "it is believed", use ものと思われる.',
              "ものとおもう",
            ],
          ],
        },
      ),
      s(
        "景気は今後、回復に向かう{ものと思われる}。",
        "けいきはこんご、かいふくにむかう{ものとおもわれる}。",
        "The economy is expected to recover from now on.",
        {
          accept: ["ものとみられる", "と思われる"],
          near: [
            [
              "ものだ",
              'ものだ is "that\'s how things are". For "is expected to", use ものと思われる.',
            ],
          ],
        },
      ),
      s(
        "被害は数億円に上る{ものと思われる}。",
        "ひがいはすうおくえんにのぼる{ものとおもわれる}。",
        "The damage is thought to run to several hundred million yen.",
        {
          accept: ["ものとみられる", "と思われる"],
          near: [
            [
              "ものと思う",
              'ものと思う is "I think". For an impersonal "it is thought", use ものと思われる.',
              "ものとおもう",
            ],
          ],
        },
      ),
      s(
        "火事は、たばこの火が原因だった{ものと思われる}。",
        "かじは、たばこのひがげんいんだった{ものとおもわれる}。",
        "The fire is believed to have been caused by a cigarette.",
        {
          accept: ["ものとみられる", "と思われる"],
          near: [
            [
              "ものだ",
              'ものだ is "that\'s how things are". For "is believed to", use ものと思われる.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-shimatsu-da",
    title: "〜始末だ",
    meaning: "end up (in this sorry state), it's come to this",
    structure: "Verb dictionary form + 始末だ · この始末だ",
    related: ["n2-ageku", "n2-sue-ni"],
    explanation: `
**始末だ** describes a bad outcome that a series of bad behaviour has led to, usually with exasperation: 彼は遊んでばかりで、ついには大学を退学する始末だ, "he did nothing but play around, and in the end he dropped out of university".

The first half lists the bad behaviour or problems, and the second half is the final, worst stage, often with ついには, とうとう or 最近は. The verb is in the dictionary form even when it's already happened.

この始末だ means "and look where it's got us". 始末 on its own means "management, dealing with": 始末に負えない, "unmanageable".

Compare あげく (N2), "after all that, in the end", which works the same way but can't end the sentence.
`,
    sentences: [
      s(
        "彼は遊んでばかりで、ついには大学を退学する{始末だ}。",
        "かれはあそんでばかりで、ついにはだいがくをたいがくする{しまつだ}。",
        "He did nothing but play around, and in the end he dropped out of university.",
        {
          near: [
            [
              "ばかりだ",
              'ばかりだ is "keeps getting". For "it\'s come to this", use 始末だ.',
            ],
          ],
        },
      ),
      s(
        "息子は反抗期で、最近は口もきかない{始末だ}。",
        "むすこははんこうきで、さいきんはくちもきかない{しまつだ}。",
        "My son's in his rebellious phase, and lately he won't even speak to me.",
        {
          near: [
            [
              "ところだ",
              'ところだ is "about to". For "it\'s come to this", use 始末だ.',
            ],
          ],
        },
      ),
      s(
        "彼女は遅刻ばかりして、とうとう大事な会議をすっぽかす{始末だ}。",
        "かのじょはちこくばかりして、とうとうだいじなかいぎをすっぽかす{しまつだ}。",
        "She's always late, and now she's even skipped an important meeting.",
        {
          near: [
            [
              "ばかりだ",
              'ばかりだ is "keeps getting". For "it\'s come to this", use 始末だ.',
            ],
          ],
        },
      ),
      s(
        "彼は飲みすぎて、道で寝てしまう{始末だった}。",
        "かれはのみすぎて、みちでねてしまう{しまつだった}。",
        "He drank so much he ended up sleeping in the street.",
        {
          near: [
            [
              "ところだった",
              'ところだった is "nearly". For "ended up (in this sorry state)", use 始末だった.',
            ],
          ],
        },
      ),
      s(
        "何度注意しても聞かず、ついには逆に怒り出す{始末だ}。",
        "なんどちゅういしてもきかず、ついにはぎゃくにおこりだす{しまつだ}。",
        "However often I tell him, he won't listen, and now he even gets angry at me.",
        {
          near: [
            [
              "ところだ",
              'ところだ is "about to". For "and now it\'s come to this", use 始末だ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-kirai-ga-aru",
    title: "〜きらいがある",
    meaning: "have a (bad) tendency to",
    structure:
      "Verb dictionary / ない-form + きらいがある · Noun + の + きらいがある",
    related: ["n3-gachi", "n1-tokaku"],
    explanation: `
**きらいがある** describes an undesirable tendency in a person or group: 彼は物事を大げさに言うきらいがある, "he has a tendency to exaggerate".

The tendency is always negative: exaggerating, giving up too easily, keeping things to yourself, sticking to precedent, not listening. It's a criticism, but a measured and slightly formal one, so it's typical of essays and assessments.

It's written with the kanji 嫌い (dislike), but it means "tendency" here, and it's usually written in kana.

Compare がち (N3), "tend to", which is more everyday and can describe situations (曇りがち). きらいがある is about someone's character.

Don't confuse it with ことがある, "sometimes".
`,
    sentences: [
      s(
        "彼は物事を大げさに言う{きらいがある}。",
        "かれはものごとをおおげさにいう{きらいがある}。",
        "He has a tendency to exaggerate.",
        {
          accept: ["嫌いがある"],
          near: [
            [
              "ことがある",
              'ことがある is "sometimes". For "has a (bad) tendency", use きらいがある.',
            ],
          ],
        },
      ),
      s(
        "最近の若者は、すぐにあきらめる{きらいがある}と言われる。",
        "さいきんのわかものは、すぐにあきらめる{きらいがある}といわれる。",
        "Young people these days are said to give up too easily.",
        {
          accept: ["嫌いがある"],
          near: [
            [
              "ことがある",
              'ことがある is "sometimes". For "a tendency to", use きらいがある.',
            ],
          ],
        },
      ),
      s(
        "彼女は一人で問題を抱え込む{きらいがある}。",
        "かのじょはひとりでもんだいをかかえこむ{きらいがある}。",
        "She tends to keep her problems to herself.",
        {
          accept: ["嫌いがある"],
          near: [
            [
              "ことにする",
              'ことにする is "decide to". For "tends to", use きらいがある.',
            ],
          ],
        },
      ),
      s(
        "この会社は前例にこだわる{きらいがある}。",
        "このかいしゃはぜんれいにこだわる{きらいがある}。",
        "This company has a tendency to stick to precedent.",
        {
          accept: ["嫌いがある"],
          near: [
            [
              "ことがある",
              'ことがある is "sometimes". For "a tendency to", use きらいがある.',
            ],
          ],
        },
      ),
      s(
        "彼は人の話を最後まで聞かない{きらいがある}。",
        "かれはひとのはなしをさいごまできかない{きらいがある}。",
        "He has a habit of not hearing people out.",
        {
          accept: ["嫌いがある"],
          near: [
            [
              "ことにする",
              'ことにする is "decide to". For "has a habit of", use きらいがある.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-to-itta-tokoro-da",
    title: "〜といったところだ",
    meaning: "about, at most, more or less",
    structure: "Noun (amount, level) + といったところだ / というところだ",
    related: ["n3-kurai"],
    explanation: `
**といったところだ** gives a rough, modest estimate, usually on the low side: 参加者は、せいぜい三十人といったところだ, "there'll be thirty participants at most".

It often comes with せいぜい ("at most"), まあまあ, or just a number. The feeling is "that's about it, nothing more". It's also used for self-deprecating assessments: 私の料理の腕は、まあまあといったところだ, "my cooking is so-so, I'd say".

というところだ means the same. It's conversational and very common.

Compare というものだ (N2), "that's what … is", which is a general truth, not an estimate. Keep an eye out for せいぜい earlier in the sentence: it's a strong clue that the answer is といったところだ.
`,
    sentences: [
      s(
        "参加者は、せいぜい三十人{といったところだ}。",
        "さんかしゃは、せいぜいさんじゅうにん{といったところだ}。",
        "There'll be thirty participants at most.",
        {
          accept: ["というところだ"],
          near: [
            [
              "というものだ",
              'というものだ is "that\'s what … is". For "about, at most", use といったところだ.',
            ],
          ],
        },
      ),
      s(
        "睡眠時間は、毎日五時間{といったところだ}。",
        "すいみんじかんは、まいにちごじかん{といったところだ}。",
        "I get about five hours' sleep a night.",
        {
          accept: ["というところだ"],
          near: [
            [
              "というものだ",
              'というものだ is "that\'s what … is". For "about", use といったところだ.',
            ],
          ],
        },
      ),
      s(
        "私の料理の腕は、まあまあ{といったところだ}。",
        "わたしのりょうりのうでは、まあまあ{といったところだ}。",
        "My cooking is so-so, I'd say.",
        {
          accept: ["というところだ"],
          near: [
            [
              "というわけだ",
              'というわけだ is "that\'s why". For "I\'d say", use といったところだ.',
            ],
          ],
        },
      ),
      s(
        "完成まで、あと一週間{といったところだ}。",
        "かんせいまで、あといっしゅうかん{といったところだ}。",
        "It'll be finished in about another week.",
        {
          accept: ["というところだ"],
          near: [
            [
              "というものだ",
              'というものだ is "that\'s what … is". For "about", use といったところだ.',
            ],
          ],
        },
      ),
      s(
        "彼の日本語は、日常会話ができる程度{といったところだ}。",
        "かれのにほんごは、にちじょうかいわができるていど{といったところだ}。",
        "His Japanese is about good enough for everyday conversation.",
        {
          accept: ["というところだ"],
          near: [
            [
              "というわけだ",
              'というわけだ is "that\'s why". For "about", use といったところだ.',
            ],
          ],
        },
      ),
    ],
  }),

  point({
    id: "n1-mo-nan-to-mo-nai",
    title: "〜もなんともない",
    meaning: "not in the slightest",
    structure: "い-adj くも / な-adj でも + なんともない",
    explanation: `
**もなんともない** flatly denies a feeling or quality: こんな映画、怖くもなんともない, "this film isn't scary in the slightest".

It follows an い-adjective in its く form plus も (怖くも, 痛くも, 羨ましくも), or a な-adjective or noun with でも (平気でも, 好きでも). The tone is dismissive, sometimes defiant or a little bit of bravado, so it's common in conversation and manga.

なんともない on its own means "it's nothing, I'm fine": けがはなんともない. Plain 〜くもない is milder and just means "not X, either". Because it sounds so dismissive, avoid it in polite conversation, where 全然〜ない or あまり〜ない is safer.
`,
    sentences: [
      s(
        "こんな映画、怖く{もなんともない}。",
        "こんなえいが、こわく{もなんともない}。",
        "This film isn't scary in the slightest.",
        {
          accept: ["も何ともない"],
          near: [
            [
              "もない",
              'もない is just "not (either)". For "not in the slightest", use もなんともない.',
            ],
          ],
        },
      ),
      s(
        "彼に嫌われても、悲しく{もなんともない}。",
        "かれにきらわれても、かなしく{もなんともない}。",
        "I wouldn't be the least bit sad if he disliked me.",
        {
          accept: ["も何ともない"],
          near: [
            [
              "もない",
              'もない is just "not (either)". For "not the least bit", use もなんともない.',
            ],
          ],
        },
      ),
      s(
        "こんな問題、難しく{もなんともない}。",
        "こんなもんだい、むずかしく{もなんともない}。",
        "A question like this isn't hard at all.",
        {
          accept: ["も何ともない"],
          near: [
            [
              "もない",
              'もない is just "not (either)". For "not at all", use もなんともない.',
            ],
          ],
        },
      ),
      s(
        "注射なんて痛く{もなんともない}。",
        "ちゅうしゃなんていたく{もなんともない}。",
        "Injections don't hurt in the slightest.",
        {
          accept: ["も何ともない"],
          near: [
            [
              "てもいい",
              'てもいい is "may". For "not in the slightest", use もなんともない.',
            ],
          ],
        },
      ),
      s(
        "そんな車、別に羨ましく{もなんともない}。",
        "そんなくるま、べつにうらやましく{もなんともない}。",
        "I'm not the least bit jealous of a car like that.",
        {
          accept: ["も何ともない"],
          near: [
            [
              "もない",
              'もない is just "not (either)". For "not the least bit", use もなんともない.',
            ],
          ],
        },
      ),
    ],
  }),
];
