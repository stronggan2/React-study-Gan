import React, { useState, useCallback, useEffect } from "react";

const UseCallBackComponent2 = () => {
  const [count, setCount] = useState(0);

  const clickHandler = useCallback(() => {
    console.log("count : ", count);
  }, [count]);

  useEffect(() => {
    console.log("clickHandler() 변경");
  }, [clickHandler]);
  // 하나 만들어 놓고, 함수 이름을 집어 넣기
  // 랜더링 후 함수가 변경되지 않았다면 새로 만들지마!

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={clickHandler}>숫자 출력</button>
    </div>
  );
};
export default UseCallBackComponent2;
