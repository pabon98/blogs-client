import React from 'react';

const News = (props) => {
    const{title,image,description,published} = props.blogs
    return (
        <div className='my-3'>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                  {description}
                </p>
              </div>
              <div class="card-footer">
        <small class="text-muted">Posted on {published} </small>
      </div>
            </div>
        </div>
    );
};

export default News;