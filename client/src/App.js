import React from "react";

export const StoreContext = React.createContext({});

function App() {
  const [viichan, setViichan] = React.useState(() => {
    return JSON.parse(localStorage.getItem("viichan")) || {
      A: 0, B: 0, C: 0, D: 0, E: 0, S: 0
    };
  });

  // 점수 업데이트 함수 (페이지 이동 포함)
  const updateScore = (category, navigate, nextPage) => {
    const updatedViichan = { ...viichan, [category]: viichan[category] + 1 };
    setViichan(updatedViichan);
    localStorage.setItem("viichan", JSON.stringify(updatedViichan));

    if (nextPage === "Ending") {
      navigate(`/Ending`, { state: { viichan: updatedViichan } });
    } else {
      navigate(`/Onc${nextPage}`);
    }
  };

  return (
    <StoreContext.Provider value={{ viichan, updateScore }}>
      {/* 다른 컴포넌트들 */}
    </StoreContext.Provider>
  );
}

export default App;
