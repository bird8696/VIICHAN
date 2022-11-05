import React, { useState } from "react";
import { StoreContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Join() {
  const { setJoinUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  const 회원가입서버처리 = async (paramsUser) => {
    await axios({
      url: "http://localhost:5000/join",
      method: "post",
      data: user,
    });
  };

  return (
    <div className="Join-main">
      <header className="Join-header">회원가입</header>
      <input
        className="Join-input"
        type="text"
        name="id"
        maxLength={15}
        placeholder="아이디를 입력하세요"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.id = event.target.value;
          setUser(cloneUser);
        }}
      />
      <input
        className="Join-input"
        type="password"
        name="pswd1"
        maxLength={15}
        placeholder="비밀번호를 입력하세요"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.pw = event.target.value;
          setUser(cloneUser);
        }}
      />
      <input
        className="Join-input"
        type="password"
        name="pswd2"
        maxLength={15}
        placeholder="비밀번호를 다시 입력하세요"
      />
      <h3>비밀번호는 아이디는 중복될 수 없습니다.</h3>
      <button
        onClick={회원가입서버처리}
        className="Login-btn"
        style={{ marginTop: 10 }}
      >
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
