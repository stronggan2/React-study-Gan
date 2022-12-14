import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import "./InsertProduct.scss";

const InsertProduct = (props) => {
  const { fruitRef } = props;
  const [newFruit, setNewFruit] = useState({});

  async function submitHandler(e) {
    e.preventDefault();
    await setDoc(doc(fruitRef, newFruit.name), {
      id: newFruit.pid,
      season: newFruit.season,
      color: newFruit.color,
      taste: newFruit.taste,
      count: newFruit.count,
      price: newFruit.price,
    });

    alert("μΆκ°μλ£");
  }

  function changeHandler(e) {
    setNewFruit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="container">
      <h1>πκ³ΌμΌ λ°μ΄ν°λ² μ΄μ€π</h1>
      <form onSubmit={submitHandler} className="setForm">
        <label>
          μνλ²νΈ
          <input type="text" name="pid" onChange={changeHandler} />
        </label>
        <label>
          μνμ΄λ¦
          <input type="text" name="name" onChange={changeHandler} />
        </label>

        <label>
          μνμκΈ°
          <input type="text" name="season" onChange={changeHandler} />
        </label>

        <label>
          μνμμ
          <input type="text" name="color" onChange={changeHandler} />
        </label>

        <label>
          μνλΉλ
          <input type="text" name="taste" onChange={changeHandler} />
        </label>

        <label>
          μμ°μλ
          <input type="number" step="1" name="count" onChange={changeHandler} />
        </label>

        <label>
          μνκ°κ²©
          <input
            type="number"
            step="1000"
            name="price"
            onChange={changeHandler}
          />
        </label>

        <button className="addBtn">μΆκ°</button>
      </form>
    </div>
  );
};

export default InsertProduct;
