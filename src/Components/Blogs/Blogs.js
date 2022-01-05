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
        <div className='container my-3'>
            <h1>Our Popular Blogs {blogs.length}</h1>
            <div className="row">
              {
                  blogs.map(blog=>
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