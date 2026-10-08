import type { Lesson } from "../types";

export const ga: Lesson = {
  slug: "subject-ga",
  title: "が: who, what, and the new thing",
  description:
    "How が differs from は without hand-waving: が points at something and says 'this one'. When Japanese uses it, why question words take it, and how to choose between the two when reading.",
  points: ["n5-ga", "n5-wa-ga", "n5-ga-suki", "n5-ga-wakaru"],
  body: `
Now for the particle that is always compared with は. The comparison is useful but only if you get one thing straight first: **は and が do different jobs, and sometimes the sentence needs both.**

## が points at something

**が** marks the thing that **does** the action or **is** the described state, and it puts the spotlight on that thing. Where は says "as for X", が says "it is **X** that".

> 猫|ねこ|cat ; *が|(it is) ; 鳴いている|ないている|is meowing
= A cat is meowing. / It's a cat that's meowing.

> 雨|あめ|rain ; *が|(it is) ; 降っている|ふっている|is falling
= It's raining.

Notice that these sentences introduce something new. You hear a noise outside and say "a cat is meowing". Nothing was set up first, so there is nothing to be a topic. That is the typical home of が: **news, discoveries, and things the listener has not been told about yet.**

## The question-word rule

A question word is a request to be told who or what. So it takes が, never は:

> 誰|だれ|who ; *が|(it is) ; 来た|きた|came ; の ; ？
= Who came?

> どれ|which ; *が|(it is) ; あなた|you ; の ; ですか
= Which one is yours?

And the answer repeats the pattern, because the answer is the missing piece of information:

> 田中|たなか|Tanaka ; さん ; *が|(it is) ; 来ました|きました|came
= Mr. Tanaka came. (It was Mr. Tanaka who came.)

:::key Two different questions
**田中さんは来ましたか？** asks about a known person: "Did Tanaka come?" (Tanaka is the topic. The answer is yes or no.)
**田中さんが来ましたか？** asks "Is it Tanaka who came?" (Someone came. Was it him?)
:::

## は vs が: a test you can use while reading

When you hit one of them and are not sure, ask **"Is this thing already known in the conversation, or is it new?"**

| Known, or the starting point | New, or the answer |
| --- | --- |
| は | が |
| 田中さんは学生だ。(as for Tanaka, a student) | 田中さんが学生だ。(it's Tanaka who is a student) |

Here is the standard story pattern. First mention uses が, then it becomes the topic:

> 昔々|むかしむかし|long ago ; ある ; ところ ; に ; おじいさん ; *が|(new) ; いました|there was
= Long, long ago, there was an old man in a certain place.

> おじいさん ; *は|(now known) ; 山|やま|mountain ; へ ; 行きました|いきました|went
= The old man went to the mountain.

You will see this in folk tales and in the first few lines of a story all the time. A new character is introduced with が. After that they become the topic and take は.

## が in descriptions

Many sentences describe a feature of the topic. The pattern **topic は + part が + description** is extremely common:

> 象|ぞう|elephant ; は ; 鼻|はな|nose ; *が|(it is) ; 長い|ながい|long
= Elephants have long noses. (As for elephants: nose is long.)

> 私|わたし|I ; は ; 頭|あたま|head ; *が|(it is) ; 痛い|いたい|painful
= I have a headache. (As for me: head hurts.)

The topic is the big thing, the が-marked piece is the part that has the property, and what comes last is the description. You do not need to translate it literally. Just recognise the shape.

## Verbs and adjectives that take が

Some predicates mark the thing they are about with が, even though English would make it an object. The ones you will see first:

| Predicate | Meaning | Example |
| --- | --- | --- |
| 好き / 嫌い | like / dislike | 猫が好きだ |
| 上手 / 下手 | good at / bad at | 料理が上手だ |
| 分かる | understand | 日本語が分かる |
| できる | can do | 運転ができる |
| 欲しい | want (a thing) | 車が欲しい |
| ある / いる | exist / have | お金がある |
| 見える / 聞こえる | can be seen / heard | 山が見える |

> 私|わたし|I ; は ; 猫|ねこ|cat ; *が|(is liked) ; 好き|すき|liked ; です
= I like cats. (Literally: As for me, cats are liked.)

> 彼|かれ|he ; は ; 日本語|にほんご|Japanese ; *が|(is understood) ; 分かる|わかる|is understood
= He understands Japanese.

These are really descriptions of a state: "cats are liked", "Japanese is understood", "a car is wanted". The thing that is liked or understood is the one doing the being, so it takes が. English turns them around.

## が in clauses

Inside a smaller clause that describes a noun or sets a condition, **が** is the normal subject marker, because は is reserved for the main sentence's topic:

> 私|わたし|I ; が ; 作った|つくった|made ; ケーキ|cake
= The cake I made.

> 雨|あめ|rain ; *が|(it is) ; 降る|ふる|falls ; と ; 外|そと|outside ; に ; 出ない|でない|don't go
= If it rains I don't go outside.

We will return to this when we do clauses. For now: inside a clause, が is the default.

## が as "but"

If が appears at the end of a clause with a verb or adjective right before it, it may mean "but" or "and" (just a mild connector):

> 行きたい|いきたい|want to go ; *が|but ; 時間|じかん|time ; が ; ない
= I want to go, but I don't have time.

Context tells you which が it is. The "but" が follows a complete clause that has its own predicate. The subject が follows a noun.

## Common mistakes

:::warn Don't force "is" or "does" onto each particle
Beginners learn "は = topic, が = subject, を = object" and apply them mechanically. Japanese is not a code you translate piece by piece. A sentence can have a topic that is not the subject (as in "this shop: ramen is delicious"), and a "subject" that English would call an object ("cats are liked").
:::

:::warn Be careful with the question rule
**Question words with が**: 誰が来た？ (who came?). **Question words as topic is rare**: 誰は？ sounds odd. If you see a question word, it is nearly always が, を, に and so on. Not は.
:::

## Key points

- **は** sets up a known topic; **が** pinpoints the person or thing and spotlights it.
- New information, answers to questions and discoveries take **が**.
- Question words take **が** (誰が、何が、どれが).
- Topic は + part が + description is a core pattern: 象は鼻が長い。
- 好き, 分かる, できる, 欲しい, ある and similar predicates take **が** for the thing they are about.
- Inside a clause, **が** is the default subject marker.
`,
};

export const roles: Lesson = {
  slug: "role-particles",
  title: "を, に, で, へ, と, から, まで: who does what to what",
  description:
    "The particles that tag the objects, places, times and companions of an action. A clear map of what each one means, how に and で differ, and the small traps that catch almost everyone.",
  points: ["n5-wo", "n5-ni-time", "n5-ni-destination", "n5-he", "n5-de-place", "n5-de-means", "n5-to-with", "n5-kara-made", "n5-ni-target"],
  body: `
In lesson one we saw that particles tag each piece. This lesson maps the ones that tag the pieces around a verb. Treat it as a reference: you do not need to master it now. Read it, then return when something in your reading confuses you.

## を: the thing acted on

**を** (pronounced **o**) marks the direct object of an action, the thing the verb does something to.

> パン|bread ; *を|(acted on) ; 食べる|たべる|eat
= I eat bread.

> 手紙|てがみ|letter ; *を|(acted on) ; 書く|かく|write
= I write a letter.

> 音楽|おんがく|music ; *を|(acted on) ; 聞く|きく|listen
= I listen to music.

It is also used for paths and places you move *through*:

> 公園|こうえん|park ; *を|(through) ; 歩く|あるく|walk
= I walk through the park.

> 橋|はし|bridge ; *を|(over) ; 渡る|わたる|cross
= I cross the bridge.

And with a handful of verbs, it marks the place you leave:

> 家|いえ|house ; *を|(leaving) ; 出る|でる|leave
= I leave the house.

## に: a point in space, time or direction

**に** marks the spot where something *lands*. It is the particle of arrival, targets and fixed points.

**Destination:**

> 学校|がっこう|school ; *に|to ; 行く|いく|go
= I go to school.

**A point in time:**

> 七時|しちじ|seven o'clock ; *に|at ; 起きる|おきる|get up
= I get up at seven.

**The target or recipient:**

> 友達|ともだち|friend ; *に|to ; 本|ほん|book ; を ; あげる|give
= I give a friend a book.

**Where something exists:**

> 机|つくえ|desk ; の ; 上|うえ|top ; *に|at ; 本|ほん|book ; が ; ある
= There is a book on the desk.

**Purpose of going:**

> 映画|えいが|movie ; を ; 見|み|see ; *に|in order to ; 行く|いく|go
= I go to see a movie.
+ Verb stem + に + 行く/来る/帰る: "go in order to...".

A good way to feel に: it is the "to / at / in / on" of **where it lands**.

## で: where it happens, and what it uses

**で** marks the setting of an action, the place it *takes place* and the tool or method it uses.

**Where the action happens:**

> 図書館|としょかん|library ; *で|at ; 勉強する|べんきょうする|study
= I study at the library.

**What you use:**

> 箸|はし|chopsticks ; *で|with ; 食べる|たべる|eat
= I eat with chopsticks.

> 電車|でんしゃ|train ; *で|by ; 行く|いく|go
= I go by train.

**Reason or cause:**

> 病気|びょうき|illness ; *で|because of ; 休んだ|やすんだ|rested/was absent
= I was absent because of illness.

### に or で for places?

This catches everyone. Compare:

> 公園|こうえん|park ; *に|at ; いる
= I'm in the park. (existence)

> 公園|こうえん|park ; *で|at ; 遊ぶ|あそぶ|play
= I play in the park. (action takes place there)

| Verb type | Place particle |
| --- | --- |
| Exists, stays (いる, ある, 住む) | に |
| Does something there (食べる, 遊ぶ, 働く) | で |
| Goes to or arrives (行く, 着く) | に (or へ) |

:::key A quick test
Can you replace "at" with "in the middle of doing something at"? If an action is happening there, use **で**. If something just *is* there, use **に**.
:::

## へ: toward

**へ** (pronounced **e**) is similar to に for destinations but stresses the direction, not the arrival.

> 東京|とうきょう|Tokyo ; *へ|toward ; 行く|いく|go
= I'm going to Tokyo.

For ordinary destinations, **に and へ are interchangeable**. You will see both. 

## と: together, and "and"

**と** has two main jobs, and both involve a partner.

**With someone:**

> 友達|ともだち|friend ; *と|with ; 映画|えいが|movie ; を ; 見る|みる|watch
= I watch a movie with a friend.

**And (between nouns):**

> 犬|いぬ|dog ; *と|and ; 猫|ねこ|cat
= dogs and cats

**It also marks quotes:** (covered in a later lesson)

> 「ありがとう」 ; *と|(quote) ; 言った|いった|said
= He said "thank you".

## から and まで: from and until

> 九時|くじ|nine o'clock ; *から|from ; 五時|ごじ|five o'clock ; *まで|until ; 働く|はたらく|work
= I work from nine to five.

> 家|いえ|home ; *から|from ; 学校|がっこう|school ; *まで|as far as ; 歩く|あるく|walk
= I walk from home to school.

**から** also means "because" when it follows a clause (lesson on reasons). **まで** means "up to / as far as / until".

## や and とか: "and things like"

**と** lists everything: "A and B". **や** and **とか** list examples: "A and B and so on."

> りんご|apple ; *や|and (e.g.) ; みかん|mandarin ; を ; 買った|かった|bought
= I bought apples, mandarins and so on.

## より: than

**より** marks the thing you compare against.

> 犬|いぬ|dog ; は ; 猫|ねこ|cat ; *より|than ; 大きい|おおきい|big
= Dogs are bigger than cats.

## Putting several together

A real sentence often stacks several of these in front of the verb:

> 昨日|きのう|yesterday ; 友達|ともだち|friend ; *と|with ; 図書館|としょかん|library ; *で|at ; 日本語|にほんご|Japanese ; *を|(object) ; 勉強した|べんきょうした|studied
= Yesterday I studied Japanese with a friend at the library.

Count the tags: と for who with, で for where, を for what. The verb at the end closes it. If you can see each tag as a job, you can read sentences of any length.

:::try Look for it
Pick a short sentence from something you are reading. Underline each particle and say its job out loud: "with", "at", "object", "from". Do it for ten sentences. You will find the same few particles again and again.
:::

## Key points

- **を** marks the thing acted on; also paths you pass through.
- **に** marks a landing point: destination, time, recipient, where something exists.
- **で** marks the setting and tool of an action, and the cause.
- **に vs で**: existence or arrival is に; doing something somewhere is で.
- **へ** is "toward"; **と** is "with" and "and"; **から/まで** are "from/until".
- **や/とか** give examples; **より** compares.
`,
};

export const no: Lesson = {
  slug: "no",
  title: "の: linking nouns together",
  description:
    "How の chains nouns into longer ideas, why Japanese noun phrases read backwards from English, and the other things の does: standing in for a noun, and asking and explaining at the end of a sentence.",
  points: ["n5-no"],
  body: `
**の** is the most flexible particle in Japanese. Start with its main job and everything else follows from it.

## A の B: A tells you which B

**の** connects two nouns so that the first one **narrows down** the second. English uses "of", "'s" or just puts nouns next to each other. Japanese uses の, and always puts the describing word first.

> 私|わたし|I ; *の|'s ; 本|ほん|book
= my book

> 日本語|にほんご|Japanese ; *の|of ; 先生|せんせい|teacher
= a Japanese teacher / a teacher of Japanese

> 東京|とうきょう|Tokyo ; *の|of ; 大学|だいがく|university
= a university in Tokyo

> 木|き|wood ; *の|made of ; 机|つくえ|desk
= a wooden desk

Notice how loosely の links things. Owner, location, material, subject area: all fine. The relationship is not stated; you work it out from the two nouns. The only fixed rule is **the first noun describes the second**.

## Chains

You can chain の as many times as you like. Read **right to left** to find the main thing, then back to left to see how it is narrowed:

> 友達|ともだち|friend ; *の|'s ; お姉さん|おねえさん|older sister ; *の|'s ; 犬|いぬ|dog
= my friend's older sister's dog

The last word, **犬**, is the thing in question. The rest narrows it down. This is the first glimpse of the principle that governs all of Japanese noun phrases: **everything that describes a noun comes before it.**

:::key Description comes first
In English you can add description after the noun ("the dog that I saw in the park"). In Japanese everything that describes a noun goes before it, however long. The noun waits at the end. We will use this idea to read very long phrases in the lesson on noun-describing clauses.
:::

## の replaces the noun

If the noun is obvious, you can drop it and let **の** stand in as "one" or "ones":

> これ|this ; は ; 私|わたし|I ; *の|the one ; です
= This is mine.

> 赤い|あかい|red ; *の|one ; を ; ください
= The red one, please.

> 新しい|あたらしい|new ; *の|one ; より ; 古い|ふるい|old ; *の|one ; が ; 好き|すき|liked
= I like the old one more than the new one.

This is the same の as before; it just points back at a noun that has been dropped.

## の at the end of a sentence

In casual speech の at the end of a sentence has two jobs.

**As a question** (rising tone, no か):

> 何|なに|what ; を ; 食べる|たべる|eat ; *の|(asks)
= What are you eating?

**As a soft explanation** (falling tone, the "you see" sound):

> 今日|きょう|today ; は ; 行かない|いかない|won't go ; *の
= I'm not going today (you see).

It makes the sentence sound like you are explaining, softening, or asking for an explanation. In writing it often shows up in dialogue. In speech it often shortens to **ん** (行かないん？). We will cover it more in the lessons on explaining and casual speech.

## Chains inside chains 

Because の does so much, it can appear several times in a row without trouble. Parse patiently from the left:

> 先生|せんせい|teacher ; *の|'s ; 話|はなし|talk ; *の|'s ; 内容|ないよう|content
= the content of the teacher's talk

## Particles before の

に, で, と, から, まで and others can sit before の to describe a noun in another way:

> 学校|がっこう|school ; *で|at ; の ; 生活|せいかつ|life
= life at school

> 友達|ともだち|friend ; *と|with ; の ; 約束|やくそく|promise
= an appointment with a friend

> 東京|とうきょう|Tokyo ; *から|from ; の ; 電車|でんしゃ|train
= a train from Tokyo

You will see these all the time in written Japanese. The particle shows the relationship; の connects the whole thing to the noun after it.

## Key points

- **A の B**: A narrows down B. The thing being described is always last.
- You can chain の: read from the last noun backward.
- A dropped noun can be replaced by の: 私のです, 赤いのをください.
- **の** at the end of a casual sentence asks or explains.
- Particle + の (での, との, からの) lets other relationships modify a noun.
`,
};

export const pointing: Lesson = {
  slug: "pointing-asking",
  title: "This, that, and question words",
  description:
    "The こそあど system (これ, それ, あれ, どれ and all its relatives), the question words, and the か family: nothing, something and anything. A system that is easy to learn once you see the pattern.",
  points: ["n5-kore-sore-are", "n5-kono-sono-ano", "n5-koko-soko-asoko", "n5-nani", "n5-dare", "n5-dou", "n5-donna"],
  body: `
Most of the small words that point at things fit in one table. The pattern is regular: learn the four prefixes and you know about forty words.

## The four prefixes

| Prefix | Meaning | Think of it as |
| --- | --- | --- |
| こ | near me | "this" |
| そ | near you, or just mentioned | "that" |
| あ | far from both of us | "that over there" |
| ど | which? | the question |

Combine them with the endings and you get:

| | こ | そ | あ | ど |
| --- | --- | --- | --- | --- |
| thing | これ | それ | あれ | どれ |
| (noun) | この | その | あの | どの |
| place | ここ | そこ | あそこ | どこ |
| direction | こちら | そちら | あちら | どちら |
| kind | こんな | そんな | あんな | どんな |
| way | こう | そう | ああ | どう |

The mnemonic is the same for each: こ = near me, そ = near you, あ = far from us, ど = which.

## Four forms with different jobs

**これ / それ / あれ / どれ** stand on their own. They replace a noun.

> *これ|this ; は ; 本|ほん|book ; です
= This is a book.

**この / その / あの / どの** describe a noun and must be followed by one.

> *この|this ; 本|ほん|book ; は ; 面白い|おもしろい|interesting
= This book is interesting.

**ここ / そこ / あそこ / どこ** are places.

> *あそこ|over there ; に ; 駅|えき|station ; が ; ある
= There is a station over there.

**こんな / そんな / あんな / どんな** are "this kind of / that kind of".

> *どんな|what kind of ; 音楽|おんがく|music ; が ; 好き|すき|liked ; ですか
= What kind of music do you like?

## そ is the one to watch when reading

For distances you can see, こ/そ/あ is about space. But when you **talk or read** about something, Japanese uses **そ** (and sometimes **あ**) to point back at what was just said.

> 昨日|きのう|yesterday ; 新しい|あたらしい|new ; 映画|えいが|movie ; を ; 見た|みた|saw
= I saw a new movie yesterday.

> *その|that ; 映画|えいが|movie ; は ; 面白かった|おもしろかった|was interesting
= That movie was interesting.

> *それ|that ; を ; 聞いて|きいて|hearing ; 安心した|あんしんした|felt relieved
= I felt relieved to hear that.

When you find **それ**, **その**, **そこ**, **そう** or **そんな** in a text, look to the previous sentence. It is almost always pointing back at something there. This is one of the best reading skills you can build.

**あ** words usually point at things both speaker and listener know, such as shared memories:

> *あの|that (we both know) ; 店|みせ|shop ; の ; ラーメン|ramen ; は ; おいしかった|delicious
= That shop's ramen was good, wasn't it. (We both remember it.)

## 「こう / そう / ああ / どう」: how

These four describe a way or manner.

> *どうして|why ; 泣いている|ないている|are crying ; の ; ？
= Why are you crying?

> *そう|that way ; 思う|おもう|think
= I think so.

> *こう|this way ; やる|do
= You do it like this.

**そう** deserves a special note. It is one of the most frequent words in Japanese. 「そうです」「そうだね」「そうなの？」: "that's right", "I see", "really?" It also has other uses we will see in the lesson on guessing and hearsay.

## Question words

Question words slot in where the answer goes. The word order doesn't change.

| Word | Meaning | Example |
| --- | --- | --- |
| 何 (なに / なん) | what | 何を食べる？ |
| 誰 | who | 誰が来た？ |
| どこ | where | どこに行く？ |
| いつ | when | いつ来る？ |
| どれ / どの | which | どれがいい？ |
| どう | how | どうやって行く？ |
| どうして / なぜ | why | どうして行かない？ |
| いくつ | how many / how old | いくつある？ |
| いくら | how much | いくらですか。 |

> 何|なに|what ; *を|(object) ; 食べる|たべる|eat ; の ; ？
= What are you eating?

> *いつ|when ; 日本|にほん|Japan ; に ; 行く|いく|go ; の ; ？
= When are you going to Japan?

> *どうして|why ; 来なかった|こなかった|didn't come ; の ; ？
= Why didn't you come?

You do not add question marks or か when the question word is already in the sentence (though か is usual in polite speech). Raising the tone at the end of a casual sentence is enough.

## Something, nothing, anything

Add **か** to a question word and it becomes "some-": 何か (something), 誰か (someone), どこか (somewhere), いつか (sometime).

Add **も** and it becomes "no-" or "any-", in a **negative** sentence: 何も (nothing), 誰も (no one), どこにも (nowhere).

> 何か|なにか|something ; 食べる|たべる|eat ; ？
= Will you eat something?

> 何も|なにも|nothing ; 食べない|たべない|eat
= I'm not eating anything.

> 誰も|だれも|nobody ; 来なかった|こなかった|came
= Nobody came.

Mark this, because it looks strange the first time: Japanese uses a plain *negative verb* with 何も. Not "doesn't eat nothing" (double negative in English), but just "eats nothing".

:::key The pattern
**question word + か** → some-. **question word + も + negative** → none-. **question word + でも** → any- ("anyone at all").
:::

> 誰|だれ|who ; *でも|even ; できる|できる|can do
= Anyone can do it.

## Key points

- こ/そ/あ/ど = near me / near you or just mentioned / far / which. Learn the grid.
- **これ** replaces a noun; **この** needs a noun after it.
- **そ** words point back at what was just said or written.
- Question words go where the answer goes. No change in word order.
- 何か = something; 何も + negative = nothing; 何でも = anything.
`,
};
