import React from "react";
import styles from "./GlobalStyle1.module.css";

const GlobalStyle1 = () => {
  return (
    <div className={styles.container}>
      <h1>컴포넌트1</h1>
      <button className="globalBtn">전역스타일</button>
    </div>
  );
};

export default GlobalStyle1;
