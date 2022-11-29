import React from "react";
import image from "../2022-11-29/6.jpg";

const InsertImages = () => {
  return (
    <div>
      <h1>이미지 추가하기</h1>
      <img src={image} width="300px" height="200px" alt="파일없음" />
      <br />
      <img
        src={require("../2022-11-29/6.jpg")}
        width="300px"
        height="200px"
        alt="파일없음"
      />
      <br />
      <img src="/6.jpg" alt="파일없음" />
    </div>
  );
};

export default InsertImages;
