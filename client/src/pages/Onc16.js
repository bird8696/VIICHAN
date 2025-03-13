import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc16(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/릴파-lilpa-リルパ-이세돌-이세계아이돌-gif-25738694
    <div className="main-app">
      <ProgressBar step={16} />
      <img className="Onc-img" src="img/릴파메이드.gif" alt="메인이미지" />
      <h2 className="bouttom-textLIL">릴파님입니다.</h2>
      <h2 className="bouttom-textLIL">
        팬 서비스로 전투 메이드복을 입고 연습중인 릴파님이 보입니다.
        <br></br>
        연습 후 괜찮냐고 물어보는 릴파님이 당신에게 물어봅니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>

      <Answer text="푸킵푸킵" value="A" nextPage={17} />
      <Answer text="ㄱㅇㅇ" value="C" nextPage={17} />
      <Answer text="어떻게 아이돌이 전투메이드 ㅋㅋ" value="A" nextPage={17} />
      <Answer text="흑역사 조차 팬서비스로 대단하다 릴파" value="D" nextPage={17} />
    </div>
  );
}

export default Onc16;
