import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post from "./pages/post";
import NewPost from "./pages/newPost";
import Singin from "./pages/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
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
    path: "/newPost",
    element: <NewPost />,
  },
  {
    path: "/signin",
    element: <Singin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
