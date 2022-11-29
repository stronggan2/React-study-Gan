import { useState } from "react";

const Hello = () => {
  const [value, setValue] = useState("안녕하세요");

  function chageValue() {
    setValue("반가워요");
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={chageValue}>클릭</button>
    </div>
  );
};

export default Hello;
