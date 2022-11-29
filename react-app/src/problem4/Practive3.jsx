import React, { useState } from "react";

const Practive3 = () => {
  const [color, setColor] = useState({ color: "black" });

  function changered() {
    setColor({ color: "red" });
  }
  function changegreen() {
    setColor({ color: "green" });
  }
  function changeblue() {
    setColor({ color: "blue" });
  }

  return (
    <div>
      <h1 style={color}>글자색 바꾸기</h1>
      <button onClick={changered}>빨간색</button>
      <button onClick={changegreen}>초록색</button>
      <button onClick={changeblue}>파란색</button>
    </div>
  );
};

export default Practive3;
