import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaAngleDoubleDown } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { useLoaderData } from 'react-router-dom';

const TrendyRecipes = () => {
  //load data by loader
    const recipes = useLoaderData()
  //filter trendy recipes from api 
    const trendyRecipes =  recipes.filter((r)=>r.trendyRecipes === true)
    console.log(trendyRecipes)
    return (
        <div key={recipes}>
        <h2 style={{fontFamily:'Consolas'}} className='text-center fw-bold mb-5'><FaAngleDoubleDown className='text-warning'></FaAngleDoubleDown> Trendy Recipes <FaAngleDoubleDown className='text-warning'></FaAngleDoubleDown></h2>
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 '>

       

        {
            trendyRecipes.map(recipes=><>
                {[
                  
                  'Light'
                  
                ].map((variant) => (
                  <LazyLoad threshold={0.95} height="100%" width="">
                  <Card border="warning"
                    style={{background: 'linear-gradient(45deg, #FFF2E6, #FFE5CC)', backgroundRepeat: 'no-repeat',width: '18rem' }}

                    key={variant}
                    
                  
                    className="mb-2"
                  >
                    <Card.Header>
                    <Image src={recipes?.photo_url} fluid rounded />
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className='fs-3 fw-semibold'>{recipes?.name}</Card.Title>
                      <Card.Text>
                        Ratings : <span className='fw-semibold'>{recipes?.rating}</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </LazyLoad>
                ))}
              </>)
        }
        </div>
        </div>
    );
};

export default TrendyRecipes;