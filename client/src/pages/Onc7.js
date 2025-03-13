import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc7(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/isegye-idol-jururu-주르르-ジュルル-잠옷-gif-25184687
    <div className="main-app">
      <ProgressBar step={7} />
      <img className="Onc-img" src="img/첫째주르르.gif" alt="메인이미지" />
      <h2 className="bouttom-textJUL">
        당신과 아이네님의 첫째 딸 주르르님입니다.
      </h2>
      <h2 className="bouttom-textJUL">
        당신의 아내가 예능 프로그램에 참여하게 되어 르르땅을 돌봐야 합니다.
        <br></br>
        오래만에 아빠와 단둘이 놀 수 있어, 기분이 좋은 르르땅과 무엇을 하고
        놀아야 할까요?
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="가위바위보 딱밤 맞기" value="B" nextPage={8} />
      <Answer text="날아라 비행기" value="A" nextPage={8} />
      <Answer text="알아서 놀으라고 하고 휴대폰을 한다" value="A" nextPage={8} />
      <Answer text="무엇을 하고 놀고 싶은지 르르땅에게 물어본다" value="E" nextPage={8} />
    </div>
  );
}

export default Onc7;
