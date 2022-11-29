import React, { useState } from "react";

const EventOnChange = () => {
  const [message, setMessage] = useState("onChange 이벤트");

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        name="msg"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default EventOnChange;
