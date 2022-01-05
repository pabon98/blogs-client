import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const[blogs, setBlogs] = useState([])
    useEffect( ()=>{
       fetch('./data.json')
       .then(res=> res.json())
       .then(data=> setBlogs(data))
    },[])
    return (
        <div className='container my-4 '>
            <h1>Our Popular Blogs</h1>
            <div className="row">
              {
                  blogs.slice(0,6).map(blog=>
                  <div className="col-md-4">
                      <Blog
                  key={blog.id}
                  blog={blog}
                  ></Blog>
                  
                  </div>
                )
            }

                </div>
            </div>
      
    );
};

export default Blogs;