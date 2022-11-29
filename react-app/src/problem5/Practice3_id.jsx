import React from "react";

const Practice3_id = (props) => {
  return (
    <div>
      <h3>ID : </h3>
      <input
        type="text"
        name="msg"
        onChange={(e) => {
          props.setId(e.target.value);
        }}
      />
    </div>
  );
};

export default Practice3_id;
