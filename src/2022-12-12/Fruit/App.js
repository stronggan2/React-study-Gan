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
      <h2>🍉과일🍋데이터베이스🍓</h2>
      <form>
        <h4>
          이름
          <input type="text" name="name" onChange={changeHandler} />
        </h4>
        <h4>
          계절
          <input type="text" name="season" onChange={changeHandler} />
        </h4>
        <h4>
          색상
          <input type="text" name="color" onChange={changeHandler} />
        </h4>
        <h4>
          맛
          <input type="text" name="taste" onChange={changeHandler} />
        </h4>
        <h4>
          가격
          <input type="number" name="price" onChange={changeHandler} />
        </h4>
        <button onClick={addFruit}>추가</button>
      </form>
    </div>
  );
};

export default App;
