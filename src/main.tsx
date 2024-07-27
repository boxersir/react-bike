/*
 * @Author: caixin caixin185@163.com
 * @Date: 2024-07-27 08:22:42
 * @LastEditors: caixin
 * @LastEditTime: 2024-07-27 10:55:03
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
