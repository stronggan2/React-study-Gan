import React from "react";

const Practice3_pw = (props) => {
  return (
    <div>
      <h3>PW : </h3>
      <input
        type="text"
        name="msg"
        onChange={(e) => {
          props.setPw(e.target.value);
        }}
      />
    </div>
  );
};

export default Practice3_pw;
