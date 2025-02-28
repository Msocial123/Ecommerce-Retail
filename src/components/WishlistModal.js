import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

// Navbar Component
const Navbar = ({ wishlistCount, cartCount, openWishlistModal, openCartModal }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <img
          src="/images/logo1.jpg"
          alt="Logo"
          style={{ height: "40px", width: "auto" }}
        />

        {/* Menu Toggle (for smaller screens) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Menu Bar */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="/shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Non-Collapsible Content */}
        <div className="d-flex align-items-center">
          {/* Search Bar */}
          <form className="d-flex flex-grow-1 mx-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "100%" }}
            />
          </form>

          {/* Right-Side Buttons and Icons */}
          <a href="/login" className="btn btn-light btn-sm mx-2">
            Login
          </a>
          <a href="/signup" className="btn btn-light btn-sm mx-2">
            Signup
          </a>
          <span
            className="mx-3"
            style={{ cursor: "pointer", color: "red" }}
            onClick={openWishlistModal}
          >
            <FaHeart />
            <span className="badge bg-danger ms-1">{wishlistCount}</span>
          </span>
          <span
            className="mx-3"
            style={{ cursor: "pointer", color: "green" }}
            onClick={openCartModal}
          >
            <FaShoppingCart />
            <span className="badge bg-danger ms-1">{cartCount}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

// WishlistModal Component
const WishlistModal = ({ wishlist, removeFromWishlist, onClose, moveToCart }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={3} // Example count for cart
        openWishlistModal={() => alert("Wishlist modal already open!")}
        openCartModal={() => alert("Cart modal not implemented!")}
      />

      {/* Wishlist Modal */}
      <div
        className="modal show d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1050,
        }}
      >
        <div
          className="modal-dialog"
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        >
          <div
            className="modal-content"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Header Section */}
            <div
              className="modal-header"
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <h5 className="modal-title">Your Wishlist</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {/* Body Section */}
            <div
              className="modal-body overflow-auto"
              style={{
                flex: 1,
                padding: "1rem",
              }}
            >
              {wishlist.length === 0 ? (
                <p className="text-center">Your wishlist is empty.</p>
              ) : (
                <ul className="list-group">
                  {wishlist.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center"
                    >
                      {/* Product Details */}
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginRight: "15px",
                            borderRadius: "5px",
                          }}
                        />
                        <div>
                          <strong>{item.name}</strong>
                          <p className="mb-0">{item.price}</p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => moveToCart(item.id)}
                        >
                          Move to Cart
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer Section */}
            <div
              className="modal-footer"
              style={{
                backgroundColor: "#f8f9fa",
                borderTop: "1px solid #dee2e6",
              }}
            >
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistModal;
