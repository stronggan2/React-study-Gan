import React from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productId } = useParams();

  return <div>{productId.slice(3)}번째 제품 상세 페이지</div>;
};

export default ProductInfo;
