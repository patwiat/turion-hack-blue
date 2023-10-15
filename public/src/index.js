// Accessible from anywhere
window.IS_DEV = process.env.NODE_ENV === "development";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleLogin } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from './App'
import Planet from "./pages/Planet";
import Layout from "./components/Layout";

<GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log("Login Failed");
  }}
/>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planet",
    element: <Planet />,
  },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    {/* <Layout> */}
    <RouterProvider router={router} />
    {/* </Layout> */}
  </StrictMode>
);
