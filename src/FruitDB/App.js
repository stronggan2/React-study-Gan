import { Outlet } from "react-router-dom";
import InputValue from "./pages/InputValue";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default App;
