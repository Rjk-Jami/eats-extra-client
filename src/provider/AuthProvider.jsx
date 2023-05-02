import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

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
        return signOut(auth)
    }
    const loginWithGoogle = ()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const loginWithGithub =()=>{
        return signInWithPopup(auth, gitHubProvider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
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
            loginWithGoogle,
            loginWithGithub

        }
        return (
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        );
    };

    export default AuthProvider;