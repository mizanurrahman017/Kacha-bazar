import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import MyAccount from '../Pages/MyAccount/MyAccount';
import Contact from '../Pages/Contact/Contact';
import FreshFruits from '../Pages/FreshFruits/FreshFruits';
import Vagetable from '../Pages/Vagetable/Vagetable';
import Fish from '../Pages/Fish/Fish';
import Bakery from '../Pages/Bakery/Bakery';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true ,
            path:"/",
            Component:Home

        },
        {
            path:"products",
            element:<Products></Products>
        },
      {
        path:"account",
        element:<MyAccount></MyAccount>
      },
      {
        path:"contact",
        element:<Contact></Contact>

      },
      {
        path:"/category/fruits",
        element:<FreshFruits></FreshFruits>
      },
      {
        path:"/category/vegetables",
        element:<Vagetable></Vagetable>
      },
      {
        path:"/category/fish",
        element:<Fish></Fish>
      },
      {
        path:"/category/dairy",
        element:<Bakery></Bakery>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"login",
        element:<Login></Login>
      }
       
    ]
  },
]);