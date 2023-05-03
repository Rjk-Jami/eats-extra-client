import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';

const AwardedChef = ({ chef }) => {
    const { id, name, likes, num_recipes, photo_url, years_of_experience, awarded, rating, lifeStory } = chef

    return (
        
        <Card className="mb-4 " >
        <div className="row g-0 align-items-center ">
          <div className="col-md-4">
            <Card.Img src={photo_url} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {lifeStory}
              </Card.Text>
              <Card.Text>
                <small className="text-body-secondary"><ReactStarsRating value={rating.number} /></small>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
        
    );
};

export default AwardedChef;