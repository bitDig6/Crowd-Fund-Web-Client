import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthProvider = ({children}) => {
    let userInfo = useContext(AuthContext);


    userInfo = {
        name: 'hena',
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;