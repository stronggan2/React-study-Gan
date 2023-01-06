import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import { db } from "./firebase";
import { collection } from "firebase/firestore";
import App from "./App";
import InsertProduct from "./pages/InsertProduct";

const fruitRef = collection(db, "fruits");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product fruitRef={fruitRef} /> },
      {
        path: "/product/:productId",
        element: <ProductInfo fruitRef={fruitRef} />,
      },
      { path: "/insert", element: <InsertProduct fruitRef={fruitRef} /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
