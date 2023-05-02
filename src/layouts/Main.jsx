import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Main;