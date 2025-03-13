import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc4(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/%EC%95%84%EC%9D%B4%EB%84%A4-ine-%E3%82%A2%E3%82%A4%E3%83%8D-%EC%9D%B4%EC%84%B8%EB%8F%8C-%EC%9D%B4%EC%84%B8%EA%B3%84%EC%95%84%EC%9D%B4%EB%8F%8C-gif-25738374
    <div className="main-app">
      <ProgressBar step={4} />
      <img className="Onc-img" src="img/아이네청소.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">아이네님이 청소 중입니다.</h2>
      <h2 className="bouttom-textINE">
        하지만 평소와 달리 그녀가 메이드복을 입은 것을 보니 오늘은 무슨 기념일
        인 것 같습니다.?
      </h2>
      <h2 className="top-text">오늘은 무슨 날입니까?</h2>

      <Answer text="(기억이 안난다.) 모른척을 하자" value="A" nextPage={5} />
      <Answer text="(기억이 안나지만 무조건 칭찬하자)어울리네" value="D" nextPage={5} />
      <Answer text="오늘은 홍삼스틱을 안 먹은 날인 것 같다" value="S" nextPage={5} />
      <Answer text="결혼기념일" value="E" nextPage={5} />
    </div>
  );
}

export default Onc4;
