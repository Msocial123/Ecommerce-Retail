// import React from "react";
// import { Link } from "react-router-dom";
// import "./Categories.css";

// const Categories = () => {
  
//   const categories = [
//     { id: 1, name: "Organic Fruit", img: "/images/fruits/fruit2.jpg", route: "/categories/organic-fruit" },
//     { id: 2, name: "Natural Oils", img: "/images/dryfruits/groundnuts oil.jpg", route: "/categories/natural-oils" },
//     { id: 4, name: "Millets", img: "/images/millets/homepag3.jpg", route: "/categories/millets" },
//     { id: 5, name: "Dals", img: "/images/millets/homepage1.jpg", route: "/categories/dals" },
//     { id: 6, name: "Leafy Vegetables", img: "/images/vegt/leafyveg.png", route: "/categories/leafy-vegetables" },
//     { id: 7, name: "Organic Vegetables", img: "/images/vegt/allveg.jpg", route: "/categories/organic-vegetables" },
//     { id: 8, name: "Dry Fruits", img: "/images/dryfruits/dryfruit.jpg", route: "/categories/dry-fruits" },
//     { id: 9, name: "Spices", img: "/images/millets/spice.jpg", route: "/categories/spices" },
//     { id: 10, name: "Natural Ghee", img: "/images/dryfruits/ghee.jpg", route: "/categories/natural-ghee" },
//   ];

//   return (
//     <div className="container my-4">
//       {/* <h2 className="text-center mb-4">Categories</h2> */}
//       <div className="card2 shadow-sm p-3">
//         <div className="d-flex overflow-auto category-row">
//           {categories.map((category, index) => (
//             <div key={index} className="text-center mx-3">
//               <Link to={category.route}>
//                 <img
//                   src={category.img}
//                   alt={category.name}
//                   className="img-fluid category-image"
//                 />
//               </Link>
//               <p className="mt-2 category-name">{category.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;


import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const { categoryName } = useParams(); // Get selected category from URL

  const categories = [
    { id: 1, name: "Organic Fruit", img: "/images/fruits/fruit2.jpg", route: "/categories/organic-fruit" },
    { id: 2, name: "Natural Oils", img: "/images/dryfruits/groundnuts oil.jpg", route: "/categories/natural-oils" },
    { id: 4, name: "Millets", img: "/images/millets/homepag3.jpg", route: "/categories/millets" },
    { id: 5, name: "Dals", img: "/images/millets/homepage1.jpg", route: "/categories/dals" },
    { id: 6, name: "Leafy Vegetables", img: "/images/vegt/leafyveg.png", route: "/categories/leafy-vegetables" },
    { id: 7, name: "Organic Vegetables", img: "/images/vegt/allveg.jpg", route: "/categories/organic-vegetables" },
    { id: 8, name: "Dry Fruits", img: "/images/dryfruits/dryfruit.jpg", route: "/categories/dry-fruits" },
    { id: 9, name: "Spices", img: "/images/millets/spice.jpg", route: "/categories/spices" },
    { id: 10, name: "Natural Ghee", img: "/images/dryfruits/ghee.jpg", route: "/categories/natural-ghee" },
  ];

  return (
    <div className="container my-4">
      <div className="card2 shadow-sm p-3">
        <div className="d-flex overflow-auto category-row">
          {categories.map((category) => {
            const isActive = category.route === `/categories/${categoryName}`;

            return (
              <div key={category.id} className={`category-item ${isActive ? "active" : ""}`}>
                <Link to={category.route}>
                  <img
                    src={category.img}
                    alt={category.name}
                    className="img-fluid category-image"
                  />
                </Link>
                <p className="mt-2 category-name">{category.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
