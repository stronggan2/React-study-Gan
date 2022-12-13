import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./EmotionDiary/pages/Home";
import New from "./EmotionDiary/pages/New";
import Edit from "./EmotionDiary/pages/Edit";
import Diary from "./EmotionDiary/pages/Diary";
import "./App.css";
import MyButton from "./EmotionDiary/MyButton";
import MyHeader from "./EmotionDiary/MyHeader";

const App = () => {
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">

        <MyHeader headText={"App"} leftChild={<MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")}/>} 
        rightChild={<MyButton text={"오른쪽 버튼"} onClick={() => alert("오른쪽 클릭")}
        />
  }
  />
        <h2>App.js</h2>

        {/* <img src={process.env.PUBLIC_URL + `/assats/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assats/emotion5.png`} /> */}
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />
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
