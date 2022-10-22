import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc14(props) {
  return (
    // 이미지 출처: https://tenor.com/view/비챤-ゔぃちゃん-viichan-움짤-gif-gif-25428593
    <div className="main-app">
      <ProgressBar step={14} />
      <img className="Onc-img" src="img/애송챤댄스.gif" alt="메인이미지" />
      <h2 className="bouttom-textVII">당신의 셋째인 비챤님입니다.</h2>
      <h2 className="bouttom-textVII">
        자신이 개발한 댄스를 평가해달라는 챠니에게 뭐라고 해야할까요?
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>

      <Answer text="ㄱㅇㅇ" value="E" />
      <Answer text="말없이 비디오 카메라를 들고 찍는다" value="D" />
      <Answer text="진지하게 평가해준다(정말 못추네)" value="A" />
      <Answer text="비웃는다" value="C" />
    </div>
  );
}

export default Onc14;