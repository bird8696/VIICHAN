import React, { useContext } from "react";
import { StoreContext } from "../App";
import { useNavigate } from "react-router-dom";

function Answer({ text, value, nextPage }) {
  const { updateScore } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <button className="answer-btn" onClick={() => updateScore(value, navigate, nextPage)}>
      {text}
    </button>
  );
}

export default Answer;
