import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";

const Newsfeed = () => {
  const  [totalblogs, setTotalBlogs ] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setTotalBlogs(data));
  }, []);
  return (
    <div>
      <div className="container">
      <Navbar/>
      <h1>Our All Blogs</h1>
      <div className="row">
      {
                  totalblogs.map(blogs=>
                  <div className="col-md-4">
                      <News
                  key={blogs.id}
                  blogs={blogs}
                  ></News>
                  
                  </div>
                )
            }
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Newsfeed;
