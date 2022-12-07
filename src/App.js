import React, { useState } from "react";
import { ThemeContext } from "./2022-12-07/ThemeContext";
import HomeComponet from "./2022-12-07/HomeComponent";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <HomeComponet />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
