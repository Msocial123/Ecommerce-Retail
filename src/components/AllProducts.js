import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const AllProducts = ({ products, addToWishlist, addToCart }) => {
  return (
    <div className="container mt-5">
      {/* <h2 className="text-center mb-4">Our Products</h2> */}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-lg-2 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image} 
                alt={product.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold">{product.price}</p>
                

                <button
                  className="btn btn-outline-danger me-2"
                  onClick={() => addToWishlist(product)}
                >
                  <FaHeart />
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
