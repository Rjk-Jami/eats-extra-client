import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';


import Recipe from '../Recipe/Recipe';
import { CardGroup, Row } from 'react-bootstrap';
import ChefsBanner from '../ChefsBanner/ChefsBanner';

const Recipes = () => {
    const recipes = useLoaderData()
    console.log(recipes)
    

    return (
        
        <Row xs={1} md={3} className="g-4">
            
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe ={recipe} ></Recipe>)
            }
        </Row>
        
    );
};

export default Recipes;