import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <LoadingSpinner></LoadingSpinner>        
        );
    }

    if (user && user.email) {
        return (
            <div>
                {children}
            </div>
        );
    }

    return (
        <div>
            <Navigate to="/login" state={location.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;