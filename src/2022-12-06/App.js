import React, { useCallback, useState } from "react";
import ChildComponent from "./2022-12-06/ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);

  const updateHandler = useCallback(() => {
    console.log("update");
  }, []);

  return (
    <div>
      <input type="number" onChange={(e) => setCount(e.target.value)} />

      <ChildComponent update={updateHandler} />
    </div>
  );
};

export default App;
