import React from "react";

import { Routes, Route } from "react-router-dom";

import { Main, onc01 } from "./pages";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<onc01 />} />
    </Routes>
  );
}

export default AppIndex;
