import React from "react";
import { useState } from "react";
import "./ReactBlog.css";
//Component : 많은 div들을 한 단어로 줄이고 싶으면

const ReactBlog = () => {
  let posts = "강남 우동 맛집";
  let [a, setA] = useState(["공덕 맛집", "크리스 마스 선물", "연말에 뭐하지?"]);
  let [b, setB] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>

      <button
        onClick={() => {
          let Scopy = [...a];
          a.sort();
          setA(Scopy);
        }}
      >
        가나다순 정렬
      </button>
      <button
        onClick={() => {
          let copy = [...a];
          copy[0] = "공덕 술집";
          setA(copy);
        }}
      >
        {" "}
        글수정
      </button>

      <div className="list">
        <h4>
          {a[0]}
          <span
            onClick={() => {
              setB(b + 1);
            }}
          >
            👍🏻
          </span>{" "}
          {b}
        </h4>
        <p>12월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>12월 20일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>12월 23일 발행</p>
      </div>
    </div>
  );
};

export default ReactBlog;
