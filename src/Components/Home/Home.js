import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;