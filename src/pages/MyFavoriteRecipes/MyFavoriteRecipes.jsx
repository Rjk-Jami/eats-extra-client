import React from 'react';
import { getFavoriteId } from '../../utils/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';

import ReactStarsRating from 'react-awesome-stars-rating';

const MyFavoriteRecipes = () => {

    const favorite = getFavoriteId()
    console.log(favorite) 

    const recipes = useLoaderData()
    console.log(recipes)
    let favoriteRecipe = [];

for (const id in favorite) {
  if (favorite.hasOwnProperty(id)) {
    const foundedRecipes = recipes.find(recipe => recipe.id === parseInt(id));
    if (foundedRecipes) {
      favoriteRecipe.push(foundedRecipes);
    }
  }
}
const deleteF = ()=>{
    localStorage.removeItem('favorite');
    favoriteRecipe =  []

}


    return (
        <div>
          {
            favoriteRecipe.map(recipe=><Container>
                <Button onClick={()=>deleteF()} variant=' danger'>Clear Favorite</Button>
                <Card className="mb-4 " >
            <div className="row g-0 align-items-center ">
              <div className="col-md-4">
                <Card.Img  src={recipe?.photo_url}  className=" img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>{recipe?.name}</Card.Title>
                  <Card.Text>
                    Chef Id: {recipe?.chef_id}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-body-secondary"><ReactStarsRating value={Math.round(recipe?.rating.number)} /></small>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
            </Container>)
          }  
        </div>
    );
};

export default MyFavoriteRecipes;