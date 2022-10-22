import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { useNavigate } from "react-router-dom";

function onc01() {
  return (
    <div className="main-app">
      <ProgressBar step={1} />
      <Question imageUrl="img/villchan1.png" />
      <Answer text="ㅇ" />
      <Answer text="ㅇ" />
      <Answer text="ㅇ" />
      <Answer text="ㅇ" />
    </div>
  );
}

export default onc01;