import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container my-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 d-flex flex-column">
              <img
                src="/images/vegt/wallpapar.jpg"
                alt="Image 1"
                className="img-fluid mb-2"
              />
              {/* <img
                src="/images/fruits/fruit1.jpg"
                alt="Image 2"
                className="img-fluid"
              /> */}
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Welcome to our website! We are dedicated to providing high-quality organic products including fresh fruits, vegetables, spices, and natural oils. Our mission is to promote a healthy and sustainable lifestyle by offering products that are both nutritious and eco-friendly.
                </p>
                <p className="card-text">
                  Our team carefully selects each product to ensure quality and freshness. Thank you for choosing us as your trusted source for organic essentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
