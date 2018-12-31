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
  }
];
