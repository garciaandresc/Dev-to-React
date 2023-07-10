import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post from "./pages/post";
import NewPost from "./pages/newPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not found</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "newPost",
    element: <NewPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
