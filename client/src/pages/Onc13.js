import React, { useContext } from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc13() {
  const { updateScore } = useContext(StoreContext);

  return (
    <div className="main-app">
      <ProgressBar step={13} />
      <img className="Onc-img" src="img/애송챤.gif" alt="메인이미지" />
      <h2 className="bouttom-textVII">당신의 셋째인 비챤님입니다.</h2>
      <h2 className="bouttom-textVII">
        자신과 놀아주지 않고 잠만 자는 당신에게 챠니가 화를 내고 있습니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="아빠의 잠을 깨운 죄로 벽보고 서있으라고 한다." value="A" nextPage={14} />
      <Answer text="힘들지만 일어나서 놀아준다." value="D" nextPage={14} />
      <Answer text="뭐하고 놀고 싶은지 물어본다." value="E" nextPage={14} />
      <Answer text="간식을 준다(3시간동안 잠을 잘 수 있다)" value="B" nextPage={14} />
    </div>
  );
}

export default Onc13;
