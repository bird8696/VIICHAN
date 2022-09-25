import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    <div className="main-app">
        <h1>이세계 아이돌 패밀리</h1>
      <img className="main-img" src="img/img1.png" alt="메인이미지" />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("onc1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
