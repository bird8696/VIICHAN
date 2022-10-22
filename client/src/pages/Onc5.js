import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc5(props) {
  return (
    // 이미지 출처: https://tenor.com/view/%EC%95%84%EC%9D%B4%EB%84%A4-ine-%E3%82%A2%E3%82%A4%E3%83%8D-%EC%9D%B4%EC%84%B8%EB%8F%8C-%EC%9D%B4%EC%84%B8%EA%B3%84%EC%95%84%EC%9D%B4%EB%8F%8C-gif-25738374
    <div className="main-app">
      <ProgressBar step={5} />
      <img className="Onc-img" src="img/아이네졸음.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">아이네님과 카폐에 왔습니다</h2>
      <h2 className="bouttom-textINE">
        솔로 복귀를 준비중인 당신의 아내는 피곤한 듯 보입니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="딱밤을 통해 정신을 차리게 해준다" value="D" />
      <Answer text="조용히 옆으로 다가가 어깨를 빌려준다" value="E" />
      <Answer text="공주님 안기를 통해 무사히 집까지 간다." value="C" />
      <Answer text="사진을 찍어서 인스타에 올린다." value="D" />
    </div>
  );
}

export default Onc5;
