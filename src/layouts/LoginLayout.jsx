import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Header from '../pages/shared/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
const LoginLayout = () => {
    



    return (
        <div>
            {/* Header */}
            <Header></Header>
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;