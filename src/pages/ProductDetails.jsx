// src/pages/ProductDetails.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Dummy products (same as in Categories.jsx)
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
  // Add other categories similarly...
};

function ProductDetails() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const categoryProducts = productsData[category] || [];
  const product = categoryProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#1A73E8] text-white py-2 px-4 rounded hover:bg-[#1665c1]"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 md:flex md:gap-10">
      {/* Image */}
      <div className="md:w-1/2">
        <img src={product.img} alt={product.name} className="w-full h-auto object-contain" />
      </div>

      {/* Details */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-[#1A73E8] font-semibold mb-3">₹{product.price}</p>
        <p className="text-gray-700 mb-3">
          Delivery by <span className="font-semibold">Tomorrow</span>
        </p>
        <p className="text-gray-600 mb-6">
          This is a high-quality {product.name} from our Sculpx Store. Perfect choice for your needs.
        </p>
        <button
          onClick={() => addToCart({ ...product, category })}
          className="bg-[#ff9900] text-white py-2 px-6 rounded hover:bg-[#e68a00] font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
