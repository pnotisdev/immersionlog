import type { Lesson } from "../types";

/** Added Part 3 lessons: listing, purpose and cause, timing, thinking and feeling, conjunctions. */

export const listing: Lesson = {
  slug: "listing",
  title: "Listing and choosing: と, や, とか, か, たり",
  description:
    "Every way of putting items together: complete lists, example lists, 'A or B', 'both A and B', and listing actions with 〜たり〜たり. Includes which to use when you mean 'all' and when you mean 'for example'.",
  points: ["n5-to-and", "n5-ya", "n4-toka", "n5-tari-tari", "n5-ka-or", "n5-nado"],
  body: `
Japanese has several words for "and", and they are not interchangeable. The main question: **is the list complete or just examples?**

## Complete lists: と

**と** joins nouns in a closed list: exactly these, no more.

> 犬|いぬ|dog ; *と|and ; 猫|ねこ|cat ; を ; 飼っている|かっている|keep
= I keep a dog and a cat. (just those two)

と joins **nouns only**, never verbs or sentences. For those you use other tools (て-form, ~し, ~たり).

## Example lists: や, とか, など

**や** joins nouns as examples: "A and B and similar things".

> りんご|apple ; *や|and (e.g.) ; みかん|mandarin ; を ; 買った|かった|bought
= I bought apples, mandarins and so on.

**とか** is the casual version, and it can also join verbs and clauses:

> 映画|えいが|movie ; *とか|or the like ; 本|ほん|book ; *とか|or the like ; が ; 好き|すき|liked
= I like things like movies and books.

> 休みの日|やすみのひ|day off ; は ; 寝る|ねる|sleep ; *とか|or ; 掃除する|そうじする|clean ; *とか|or ; している|do
= On my days off I do things like sleep and clean.

**など** ("etcetera") goes after the last item:

> りんご|apple ; や ; みかん|mandarin ; *など|and so on
= apples, mandarins, and so on

You may combine: AやBなど. For three or more items, 〜や〜や〜など.

## Stacking with に

A casual way to pile things up, mostly in speech and food menus:

> サンドイッチ ; *に|and ; ミルク ; *に|and ; コーヒー
= A sandwich, and milk, and coffee!
+ The list builds up, with a feeling of "and also, and also".

## Either or: か, または, それとも

**か** between nouns means "or":

> コーヒー ; *か|or ; 紅茶|こうちゃ|tea ; を ; ください
= Coffee or tea, please. (one of them)

For choices in a question, use **それとも**: 

> コーヒー ; です ; か ; *それとも|or ; 紅茶|こうちゃ|tea ; です ; か
= Is it coffee or tea?

**A か B か**: used for "whether A or B":

> 行く|いく|go ; *か|or ; 行かない|いかない|not go ; *か|(whether) ; 決めて|きめて|decide ; いない
= I haven't decided whether to go or not.

## Both and neither: も〜も

**も〜も** means "both ... and" in a positive sentence and "neither ... nor" in a negative one.

> 犬|いぬ|dog ; *も|both ; 猫|ねこ|cat ; *も|and ; 好き|すき|liked
= I like both dogs and cats.

> 肉|にく|meat ; *も|neither ; 魚|さかな|fish ; *も|nor ; 食べない|たべない|eat
= I eat neither meat nor fish.

## Listing actions: 〜たり〜たり

For verbs, use the **たり** form: the past form plus り (食べた → 食べたり). Two or more actions, as examples of what you do, followed by する.

> 週末|しゅうまつ|weekend ; は ; 本|ほん|book ; を ; 読んだり|よんだり|read ; 映画|えいが|movie ; を ; 見たり|みたり|see ; *する*
= On weekends I read books, watch movies and so on.

> 食べたり|たべたり|eat ; 飲んだり|のんだり|drink ; *して|do ; 遊んだ|あそんだ|played
= We ate, drank and so on and had fun.

It also works with opposites to show repetition or alternation:

> 行ったり|いったり|go ; 来たり|きたり|come ; *している|are doing
= He keeps going back and forth.

> 雨|あめ|rain ; が ; 降ったり|ふったり|fall ; 止んだり|やんだり|stop ; *している|is
= It's raining on and off.

Notice the structure: each verb is in the past form plus り, and する comes last, carrying the tense. The sentence lists **examples**, not everything you do.

## With adjectives and nouns

たり also works with adjectives and だ:

> 暑かったり|あつかったり|hot ; 寒かったり|さむかったり|cold ; *する*
= It's hot sometimes and cold sometimes.

## Comparison of list words

| Word | List type | Joins | Feel |
| --- | --- | --- | --- |
| と | complete | nouns | neutral |
| や | examples | nouns | neutral |
| とか | examples | nouns, verbs, clauses | casual |
| など | etc. | after last item | neutral |
| か | choice (or) | nouns, clauses | neutral |
| も〜も | both / neither | nouns | neutral |
| 〜たり〜たり | examples of actions | verbs, adjectives | neutral |
| て-form | sequence of actions | verbs | neutral |

## Key points

- **と** = complete list of nouns. **や / とか / など** = examples.
- **か** = or. **それとも** = or (in a question).
- **も〜も** = both (positive) / neither (negative).
- **〜たり〜たり + する** lists example actions.
`,
};

export const purposeCause: Lesson = {
  slug: "purpose-cause",
  title: "Purpose and cause: ために, ように, せいで, おかげで",
  description:
    "'In order to' and 'so that', 'because of' and 'thanks to'. Four patterns that look alike and that choose between deliberate action and natural outcome, good and bad results.",
  points: ["n4-tame-ni", "n4-you-ni", "n4-no-ni-purpose", "n4-node", "n4-noni"],
  body: `
Some patterns say *why* you do something, and some say *why something happened*. This lesson separates purpose from cause.

## ために: for the purpose of

**Dictionary form + ために** or **Noun + の + ために** = "in order to / for the sake of".

> 日本語|にほんご|Japanese ; を ; 勉強する|べんきょうする|study ; *ために|in order to ; 日本|にほん|Japan ; に ; 来た|きた|came
= I came to Japan in order to study Japanese.

> 家族|かぞく|family ; *のために|for the sake of ; 働く|はたらく|work
= I work for my family.

Rules for the purpose use of ために:

- The same person does both parts (I study; I came).
- The first verb is a deliberate action you can choose to do.

## ように: so that (a state)

**ように** shows a purpose that is a **state or result**, not a deliberate act. It's used with potential verbs, negatives, and things that happen on their own.

> 忘れない|わすれない|forget not ; *ように|so that ; メモ|note ; を ; 取る|とる|take
= I take notes so that I won't forget.

> よく|well ; 見える|みえる|can see ; *ように|so that ; 前|まえ|front ; に ; 座った|すわった|sat
= I sat in front so I could see well.

> 風邪|かぜ|cold ; を ; 引かない|ひかない|catch not ; *ように|so that ; 気をつけて|きをつけて|be careful ; ください
= Be careful not to catch a cold.

**ために vs ように** — ask: *is the first part something you choose to do?*

| | ために | ように |
| --- | --- | --- |
| 勉強するために来た | ✓ you choose to study | |
| 分かるように説明する | | ✓ understanding is a result |
| 風邪を引かないように | | ✓ negative: not an act |
| 日本語が話せるように | | ✓ potential: a state |

## のに: the tool for the job

**Dictionary form + のに** (with no contrast) says what something is used for.

> この ; ナイフ ; は ; パン|bread ; を ; 切る|きる|cut ; *のに|for ; 使う|つかう|use
= I use this knife for cutting bread.

> 東京|とうきょう|Tokyo ; に ; 行く|いく|go ; *のに|(for the purpose) ; 三時間|さんじかん|three hours ; かかる|take
= It takes three hours to get to Tokyo.

This のに is not the "although" のに from before. Context settles it: after a verb of using or taking time, it's a purpose.

## せいで and おかげで: cause with a judgement

Both mean "because of", but one blames and the other thanks.

**せいで** (せい: "fault") — bad outcome:

> 雨|あめ|rain ; *のせいで|because of ; 試合|しあい|match ; が ; 中止|ちゅうし|cancelled ; に ; なった|became
= The match was cancelled because of the rain.

> 寝坊|ねぼう|oversleeping ; した ; *せいで|because ; 遅刻|ちこく|lateness ; した
= I was late because I overslept.

**おかげで** (おかげ: "shade, benefit") — good outcome:

> 先生|せんせい|teacher ; *のおかげで|thanks to ; 合格|ごうかく|pass ; できた|were able
= Thanks to my teacher, I passed.

> 友達|ともだち|friend ; が ; 手伝って|てつだって|helped ; くれた ; *おかげで|thanks to ; 早く|はやく|early ; 終わった|おわった|finished
= Thanks to my friend helping, it was done early.

Before a noun you add の; before a verb or adjective, use the plain form (nouns and な-adjectives take な or の).

:::key Blame or thanks
せいで = something went wrong because of X. おかげで = something went right because of X. They are not neutral. For a neutral cause, use ので or から.
:::

## による and によって: caused by

In writing, **によって / による** marks cause, means and the agent in a passive:

> 事故|じこ|accident ; *によって|due to ; 電車|でんしゃ|train ; が ; 遅れた|おくれた|was delayed
= The train was delayed because of an accident.

> 事故|じこ|accident ; *による|due to ; 遅れ|おくれ|delay
= a delay caused by an accident

## ばかりに: because of just that

**ばかりに** is a strong "all because of" — usually regretful:

> 一言|ひとこと|one word ; 言った|いった|said ; *ばかりに|just because ; 嫌われた|きらわれた|was disliked
= I was disliked just because of one remark.

## Key points

- **ために**: deliberate purpose. **ように**: purpose that is a state or outcome.
- **のに** after a verb of using or taking time: "for (doing)".
- **せいで**: bad cause. **おかげで**: good cause.
- **によって / による**: formal cause or agent.
`,
};

export const timing: Lesson = {
  slug: "timing",
  title: "Exact timing: とたん, 次第, たびに, 最中, 以来",
  description:
    "Patterns for the moment something happens: 'the instant that', 'as soon as', 'every time', 'in the middle of', 'ever since'. Short and common in stories and in practical conversation.",
  points: ["n4-ta-bakari", "n4-uchi-ni", "n4-made-ni"],
  body: `
These patterns pin down *when*, more precisely than とき or あとで. Each takes a plain-form verb (or noun) and attaches a time word.

## たとたん: the instant that

**Past plain form + とたん(に)** = "the very moment that". The second event is surprising or sudden.

> 家|いえ|home ; を ; 出た|でた|left ; *とたん|the instant ; 雨|あめ|rain ; が ; 降り出した|ふりだした|began to fall
= The moment I left the house, it began to rain.

> 目|め|eyes ; が ; 合った|あった|met ; *とたん|the instant ; 彼女|かのじょ|she ; は ; 笑った|わらった|smiled
= The instant our eyes met, she smiled.

Because it is a surprising fact, the second half cannot be an intention or request.

## 次第: as soon as

**Polite stem + 次第** = "as soon as". Formal; often used for promises and plans.

> 駅|えき|station ; に ; 着き|つき|arrive ; *次第|しだい|as soon as ; 電話|でんわ|call ; します
= I'll call as soon as I arrive at the station.

> 分かり|わかり|understand ; *次第|しだい|as soon as ; ご連絡|ごれんらく|contact ; します
= I'll contact you as soon as I know.

Unlike とたん, 次第 looks forward: the second half is the speaker's action.

## たびに: every time

**Dictionary form + たびに** (or Noun + の + たびに) = "every time".

> 日本|にほん|Japan ; に ; 行く|いく|go ; *たびに|every time ; ラーメン|ramen ; を ; 食べる|たべる|eat
= Every time I go to Japan, I eat ramen.

> この ; 写真|しゃしん|photo ; を ; 見る|みる|see ; *たびに|every time ; 思い出す|おもいだす|remember
= Every time I see this photo, I remember.

## ごとに: at every interval

**Number + ごとに** or **Noun + ごとに** = "every..., at each...":

> 一時間|いちじかん|one hour ; *ごとに|every ; 休む|やすむ|rest
= I take a break every hour.

> 駅|えき|station ; *ごとに|at each ; 停まる|とまる|stop
= It stops at every station.

## 最中: in the middle of

**Verb + ている + 最中(に)** or **Noun + の + 最中に** emphasises that something is in full swing, usually when an interruption occurs.

> 食事|しょくじ|meal ; の ; *最中|さいちゅう|in the middle ; に ; 電話|でんわ|phone ; が ; 鳴った|なった|rang
= The phone rang in the middle of our meal.

> 試験|しけん|exam ; を ; 受けている|うけている|taking ; *最中|さいちゅう|in the middle ; に ; 地震|じしん|earthquake ; が ; あった
= There was an earthquake in the middle of the exam.

## 途中: on the way

**Noun + の + 途中で** or **Verb + 途中で** = "on the way to / in the middle of".

> 学校|がっこう|school ; へ ; 行く|いく|go ; *途中|とちゅう|on the way ; で ; 友達|ともだち|friend ; に ; 会った|あった|met
= I met a friend on my way to school.

## 以来: ever since

**て-form + 以来** = "ever since...". It states a continuous state beginning at that time.

> 日本|にほん|Japan ; に ; 来て|きて|came ; *以来|いらい|since ; 毎日|まいにち|every day ; 日本語|にほんご|Japanese ; を ; 話している|はなしている|speak
= Since coming to Japan I've spoken Japanese every day.

## 前に・後で: a reminder

- 食べる前に (before eating): dictionary form + 前に
- 食べた後で (after eating): past form + 後で
- 食べてから (after eating): て-form + から
- 食べる最中に (in the middle of eating)

## ないうちに: before it changes

**Negative form + うちに** means "before it becomes the case that":

> 忘れ|わすれ|forget ; *ないうちに|before ; メモ|note ; して|make ; おく
= I'll jot it down before I forget.

> 暗く|くらく|dark ; *ならないうちに|before ; 帰ろう|かえろう|let's go home ; 
= Let's go home before it gets dark.

## Key points

- **たとたん**: the instant that (surprising). **次第**: as soon as (forward-looking).
- **たびに**: every time. **ごとに**: at every.
- **最中**: in the middle of. **途中**: on the way. **以来**: ever since.
- **ないうちに**: before it changes.
`,
};

export const thinkingFeeling: Lesson = {
  slug: "thinking-feeling",
  title: "Thinking, feeling and emotion words",
  description:
    "How to report opinions and feelings: と思う, と考える, と感じる, 気がする, and the strict rule about who can feel what: emotion adjectives for 'I' and the 〜がる form for everyone else.",
  points: ["n4-to-omou", "n4-garu", "n4-you-to-omou"],
  body: `
## 思う, 考える, 感じる

All three take a quote with **と**, but they feel different.

| Verb | Feel | Example |
| --- | --- | --- |
| と思う | I think (intuitive, soft) | 彼は来ると思う。 |
| と考える | I consider (reasoned) | これは問題だと考える。 |
| と感じる | I feel that (impression) | 疲れていると感じる。 |
| 気がする | I have a feeling | 彼が来る気がする。 |

> 彼|かれ|he ; は ; もう ; 来ない|こない|doesn't come ; *と思う|とおもう|I think
= I think he won't come now.

> この ; 問題|もんだい|problem ; は ; 難しい|むずかしい|difficult ; *と考えている|とかんがえている|consider
= I consider this problem difficult.

> 誰|だれ|someone ; か ; に ; 見られている|みられている|is being watched ; *気がする|きがする|I have a feeling
= I feel like someone is watching me.

### 〜ような気がする

Add ような to make a looser impression:

> どこ|where ; か ; で ; 会った|あった|met ; *ような気がする|ようなきがする|feel like
= I feel like we've met somewhere.

## Who is thinking?

You think. **思う** reports *your* thought. For someone else's thought, use **思っている** with a quote, or a hearsay form:

> 彼|かれ|he ; は ; 勝てる|かてる|can win ; *と思っている|とおもっている|thinks
= He thinks he can win.

> 先生|せんせい|teacher ; は ; 難しい|むずかしい|difficult ; *と言っている|といっている|says
= The teacher says it's difficult.

## Feeling words: the person rule

This is a rule English doesn't have. **Emotion and sensation adjectives** (嬉しい, 悲しい, 寂しい, 怖い, 欲しい, 痛い, 暑い, 寒い) describe how **you** feel. You can use them in plain form for **yourself**:

> 私|わたし|I ; は ; *嬉しい|うれしい|happy
= I'm happy.

For another person, you cannot state their inner feelings as fact. You report signs of them with **〜がる**, or add a hearsay marker (〜そうだ, 〜らしい, 〜ようだ).

> 彼|かれ|he ; は ; *嬉しがっている|うれしがっている|seems happy
= He seems happy.

> 彼|かれ|he ; は ; 嬉し|うれし|happy ; *そうだ|looks
= He looks happy.

> 子供|こども|child ; が ; おもちゃ ; を ; *欲しがっている|ほしがっている|wants
= The child wants a toy.

**〜がる** attaches to the adjective stem (い removed) and works like a verb.

| First person | Third person |
| --- | --- |
| 私は嬉しい | 彼は嬉しがっている |
| 私は欲しい | 彼は欲しがっている |
| 私は行きたい | 彼は行きたがっている |
| 私は怖い | 彼は怖がっている |

> 私|わたし|I ; は ; 犬|いぬ|dog ; が ; *怖い|こわい|scary
> 彼|かれ|he ; は ; 犬|いぬ|dog ; を ; *怖がっている|こわがっている|fears
= I'm scared of dogs. / He's afraid of dogs.

Notice that the particle changes: 怖い takes が (a feeling toward something), 怖がる takes を (an action).

:::warn Why it matters in books
In first-person narration, you will see bare emotion adjectives: 悲しかった (I was sad). In third-person narration, authors use 悲しそうだった, 悲しんでいた (he was grieving), or let the character's thoughts speak. If an emotion adjective appears for another person in a novel, it's usually inside their thoughts or a free-indirect passage.
:::

## Reason for a feeling: て-form

A feeling's cause is often the て-form:

> 会えて|あえて|meeting ; *嬉しい|うれしい|happy
= I'm glad to see you.

> 試験|しけん|exam ; に ; 落ちて|おちて|failing ; *悲しい|かなしい|sad
= I'm sad that I failed the exam.

> 話|はなし|story ; を ; 聞いて|きいて|hearing ; *驚いた|おどろいた|was surprised
= I was surprised to hear the story.

## Key points

- **と思う** (soft), **と考える** (reasoned), **と感じる** (impression), **気がする** (hunch).
- **思っている** for other people's thoughts.
- Emotion adjectives describe **you**. For others use **〜がる**, **〜そうだ** or hearsay.
- The cause of a feeling is the **て-form**: 会えて嬉しい.
`,
};

export const conjunctions: Lesson = {
  slug: "conjunctions",
  title: "Conjunctions: the words that start sentences",
  description:
    "A map of the connecting words at the start of a sentence, by what they do: add, order, contrast, conclude, choose, explain, change the subject and concede. With the casual and written versions side by side.",
  points: ["n5-soshite", "n4-sorede", "n4-dakara", "n4-soreni", "n4-soretomo"],
  body: `
In an earlier lesson you saw a handful of sentence-starters. Here is the whole map. A conjunction at the start of a sentence tells you how it relates to the one before, so noticing it lets you predict what's coming.

## Adding

| Word | Meaning | Feel |
| --- | --- | --- |
| そして | and then; and | neutral, flexible |
| それに | besides | adds another reason |
| しかも | what's more; and on top | adds surprise |
| さらに | furthermore | formal, writing |
| また | also; again | neutral |

> 彼|かれ|he ; は ; 頭|あたま|head ; が ; いい ; 。 ; *しかも|and what's more ; ハンサム ; だ
= He's smart. And what's more, he's handsome.

## Ordering

| Word | Meaning |
| --- | --- |
| まず | first (of all) |
| 次に (つぎに) | next |
| それから | after that |
| 最後に (さいごに) | finally |
| そのあと | after that |

> *まず|first ; 手|て|hands ; を ; 洗って|あらって|wash ; ください ; 。 ; *次に|つぎに|next ; 食べて|たべて|eat ; ください
= First wash your hands. Next, please eat.

## Contrast

| Word | Meaning | Register |
| --- | --- | --- |
| でも | but | casual |
| しかし | however | formal, written |
| だが | but | written, literary |
| けれども / けど | but, though | spoken |
| ところが | but, to my surprise | unexpected turn |
| それなのに | even so | frustration |
| それでも | even so | persistence |
| ただし | however (a condition) | adds a caveat |

> 勉強した|べんきょうした|studied ; 。 ; *それなのに|even so ; 落ちた|おちた|failed
= I studied. Even so, I failed.

> 行く|いく|go ; ！ ; *ただし|however ; 雨|あめ|rain ; が ; 降らなければ|ふらなければ|if it doesn't ; ね
= I'll go, provided it doesn't rain.

## Result and conclusion

| Word | Meaning | Register |
| --- | --- | --- |
| だから | so | casual |
| ですから | so | polite |
| それで | and so | neutral; asks "so what happened?" |
| そのため | for that reason | formal |
| したがって | therefore | formal, writing |
| よって | thus | very formal |
| すると | whereupon | narrative sequence |

> 雨|あめ|rain ; が ; 降った|ふった|fell ; 。 ; *だから|so ; 家|いえ|home ; に ; いた|stayed
= It rained, so I stayed home.

## Choosing

| Word | Meaning |
| --- | --- |
| または | or (formal) |
| あるいは | or, alternatively |
| それとも | or (in a question) |
| もしくは | or (in documents) |

## Explaining

| Word | Meaning | Use |
| --- | --- | --- |
| つまり | in other words | restating |
| たとえば | for example | |
| なぜなら | because (it is that) | gives the reason after the claim |
| というのは | the reason is that | explaining |
| 要するに | in short | summarising |

> 彼|かれ|he ; は ; 来ない|こない|doesn't come ; 。 ; *なぜなら|because ; 病気|びょうき|ill ; だ ; から
= He isn't coming, because he is ill.
+ Notice that なぜなら is paired with から at the end.

## Changing the subject

| Word | Meaning |
| --- | --- |
| ところで | by the way |
| さて | now then |
| では / じゃあ | well then |
| それでは | in that case |

> *ところで|by the way ; 明日|あした|tomorrow ; は ; 暇|ひま|free ; ですか
= By the way, are you free tomorrow?

## Conceding

| Word | Meaning |
| --- | --- |
| もっとも | though, to be fair |
| とはいえ | that said |
| とはいうものの | even so |
| だとしても | even if so |

## Casual だって

In casual speech **だって** has two common uses:

1. **"But" / "because"** (making an excuse): だって、眠かったんだもん。("But I was sleepy!")
2. **"Even"**: 子供だって分かる ("even a child gets it").

> *だって|but ; 知ら|しら|know ; なかった|didn't ; もん
= But I didn't know!

## Reading tip

When you see a conjunction, you know before the sentence is over whether it adds, opposes, concludes or explains. Mark them as you read; they are the skeleton of an argument.

## Key points

- Conjunctions say how a sentence relates to the last one.
- **しかし / だが** (written), **でも** (casual): contrast.
- **だから / ですから / したがって**: conclusion, from casual to formal.
- **なぜなら** goes with a final **から**.
- **だって** in speech means "but" or "even".
`,
};
