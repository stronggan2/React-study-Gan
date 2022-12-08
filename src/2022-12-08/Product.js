import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const clickHandler = (e) => {
    setProductId(e.target.value);
  };

  useEffect(() => {
    navigate(`/product/${productId}`);
  }, [productId, navigate]);
  // }, [productId]);
  // 로 하면 왜 안쓰고 있음? 하고 warning함!

  return (
    <div>
      <button onClick={clickHandler} value="p001">
        1번 제품
      </button>
      <button onClick={clickHandler} value="p002">
        2번 제품
      </button>
      <button onClick={clickHandler} value="p003">
        3번 제품
      </button>
    </div>
  );
};

export default Product;
