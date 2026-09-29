/**
 * Anime and manga art for the learning guide, hotlinked from AniList's CDN (never
 * downloaded or re-hosted here: the guide shows it with plain <img> tags, not
 * next/image, which would proxy and cache it). Fetched from graphql.anilist.co on
 * 2026-09-27; none of these entries is flagged adult. AniList renames or replaces
 * images occasionally, so a broken picture means re-running that query.
 */

export interface AnimeArt {
  /** AniList media id. */
  id: number;
  /** AniList files novels under manga. */
  kind: "anime" | "manga";
  title: string;
  en: string;
  cover: string;
  /** Wide art, about 1900×400. */
  banner: string;
  /** AniList's dominant cover colour, used behind the image while it loads. */
  color: string | null;
}

const BY_ID: Record<number, AnimeArt> = {
  85412: { id: 85412, kind: "manga", title: "少女終末旅行", en: "Girls' Last Tour", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85412-wzZ2QFwbZJED.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/85412-H9Uo0YNhxd9J.jpg", color: null },
  87383: { id: 87383, kind: "manga", title: "本好きの下剋上 ~司書になるためには手段を選んでいられません~ 第一部「兵士の娘」", en: "Ascendance of a Bookworm: Part 1", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx87383-0pZpv5P19QsX.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/n87383-foxXpWZRtgjR.jpg", color: "#e4a15d" },
  98263: { id: 98263, kind: "manga", title: "とんがり帽子のアトリエ", en: "Witch Hat Atelier", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx98263-kIeaTXrAbGkj.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/98263-inZk3YmhgbQh.jpg", color: "#f1c950" },
  136807: { id: 136807, kind: "manga", title: "ルックバック", en: "Look Back", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx136807-KNfQQTRD4HUK.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/136807-5i0zxn7OvOim.jpg", color: "#f1f1c9" },
  30: { id: 30, kind: "anime", title: "新世紀エヴァンゲリオン", en: "Neon Genesis Evangelion", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx30-AI1zr74Dh4ye.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/30-gEMoHHIqxDgN.jpg", color: "#f17843" },
  66: { id: 66, kind: "anime", title: "あずまんが大王 THE ANIMATION", en: "Azumanga Daioh", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx66-ZqYQWl6LsfeI.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/66-9q6Y6bMBwqrX.jpg", color: null },
  199: { id: 199, kind: "anime", title: "千と千尋の神隠し", en: "Spirited Away", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx199-sWefXJvXkDOb.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/199-Sm2RU5PSqw7T.jpg", color: "#e45d5d" },
  512: { id: 512, kind: "anime", title: "魔女の宅急便", en: "Kiki's Delivery Service", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx512-UwP8X4BR8YoM.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/512-Ssp3EE2NdeoA.jpg", color: "#50a1c9" },
  523: { id: 523, kind: "anime", title: "となりのトトロ", en: "My Neighbor Totoro", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx523-fErBvxOHP7IX.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/523-rl12Q0av1fCr.jpg", color: "#f19335" },
  527: { id: 527, kind: "anime", title: "ポケットモンスター", en: "Pokémon", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b527-t6dBVJ5OVcXK.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/527-69bO9vmmewWm.jpg", color: "#ffae00" },
  801: { id: 801, kind: "anime", title: "攻殻機動隊 S.A.C. 2nd GIG", en: "Ghost in the Shell: Stand Alone Complex 2nd GIG", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx801-nF9RyvPJu6s4.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/801-EtANUNZWAhbH.jpg", color: null },
  918: { id: 918, kind: "anime", title: "銀魂", en: "Gintama", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx918-iOaeBVUn4uK7.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/918-bljqHE1PFArH.jpg", color: "#f1865d" },
  966: { id: 966, kind: "anime", title: "クレヨンしんちゃん", en: "Shin Chan", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b966-QUCdKAk4ls9J.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/966-J5CwLLTBs4OO.jpg", color: "#e4e428" },
  1575: { id: 1575, kind: "anime", title: "コードギアス 反逆のルルーシュ", en: "Code Geass: Lelouch of the Rebellion", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1575-hsmWM2ydNm1m.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1575.jpg", color: "#c9d678" },
  1887: { id: 1887, kind: "anime", title: "らき☆すた", en: "Lucky☆Star", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1887-P36Pucd4qKji.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1887-wsvLo25cHip4.png", color: "#5093e4" },
  4081: { id: 4081, kind: "anime", title: "夏目友人帳", en: "Natsume's Book of Friends Season 1", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4081-xi08naD69tjr.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4081-dbeE4uMExtgc.jpg", color: "#86e450" },
  5081: { id: 5081, kind: "anime", title: "化物語", en: "Bakemonogatari", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5081-9GocceQ5Z865.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n5081-0Zcn5GOFYHMc.jpg", color: "#4393e4" },
  5680: { id: 5680, kind: "anime", title: "けいおん!", en: "K-ON!", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5680-r3AI3Cwfv0Aq.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5680-Mc9n4eFI4i0Y.jpg", color: "#e47843" },
  9253: { id: 9253, kind: "anime", title: "シュタインズ・ゲート", en: "Steins;Gate", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg", color: "#ffd6ae" },
  9756: { id: 9756, kind: "anime", title: "魔法少女まどか☆マギカ", en: "Puella Magi Madoka Magica", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9756-QnUGwlwwnsuN.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9756-d5M8NffgJJHB.jpg", color: "#f1c95d" },
  10165: { id: 10165, kind: "anime", title: "日常", en: "Nichijou - My Ordinary Life", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10165-tw8Cz7K9tfVJ.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/10165-1O0xQsic1qpB.jpg", color: "#e4bb93" },
  10800: { id: 10800, kind: "anime", title: "ちはやふる", en: "Chihayafuru", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10800-hofcUL0YEL7O.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/10800-hcHzj4rkDQzG.jpg", color: "#bbe443" },
  12189: { id: 12189, kind: "anime", title: "氷菓", en: "Hyouka", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-zj5AWUYO53Fv.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12189-TG0peUcKFqur.jpg", color: "#f1e4bb" },
  12815: { id: 12815, kind: "anime", title: "しろくまカフェ", en: "Polar Bear's Café", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/12815.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n12815-X8SIFF7sQEVi.jpg", color: "#c9e4a1" },
  13601: { id: 13601, kind: "anime", title: "PSYCHO-PASS サイコパス", en: "PSYCHO-PASS", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13601-i42VFuHpqEOJ.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/13601-YrCmS1oY4uBZ.jpg", color: "#288686" },
  16498: { id: 16498, kind: "anime", title: "進撃の巨人", en: "Attack on Titan", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-buvcRTBx4NSm.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg", color: "#f1a143" },
  17549: { id: 17549, kind: "anime", title: "のんのんびより", en: "Non Non Biyori", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17549-ROdV36u4nWkU.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/17549-J7bDkafpjQ0D.jpg", color: "#50e4bb" },
  20464: { id: 20464, kind: "anime", title: "ハイキュー!!", en: "HAIKYU!!", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20464-ooZUyBe4ptp9.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20464-PpYjO9cPN1gs.jpg", color: "#e48635" },
  20517: { id: 20517, kind: "anime", title: "ご注文はうさぎですか？", en: "Is the Order a Rabbit?", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20517-SNNUtav2knou.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20517.jpg", color: null },
  20665: { id: 20665, kind: "anime", title: "四月は君の嘘", en: "Your lie in April", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-TLgkL8T8IRFd.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20665-j4kSsfhfkM24.jpg", color: "#e4bb50" },
  20722: { id: 20722, kind: "anime", title: "ばらかもん", en: "Barakamon", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20722-2KAeq72E95dr.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20722-vjD7BMct1l1n.jpg", color: "#4386e4" },
  20912: { id: 20912, kind: "anime", title: "響け！ユーフォニアム", en: "Sound! Euphonium", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-SiiG4HPrjQlX.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20912-FbGbJuHlRKm7.jpg", color: "#5dc9e4" },
  20954: { id: 20954, kind: "anime", title: "聲の形", en: "A Silent Voice", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-sYRfE5jQRtSB.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20954-f30bHMXa5Qoe.jpg", color: "#5dbbe4" },
  21202: { id: 21202, kind: "anime", title: "この素晴らしい世界に祝福を！", en: "KONOSUBA -God's blessing on this wonderful world!", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21202-mPOr80AEjUcZ.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21202-UWijdV7RMnXo.jpg", color: "#5daee4" },
  21311: { id: 21311, kind: "anime", title: "文豪ストレイドッグス", en: "Bungo Stray Dogs", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21311-hAXyT8Yoh6G9.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21311-oVJYXoU38Lm5.jpg", color: "#e4bb50" },
  21459: { id: 21459, kind: "anime", title: "僕のヒーローアカデミア", en: "My Hero Academia", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-nYh85uj2Fuwr.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg", color: "#f1d643" },
  21507: { id: 21507, kind: "anime", title: "モブサイコ100", en: "Mob Psycho 100", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21507-6YUSbh2m0N1p.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21507-Qx8bGsLXUgLo.jpg", color: "#d65d1a" },
  21519: { id: 21519, kind: "anime", title: "君の名は。", en: "Your Name.", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-SUo3ZQuCbYhJ.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21519-1ayMXgNlmByb.jpg", color: "#0da1e4" },
  21776: { id: 21776, kind: "anime", title: "小林さんちのメイドラゴン", en: "Miss Kobayashi's Dragon Maid", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21776-bwPaYKhnKfUs.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21776-hI5smQyXFK7G.jpg", color: "#e4865d" },
  21827: { id: 21827, kind: "anime", title: "ヴァイオレット・エヴァーガーデン", en: "Violet Evergarden", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21827-ubzq619ZA2E9.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21827-ROucgYiiiSpR.jpg", color: "#3586e4" },
  30013: { id: 30013, kind: "manga", title: "ONE PIECE", en: "One Piece", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-BeslEMqiPhlk.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30013-hbbRZqC5MjYh.jpg", color: "#f1935d" },
  30021: { id: 30021, kind: "manga", title: "DEATH NOTE", en: "Death Note", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30021-FE6kmrfpuKyb.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/n30021-eZbrTpIjv10E.jpg", color: "#f1e4ae" },
  30104: { id: 30104, kind: "manga", title: "よつばと！", en: "Yotsuba&!", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30104-sUVzNlTWZ5cu.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30104-CDra9ye7UPGI.jpg", color: "#e4a135" },
  30399: { id: 30399, kind: "manga", title: "キノの旅-the Beautiful World-", en: "Kino's Journey: The Beautiful World", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30399-ePRU1jgaOBCG.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30399-xMvSxqWqvUuh.jpg", color: "#e49343" },
  30401: { id: 30401, kind: "manga", title: "寄生獣", en: "Parasyte", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30401-siY6wmwnHFi6.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30401-QDlISnJA72Jz.jpg", color: "#f1a128" },
  31224: { id: 31224, kind: "manga", title: "3月のライオン", en: "March Comes in Like a Lion", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31224-dxugU08jahRT.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/31224-7x74OyOI3qbj.jpg", color: "#f1c95d" },
  31397: { id: 31397, kind: "manga", title: "チーズスイートホーム", en: "Chi's Sweet Home", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31397-nk2SNXoSRwwF.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/31397-TRs1vYmORpbZ.jpg", color: "#e4e486" },
  33083: { id: 33083, kind: "manga", title: "涼宮ハルヒの憂鬱", en: "The Melancholy of Haruhi Suzumiya", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx33083-tlDz3pkPz1Mc.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/33083-U2rfzbGF7gYN.jpg", color: "#f14343" },
  39115: { id: 39115, kind: "manga", title: "狼と香辛料", en: "Spice & Wolf", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx39115-2uLgBuM30i1b.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/39115-Z0v0vS3jPvgW.jpg", color: null },
  53390: { id: 53390, kind: "manga", title: "進撃の巨人", en: "Attack on Titan", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx53390-1RsuABC34P9D.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/53390-6Uru5rrjh8zv.jpg", color: "#d6431a" },
  55096: { id: 55096, kind: "manga", title: "銀の匙", en: "Silver Spoon", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx55096-xdMg0fzQY52d.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/n55096-2sKPH7kmR7rb.jpg", color: "#f15043" },
  65243: { id: 65243, kind: "manga", title: "ハイキュー！！", en: "Haikyu!!", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx65243-mR4MnJFmfaOF.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/65243-naohhXW4M4b9.jpg", color: "#f17843" },
  85135: { id: 85135, kind: "manga", title: "聲の形", en: "A Silent Voice", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85135-11OOnyaqV71k.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/85135-BPNyMuWVvZjh.jpg", color: "#e49343" },
  85364: { id: 85364, kind: "manga", title: "ワンパンマン", en: "One Punch Man", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85364-O28PUKbABg8y.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/85364-0LKqTFdcZ5ys.jpg", color: "#1a1ad6" },
  85533: { id: 85533, kind: "manga", title: "からかい上手の高木さん", en: "Teasing Master Takagi-san", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85533-lrXvNT9iH9sY.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/85533-XGpHOVawHcU0.jpg", color: "#c9d6f1" },
  85737: { id: 85737, kind: "manga", title: "Re:ゼロから始める異世界生活", en: "Re:ZERO -Starting Life in Another World-", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85737-WkWOr5EgwPyo.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/85737-jCG8ine3fTDr.png", color: null },
  86082: { id: 86082, kind: "manga", title: "ダンジョン飯", en: "Delicious in Dungeon", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86082-MXizJxzbijdd.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/86082-L0gxhGsRsDDE.jpg", color: "#f1c993" },
  86559: { id: 86559, kind: "manga", title: "ゴールデンカムイ", en: "Golden Kamuy", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86559-Y4xDmoz4ud43.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/86559-hHgBaQktjtsd.jpg", color: "#f1860d" },
  87216: { id: 87216, kind: "manga", title: "鬼滅の刃", en: "Demon Slayer: Kimetsu no Yaiba", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx87216-c9bSNVD10UuD.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/87216-TVKEGfSxAqKs.jpg", color: "#f1d628" },
  94970: { id: 94970, kind: "manga", title: "ようこそ実力至上主義の教室へ", en: "Classroom of the Elite", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx94970-q77X5sfRIKvU.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/94970-9PvpnfpcaaDc.jpg", color: "#e450a1" },
  98444: { id: 98444, kind: "anime", title: "ゆるキャン△", en: "Laid-Back Camp", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98444-Vzysp1EsrzgD.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98444-FpH9lzLiafe9.jpg", color: "#f1ae5d" },
  99026: { id: 99026, kind: "manga", title: "薬屋のひとりごと", en: "The Apothecary Diaries", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx99026-5Eg650WAd9Rj.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/99026-CWFP526DyTGz.jpg", color: "#e4d6a1" },
  99468: { id: 99468, kind: "anime", title: "からかい上手の高木さん", en: "Teasing Master Takagi-san", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99468-XayCplkIL3Gf.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99468-WdWcFGyIeunj.jpg", color: "#50c9e4" },
  99699: { id: 99699, kind: "anime", title: "ゴールデンカムイ", en: "Golden Kamuy", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99699-mBCjpoWpAVGX.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99699-95D2XWA6eWAH.jpg", color: "#78281a" },
  101921: { id: 101921, kind: "anime", title: "かぐや様は告らせたい～天才たちの恋愛頭脳戦～", en: "Kaguya-sama: Love is War", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101921-ufrjLzhSz7L1.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101921-GgvvFhlNhzlF.jpg", color: "#e45086" },
  101922: { id: 101922, kind: "anime", title: "鬼滅の刃", en: "Demon Slayer: Kimetsu no Yaiba", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-33MtJGsUSxga.jpg", color: "#f1c9ae" },
  105778: { id: 105778, kind: "manga", title: "チェンソーマン", en: "Chainsaw Man", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-ppHaMwown6c9.jpg", color: "#f1c90d" },
  106286: { id: 106286, kind: "anime", title: "天気の子", en: "Weathering With You", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106286-5COcpd0J9VbL.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106286-3oKwiwjd7Wkm.jpg", color: "#5dbbe4" },
  106331: { id: 106331, kind: "manga", title: "違国日記", en: "Ikoku Nikki", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106331-C1F1hqpHnJ0U.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/106331-iV0HjU9dSnDR.jpg", color: "#fe9328" },
  108556: { id: 108556, kind: "manga", title: "SPY×FAMILY", en: "SPY x FAMILY", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx108556-NHjkz0BNJhLx.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/108556-iCiPfU0GU4OM.jpg", color: "#e4505d" },
  111233: { id: 111233, kind: "manga", title: "よふかしのうた", en: "Call of the Night", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx111233-bQQV6KWMBXz4.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/111233-U7rco1cixgQB.jpg", color: "#5dd6d6" },
  113415: { id: 113415, kind: "anime", title: "呪術廻戦", en: "JUJUTSU KAISEN", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg", color: "#e45d5d" },
  118586: { id: 118586, kind: "manga", title: "葬送のフリーレン", en: "Frieren: Beyond Journey’s End", cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-CXKgWikBFQgS.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/manga/banner/118586-R1c7mc72oPvS.jpg", color: "#e4ae5d" },
  130003: { id: 130003, kind: "anime", title: "ぼっち・ざ・ろっく！", en: "BOCCHI THE ROCK!", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-5F90a7BtsPQN.jpg", color: "#e4bb50" },
  133965: { id: 133965, kind: "anime", title: "古見さんは、コミュ症です。", en: "Komi Can’t Communicate", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133965-9TZBS4m4yvED.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/133965-spTi0WE7jR0r.jpg", color: null },
  140842: { id: 140842, kind: "anime", title: "ちいかわ", en: "Chiikawa", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140842-T0geOCa3zS0A.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140842-kXw5xtsCy8QT.jpg", color: "#e4d6ae" },
  140960: { id: 140960, kind: "anime", title: "SPY×FAMILY", en: "SPY x FAMILY", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140960-Z7xSvkRxHKfj.jpg", color: "#c9f1f1" },
  142770: { id: 142770, kind: "anime", title: "すずめの戸締まり", en: "Suzume", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142770-dDaDIRnsv5jN.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142770-YgESt2HJXlNg.jpg", color: "#43bbe4" },
  150672: { id: 150672, kind: "anime", title: "【推しの子】", en: "OSHI NO KO", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150672-WqmmwZ4nMzAy.png", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/150672-ISwoA0eS722H.jpg", color: "#ff35c9" },
  153518: { id: 153518, kind: "anime", title: "ダンジョン飯", en: "Delicious in Dungeon", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153518-IVXPDY5ph3kO.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153518-7uRvV7SLqmHV.jpg", color: "#e48650" },
  154587: { id: 154587, kind: "anime", title: "葬送のフリーレン", en: "Frieren: Beyond Journey’s End", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg", color: "#bbf1a1" },
  161645: { id: 161645, kind: "anime", title: "薬屋のひとりごと", en: "The Apothecary Diaries", cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-QLbzHXiYRgV2.jpg", banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/161645-oqzTZYIvviWI.jpg", color: "#f1865d" },
};

/** Titles the guide's prose and chapter headers refer to by name. */
const NAMED = {
  frieren: 154587,
  bocchi: 130003,
  nichijou: 10165,
  barakamon: 20722,
  kaguya: 101921,
  takagi: 99468,
  "yuru-camp": 98444,
  yotsuba: 30104,
  komi: 133965,
  haikyu: 20464,
  konosuba: 21202,
  "spy-family": 140960,
  hyouka: 12189,
  bungo: 21311,
  "shin-chan": 966,
  azumanga: 66,
  chihayafuru: 10800,
  "lucky-star": 1887,
  "k-on": 5680,
  "non-non": 17549,
  mob: 21507,
  "frieren-manga": 118586,
  chiikawa: 140842,
  "oshi-no-ko": 150672,
  "polar-bear": 12815,
  totoro: 523,
  "one-piece": 30013,
  euphonium: 20912,
  "dungeon-meshi": 153518,
} as const;

export type ArtKey = keyof typeof NAMED;

/** Jiten.moe deck id (the guide's media lists) → AniList id, for cover thumbnails. */
const BY_JITEN: Record<number, number> = {
  54858: 87383,
  98765: 98263,
  102169: 85412,
  119722: 136807,
  412: 16498,
  2222: 98444,
  4273: 512,
  6034: 21827,
  7389: 523,
  7565: 20517,
  8766: 140960,
  8868: 527,
  9594: 966,
  9595: 10165,
  10305: 5680,
  10382: 12815,
  13708: 20665,
  13769: 113415,
  13874: 12189,
  16685: 17549,
  17119: 1575,
  19711: 21507,
  19790: 150672,
  21013: 918,
  21906: 199,
  22541: 9253,
  24700: 20954,
  27787: 20912,
  28061: 106286,
  30081: 142770,
  30082: 21459,
  32245: 9756,
  34427: 30,
  34772: 99468,
  35709: 153518,
  35829: 801,
  37988: 21776,
  38122: 101922,
  38564: 5081,
  39296: 99699,
  40963: 154587,
  50274: 161645,
  51407: 130003,
  52739: 13601,
  53753: 20722,
  53865: 101921,
  53962: 4081,
  54707: 33083,
  54767: 94970,
  54904: 85737,
  55005: 39115,
  55039: 30399,
  55132: 99026,
  96487: 106331,
  96748: 85533,
  96859: 30104,
  97316: 105778,
  98132: 85135,
  98285: 30013,
  99403: 86082,
  100122: 30401,
  100522: 86559,
  101900: 53390,
  102273: 30021,
  102793: 31224,
  104047: 85364,
  104809: 87216,
  104950: 118586,
  105023: 31397,
  105142: 55096,
  116807: 140842,
  119106: 111233,
  119548: 21519,
  123744: 108556,
  141263: 65243,
};

export function art(key: ArtKey): AnimeArt {
  return BY_ID[NAMED[key]];
}

export function artForJiten(jiten: number): AnimeArt | null {
  const id = BY_JITEN[jiten];
  return id ? BY_ID[id] : null;
}

export function anilistUrl(a: AnimeArt): string {
  return `https://anilist.co/${a.kind}/${a.id}`;
}
