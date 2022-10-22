import React from "react";
import { SetContext } from "../App";

function Answer(props) {
  const { setDispatechType } = React.useContext(SetContext);
  return (
    <button
      className="Answer"
      onClick={() => {
        setDispatechType({
          code: "답변",
          params: {
            viichan: props.value,
          },
        });
      }}
    >
      {props.text}
    </button>

    
  );
}

export default Answer;
