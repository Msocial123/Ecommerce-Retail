import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AutoLogout = () => {
  const navigate = useNavigate();
  let logoutTimer;

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      console.log("🚨 User inactive for 5 minutes. Logging out...");

      // Retrieve cart and wishlist before clearing storage
      const cart = localStorage.getItem("cart");
      const wishlist = localStorage.getItem("wishlist");

      // Clear all except cart and wishlist
      localStorage.clear();
      sessionStorage.clear();

      // Restore cart and wishlist
      if (cart) localStorage.setItem("cart", cart);
      if (wishlist) localStorage.setItem("wishlist", wishlist);

      navigate("/"); // Redirect to home
    }, 300000); // 5 minutes
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearTimeout(logoutTimer);
    };
  }, []);

  return null;
};

export default AutoLogout;
