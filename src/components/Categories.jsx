// src/components/Categories.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Dummy products (6 per category) with unique IDs
const productsData = {
  grocery: [
    { id: 1, name: "Rice", price: 50, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { id: 2, name: "Cooking Oil", price: 120, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { id: 3, name: "Wheat Flour", price: 40, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { id: 4, name: "Pulses", price: 60, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { id: 5, name: "Spices Pack", price: 30, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { id: 6, name: "Snacks", price: 25, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
  ],
  clothing: [
    { id: 1, name: "Men's T-Shirt", price: 499, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 2, name: "Women's Dress", price: 799, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 3, name: "Jeans", price: 999, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 4, name: "Shirt", price: 599, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 5, name: "Kurti", price: 699, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 6, name: "Trousers", price: 799, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  ],
  footwear: [
    { id: 1, name: "Men's Casual Shoes", price: 1200, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 2, name: "Women's Sandals", price: 800, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 3, name: "Sports Shoes", price: 1500, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 4, name: "Slippers", price: 300, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 5, name: "Formal Shoes", price: 2000, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { id: 6, name: "Kids Shoes", price: 600, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  ],
  jewellery: [
    { id: 1, name: "Necklace", price: 2500, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 2, name: "Earrings", price: 1200, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 3, name: "Bangles", price: 900, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 4, name: "Bracelet", price: 1100, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 5, name: "Ring", price: 700, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 6, name: "Pendant", price: 1300, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
  ],
  bags: [
    { id: 1, name: "Handbag", price: 1500, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
    { id: 2, name: "Backpack", price: 2000, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
    { id: 3, name: "Travel Bag", price: 2500, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
    { id: 4, name: "Wallet", price: 800, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
    { id: 5, name: "Laptop Bag", price: 2200, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
    { id: 6, name: "Tote Bag", price: 1200, img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
  ],
  cosmetics: [
    { id: 1, name: "Lipstick", price: 500, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 2, name: "Perfume", price: 1200, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 3, name: "Foundation", price: 800, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 4, name: "Moisturizer", price: 700, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 5, name: "Shampoo", price: 400, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
    { id: 6, name: "Conditioner", price: 450, img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
  ],
  books: [
    { id: 1, name: "Story Book", price: 150, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
    { id: 2, name: "Exam Prep Book", price: 300, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
    { id: 3, name: "Children's Book", price: 200, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
    { id: 4, name: "Notebook", price: 50, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
    { id: 5, name: "Story Collection", price: 250, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
    { id: 6, name: "Educational Book", price: 400, img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
  ],
};

function Categories() {
  const { name } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const categorySlug = name.toLowerCase();
  const displayName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  const products = productsData[categorySlug] || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{displayName}</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products available for {displayName} yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer text-center transition-transform hover:scale-105"
            >
              {/* Navigate to ProductDetails on click */}
              <img
                src={product.img}
                alt={product.name}
                className="h-36 mx-auto mb-2 object-contain cursor-pointer"
                onClick={() => navigate(`/category/${categorySlug}/product/${product.id}`)}
              />
              <h3
                className="font-semibold text-base cursor-pointer"
                onClick={() => navigate(`/category/${categorySlug}/product/${product.id}`)}
              >
                {product.name}
              </h3>
              <p className="text-lg font-bold text-[#1A73E8]">₹{product.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                Delivery by <span className="font-semibold">Tomorrow</span>
              </p>
              <button
                onClick={() => addToCart({ ...product, category: categorySlug })}
                className="mt-3 w-full bg-[#ff9900] text-white py-2 rounded hover:bg-[#e68a00] font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
