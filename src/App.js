import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteTest from "./EmotionDiary/pages/RouteTest";

import Home from "./EmotionDiary/pages/Home";
import New from "./EmotionDiary/pages/New";
import Edit from "./EmotionDiary/pages/Edit";
import Diary from "./EmotionDiary/pages/Diary";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
};

export default App;
