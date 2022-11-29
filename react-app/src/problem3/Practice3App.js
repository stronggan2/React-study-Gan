import React from "react";
import "./Practice1App.css";
import Practice3 from "./problem3/Practice3";

const App = () => {
  const names = [
    {
      name: "영지",
      birth: "2002. 9. 10.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHZyUIfR3K6vgdfsMf9K1ljSKJKFRb7UJKA&usqp=CAU",
      Address: "Seoul",
    },
    {
      name: "유진",
      birth: "2003. 9. 1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3yujtwUn_o244OrVDw0-lMtg-ADUubjbhw&usqp=CAU",
      Address: "Seoul",
    },
    {
      name: "미미",
      birth: "1995. 5. 1.",
      img: "data:image/jpeg;base64,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",
      Address: "Seoul",
    },
    {
      name: "은지",
      birth: "1992. 1. 16.",
      img: `data:image/jpeg;base64,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`,
      Address: "Seoul",
    },
  ];

  return (
    <>
      <Practice3 names={names} />
    </>
  );
};

export default App;
