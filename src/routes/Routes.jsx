import React from "react";
import { createBrowserRouter } from "react-router";

import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import mainLayout from "../layout/MainLayout";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        hydrateFallbackElement: <p className="text-center">Loading, please wait....</p>,
        loader: ()=> fetch('../phones.json'),
        element: <Home />,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails />,
        hydrateFallbackElement: <p className="text-center">Loading, please wait....</p>,
        loader: ()=> fetch('../phones.json'),
      },
    ],
  },
]);

export default router;
