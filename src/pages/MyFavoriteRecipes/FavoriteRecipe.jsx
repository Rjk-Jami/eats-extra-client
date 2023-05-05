import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
const FavoriteRecipe = ({recipe,handleDeleteData}) => {
    return (
        <tr>
        <td><Image src={recipe?.photo_url} alt={recipe.name} thumbnail style={{ maxWidth: '200px', height: 'auto' }} /></td>
        <td>{'chefName'}</td>
        <td>{recipe.name}</td>
        <td><Button variant="danger" onClick={()=>handleDeleteData(recipe.id)}>Remove</Button></td>
      </tr>
    );
};

export default FavoriteRecipe;