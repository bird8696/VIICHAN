import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc10(props) {
  return (
    // 이미지 출처: https://tenor.com/view/고세구-gosegu-ゴセグ-이세돌-이세계아이돌-gif-23555150
    <div className="main-app">
      <ProgressBar step={10} />
      <img className="Onc-img" src="img/둘째고세구.gif" alt="메인이미지" />
      <h2 className="bouttom-textGSG">
        당신과 아이네님의 둘째 딸인 고세구님입니다.
      </h2>
      <h2 className="bouttom-textGSG">
        어린이집에서 배워온 엉덩이 춤을 보여주겠다면 당신의 앞에서 춤을 추기
        시작합니다.
        <br></br>
        당신의 귀여운 둘째 딸 세구땅의 춤에 당신은 뭐라고 말해야 할까
        고민합니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="잘한다 잘한다 우리 새끼" value="D" />
      <Answer text="우리 세구땅 나중에 아이돌 해도 되겠다" value="E" />
      <Answer text="어린이집을 이상한 춤을  가르친 죄로 고소한다." value="A" />
      <Answer text="영상을 찍어 인스타 올린다." value="E" />
    </div>
  );
}

export default Onc10;
