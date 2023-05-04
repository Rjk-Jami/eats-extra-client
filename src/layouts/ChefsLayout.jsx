import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import ChefsBanner from '../pages/ChefsRecipes/ChefsBanner/ChefsBanner';

const ChefsLayout = () => {
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* Banner */}
            <ChefsBanner></ChefsBanner>
            <Container>

                <Outlet></Outlet>

            </Container>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default ChefsLayout;