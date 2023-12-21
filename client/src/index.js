import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>error</h3>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
