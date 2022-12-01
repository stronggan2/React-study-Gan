import React, { useState } from "react";

const Practice2 = () => {
  const [message, setMessage] = useState({ title: "제목", color: "black" });
  const fstyle = {
    color: message.color,
  };
  return (
    <div>
      <h1 style={fstyle}>{message.title}</h1>
      <br />
      <input
        type="text"
        name="msg"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          setMessage({ title: e.target.value, color: "red" });
        }}
      />
    </div>
  );
};

export default Practice2;
