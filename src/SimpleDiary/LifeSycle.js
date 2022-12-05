import React, { useState, useEffect } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");

    return () => {
      // Unmount 시점에 실행
      console.log("UnMount!");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};

const LifeSycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeSycle;
