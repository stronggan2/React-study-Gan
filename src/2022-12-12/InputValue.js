import React, {useState} from 'react';

const InputValue = () => {
  const [name,setName] = useState();
  const [age,setAge] = useState();

  return (
    <div>
      <h1>
        이름 : <input type="text" value="GAN" onChange={(e)=>setName(e.target.value)}/>
        나이 : <input type="text" value="20" onChange={(e)=>setAge(e.target.value)}/>
      </h1>
    </div>
  );
};

export default InputValue;