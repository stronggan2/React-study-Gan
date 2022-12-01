import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  console.log(styles);

  return (
    <div className={`${styles.container} ${styles.title}`}>
      <span className="span">CSS module</span> 실습
    </div>
  );
};

export default CSSModule;
