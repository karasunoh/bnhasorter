dataSetVersion = "2019-07-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Category",
    key: "cat",
    tooltip: "Check this to restrict to certain categories.",
    checked: false,
    sub: [
      { name: "Class 1A", key: "1a" },
      { name: "Class 1B", key: "1b" },
      { name: "Other UA Students", key: "ua" },
      { name: "Not-UA Students", key: "nua" },
      { name: "Heroes/Teachers", key: "h" },
      { name: "Villains", key: "v" },
      { name: "Other Civilians", key: "civ" }
    ]
  },
  {
    name: "Filter by Season",
    key: "season",
    tooltip: "Check this to restrict to characters that appear in certain seasons.",
    checked: false,
    sub: [ { name: "Season 1", key: "s1" }, { name: "Season 2", key: "s2" }, { name: "Season 3", key: "s3" }, { name: "Manga-only", key: "manga" }, { name: "OVA/Movie-only", key: "ovamov" }
    ]
  },
  {
    name: "Filter by Character Prominence I Guess?",
    key: "prom",
    tooltip: "Check this to restrict very major/minor characters. (fair warning: this could be either biased or overthought)",
    checked: false,
    sub: [ { name: "Major Character", key: "maj" }, { name: "Minor Character", key: "mid" }, { name: "Very Minor Character", key: "min" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "All For One",
    img: "uvfOO1Z.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "All Might",
    img: "m4Rf1tY.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Beru Asui",
    img: "dtNWXbf.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Best Jeanist",
    img: "Lzlt130.png",
    opts: {
      cat: ["h"],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Bibimi Kenranzaki",
    img: "TyYxWgZ.png",
    opts: {
      cat: [ "ua" ],
      season: ["manga"],
      prom: ["min"]
    }
  },
    {
    name: "Bubble Girl",
    img: "6aa4nSC.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Camie Utsushimi",
    img: "5pS5YEU.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Cementoss",
    img: "CcZ0kfF.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Centipeder",
    img: "kqxg1js.png",
    opts: {
      cat: ["h"],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Crimson Riot",
    img: "ehuOzQC.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Dabi",
    img: "Oy9r7QQ.png",
    opts: {
      cat: [ "v" ],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Dadan Tadan",
    img: "nHUkLfx.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "David Shield",
    img: "rauTeQp.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"],
      prom: ["mid"]
    }
  },
  {
    name: "Death Arms",
    img: "6KbXHHS.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["min"]
    }
  },
  {
    name: "Denki Kaminari",
    img: "6d3D6xE.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
    {
    name: "Ectoplasm",
    img: "zJfcqIu.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Edgeshot",
    img: "gfgsr9X.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Eijiro Kirishima",
    img: "IE5dXQH.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Endeavor",
    img: "yhIBGjo.png",
    opts: {
      cat: ["h"],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Eraserhead",
    img: "HfSUV2M.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Eri",
    img: "ccsW4VJ.png",
    opts: {
      cat: [ "civ" ],
      season: ["manga"],
      prom: ["maj"]
    }
  },
  {
    name: "Fat Gum",
    img: "bIB0UYx.png",
    opts: {
      cat: [ "h" ],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Fumikage Tokoyami",
    img: "JaCCmw4.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Fuyumi Todoroki",
    img: "JqAxAVn.png",
    opts: {
      cat: ["civ"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Gang Orca",
    img: "BZK8uQW.png",
    opts: {
      cat: ["h"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Ganma Asui",
    img: "uFrvS0R.png",
    opts: {
      cat: [ "civ" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Gentle Criminal",
    img: "yCbH5Qh.png",
    opts: {
      cat: [ "v" ],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Gigantomachia",
    img: "uGYWGiq.png",
    opts: {
      cat: [ "v" ],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Giran",
    img: "BG3Hn40.png",
    opts: {
      cat: ["v"],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Gran Torino",
    img: "ymxKZ8b.png",
    opts: {
      cat: ["h"],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Gunhead",
    img: "fAYLQnP.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Habuko Mongoose",
    img: "RGPq6Uc.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Hanta Sero",
    img: "tcG9UaZ.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Hawks",
    img: "l4OUQ78.png",
    opts: {
      cat: ["h"],
      season: ["manga"],
      prom: ["maj"]
    }
  },
  {
    name: "Himiko Toga",
    img: "tPicz1t.png",
    opts: {
      cat: ["v"],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Hiryu Rin",
    img: "188PqQN.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Hitoshi Shinsou",
    img: "U2Wquik.png",
    opts: {
      cat: [ "ua" ],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Hound Dog",
    img: "kwH3nbk.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Ibara Shiozaki",
    img: "aI5RnIz.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Inasa Yoarashi",
    img: "pdPE5o7.png",
    opts: {
      cat: ["nua"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Ingenium",
    img: "WDBra2O.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Inko Midoriya",
    img: "2JPImbP.png",
    opts: {
      cat: [ "civ" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Itsuka Kendo",
    img: "lhbWU2j.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Izuku Midoriya",
    img: "O3TunjK.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Jurota Shishida",
    img: "4ijf4qo.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Juzo Honekuni",
    img: "fZxGQ6b.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Kamui Woods",
    img: "IIG6OLf.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Kashiko Sekigai",
    img: "wIRTwq7.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Katsuki Bakugo",
    img: "KXEBfoE.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Kenji Tsuragamae",
    img: "SwU0R1Z.png",
    opts: {
      cat: ["civ"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Kinoko Komori",
    img: "p8ur7Qn.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Koji Koda",
    img: "eO5RKN6.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Kojiro Bondo",
    img: "KxcplUC.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Kosei Tsuburaba",
    img: "M6jG4nC.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Kota Izumi",
    img: "Cp5J9jT.png",
    opts: {
      cat: ["civ"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Kurogiri",
    img: "SeAe0A5.png",
    opts: {
      cat: [ "v" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Kyotoku Jirou",
    img: "I8DxWCT.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Kyouka Jirou",
    img: "KwuBHAI.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "La Brava",
    img: "CyL8DCJ.png",
    opts: {
      cat: ["v"],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Lock Rock",
    img: "HCxZWe4.png",
    opts: {
      cat: ["h"],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Lunch Rush",
    img: "dOmcjg5.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["min"]
    }
  },
  {
    name: "Magne",
    img: "2aafk0m.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Mandalay",
    img: "h1MQRpw.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Manga Fukidashi",
    img: "vWJeLmi.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Masahiro Ojiro",
    img: "YjJOYhA.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Masaru Bakugo",
    img: "3bROdlE.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Mei Hatsume",
    img: "7Kg4ieK.png",
    opts: {
      cat: [ "ua" ],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Melissa Shield",
    img: "3oaNdt4.png",
    opts: {
      cat: [ "civ" ],
      season: ["ovamov"],
      prom: ["mid"]
    }
  },
  {
    name: "Mezo Shoji",
    img: "JUSLvnc.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Midnight",
    img: "EurRl4d.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Mika Jirou",
    img: "F0fwMqw.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Mina Ashido",
    img: "Ntw6jb9.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Minoru Mineta",
    img: "hWgDkCy.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Mirio Togata",
    img: "LggRZ4W.png",
    opts: {
      cat: ["ua"],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "Miruko",
    img: "I3KEVGe.png",
    opts: {
      cat: ["h"],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Mitsuki Bakugo",
    img: "oL9aZhJ.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Miyagi Daikaku",
    img: "uFIdAxt.png",
    opts: {
      cat: [ "civ" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Momo Yaoyorozu",
    img: "ujo4T0x.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Moonfish",
    img: "q5xiDRA.png",
    opts: {
      cat: ["v"],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Mr. Compress",
    img: "RKiwZuE.png",
    opts: {
      cat: ["v"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Ms. Joke",
    img: "wcNzs1s.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Mt. Lady",
    img: "Awyd5ep.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Muscular",
    img: "agY8nD9.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Mustard",
    img: "pJNyFWG.png",
    opts: {
      cat: ["v"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Nagamasa Moura",
    img: "uoWdpaE.png",
    opts: {
      cat: ["nua"],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Nana Shimura",
    img: "EXJlvwh.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Naomasa Tsukauchi",
    img: "iV9In3w.png",
    opts: {
      cat: [ "civ" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Natsuo Todoroki",
    img: "mTcJ6Sy.png",
    opts: {
      cat: [ "civ" ],
      season: ["manga"],
      prom: ["min"]
    }
  },
  {
    name: "Neito Monoma",
    img: "mEvAYqL.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Nejire Hado",
    img: "jOwhW03.png",
    opts: {
      cat: ["ua"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Nezu",
    img: "o23cbWt.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Nirengeki Shoda",
    img: "6coLHMB.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "No. 13",
    img: "d5QmAX0.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Nomu",
    img: "9d0uXB8.png",
    opts: {
      cat: ["v"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Ochaco Uraraka",
    img: "rPMZuXo.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Overhaul",
    img: "wMjkK0q.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "Pixie Bob",
    img: "CKXF1Wo.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Pony Tsunotori",
    img: "pZj6xuq.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Power Loader",
    img: "9DFSLLG.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["min"]
    }
  },
  {
    name: "Present Mic",
    img: "NqhjlTQ.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Ragdoll",
    img: "BJmtMZR.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Recovery Girl",
    img: "LGtQYhr.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Rei Todoroki",
    img: "hEm3tJR.png",
    opts: {
      cat: [ "civ" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Reiko Yanagi",
    img: "DtFruyK.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Rikido Sato",
    img: "hSEdahW.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Romero Fujimi",
    img: "R2c9NbP.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Ryukyu",
    img: "VCwr8qi.png",
    opts: {
      cat: [ "h" ],
      season: ["manga"],
      prom: ["mid"]
    }
  },
  {
    name: "Saiko Intelli",
    img: "3tK3vBL.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Samidare Asui",
    img: "95Oydcl.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Sansa Tamakawa",
    img: "0ZVBQIz.png",
    opts: {
      cat: ["civ"],
      season: ["s1"],
      prom: ["min"]
    }
  },
  {
    name: "Satsuki Asui",
    img: "qcukfn1.png",
    opts: {
      cat: [ "civ" ],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Seiji Shishikura",
    img: "X73OPwo.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Selkie",
    img: "qPOGXS9.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Sen Kaibara",
    img: "UVbnWnN.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Setsuna Tokage",
    img: "MA0lVi1.png",
    opts: {
      cat: ["1b"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Shihai Kuroiro",
    img: "tyRmCUd.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Shouto Todoroki",
    img: "s9xB96n.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Sir Nighteye",
    img: "GNAyBYi.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "Sirius",
    img: "0UX3wnT.png",
    opts: {
      cat: ["h"],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Snipe",
    img: "mKmn5Dk.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Spinner",
    img: "fP7G0zr.png",
    opts: {
      cat: [ "v" ],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Stain",
    img: "BLwFUP2.png",
    opts: {
      cat: [ "v" ],
      season: ["s2"],
      prom: ["maj"]
    }
  },
  {
    name: "Tamaki Amajiki",
    img: "Q9I0DfO.png",
    opts: {
      cat: [ "ua" ],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "Tatami Nakagame",
    img: "EPL5lqZ.png",
    opts: {
      cat: ["nua"],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Tenya Iida",
    img: "X7onfqQ.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Tetsutetsu Tetsutetetsu",
    img: "GtKQsdX.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["mid"]
    }
  },
  {
    name: "Tiger",
    img: "xZqHr3H.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Togaru Kamakiri",
    img: "TbXe1OR.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Tomura Shigaraki",
    img: "LkdW07l.png",
    opts: {
      cat: ["v"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Tooru Hagakure",
    img: "SieVfn6.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Tsuyu Asui",
    img: "rS4DlvR.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Twice",
    img: "t1p61XL.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"],
      prom: ["maj"]
    }
  },
  {
    name: "Uwabami",
    img: "7rLRDcp.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Vlad King",
    img: "n6O3GcP.png",
    opts: {
      cat: ["h"],
      season: ["s1"],
      prom: ["mid"]
    }
  },
  {
    name: "Wolfram",
    img: "O1woPgc.png",
    opts: {
      cat: ["v"],
      season: ["ovamov"],
      prom: ["min"]
    }
  },
  {
    name: "Yo Shindo",
    img: "vxnr6MA.png",
    opts: {
      cat: ["nua"],
      season: ["s3"],
      prom: ["mid"]
    }
  },
  {
    name: "Yokumiro Mera",
    img: "Ggg9mrj.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"],
      prom: ["min"]
    }
  },
  {
    name: "Yosetsu Awase",
    img: "KQhwoGz.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Yui Kodai",
    img: "971txmT.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"],
      prom: ["min"]
    }
  },
  {
    name: "Yuga Aoyama",
    img: "2SwKvLH.png",
    opts: {
      cat: ["1a"],
      season: ["s1"],
      prom: ["maj"]
    }
  },
  {
    name: "Yuyu Haya",
    img: "tJDVZEg.png",
    opts: {
      cat: ["ua"],
      season: ["manga"],
      prom: ["min"]
    }
  }
  
];
