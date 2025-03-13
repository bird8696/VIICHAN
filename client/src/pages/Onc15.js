import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc15(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/아이네-ine-アイネ-이세돌-이세계아이돌-gif-25738538
    <div className="main-app">
      <ProgressBar step={15} />
      <img className="Onc-img" src="img/아이네꽃.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">당신의 아이네님입니다.</h2>
      <h2 className="bouttom-textINE">
        오래만의 데이트에 신난 이네땅이 뭐가 꽃일까?를 시전했습니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 답하겠습니까?</h2>

      <Answer text="(이네님을 안으면서) 찾았다 나만의 꽃" value="C" nextPage={16} />
      <Answer text="난 둘기가 아닌데?" value="A" nextPage={16} />
      <Answer text="(옆에 꽃을 가르키며)이거" value="A" nextPage={16} />
      <Answer text="(둘기 성대모사)이네땅 카와이" value="D" nextPage={16} />
    </div>
  );
}

export default Onc15;
