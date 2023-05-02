import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Banner = () => {
    return (
        <div  className='mb-5 py-5' style={{background: 'linear-gradient(45deg, #FFA07A, #FF6347)', backgroundRepeat: 'no-repeat' }}>
            <Container >
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={4}>
                        <Image  className=' ' src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Chef preparing food" fluid />
                    </Col>
                    <Col xs={10} md={6} className="d-flex flex-column justify-content-center">
                        
                        <p className='text-center fw-semibold'>Welcome to Eats Extra, a website dedicated to celebrating the art of cooking and the joy of eating. Our team of chefs brings a unique perspective to every dish, infusing their creations with passion and creativity. We offer the best chef recipes in the UK, carefully curated to inspire your next culinary adventure.</p>
                        <button className=" btn btn-outline-dark btn-lg rounded-pill px-4 py-2 fw-semibold">Discover More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;