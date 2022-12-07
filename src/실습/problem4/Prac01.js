import React, { useState } from 'react';

function Prac01(){
    var [number, setNumber] = useState(0);

    function upCounter(){
        setNumber(number+1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={upCounter}>클릭</button>
        </div>
    );
}

export default Prac01;