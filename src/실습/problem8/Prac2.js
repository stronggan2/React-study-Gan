import React, { useState, useReducer } from "react";

const Prac2 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "deposit":
        return state + action.payload;
      case "withdraw":
        return state - action.payload;
      default: // 실수 줄이기용!
        return state;
    }
  };

  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>
        👱🏻‍♀️금액을 입력하세요
        <br />
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <br />
      <h2>👱🏻‍♀️입금 또는 출금 버튼을 클릭하세요</h2>
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
      <br />
      <h2>💵현재 잔액 : {money}원</h2>
    </div>
  );
};

export default Prac2;
