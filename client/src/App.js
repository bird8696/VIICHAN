import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";

export const SetContext = React.createContext({});

function App() {
  const navigation = useNavigate();
  const [dispatchType, setDispatechType] = React.useState({
    code: "",
    params: null,
  });
  const [viichan, setViichan] = React.useState([
    {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        S: 0,
    }
  ]);

  React.useEffect(() => {
    switch(dispatchType.code)
  })

  return (
    <SetContext.Provider>
      <AppIndex />
    </SetContext.Provider>
  );
}

export default App;
