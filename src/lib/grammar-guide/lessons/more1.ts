import type { Lesson } from "../types";

/** Added foundations: nouns and names, particle contrasts, politeness, counting, time, the verb chart, adverbs. */

export const nouns: Lesson = {
  slug: "nouns-names",
  title: "Nouns, pronouns and name endings",
  description:
    "Why Japanese nouns never change for number or gender, how plurals are hinted at, the many words for 'I' and 'you', and the endings (さん, くん, ちゃん, 様, 先生) that you attach to every name.",
  points: ["n5-name-suffixes", "n5-tachi", "n5-o-go"],
  body: `
Good news first: Japanese nouns are the simplest part of the language. They never change shape.

## No plural, no gender, no "a" and "the"

> 本|ほん|book ; を ; 買った|かった|bought
= I bought a book / the book / books / the books.

The same 本 covers one book, many books, "a" book and "the" book. Context decides, and usually that is enough. When you do need to be clear, you add a number or a counting word:

> 本|ほん|books ; を ; 三冊|さんさつ|three (volumes) ; 買った|かった|bought
= I bought three books.

:::note Why this works
Japanese leaves out what the situation already tells you. If it matters how many, a number appears. If it does not matter, nothing does. Do not look for hidden plurals.
:::

## Hinting at a group: 達 and 々

**達** (たち) after a person word means "that person and their group":

> 子供|こども|child ; *達|たち|(group) ; が ; 遊んで|あそんで|playing ; いる
= The children are playing.

> 先生|せんせい|teacher ; *達|たち|(group) ; は ; 会議|かいぎ|meeting ; に ; 出ている|でている|are attending
= The teachers are attending the meeting.

> 田中|たなか|Tanaka ; さん ; *達|たち|and the others
= Tanaka and the others / Tanaka's group

達 is for people and, with a friendly feel, for animals. It is not a true plural; it means "the group around X". There are also two related patterns:

- **Repeating a noun** can make it plural-ish: 人々 (ひとびと, people), 山々 (やまやま, mountains), 国々 (くにぐに, countries). The 々 mark just repeats the kanji before it.
- **Words like 皆 (みんな), 全部, たくさん** say "all" or "many" outright.

> *皆|みんな|everyone ; で ; 食べよう|たべよう|let's eat
= Let's all eat together.

## Pronouns are just nouns

Japanese has many words for "I" and "you", and each one carries a personality. They behave like ordinary nouns: they take particles and never change for case.

| | Word | Feel |
| --- | --- | --- |
| I | 私 (わたし) | neutral, polite, any speaker |
| | 僕 (ぼく) | boyish, gentle, men |
| | 俺 (おれ) | rough, masculine, casual |
| | あたし | casual, feminine |
| you | あなた | polite, but sounds distant or intimate |
| | 君 (きみ) | to a junior or equal, mostly men |
| | お前 (おまえ) | rough, to someone close or below |
| he / she | 彼 (かれ) / 彼女 (かのじょ) | also "boyfriend" / "girlfriend" |

> 僕|ぼく|I ; は ; 学生|がくせい|student ; です
= I'm a student.

:::key Avoid "you"
In real conversation Japanese rarely says "you". People use the other person's name, title or role instead: 田中さん, 先生, お母さん, お客様. Calling a stranger あなた can sound cold or even rude. Translations put in "you" to make the English work. Do not carry that habit back.
:::

## Name endings

Almost every name appears with an ending. Choosing the wrong one is rude, and dropping it entirely is intimate or rude, depending on the relationship.

| Ending | Use |
| --- | --- |
| さん | the default: polite, for anyone, men or women |
| 様 (さま) | very polite: customers, formal letters, deities |
| くん (君) | boys and younger men; seniors to juniors |
| ちゃん | children, close friends, pets; cute or affectionate |
| 先生 (せんせい) | teachers, doctors, writers, lawyers |
| 先輩 (せんぱい) | someone ahead of you at school or work |
| 後輩 (こうはい) | someone behind you |

> 田中|たなか|Tanaka ; *さん|(polite)
= Mr./Ms. Tanaka

> 花子|はなこ|Hanako ; *ちゃん|(affectionate)
= Hanako (dear Hanako)

> 山田|やまだ|Yamada ; *先生|せんせい|teacher
= Teacher Yamada / Dr. Yamada

Never attach さん to **your own** name: 私は田中です, not 私は田中さんです. The endings raise other people.

### Family words: inside and outside

Japanese has two sets of family words. Use the plain word for **your own** family when talking to outsiders, and the respectful word for **someone else's**.

| | My own | Someone else's |
| --- | --- | --- |
| mother | 母 (はは) | お母さん |
| father | 父 (ちち) | お父さん |
| older sister | 姉 (あね) | お姉さん |
| older brother | 兄 (あに) | お兄さん |
| younger sister | 妹 (いもうと) | 妹さん |
| younger brother | 弟 (おとうと) | 弟さん |

> 私|わたし|my ; の ; *母|はは|mother ; は ; 先生|せんせい|teacher ; です
= My mother is a teacher.

> 田中|たなか|Tanaka ; さん ; の ; *お母さん|おかあさん|mother ; は ; お元気|おげんき|well ; ですか
= Is Mr. Tanaka's mother well?

Inside the family you use the お〜さん words to address them directly (お母さん, ねえ！). 

## お and ご: the polite prefix

**お** (or **ご** before Chinese-origin words) added to a noun makes it polite, or just standard for certain words.

> *お茶|おちゃ|tea ; を ; どうぞ
= Please have some tea.

> *ご飯|ごはん|meal / rice ; を ; 食べた|たべた|ate
= I ate. (ご飯 is the standard word for a meal and for cooked rice.)

Some words always carry it (お金, お茶, お水, ご飯). With others it shows respect for the other person's thing: お名前 (your name), ご家族 (your family). Never use it on your own things in a polite sense.

## Making nouns into verbs: する

A noun plus **する** is a verb: 勉強する (study), 運転する (drive), 結婚する (marry). The noun can even take を:

> 日本語|にほんご|Japanese ; を ; 勉強する|べんきょうする|study
> 日本語|にほんご|Japanese ; の ; 勉強|べんきょう|study ; を ; する
= I study Japanese.

You will meet hundreds of these. They all conjugate like する.

## Key points

- Nouns never change: no plural, gender or articles. Add a number only when it matters.
- **達** means "and the group"; **々** repeats a word; **皆** means everyone.
- "I" and "you" words are choices of character. Avoid "you" and use names and roles.
- Always use endings: **さん** by default, **ちゃん** and **くん** for closeness, **様** for formality. Never on yourself.
- **Own family**: 母, 父. **Others' family**: お母さん, お父さん.
`,
};

export const particlesCompared: Lesson = {
  slug: "particles-compared",
  title: "Particles side by side: に, で, へ, と, を and から",
  description:
    "The pairs that cause most beginner mistakes, placed next to each other: に vs で, に vs と, を vs に, へ vs に, から vs で. For each one, a question to ask yourself that settles which to use.",
  points: ["n5-ni-location", "n5-de-place", "n5-to-with", "n5-ni-target", "n5-he"],
  body: `
Once you know what each particle does, the trouble starts: several seem to mean the same English word. This lesson takes the confusing pairs one at a time. For each, there is one question you can ask yourself.

## に vs で: place

> 公園|こうえん|park ; *に|at ; いる
> 公園|こうえん|park ; *で|at ; 遊ぶ|あそぶ|play
= I'm in the park. / I play in the park.

**Question: is something being *done* there, or does something just *exist* there?**

- Existence, residence, arrival: **に** (いる, ある, 住む, 着く, 座る, 泊まる)
- An action taking place: **で** (食べる, 働く, 勉強する, 買う, 会う)

> 東京|とうきょう|Tokyo ; *に|in ; 住んでいる|すんでいる|live
> 東京|とうきょう|Tokyo ; *で|in ; 働いている|はたらいている|work
= I live in Tokyo. / I work in Tokyo.

## に vs で: time and means

- **に**: a point in time (七時に, 日曜日に).
- **で**: a total or limit (三日で, 五分で: "in three days", "in five minutes"), and means (バスで, 手で).

> 三日|みっか|three days ; *で|in ; 終わった|おわった|finished
= It was done in three days.

## に vs と: with whom

Both can mean "with" or "to", but they behave differently.

**と** is mutual: both parties do the thing together or to each other.
**に** is one-directional: one party acts toward the other.

> 友達|ともだち|friend ; *と|with ; 会った|あった|met
= I met a friend (we met each other).

> 友達|ともだち|friend ; *に|(target) ; 会った|あった|met
= I met a friend (I went to see him).

For many verbs, both are used, and the difference is small. The clear cases:

| Mutual (と) | One-way (に) |
| --- | --- |
| 結婚する (marry) | 話しかける (speak to) |
| 戦う (fight) | 電話する (phone) |
| 相談する (consult) | 教える (teach) |
| 別れる (part from) | あげる (give) |

> 先生|せんせい|teacher ; *に|(target) ; 相談した|そうだんした|consulted
> 友達|ともだち|friend ; *と|with ; 相談した|そうだんした|talked over
= I consulted my teacher. / I discussed it with my friend.

## を vs に: with verbs of motion and contact

Some verbs take **に** for the thing they reach, where English might use a direct object:

| Verb | Particle | Example |
| --- | --- | --- |
| 乗る (ride) | に | 電車に乗る |
| 会う (meet) | に | 友達に会う |
| 入る (enter) | に | 部屋に入る |
| 勝つ (win) | に | 試合に勝つ |
| 似ている (resemble) | に | 母に似ている |
| 触る (touch) | に | 犬に触る |

**を** marks things that pass through or leave:

| Verb | Particle | Example |
| --- | --- | --- |
| 出る (leave) | を | 家を出る |
| 降りる (get off) | を | 電車を降りる |
| 歩く (walk) | を | 道を歩く |
| 渡る (cross) | を | 橋を渡る |

> 電車|でんしゃ|train ; *に|(onto) ; 乗る|のる|get on
> 電車|でんしゃ|train ; *を|(off) ; 降りる|おりる|get off
= I get on the train. / I get off the train.

These are not rules to memorise at once. Learn each verb with its particle as one unit: 電車に乗る, not 乗る.

## に vs へ: destination

For destinations, they are interchangeable: 学校に行く = 学校へ行く. **へ** puts a little more weight on the direction; **に** on arrival. Only **に** works for fixed points that are not destinations (時間に, 椅子に座る, 友達に).

## から vs で: source and material

**から** marks where something *starts* or comes from: a person, a place, a time, a raw material you can still see changing.
**で** marks the material or means, as in "made out of".

> 友達|ともだち|friend ; *から|from ; 本|ほん|book ; を ; 借りた|かりた|borrowed
= I borrowed a book from a friend.

> 木|き|wood ; *で|out of ; 作った|つくった|made
= made of wood (still wood, you can see it)

> 米|こめ|rice ; *から|from ; 酒|さけ|sake ; を ; 作る|つくる|make
= Sake is made from rice (the rice is transformed).

## が vs を with feelings

You saw this earlier. **好き, 嫌い, 欲しい, 分かる, できる** take **が**; their object-like partner is not "acted upon".

**〜たい** accepts either が or を.

## は vs が vs を in one sentence

> 私|わたし|I ; は ; 猫|ねこ|cat ; が ; 好き|すき|liked ; です
= I like cats. (topic, thing that is liked)

> 私|わたし|I ; は ; 猫|ねこ|cat ; を ; 飼っている|かっている|keep ; 
= I keep a cat. (topic, thing I act on)

## Checklist when a particle feels wrong

1. What kind of word is the verb: action, existence, motion, feeling?
2. Is the particle marking a **place where**, a **place to**, a **person to**, or a **thing acted on**?
3. Is it a fixed pairing you should learn as a unit (電車に乗る)?

## Key points

- **に** for existence and arrival; **で** for where actions happen.
- **と** is mutual ("with"); **に** is one-way ("to").
- Learn verb + particle together: 電車に乗る, 家を出る.
- **に** and **へ** both mark destinations.
- **から** = source; **で** = material still visible.
`,
};

export const politeCasual: Lesson = {
  slug: "politeness-greetings",
  title: "Plain and polite speech, and the phrases you'll hear every day",
  description:
    "How the plain and polite styles fit together, which to use with whom, and the grammar hidden inside greetings like いただきます, お疲れ様 and よろしくお願いします.",
  points: ["n5-masu", "n5-desu"],
  body: `
## Two styles for the same words

You have now met both styles. Here they are side by side.

| | Plain | Polite |
| --- | --- | --- |
| to be | だ | です |
| to eat | 食べる | 食べます |
| didn't eat | 食べなかった | 食べませんでした |
| tasty | おいしい | おいしいです |
| it was tasty | おいしかった | おいしかったです |

**Plain** is for friends, family, children, and your own thoughts. It is the form in a dictionary and the form of narration.
**Polite** is for strangers, customers, people older or higher in rank, and any situation where you are not close.

> ご飯|ごはん|meal ; 食べた|たべた|ate ; ？
= Did you eat? (to a friend)

> ご飯|ごはん|meal ; を ; 食べましたか|たべましたか
= Did you eat? (to a stranger)

## Mixing styles

Real people mix. A junior may speak polite to a senior and the senior answers in plain. Shop staff are polite to customers. Friends speak plain, then slip into polite to joke or to be sarcastic.

Within **one** conversation, keep the style steady, unless the mix is deliberate. Switching to plain with someone you have just met sounds rude; switching to polite with a friend can sound cold or ironic.

:::key Which should I use?
If unsure, use polite (ます/です). It is safe with everyone. Move to plain when the other person does, or when you become close.
:::

## Greetings are small grammar lessons

Set phrases look like vocabulary, but many are contractions of full sentences.

| Phrase | Literally | Used |
| --- | --- | --- |
| おはようございます | it is early (honorific) | morning |
| こんにちは | as for today (it is...) | daytime |
| こんばんは | as for this evening (it is...) | evening |
| ありがとうございます | it is difficult-to-have (rare) | thanks |
| すみません | it doesn't end (my apology) | sorry; excuse me; thanks |
| いただきます | I humbly receive | before eating |
| ごちそうさまでした | it was a feast | after eating |
| いってきます | I'll go and come back | leaving home |
| いってらっしゃい | go and come back | to someone leaving |
| ただいま | right now (I've come home) | arriving home |
| おかえりなさい | you've returned | welcoming home |
| よろしくお願いします | please treat me well | first meeting; asking favours |
| お疲れ様です | you must be tired | work; greeting colleagues |

> *おはよう|good morning (plain)
> *おはようございます|good morning (polite)
= Good morning.
+ Drop ございます for friends.

### The こんにちは family

**こんにちは** and **こんばんは** are fossils: 今日は… and 今晩は… (the topic は, with the rest of the sentence dropped). That is why the last kana is written は and read "wa".

### ありがとう

It is a plain-form phrase: ありがとう (thanks), ありがとうございます (polite), ありがとうございました (past: thanks for what you did).

> 手伝って|てつだって|helping ; くれて|gave ; *ありがとう
= Thanks for helping me.

### すみません: three jobs

> *すみません|excuse me
> *すみません|sorry
> *すみません|thank you (for the trouble)
= One word: excuse me, sorry and thanks, according to the moment.

### いただきます and the humble verb

**いただきます** is the humble form of もらう ("I receive"). You say it before eating to receive the meal. The same verb appears in 〜ていただく ("have someone do for me"), which you will see again in the lesson on keigo.

### 言わなくても通じる

Many phrases leave out everything that is understood. お疲れ様です is just a noun plus です: "(you are) a weary one", an acknowledgement of someone's effort. You say it as a greeting to colleagues. The grammar is already familiar; the rest of the thought is simply implied.

## Key points

- Plain for close people and thoughts; polite for everyone else.
- If unsure, use polite.
- Keep one style per conversation unless you mean the switch.
- Greetings are fixed phrases that contain real grammar: は-topic, humble verbs, ございます.
- **すみません** covers sorry, excuse me and thank you.
`,
};

export const counting: Lesson = {
  slug: "counting",
  title: "Numbers and counting things",
  description:
    "Numbers up to ten thousand and beyond, why every kind of object has its own counter, the counters you need first (つ, 人, 個, 枚, 本, 匹, 冊, 台, 回, 歳), and how to place them in a sentence.",
  points: ["n5-counter-tsu", "n5-counter-nin", "n5-counter-hon", "n5-counter-mai", "n5-counters-more", "n5-ikura-ikutsu"],
  body: `
## The numbers

| | | | |
| --- | --- | --- | --- |
| 一 いち | 二 に | 三 さん | 四 よん / し |
| 五 ご | 六 ろく | 七 なな / しち | 八 はち |
| 九 きゅう / く | 十 じゅう | 百 ひゃく | 千 せん |
| 万 まん (10,000) | 億 おく (100,000,000) | | |

Numbers stack naturally: 十一 (11), 二十 (20), 二十三 (23), 百五 (105), 千二百 (1,200).

Two Japanese quirks:

- Big numbers group in **fours** (万, 億), not threes. 十万 is 100,000; 百万 is one million; 一億 is a hundred million.
- Zero is **ゼロ** or **れい**.

> 三千|さんぜん|three thousand ; 円|えん|yen ; です
= It's 3,000 yen.

Common irregular sounds: 三百 (さんびゃく), 六百 (ろっぴゃく), 八百 (はっぴゃく); 三千 (さんぜん), 八千 (はっせん).

## Counters

You cannot count objects with a bare number. You attach a **counter**, a small word that depends on the thing's shape or kind. English has a few ("three sheets of paper", "two pairs of shoes"); Japanese has dozens, and they are required.

| Counter | Counts | Example |
| --- | --- | --- |
| つ | generic things, up to ten | みっつ |
| 人 (にん) | people | 三人 |
| 個 (こ) | small objects | 五個 |
| 枚 (まい) | flat things: paper, plates, shirts, tickets | 二枚 |
| 本 (ほん) | long, thin things: pens, bottles, trees | 三本 |
| 匹 (ひき) | small animals, fish, insects | 二匹 |
| 冊 (さつ) | bound things: books, magazines | 三冊 |
| 台 (だい) | machines and vehicles | 二台 |
| 回 (かい) | times, occasions | 一回 |
| 歳 (さい) | age | 二十歳 |
| 杯 (はい) | cups and glasses | 二杯 |
| 階 (かい) | floors | 三階 |

## つ: the generic counter

For up to ten, you can count nearly anything with the **native** numbers:

| 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- |
| ひとつ | ふたつ | みっつ | よっつ | いつつ |

| 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- |
| むっつ | ななつ | やっつ | ここのつ | とお |

> りんご|apple ; を ; *三つ|みっつ|three ; ください
= Three apples, please.

Beyond ten, the generic つ stops, and you use the Chinese numbers (十一個).

## People

One and two are special. After that, it is regular.

| 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- |
| ひとり | ふたり | さんにん | よにん | ごにん | ろくにん |

> 友達|ともだち|friend ; が ; *三人|さんにん|three people ; 来た|きた|came
= Three friends came.

## Sound changes

A few counters change sound depending on the number. Do not memorise a whole table; learn the high-frequency ones as you meet them.

| | 本 (long) | 匹 (animals) | 杯 (cups) |
| --- | --- | --- | --- |
| 1 | いっぽん | いっぴき | いっぱい |
| 2 | にほん | にひき | にはい |
| 3 | さんぼん | さんびき | さんばい |
| 4 | よんほん | よんひき | よんはい |
| 5 | ごほん | ごひき | ごはい |
| 6 | ろっぽん | ろっぴき | ろっぱい |
| 7 | ななほん | ななひき | ななはい |
| 8 | はっぽん | はっぴき | はっぱい |
| 9 | きゅうほん | きゅうひき | きゅうはい |
| 10 | じゅっぽん | じゅっぴき | じゅっぱい |

The pattern: 1, 6, 8 and 10 get a small っ and ぽ/ぴ/ぱ; 3 gets ぼ/び/ば; the rest keep the plain h-sound. It shows up in many h-counters.

## Where the counter goes

In a sentence, the quantity usually follows the thing it counts and its particle, right before the verb:

> 本|ほん|book ; を ; *三冊|さんさつ|three volumes ; 買った|かった|bought
= I bought three books.

> 学生|がくせい|students ; が ; *五人|ごにん|five ; いる
= There are five students.

You can also put the number first with の: 三冊の本を買った. The first pattern is more natural in speech.

## Asking how many

| Question | Meaning |
| --- | --- |
| 何人 (なんにん) | how many people |
| 何枚 (なんまい) | how many sheets |
| 何本 (なんぼん) | how many long things |
| いくつ | how many (generic) / how old (informal) |
| いくら | how much (money) |
| 何回 (なんかい) | how many times |
| 何歳 (なんさい) / おいくつ | how old |

> 兄弟|きょうだい|siblings ; は ; *何人|なんにん|how many ; ですか
= How many brothers and sisters do you have?

> これ|this ; は ; *いくら|how much ; ですか
= How much is this?

## Money, time and age

- **Money**: 円 (えん): 千円, 五千円, 一万円.
- **Time of day**: 時 (じ) and 分 (ふん/ぷん): 三時五分.
- **Age**: 歳 (さい) / 才. 二十歳 is はたち (twenty years old).

## Key points

- Numbers group by **万** (10,000) and **億**, not by thousands.
- Counters are mandatory: each kind of thing has its own.
- **〜つ** counts generic things up to ten.
- 人, 本, 枚, 匹, 冊, 台, 回, 歳 are the first counters worth knowing.
- Counters follow the thing and its particle, just before the verb.
`,
};

export const timeExpressions: Lesson = {
  slug: "dates-times",
  title: "Dates, times and when things happen",
  description:
    "Reading dates and clock times, the words for yesterday, last week and next year, when to use に with a time and when to leave it off, and how to say 'for' versus 'at'.",
  points: ["n5-time", "n5-ni-time", "n5-goro", "n5-gurai", "n5-itsu"],
  body: `
## Months and days

Months are a number plus 月 (がつ):

| 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- |
| いちがつ | にがつ | さんがつ | しがつ | ごがつ | ろくがつ |

| 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- |
| しちがつ | はちがつ | くがつ | じゅうがつ | じゅういちがつ | じゅうにがつ |

Note 4, 7 and 9 use し, しち and く.

Days of the month are a number plus 日 (にち), with irregular first ten days and a few others:

| 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- |
| ついたち | ふつか | みっか | よっか | いつか |

| 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- |
| むいか | なのか | ようか | ここのか | とおか |

14 is じゅうよっか, 20 is はつか, 24 is にじゅうよっか. Everything else is number + にち (十一日 じゅういちにち).

The order is **big to small**: year, month, day.

> 二千二十六年|にせんにじゅうろくねん|2026 ; 十月|じゅうがつ|October ; 八日|ようか|the 8th
= October 8, 2026

## Days of the week

月曜日 (げつようび, Monday), 火曜日 (かようび), 水曜日 (すいようび), 木曜日 (もくようび), 金曜日 (きんようび), 土曜日 (どようび), 日曜日 (にちようび). They are named for the moon, fire, water, wood, metal, earth and sun.

## Clock times

Hours are number + 時 (じ); minutes are number + 分 (ふん/ぷん):

| 1:00 | 4:00 | 7:00 | 9:00 |
| --- | --- | --- | --- |
| いちじ | よじ | しちじ | くじ |

Half past is **半** (はん): 三時半 (さんじはん). AM and PM are 午前 (ごぜん) and 午後 (ごご).

> 午前|ごぜん|AM ; 七時|しちじ|seven ; 半|はん|half ; に ; 起きる|おきる|get up
= I get up at 7:30 in the morning.

## Words for relative time

These are nouns you will use constantly:

| | Before | Now | After |
| --- | --- | --- | --- |
| day | 昨日 (きのう) | 今日 (きょう) | 明日 (あした) |
| week | 先週 (せんしゅう) | 今週 (こんしゅう) | 来週 (らいしゅう) |
| month | 先月 (せんげつ) | 今月 (こんげつ) | 来月 (らいげつ) |
| year | 去年 (きょねん) | 今年 (ことし) | 来年 (らいねん) |
| day before/after | 一昨日 (おととい) | | 明後日 (あさって) |

## に or no に

This is the part that trips everyone.

- **With a clock or calendar time, use に**: 七時に, 日曜日に, 三月に.
- **With a relative word (今日, 昨日, 来週, 去年...), no に**: 昨日来た, 来週行く.

> 七時|しちじ|seven ; *に|at ; 起きた|おきた|got up
> 昨日|きのう|yesterday ; 起きた|おきた|got up
= I got up at seven. / I got up yesterday.

Reason: relative words behave like adverbs, not like points on the clock. You can add に for emphasis (明日には), but you rarely need to.

## About: ごろ and ぐらい

- **ごろ**: approximately *when* (a point in time): 三時ごろ.
- **ぐらい / くらい**: approximately *how long or how much*: 三時間ぐらい.

> 三時|さんじ|three ; *ごろ|about ; に ; 来て|きて|come ; ください
= Please come around three.

> 三時間|さんじかん|three hours ; *ぐらい|about ; かかる|take
= It takes about three hours.

## Duration vs a point

A duration (how long) takes **間** or nothing; a point takes **に**.

> 二時間|にじかん|two hours ; 勉強した|べんきょうした|studied
= I studied for two hours.

Compare: 二時に勉強した (I studied at two o'clock) vs 二時間勉強した (I studied for two hours). The only difference is the 間.

## から and まで for ranges

> 九時|くじ|nine ; *から|from ; 五時|ごじ|five ; *まで|until ; 働く|はたらく|work
= I work from nine to five.

## Frequency

- 毎日 (every day), 毎週 (every week), 毎年 (every year)
- 週に二回 (twice a week): note the に. 一日に三回 (three times a day).

> 週|しゅう|week ; *に|per ; 三回|さんかい|three times ; 走る|はしる|run
= I run three times a week.

## Key points

- Dates run year, month, day. Learn the ten irregular day names.
- Clock times take **に**; relative words (昨日, 来週) do not.
- **ごろ** for a rough time, **ぐらい** for a rough amount.
- **〜間** marks how long; **に** marks when.
- 週に三回 = three times per week.
`,
};

export const verbChart: Lesson = {
  slug: "verb-chart",
  title: "Every verb form on one page",
  description:
    "A single reference chart of all the forms you have learned, how to turn any form back into the dictionary form so you can look it up, and a quick method for identifying a verb you find in a sentence.",
  points: ["n5-nai", "n5-ta", "n4-potential", "n4-volitional", "n4-imperative", "n4-ba"],
  body: `
This lesson is a reference. You do not need to memorise it. Use it to check a form, or when you meet one in a sentence and need to find the verb in a dictionary.

## The chart

| | 食べる (ru) | 書く (u) | 飲む (u) | 話す (u) | する | 来る |
| --- | --- | --- | --- | --- | --- | --- |
| dictionary | 食べる | 書く | 飲む | 話す | する | 来る |
| polite | 食べます | 書きます | 飲みます | 話します | します | 来ます |
| negative | 食べない | 書かない | 飲まない | 話さない | しない | 来ない |
| past | 食べた | 書いた | 飲んだ | 話した | した | 来た |
| past negative | 食べなかった | 書かなかった | 飲まなかった | 話さなかった | しなかった | 来なかった |
| て-form | 食べて | 書いて | 飲んで | 話して | して | 来て |
| potential | 食べられる | 書ける | 飲める | 話せる | できる | 来られる |
| passive | 食べられる | 書かれる | 飲まれる | 話される | される | 来られる |
| causative | 食べさせる | 書かせる | 飲ませる | 話させる | させる | 来させる |
| volitional | 食べよう | 書こう | 飲もう | 話そう | しよう | 来よう |
| imperative | 食べろ | 書け | 飲め | 話せ | しろ | 来い |
| ば-form | 食べれば | 書けば | 飲めば | 話せば | すれば | 来れば |
| たい | 食べたい | 書きたい | 飲みたい | 話したい | したい | 来たい |

Readings for 来る: くる, きます, こない, きた, きて, こられる, こさせる, こよう, こい, くれば, きたい.

## The sound rows

For u-verbs, forms attach to a different row of the kana chart:

| Form | Row | 書く | 飲む |
| --- | --- | --- | --- |
| negative, passive, causative | あ-row | 書か | 飲ま |
| polite, たい, stem | い-row | 書き | 飲み |
| dictionary | う-row | 書く | 飲む |
| potential, ば, imperative | え-row | 書け | 飲め |
| volitional | お-row (+う) | 書こう | 飲もう |

If you remember the five rows (あ い う え お), you can build every form of every u-verb.

## Finding the dictionary form

When you meet a conjugated verb in a sentence, you need its dictionary form to look it up. Work backwards from the ending.

| You see | It is | Dictionary form |
| --- | --- | --- |
| 〜ます | polite | change the い-row back: 書きます → 書く |
| 〜ません / 〜ました | polite negative / past | same, then back up |
| 〜ない | negative | あ-row → う-row: 書かない → 書く; 食べない → 食べる |
| 〜なかった | past negative | as ない |
| 〜た / 〜だ | past | 書いた → 書く; 飲んだ → 飲む; 食べた → 食べる |
| 〜て / 〜で | て-form | same as past |
| 〜れる / 〜られる | potential or passive | strip it: 食べられる → 食べる; 書ける → 書く |
| 〜せる / 〜させる | causative | strip it |
| 〜よう / 〜おう | volitional | 食べよう → 食べる; 書こう → 書く |
| 〜ば | conditional | え-row → う-row: 書けば → 書く |

## Telling ru and u apart

When you see a stem like 食べ, the dictionary form is 食べる (a ru-verb). When you see 書か, it is 書く (a u-verb). If the verb stem ends in an **e** or **i** sound (食べ, 見, 起き), it is most likely a ru-verb. If it ends in **a, u, o** (書か, 飲ま, 話そ), it is a u-verb. The exceptions are the る-ending u-verbs: 帰る → 帰ら, 入る → 入ら, 知る → 知ら.

## Stacking forms

Forms combine. Every added piece is a regular ru-verb or い-adjective, which you can conjugate again.

> 食べ|たべ|eat ; させ|make ; られ|(passive) ; たくなかった|たくなかった|didn't want to
= didn't want to be made to eat

食べる → 食べさせる (causative) → 食べさせられる (passive) → 食べさせられたくない (wants-not) → 食べさせられたくなかった (past).

Real sentences rarely stack more than three, but this chain shows how it works. Read one piece at a time from left to right.

## A habit for unknown verbs

1. Look at the **end** of the word. Is it a recognisable ending (〜ている, 〜ました, 〜なかった, 〜させられた)?
2. Peel the endings off from the right, one at a time.
3. What's left is the stem. Rebuild the dictionary form.
4. Look it up.

Dictionary lookup tools like Yomitan do this for you, but doing it by hand a few times trains your eye.

## Key points

- Five rows (あ い う え お) generate every u-verb form.
- Passive, causative and potential are ru-verbs. Conjugate them again.
- To look up a verb, peel endings from the right and rebuild the dictionary form.
- Forms stack: 食べさせられたくなかった is five pieces in one word.
`,
};

export const adverbs: Lesson = {
  slug: "adverbs",
  title: "Adverbs: how much, how often, how, and もう and まだ",
  description:
    "The adverbs that appear in nearly every sentence: degree (とても, あまり), frequency (いつも, よく), time (もう, まだ, すぐ), and manner (ゆっくり, ちゃんと). With the ones that need a negative.",
  points: ["n5-adverbs", "n5-amari-zenzen", "n5-frequency", "n5-mou", "n5-mada", "n5-motto"],
  body: `
Adverbs describe a verb, an adjective or another adverb. In Japanese they go **just before** what they describe, and most never change shape.

## Degree: how much

| Word | Meaning | Note |
| --- | --- | --- |
| とても | very | positive and negative |
| すごく | extremely | casual |
| かなり | quite | |
| ちょっと / 少し | a little | |
| もっと | more | |
| 一番 | the most | |
| あまり | not very | **needs a negative** |
| 全然 | not at all | **needs a negative** (casual: any) |
| ほとんど | almost (all / none) | with negative for "almost none" |

> この ; 映画|えいが|movie ; は ; *とても|very ; 面白い|おもしろい|interesting
= This movie is very interesting.

> 今日|きょう|today ; は ; *あまり|(not) very ; 寒く|さむく|cold ; ない
= It's not very cold today.

> *全然|ぜんぜん|at all ; 分から|わから|understand ; ない
= I don't understand at all.

:::key Negative-only adverbs
**あまり, 全然, ほとんど, めったに** go with a negative verb or adjective. If you meet one with a positive ending, stop and check: in casual speech, 全然 is sometimes used with a positive ("全然いい" = totally fine), but in writing and tests it needs a negative.
:::

## Frequency: how often

| Word | Meaning |
| --- | --- |
| いつも | always |
| よく | often |
| 時々 (ときどき) | sometimes |
| たまに | occasionally |
| めったに | rarely (negative) |
| 全然 | never (negative) |
| 毎日 | every day |

> *いつも|always ; 朝|あさ|morning ; コーヒー ; を ; 飲む|のむ|drink
= I always drink coffee in the morning.

> *めったに|rarely ; 映画|えいが|movies ; を ; 見|み|see ; ない
= I rarely watch movies.

## Time: when, and how soon

| Word | Meaning |
| --- | --- |
| すぐ | right away |
| もう | already / any more |
| まだ | still / not yet |
| ずっと | all along; far (more) |
| やっと | finally (after effort) |
| ついに / とうとう | at last |
| そろそろ | soon, about time |
| いつか | someday |
| さっき | a moment ago |

## もう and まだ

The two words make four combinations:

| | もう | まだ |
| --- | --- | --- |
| + positive | already | still |
| + negative | no longer | not yet |

> *もう|already ; 食べた|たべた|ate
= I've already eaten.

> *まだ|not yet ; 食べて|たべて|eating ; いない
= I haven't eaten yet.

> *まだ|still ; 寝て|ねて|sleeping ; いる
= He's still asleep.

> *もう|any more ; 食べ|たべ|eat ; ない
= I'm not eating any more.

Think of もう as "the change has happened" and まだ as "the change has not happened". If you ask もう食べましたか? ("Have you eaten already?"), the polite answer is はい、もう食べました or いいえ、まだです.

Another useful もう: **もう一つ** (one more), **もう少し** (a little more), **もう一度** (once more).

## Manner: how

| Word | Meaning |
| --- | --- |
| ゆっくり | slowly, leisurely |
| はっきり | clearly |
| ちゃんと | properly |
| しっかり | firmly, solidly |
| きちんと | neatly, correctly |
| 急いで | in a hurry (from 急ぐ) |
| 一緒に | together |
| 一人で | alone |

> もう少し|もうすこし|a little more ; *ゆっくり|slowly ; 話して|はなして|speak ; ください
= Please speak a little more slowly.

> *ちゃんと|properly ; 食べ|たべ|eat ; なさい
= Eat properly.

## Judgment: how sure

| Word | Meaning |
| --- | --- |
| たぶん | probably |
| きっと | surely, I'm sure |
| もちろん | of course |
| 絶対 (ぜったい) | absolutely |
| 必ず (かならず) | without fail |
| たしか | if I recall correctly |
| もしかして | by any chance |

> 彼|かれ|he ; は ; *たぶん|probably ; 来る|くる|come ; だろう
= He'll probably come.

> *絶対|ぜったい|absolutely ; 行く|いく|go
= I'll definitely go.

## Making adverbs from adjectives

You know this one. い-adjectives swap い for **く**; な-adjectives take **に**.

> *早く|はやく|early ; 帰って|かえって|come home ; ね
= Come home early, okay?

## Sound-and-feeling adverbs

Onomatopoeia act as adverbs, often with **と**: ゆっくりと, はっきりと, どきどきする, ぐっすり寝る (sleep soundly).

> *ぐっすり|soundly ; 寝た|ねた|slept
= I slept soundly.

## Where to put them

An adverb goes before the verb or adjective it modifies, usually after the topic and subject:

> 私|わたし|I ; は ; 毎朝|まいあさ|every morning ; *ゆっくり|slowly ; コーヒー ; を ; 飲む|のむ|drink
= Every morning I drink coffee slowly.

Time words (毎朝) tend to go first, manner words (ゆっくり) closest to the verb.

## Key points

- Adverbs go right before the word they describe.
- **あまり, 全然, ほとんど, めったに** need a negative.
- **もう** = already / no longer; **まだ** = still / not yet.
- Adjectives become adverbs with **く** and **に**.
- Sound-words add vividness and are normal in everyday Japanese.
`,
};
