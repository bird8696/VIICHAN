import React from "react";
import { StoreContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Join() {
  const { setJoinUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  return (
    <div className="Join-main">
      <header className="Join-header">회원가입</header>
      <input
        className="Join-input"
        type="text"
        placeholder="아이디를 입력하세요"
      />
      <br></br>
      <input
        className="Join-input"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <h3>비밀번호는 아이디는 중복될 수 없습니다.</h3>
      <button className="Login-btn" style={{ marginTop: 10 }}>
        회원가입
      </button>
      <button
        className="Login-btn"
        style={{ marginTop: 30 }}
        onClick={() => {
          navigation("/login");
        }}
      >
        로그인 페이지
      </button>
    </div>
  );
}

export default Join;
