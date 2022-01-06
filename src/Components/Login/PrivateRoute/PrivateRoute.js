import React from 'react';

import Login from '../Login';
import Home from '../../Home/Home';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth()
    return user.email ? <Login /> : <Home />
};

export default PrivateRoute;