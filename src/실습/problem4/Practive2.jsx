import React, { useState } from "react";

const Practive2 = () => {
  const [value, setValue] = useState("안녕하세요");
  function chageValue1() {
    setValue("로그인 되었습니다.");
  }
  function chageValue2() {
    setValue("로그아웃 되었습니다.");
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={chageValue1}>로그인</button>
      <button onClick={chageValue2}>로그아웃</button>
    </div>
  );
};

export default Practive2;
