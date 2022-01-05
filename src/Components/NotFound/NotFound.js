import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/page not found.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>Opps Page Not Found</h1>
            <img src={notFound} alt="" />
            <br />
            <Link to="/home">
            <button className='btn btn-primary'>Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;