import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from "../routes/home/Home"
import Plp from "../routes/plp/Plp"
import Pdp from "../routes/pdp/Pdp"
import Signin from "../routes/signin/Signin"

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/plp",
        element: <Plp/>,
    },
    {
        path: "/pdp/:id",
        element: <Pdp/>,
    },
    {
      path: "signin",
      element: <Signin/>,
    },
  ])
}

export default RouterController