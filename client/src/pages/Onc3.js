import React from "react";
import { ProgressBar, Question, Answer } from "../components";

function Onc3(props) {
  return (
    // 이미지 출처: https://tenor.com/view/%EC%95%84%EC%9D%B4%EB%84%A4-ine-%E3%82%A2%E3%82%A4%E3%83%8D-%EC%9D%B4%EC%84%B8%EB%8F%8C-%EC%9D%B4%EC%84%B8%EA%B3%84%EC%95%84%EC%9D%B4%EB%8F%8C-gif-23462424
    <div className="main-app">
      <ProgressBar step={3} />
      <img className="Onc-img" src="img/아이네,릴파.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">
        당신 아내인 아이네님이 둘째 처제인 릴파님의 고로시에 화가나 눈깔
        찌르기를 시전중이십니다.
      </h2>
      <h2 className="bouttom-textINE">
        아이네가 당신에게 릴파에게 한마디 해달라고 합니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="동생이 언니에게 장난도 칠 수 있지" value="A" />
      <Answer text="어쩌라구 그러게 동생 관리좀 하지 그랬어" value="B" />
      <Answer text="둘다 보기 좋아보여" value="D" />
      <Answer text="(아이네님을 끌어안으면서)내가 지켜줄게" value="C" />
    </div>
  );
}

export default Onc3;
