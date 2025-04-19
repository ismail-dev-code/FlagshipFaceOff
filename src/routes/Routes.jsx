import React from "react";
import { createBrowserRouter} from "react-router";

import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import mainLayout from '../layout/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    errorElement: <h3 className="text-rose-300 text-center">error khace reeeeee</h3>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
      {
        path: "/favorites",
        Component: Favorites,
        children: [
          {
            path: "more-nested",
            element: <p>i am inside favorite</p>,
          },
        ],
      },
      {
        path: '/about',
        element: <h3>this is about</h3>
      }
    ],
  },
]);



export default router;
