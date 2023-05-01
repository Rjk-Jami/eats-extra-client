import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const LoginLayout = () => {
    const {user,loading,login,CreateUser,logOut,loginWithGoogle,loginWithGithub} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default LoginLayout;