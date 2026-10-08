/**
 * Third, harder passages for the lessons where long-sentence reading matters most. Appended
 * to each lesson's entry in ./index, after its other practice.
 */

export const EXTRA_PRACTICE: Record<string, string> = {
  "describing-clauses": `
### A paragraph of clauses

> 私が|わたしが|I ; 初めて|はじめて|for the first time ; その町を|そのまちを|that town ; 訪れた|おとずれた|visited ; のは|(nominalizer) ; 十年前の|じゅうねんまえの|ten years ago's ; 秋だった|あきだった|was autumn
> 駅を|えきを|station ; 出ると|でると|when I left ; 目の前に|めのまえに|right before my eyes ; 広がっていたのは|ひろがっていたのは|what lay spread out ; 古い|ふるい|old ; 木造の|もくぞうの|wooden ; 家々が|いえいえが|houses ; 並ぶ|ならぶ|line up ; 静かな|しずかな|quiet ; 通りで|とおりで|street and ; 地元の|じもとの|local ; 人が|ひとが|people ; 毎朝|まいあさ|every morning ; 開いている|ひらいている|keep ; 小さな市場だった|ちいさないちばだった|was a small market
= It was autumn ten years ago that I first visited that town.
= What lay before my eyes when I left the station was a quiet street lined with old wooden houses, and a small market that local people open every morning.

:::read Step by step
1. **訪れたのは…秋だった**: [clause]のは + noun + だ, a cleft sentence: "it was autumn that I visited".
2. **広がっていたのは…市場だった**: the same pattern. Everything between のは and 市場 describes what spread out.
3. **古い木造の家々が並ぶ静かな通り**: 家々が並ぶ (houses line up) describes 通り.
4. **地元の人が毎朝開いている小さな市場**: another clause in front of 市場.
:::
`,

  nominalizers: `
### An argument made of nominalized clauses

> 外国語を|がいこくごを|foreign language ; 学ぶということは|まなぶということは|learning ; 単に|たんに|merely ; 言葉を|ことばを|words ; 覚えることではなく|おぼえることではなく|memorising not ; その言葉を|そのことばを|that language ; 話す人々の|はなすひとびとの|speakers' ; ものの見方を|もののみかたを|way of seeing ; 知ることでもある|しることでもある|is also knowing
> 言い換えれば|いいかえれば|in other words ; 他の人が|ほかのひとが|others ; どのように|how ; 世界を|せかいを|the world ; 感じているのかを|かんじているのかを|feel ; 理解しようとする|りかいしようとする|try to understand ; ことが|ことが|doing ; 語学の|ごがくの|language study's ; 出発点なのである|しゅっぱつてんなのである|is the starting point
= Learning a foreign language is not merely memorising words; it is also coming to know the way of seeing of the people who speak it.
= In other words, trying to understand how others feel about the world is the starting point of language study.

:::read Step by step
1. **学ぶということは**: という turns the clause into a topic ("what it means to learn").
2. **覚えることではなく、知ることでもある**: こと as a noun in "not A but also B".
3. **感じているのかを**: an embedded question as an object.
4. **出発点なのである**: written explaining のだ.
:::
`,

  conditionals: `
### Conditions inside conditions

> もし|if ; 来月までに|らいげつまでに|by next month ; 資金が|しきんが|funds ; 集まれば|あつまれば|if gathered ; 計画は|けいかくは|plan ; 予定どおり|よていどおり|as scheduled ; 進められるが|すすめられるが|can go ahead, but ; 集まらなかったら|あつまらなかったら|if they aren't gathered ; 来年に|らいねんに|next year ; 延期せざるを得ない|えんきせざるをえない|have no choice but to postpone
> とはいえ|that said ; 、 ; 今のところ|いまのところ|so far ; 順調なので|じゅんちょうなので|going smoothly, so ; よほどのことがない限り|よほどのことがないかぎり|unless something major happens ; 問題ないだろう|もんだいないだろう|there'll probably be no problem
= If the funds are gathered by next month, the plan can go ahead as scheduled; if they aren't, we'll have no choice but to postpone until next year.
= That said, things are going smoothly so far, so unless something major happens there should be no problem.

:::read Step by step
1. **集まれば / 集まらなかったら**: ば and たら, both "if". The writer uses ば for the hopeful case, たら for the fallback.
2. **よほどのことがない限り**: 限り = "as long as; unless" (with a negative).
3. **問題ないだろう**: だろう softens the conclusion.
:::
`,

  quotes: `
### Reported speech in a news style

> 警察によると|けいさつによると|according to the police ; 男は|おとこは|the man ; 「財布を|「さいふを|wallet ; 落としたので|おとしたので|since I dropped ; 探していた」と|さがしていた」と|was looking for (quote) ; 話しており|はなしており|is saying, and ; 事件との|じけんとの|with the incident ; 関係は|かんけいは|connection ; ないものとみられている|ないものとみられている|is thought to be none
> 一方|いっぽう|meanwhile ; 、 ; 近所の|きんじょの|neighbourhood ; 住民からは|じゅうみんからは|from residents ; 「前にも|「まえにも|before too ; 同じ男を|おなじおとこを|same man ; 見かけた」という|みかけた」という|saw (quote) ; 声も|こえも|voices too ; 上がっている|あがっている|are being raised
= According to the police, the man says he was looking for a wallet he had dropped, and he is believed to have no connection to the incident.
= Meanwhile, some residents of the neighbourhood say they have seen the same man before.

:::read Step by step
1. **〜によると**: "according to", a compound particle.
2. **「…」と話しており**: the quote, と, and a verb in the continuing form (〜ており, formal ている).
3. **ないものとみられている**: "is thought to be (a thing that doesn't exist)": a news formula.
4. **「…」という声**: という connects a quote to the noun 声 (voices).
:::
`,

  keigo: `
### A formal email in full

> お世話になっております|おせわになっております|thank you for your continued support ; 。 ; 先日は|せんじつは|the other day ; お忙しい中|おいそがしいなか|despite your busy schedule ; お時間を|おじかんを|time ; いただき|いただき|receiving and ; 誠に|まことに|truly ; ありがとうございました|ありがとうございました|thank you
> さて|now then ; 、 ; ご依頼の|ごいらいの|requested ; 資料でございますが|しりょうでございますが|as for the materials ; 本日|ほんじつ|today ; 添付にて|てんぷにて|by attachment ; お送りいたします|おおくりいたします|I will send
> ご確認の上|ごかくにんのうえ|after confirming ; ご不明な点が|ごふめいなてんが|any unclear points ; ございましたら|ございましたら|if there are ; ご連絡いただけますと|ごれんらくいただけますと|if you could contact me ; 幸いです|さいわいです|I would be grateful
= Thank you for your continued support. Thank you very much for taking time out of your busy schedule the other day.
= Now, regarding the materials you requested, I will send them today as an attachment.
= After confirming them, I would be grateful if you could contact me should anything be unclear.

:::read Step by step
1. **お世話になっております**: the standard business greeting, a set phrase.
2. **いただき / お送りいたします / ご連絡いただけますと**: humble forms for the writer's own actions.
3. **ございましたら**: ございます in conditional (たら) form.
4. **幸いです**: "I would be fortunate", the polite way to end a request.
:::
`,

  "compound-particles": `
### A passage from a report

> 本調査は|ほんちょうさは|this survey ; 全国の|ぜんこくの|nationwide ; 二十歳以上の|はたちいじょうの|aged twenty or over ; 男女を|だんじょを|men and women ; 対象として|たいしょうとして|as subjects ; 実施されたものである|じっしされたものである|was carried out
> 結果によれば|けっかによれば|according to the results ; 年齢に関わらず|ねんれいにかかわらず|regardless of age ; 約七割の|やくななわりの|about 70% of ; 人が|ひとが|people ; 仕事に対する|しごとにたいする|toward work ; 満足度は|まんぞくどは|satisfaction ; 「どちらかといえば高い」と|「どちらかといえばたかい」と|"fairly high" (quote) ; 回答している|かいとうしている|answered
= This survey was conducted on men and women aged twenty or over across the country.
= According to the results, about 70% of people, regardless of age, answered that their satisfaction with work was "fairly high".

:::read Step by step
1. **対象として**: "as the target"; **実施されたものである**: passive + ものである (a formal "it is a thing that was done").
2. **結果によれば**: according to. **年齢に関わらず**: regardless of.
3. **仕事に対する満足度**: に対する before a noun ("satisfaction toward work").
:::
`,

  "formal-nouns": `
### A chain of formal nouns

> 人は|ひとは|people ; 迷っているうちに|まよっているうちに|while hesitating ; 本来|ほんらい|properly ; 自分で|じぶんで|by oneself ; 決めるべきことまで|きめるべきことまで|even matters one ought to decide ; 誰かに|だれかに|someone ; 決めてもらいたがる|きめてもらいたがる|wants to have decided for them ; ものだ|ものだ|tends to
> しかし|but ; 他人に|たにんに|to others ; 任せたところで|まかせたところで|even if you entrust ; 責任まで|せきにんまで|even the responsibility ; 任せられる|まかせられる|can hand over ; わけではない|わけではない|it doesn't mean
= While hesitating, people tend to want someone else to decide even the things they properly ought to decide for themselves.
= But even if you entrust a matter to others, that doesn't mean you can hand the responsibility over as well.

:::read Step by step
1. **迷っているうちに**: うち = "while it's still the case that I'm hesitating".
2. **決めるべきこと**: [決めるべき] + こと, "a matter one ought to decide"; **まで** = "even".
3. **もらいたがる**: もらう + たがる = "(third person) wants to receive"; **ものだ** = a general tendency.
4. **任せたところで**: 〜たところで = "even if you do (it)", followed by a negative-sounding conclusion.
5. **わけではない**: "it does not follow that…".
:::
`,

  "reading-narration": `
### A full scene

> 彼が|かれが|he ; 部屋に|へやに|room ; 入ってきたとき|はいってきたとき|when he entered ; 私は|わたしは|I ; すでに|already ; 三時間も|さんじかんも|as much as three hours ; 待っていた|まっていた|had been waiting
> 何か|なにか|something ; 言おうとして|いおうとして|trying to say ; 彼は|かれは|he ; 口を|くちを|mouth ; 開き|ひらき|opened and ; 結局|けっきょく|in the end ; 何も|なにも|nothing ; 言わずに|いわずに|without saying ; 閉じた|とじた|closed
> 長い|ながい|long ; 沈黙の|ちんもくの|silence's ; 後|あと|after ; 私が|わたしが|I ; 先に|さきに|first ; 口を|くちを|mouth ; 開いた|ひらいた|opened
> 「来てくれたんだね」|「きてくれたんだね」|"you came for me, didn't you"
> 「約束だからな」|「やくそくだからな」|"it's a promise, you see" ; 彼は|かれは|he ; かすれた|hoarse ; 声で|こえで|in a voice ; 答えた|こたえた|answered
= By the time he came into the room, I had already been waiting a full three hours.
= He opened his mouth as if to say something, and in the end closed it again without a word.
= After a long silence, I was the one to speak first.
= "You came after all."
= "I promised, didn't I," he answered in a hoarse voice.

:::read Step by step
1. **入ってきたとき…待っていた**: とき clause, then ていた (was in the state of waiting).
2. **言おうとして**: trying to; **言わずに**: without. Two forms of "not saying".
3. **来てくれたんだね**: the speaker's gratitude (〜てくれる), with explaining んだ and ね (seeking confirmation).
4. **約束だからな**: から + な gives a gruff, masculine reply.
:::
`,

  "reading-method": `
### A news-style sentence, step by step

> 政府は|せいふは|the government ; 先月|せんげつ|last month ; 発表した|はっぴょうした|announced ; 新しい|あたらしい|new ; 経済対策の|けいざいたいさくの|economic measures' ; 一環として|いっかんとして|as part ; 来年度から|らいねんどから|from next fiscal year ; 一定の|いっていの|certain ; 条件を|じょうけんを|conditions ; 満たす|みたす|meet ; 中小企業に対し|ちゅうしょうきぎょうにたいし|to small and medium firms ; 税の|ぜいの|tax ; 一部を|いちぶを|part ; 減額する|げんがくする|reduce ; 方針を|ほうしんを|policy ; 固めた|かためた|firmed up
= The government has settled on a policy of reducing part of the tax on small and medium-sized businesses that meet certain conditions from the next fiscal year, as part of the new economic measures announced last month.

:::read Step by step
1. Main verb: **固めた** ("firmed up"). Subject: **政府は**. Object: **方針を** ("policy").
2. 方針 is described by a long clause: **来年度から…中小企業に対し税の一部を減額する** ("to reduce part of the tax to … firms from next fiscal year").
3. Inside it: 中小企業 is described by **一定の条件を満たす** ("that meet certain conditions").
4. **発表した新しい経済対策の一環として**: a separate piece, "as part of the new economic measures announced (last month)".
5. Skeleton: 政府は、[ 経済対策の一環として、 [ 中小企業に対し税の一部を減額する ] 方針を ] 固めた.
:::

Compare how the same facts read in a casual retelling:

> 政府がさ|せいふがさ|the government, you know ; 来年から|らいねんから|from next year ; 条件を|じょうけんを|conditions ; 満たしてる|みたしてる|meeting ; 中小企業の|ちゅうしょうきぎょうの|small business's ; 税金を|ぜいきんを|taxes ; 少し|すこし|a little ; 安くするって|やすくするって|will lower (quote) ; 決めたらしいよ|きめたらしいよ|apparently decided
= You know, the government has apparently decided to lower taxes a bit next year for small businesses that qualify.

:::read Step by step
1. Same content, completely different surface: **さ** (filler), **って** (quote), **らしい** (hearsay), **よ** (telling).
2. If you can parse the formal sentence, you can parse this one. Both are clauses in front of a noun and a final verb.
:::
`,
};
