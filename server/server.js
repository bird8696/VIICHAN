const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const DB = {
  user: [
    {
      id: "a",
      pw: "a",
    },
  ],

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
    content: "clientpublicimg얀데레 아이네.png",
    viichan: "C",
  },
  {
    name: "화목한 가족엔딩",
    content: "img/고세구안경.gif",
    viichan: "D",
  },
  {
    name: "자상한 아버지엔딩",
    content: "C:주말 htmlprojactclientpublicimg자상한아버지.jpg",
    viichan: "E",
  },
  {
    name: "이혼엔딩",
    content: "C:주말 htmlprojactclientpublicimg이혼.jpg",
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

app.get("/login", (req, res) => {
  const { user } = req.query;
  const id = user.id;
  const pw = user.pw;
  /* 유효성 검증 */
  const 유효성배열 = [1];

  const result = {
    code: "success",
    message: "로그인되었습니다.",
    user: null,
  };
  //유효성 검증
  for (let key in 유효성배열) {
    if (id === "") {
      result.code = "fail";
      result.message = "아이디를 입력해주세요";
      break;
    }
    if (pw === "") {
      result.code = "fail";
      result.message = "비밀번호를 입력해주세요";
      break;
    }
    const findUser = DB.user.find((item) => {
      return item.id === id && item.pw === pw;
    });

    if (findUser === undefined) {
      result.code = "fail";
      result.message = "정보가 일치하지 않습니다.";
      break;
    }

    result.user = findUser;
    res.send(result);
  }
  if (result.code === "fail") {
    res.send(result);
  }
});

app.post("./join", (req, res) => {
  console.log(req.query);
});

app.post("/Viichan", function (req, res) {
  const Viichan = req.query.Viichan;
  //   const Viichan2 = Viichan.map((item) => {
  //     return JSON.parse(item);
  //   });

  let ViichanStr = "";

  //   Viichan2.forEach((item) => {
  //     const keys = Object.keys(item);
  //     const values = Object.values(item);
  //     const maxStr = values[0] >= values[1] ? keys[0] : keys[1];
  //     ViichanStr += maxStr;
  //   });
  DB.viichan = Viichan;

  res.send(ViichanStr);
});

app.get("/result", function (req, res) {
  let max = 0;
  let maxkey = "";

  for (const test in DB.viichan) {
    const value = DB.viichan[test];

    if (max < value) {
      max = value;
      maxkey = test;
    }
  }

  Ending.forEach((item, index) => {
    if (maxkey === item.viichan) {
      max = item.viichan;
      maxkey = index;
    }
  });
  let 추천엔딩 = Ending[maxkey];

  if (DB.viichan.S === 3) {
    추천엔딩 = Ending[5];
  }
  console.log(추천엔딩);
  res.send(추천엔딩);
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});
