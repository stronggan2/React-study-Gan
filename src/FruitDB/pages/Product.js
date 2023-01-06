import React, { useEffect, useState } from "react";
import { getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = (props) => {
  const { fruitRef } = props;

  const [fruitInfo, setFruitInfo] = useState([]);
  const [productId, setProductId] = useState("");

  const navigate = useNavigate();

  const clickHandler = (e) => {
    console.log(e.target.value);
    setProductId(e.target.value);
  };

  useEffect(() => {
    async function getAllFruit() {
      const data = await getDocs(fruitRef);

      setFruitInfo(
        data.docs.map((item) => ({
          ...item.data(),
          name: item.id,
          pid: item.data().id,
        }))
      );
    }
    getAllFruit();
  }, []);

  const showFruits = fruitInfo.map((fruit) => (
    <tr key={fruit.pid} className="productTr">
      <td>{fruit.pid}</td>
      <td>{fruit.name}</td>
      <td>{fruit.color}</td>
      <td>{fruit.count}</td>
      <td>
        <button onClick={clickHandler} value={fruit.pid} className="infoBtn">
          상세정보
        </button>
      </td>
    </tr>
  ));

  useEffect(() => {
    navigate(`/product/${productId}`);
  }, [productId]);

  return (
    <>
      <h1 className="pInfoTitle">전체 상품 리스트</h1>
      <table className="productTable">
        <tbody>
          <tr className="productTopTr">
            <th>번호</th>
            <th>상품명</th>
            <th>색상</th>
            <th>수량</th>
            <th>상세정보</th>
          </tr>
          {showFruits}
        </tbody>
      </table>
    </>
  );
};

export default Product;
