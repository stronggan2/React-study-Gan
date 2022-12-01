import React from "react";

function BooleanComponent({ bored }) {
  const message = bored ? "놀러가자" : "하던 일 열심히 마무리하기";

  return <div>{message}</div>;
}

export default BooleanComponent;
