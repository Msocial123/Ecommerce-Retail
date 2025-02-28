import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "./allProducts";// Import all products

const ProductDetails = ({ addToCart, addToWishlist }) => {
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2 className="text-center my-5">Product not found!</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn btn-secondary" onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;