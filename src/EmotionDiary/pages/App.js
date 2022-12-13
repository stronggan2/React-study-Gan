import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./EmotionDiary/pages/Home";
import New from "./EmotionDiary/pages/New";
import Edit from "./EmotionDiary/pages/Edit";
import Diary from "./EmotionDiary/pages/Diary";
import "./App.css";

const App = () => {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        {/* <img src={process.env.PUBLIC_URL + `/assats/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion5.png`} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
