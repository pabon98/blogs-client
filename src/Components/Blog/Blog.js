import React from 'react';

const Blog = (props) => {
    const{title,image,description,published} = props.blog
    return (
        <div>
            <div class="col">
    <div class="card my-2">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description.slice(0,120)}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Posted on {published} </small>
      </div>
    </div>
            </div>
        
        </div>
    );
};

export default Blog;