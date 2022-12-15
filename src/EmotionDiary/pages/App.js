import React, { useRef, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./EmotionDiary/pages/Home";
import New from "./EmotionDiary/pages/New";
import Edit from "./EmotionDiary/pages/Edit";
import Diary from "./EmotionDiary/pages/Diary";
import "./App.css";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1671006278549 },
  { id: 2, emotion: 2, content: "오늘의 일기 2번", date: 1671006278550 },
  { id: 3, emotion: 3, content: "오늘의 일기 3번", date: 1671006278551 },
  { id: 4, emotion: 4, content: "오늘의 일기 4번", date: 1671006278552 },
  { id: 5, emotion: 5, content: "오늘의 일기 5번", date: 1671006278553 },
];

const App = () => {
  const [data, dispatch] = useReducer(reducer, dummyData);

  console.log(new Date().getTime());
  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
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
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
