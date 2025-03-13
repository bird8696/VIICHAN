import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc11(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/아이네-ine-アイネ-이세돌-이세계아이돌-gif-24759402
    <div className="main-app">
      <ProgressBar step={11} />
      <img className="Onc-img" src="img/아이네한복.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">아이네님과 전주 한옥마을에 았습니다.</h2>
      <h2 className="bouttom-textINE">
        오래만에 외출과 데이트에 지쳐있던 자신은 자신도 모르게 하품을
        하였습니다.
        <br></br>그 모습을 본 아이네가 삐진 듯한 표정을 하고 있어 당신은 그녀를
        달래주어야 할 것 같습니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="(무조건 사과)미안하네" value="D" nextPage={12} />
      <Answer text="꼭 끌어 안아준다" value="C" nextPage={12} />
      <Answer text="(역으로 화낸다)피곤한데 어쩌라구" value="A" nextPage={12} />
      <Answer text="재미없네" value="B" nextPage={12} />
    </div>
  );
}

export default Onc11;
