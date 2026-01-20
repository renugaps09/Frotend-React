// src/pages/Home.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import { CartContext } from "../context/CartContext";

// Categories with images
const categories = [
  { name: "Grocery", slug: "grocery", img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
  { name: "Clothing", slug: "clothing", img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  { name: "Footwear", slug: "footwear", img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  { name: "Jewellery", slug: "jewellery", img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
  { name: "Bags", slug: "bags", img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
  { name: "Cosmetics", slug: "cosmetics", img: "https://cdn-icons-png.flaticon.com/512/2331/2331943.png" },
  { name: "Books", slug: "books", img: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png" },
];

// Subcategories for mega menu
const subcategories = {
  Grocery: {
    All: ["All Grocery"],
    "Fruits & Vegetables": ["Fruits", "Vegetables", "Organic"],
    "Oils & Atta": ["Cooking Oil", "Atta & Flours"],
    Snacks: ["Chips", "Namkeen", "Biscuits"],
    Beverages: ["Tea", "Coffee", "Juices"],
  },
  Clothing: {
    All: ["All Clothing"],
    "Men's Top Wear": ["T-Shirts", "Casual Shirts", "Formal Shirts", "Kurtas"],
    "Men's Bottom Wear": ["Jeans", "Trousers", "Shorts"],
    Women: ["Dresses", "Tops", "Ethnic Wear"],
    Kids: ["Boys", "Girls"],
  },
  Footwear: {
    All: ["All Footwear"],
    Men: ["Casual Shoes", "Formal Shoes", "Sandals"],
    Women: ["Heels", "Sandals", "Flats"],
    Kids: ["Boys", "Girls"],
  },
  Jewellery: {
    All: ["All Jewellery"],
    Necklaces: ["Gold", "Silver", "Diamond"],
    Earrings: ["Studs", "Hoops", "Danglers"],
    Rings: ["Gold", "Silver", "Diamond"],
  },
  Bags: {
    All: ["All Bags"],
    Handbags: ["Totes", "Clutches"],
    Backpacks: ["School", "Travel"],
    "Travel Bags": ["Suitcases", "Duffel Bags"],
  },
  Cosmetics: {
    All: ["All Cosmetics"],
    Makeup: ["Lipstick", "Foundation", "Mascara"],
    Skincare: ["Moisturizer", "Cleanser", "Serum"],
    Perfumes: ["Men", "Women"],
  },
  Books: {
    All: ["All Books"],
    "Story Books": ["Kids", "Adults"],
    "Exam Prep": ["School", "Competitive Exams"],
    Novels: ["Fiction", "Non-Fiction"],
  },
};

// Sample featured products
const featuredProducts = {
  grocery: [
    { name: "Rice", price: 50, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
    { name: "Cooking Oil", price: 120, img: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png" },
  ],
  clothing: [
    { name: "Men's T-Shirt", price: 499, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
    { name: "Women's Dress", price: 799, img: "https://cdn-icons-png.flaticon.com/512/892/892458.png" },
  ],
};

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Category Tabs */}
      <div className="sticky top-16 z-50 bg-white shadow flex space-x-3 px-4 py-3 overflow-x-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onMouseEnter={() => setActiveTab(cat.name)}
            onMouseLeave={() => setActiveTab(null)}
            className={`cursor-pointer flex flex-col items-center rounded-lg p-2 w-20 hover:bg-blue-100 transition-colors ${
              activeTab === cat.name ? "bg-blue-100" : "bg-white"
            }`}
          >
            <img src={cat.img} alt={cat.name} className="w-12 h-12 object-contain mb-1" />
            <span className="text-xs font-semibold text-center">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Mega Menu Dropdown */}
      {activeTab && subcategories[activeTab] && (
        <div
          onMouseEnter={() => setActiveTab(activeTab)}
          onMouseLeave={() => setActiveTab(null)}
          className="absolute left-0 top-32 w-[800px] bg-white shadow-lg rounded-lg py-4 px-6 grid grid-cols-4 gap-6 z-50"
        >
          {Object.keys(subcategories[activeTab]).map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-sm mb-2">{column}</h3>
              <ul className="space-y-1">
                {subcategories[activeTab][column].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-600 cursor-pointer text-sm"
                    onClick={() =>
                      navigate(
                        `/category/${categories.find((c) => c.name === activeTab).slug}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Slider */}
      <div className="mt-2 px-4">
        <Slider />
      </div>

      {/* Categories Grid */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => navigate(`/category/${cat.slug}`)}
              className="cursor-pointer bg-white shadow rounded-lg p-4 flex flex-col items-center hover:bg-blue-50 transition transform hover:scale-105"
            >
              <img src={cat.img} alt={cat.name} className="h-20 w-20 object-contain mb-2" />
              <h3 className="text-sm font-semibold text-center">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(featuredProducts).map((cat) =>
            featuredProducts[cat].map((product, i) => (
              <div
                key={`${cat}-${i}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer text-center transition-transform hover:scale-105"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-36 mx-auto mb-2 object-contain"
                  onClick={() => navigate(`/category/${cat}`)}
                />
                <h3 className="font-semibold text-base">{product.name}</h3>
                <p className="text-lg font-bold text-[#1A73E8]">₹{product.price}</p>
                <button
                  onClick={() => addToCart({ ...product, category: cat })}
                  className="mt-3 w-full bg-[#ff9900] text-white py-2 rounded hover:bg-[#e68a00] font-medium"
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
