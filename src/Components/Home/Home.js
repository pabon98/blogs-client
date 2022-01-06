import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <Blogs></Blogs>
           <Footer></Footer>
        </div>
    );
};

export default Home;