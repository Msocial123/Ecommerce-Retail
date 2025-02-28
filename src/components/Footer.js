import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer-section ">
      <div className="container py-5">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact">Contact Us</Link></li> {/* Using Link instead of a regular anchor */}
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Shop</Link></li>
              <li><Link to="/stories">Clahan Stories</Link></li>
              <li><Link to="/corporate-info">Corporate Information</Link></li>
            </ul>
          </div>

          {/* Store Section */}
          <div className="col-md-3">
            <h5>Store</h5>
            <ul className="list-unstyled">
              <li><Link to="/payments">Payments</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Cancellation & Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="col-md-3">
            <h5>Opening Hours</h5>
            <ul className="list-unstyled">
              <li>Mon-Fri: 7am - 10pm</li>
              <li>Saturday: 8am - 10pm</li>
              <li>Sunday: 8am - 11pm</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>Get it Fresh</h5>
            <form>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
                required
              />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletterCheck"
                />
                <label className="form-check-label" htmlFor="newsletterCheck">
                  Subscribe to newsletter
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-2">
                Subscribe Now
              </button>
            </form>
            <address className="mt-3">
              Clahan Internet Pvt Ltd,
              <br />
              Bengaluru, Karnataka, India.
              <br />
              Tel: 044-45614700
            </address>
            <div className="social-icons mt-3">
              <a href="#" className="btn btn-primary me-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="btn btn-info me-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-danger me-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="btn btn-pink"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p>© 2024 Clahan Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
