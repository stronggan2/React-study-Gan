import React, { useState } from 'react';

const Prac04 = () => {
    const [value, setValue] = useState('글자색 바꾸기')
    const [color, setColor] = useState('black')

    function changeColor(color){
        setColor(color)
    }

    const fstyle = {
        color : color
    }

    return (
    /*
        // onClick 이벤트에서 setColor에 값 바로 설정
        // style 속성에 값으로 변수(color)를 넣을 경우 중괄호 2개
        <div>
            <h1 style={{color}}>{value}</h1>
            <button onClick={()=>setColor('red')}>빨간색</button>
            <button onClick={()=>setColor('green')}>초록색</button>
            <button onClick={()=>setColor('blue')}>파란색</button>
        </div>
    */

        // onClick 이벤트에서 익명함수를 이용해 changeColor 값 전달
        // style 속성의 값으로 객체(fstyle)를 넣을 경우 중괄호 1개
        <div>
            <h1 style={fstyle}>{value}</h1>
            <button onClick={()=>changeColor('red')}>빨간색</button>
            <button onClick={()=>changeColor('green')}>초록색</button>
            <button onClick={()=>changeColor('blue')}>파란색</button>
        </div>
    );
};

export default Prac04;