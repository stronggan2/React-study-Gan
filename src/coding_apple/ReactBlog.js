import React, { useState } from "react";

const ReactBlog = () => {
  let [글제목, 글제목변경] = useState[("리액트쪼랩", "공덕맛집", "공덕술집")];
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="ReactBlog">
      <div className="pinkNav">
        <h4>React Blog</h4>
      </div>

      <div>
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏻
          </span>
        </h4>
        <p>12월 16일 발행</p>
      </div>
    </div>
  );
};

export default ReactBlog;
