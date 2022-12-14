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
      <h2>πμμΉ νλ²κ±° κ°κ²π</h2>
      <br />
      <span>μ§λΆν  κΈμ‘ : {count}μ</span>
      <br />
      <input type="button" value="π" onClick={hamUp} />
      <input type="button" value="π" onClick={fryUp} />
      <input type="button" value="π₯€" onClick={cokeUp} />
      <input type="button" value="β" onClick={reset} />
    </div>
  );
};

export default Prac1;
