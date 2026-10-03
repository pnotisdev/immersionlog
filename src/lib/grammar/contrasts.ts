/**
 * Contrast drills: sets of grammar that learners mix up, practised side by side. Each
 * question is one sentence with a blank and the choices that compete for it; the English
 * line fixes the meaning, so exactly one choice is right. Practice only: nothing here is
 * scheduled or recorded.
 */

export interface ContrastQuestion {
  /** Marked like a grammar sentence: the right choice is the text in braces. */
  japanese: string;
  reading: string;
  english: string;
  /** The right answer first, then the tempting wrong ones. Shuffled when shown. */
  choices: string[];
  /** Why it's that one, and what the others would have said. */
  why: string;
}

export interface ContrastGroup {
  id: string;
  title: string;
  /** One line on what's being told apart. */
  blurb: string;
  /** The points being compared, each with the one-line difference. */
  points: { pointId: string; gist: string }[];
  questions: ContrastQuestion[];
}

function q(japanese: string, reading: string, english: string, choices: string[], why: string): ContrastQuestion {
  return { japanese, reading, english, choices, why };
}

export const CONTRAST_GROUPS: ContrastGroup[] = [
  {
    id: "give-receive",
    title: "あげる・くれる・もらう",
    blurb: "Who gives to whom decides the verb.",
    points: [
      { pointId: "n4-ageru", gist: "giving away from you, or between other people" },
      { pointId: "n4-kureru", gist: "giving towards you or your side; the giver is the subject" },
      { pointId: "n4-morau", gist: "receiving; you are the subject and the giver takes に" },
    ],
    questions: [
      q("私は友達に誕生日のプレゼントを{あげました}。", "わたしはともだちにたんじょうびのプレゼントを{あげました}。", "I gave my friend a birthday present.", ["あげました", "くれました", "もらいました"], "You're the giver, and the gift moves away from you: あげる."),
      q("友達が私に本を{くれました}。", "ともだちがわたしにほんを{くれました}。", "A friend gave me a book.", ["くれました", "あげました", "もらいました"], "The gift comes towards you and the giver is the subject (友達が): くれる."),
      q("私は友達に本を{もらいました}。", "わたしはともだちにほんを{もらいました}。", "I received a book from a friend.", ["もらいました", "くれました", "あげました"], "You are the subject and the giver takes に: もらう."),
      q("田中さんが妹に花を{くれました}。", "たなかさんがいもうとにはなを{くれました}。", "Mr Tanaka gave my little sister some flowers.", ["くれました", "あげました", "もらいました"], "Your sister is on your side, so the gift is coming to your side: くれる."),
      q("田中さんは山田さんに花を{あげました}。", "たなかさんはやまださんにはなを{あげました}。", "Mr Tanaka gave Ms Yamada some flowers.", ["あげました", "くれました", "もらいました"], "Neither person is you or on your side: あげる."),
    ],
  },
  {
    id: "wa-ga",
    title: "は・が・を",
    blurb: "Topic, subject and object: three small particles that change what a sentence is about.",
    points: [
      { pointId: "n5-wa", gist: "marks what the sentence is about; the topic is usually known" },
      { pointId: "n5-ga", gist: "marks the subject, especially new information or the answer to who/what" },
      { pointId: "n5-ga-suki", gist: "好き・嫌い・上手 take が for the thing liked, where English has an object" },
    ],
    questions: [
      q("誰{が}来ましたか。", "だれ{が}きましたか。", "Who came?", ["が", "は"], "A question word that is the subject takes が."),
      q("あ、猫{が}いる！", "あ、ねこ{が}いる！", "Oh, there's a cat!", ["が", "は"], "A cat you've just noticed is new information: が. は would treat it as already known."),
      q("私{は}コーヒーが好きですが、妹はお茶が好きです。", "わたし{は}コーヒーがすきですが、いもうとはおちゃがすきです。", "I like coffee, but my sister likes tea.", ["は", "が"], "Setting two people against each other is what は does best."),
      q("私は日本語{が}好きです。", "わたしはにほんご{が}すきです。", "I like Japanese.", ["が", "を"], "好き takes が for the thing liked, not を."),
    ],
  },
  {
    id: "ni-de",
    title: "に・で",
    blurb: "Where something exists, where it happens, how, and to whom.",
    points: [
      { pointId: "n5-ni-location", gist: "に: where something exists, or where you end up" },
      { pointId: "n5-de-place", gist: "で: where an action takes place" },
      { pointId: "n5-de-means", gist: "で: the means or tool used" },
      { pointId: "n5-ni-target", gist: "に: the person an action is directed at" },
    ],
    questions: [
      q("公園{で}友達と遊びました。", "こうえん{で}ともだちとあそびました。", "I played with my friend at the park.", ["で", "に"], "The park is where the action (playing) happened: で."),
      q("机の上{に}本があります。", "つくえのうえ{に}ほんがあります。", "There is a book on the desk.", ["に", "で"], "Existence (ある・いる) takes に for its location."),
      q("バス{で}学校に行きます。", "バス{で}がっこうにいきます。", "I go to school by bus.", ["で", "に"], "The bus is the means: で."),
      q("友達{に}手紙を書きました。", "ともだち{に}てがみをかきました。", "I wrote a letter to my friend.", ["に", "で"], "The person the letter is directed at takes に."),
      q("駅{で}切符を買いました。", "えき{で}きっぷをかいました。", "I bought a ticket at the station.", ["で", "に"], "Buying is an action, so the station is where it happened: で."),
      q("東京{に}住んでいます。", "とうきょう{に}すんでいます。", "I live in Tokyo.", ["に", "で"], "住む takes に for where you live; it describes where you are, not an action there."),
    ],
  },
  {
    id: "reason-contrast",
    title: "ので・から・のに",
    blurb: "A reason, an invitation backed by a reason, and a result you didn't expect.",
    points: [
      { pointId: "n4-node", gist: "ので: a soft, factual reason" },
      { pointId: "n5-kara-because", gist: "から: a reason, fine before commands and suggestions" },
      { pointId: "n4-noni", gist: "のに: the result went against expectations" },
    ],
    questions: [
      q("一生懸命勉強した{のに}、試験に落ちました。", "いっしょうけんめいべんきょうした{のに}、しけんにおちました。", "Even though I studied hard, I failed the exam.", ["のに", "ので"], "Failing was the opposite of what studying should give: のに."),
      q("熱がある{ので}、今日は休みます。", "ねつがある{ので}、きょうはやすみます。", "Since I have a fever, I'll take today off.", ["ので", "のに"], "A plain reason, stated softly: ので."),
      q("暑い{から}、窓を開けましょう。", "あつい{から}、まどをあけましょう。", "It's hot, so let's open the window.", ["から", "ので"], "A suggestion after the reason: から is the natural one here."),
      q("もう春{なのに}、まだ寒いです。", "もうはる{なのに}、まださむいです。", "Even though it's already spring, it's still cold.", ["なのに", "なので"], "Cold in spring is unexpected: のに."),
    ],
  },
  {
    id: "before-after",
    title: "前に・てから・後で・ながら",
    blurb: "Ordering two actions, or doing them together.",
    points: [
      { pointId: "n5-mae-ni", gist: "〜前に: the other action comes later; the verb is dictionary form" },
      { pointId: "n5-te-kara", gist: "〜てから: after doing, then" },
      { pointId: "n5-ato-de", gist: "〜後で: after (noun の後で, or た-form + 後で)" },
      { pointId: "n5-nagara", gist: "〜ながら: both at the same time" },
    ],
    questions: [
      q("寝る{前に}、歯を磨きます。", "ねる{まえに}、はをみがきます。", "I brush my teeth before I sleep.", ["前に", "後で"], "Brushing comes first, then sleep: 前に, with the dictionary form."),
      q("手を{洗ってから}、食べましょう。", "てを{あらってから}、たべましょう。", "Let's eat after washing our hands.", ["洗ってから", "洗いながら", "洗う前に"], "Washing first, then eating: 〜てから."),
      q("音楽を{聞きながら}、勉強します。", "おんがくを{ききながら}、べんきょうします。", "I study while listening to music.", ["聞きながら", "聞いてから", "聞く前に"], "Two actions at once: 〜ながら."),
      q("食事の{後で}、散歩しました。", "しょくじの{あとで}、さんぽしました。", "I went for a walk after the meal.", ["後で", "前に"], "The walk came after the meal: 後で."),
      q("日本に来る{前に}、日本語を勉強しました。", "にほんにくる{まえに}、にほんごをべんきょうしました。", "I studied Japanese before I came to Japan.", ["前に", "後で"], "Studying came first; 前に always follows the dictionary form, even when the sentence is past."),
    ],
  },
  {
    id: "conditionals",
    title: "と・ば・たら・なら",
    blurb: "Four ways to say if or when, each with its own job.",
    points: [
      { pointId: "n4-to-conditional", gist: "と: a natural result or habit, nothing you choose" },
      { pointId: "n4-ba", gist: "ば: a condition for a result, with the condition stressed" },
      { pointId: "n4-tara", gist: "たら: once it has happened, what follows; works with requests and wishes" },
      { pointId: "n4-nara", gist: "なら: if that's the case, picking up what someone just said" },
    ],
    questions: [
      q("このボタンを押す{と}、ドアが開きます。", "このボタンをおす{と}、ドアがあきます。", "When you press this button, the door opens.", ["と", "なら"], "A fixed cause and result: と."),
      q("「京都に行くんです。」「京都{なら}、清水寺がおすすめですよ。」", "「きょうとにいくんです。」「きょうと{なら}、きよみずでらがおすすめですよ。」", "\"I'm going to Kyoto.\" \"If it's Kyoto, I recommend Kiyomizu Temple.\"", ["なら", "たら"], "Responding to what the other person just said is なら's job."),
      q("雨が{降ったら}、中止にしましょう。", "あめが{ふったら}、ちゅうしにしましょう。", "If it rains, let's cancel it.", ["降ったら", "降ると"], "A suggestion after the condition can't follow と: 〜たら."),
      q("もっと{安ければ}、買います。", "もっと{やすければ}、かいます。", "If it were cheaper, I'd buy it.", ["安ければ", "安いと"], "A condition for a decision you make: ば (と can't lead into 買います)."),
      q("家に帰る{と}、犬が待っていました。", "いえにかえる{と}、いぬがまっていました。", "When I got home, the dog was waiting.", ["と", "なら"], "A discovery on getting there, not a condition: と."),
    ],
  },
  {
    id: "evidence",
    title: "そう・そうだ・ようだ",
    blurb: "Looks like, I heard that, and it seems.",
    points: [
      { pointId: "n4-sou-looks", gist: "stem + そう: how something looks, right now" },
      { pointId: "n4-sou-hearsay", gist: "plain form + そうだ: something you heard" },
      { pointId: "n4-you-da", gist: "ようだ: a guess from what you can observe" },
    ],
    questions: [
      q("このケーキは{おいしそう}です。", "このケーキは{おいしそう}です。", "This cake looks delicious.", ["おいしそう", "おいしいそう"], "Judging by looks: the stem おいし plus そう. おいしいそうだ would mean you heard it was."),
      q("田中さんは来週結婚する{そうです}。", "たなかさんはらいしゅうけっこんする{そうです}。", "I hear Mr Tanaka is getting married next week.", ["そうです", "ようです"], "Passing on what you were told: plain form + そうだ."),
      q("今にも雨が{降りそう}です。", "いまにもあめが{ふりそう}です。", "It looks like it's about to rain.", ["降りそう", "降るそう"], "How the sky looks right now: stem + そう."),
      q("電気がついている。まだ誰かいる{ようです}。", "でんきがついている。まだだれかいる{ようです}。", "The light is on. It seems someone is still here.", ["ようです", "そうです"], "A guess from what you can see: ようだ. そうです here would mean someone told you."),
    ],
  },
  {
    id: "te-forms",
    title: "ている・てある・ておく・てしまう",
    blurb: "Four ways a て-form can describe a state or an action's purpose.",
    points: [
      { pointId: "n5-te-iru", gist: "ている: in progress, or the state that remains" },
      { pointId: "n4-te-aru", gist: "てある: someone did it on purpose and it's still that way" },
      { pointId: "n4-te-oku", gist: "ておく: do it ahead, in preparation" },
      { pointId: "n4-te-shimau", gist: "てしまう: finished, or regrettably done" },
    ],
    questions: [
      q("暑いので、窓が{開けてあります}。", "あついので、まどが{あけてあります}。", "It's hot, so the window has been left open (on purpose).", ["開けてあります", "開いています"], "Someone opened it deliberately and it stays that way: てある."),
      q("ドアが{開いています}。誰かいるのかな。", "ドアが{あいています}。だれかいるのかな。", "The door is open. I wonder if someone's in.", ["開いています", "開けてあります"], "Just describing the state you see, with no hint of who did it: ている."),
      q("旅行の前に、ホテルを{予約しておきます}。", "りょこうのまえに、ホテルを{よやくしておきます}。", "Before the trip, I'll book a hotel in advance.", ["予約しておきます", "予約してしまいます"], "Doing something now so it's ready later: ておく."),
      q("大事な書類を{なくしてしまいました}。", "だいじなしょるいを{なくしてしまいました}。", "I've lost the important documents (oh no).", ["なくしてしまいました", "なくしておきました"], "A regretful, finished result: てしまう."),
      q("今、友達と{食べています}。", "いま、ともだちと{たべています}。", "I'm eating with a friend right now.", ["食べています", "食べてしまいます"], "An action in progress: ている."),
    ],
  },
  {
    id: "koto-ni",
    title: "ことにする・ことになる・ようにする・ようになる",
    blurb: "Deciding versus being decided for, and trying versus becoming able.",
    points: [
      { pointId: "n4-koto-ni-suru", gist: "ことにする: I decided" },
      { pointId: "n4-koto-ni-naru", gist: "ことになる: it was decided (by circumstances or others)" },
      { pointId: "n4-you-ni-suru", gist: "ようにする: I make an effort to" },
      { pointId: "n4-you-ni-naru", gist: "ようになる: I've come to be able to or to do" },
    ],
    questions: [
      q("来月から運動する{ことにしました}。", "らいげつからうんどうする{ことにしました}。", "I decided to exercise from next month.", ["ことにしました", "ことになりました"], "Your own decision: ことにする."),
      q("来月、大阪に転勤する{ことになりました}。", "らいげつ、おおさかにてんきんする{ことになりました}。", "It's been decided that I'll be transferred to Osaka next month.", ["ことになりました", "ことにしました"], "The company decided, not you: ことになる."),
      q("毎日野菜を食べる{ようにしています}。", "まいにちやさいをたべる{ようにしています}。", "I try to eat vegetables every day.", ["ようにしています", "ようになっています"], "An ongoing effort: ようにする."),
      q("やっと泳げる{ようになりました}。", "やっとおよげる{ようになりました}。", "I've finally become able to swim.", ["ようになりました", "ことになりました"], "A change in ability: ようになる."),
      q("この会社では、ここで写真を撮れない{ことになっています}。", "このかいしゃでは、ここでしゃしんをとれない{ことになっています}。", "At this company, photos aren't allowed here.", ["ことになっています", "ことにしています"], "A rule set by someone else: ことになっている."),
    ],
  },
  {
    id: "tame-you",
    title: "ために・ように",
    blurb: "Purpose: your own deliberate goal, or an outcome you hope will happen.",
    points: [
      { pointId: "n4-tame-ni", gist: "ために: a goal you act towards, same subject, volitional" },
      { pointId: "n4-you-ni", gist: "ように: so that something comes about, often a non-volitional verb or a different subject" },
    ],
    questions: [
      q("日本に留学する{ために}、お金を貯めています。", "にほんにりゅうがくする{ために}、おかねをためています。", "I'm saving money in order to study abroad in Japan.", ["ために", "ように"], "Your own goal, with a verb you control: ために."),
      q("子どもが寝られる{ように}、静かにしています。", "こどもがねられる{ように}、しずかにしています。", "I'm keeping quiet so the children can sleep.", ["ように", "ために"], "A different subject (the children) with a potential verb: ように."),
      q("忘れない{ように}、メモします。", "わすれない{ように}、メモします。", "I'll make a note so I don't forget.", ["ように", "ために"], "A negative, non-volitional outcome: ように."),
      q("健康の{ために}、毎朝走っています。", "けんこうの{ために}、まいあさはしっています。", "I run every morning for my health.", ["ために", "ように"], "After a noun, for the sake of: noun + の + ために."),
      q("先生の話がよく聞こえる{ように}、前に座りました。", "せんせいのはなしがよくきこえる{ように}、まえにすわりました。", "I sat at the front so I could hear the teacher well.", ["ように", "ために"], "聞こえる isn't something you do at will: ように."),
    ],
  },
  {
    id: "certainty",
    title: "はず・かもしれない・に違いない",
    blurb: "How sure you are, from a guess up to a firm conclusion.",
    points: [
      { pointId: "n4-hazu", gist: "はず: it should be so, from what you know" },
      { pointId: "n4-kamoshirenai", gist: "かもしれない: it's possible" },
      { pointId: "n3-ni-chigainai", gist: "に違いない: it must be, from strong evidence" },
    ],
    questions: [
      q("田中さんは今日休みです。だから会社にいない{はずです}。", "たなかさんはきょうやすみです。だからかいしゃにいない{はずです}。", "Mr Tanaka has the day off, so he shouldn't be at the office.", ["はずです", "かもしれません"], "A conclusion from a known fact: はず."),
      q("もしかしたら、明日は雨が降る{かもしれません}。", "もしかしたら、あしたはあめがふる{かもしれません}。", "Maybe it will rain tomorrow.", ["かもしれません", "はずです"], "もしかしたら signals a bare possibility: かもしれない."),
      q("あの顔を見ると、彼は何か隠している{に違いありません}。", "あのかおをみると、かれはなにかかくしている{にちがいありません}。", "Looking at his face, he must be hiding something.", ["に違いありません", "かもしれません"], "Strong evidence and strong confidence: に違いない."),
      q("彼は日本に十年住んでいたから、日本語が上手な{はず}です。", "かれはにほんにじゅうねんすんでいたから、にほんごがじょうずな{はず}です。", "He lived in Japan for ten years, so his Japanese should be good.", ["はず", "かもしれない"], "A reasoned expectation: はず."),
    ],
  },
  {
    id: "okage-sei",
    title: "おかげで・せいで",
    blurb: "A cause, with thanks or with blame.",
    points: [
      { pointId: "n3-okage-de", gist: "おかげで: a good result, with gratitude" },
      { pointId: "n3-sei-de", gist: "せいで: a bad result, with blame" },
    ],
    questions: [
      q("先生の{おかげで}、試験に合格しました。", "せんせいの{おかげで}、しけんにごうかくしました。", "Thanks to my teacher, I passed the exam.", ["おかげで", "せいで"], "Passing is good and you're grateful: おかげ."),
      q("寝坊した{せいで}、電車に乗り遅れました。", "ねぼうした{せいで}、でんしゃにのりおくれました。", "Because I overslept, I missed the train.", ["せいで", "おかげで"], "Missing the train is bad, and oversleeping is the blame: せい."),
      q("友達が手伝ってくれた{おかげで}、早く終わりました。", "ともだちがてつだってくれた{おかげで}、はやくおわりました。", "Thanks to my friend helping, it finished early.", ["おかげで", "せいで"], "A good outcome with someone to thank: おかげ."),
      q("雨の{せいで}、試合が中止になりました。", "あめの{せいで}、しあいがちゅうしになりました。", "Because of the rain, the match was cancelled.", ["せいで", "おかげで"], "A cancellation is a bad result: せい."),
      q("薬を飲んだ{おかげで}、熱が下がりました。", "くすりをのんだ{おかげで}、ねつがさがりました。", "Thanks to the medicine, my fever went down.", ["おかげで", "せいで"], "The fever dropping is good news: おかげ."),
    ],
  },
  {
    id: "keigo",
    title: "尊敬語・謙譲語",
    blurb: "Raise the other person's actions, lower your own.",
    points: [
      { pointId: "n4-sonkeigo", gist: "尊敬語: raises the person whose action it is" },
      { pointId: "n4-kenjougo", gist: "謙譲語: lowers your own action towards them" },
      { pointId: "n4-kudasaru-itadaku", gist: "くださる・いただく・さしあげる: giving and receiving, politely" },
    ],
    questions: [
      q("先生が私に本を{くださいました}。", "せんせいがわたしにほんを{くださいました}。", "My teacher gave me a book.", ["くださいました", "いただきました", "さしあげました"], "The teacher is the giver and is raised: くださる."),
      q("先生に本を{いただきました}。", "せんせいにほんを{いただきました}。", "I received a book from my teacher.", ["いただきました", "くださいました", "さしあげました"], "You are the receiver, humbly: いただく."),
      q("先生が来週{いらっしゃいます}。", "せんせいがらいしゅう{いらっしゃいます}。", "The teacher will come next week.", ["いらっしゃいます", "参ります"], "A raised person's action takes the respectful verb: いらっしゃる."),
      q("私が明日そちらに{参ります}。", "わたしがあしたそちらに{まいります}。", "I'll come over to you tomorrow.", ["参ります", "いらっしゃいます"], "Your own action, humbly: 参る."),
      q("社長が資料を{ご覧になりました}。", "しゃちょうがしりょうを{ごらんになりました}。", "The president looked at the documents.", ["ご覧になりました", "拝見しました"], "The president's action, respectfully: ご覧になる."),
      q("私が先生の写真を{拝見しました}。", "わたしがせんせいのしゃしんを{はいけんしました}。", "I looked at the teacher's photos.", ["拝見しました", "ご覧になりました"], "Your own action towards the teacher, humbly: 拝見する."),
    ],
  },
  {
    id: "voice",
    title: "受身・使役・可能",
    blurb: "Being done to, making someone do, and being able to.",
    points: [
      { pointId: "n4-passive", gist: "〜られる: the subject has something done to them" },
      { pointId: "n4-causative", gist: "〜させる: the subject makes or lets someone do it" },
      { pointId: "n4-potential", gist: "〜られる・〜える: the subject can do it" },
    ],
    questions: [
      q("先生に{褒められました}。", "せんせいに{ほめられました}。", "I was praised by the teacher.", ["褒められました", "褒めさせました"], "You are on the receiving end: passive."),
      q("子どもに野菜を{食べさせました}。", "こどもにやさいを{たべさせました}。", "I made my child eat vegetables.", ["食べさせました", "食べられました"], "You caused your child to eat: causative."),
      q("私は納豆が{食べられます}。", "わたしはなっとうが{たべられます}。", "I can eat natto.", ["食べられます", "食べさせます"], "Ability: potential. The causative would mean making someone else eat it."),
      q("傘がなくて、雨に{降られました}。", "かさがなくて、あめに{ふられました}。", "I had no umbrella and got rained on.", ["降られました", "降らせました"], "Rain affected you, to your annoyance: the passive of trouble."),
    ],
  },
  {
    id: "koto-ga-aru",
    title: "たことがある・ことがある",
    blurb: "Have you ever, versus it sometimes happens.",
    points: [
      { pointId: "n5-ta-koto-ga-aru", gist: "た-form + ことがある: an experience you've had" },
      { pointId: "n4-koto-ga-aru", gist: "dictionary form + ことがある: something that happens sometimes" },
    ],
    questions: [
      q("富士山に{登ったことがあります}。", "ふじさんに{のぼったことがあります}。", "I have climbed Mt Fuji.", ["登ったことがあります", "登ることがあります"], "A past experience: た-form."),
      q("時々夜中まで{勉強することがあります}。", "ときどきよなかまで{べんきょうすることがあります}。", "Sometimes I study until midnight.", ["勉強することがあります", "勉強したことがあります"], "Something that happens now and then: dictionary form."),
      q("一度も外国に{行ったことがありません}。", "いちどもがいこくに{いったことがありません}。", "I've never been abroad.", ["行ったことがありません", "行くことがありません"], "Never having had the experience: た-form."),
      q("最近、バスが{遅れることがあります}。", "さいきん、バスが{おくれることがあります}。", "Lately the bus is sometimes late.", ["遅れることがあります", "遅れたことがあります"], "A recurring occasional event: dictionary form."),
    ],
  },
  {
    id: "dake-shika",
    title: "だけ・しか・も",
    blurb: "Only, nothing but, and as many as.",
    points: [
      { pointId: "n5-dake", gist: "だけ: only; the sentence stays positive" },
      { pointId: "n5-shika-nai", gist: "しか〜ない: nothing but; always with a negative, and it sounds like too little" },
      { pointId: "n4-mo-number", gist: "number + も: as many as; it sounds like a lot" },
    ],
    questions: [
      q("財布に百円{しか}ありません。", "さいふにひゃくえん{しか}ありません。", "I have only 100 yen in my wallet (and that's too little).", ["しか", "だけ"], "Negative verb and a feeling of not enough: しか."),
      q("試験に合格したのは、田中さん{だけ}です。", "しけんにごうかくしたのは、たなかさん{だけ}です。", "Only Mr Tanaka passed the exam.", ["だけ", "しか"], "A positive sentence with only: だけ."),
      q("昨日は五時間{も}寝ました。", "きのうはごじかん{も}ねました。", "I slept as many as five hours yesterday.", ["も", "だけ"], "A surprising amount: number + も."),
      q("お金は千円{だけ}あります。", "おかねはせんえん{だけ}あります。", "I have just 1,000 yen.", ["だけ", "しか"], "あります is positive, so only だけ fits (しか would need ありません)."),
    ],
  },
  {
    id: "want",
    title: "たい・がほしい・てほしい",
    blurb: "Wanting to do, wanting a thing, wanting someone else to do.",
    points: [
      { pointId: "n5-tai", gist: "〜たい: you want to do something" },
      { pointId: "n5-ga-hoshii", gist: "がほしい: you want a thing" },
      { pointId: "n4-te-hoshii", gist: "〜てほしい: you want someone else to do it" },
    ],
    questions: [
      q("新しいパソコンが{ほしいです}。", "あたらしいパソコンが{ほしいです}。", "I want a new computer.", ["ほしいです", "買いたいです"], "A thing you want, marked with が: ほしい."),
      q("新しいパソコンを{買いたいです}。", "あたらしいパソコンを{かいたいです}。", "I want to buy a new computer.", ["買いたいです", "ほしいです"], "You want to do something (buy): verb stem + たい."),
      q("友達に手伝って{ほしい}と思っています。", "ともだちにてつだって{ほしい}とおもっています。", "I want my friend to help me.", ["ほしい", "たい"], "Wanting someone else to do it: て-form + ほしい."),
      q("夏休みは海に行き{たい}です。", "なつやすみはうみにいき{たい}です。", "I want to go to the sea this summer.", ["たい", "ほしい"], "Your own wish to do something: stem + たい."),
    ],
  },
];

export function getContrastGroup(id: string): ContrastGroup | undefined {
  return CONTRAST_GROUPS.find((g) => g.id === id);
}
