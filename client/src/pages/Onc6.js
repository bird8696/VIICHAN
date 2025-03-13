import React from "react";
import { ProgressBar, Question, Answer } from "../components";
import { StoreContext } from "../App";
function Onc6(props) {

  const { updateScore } = useContext(StoreContext);

  return (
    // 이미지 출처: https://tenor.com/view/아이네-gif-23910915
    <div className="main-app">
      <ProgressBar step={6} />
      <img className="Onc-img" src="img/아이네콘서트.gif" alt="메인이미지" />
      <h2 className="bouttom-textINE">
        아이네님의 솔로복귀 기념 콘서트에 왔습니다.
      </h2> 
      <h2 className="bouttom-textINE">
        현장 복귀한 당신의 아내의 모습이 어떻게 보입니까?
      </h2>
      <h2 className="top-text">그녀를 보고 어떠한 생각을 하게 되나요?</h2>

      <Answer text="자신의 일을 즐기는 모습이 멋있어보인다." value="E" nextPage={7} />
      <Answer
        text="팬들이 아내를 보는 것이 기분이 나쁘다.(나.작.아)"
        value="C"
        nextPage={7}
      />
      <Answer text="성공적인 복귀해서 다행이다." value="E" nextPage={7} />
      <Answer text="그냥 일하는구나" value="A" nextPage={7} />
    </div>
  );
}

export default Onc6;
