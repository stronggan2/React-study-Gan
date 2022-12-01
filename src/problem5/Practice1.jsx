import React, { useState } from "react";

const Practice1 = () => {
  const [number, setNumber] = useState(1);

  function changeNumber() {
    setNumber(number + 1);
  }

  function resetNumber() {
    setNumber(1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={changeNumber} onMouseOut={resetNumber}>
        클릭
      </button>
    </div>
  );
};

export default Practice1;
