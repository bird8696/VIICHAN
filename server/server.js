const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const Ending = [
    {
        name: "베드엔딩",
        Image: "",
        viichan: "C",
    },
    {
        name: "베드엔딩2",
        Image: "",
        viichan: "D",
    },
    {
        name: "베드엔딩3",
        Image: "",
        viichan: "E",
    },
    {
        name: "해피엔딩",
        Image: "",
        viichan: "A",
    },
    {
        name: "해피엔딩2",
        Image: "",
        viichan: "B",
    },
    {
        name: "히든엔딩",
        Image: "",
        viichan: "S",
    },
]

app.get("/", function (req, res) {
  res.send("Hello Node.js");
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});
