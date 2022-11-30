import React from "react";
import { useState } from "react";
import Practice3_id from "./Practice3_id";
import Practice3_pw from "./Practice3_pw";

const Practice3 = () => {
  const [id, setId] = useState(""); // gan
  const [pw, setPw] = useState(""); // 12345
  const checkLogin = () => {
    if (id === "gan" && pw === "12345") {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <div>
      <Practice3_id setId={setId} />
      <Practice3_pw setPw={setPw} />
      <button onClick={checkLogin}>로그인</button>
    </div>
  );
};

export default Practice3;
