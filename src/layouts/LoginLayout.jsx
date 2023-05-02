import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const LoginLayout = () => {




    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;