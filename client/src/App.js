import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";

export const SetContext = React.createContext({});
export const StoreContext = React.createContext({});

function App() {
  /*
    1. useContext : 전역변수
    2. Redux, Recoil   (라이브러리)
  */
  const [loginUser, setLoginUser] = React.useState({
    id: "",
    pw: "",
  });

  const { pathname } = useLocation();

  const 주소유효성검증 = () => {
    const 로그인했을때비접근주소 = ["join", "login", "Onc1"];
    const 주소 = pathname.slice(1);

    if (로그인했을때비접근주소.includes(주소) && loginUser.id !== "") {
      navigation("/main");
    }
  };

  const 자동로그인 = () => {
    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (user) {
      setLoginUser(user);
    }
  };

  React.useEffect(() => {
    자동로그인();
  }, []);

  React.useEffect(() => {
    주소유효성검증();
  }, [loginUser]);

  const navigation = useNavigate();
  const [dispatchType, setDispatechType] = React.useState({
    code: "",
    params: null,
  });

  const [viichan, setViichan] = React.useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    S: 0,
  });

  React.useEffect(() => {
    switch (dispatchType.code) {
      case "답변":
        const clickedViichan = dispatchType.params.viichan;

        const cloneViichan = { ...viichan };

        const obj = {
          name: "",
          age: 0,
        };

        cloneViichan[clickedViichan]++;
        setViichan(cloneViichan);

        const pathname = window.location.pathname;

        //  /Onc11 .charAt(0) 6
        const NextPage = Number(pathname.replace(/[^0-9]/g, "")) + 1;

        navigation(`Onc${NextPage}`);

        if (NextPage === 14) {
          navigation(`/Ending`, {
            state: {
              viichan: viichan,
            },
          });
        } else {
          navigation(`Onc${NextPage}`);
        }

      default:
        break;
    }
  }, [dispatchType]);

  return (
    <StoreContext.Provider
      value={{
        loginUser: loginUser,
        setLoginUser: setLoginUser,
      }}
    >
      <SetContext.Provider value={{ setDispatechType: setDispatechType }}>
        <AppIndex />
      </SetContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;
