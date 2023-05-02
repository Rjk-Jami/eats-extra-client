import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Blog from '../pages/Blog/Blog';
import Terms from '../pages/Terms/Terms';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
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
  ]);


export default router