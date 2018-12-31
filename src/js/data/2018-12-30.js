dataSetVersion = "2018-12-30"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "All For One",
    img: "uvfOO1Z.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"]
    }
  },
  {
    name: "All Might",
    img: "m4Rf1tY.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"]
    }
  },
  {
    name: "Beru Asui",
    img: "dtNWXbf.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"]
    }
  },
  {
    name: "Best Jeanist",
    img: "Lzlt130.png",
    opts: {
      cat: ["h"],
      season: ["s2"]
    }
  },
  {
    name: "Bibimi Kenranzaki",
    img: "TyYxWgZ.png",
    opts: {
      series: [ "ua" ],
      stage: ["manga"]
    }
  },
    {
    name: "Bubble Girl",
    img: "6aa4nSC.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"]
    }
  },
  {
    name: "Camie Utsushimi",
    img: "5pS5YEU.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"]
    }
  },
  {
    name: "Cementoss",
    img: "CcZ0kfF.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Centipeder",
    img: "kqxg1js.png",
    opts: {
      cat: ["h"],
      season: ["manga"]
    }
  },
  {
    name: "Crimson Riot",
    img: "ehuOzQC.png",
    opts: {
      series: [ "h" ],
      stage: ["s2"]
    }
  },
  {
    name: "Dabi",
    img: "Oy9r7QQ.png",
    opts: {
      cat: [ "v" ],
      season: ["s2"]
    }
  },
  {
    name: "Dadan Tadan",
    img: "nHUkLfx.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"]
    }
  },
  {
    name: "David Shield",
    img: "rauTeQp.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"]
    }
  },
  {
    name: "Death Arms",
    img: "6KbXHHS.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Denki Kaminari",
    img: "6d3D6xE.png",
    opts: {
      series: [ "1a" ],
      stage: ["s1"]
    }
  },
    {
    name: "Ectoplasm",
    img: "zJfcqIu.png",
    opts: {
      series: [ "h" ],
      stage: ["s1"]
    }
  },
  {
    name: "Edgeshot",
    img: "gfgsr9X.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"]
    }
  },
  {
    name: "Eijiro Kirishima",
    img: "IE5dXQH.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Endeavor",
    img: "yhIBGjo.png",
    opts: {
      cat: ["h"],
      season: ["s2"]
    }
  },
  {
    name: "Eraserhead",
    img: "HfSUV2M.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Eri",
    img: "ccsW4VJ.png",
    opts: {
      series: [ "civ" ],
      stage: ["manga"]
    }
  },
  {
    name: "Fat Gum",
    img: "bIB0UYx.png",
    opts: {
      cat: [ "h" ],
      season: ["manga"]
    }
  },
  {
    name: "Fumikage Tokoyami",
    img: "JaCCmw4.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Fuyumi Todoroki",
    img: "JqAxAVn.png",
    opts: {
      cat: ["civ"],
      season: ["s2"]
    }
  },
  {
    name: "Gang Orca",
    img: "BZK8uQW.png",
    opts: {
      cat: ["h"],
      season: ["s3"]
    }
  },
  {
    name: "Ganma Asui",
    img: "uFrvS0R.png",
    opts: {
      series: [ "civ" ],
      stage: ["ovamov"]
    }
  },
  {
    name: "Gentle Criminal",
    img: "yCbH5Qh.png",
    opts: {
      cat: [ "v" ],
      season: ["manga"]
    }
  },
  {
    name: "Gigantomachia",
    img: "uGYWGiq.png",
    opts: {
      cat: [ "v" ],
      season: ["manga"]
    }
  },
  {
    name: "Giran",
    img: "BG3Hn40.png",
    opts: {
      cat: ["v"],
      season: ["s2"]
    }
  },
  {
    name: "Gran Torino",
    img: "ymxKZ8b.png",
    opts: {
      cat: ["h"],
      season: ["s2"]
    }
  },
  {
    name: "Gunhead",
    img: "fAYLQnP.png",
    opts: {
      series: [ "h" ],
      stage: ["s2"]
    }
  },
  {
    name: "Habuko Mongoose",
    img: "RGPq6Uc.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"]
    }
  },
  {
    name: "Hanta Sero",
    img: "tcG9UaZ.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Hawks",
    img: "l4OUQ78.png",
    opts: {
      cat: ["h"],
      season: ["manga"]
    }
  },
  {
    name: "Himiko Toga",
    img: "tPicz1t.png",
    opts: {
      cat: ["v"],
      season: ["s2"]
    }
  },
  {
    name: "Hiryu Rin",
    img: "188PqQN.png",
    opts: {
      series: [ "1b" ],
      stage: ["s2"]
    }
  },
  {
    name: "Hitoshi Shinsou",
    img: "U2Wquik.png",
    opts: {
      cat: [ "ua" ],
      season: ["s2"]
    }
  },
  {
    name: "Hound Dog",
    img: "kwH3nbk.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"]
    }
  },
  {
    name: "Ibara Shiozaki",
    img: "aI5RnIz.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Inasa Yoarashi",
    img: "pdPE5o7.png",
    opts: {
      cat: ["nua"],
      season: ["s3"]
    }
  },
  {
    name: "Ingenium",
    img: "WDBra2O.png",
    opts: {
      series: [ "h" ],
      stage: ["s2"]
    }
  },
  {
    name: "Inko Midoriya",
    img: "2JPImbP.png",
    opts: {
      cat: [ "civ" ],
      season: ["s1"]
    }
  },
  {
    name: "Itsuka Kendo",
    img: "lhbWU2j.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"]
    }
  },
  {
    name: "Izuku Midoriya",
    img: "O3TunjK.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Jurota Shishida",
    img: "4ijf4qo.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Juzo Honekuni",
    img: "fZxGQ6b.png",
    opts: {
      series: [ "1b" ],
      stage: ["s2"]
    }
  },
  {
    name: "Kamui Woods",
    img: "IIG6OLf.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"]
    }
  },
  {
    name: "Kashiko Sekigai",
    img: "wIRTwq7.png",
    opts: {
      cat: [ "nua" ],
      season: ["ovamov"]
    }
  },
  {
    name: "Katsuki Bakugo",
    img: "KXEBfoE.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Kenji Tsuragamae",
    img: "SwU0R1Z.png",
    opts: {
      cat: ["civ"],
      season: ["s2"]
    }
  },
  {
    name: "Kinoko Komori",
    img: "p8ur7Qn.png",
    opts: {
      series: [ "1b" ],
      stage: ["s2"]
    }
  },
  {
    name: "Koji Koda",
    img: "eO5RKN6.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Kojiro Bondo",
    img: "KxcplUC.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"]
    }
  },
  {
    name: "Kosei Tsuburaba",
    img: "M6jG4nC.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Kota Izumi",
    img: "Cp5J9jT.png",
    opts: {
      cat: ["civ"],
      season: ["s3"]
    }
  },
  {
    name: "Kurogiri",
    img: "SeAe0A5.png",
    opts: {
      series: [ "v" ],
      stage: ["s1"]
    }
  },
  {
    name: "Kyotoku Jirou",
    img: "I8DxWCT.png",
    opts: {
      cat: [ "civ" ],
      season: ["s3"]
    }
  },
  {
    name: "Kyouka Jirou",
    img: "KwuBHAI.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "La Brava",
    img: "CyL8DCJ.png",
    opts: {
      cat: ["v"],
      season: ["manga"]
    }
  },
  {
    name: "Lock Rock",
    img: "HCxZWe4.png",
    opts: {
      cat: ["h"],
      season: ["manga"]
    }
  },
  {
    name: "Lunch Rush",
    img: "dOmcjg5.png",
    opts: {
      series: [ "h" ],
      stage: ["s1"]
    }
  },
  {
    name: "Magne",
    img: "2aafk0m.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"]
    }
  },
  {
    name: "Mandalay",
    img: "h1MQRpw.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"]
    }
  },
  {
    name: "Manga Fukidashi",
    img: "vWJeLmi.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Masahiro Ojiro",
    img: "YjJOYhA.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Masaru Bakugo",
    img: "3bROdlE.png",
    opts: {
      series: [ "civ" ],
      stage: ["s3"]
    }
  },
  {
    name: "Mei Hatsume",
    img: "7Kg4ieK.png",
    opts: {
      cat: [ "ua" ],
      season: ["s2"]
    }
  },
  {
    name: "Melissa Shield",
    img: "3oaNdt4.png",
    opts: {
      cat: [ "civ" ],
      season: ["ovamov"]
    }
  },
  {
    name: "Mezo Shoji",
    img: "JUSLvnc.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Midnight",
    img: "EurRl4d.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Mika Jirou",
    img: "F0fwMqw.png",
    opts: {
      series: [ "civ" ],
      stage: ["s3"]
    }
  },
  {
    name: "Mina Ashido",
    img: "Ntw6jb9.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Minoru Mineta",
    img: "hWgDkCy.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Mirio Togata",
    img: "LggRZ4W.png",
    opts: {
      cat: ["ua"],
      season: ["s3"]
    }
  },
  {
    name: "Miruko",
    img: "I3KEVGe.png",
    opts: {
      cat: ["h"],
      season: ["manga"]
    }
  },
  {
    name: "Mitsuki Bakugo",
    img: "oL9aZhJ.png",
    opts: {
      series: [ "civ" ],
      stage: ["s3"]
    }
  },
  {
    name: "Miyagi Daikaku",
    img: "uFIdAxt.png",
    opts: {
      cat: [ "civ" ],
      season: ["s2"]
    }
  },
  {
    name: "Momo Yaoyorozu",
    img: "ujo4T0x.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Moonfish",
    img: "q5xiDRA.png",
    opts: {
      cat: ["v"],
      season: ["s3"]
    }
  },
  {
    name: "Mr. Compress",
    img: "RKiwZuE.png",
    opts: {
      cat: ["v"],
      season: ["s3"]
    }
  },
  {
    name: "Ms. Joke",
    img: "wcNzs1s.png",
    opts: {
      series: [ "h" ],
      stage: ["s3"]
    }
  },
  {
    name: "Mt. Lady",
    img: "Awyd5ep.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"]
    }
  },
  {
    name: "Muscular",
    img: "agY8nD9.png",
    opts: {
      cat: [ "v" ],
      season: ["s3"]
    }
  },
  {
    name: "Mustard",
    img: "pJNyFWG.png",
    opts: {
      cat: ["v"],
      season: ["s2"]
    }
  },
  {
    name: "Nagamasa Moura",
    img: "EXJlvwh.png",
    opts: {
      cat: ["h"],
      season: ["s3"]
    }
  },
  {
    name: "Nana Shimura",
    img: "EXJlvwh.png",
    opts: {
      series: [ "h" ],
      stage: ["s3"]
    }
  },
  {
    name: "Naomasa Tsukauchi",
    img: "iV9In3w.png",
    opts: {
      cat: [ "civ" ],
      season: ["s1"]
    }
  },
  {
    name: "Natsuo Todoroki",
    img: "mTcJ6Sy.png",
    opts: {
      cat: [ "civ" ],
      season: ["manga"]
    }
  },
  {
    name: "Neito Monoma",
    img: "mEvAYqL.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Nejire Hado",
    img: "jOwhW03.png",
    opts: {
      cat: ["ua"],
      season: ["s3"]
    }
  },
  {
    name: "Nezu",
    img: "o23cbWt.png",
    opts: {
      series: [ "h" ],
      stage: ["s1"]
    }
  },
  {
    name: "Nirengeki Shoda",
    img: "6coLHMB.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"]
    }
  },
  {
    name: "No. 13",
    img: "d5QmAX0.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"]
    }
  },
  {
    name: "Nomu",
    img: "9d0uXB8.png",
    opts: {
      cat: ["v"],
      season: ["s1"]
    }
  },
  {
    name: "Ochaco Uraraka",
    img: "rPMZuXo.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Overhaul",
    img: "wMjkK0q.png",
    opts: {
      series: [ "v" ],
      stage: ["s3"]
    }
  },
  {
    name: "Pixie Bob",
    img: "CKXF1Wo.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"]
    }
  },
  {
    name: "Pony Tsunotori",
    img: "pZj6xuq.png",
    opts: {
      cat: [ "1b" ],
      season: ["s2"]
    }
  },
  {
    name: "Power Loader",
    img: "9DFSLLG.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Present Mic",
    img: "NqhjlTQ.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Ragdoll",
    img: "BJmtMZR.png",
    opts: {
      series: [ "h" ],
      stage: ["s3"]
    }
  },
  {
    name: "Recovery Girl",
    img: "LGtQYhr.png",
    opts: {
      cat: [ "h" ],
      season: ["s1"]
    }
  },
  {
    name: "Rei Todoroki",
    img: "hEm3tJR.png",
    opts: {
      cat: [ "civ" ],
      season: ["s2"]
    }
  },
  {
    name: "Reiko Yanagi",
    img: "DtFruyK.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Rikido Sato",
    img: "hSEdahW.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  {
    name: "Romero Fujimi",
    img: "R2c9NbP.png",
    opts: {
      series: [ "nua" ],
      stage: ["ovamov"]
    }
  },
  {
    name: "Ryukyu",
    img: "VCwr8qi.png",
    opts: {
      cat: [ "h" ],
      season: ["manga"]
    }
  },
  {
    name: "Saiko Intelli",
    img: "3tK3vBL.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"]
    }
  },
  {
    name: "Samidare Asui",
    img: "95Oydcl.png",
    opts: {
      cat: ["civ"],
      season: ["ovamov"]
    }
  },
  {
    name: "Sansa Tamakawa",
    img: "0ZVBQIz.png",
    opts: {
      cat: ["civ"],
      season: ["s1"]
    }
  },
  {
    name: "Satsuki Asui",
    img: "qcukfn1.png",
    opts: {
      series: [ "civ" ],
      stage: ["ovamov"]
    }
  },
  {
    name: "Seiji Shishikura",
    img: "X73OPwo.png",
    opts: {
      cat: [ "nua" ],
      season: ["s3"]
    }
  },
  {
    name: "Selkie",
    img: "qPOGXS9.png",
    opts: {
      cat: [ "h" ],
      season: ["s2"]
    }
  },
  {
    name: "Sen Kaibara",
    img: "UVbnWnN.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Setsuna Tokage",
    img: "MA0lVi1.png",
    opts: {
      cat: ["1b"],
      season: ["s2"]
    }
  },
  {
    name: "Shihai Kuroiro",
    img: "tyRmCUd.png",
    opts: {
      series: [ "1b" ],
      stage: ["s2"]
    }
  },
  {
    name: "Shouto Todoroki",
    img: "s9xB96n.png",
    opts: {
      cat: [ "1a" ],
      season: ["s1"]
    }
  },
  {
    name: "Sir Nighteye",
    img: "GNAyBYi.png",
    opts: {
      cat: [ "h" ],
      season: ["s3"]
    }
  },
  {
    name: "Sirius",
    img: "0UX3wnT.png",
    opts: {
      cat: ["h"],
      season: ["s2"]
    }
  },
  {
    name: "Snipe",
    img: "mKmn5Dk.png",
    opts: {
      cat: ["h"],
      season: ["s1"]
    }
  },
  {
    name: "Spinner",
    img: "fP7G0zr.png",
    opts: {
      series: [ "v" ],
      stage: ["s2"]
    }
  },
  {
    name: "Stain",
    img: "BLwFUP2.png",
    opts: {
      cat: [ "v" ],
      season: ["s2"]
    }
  },
  {
    name: "Tamaki Amajiki",
    img: "Q9I0DfO.png",
    opts: {
      cat: [ "ua" ],
      season: ["s3"]
    }
  },
  {
    name: "Tatami Nakagame",
    img: "EPL5lqZ.png",
    opts: {
      cat: ["nua"],
      season: ["s3"]
    }
  },
  {
    name: "Tenya Iida",
    img: "X7onfqQ.png",
    opts: {
      cat: ["1a"],
      season: ["s1"]
    }
  },
  
];
