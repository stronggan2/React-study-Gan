import React, { useState } from "react";

const Practice4 = () => {
  const [city, setCity] = useState[("서울", "부산", "제주")];
  const [cityE, setCityE] = useState[("Seoul", "Busan", "Jeju")];
  const [state, setState] = useState("");

  return (
    <div>
      <h1>라디오 버튼의 value를 출력</h1>
      {/* <input type="서울" onChange={Seoul}  ></input> */}
      {/* <input type="부산" onChange={Busan}  ></input> */}
      {/* <input type="제주" onChange={Jeju}  ></input> */}

      {/* map 함수 이용해보기 */}

      <button onChange={alert({ state })}></button>
    </div>
  );
};

export default Practice4;
