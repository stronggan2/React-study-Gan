import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to={"./"}>홈</Link>
      <br />
      <Link to={"./diary"}>다이어리</Link>
      <br />
      <Link to={"./new"}>뉴</Link>
      <br />
      <Link to={"./edit"}>수정</Link>
    </div>
  );
};

export default RouteTest;
