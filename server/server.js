const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const DB = {
  viichan: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    S: 0,
  },
};

const Ending = [
  {
    name: "얀데레엔딩",
    content: "client\public\img\얀데레 아이네.png",
    viichan: "C",
  },
  {
    name: "화목한 가족엔딩",
    content:
      "hthan-ゔぃちゃん-움짤-gif-gif-25435491tps://tenor.com/view/비챤-viic",
    viichan: "D",
  },
  {
    name: "자상한 아버지엔딩",
    content:
      "C:\주말 html\projact\client\public\img\자상한아버지.jpg",
    viichan: "E",
  },
  {
    name: "이혼엔딩",
    content:
      "https://tenor.com/view/i-want-a-divorce-dissolution-annulment-seperation-break-up-gif-25753155",
    viichan: "A",
  },
  {
    name: "사망엔딩",
    content:
      "https://tenor.com/view/bed-time-go-to-sleep-you-die-card-flip-gif-16960032",
    viichan: "B",
  },
  {
    name: "히든엔딩",
    content:
      "https://tenor.com/view/아이네-ine-アイネ-이세돌-이세계아이돌-gif-25551125",
    viichan: "S",
  },
];

app.get("/", function (req, res) {
  res.send("Hello Node.js");
});

app.post("/Viichan", function (req, res) {
  const Viichan = req.query.Viichan;
  const Viichan2 = Viichan.map((item) => {
    return JSON.parse(item);
  });

  let ViichanStr = "";

  Viichan2.forEach((item) => {
    const keys = Object.keys(item);
    const values = Object.values(item);
    const maxStr = values[0] >= values[1] ? keys[0] : keys[1];
    ViichanStr += maxStr;
  });

  
  
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});
