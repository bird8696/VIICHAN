import React from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setLoginUser } = React.useContext(StoreContext);
  const navigation = useNavigate();

  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  // 로그인 처리 (LocalStorage 사용)
  const 로그인 = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 입력한 ID와 PW가 일치하는지 확인
    const foundUser = users.find((u) => u.id === user.id && u.pw === user.pw);

    if (foundUser) {
      setLoginUser(foundUser);
      localStorage.setItem("loginUser", JSON.stringify(foundUser));

      alert("로그인 성공!");
      navigation("/Main");
    } else {
      alert("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
      navigation("/login");
    }
  };

  return (
    <div className="Login-main">
      <header className="App-header"></header>
      <input
        className="Login-input"
        type="text"
        placeholder="아이디를 입력해주세요"
        onChange={(event) => {
          setUser((prev) => ({ ...prev, id: event.target.value }));
        }}
      />
      <br />
      <input
        className="Login-input"
        style={{ marginTop: 10 }}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={(event) => {
          setUser((prev) => ({ ...prev, pw: event.target.value }));
        }}
      />
      <br />
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
