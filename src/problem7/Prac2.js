import React, { useEffect, useState } from "react";

const Prac2 = () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("2번 랜더링이 완료되었습니다.");
  });

  function numUp() {
    console.log("count 값이 변경되었습니다.");
    setValue(value + 1);
  }

  function InputChange(e) {
    console.log("text 값이 변경되었습니다.");
    setInput(e.target.value);
  }

  return (
    <div>
      <p>{value}</p>
      <button onClick={numUp}>+1</button>
      <br />
      <input type="text" onChange={InputChange} />
      <p>{input}</p>
    </div>
  );
};

export default Prac2;
