import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductSearch = () => {
  // Sample Products Data
  const products = [
    { id: 1, name: "Apple iPhone 14" },
    { id: 2, name: "Samsung Galaxy S23" },
    { id: 3, name: "Sony Headphones" },
    { id: 4, name: "Dell Laptop" },
    { id: 5, name: "Nike Running Shoes" },
  ];

  // State for Search Input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Products Based on Search Query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Product Search</h2>

      {/* Search Input Field */}
      <input
        type="text"
        className="form-control"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display Filtered Products */}
      <ul className="list-group mt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="list-group-item">
              {product.name}
            </li>
          ))
        ) : (
          <li className="list-group-item text-danger">No products found</li>
        )}
      </ul>
    </div>
  );
};

export default ProductSearch;
