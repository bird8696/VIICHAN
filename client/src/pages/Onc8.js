import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc8(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/징버거-jingburger-ジンバーガー-기네스버거-흑발버거-gif-23719624
    <div className="main-app">
      <ProgressBar step={8} />
      <img className="Onc-img" src="img/징버거.gif" alt="메인이미지" />
      <h2 className="bouttom-textJBG">첫째 처제인 징버거님입니다.</h2>
      <h2 className="bouttom-textJBG">
        오늘은 징버거님의 개인 촬영을 도와주기 위해 징버거님의 집에 왔습니다.
        <br></br>
        촬영을 어떻게 도와주시겠습니까?
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="소니 F65 시네알타 4K로 열정으로 찍는다." value="E" nextPage={9} />
      <Answer text="주섬주섬 휴대폰을 꺼내 대충 찍는다" value="A" nextPage={9} />
      <Answer text="삼각대를 세우고 찍게 한 후 구경한다." value="A" nextPage={9} />
      <Answer text="일단 햄버거부터 먹자고 말한다" value="B" nextPage={9} />
    </div>
  );
}

export default Onc8;
