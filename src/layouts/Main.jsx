import React from 'react';


import Banner from '../pages/Home/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Chefs from '../pages/Home/Chefs/chefs';
import Awarded from '../pages/Home/Awarded/Awarded';
import Footer from '../pages/shared/Footer/Footer';
import TrendyRecipes from '../pages/Home/TrendyRecipes/TrendyRecipes';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Row>
                    <Col lg={8} >
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={4} >
                        {/* trendy recipes section */}
                        <TrendyRecipes></TrendyRecipes>
                    </Col>
                </Row>
            </Container>
            <Awarded></Awarded>
            <Footer></Footer>
        </div>
    );
};

export default Main;