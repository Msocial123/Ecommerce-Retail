import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, name: "kiwi Fruit", img: "/images/fruits/kiwi.jpg", route: "/categories/organic-fruit" },
    { id: 2, name: "Flaxseed oil", img: "/images/dryfruits/flaxseed oil.jpg", route: "/categories/natural-oils" },
    { id: 3, name: "Fingermillets", img: "/images/millets/fingermillets1.png", route: "/categories/millets" },
    { id: 4, name: "Parmesan peas", img: "/images/millets/Parmesan peas.png", route: "/categories/dals" },
    { id: 5, name: "Coriander leavs", img: "/images/vegt/curryleavs.jpg", route: "/categories/leafy-vegetables" },
    { id: 6, name: "Beens", img: "/images/vegt/beens.jpg", route: "/categories/organic-vegetables" },
    { id: 7, name: "Dry Fruits dates", img: "/images/dryfruits/dates.jpg", route: "/categories/dry-fruits" },
    { id: 8, name: "Black peppercorn", img: "/images/spices/black peppercorn.jpg", route: "/categories/spices" },
    { id: 9, name: "Natural Ghee", img: "/images/dryfruits/ghee.jpg", route: "/categories/natural-ghee" },
    { id: 2, name: "Groundnuts oil", img: "/images/dryfruits/groundnuts oil.jpg", route: "/categories/natural-oils" },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="custom-col-5">
            <div className="card shadow-sm">
              <Link to={product.route}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top product-image"
                />
              </Link>
              <div className="card-body text-center">
                <h6 className="card-title product-name">{product.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
