import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc1(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://pixabay.com/ko/users/waldryano-309781/
    <div className="main-app">
      <ProgressBar step={1} />
      <img className="Onc-img" src="img/Choice.jpg" alt="메인이미지" />
      <h2 className="bouttom-text">당신은 이제부터 한 가족의 가장이 됩니다.</h2>
      <h2 className="bouttom-text">
        당신이 선택한 결과에 따라 당신의 가족의 운명이 바뀝니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="자상한 아버지/남편" value="D" nextPage={2} />
      <Answer text="엄격한 아버지/남편" value="B" nextPage={2} />
      <Answer text="무관심한 아버지/남편" value="A" nextPage={2} />
      <Answer text="자율적인 아버지/남편" value="C" nextPage={2} />
    </div>
  );
}

export default Onc1;
