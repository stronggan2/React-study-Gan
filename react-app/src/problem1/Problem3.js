import React from "react";

function Problem3() {
  const name = "React";
  return (
    <div>
      {name === "React" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
    </div>
  );
}

export default Problem3;
