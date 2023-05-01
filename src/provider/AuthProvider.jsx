import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../App';

export const AuthContext = createContext(null)
const auth = getAuth(App);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)


    const CreateUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        setUser('')
        return signOut()
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{ unSubscribe()}
    },[])


        const AuthInfo = {
            user,
            loading,
            login,
            CreateUser,
            logOut,

        }
        return (
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        );
    };

    export default AuthProvider;