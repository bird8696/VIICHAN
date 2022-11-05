import React from "react";
import { StoreContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLoginUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  const 로그인서버처리 = async (paramsUser) => {
    await axios({
      url: "http://localhost:5000/login",
      params: {
        user: user,
      },
    }).then(({ data }) => {
      if (data.code === "success") {
        setLoginUser(data.user);
        /*
        웹 저장소
        1. localStorage (만료 없음 영구적임)
        2. Cookie (만료날짜가 있음)
        */
        localStorage.setItem("loginUser", JSON.stringify(data.user));
        navigation("/Main");
      } else {
        alert("아이디 또는 비밀번호를 잘못입력하셨습니다");
        navigation("/login");
      }
    });
  };

  const 로그인 = async () => {
    로그인서버처리(user);
  };

  return (
    <div className="Login-main">
      <header className="App-header"></header>
      <input
        className="Login-input"
        type="text"
        placeholder="아이디를 입력해주세요"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.id = event.target.value;
          setUser(cloneUser);
        }}
      />
      <br></br>
      <input
        className="Login-input"
        style={{ marginTop: 10 }}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(event) => {
          const cloneUser = { ...user };
          cloneUser.pw = event.target.value;
          setUser(cloneUser);
        }}
      />
      <br></br>
      <br />
      <button className="Login-btn" style={{ marginTop: 10 }} onClick={로그인}>
        로그인
      </button>
      <button
        className="Login-btn"
        style={{ marginTop: 30 }}
        onClick={() => {
          navigation("/Join");
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default Login;
