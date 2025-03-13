import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc20(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/아이네-ine-アイネ-twice-scientist-gif-25133343
    <div className="main-app">
      <ProgressBar step={20} />
      <img className="Onc-img" src="img/아이네춤.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">아이네님입니다.</h2>
      <h2 className="bouttom-textINE">
        당신의 그녀가 오늘도 열심히 일을 하고 있습니다.
        <br></br>
        일하고 있는 그녀를 보고 마지막으로 당신은 이렇게 말합니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>
      <Answer text="정말 아름다워" value="B" nextPage= "Ending"/>
      <Answer text="결혼하기 잘했다" value="A" nextPage="Ending" />
      <Answer text="치킨집 차릴까" value="D" nextPage="Ending" />
      <Answer text="영원히 사랑해" value="S" nextPage="Ending" />
    </div>
  );
}

export default Onc20;