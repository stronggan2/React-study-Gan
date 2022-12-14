import React, { useState } from "react";
import { db } from "./Firebase";
import { setDoc, doc, collection } from "firebase/firestore";

const App = () => {
  const fruitCollection = collection(db, "fruits");
  const [fruit, setFruit] = useState({
    name: "",
    season: "", // e.target.value
    color: "",
    taste: "",
    price: 0,
  });

  async function addFruit() {
    await setDoc(doc(fruitCollection, fruit.name), {
      season: fruit.season,
      color: fruit.color,
      taste: fruit.taste,
      price: fruit.price,
    });
  }

  const changeHandler = (e) => {
    setFruit({ ...fruit, [e.target.name]: e.target.value });
  };
  console.log(fruit);


  return (
    <div>
      <h2>πκ³ΌμΌπλ°μ΄ν°λ² μ΄μ€π</h2>
      <form>
        <h4>
          μ΄λ¦
          <input type="text" name="name" onChange={changeHandler} />
        </h4>
        <h4>
          κ³μ 
          <input type="text" name="season" onChange={changeHandler} />
        </h4>
        <h4>
          μμ
          <input type="text" name="color" onChange={changeHandler} />
        </h4>
        <h4>
          λ§
          <input type="text" name="taste" onChange={changeHandler} />
        </h4>
        <h4>
          κ°κ²©
          <input type="number" name="price" onChange={changeHandler} />
        </h4>
        <button onClick={addFruit}>μΆκ°</button>
      </form>
    </div>
  );
};

export default App;
