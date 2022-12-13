import React from "react";

const MyButton = ({ text, type, onClick }) => {
  return (
    <div>
      <button className="MyButton" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default MyButton;
