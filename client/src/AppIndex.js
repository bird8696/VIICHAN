import React from "react";

import { Routes, Route } from "react-router-dom";

import {
  Login,
  Join,
  Main,
  Onc1,
  Onc2,
  Onc3,
  Onc4,
  Onc5,
  Onc6,
  Onc7,
  Onc8,
  Onc9,
  Onc10,
  Onc11,
  Onc12,
  Onc13,
  Onc14,
  Onc15,
  Onc16,
  Onc17,
  Onc18,
  Onc19,
  Onc20,
  Ending,
} from "./pages";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/join" element={<Join />} />
      <Route exact path="/main" element={<Main />} />
      <Route exact path="/Onc1" element={<Onc1 />} />
      <Route exact path="/Onc2" element={<Onc2 />} />
      <Route exact path="/Onc3" element={<Onc3 />} />
      <Route exact path="/Onc4" element={<Onc4 />} />
      <Route exact path="/Onc5" element={<Onc5 />} />
      <Route exact path="/Onc6" element={<Onc6 />} />
      <Route exact path="/Onc7" element={<Onc7 />} />
      <Route exact path="/Onc8" element={<Onc8 />} />
      <Route exact path="/Onc9" element={<Onc9 />} />
      <Route exact path="/Onc10" element={<Onc10 />} />
      <Route exact path="/Onc11" element={<Onc11 />} />
      <Route exact path="/Onc12" element={<Onc12 />} />
      <Route exact path="/Onc13" element={<Onc13 />} />
      <Route exact path="/Onc14" element={<Onc14 />} />
      <Route exact path="/Onc15" element={<Onc15 />} />
      <Route exact path="/Onc16" element={<Onc16 />} />
      <Route exact path="/Onc17" element={<Onc17 />} />
      <Route exact path="/Onc18" element={<Onc18 />} />
      <Route exact path="/Onc19" element={<Onc19 />} />
      <Route exact path="/Onc20" element={<Onc20 />} />
      <Route exact path="/Ending" element={<Ending />} />
    </Routes>
  );
}

export default AppIndex;
