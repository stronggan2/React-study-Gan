import React, { useState } from "react";

const Prac1 = () => {
  const [foods, setFoods] = useState(["초콜릿", "사탕"]);
  const [input, setInput] = useState("");

  function InputChange(e) {
    setInput(e.target.value);
  }
  function uploadInput() {
    setFoods((prevState) => [input, ...prevState]);
  }

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>

      {/* ul -> li로 사용해야 함 안에 넣을 경우 여러개가 생기니까 밖으로 감싸기 */}
      <ul>
        {foods.map((food, idx) => (
          <li key={idx}>{food}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prac1;
