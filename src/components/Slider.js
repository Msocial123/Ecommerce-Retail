import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/dryfruits/wallpapar1.jpg" className="d-block  " alt="Slide 1" />
        </div>
        <div className="carousel-item ">
          <img src="/images/dryfruits/wallpapar1.jpg" className="d-block  " alt="Slide 1" />
        </div>
        <div className="carousel-item ">
          <img src="/images/dryfruits/wallpapar1.jpg" className="d-block  " alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="/images/dryfruits/home1.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="/images/fruits/home.png" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
