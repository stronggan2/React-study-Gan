import React, { useState } from "react";

const Prac4 = () => {
  console.log("4번 랜더링 완료");
  const [text, setText] = useState("");

  const ref = useRef("");
  ref.current = e.target.value; // 변경 전

  return (
    <div>
      <imput type="text" onChange={textChange} />
      <button onClick={setText}>전송</button>
      <p>전송된 단어 : {text} </p>
    </div>
  );
};

export default Prac4;
