import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc12(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/고세구-gif-23911089
    <div className="main-app">
      <ProgressBar step={12} />
      <img className="Onc-img" src="img/고세구안경.gif" alt="메인이미지" />
      <h2 className="bouttom-textGSG">
        세구땅이 유치원에 입학해서 배운 것을 당신에게 설명중입니다.
      </h2>
      <h2 className="bouttom-textGSG">
        강아지는 "야옹"하고 울고, 고양이는 "멍멍"하고 운다라는 주장을 하는
        세구땅
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="정확한 지식을 가르쳐줘야한다." value="D" nextPage={13} />
      <Answer text="고양이를 볼때마다 멍멍하며 세구땅을 놀린다" value="C" nextPage={13} />
      <Answer text="배운 것도 기억 못하냐고 화낸다." value="A" nextPage={13} />
      <Answer text="전자 동화책을 사서 직접 눌러주며 가르쳐준다." value="S" nextPage={13} />
    </div>
  );
}

export default Onc12;
