import React from "react";
// import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div>
      {/* Contact Information */}
      <div className="container my-5">
        {/* <h2 className="text-center text-primary mb-4">Contact Us</h2> */}
        <div className="row">
          <div className="col-md-6">
            <h4>Our Address</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Company Street, Business City, Country</p>
            <h4>Opening Hours</h4>
            <p><i className="fas fa-clock"></i> Monday - Friday: 9 AM - 5 PM</p>
            <p><i className="fas fa-clock"></i> Saturday: 10 AM - 4 PM</p>
            <p><i className="fas fa-clock"></i> Sunday: Closed</p>
            <h4>Contact Details</h4>
            <p><i className="fas fa-phone-alt"></i> <a href="tel:+123456789">+1 234 567 89</a></p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></p>
          </div>
          <div className="col-md-6">
            <h4>Directions</h4>
            <iframe
              src="https://www.google.com/maps/embed?...YOUR_MAP_LINK..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "600px" }}>
          <h3 className="text-center text-success mb-4">Send Us a Message</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Email" required />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Type your message here..."
                    style={{ height: "120px" }}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success px-5 py-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
