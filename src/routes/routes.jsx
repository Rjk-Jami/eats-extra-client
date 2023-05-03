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
import ChefsLayout from '../layouts/ChefsLayout';
import ChefsBanner from '../pages/ChefsRecipes/ChefsBanner/ChefsBanner';
import Recipes from '../pages/ChefsRecipes/Recipes/Recipes';




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
      
        path: "chefs",
        element: <Main></Main>,
        children:[
          {
            path:"/chefs",
            element:<Chefs></Chefs>,
            loader:({params})=>fetch(`https://eats-extra-server-rjk-jami.vercel.app/chefs`) 
          },
        ]
      
    },
    {
      path: "recipes",
      element:<ChefsLayout></ChefsLayout>,
      children:[
        {
          path:":id",
          element:<Recipes></Recipes>,
          loader:({params})=>fetch(`https://eats-extra-server-rjk-jami.vercel.app/recipes/${params.id}`)

          
        }
      ]
    }

  ]);


export default router