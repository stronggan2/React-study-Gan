import React, { useState } from "react";

const AddName = () => {
  const [names, setNames] = useState(["간", "리액트"]);
  const [input, setInput] = useState("");

  function InputChange(e) {
    setInput(e.target.value);
  }
  function uploadInput() {
    setNames((prevState) => [...prevState, input]);
  }

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default AddName;
