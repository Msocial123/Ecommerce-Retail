import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import WishlistModal from "./components/WishlistModal";
import CartModal from "./components/CartModal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Address from "./components/Address";
import Dashboard from "./components/Dashboard";
import AutoLogout from "./components/AutoLogout";
import Categories from "./components/Categories";

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, { ...product, quantity: 1 }]);
    }
  };

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id, type) => {
    if (type === "cart") {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else if (type === "wishlist") {
      setWishlist((prevWishlist) =>
        prevWishlist.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const decreaseQuantity = (id, type) => {
    if (type === "cart") {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
      );
    } else if (type === "wishlist") {
      setWishlist((prevWishlist) =>
        prevWishlist
          .map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
      );
    }
  };

  const moveToCart = (id) => {
    const item = wishlist.find((item) => item.id === id);
    if (item) {
      setCart([...cart, { ...item, quantity: 1 }]); // Add item to cart
      removeFromWishlist(id); // Remove item from wishlist
    }
  };

  const openWishlist = () => setShowWishlist(true);
  const closeWishlist = () => setShowWishlist(false);

  return (
    <Router>
      <AutoLogout />
      <Navbar
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        openWishlistModal={() => setShowWishlist(true)}
        openCartModal={() => setShowCart(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/shop" element={<Shop addToWishlist={addToWishlist} addToCart={addToCart} />} /> */}
        {/* <Route path="/categories/:categoryName" element={<CategoryPage addToWishlist={addToWishlist} addToCart={addToCart} />} / > */}
        <Route
  path="/categories/:categoryName"
  element={
    <>
      <Categories />
      <CategoryPage addToWishlist={addToWishlist} addToCart={addToCart} />
    </>
  }
/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDetails addToWishlist={addToWishlist} addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/profile" element={<ProfilePage > <AddressList /> </ProfilePage>} /> */}
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/address" element={<Address />} />

        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/place-order" element={<PlaceOrder />} /> */}
        

      </Routes>

      {showWishlist && (
        <WishlistModal
          wishlist={wishlist}
          removeFromWishlist={removeFromWishlist}
          moveToCart={moveToCart}
          onClose={closeWishlist}
        />
      )}

      {showCart && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={(id) => increaseQuantity(id, "cart")}
          decreaseQuantity={(id) => decreaseQuantity(id, "cart")}
          onClose={() => setShowCart(false)}
        />
      )}

      <Footer />
    </Router>
  );
}

export default App;