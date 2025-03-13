import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

function Main() {
  const { loginUser, setLoginUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  // 로그인 상태 유지 및 비로그인 유저 처리
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loginUser"));
    if (!storedUser) {
      alert("로그인이 필요합니다.");
      navigation("/login");
    } else {
      setLoginUser(storedUser);
    }
  }, [setLoginUser, navigation]);

  return (
    <div className="main-app">
      <h3>안녕하세요 {loginUser.id}님! </h3>
      <button
        className="idbutn"
        onClick={() => {
          localStorage.removeItem("loginUser"); // 로그인 정보 삭제
          setLoginUser({
            id: "",
            pw: "",
          });
          navigation("/Login"); // 로그인 페이지로 이동
        }}
      >
        로그아웃
      </button>
      <h1>이세계 아이돌 패밀리</h1>
      <img className="main-img" src="img/점프.gif" alt="메인이미지" />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("/Onc1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

export default Main;
