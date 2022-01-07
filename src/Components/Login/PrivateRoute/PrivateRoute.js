import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user } = useAuth()
    let location = useLocation()
    // return user.email ? <Dashboard /> : <Login />
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state = {{from:location}}/>
};

export default PrivateRoute;