import React from "react";

const UseCallBackComponent1 = () => {
  const name1 = () => "gan";
  const name2 = () => "gan";

  console.log("name1 : ", name1);
  console.log("name2 : ", name2);

  return <div>{name1 === name2 ? "같다" : "다르다"}</div>;
};
export default UseCallBackComponent1;
