import React from 'react';

const Blog = (props) => {
    const{title,image,description} = props.blog
    return (
        <div className=''>
            <div class="col">
    <div class="card">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description.slice(0,120)}</p>
      </div>
    </div>
            </div>
        
        </div>
    );
};

export default Blog;