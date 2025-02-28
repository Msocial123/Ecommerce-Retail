import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../components/AllProducts";




const CategoryPage = ({ addToWishlist, addToCart }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  
  // Category-specific product data
  const categoryProducts = {
    "organic-fruit": [
    { "id": 1, "name": "Apple", "description": "Fresh and Juicy Organic Apples", "price": 10, "image": "/images/fruits/apple14.png" },
    { "id": 2, "name": "Banana", "description": "Delicious Organic Bananas", "price": 5, "image": "/images/fruits/banana.jpg" },
    { "id": 3, "name": "Avocado", "description": "Rich and Creamy Organic Avocados", "price": 10, "image": "/images/fruits/avakad.jpg" },
    { "id": 4, "name": "Berry", "description": "Sweet and Fresh Organic Berries", "price": 5, "image": "/images/fruits/berry.png" },
    { "id": 5, "name": "Coconut", "description": "Fresh Organic Coconuts", "price": 10, "image": "/images/fruits/coconut.jpg" },
    { "id": 6, "name": "Coconut Water", "description": "Refreshing Organic Coconut Water", "price": 5, "image": "/images/fruits/coconutwater.jpg" },
    { "id": 7, "name": "White Berry", "description": "Unique and Tasty Organic White Berries", "price": 10, "image": "/images/fruits/berrywhite.jpg" },
    { "id": 8, "name": "Blackberry", "description": "Ripe and Sweet Organic Blackberries", "price": 5, "image": "/images/fruits/blackberry.jpg" },
    { "id": 9, "name": "Clustered Apple", "description": "Unique Clustered Apples", "price": 5, "image": "/images/fruits/custdurd.jpg" },
    { "id": 10, "name": "Two-Phased Dragon Fruit", "description": "Special Two-Phased Dragon Fruits", "price": 10, "image": "/images/fruits/drogon.png" },
    { "id": 11, "name": "Brown Grapes", "description": "Rich and Sweet Organic Brown Grapes", "price": 5, "image": "/images/fruits/grapes1.jpg" },
    { "id": 12, "name": "Green Grapes", "description": "Crisp and Juicy Organic Green Grapes", "price": 10, "image": "/images/fruits/greengrapes.jpg" },
    { "id": 13, "name": "Guava", "description": "Fresh and Flavorful Organic Guavas", "price": 5, "image": "/images/fruits/guava.jpg" },
    { "id": 14, "name": "White Dragon", "description": "Exquisite White Dragon Fruits", "price": 5, "image": "/images/fruits/whitedragon.jpg" },
    { "id": 15, "name": "Water Smoothie", "description": "Hydrating and Organic Water Smoothie", "price":10, "image": "/images/fruits/watersmoothi.jpg" },
    { "id": 16, "name": "Watermelon", "description": "Juicy Organic Watermelons", "price": 10, "image": "/images/fruits/waterm4.jpg" },
    { "id": 17, "name": "Tamarind", "description": "Tangy and Flavorful Organic Tamarind", "price": 10, "image": "/images/fruits/termaric.jpg" },
    { "id": 18, "name": "Black Sugarcane", "description": "Sweet and Organic Black Sugarcane", "price": 5, "image": "/images/fruits/sugorcan.jpg" },
    { "id": 19, "name": "Green Sugarcane", "description": "Fresh Organic Green Sugarcane", "price": 10, "image": "/images/fruits/sugor.jpg" },
    { "id": 20, "name": "Strawberry", "description": "Sweet and Juicy Organic Strawberries", "price": 5, "image": "/images/fruits/strawberry.jpg" },
    { "id": 21, "name": "Red Guava", "description": "Rich and Juicy Organic Red Guavas", "price": 10, "image": "/images/fruits/redguava.jpg" },
    { "id": 22, "name": "Pomegranate", "description": "Sweet and Tangy Organic Pomegranates", "price": 5, "image": "/images/fruits/pron.jpg" },
    { "id": 23, "name": "Papaya", "description": "Fresh Organic Papayas", "price": 5, "image": "/images/fruits/papaya.jpg" },
    { "id": 24, "name": "Muskmelon", "description": "Refreshing Organic Muskmelons", "price": 10, "image": "/images/fruits/maskm1.jpg" },
    { "id": 25, "name": "Pineapple", "description": "Tropical and Sweet Organic Pineapples", "price": 10, "image": "/images/vegt/pinapple.jpg" },
    { "id": 26, "name": "Kiwi", "description": "Tangy and Fresh Organic Kiwis", "price": 5, "image": "/images/fruits/kiwi.jpg" },
    { "id": 27, "name": "anju", "description": "Nutritious and naturally sweet figs", "price": 10, "image": "/images/fruits/anjur.png" },
    { "id": 28, "name": "sapote", "description": "Soft and caramel-flavored fruit", "price": 10, "image": "/images/fruits/sapote.png" },
    { "id": 29, "name": "jackfruit", "description": "Large and aromatic fruit with a unique sweet taste", "price": 5, "image": "/images/fruits/jackfruit1.png" },
    { "id": 30, "name": "Black plum", "description": "Tangy and juicy summer fruit", "price": 10, "image": "/images/fruits/Black plum.jpg" },
    { "id": 31, "name": "Cactus Pears", "description": "Exotic and mildly sweet fruit with a refreshing taste.", "price": 10, "image": "/images/fruits/Cactus Pears.png" },
    { "id": 32, "name": "greenapple", "description": "Crisp and tart apples", "price": 5, "image": "/images/fruits/greenapple.jpg" },
    { "id": 32, "name": "Manila Tamarind", "description": "A tangy and sweet fruit with a unique tropical flavor.", "price": 5, "image": "/images/fruits/Manila Tamarind.png" },
    { "id": 244, "name": "orange", "description": "Juicy and refreshing citrus fruit.", "price": 5, "image": "/images/fruits/orange1.jpg" },
    { "id": 245, "name": "mongo", "description": "Sweet and tropical delight", "price": 5, "image": "/images/fruits/mongo.jpg" }

  ],

  "natural-oils": [ 
    
    { "id": 33, "name": "Groundnuts Oil", "description": "Pure and Natural Groundnuts Oil", "price": 15, "image": "/images/dryfruits/groundnuts oil.jpg" },
    { "id": 34, "name": "Olive Oil", "description": "Rich and Pure Olive Oil", "price": 20, "image": "/images/dryfruits/oil.jpg" },
    { "id": 35, "name": "Flaxseed Oil", "description": "Healthy and Pure Flaxseed Oil", "price": 15, "image": "/images/dryfruits/flaxseed oil.jpg" },
    { "id": 36, "name": "Almond", "description": "Fresh and Premium Quality Almonds", "price": 20, "image": "/images/dryfruits/almond.jpg" },
    { "id": 37, "name": "Anjur", "description": "Rich and Sweet Anjur", "price": 15, "image": "/images/dryfruits/anjur.jpg" },
    { "id": 38, "name": "Dates", "description": "Naturally Sweet and Nutritious Dates", "price": 20, "image": "/images/dryfruits/dates.jpg" },
    { "id": 39, "name": "Eggs", "description": "Farm Fresh Organic Eggs", "price": 15, "image": "/images/dryfruits/egg.jpg" },
    { "id": 40, "name": "Farm Eggs", "description": "Healthy and Nutritious Farm Eggs", "price": 15, "image": "/images/dryfruits/farmeggs.jpg" },
    { "id": 41, "name": "Grandnuts", "description": "Crunchy and Fresh Groundnuts", "price": 20, "image": "/images/dryfruits/grandnuts.jpg" },
    { "id": 43, "name": "Honey", "description": "Pure and Natural Honey", "price": 20, "image": "/images/dryfruits/haney.png" },
    { "id": 44, "name": "Ghee", "description": "Rich and Creamy Pure Ghee", "price": 15, "image": "/images/dryfruits/ghee.jpg" },
    { "id": 45, "name": "Gira", "description": "Fresh and Aromatic Cumin Seeds (Gira)", "price": 20, "image": "/images/dryfruits/gira.jpg" },
    { "id": 46, "name": "Ghee", "description": "Premium Quality Natural Ghee", "price": 15, "image": "/images/dryfruits/ghee1.jpg" },
    { "id": 47, "name": "Nuts", "description": "A Mix of Fresh and Crunchy Nuts", "price": 20, "image": "/images/dryfruits/nuts.jpg" },
    { "id": 52, "name": "Eggs", "description": "Fresh Organic Eggs for Healthy Living", "price": 15, "image": "/images/dryfruits/eggs.jpg" },
    { "id": 54, "name": "Black Sesame Seeds", "description": "Premium Quality Black Sesame Seeds", "price": 25, "image": "/images/dryfruits/blacksesameseeds.png" },
    { "id": 55, "name": "Cumin Seeds", "description": "Aromatic and Natural Cumin Seeds", "price": 25, "image": "/images/dryfruits/cuminseeds.jpg" },
    { "id": 56, "name": "Dry Coconuts", "description": "Rich and Nutritious Dry Coconuts", "price": 20, "image": "/images/dryfruits/drycoconuts.jpg" },
    { "id": 57, "name": "Pumpkin Seeds", "description": "Crunchy and Fresh Pumpkin Seeds", "price": 20, "image": "/images/dryfruits/pump.jpg" },
    { "id": 58, "name": "Sunflower Seeds", "description": "Healthy and Nutritious Sunflower Seeds", "price": 25, "image": "/images/dryfruits/sunflowerseeds.jpg" },
    { "id": 59, "name": "White Sesame Seeds", "description": "Natural and Fresh White Sesame Seeds", "price": 20, "image": "/images/dryfruits/whitesesameseeds.jpg" },
    { "id": 60, "name": "Watermelon Seeds", "description": "Crunchy and Nutritious Watermelon Seeds", "price": 20, "image": "/images/dryfruits/wmnseeds.jpg" },
    { "id": 61, "name": "Wheat Grains", "description": "Rich and Fresh Organic Wheat Grains", "price": 20, "image": "/images/dryfruits/wheatgrains.jpg" },
    { "id": 62, "name": "Kismis", "description": "Naturally Sweet Kismis (Raisins)", "price": 20, "image": "/images/dryfruits/kismis.jpg" }
      ],
      "millets": [
    { "id": 63, "name": "Finger Millet", "description": "Rich in fiber and highly nutritious Finger Millet", "price": 8, "image": "/images/millets/fingermillets.jpg" },
    { "id": 64, "name": "Pearl Millet", "description": "A healthy and versatile grain, Pearl Millet", "price": 7, "image": "/images/millets/pearlmillets.jpg" },
    { "id": 65, "name": "Foxtail Millet", "description": "Wholesome and nutrient-dense Foxtail Millet", "price": 8, "image": "/images/millets/foxtailmillets.jpg" },
    { "id": 66, "name": "Barnyard Millet", "description": "A perfect choice for healthy meals, Barnyard Millet", "price": 7, "image": "/images/millets/barnyardmillts.jpg" },
    { "id": 67, "name": "Little Millet", "description": "Light and easy-to-digest Little Millet", "price": 8, "image": "/images/millets/littlemillets.jpg" },
    { "id": 68, "name": "Proso Millet Seeds", "description": "Ideal for healthy and balanced diets, Proso Millet Seeds", "price": 7, "image": "/images/millets/propmilletseeds.jpg" },
    { "id": 69, "name": "White Sorghum", "description": "Highly nutritious and gluten-free White Sorghum", "price": 8, "image": "/images/millets/whitesorghum.jpg" },
    { "id": 70, "name": "Red Lentils", "description": "Rich in protein and essential nutrients, Red Lentils", "price": 12, "image": "/images/millets/Black Chana.jpg" },
    { "id": 71, "name": "Green Gram", "description": "Organic and healthy Green Gram", "price": 10, "image": "/images/millets/Black gram.png" },
    { "id": 72, "name": "Red Lentils", "description": "A perfect protein source, Red Lentils", "price": 12, "image": "/images/millets/Black Urad Gram.png" },
    { "id": 73, "name": "Green Gram", "description": "Wholesome and organic Green Gram", "price": 10, "image": "/images/millets/channa.png" },
    { "id": 74, "name": "Red Lentils", "description": "Nutrient-rich and flavorful Red Lentils", "price": 12, "image": "/images/millets/Fresh pigeon peas.jpg" },
    { "id": 75, "name": "Green Gram", "description": "A healthy choice, Green Gram", "price": 10, "image": "/images/millets/Green split peas.jpg" },
    { "id": 76, "name": "Horse Gram", "description": "Rich in proteins and minerals, Horse Gram", "price": 10, "image": "/images/millets/Horse Gram.jpg" },
    { "id": 77, "name": "Masoor Dal", "description": "A staple source of plant-based protein, Masoor Dal", "price": 10, "image": "/images/millets/Masoor Dal.jpg" },
    { "id": 78, "name": "Moong Sprouts", "description": "Fresh and nutritious Moong Sprouts", "price": 12, "image": "/images/millets/moong sprouts.png" },
    { "id": 79, "name": "Parmesan Peas", "description": "Tasty and nutrient-packed Parmesan Peas", "price": 10, "image": "/images/millets/Parmesan peas.png" },
    { "id": 80, "name": "Peeled Black Gram", "description": "Perfect for traditional dishes, Peeled Black Gram", "price": 12, "image": "/images/millets/peeled Black Gram.png" },
    { "id": 81, "name": "Peeled Channa", "description": "Ideal for snacks and meals, Peeled Channa", "price": 10, "image": "/images/millets/peeled Channa.jpg" },
    { "id": 82, "name": "Scorribanda", "description": "A unique addition to your pantry, Scorribanda", "price": 12, "image": "/images/millets/scorribanda.png" },
    { "id": 83, "name": "Sprout Moong", "description": "Fresh and ready-to-eat Sprout Moong", "price": 10, "image": "/images/millets/sprout moong.png" },
    { "id": 84, "name": "Parmesan Peas", "description": "Tasty and nutrient-packed Parmesan Peas", "price": 10, "image": "/images/millets/Parmesan peas.png" },
    { "id": 85, "name": "Brown Rice", "description": "A healthy whole-grain rice, rich in fiber and nutrients.", "price": 12, "image": "/images/millets/Brown Rice.png"},
    { "id": 86, "name": "Toor Dal Whole", "description": "A wholesome and protein-rich Toor Dal Whole", "price": 12, "image": "/images/millets/toordalwhole.jpg" },
    { "id": 87, "name": "Black Rice", "description": "A nutrient-dense rice with a rich, nutty flavor and deep purple hue.", "price": 10, "image": "/images/millets/Black Rice.png"},
    { "id": 88, "name": "Basmati Rice", "description": "Aromatic long-grain rice, perfect for biryanis and pilafs.", "price": 12, "image": "/images/millets/Basmati Rice.png"},
    { "id": 89, "name": "Arborio Rice", "description": "A creamy, starchy rice ideal for making risotto.", "price": 10, "image": "/images/millets/Arborio Rice.png"},
    { "id": 90, "name": "Sticky Rice", "description": "Glutinous rice, commonly used in Asian desserts and sushi.", "price": 10, "image": "/images/millets/Sticky Rice.jpg"},
    { "id": 91, "name": "Sona Masoori", "description": "A lightweight, aromatic rice, perfect for South Indian dishes.", "price": 12, "image": "/images/millets/Sona Masoori.png"},
    { "id": 92, "name": "Red Rice", "description": "A fiber-rich rice with a slightly chewy texture and earthy flavor.", "price": 10, "image": "/images/millets/Red Rice.jpg"},
    { "id": 93, "name": "Parboiled Rice", "description": "Rice that is partially boiled in the husk, retaining more nutrients.", "price": 12, "image": "/images/millets/Parboiled Rice1.jpg"},
    { "id": 94, "name": "Jasmine Rice", "description": "A fragrant, soft-textured rice, great for Thai and Asian cuisine.", "price": 10, "image": "/images/millets/Jasmine Rice1.png"},
    { "id": 95, "name": "Wild Rice", "description": "A chewy, nutty-flavored grain, great for soups and salads.", "price": 10, "image": "/images/millets/Wild Rice.jpg"}

    
      ],
    "dals": [
    { "id": 96, "name": "Black Chana", "description": "Rich in protein and fiber, ideal for healthy meals", "price": 12, "image": "/images/millets/Black Chana.jpg" },
    { "id": 97, "name": "Black gram", "description": "Organic and nutritious, perfect for balanced diets", "price": 10, "image": "/images/millets/Black gram.png" },
    { "id": 98, "name": "Black Urad Gram", "description": "Delicious and protein-packed, perfect for dal soups", "price": 12, "image": "/images/millets/Black Urad Gram.png" },
    { "id": 99, "name": "channa", "description": "Fresh and organic, a great source of energy", "price": 10, "image": "/images/millets/channa.png" },
    { "id": 100, "name": "Fresh pigeon peas", "description": "Rich in nutrients, perfect for hearty dishes", "price": 12, "image": "/images/millets/Fresh pigeon peas.jpg" },
    { "id": 101, "name": "Green split peas", "description": "A versatile and organic legume, perfect for salads", "price": 10, "image": "/images/millets/Green split peas.jpg" },
    { "id": 102, "name": "Horse Gram", "description": "High-quality lentils, perfect for flavorful recipes", "price": 12, "image": "/images/millets/Horse Gram.jpg" },
    { "id": 103, "name": "Masoor Dal", "description": "Wholesome and organic, great for everyday cooking", "price": 10, "image": "/images/millets/Masoor Dal.jpg" },
    { "id": 104, "name": "moong sprouts", "description": "Protein-rich lentils for quick and healthy meals", "price": 12, "image": "/images/millets/moong sprouts.png" },
    { "id": 105, "name": "Parmesan peas", "description": "A powerhouse of nutrition, perfect for stews", "price": 10, "image": "/images/millets/Parmesan peas.png" },
    { "id": 106, "name": "peeled Black Gram", "description": "Naturally protein-rich and easy to cook", "price": 12, "image": "/images/millets/peeled Black Gram.png" },
    { "id": 107, "name": "peeled Channa", "description": "Nutritious and organic, a pantry essential", "price": 10, "image": "/images/millets/peeled Channa.jpg" },
    { "id": 108, "name": "scorribanda", "description": "Flavorful lentils for soups and curries", "price": 12, "image": "/images/millets/scorribanda.png" },
    { "id": 109, "name": "sprout moong", "description": "Fresh and organic, perfect for sprouting", "price": 10, "image": "/images/millets/sprout moong.png" },
    { "id": 110, "name": "toordalwhole", "description": "Rich in iron and fiber, ideal for Indian dishes", "price": 12, "image": "/images/millets/toordalwhole.jpg" }
    
  ],

  "leafy-vegetables": [
    { "id": 111, "name": "Curry leav", "description": "Fresh Curry Leaves", "price": 6, "image": "/images/vegt/curryleav.jpg" },
    { "id": 112, "name": "Dill leaves","description": "Fresh Dill Leaves", "price": 5, "image": "/images/vegt/dillleaves.jpg" },
    { "id": 113, "name": "Drumstic", "description": "Fresh Drumstick", "price": 6, "image": "/images/vegt/drumstic2.jpg" },
    { "id": 114, "name": "Tomato", "description": "Fresh and Ripe Organic Tomatoes", "price": 5, "image": "/images/fruits/tomato.jpg" },
    { "id": 115, "name": "Drumstick leavs", "description": "Fresh Drumstick Leaves", "price": 5, "image": "/images/vegt/drumstickleavs.jpg" },
    { "id": 116, "name": "Glages carrots", "description": "Fresh Organic Carrots", "price": 6, "image": "/images/vegt/glages carrots.jpg" },
    { "id": 117, "name": "Green leafy", "description": "Fresh Green Leafy Vegetables", "price": 5, "image": "/images/vegt/greenleafy.jpg" },
    { "id": 118, "name": "Leafy leavss", "description": "Mixed Leafy Greens", "price": 6, "image": "/images/vegt/leafyleavs.jpg" },
    { "id": 119,"name": "Leafyveg", "description": "Fresh Leafy Vegetables","price": 5, "image": "/images/vegt/leafyveg.png" },
    { "id": 120, "name": "Leaves", "description": "Assorted Fresh Leaves", "price": 5, "image": "/images/vegt/leaves.jpg" },
    { "id": 121,"name": "Leaves", "description": "Fresh Organic Leaves", "price": 6, "image": "/images/vegt/leaves1.jpg" },
    { "id": 122, "name": "Papaya leaves", "description": "Fresh Papaya Leaves", "price": 6, "image": "/images/vegt/papayeleavs.jpg" },
    { "id": 123, "name": "Radish", "description": "Fresh Radish", "price": 5, "image": "/images/vegt/radish.jpg" },
    { "id": 124, "name": "Onionsleav", "description": "Fresh Onion Leaves", "price": 5, "image": "/images/vegt/onionsleav.jpg" },
    { "id": 125, "name": "Beens", "description": "Fresh Green Beans", "price": 6, "image": "/images/vegt/beens.jpg" },
    { "id": 126, "name": "Betroot", "description": "Fresh Beetroot", "price": 5, "image": "/images/vegt/betroot.jpg" },
    { "id": 127, "name": "Better", "description": "Fresh Bitter Gourd", "price": 6, "image": "/images/vegt/better.jpg" },
    { "id": 128, "name": "Brinjal", "description": "Fresh Brinjal", "price": 5, "image": "/images/vegt/brinjal.jpg" },
    { "id": 129, "name": "Brocally", "description": "Fresh Broccoli", "price": 6, "image": "/images/vegt/brocally.jpg" },
    { "id": 130, "name": "Califlower", "description": "Fresh Cauliflower", "price": 5, "image": "/images/vegt/califlower.jpg" },
    { "id": 131, "name": "Capsicum", "description": "Fresh Green Capsicum", "price": 6, "image": "/images/vegt/capsicum.jpg" },
    { "id": 132, "name": "Corrot", "description": "Fresh Orange Carrots", "price": 5, "image": "/images/vegt/corrot.png" },
    { "id": 133, "name": "Cumcombar", "description": "Fresh Cucumber", "price": 6, "image": "/images/vegt/cumcombar.jpg" },
    { "id": 134, "name": "Curry leaves", "description": "Fresh Curry Leaves", "price": 5, "image": "/images/vegt/curryleavs.jpg" },
    { "id": 135, "name": "Garlic", "description": "Fresh Garlic", "price": 6, "image": "/images/vegt/garlic.jpg" },
    { "id": 136, "name": "Gingar", "description": "Fresh Ginger", "price": 5, "image": "/images/vegt/gingar.jpg" },
    { "id": 137, "name": "Green pea", "description": "Fresh Green Peas","price": 6, "image": "/images/vegt/green pea.jpg" },
    { "id": 138, "name": "Lady fingers", "description": "Fresh Ladyfingers (Okra)", "price": 5, "image": "/images/vegt/ladyfingers.jpg" },
    { "id": 139, "name": "Lemon", "description": "Fresh Lemons", "price": 6, "image": "/images/vegt/lemon.jpg" },
    { "id": 140, "name": "Mushrooms", "description": "Fresh Mushrooms", "price": 5, "image": "/images/vegt/mushrooms.jpg" },
    { "id": 141, "name": "Onion", "description": "Fresh Red Onions", "price": 6, "image": "/images/vegt/onion.jpg" },
    { "id": 142, "name": "Potato", "description": "Fresh Potatoes", "price": 5, "image": "/images/vegt/potato.jpg" },
    { "id": 143, "name": "Pumkin", "description": "Fresh Pumpkin", "price": 6, "image": "/images/vegt/pumkin.jpg" },
    { "id": 144, "name": "Red chilly", "description": "Fresh Red Chillies", "price": 5, "image": "/images/vegt/red chilly.jpg" },
    { "id": 145, "name": "Sweetcorn", "description": "Fresh Sweet Corn", "price": 5, "image": "/images/vegt/sweetcorn.jpg" },
    { "id": 146, "name": "Green-chili", "description": "Fresh Green Chillies", "price": 5, "image": "/images/vegt/green-chili.jpg" },
    { "id": 147, "name": "Beanscluster", "description": "Fresh Cluster Beans", "price": 5, "image": "/images/vegt/beanscluster.jpg" },
    { "id": 148, "name": "Avarakkai poriyal", "description": "Fresh Red Chillies", "price": 5, "image": "/images/vegt/Avarakkai poriyal.jpg" },
    { "id": 149, "name": "Bottle Gourd", "description": "Fresh Sweet Corn", "price": 5, "image": "/images/vegt/Bottle Gourd.jpg" },
    { "id": 150, "name": "Broad Beans", "description": "Fresh Green Chillies", "price": 5, "image": "/images/vegt/Broad Beans.png" },
    { "id": 151, "name": "Hibiscus leaves", "description": "Fresh Cluster Beans", "price": 5, "image": "/images/vegt/Hibiscus leaves.jpg" },
    { "id": 152, "name": "Ivy Gourd", "description": "Fresh Red Chillies", "price": 5, "image": "/images/vegt/Ivy Gourd.png" },
    { "id": 153, "name": "Sweet potato", "description": "Fresh Red Chillies", "price": 5, "image": "/images/vegt/Sweet potato.jpg" },
    { "id": 154, "name": "leaves", "description": "Fresh Sweet Corn", "price": 5, "image": "/images/vegt/leavs1.png" }
   
   
  ],

  "organic-vegetables": [
    
    { "id": 155, "name": "Papaya leaves", "description": "Fresh Papaya Leaves", "price": 6, "image": "/images/vegt/papayeleavs.jpg" },
    { "id": 156, "name": "Radish", "description": "Fresh Radish", "price": 5, "image": "/images/vegt/radish.jpg" },
    { "id": 157, "name": "Onionsleav", "description": "Fresh Onion Leaves", "price": 5, "image": "/images/vegt/onionsleav.jpg" },
    { "id": 158, "name": "Beens", "description": "Fresh Green Beans","price": 6, "image": "/images/vegt/beens.jpg" },
    { "id": 159, "name": "Betroot", "description": "Fresh Beetroot", "price": 5, "image": "/images/vegt/betroot.jpg" },
    { "id": 160, "name": "Better", "description": "Fresh Bitter Gourd", "price": 6, "image": "/images/vegt/better.jpg" },
    { "id": 161, "name": "Brinjal", "description": "Fresh Brinjal", "price": 5, "image": "/images/vegt/brinjal.jpg" },
    { "id": 162, "name": "Brocally", "description": "Fresh Broccoli", "price": 6, "image": "/images/vegt/brocally.jpg" },
    { "id": 163, "name": "Califlower", "description": "Fresh Cauliflower", "price": 5, "image": "/images/vegt/califlower.jpg" },
    { "id": 164, "name": "Capsicum", "description": "Fresh Green Capsicum", "price": 6, "image": "/images/vegt/capsicum.jpg" },
    { "id": 165, "name": "Corrot", "description": "Fresh Orange Carrots", "price": 5, "image": "/images/vegt/corrot.png" },
    { "id": 166, "name": "Cumcombar", "description": "Fresh Cucumber", "price": 6, "image": "/images/vegt/cumcombar.jpg" },
    { "id": 167, "name": "Curry leaves", "description": "Fresh Curry Leaves", "price": 5, "image": "/images/vegt/curryleavs.jpg" },
    { "id": 168, "name": "Garlic", "description": "Fresh Garlic", "price": 6, "image": "/images/vegt/garlic.jpg" },
    { "id": 169, "name": "Gingar", "description": "Fresh Ginger", "price": 5, "image": "/images/vegt/gingar.jpg" },
    { "id": 170, "name": "Green pea", "description": "Fresh Green Peas", "price": 6, "image": "/images/vegt/green pea.jpg" },
    { "id": 171, "name": "Lady fingers", "description": "Fresh Ladyfingers (Okra)", "price": 5, "image": "/images/vegt/ladyfingers.jpg" },
    { "id": 172, "name": "Lemon", "description": "Fresh Lemons", "price": 6, "image": "/images/vegt/lemon.jpg" },
    { "id": 173, "name": "Mushrooms", "description": "Fresh Mushrooms", "price": 5, "image": "/images/vegt/mushrooms.jpg" },
    { "id": 174, "name": "Onion", "description": "Fresh Red Onions", "price": 6, "image": "/images/vegt/onion.jpg" },
    { "id": 175, "name": "Potato", "description": "Fresh Potatoes", "price": 5, "image": "/images/vegt/potato.jpg" },
    { "id": 176, "name": "Pumkin", "description": "Fresh Pumpkin", "price": 6, "image": "/images/vegt/pumkin.jpg" },
    { "id": 177, "name": "Red chilly", "description": "Fresh Red Chillies", "price": 5, "image": "/images/vegt/red chilly.jpg" },
    { "id": 178, "name": "Sweetcorn", "description": "Fresh Sweet Corn", "price": 5, "image": "/images/vegt/sweetcorn.jpg" },
    { "id": 179, "name": "Green-chili", "description": "Fresh Green Chillies", "price": 5, "image": "/images/vegt/green-chili.jpg" },
    { "id": 180, "name": "Beanscluster", "description": "Fresh Cluster Beans", "price": 5, "image": "/images/vegt/beanscluster.jpg" },
    { "id": 181, "name": "Curry leav", "description": "Fresh Curry Leaves", "price": 6, "image": "/images/vegt/curryleav.jpg" },
    { "id": 182, "name": "Dill leaves", "description": "Fresh Dill Leaves", "price": 5," image": "/images/vegt/dillleaves.jpg" },
    { "id": 183, "name": "Drumstic", "description": "Fresh Drumstick", "price": 6, "image": "/images/vegt/drumstic2.jpg" },
    { "id": 184, "name": "Drumstick leavs", "description": "Fresh Drumstick Leaves", "price": 5, "image": "/images/vegt/drumstickleavs.jpg" },
    { "id": 185, "name": "Glages carrots", "description": "Fresh Organic Carrots", "price": 6, "image": "/images/vegt/glages carrots.jpg" },
    { "id": 186, "name": "Green leafy", "description": "Fresh Green Leafy Vegetables", "price": 5, "image": "/images/vegt/greenleafy.jpg" },
    { "id": 187, "name": "Leafy leavss", "description": "Mixed Leafy Greens", "price": 6, "image": "/images/vegt/leafyleavs.jpg" },
    { "id": 188, "name": "Leafyveg", "description": "Fresh Leafy Vegetables", "price": 5, "image": "/images/vegt/leafyveg.png" },
    { "id": 189, "name": "Leaves", "description": "Assorted Fresh Leaves", "price": 5, "image": "/images/vegt/leaves.jpg" },
    { "id": 190, "name": "Leaves", "description": "Fresh Organic Leaves", "price": 6, "image": "/images/vegt/leaves1.jpg" }
  
  ], 
    "dry-fruits": [
    { "id": 191, "name": "Almonds", "description": "Premium quality almonds, rich in nutrients and flavor", "price": 25, "image": "/images/dryfruits/almond.jpg" },
    { "id": 192, "name": "Anjur", "description": "Delicious dried figs, packed with natural sweetness", "price": 20, "image": "/images/dryfruits/anjur.jpg" },
    { "id": 193, "name": "Black Sesame Seeds", "description": "Rich in antioxidants, perfect for healthy recipes", "price": 25, "image": "/images/dryfruits/blacksesameseeds.png" },
    { "id": 194, "name": "Dates", "description": "Soft and sweet dates, a natural energy booster", "price": 20, "image": "/images/dryfruits/dates.jpg" },
    { "id": 195, "name": "Cumin Seeds", "description": "Aromatic cumin seeds for flavor-packed dishes", "price": 25, "image": "/images/dryfruits/cuminseeds.jpg" },
    { "id": 196, "name": "Dry Coconuts", "description": "Versatile dry coconuts for cooking and snacking", "price": 20, "image": "/images/dryfruits/drycoconuts.jpg" },
    { "id": 197, "name": "Egg", "description": "Fresh and premium-quality eggs for nutritious meals", "price": 25, "image": "/images/dryfruits/egg.jpg" },
    { "id": 198, "name": "Eggs", "description": "High-quality farm eggs, rich in protein", "price": 20, "image": "/images/dryfruits/eggs.jpg" },
    { "id": 199, "name": "Farm Eggs", "description": "Freshly sourced farm eggs for healthy living", "price": 25, "image": "/images/dryfruits/farmeggs.jpg" },
    { "id": 200, "name": "Pumpkin Seed", "description": "Nutrient-rich pumpkin seeds, perfect for snacking", "price": 20, "image": "/images/dryfruits/pump.jpg" },
    { "id": 201, "name": "Sunflower Seeds", "description": "Crunchy sunflower seeds, packed with nutrients", "price": 20, "image": "/images/dryfruits/sunflowerseeds.jpg" },
    { "id": 202, "name": "Sunflower Seeds", "description": "Healthy and flavorful seeds for snacking", "price": 25, "image": "/images/dryfruits/sunflowerseeds1.jpg" },
    { "id": 203, "name": "White Sesame Seeds", "description": "Nutty and aromatic sesame seeds for cooking", "price": 20, "image": "/images/dryfruits/whitesesameseeds.jpg" },
    { "id": 204, "name": "Watermelon Seeds", "description": "Crunchy and healthy watermelon seeds for snacks", "price": 20, "image": "/images/dryfruits/wmnseeds.jpg" },
    { "id": 205, "name": "Wheat Grains", "description": "Premium quality wheat grains for fresh flour", "price": 20, "image": "/images/dryfruits/wheatgrains.jpg" },
    { "id": 206, "name": "Pista", "description": "Rich and creamy pistachios for a tasty treat", "price": 20, "image": "/images/dryfruits/pista.jpg" },
    { "id": 207, "name": "Cashews", "description": "Delicious and creamy cashews for snacking", "price": 20, "image": "/images/dryfruits/Cashews.jpg" }
  ],

    "spices": [
    { "id": 208, "name": "Anise Seeds", "description": "Fragrant and Organic Anise Seeds", "price": 10, "image": "/images/spices/Anise Seeds.jpg" },
    { "id": 209, "name": "Bay Leaf", "description": "Aromatic and Premium Quality Bay Leaf", "price": 8, "image": "/images/spices/Bay Leaf.jpg" },
    { "id": 210, "name": "Black Peppercorn", "description": "Whole and Fresh Black Peppercorn", "price": 10, "image": "/images/spices/black peppercorn.jpg" },
    { "id": 211, "name": "Cardamom", "description": "Fresh and Flavorful Cardamom", "price": 8, "image": "/images/spices/Cardamom.jpg" },
    { "id": 212, "name": "Cinnamon", "description": "Rich and Aromatic Cinnamon Sticks", "price": 10, "image": "/images/spices/Cinnamon.jpg" },
    { "id": 213, "name": "Cloves", "description": "Premium Whole Cloves for Cooking", "price": 8, "image": "/images/spices/cloves.jpg" },
    { "id": 214, "name": "Coriander Powder", "description": "Freshly Ground Coriander Powder", "price": 10, "image": "/images/spices/coriander powder.jpg" },
    { "id": 215, "name": "Cumin Seeds", "description": "Aromatic and High-Quality Cumin Seeds", "price": 8, "image": "/images/spices/Dry Ginger Powder.jpg" },
    { "id": 216, "name": "Fenugreek", "description": "Organic and Fresh Fenugreek Seeds", "price": 10, "image": "/images/spices/fenugreek.jpg" },
    { "id": 217, "name": "Mustard", "description": "High-Quality Mustard Seeds", "price": 8, "image": "/images/spices/mustard.png" },
    { "id": 218, "name": "Nutmeg", "description": "Whole and Aromatic Nutmeg", "price": 10, "image": "/images/spices/Nutmeg.jpg" },
    { "id": 219, "name": "Red Chili Powder", "description": "Spicy and Vibrant Red Chili Powder", "price": 8, "image": "/images/spices/red chill powder.jpg" },
    { "id": 220, "name": "Star Anise", "description": "Exotic and Aromatic Star Anise", "price": 10, "image": "/images/spices/star Anise.jpg" },
    { "id": 221, "name": "Whole Cumin Seed", "description": "Fresh and Premium Whole Cumin Seeds", "price": 8, "image": "/images/spices/Whole Cumin Seed.jpg" }
  ],

      "natural-ghee": [
    { "id": 222, "name": "Groundnuts Oil", "description": "Pure and Natural Groundnuts Oil", "price": 15, "image": "/images/dryfruits/groundnuts oil.jpg" },
    { "id": 223, "name": "Olive Oil", "description": "Rich and Pure Olive Oil", "price": 20, "image": "/images/dryfruits/oil.jpg" },
    { "id": 224, "name": "Flaxseed Oil", "description": "Healthy and Pure Flaxseed Oil", "price": 15, "image": "/images/dryfruits/flaxseed oil.jpg" },
    { "id": 225, "name": "Almond", "description": "Fresh and Premium Quality Almonds", "price": 20, "image": "/images/dryfruits/almond.jpg" },
    { "id": 226, "name": "Anjur", "description": "Rich and Sweet Anjur", "price": 15, "image": "/images/dryfruits/anjur.jpg" },
    { "id": 227, "name": "Dates", "description": "Naturally Sweet and Nutritious Dates", "price": 20, "image": "/images/dryfruits/dates.jpg" },
    { "id": 228, "name": "Eggs", "description": "Farm Fresh Organic Eggs", "price": 15, "image": "/images/dryfruits/egg.jpg" },
    { "id": 229, "name": "Kismis", "description": "Naturally Sweet Kismis (Raisins)", "price": 20, "image": "/images/dryfruits/kismis.jpg" },
    { "id": 230, "name": "Farm Eggs", "description": "Healthy and Nutritious Farm Eggs", "price": 15, "image": "/images/dryfruits/farmeggs.jpg" },
    { "id": 231, "name": "Grandnuts", "description": "Crunchy and Fresh Groundnuts", "price": 20, "image": "/images/dryfruits/grandnuts.jpg" },
    { "id": 232, "name": "Eggs", "description": "High-Quality Organic Eggs", "price": 15, "image": "/images/dryfruits/eggs.jpg" },
    { "id": 233, "name": "Honey", "description": "Pure and Natural Honey", "price": 20, "image": "/images/dryfruits/haney.png" },
    { "id": 234, "name": "Ghee", "description": "Rich and Creamy Pure Ghee", "price": 15, "image": "/images/dryfruits/ghee.jpg" },
    { "id": 235, "name": "Gira", "description": "Fresh and Aromatic Cumin Seeds (Gira)", "price": 20, "image": "/images/dryfruits/gira.jpg" },
    { "id": 236, "name": "Ghee", "description": "Premium Quality Natural Ghee", "price": 15, "image": "/images/dryfruits/ghee1.jpg" },
    { "id": 237, "name": "Nuts", "description": "A Mix of Fresh and Crunchy Nuts", "price": 20, "image": "/images/dryfruits/nuts.jpg" },
    { "id": 238, "name": "Black Sesame Seeds", "description": "Premium Quality Black Sesame Seeds", "price": 25, "image": "/images/dryfruits/blacksesameseeds.png" },
    { "id": 239, "name": "Cumin Seeds", "description": "Aromatic and Natural Cumin Seeds", "price": 25, "image": "/images/dryfruits/cuminseeds.jpg" },
    { "id": 240, "name": "Dry Coconuts", "description": "Rich and Nutritious Dry Coconuts", "price": 20, "image": "/images/dryfruits/drycoconuts.jpg" },
    { "id": 241, "name": "Pumpkin Seeds", "description": "Crunchy and Fresh Pumpkin Seeds", "price": 20, "image": "/images/dryfruits/pump.jpg" },
    { "id": 242, "name": "Sunflower Seeds", "description": "Healthy and Nutritious Sunflower Seeds", "price": 25, "image": "/images/dryfruits/sunflowerseeds.jpg" },
    { "id": 243, "name": "White Sesame Seeds", "description": "Natural and Fresh White Sesame Seeds", "price": 20, "image": "/images/dryfruits/whitesesameseeds.jpg" },
    { "id": 244, "name": "Watermelon Seeds", "description": "Crunchy and Nutritious Watermelon Seeds", "price": 20, "image": "/images/dryfruits/wmnseeds.jpg" },
    { "id": 243, "name": "Wheat Grains", "description": "Rich and Fresh Organic Wheat Grains", "price": 20, "image": "/images/dryfruits/wheatgrains.jpg" }
  
  ]

};
  // 🔹 Use useEffect to update products when categoryName changes
  useEffect(() => {
    if (categoryProducts[categoryName]) {
      setProducts(categoryProducts[categoryName]);
    } else {
      setProducts([]); // Reset if category is not found
    }
  }, [categoryName]); // Re-run effect when categoryName changes

  return (
    <div>
      <AllProducts products={products} addToWishlist={addToWishlist} addToCart={addToCart} />
    </div>
  );
};

export default CategoryPage;