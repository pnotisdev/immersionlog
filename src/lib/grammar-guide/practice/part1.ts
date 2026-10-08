/** Longer reading passages for Part 1. */

export const part1Practice: Record<string, string> = {
  "sentence-shape": `
## Longer sentences

Now try the same method on sentences with more pieces. The skeleton never changes: pieces with tags, then the verb.

> 昨日|きのう|yesterday ; 私は|わたしは|as for me ; 友達と|ともだちと|with a friend ; 駅の近くの小さな店で|えきのちかくのちいさなみせで|at a small shop near the station ; 安くておいしいラーメンを|やすくておいしいラーメンを|cheap, tasty ramen (object) ; *食べた|たべた|ate
= Yesterday I ate cheap, tasty ramen with a friend at a small shop near the station.

:::read Step by step
1. Find the end: **食べた** ("ate").
2. Tags, left to right: 昨日 (when) · 私は (topic) · 友達**と** (with) · 店**で** (where) · ラーメン**を** (what).
3. Each piece may be long. 駅の近くの小さな店 is just a chain of の and an adjective in front of **店**. 安くておいしいラーメン is two adjectives joined with て in front of **ラーメン**.
:::

A short passage shows how the topic carries across sentences and subjects get dropped:

> 山田さんは|やまださんは|as for Yamada ; 学生です|がくせいです|is a student
> 毎日|まいにち|every day ; 図書館で|としょかんで|at the library ; 勉強します|べんきょうします|studies
> でも|but ; 日曜日は|にちようびは|as for Sunday ; 休みます|やすみます|rests
> 友達と|ともだちと|with friends ; 映画を|えいがを|a movie ; 見に|みに|to watch ; 行きます|いきます|goes
= Yamada is a student.
= Every day he studies at the library.
= But on Sundays he takes a rest.
= He goes to the movies with friends.

:::read Step by step
1. Only the first sentence names 山田さん. The three after it have no subject, so they are still about him.
2. In sentence three, **日曜日は** is a new, contrasting topic. It doesn't change who is acting, only which day we are talking about.
3. In sentence four, **見に行きます** is "go in order to see" (the *purpose に* from the particles lesson).
:::
`,

  desu: `
## Longer sentences

A paragraph of definitions uses だ and です over and over, joined by other words. Read for the pattern: noun + copula, with descriptions stacked in front.

> 東京は|とうきょうは|as for Tokyo ; 日本の|にほんの|Japan's ; 首都で|しゅとで|capital (and) ; 世界で|せかいで|in the world ; 一番|いちばん|most ; 人口が|じんこうが|population (subject) ; 多い|おおい|large ; 都市の|としの|cities'  ; 一つです|ひとつです|one of
= Tokyo is the capital of Japan, and one of the most populous cities in the world.

:::read Step by step
1. **首都で** is the て-form of だ: "is the capital, and...". It joins two descriptions without ending the sentence.
2. 世界で一番人口が多い都市 is a clause in front of **都市**: "the city whose population is largest in the world".
3. **都市の一つです**: "is one of the cities". The last word is the only one carrying です.
:::

Now a conversation, plain and polite mixed:

> あの人は|あのひとは|that person ; 誰ですか|だれですか|who is?
> 田中先生です|たなかせんせいです|is Teacher Tanaka
> 先生じゃなくて|せんせいじゃなくて|is not a teacher, and ; 学生だと|がくせいだと|a student ; 思っていました|おもっていました|I thought
> 去年までは|きょねんまでは|until last year ; 学生でした|がくせいでした|was a student
= Who is that person over there?
= That's Professor Tanaka.
= I thought he wasn't a teacher but a student.
= Until last year, he was a student.

:::read Step by step
1. **先生じゃなくて** is the て-form of じゃない: "is not a teacher, and...".
2. **学生だと思っていました** quotes the thought 学生だ with と, then 思っていました ("I was thinking").
3. The last line uses the past **でした**, because "was a student" is over.
:::
`,

  "nouns-names": `
## Longer sentences

Names, titles and family words appear together in real speech. Notice how every person is given an ending, and how the speaker's own family drops it.

> 私の|わたしの|my ; 母は|ははは|as for my mother ; 田中先生の|たなかせんせいの|Teacher Tanaka's ; お母さんと|おかあさんと|mother (respectful) and ; 友達で|ともだちで|are friends, and ; 毎週|まいしゅう|every week ; 一緒に|いっしょに|together ; お茶を|おちゃを|tea (object) ; 飲んでいます|のんでいます|are drinking
= My mother and Teacher Tanaka's mother are friends, and they have tea together every week.

:::read Step by step
1. **母** is my own mother (no ending). **お母さん** is somebody else's mother (the ending raises her).
2. **母は…友達で、…飲んでいます**: one topic, two predicates, joined by the て-form of だ.
3. **田中先生のお母さん** is a chain of の: Tanaka-teacher's mother.
:::

> 山田さんと|やまださんと|with Mr. Yamada ; 鈴木さんは|すずきさんは|as for Ms. Suzuki ; 会社の|かいしゃの|company's ; 先輩です|せんぱいです|is a senior
> 後輩の|こうはいの|junior ; 佐藤君は|さとうくんは|as for Sato ; 二人に|ふたりに|to the two ; とても|very ; お世話に|おせわに|care ; なっています|なっています|is receiving
= Mr. Yamada and Ms. Suzuki are my seniors at the company.
= Sato, a junior, owes a lot to both of them.

:::read Step by step
1. **先輩** and **後輩** are relationship words. Here they name rank, not age.
2. **佐藤君** uses くん, which a senior would use for a junior. The endings tell you who is speaking about whom.
3. **お世話になっている** is a set phrase meaning "being looked after by". Treat the whole thing as one unit.
:::
`,

  "topic-wa": `
## Longer sentences

When topics pile up, は acts like a signpost: "talking about X now". Read the passage and track the signposts.

> 私は|わたしは|as for me ; 肉は|にくは|as for meat ; 食べますが|たべますが|eat, but ; 魚は|さかなは|as for fish ; 食べません|たべません|don't eat
> でも|but ; 寿司だけは|すしだけは|sushi alone ; 好きです|すきです|like
= I eat meat, but I don't eat fish.
= But sushi, at least, I like.

:::read Step by step
1. The first sentence sets up a contrast with two は: 肉は / 魚は.
2. **寿司だけは** brings in an exception: "just sushi (as opposed to other fish)". は here means "at least".
3. Notice that 肉 and 魚 are really objects (食べる takes を). When a thing is set up for contrast, は **replaces** を.
:::

A longer paragraph, with the topic changing from the weather to a plan:

> 今日は|きょうは|as for today ; 朝から|あさから|since morning ; 雨だ|あめだ|is rainy
> 天気予報によると|てんきよほうによると|according to the forecast ; 明日も|あしたも|tomorrow too ; 雨らしい|あめらしい|apparently rain
> 明日の|あしたの|tomorrow's ; 遠足は|えんそくは|as for the excursion ; どうなるのだろう|どうなるのだろう|I wonder what will happen
= It has been rainy since this morning.
= According to the forecast, it seems it will rain tomorrow too.
= I wonder what will happen to tomorrow's excursion.

:::read Step by step
1. **明日も**: も replaces は ("tomorrow, too"), pointing back at today.
2. **明日の遠足は**: a new topic is introduced by は. The previous topic (the weather) is now background.
3. **どうなるのだろう** is "I wonder what will become". Nothing marks who wonders: it is the narrator's own thought.
:::
`,

  "subject-ga": `
## Longer sentences

Stories and explanations use が to bring things in, then は to talk about them. Read this little story and watch the switch.

> 昔々|むかしむかし|long ago ; ある村に|あるむらに|in a certain village ; 優しい|やさしい|kind ; 若者が|わかものが|a young man (new) ; 住んでいました|すんでいました|lived
> 若者は|わかものは|the young man (now known) ; 毎日|まいにち|every day ; 山で|やまで|in the mountains ; 木を|きを|wood ; 切っていました|きっていました|was cutting
> ある日|あるひ|one day ; 山の奥から|やまのおくから|from deep in the mountains ; 大きな|おおきな|big ; 声が|こえが|a voice (new) ; 聞こえてきました|きこえてきました|came to be heard
= Long ago, in a certain village, there lived a kind young man.
= The young man cut wood in the mountains every day.
= One day, a loud voice came from deep in the mountains.

:::read Step by step
1. **若者が**: first mention. **若者は**: second mention, now the topic.
2. **声が聞こえてきました**: a sound is "discovered", so が. A sound that appears out of nowhere is the standard が situation.
3. **聞こえてくる** is "come to be heard": 聞こえる plus the "toward now" くる.
:::

Descriptions: topic は + part が.

> この|this ; 町は|まちは|as for town ; 夏が|なつが|summer ; 暑く|あつく|hot ; 冬が|ふゆが|winter ; 寒い|さむい|cold ; ことで|ことで|being ; 有名です|ゆうめいです|is famous
= This town is famous for hot summers and cold winters.

:::read Step by step
1. **町は** is the topic. **夏が暑く、冬が寒い** are two "part が + description" units.
2. **ことで有名です**: "is famous for the fact that…". The clause is turned into a noun with **こと**.
:::
`,

  "role-particles": `
## Longer sentences

Real sentences stack several of these particles. Practise tagging each piece first, then read the whole.

> 先週の|せんしゅうの|last week's ; 日曜日に|にちようびに|on Sunday ; 家族と|かぞくと|with family ; 車で|くるまで|by car ; 海まで|うみまで|as far as the sea ; 行って|いって|went and ; 友達に|ともだちに|to a friend ; 写真を|しゃしんを|photos ; 送りました|おくりました|sent
= Last Sunday I drove to the sea with my family and sent photos to a friend.

:::read Step by step
1. The last word is 送りました. Before it, **行って** is a て-form: two verbs, one sentence.
2. Tags for 行って: 日曜日**に** (when) · 家族**と** (with) · 車**で** (by) · 海**まで** (as far as).
3. Tags for 送りました: 友達**に** (recipient) · 写真**を** (object).
:::

A formal sentence where the compound particles from later lessons already appear:

> 駅から|えきから|from the station ; 会社まで|かいしゃまで|to the company ; 歩いて|あるいて|on foot ; 十分ほど|じっぷんほど|about ten minutes ; かかります|かかります|it takes
= It takes about ten minutes to walk from the station to the company.

:::read Step by step
1. **から…まで** brackets the route; **歩いて** is the means (て-form again).
2. **十分ほど**: ほど marks a rough amount. The subject is understood: "it".
:::
`,

  "particles-compared": `
## Longer sentences

Passages with several confusable particles are the best practice. Check each choice with the question from the lesson.

> 昨日|きのう|yesterday ; 駅で|えきで|at the station ; 先生に|せんせいに|to the teacher ; 会いました|あいました|met
> 先生は|せんせいは|the teacher ; 電車に|でんしゃに|onto the train ; 乗って|のって|rode ; 学校へ|がっこうへ|toward school ; 向かう|むかう|was heading ; ところでした|ところでした|was about to
= Yesterday I ran into my teacher at the station.
= He was just about to board a train and head for school.

:::read Step by step
1. **駅で会う**: the meeting is an action in a place: で. **先生に会う**: 会う takes に for the person met.
2. **電車に乗る**: onto the train: に. **学校へ向かう**: toward: へ.
3. **ところでした** (was at the point of) turns the whole clause into a stage of an action.
:::

> この|this ; 木で|きで|out of wood ; 作った|つくった|made ; 机は|つくえは|desk ; 友達から|ともだちから|from a friend ; もらいました|もらいました|received
= I got this desk, made of wood, from a friend.

:::read Step by step
1. **木で作った**: material you can still recognise: で.
2. **友達からもらう**: the giver is the source: から (に is also fine here).
:::
`,

  no: `
## Longer sentences

Long の chains are the hardest of the easy things. Read them from the **end**, then widen.

> 去年の|きょねんの|last year's ; 夏休みの|なつやすみの|summer vacation's ; 最後の|さいごの|last ; 日の|ひの|day's ; 夕方の|ゆうがたの|evening's ; 花火は|はなびは|as for fireworks ; 今でも|いまでも|even now ; 忘れられません|わすれられません|can't forget
= I still can't forget the fireworks on the evening of the last day of last summer's vacation.

:::read Step by step
1. The topic is **花火** (fireworks). Everything before it narrows it down.
2. Peel from the right: 夕方の花火 (the evening's fireworks) → 日の夕方の花火 → 最後の日 → 夏休みの最後の日 → 去年の夏休み.
3. Five の in a row, yet only one noun at the end carries the topic. Practise by shrinking: 花火 → 夕方の花火 → …
:::

> これは|this ; 私が|わたしが|I ; 昨日|きのう|yesterday ; 買った|かった|bought ; 本で|ほんで|is the book and ; あれは|that ; 友達の|ともだちの|friend's ; です|is
= This is the book I bought yesterday, and that one is my friend's.

:::read Step by step
1. **友達の** ends with a dropped noun. **の** stands in for 本.
2. **私が昨日買った本**: a clause in front of 本 (the next lesson on describing clauses). The subject of the clause takes が.
:::
`,

  "pointing-asking": `
## Longer sentences

Real texts use そ-words as glue between sentences. Track what each そ points at.

> 先週|せんしゅう|last week ; 新しい|あたらしい|new ; 店が|みせが|shop (new) ; 駅の前に|えきのまえに|in front of the station ; できました|できました|opened
> その店では|そのみせでは|at that shop ; 安いのに|やすいのに|despite being cheap ; とてもおいしいパンが|とてもおいしいパンが|very good bread (new) ; 買えます|かえます|you can buy
> それで|and so ; 毎朝|まいあさ|every morning ; そこに|そこに|there ; 寄ってから|よってから|stopping by and then ; 会社へ|かいしゃへ|to work ; 行きます|いきます|go
= A new shop opened in front of the station last week.
= At that shop you can buy very good bread, even though it's cheap.
= So every morning I stop by there before going to work.

:::read Step by step
1. **その店** = the shop just mentioned. **そこ** = that same place. **それで** = "and because of that".
2. Replace each そ-word with the thing it points to, and the passage reads without them.
3. **安いのに**: "although it is cheap". The bread is good *despite* the price, which is why の に is used.
:::

> どれが|which one ; 一番|いちばん|most ; 好きか|すきか|liked (or not) ; 誰にも|だれにも|to anyone ; 言いませんでした|いいませんでした|didn't say
= I didn't tell anyone which one I liked best.

:::read Step by step
1. **どれが一番好きか** is a question clause ("which one is liked best?") used as an object.
2. **誰にも…ません**: the "no one" pattern from the lesson. 誰 + **にも** + a negative means "to no one"; the に (recipient) stays in front of も.
:::
`,

  sounds: `
## Longer sentences

Read these aloud and listen to your own rhythm. Count beats, not syllables.

> おとうさんは|おとうさんは|father ; きのう|yesterday ; がっこうで|at school ; ともだちと|with friends ; おおきな|big ; ビールを|beer ; のんだ|drank
= Father drank a big beer with his friends at school yesterday.
+ A silly sentence, but a good test of long vowels: おとうさん, きのう, おおきな, ビール.

> 東京の|とうきょうの|Tokyo's ; 新宿駅は|しんじゅくえきは|Shinjuku Station ; 世界で|せかいで|in the world ; 一番|いちばん|most ; 乗る人が|のるひとが|people who ride ; 多い駅です|おおいえきです|a station with many
= Shinjuku Station in Tokyo is the busiest station in the world.
+ Say it slowly first, giving ん a full beat of its own.

:::read Step by step
1. 東京 is と・う・きょ・う: four beats.
2. しんじゅくえき has **ん before じ**: say it as an "n" sound.
3. 一番 is い・ち・ば・ん: four beats. The last ん is a full beat, held with the mouth closed.
:::
`,

  "politeness-greetings": `
## Longer sentences

A whole first-meeting exchange mixes set phrases and ordinary grammar. Read it as a script.

> 初めまして|はじめまして|nice to meet you ; 、 ; 田中と|たなかと|Tanaka (quote) ; 申します|もうします|am called
> 今年から|ことしから|since this year ; この会社で|このかいしゃで|at this company ; 働いています|はたらいています|am working
> まだ|still ; 慣れていないので|なれていないので|since I'm not used to it ; 色々|いろいろ|various things ; 教えて|おしえて|teaching ; いただけると|いただけると|if you'd be so kind ; ありがたいです|ありがたいです|I would be grateful
> どうぞ|please ; よろしくお願いします|よろしくおねがいします|I ask for your kindness
= Nice to meet you. My name is Tanaka.
= I have been working at this company since this year.
= I'm not used to it yet, so I would be grateful if you could teach me various things.
= Please treat me well.

:::read Step by step
1. **と申します** is humble: "I am called". (申す = 言う, humble.)
2. **慣れていないので**: the reason (ので) for the request that follows.
3. **教えていただけると…ありがたいです**: *if I could receive your teaching* + "grateful". An indirect request, very common at work.
:::
`,
};
