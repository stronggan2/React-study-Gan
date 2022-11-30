import React, { useState } from 'react';

const Prac4 = () => {
  // const [cities, setCities] = useState([
  //   { kor: '서울', eng: 'Seoul' },
  //   { kor: '부산', eng: 'Busan' },
  //   { kor: '제주', eng: 'Jeju' },
  // ]);

  const [cities, setCiteis] = useState(['서울', '부산', '제주']);
  const [citiesEng, setCiteisEng] = useState(['Seoul', 'Busan', 'Jeju']);
  const [state, setState] = useState('');

  return (
    <div>
      <h1>라디오 버튼의 value를 출력</h1>

      {cities.map((city, index) => (
        <div>
          <input
            type="radio"
            name="city"
            value={citiesEng[index]}
            onChange={(e) => {
              console.log(e.target.value);
              setState(e.target.value);
            }}
          ></input>
          {city}
        </div>
      ))}

      {/* <input type="radio" name="city" value="Seoul" onChange={}/>
      서울
      <input type="radio" name="city" value="Busan" onChange={}/ />
      부산
      <input type="radio" name="city" value="Jeju" onChange={}/ />
      제주 */}

      <button
        onClick={(e) => {
          alert(state);
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Prac4;