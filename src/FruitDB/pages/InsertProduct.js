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

    alert("추가완료");
  }

  function changeHandler(e) {
    setNewFruit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="container">
      <h1>🍉과일 데이터베이스🍉</h1>
      <form onSubmit={submitHandler} className="setForm">
        <label>
          상품번호
          <input type="text" name="pid" onChange={changeHandler} />
        </label>
        <label>
          상품이름
          <input type="text" name="name" onChange={changeHandler} />
        </label>

        <label>
          수확시기
          <input type="text" name="season" onChange={changeHandler} />
        </label>

        <label>
          상품색상
          <input type="text" name="color" onChange={changeHandler} />
        </label>

        <label>
          상품당도
          <input type="text" name="taste" onChange={changeHandler} />
        </label>

        <label>
          생산수량
          <input type="number" step="1" name="count" onChange={changeHandler} />
        </label>

        <label>
          상품가격
          <input
            type="number"
            step="1000"
            name="price"
            onChange={changeHandler}
          />
        </label>

        <button className="addBtn">추가</button>
      </form>
    </div>
  );
};

export default InsertProduct;
