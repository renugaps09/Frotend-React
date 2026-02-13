import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function UserProducts() {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Women Dress",
      price: 900,
      image: "https://m.media-amazon.com/images/I/71P1ZiN+QsL._AC_UL1500_.jpg"
    },
    {
      _id: 2,
      name: "Men Shirt",
      price: 700,
      image: "https://m.media-amazon.com/images/I/61YWx6W9tpL._AC_UL1500_.jpg"
    },
    {
      _id: 3,
      name: "Lipstick",
      price: 300,
      image: "https://m.media-amazon.com/images/I/61Cjg7HTfOL._AC_UL1500_.jpg"
    },
    {
      _id: 4,
      name: "Perfume",
      price: 1500,
      image: "https://m.media-amazon.com/images/I/71x5FbBcH5L._AC_UL1500_.jpg"
    },
    {
      _id: 5,
      name: "Jeans",
      price: 1200,
      image: "https://m.media-amazon.com/images/I/71eXkDa0yNL._AC_UL1500_.jpg"
    },
    {
      _id: 6,
      name: "Sneakers",
      price: 1500,
      image: "https://m.media-amazon.com/images/I/61A2aR1N99L._AC_UL1500_.jpg"
    },
    {
      _id: 7,
      name: "Sunscreen",
      price: 500,
      image: "https://m.media-amazon.com/images/I/71lUZmBv6-L._AC_UL1500_.jpg"
    },
    {
      _id: 8,
      name: "Coffee (500g)",
      price: 600,
      image: "https://m.media-amazon.com/images/I/61MGOgV4yGL._AC_UL1500_.jpg"
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p._id !== id));
  };

  return (
    <div className="p-8 bg-gradient-to-b from-[#f8fbfd] via-[#eef6fa] to-[#ffffff] min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-wide">
        User Product Portal
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-semibold text-gray-900 truncate">{p.name}</h2>
              <p className="text-indigo-600 font-bold text-lg mt-1">₹ {p.price}</p>

              <button
                onClick={() => addToCart(p)}
                className="mt-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-xl shadow-lg hover:from-green-500 hover:to-green-600 transition duration-300 font-medium"
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((item) => (
              <div key={item._id} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold text-gray-900 text-center">{item.name}</h3>
                <p className="text-indigo-600 font-bold mt-1">₹ {item.price}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
