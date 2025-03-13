import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";

function Onc9(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/jururu-주르르-ジュルル-220323-vrchat-gif-25184783
    <div className="main-app">
      <ProgressBar step={9} />
      <img className="Onc-img" src="img/주르르화남.gif" alt="메인이미지" />
      <h2 className="bouttom-textJUL">르르땅이 화가나 보입니다.</h2>
      <h2 className="bouttom-textJUL">
        그 이유를 물어보니, 유치원에서 뢴트라는 아이가 지신보다 징버거 이모가
        이쁘다고 해서 삐져있습니다.
        <br></br>
        어떻게 해야 할지 당신은 난감해 합니다.
      </h2>
      <h2 className="top-text">당신은 어떻게 하시겠습니까?</h2>

      <Answer text="우리 르르가 세상에서 제일 이쁘지" value="E" nextPage={10} />
      <Answer
        text="뢴트가 누구야? 아빠 몰래 남자친구 사귀면 안되요"
        value="C"
        nextPage={10}
      />
      <Answer text="뢴트가 뭐지 뢴트겨늄?" value="S" nextPage={10} />
      <Answer
        text="아빠가 주폭도 인형 사줄게 기분 풀자 착하지 르르땅"
        value="D"
        nextPage={10}
      />
    </div>
  );
}

export default Onc9;
