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
import ChefsLayout from '../layouts/ChefsLayout';
import ChefsBanner from '../pages/ChefsRecipes/ChefsBanner/ChefsBanner';
import Recipes from '../pages/ChefsRecipes/Recipes/Recipes';
import PrivetRoute from './PrivetRouter';
import MyFavoriteRecipes from '../pages/MyFavoriteRecipes/MyFavoriteRecipes';
import AboutUs from '../pages/AboutUs/AboutUs';





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
        {
          path: "/aboutUs",
          element:<AboutUs></AboutUs>
        },
        {
          path: "/myFavoriteRecipes",
          element:<MyFavoriteRecipes/>,
        },
        
      ],
    },
    {
      
        path: "chefs",
        element: <Main></Main>,
        loader:({params})=>fetch(`https://eats-extra-server-rjk-jami.vercel.app/recipes`),
        children:[
          {
            path:"/chefs",
            element:<Chefs></Chefs>
             
          },
        ]
      
    },
    {
      path: "recipes",
      element:<ChefsLayout></ChefsLayout>,
      children:[
        {
          path:":id",
          element:<PrivetRoute><Recipes></Recipes></PrivetRoute>,
          loader:({params})=>fetch(`https://eats-extra-server-rjk-jami.vercel.app/recipes/${params.id}`)

          
        }
      ]
    }

  ]);


export default router