import React, { useState } from "react";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={() => {}} />}
        rightChild={<MyButton text={">"} onClick={() => {}} />}
      />
    </div>
  );
};

export default Home;
