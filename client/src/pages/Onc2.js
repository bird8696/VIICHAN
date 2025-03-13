import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc2(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/%EC%95%84%EC%9D%B4%EB%84%A4-ine-%E3%82%A2%E3%82%A4%E3%83%8D-%EC%9D%B4%EC%84%B8%EB%8F%8C-%EC%9D%B4%EC%84%B8%EA%B3%84%EC%95%84%EC%9D%B4%EB%8F%8C-gif-23462424
    <div className="main-app">
      <ProgressBar step={2} />
      <img className="Onc-img" src="img/아이네.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">
        당신의 아내인 전 아이돌 출신 아이네님입니다.
      </h2>
      <h2 className="bouttom-textINE">
        당신은 그녀의 어떠한 매력에 빠져 결혼을 생각하셨나요?
      </h2>
      <h2 className="top-text">당신은 어떻게 대답 하시겠습니까?</h2>

      <Answer text="예뻐서" value="A" nextPage={3} />
      <Answer text="그냥 눈 앞에 보여서" value="A" nextPage={3} />
      <Answer text="그녀의 아이돌 시절 노력과 근성에 반해서" value="D" nextPage={3} />
      <Answer text="아이네이기 때문에" value="C" nextPage={3} />
    </div>
  );
}

export default Onc2;
