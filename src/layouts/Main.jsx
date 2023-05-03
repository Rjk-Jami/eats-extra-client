import React from 'react';


import Banner from '../pages/Home/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Chefs from '../pages/Home/Chefs/chefs';
import Awarded from '../pages/Home/Awarded/Awarded';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Row>
                    <Col lg={8} >
                        <h2>chefs</h2>
                        <Chefs></Chefs>
                    
                    </Col>
                    <Col lg={4} >
                        <h2>jami</h2>
                    </Col>
                </Row>
            </Container>
            <Awarded></Awarded>
        </div>
    );
};

export default Main;