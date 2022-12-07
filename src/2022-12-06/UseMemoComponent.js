import React from "react";

function hardCalculate(number) {
  console.log("어려운 계산중");
  for (let i = 0; i < 100000000; i++) {}
  return number + 10000;
}

const useMemoComponent = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const hardSum = hardCalculate(hardNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>
    </div>
  );
};

export default useMemoComponent;
