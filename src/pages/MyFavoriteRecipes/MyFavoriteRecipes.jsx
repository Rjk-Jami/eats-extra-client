import React, { useEffect, useState } from 'react';
import { getFavoriteId } from '../../utils/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import { Table, Image, Button  } from 'react-bootstrap';

import ReactStarsRating from 'react-awesome-stars-rating';
import FavoriteRecipe from './FavoriteRecipe';

const MyFavoriteRecipes = () => {

  const [recipes, setRecipes] = useState([])
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    fetch('https://eats-extra-server-rjk-jami.vercel.app/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])
  
  //get id from local storage
  useEffect(() => {
    const storedId = getFavoriteId();
    const savedFavorite = [];
    for (const id in storedId) {
      const addedRecipe = recipes.find(blog => blog.id === parseInt(id))
      if (addedRecipe) {
        savedFavorite.push(addedRecipe)
      }
    }
    setFavorite(savedFavorite)
  }, [recipes])
  console.log(favorite)

  


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Chef Name</th>
          <th>Recipe Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {favorite.map((recipe) => (
          <FavoriteRecipe
            key={recipe.id}
            recipe={recipe}
            
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MyFavoriteRecipes;