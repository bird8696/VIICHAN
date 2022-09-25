import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppIndex from "./AppIndex";

export const SetContext = React.createContext({});

function App() {
  return (
    <SetContext.Provider>
      <AppIndex />
    </SetContext.Provider>
  );
}

export default App;
