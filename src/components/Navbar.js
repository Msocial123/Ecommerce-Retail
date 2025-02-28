// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import allProducts from "../pages/allProducts";

// const Navbar = ({ wishlistCount, cartCount, openWishlistModal, openCartModal }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//       setIsLoggedIn(loggedIn);
//       if (loggedIn) {
//         fetch("http://localhost:5000/profile")
//           .then((res) => res.json())
//           .then((data) => setUser(data))
//           .catch((error) => console.error("Error fetching profile:", error));
//       }
//     };
    
//     checkLoginStatus();
//     window.addEventListener("storage", checkLoginStatus);
//     return () => {
//       window.removeEventListener("storage", checkLoginStatus);
//     };
//   }, []);

//   const handleLogout = () => {
//     // Remove all user-related data from localStorage or sessionStorage
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("token"); // Clear the token if it's stored
//     sessionStorage.removeItem("token"); // If token is stored in sessionStorage
//     sessionStorage.removeItem("userData"); // If you store any user data in sessionStorage

//     // Update local state to reflect logged-out status
//     setIsLoggedIn(false);
//     setUser(null);

//     // Redirect to the login page
//     navigate("/"); // Redirect to login page or wherever you want
//   };

//   const handleSearchChange = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     setFilteredProducts(query.length > 0 ? allProducts.filter((product) => product.name.toLowerCase().includes(query)) : []);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     const foundProduct = allProducts.find((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
//     if (foundProduct) {
//       navigate(`/product/${foundProduct.id}`);
//     } else {
//       alert("Product not found!");
//     }
//     setSearchQuery("");
//     setFilteredProducts([]);
//   };

//   const handleProductClick = (product) => {
//     navigate(`/product/${product.id}`);
//     setSearchQuery("");
//     setFilteredProducts([]);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
//       <div className="container-fluid">
//         <img src="/images/logo1.jpg" alt="Logo" style={{ height: "40px", width: "auto" }} />
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/">Home</a></li>
//             <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/about">About</a></li>
//             <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/contact">Contact</a></li>
//           </ul>
//         </div>
//         <form className="d-flex mx-3 position-relative" onSubmit={handleSearchSubmit}>
//           <input className="form-control me-2" type="search" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
//           <button className="btn btn-success" type="submit">Search</button>
//           {filteredProducts.length > 0 && (
//             <ul className="list-group position-absolute w-100 bg-white shadow-sm" style={{ top: "100%", zIndex: "1000" }}>
//               {filteredProducts.map((product) => (
//                 <li key={product.id} className="list-group-item list-group-item-action" style={{ cursor: "pointer" }} onClick={() => handleProductClick(product)}>
//                   {product.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </form>
//         <div className="d-flex align-items-center">
//           {!isLoggedIn && <a href="/signup" className="btn btn-warning mx-2">Sign Up</a>}
//           {!isLoggedIn ? (
//             <a href="/login" className="btn btn-danger">Login</a>
//           ) : (
//             <>
//               <span className="mx-3" style={{ cursor: "pointer", color: "red" }} onClick={openWishlistModal}>
//                 <FaHeart /> <span className="badge bg-danger ms-1">{wishlistCount}</span>
//               </span>
//               <span className="mx-3" style={{ cursor: "pointer", color: "green" }} onClick={openCartModal}>
//                 <FaShoppingCart /> <span className="badge bg-danger ms-1">{cartCount}</span>
//               </span>
//               <span className="mx-3" style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/dashboard")}> 
//                 <FaUserCircle size={24} />
//               </span>
//               <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import allProducts from "../pages/allProducts";

const Navbar = ({ wishlistCount, cartCount, openWishlistModal, openCartModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        fetch("http://localhost:5000/profile")
          .then((res) => res.json())
          .then((data) => setUser(data))
          .catch((error) => console.error("Error fetching profile:", error));
      }
    };
    
    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(query.length > 0 ? allProducts.filter((product) => product.name.toLowerCase().includes(query)) : []);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const foundProduct = allProducts.find((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (foundProduct) {
      navigate(`/product/${foundProduct.id}`);
    } else {
      alert("Product not found!");
    }
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        <img src="/images/logo1.jpg" alt="Logo" style={{ height: "40px", width: "auto" }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link text-dark fw-bold" href="/contact">Contact</a></li>
          </ul>
        </div>
        <form className="d-flex mx-3 position-relative" onSubmit={handleSearchSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <div className="d-flex align-items-center">
          {!isLoggedIn ? (
            <>
              <a href="/signup" className="btn btn-warning mx-2">Sign Up</a>
              <a href="/login" className="btn btn-danger">Login</a>
            </>
          ) : (
            <>
              <span className="mx-3" style={{ cursor: "pointer", color: "red" }} onClick={openWishlistModal}>
                <FaHeart /> <span className="badge bg-danger ms-1">{wishlistCount}</span>
              </span>
              <span className="mx-3" style={{ cursor: "pointer", color: "green" }} onClick={openCartModal}>
                <FaShoppingCart /> <span className="badge bg-danger ms-1">{cartCount}</span>
              </span>
              <div className="dropdown mx-3">
                <span
                  className="profile-icon"
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FaUserCircle size={24} />
                </span>
                {showDropdown && (
                  <div className="dropdown-menu show position-absolute" style={{ right: 0, top: "100%", zIndex: "1000" }}>
                    <button className="dropdown-item" onClick={() => navigate("/dashboard")}>
                      View Profile
                    </button>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
