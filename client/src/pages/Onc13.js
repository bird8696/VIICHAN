import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc13(props) {
  return (
    // 이미지 출처: https://tenor.com/view/비챤-viichan-ゔぃちゃん-gif-이세돌-gif-25436231
    <div className="main-app">
      <ProgressBar step={13} />
      <img className="Onc-img" src="img/애송챤.gif" alt="메인이미지" />
      <h2 className="bouttom-textVII">당신의 셋째인 비챤님입니다.</h2>
      <h2 className="bouttom-textVII">
        자신과 놀아주지 않고 잠만 자는 당신에게 챠니가 화를 내고 있습니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="아빠의 잠을 깨운 죄로 벽보고 서있으라고 한다." value="A" />
      <Answer text="힘들지만 일어나서 놀아준다." value="D" />
      <Answer text="뭐하고 놀고 싶은지 물어본다." value="E" />
      <Answer text="간식을 준다(3시간동안 잠을 잘 수 있다)" value="B" />
    </div>
  );
}

export default Onc13;
