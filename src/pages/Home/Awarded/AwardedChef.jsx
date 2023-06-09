import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import LazyLoad from 'react-lazy-load';

const AwardedChef = ({ chef }) => {
    const { name, photo_url, rating, lifeStory } = chef

    return (
      <LazyLoad threshold={0.95} height="100%" width="100%" >

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
                <small className="text-body-secondary"><ReactStarsRating value={Math.round(rating.number)} /></small>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
       </LazyLoad> 
    );
};

export default AwardedChef;