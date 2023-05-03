import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Blog from '../pages/Blog/Blog';
import Terms from '../pages/Terms/Terms';
import LoginLayout from '../layouts/LoginLayout';
import Chefs from '../pages/Home/Chefs/chefs';
import Chef from '../pages/Chef/Chef';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        
        {
          path: "/",
          element: <Navigate to={`/chefs`}></Navigate>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        },
        {
          path: "/terms",
          element:<Terms></Terms>
        },
        
      ],
    },
    {
      
        path: "/chefs",
        element: <Main></Main>,
        children:[
          {
            path:"/chefs/:id",
            element:<Chef></Chef>,
          },
        ]
      
    }
  ]);


export default router