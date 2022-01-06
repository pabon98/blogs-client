import React from 'react';
import slide1 from '../../images/Banner-bg1.jpg'
import slide2 from '../../images/blog-bg-2.jpg'
import slide3 from '../../images/banner-bg-3.jpg'

const Banner = () => {
    
    return (
      <div className=''>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slide1} class="ms-auto me-auto d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slide2} class="ms-auto me-auto d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slide3} class="ms-auto me-auto d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    );
};

export default Banner;