import React, { useState } from "react";

const categories = ["Clothing", "Cosmetics", "Grocery"];

export default function AdminProducts() {
  const [products, setProducts] = useState([
    // CLOTHING
    { _id: 1, name: "Women Dress", price: 900, category: "Clothing", image: "https://images.unsplash.com/photo-1618354698439-2c1759c23f7b?auto=format&fit=crop&w=400&q=80" },
    { _id: 2, name: "Men T-Shirt", price: 500, category: "Clothing", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=400&q=80" },
    { _id: 3, name: "Jeans", price: 1200, category: "Clothing", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80" },

    // COSMETICS
    { _id: 4, name: "Lipstick", price: 300, category: "Cosmetics", image: "https://m.media-amazon.com/images/I/41Euj7BhkvL._AC_UF1000,1000_QL80_.jpg" },
    { _id: 5, name: "Face Cream", price: 450, category: "Cosmetics", image: "https://m.media-amazon.com/images/I/51xQ7Z7QZ6L._AC_UF1000,1000_QL80_.jpg" },
    { _id: 6, name: "Perfume", price: 1500, category: "Cosmetics", image: "https://m.media-amazon.com/images/I/61O+M+zq6sL._AC_UF1000,1000_QL80_.jpg" },

    // GROCERY
    { _id: 7, name: "Rice (1kg)", price: 80, category: "Grocery", image: "https://m.media-amazon.com/images/I/61Y8i2uH7lL.jpg" },
    { _id: 8, name: "Milk", price: 50, category: "Grocery", image: "https://m.media-amazon.com/images/I/71hJbE3F2EL.jpg" },
    { _id: 9, name: "Sugar (1kg)", price: 45, category: "Grocery", image: "https://m.media-amazon.com/images/I/71yqXJr6ZlL.jpg" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Clothing",
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      _id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      category: formData.category,
      image:
        formData.image ||
        "https://via.placeholder.com/400x400.png?text=No+Image",
    };

    setProducts([newProduct, ...products]);
    setFormData({ name: "", price: "", image: "", category: "Clothing" });
    setShowForm(false);
  };

  const handleDelete = (id) =>
    setProducts(products.filter((p) => p._id !== id));

  const handleEdit = (id) => {
    const newName = prompt("Enter new product name:");
    if (!newName) return;

    setProducts(
      products.map((p) =>
        p._id === id ? { ...p, name: newName } : p
      )
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#f8fbfd] via-[#eef6fa] to-[#ffffff]">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Admin Product Dashboard
      </h2>

      {/* Add Product Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleForm}
          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transition duration-300 font-semibold"
        >
          ➕ Add Product
        </button>
      </div>

      {/* BLUR MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-white/30 flex justify-center items-center z-50"
          onClick={toggleForm}
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleForm}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ✖️
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">
              Add Product
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                required
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
                required
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
              />

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      {categories.map((cat) => (
        <div key={cat} className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">
            {cat} Products
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h4 className="font-semibold text-lg">
                      {product.name}
                    </h4>
                    <p className="text-green-600 font-bold">
                      ₹{product.price}
                    </p>

                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={() => handleEdit(product._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
