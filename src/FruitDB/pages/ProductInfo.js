import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import "./ProductInfo.scss";

const ProductInfo = (props) => {
  const { fruitRef } = props;
  const { productId } = useParams();
  const [pid, setPid] = useState();
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [season, setSeason] = useState();
  const [taste, setTaste] = useState();
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getFruit() {
      const data = await query(fruitRef, where("id", "==", productId));
      const querySnapshot = await getDocs(data);

      querySnapshot.forEach((item) => {
        setPid(item.data().id);
        setName(item.id);
        setColor(item.data().color);
        setSeason(item.data().season);
        setTaste(item.data().taste);
        setPrice(item.data().price);
        setCount(item.data().count);
        console.log(item.id, " : ", item.data());
      });
    }
    getFruit();
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    updateData();
  }

  async function updateData() {
    await updateDoc(doc(fruitRef, name), {
      season: season,
      color: color,
      taste: taste,
      price: price,
      count: count,
    });

    alert("수정완료");
    navigate(`/product`);
  }

  async function deleteData() {
    if (window.confirm("정말 삭제합니까?")) {
      await deleteDoc(doc(fruitRef, name));
      alert("삭제되었습니다.");
      navigate(`/product`);
    } else {
      alert("취소합니다.");
    }
  }

  return (
    <>
      <h1 className="pInfoTitle">
        <span>{productId}</span> 상품 상세 페이지
      </h1>
      <div className="container">
        <form onSubmit={submitHandler} className="infoForm">
          <label>
            상품번호
            <input
              type="text"
              value={pid || ""}
              name="pid"
              onChange={(e) => setPid(e.target.value)}
            />
          </label>
          <label>
            상품이름
            <input
              type="text"
              value={name || ""}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            수확시기
            <input
              type="text"
              value={season || ""}
              name="season"
              onChange={(e) => setSeason(e.target.value)}
            />
          </label>
          <label>
            상품색상
            <input
              type="text"
              value={color || ""}
              name="color"
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <label>
            상품당도
            <input
              type="text"
              value={taste || ""}
              name="taste"
              onChange={(e) => setTaste(e.target.value)}
            />
          </label>
          <label>
            생산수량
            <input
              type="number"
              value={count || ""}
              name="count"
              step="1"
              onChange={(e) => setCount(e.target.value)}
            />
          </label>
          <label>
            상품가격
            <input
              type="number"
              value={price || ""}
              name="price"
              step="1000"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <div>
            <button className="updateBtn">수정</button>
            <button className="deleteBtn" onClick={deleteData}>
              제거
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductInfo;
