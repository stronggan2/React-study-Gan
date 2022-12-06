import React, { useReducer } from "react";

const Prac1 = () => {
  function countReducer(state, action) {
    if (action === "hamUp") {
      return state + 3000;
    } else if (action === "fryUp") {
      return state + 2500;
    } else if (action === "cokeUp") {
      return state + 1500;
    } else if (action === "reset") {
      return (state = 0);
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function hamUp() {
    countDispatch("hamUp");
  }
  function fryUp() {
    countDispatch("fryUp");
  }
  function cokeUp() {
    countDispatch("cokeUp");
  }
  function reset() {
    countDispatch("reset");
  }

  return (
    <div>
      <h2>🎀새싹 햄버거 가게🎀</h2>
      <br />
      <span>지불할 금액 : {count}원</span>
      <br />
      <input type="button" value="🍔" onClick={hamUp} />
      <input type="button" value="🍟" onClick={fryUp} />
      <input type="button" value="🥤" onClick={cokeUp} />
      <input type="button" value="⛔" onClick={reset} />
    </div>
  );
};

export default Prac1;
