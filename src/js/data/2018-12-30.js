dataSetVersion = "2018-012-30"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
  }
  
];
