import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    // 이미지 출처: https://tenor.com/view/아이네-ine-アイネ-이세돌-이세계아이돌-gif-25436629
    <div className="main-app">
      <h1>이세계 아이돌 패밀리</h1>
      <img className="main-img" src="img/점프.gif" alt="메인이미지" />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("Login");
        }}
      >
        로그인
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("Onc1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
