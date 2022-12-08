import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./2022-12-08/Home";
import NotFound from "./2022-12-08/NotFound";
import Product from "./2022-12-08/Product";
import Root from "./2022-12-08/Root";
import ProductInfo from "./2022-12-08/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductInfo /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
