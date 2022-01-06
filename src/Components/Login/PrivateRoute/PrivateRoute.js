import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Login from '../Login';
import Home from '../../Home/Home';

const PrivateRoute = () => {
    const { user } = useAuth()
    return user.email ? <Login /> : <Home />
};

export default PrivateRoute;