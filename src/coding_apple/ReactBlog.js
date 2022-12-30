import React from "react";
import { useState } from "react";
import "./ReactBlog.css";

//map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

const ReactBlog = () => {
  let posts = "강남 우동 맛집";
  let [a, setA] = useState(["공덕 맛집", "크리스 마스 선물", "연말에 뭐하지?"]);
  let [b, setB] = useState(0);
  let [modal, setModal] = useState(false);

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
        <h4
          onClick={() => {
            setModal = true;
          }}
        >
          {a[2]}
        </h4>
        {modal == true ? <Modal /> : null}

        <p>12월 23일 발행</p>
      </div>
    </div>
  );
};

function Modal() {
  return (
    <div className="Modal">
      <h4>제목</h4>
      <h4>날씨</h4>
      <h4>상세내용</h4>
    </div>
  );
}

export default ReactBlog;
