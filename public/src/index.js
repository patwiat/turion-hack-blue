// Accessible from anywhere
window.IS_DEV = process.env.NODE_ENV === "development";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleLogin } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import Planet from "./pages/Planet";
import Sun from "./pages/Sun";

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
    path: "/mercury",
    element: <Mercury />,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/uranus",
    element: <Uranus />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    {/* <Layout> */}
    <RouterProvider router={router} />
    {/* </Layout> */}
  </StrictMode>
);
