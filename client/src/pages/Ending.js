import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Ending() {
  const { state } = useLocation();
  const navigation = useNavigate();
  const [엔딩, set엔딩] = useState(null);

  useEffect(() => {
    fetch("/ending.json")
      .then((res) => res.json())
      .then((data) => {
        if (state && state.viichan) {
          const highestCategory = Object.keys(state.viichan).reduce((a, b) =>
            state.viichan[a] > state.viichan[b] ? a : b
          );

          const matchedEnding = data.find((ending) => ending.viichan === highestCategory);
          set엔딩(matchedEnding || { name: "알 수 없는 엔딩", content: "img/default.png" });
        }
      })
      .catch((err) => console.error("JSON 로드 실패:", err));
  }, [state]);

  return (
    <div className="result-img-wrap">
      <h1>당신의 선택에 따른 운명은</h1>
      {엔딩 ? (
        <>
          <h2>{엔딩.name}입니다.</h2>
          <img className="result-img" src={엔딩.content} alt={엔딩.name} />
        </>
      ) : (
        <p>결과를 불러오는 중...</p>
      )}
      <button className="btn" onClick={() => navigation("/Main")}>
        다시하기
      </button>
    </div>
  );
}

export default Ending;
