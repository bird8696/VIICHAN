import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc17(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/징버거-jingburger-ジンバーガー-이세돌-이세계아이돌-gif-24525143
    <div className="main-app">
      <ProgressBar step={17} />
      <img className="Onc-img" src="img/징버거춤.gif" alt="메인이미지" />
      <h2 className="bouttom-textJBG">징버거님입니다.</h2>
      <h2 className="bouttom-textJBG">
        새로운 복장이 도착했다면서 자랑하러 온 버거짱
        <br></br>
        이번 복장은 어떠냐고 물어보는 버거짱
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>

      <Answer text="대 아 이 돌" value="D" nextPage={18} />
      <Answer text="릴파랑 부산 코믹스 가는건가?" value="C" nextPage={18} />
      <Answer text="이쁘네" value="E" nextPage={18} />
      <Answer text="모르겠는데?" value="A" nextPage={18} />
    </div>
  );
}

export default Onc17;