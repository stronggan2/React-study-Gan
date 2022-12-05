import React, { useEffect, useState, useRef } from "react";

const Prac3 = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useRef(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    console.log("3번 랜더링 완료");
  });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <h1>렌더링 횟수 : {renderCount}</h1>
    </div>
  );
};

export default Prac3;
