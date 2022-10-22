import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc18(props) {
  return (
    // 이미지 출처: https://tenor.com/view/주시오-비챤-왁타버스-이세돌-이세계아이돌-gif-25220346
    <div className="main-app">
      <ProgressBar step={18} />
      <img className="Onc-img" src="img/주시오-비챤.gif" alt="메인이미지" />
      <h2 className="bouttom-textVII">비챤님입니다.</h2>
      <h2 className="bouttom-textVII">
        챠니가 무슨 이유인지 모르겟지만 울고 있습니다.
        <br></br>
        무슨일이냐고 물어봐도 같은 말만 반복하는 챠니
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>

      <Answer text="챠니 고라니 인형 줄게 울지마" value="E" />
      <Answer text="뚝! 울면 나쁜 아이야" value="A" />
      <Answer text="사랑해" value="C" />
      <Answer text="질질짜지말고 방에 들어가" value="B" />
    </div>
  );
}

export default Onc18;