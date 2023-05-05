import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import { toast } from 'react-hot-toast';
import { addToDb, getFavoriteId } from '../../../utils/LocalStorage';

// card for recipe
const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false)
    // favorite button
    const handleFavorite = (recipe) => {
        setFavorite(!favorite)
        toast.success("added to favorite")
        addToDb(recipe.id)
    }
    // if id save in local storage btn disabled 
    useEffect(() => {
        const storedId = getFavoriteId();
        for (const id in storedId) {
            if (recipe.id === parseInt(id)) {
                setFavorite(true)
            }
        }
    }, [recipe])
    const { rating, name, ingredients, cooking_method } = recipe

    return (
        <Col>
            <Card>

                <Card.Body>
                    <Image className='p-3' src={recipe?.photo_url} fluid rounded />
                    <Card.Title className='mt-4'>{name}</Card.Title>
                    <p>
                        <span className='fw-semibold'>Ingredients</span>:
                    </p>

                    <ul>
                        {ingredients.slice(0, 5).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p><small><span className='fw-semibold'>cooking_method :</span>{cooking_method.slice(0, 300)} {cooking_method.length > 300 && <>...</>}</small></p>
                    <div className=" d-flex">
                        <div className="flex-grow-1 d-flex align-items-center gap-2">
                            <small className="text-body-secondary"><ReactStarsRating value={Math.round(rating)} /></small>
                            <small><span>{rating}</span></small>
                        </div>
                        <div className="">
                            <Button disabled={favorite} onClick={() => handleFavorite(recipe)} className='fw-semibold rounded-pill' variant='warning'>Add to Favorite</Button>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Recipe;