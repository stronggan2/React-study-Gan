import React from "react";
import { useState } from "react";
import "./ReactBlog.css"

const ReactBlog = () => {
  let posts = "강남 우동 맛집";
  let [a,setA] = useState(["공덕 맛집", "크리스 마스 선물", "연말에 뭐하지?"]);



  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>
      <div className="list">
        <h4>{a[0]}</h4>
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
