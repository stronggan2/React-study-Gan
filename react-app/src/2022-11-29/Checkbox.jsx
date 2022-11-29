import React, { useState } from "react";

const Checkbox = (props) => {
  const { cap, shose, bag } = props;
  const [total, setTotal] = useState(0);

  const changeHandler = (checkbox) => {
    if (checkbox.checked) {
      setTotal((prevState) => prevState + parseInt(checkbox.value));
    } else {
      setTotal((prevState) => prevState - parseInt(checkbox.value));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value={cap}
        onChange={(e) => changeHandler(e.target)}
      />
      모자 1만원
      <br />
      <input
        type="checkbox"
        value={shose}
        onChange={(e) => changeHandler(e.target)}
      />
      신발 3만원
      <br />
      <input
        type="checkbox"
        value={bag}
        onChange={(e) => changeHandler(e.target)}
      />
      가방 8만원
      <br />
      <p>합계 : {total} </p>
    </div>
  );
};

export default Checkbox;
