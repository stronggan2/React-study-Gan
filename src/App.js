import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./2022-12-08/Home";
import NotFound from "./2022-12-08/NotFound";
import Product from "./2022-12-08/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
