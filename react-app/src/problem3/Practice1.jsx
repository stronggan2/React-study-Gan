import React from "react";

const Practice1 = () => {
  const names = ["HTML", "CSS", "Javascript", "React"];
  const nameList = names.map(function (name) {
    return <li>{name}</li>;
  });
  console.log(nameList);
  return (
    <>
      <ul>{nameList}</ul>
    </>
  );
};

export default Practice1;
