import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    id: "",
    pw: "",
    pw2: "",
  });

  // 회원가입 처리 (LocalStorage 사용)
  const 회원가입 = () => {
    if (user.id === "" || user.pw === "" || user.pw2 === "") {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (user.pw !== user.pw2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 중복 아이디 검사
    const isUserExists = existingUsers.some((u) => u.id === user.id);
    if (isUserExists) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    const newUser = { id: user.id, pw: user.pw };
    existingUsers.push(newUser);

    // LocalStorage에 저장
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    navigation("/login");
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
          setUser((prev) => ({ ...prev, id: event.target.value }));
        }}
      />
      <input
        className="Join-input"
        type="password"
        name="pswd1"
        maxLength={15}
        placeholder="비밀번호를 입력하세요"
        onChange={(event) => {
          setUser((prev) => ({ ...prev, pw: event.target.value }));
        }}
      />
      <input
        className="Join-input"
        type="password"
        name="pswd2"
        maxLength={15}
        placeholder="비밀번호를 다시 입력하세요"
        onChange={(event) => {
          setUser((prev) => ({ ...prev, pw2: event.target.value }));
        }}
      />
      <br />
      <button
        onClick={회원가입}
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
