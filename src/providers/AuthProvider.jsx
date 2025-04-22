import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({children}) => {
    let userInfo = useContext(AuthContext);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (newUserInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, newUserInfo);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        } );
        return () => {
            unsubscribe();
        }
    }, [])

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        signInUserWithGoogle
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;