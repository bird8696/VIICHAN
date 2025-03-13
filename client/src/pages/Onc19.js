import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc19(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: AI
    <div className="main-app">
      <ProgressBar step={19} />
      <img className="Onc-img" src="img/어린비챤9.png" alt="메인이미지" />
      <h2 className="bouttom-textVII">비챤님입니다.</h2>
      <h2 className="bouttom-textVII">
        아이네님 촬영에 따라와 얼떨결에 같이 사진을 찍게 된 챠니가 옷을 갈아입고
        왔습니다.
        <br></br>
        옷을 갈아입고 나온 챠니가 괜찮냐고 물어봅니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>
      <Answer text="ㄱㅇㅇ" value="B" nextPage={20} />
      <Answer text="옷이 날개다" value="A" nextPage={20} />
      <Answer text="사랑해" value="D" nextPage={20} />
      <Answer text="우리 공주 정말 귀엽다" value="E" nextPage={20} />
    </div>
  );
}

export default Onc19;
