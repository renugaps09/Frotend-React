import React, { useState, useEffect } from "react";

const categories = ["Clothing", "Cosmetics", "Grocery"];

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Clothing",
  });

  /* Load Data */
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);

  /* Add or Update Product */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      const updated = products.map((p) =>
        p._id === editId
          ? { ...p, ...formData, price: parseInt(formData.price) }
          : p
      );

      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
      setEditId(null);
    } else {
      // ADD
      const newProduct = {
        _id: Date.now(),
        name: formData.name,
        price: parseInt(formData.price),
        category: formData.category,
      };

      const updated = [...products, newProduct];
      setProducts(updated);
      localStorage.setItem("products", JSON.stringify(updated));
    }

    setShowForm(false);
    setFormData({ name: "", price: "", category: "Clothing" });
  };

  /* Delete */
  const handleDelete = (id) => {
    const updated = products.filter((p) => p._id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  /* Edit */
  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product._id);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 to-blue-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        🛠 Admin Dashboard
      </h2>

      {/* Add Product Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
          }}
          className="bg-purple-600 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition"
        >
          ➕ Add Product
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">
              {editId ? "Edit Product" : "Add Product"}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="border p-2 rounded"
              />

              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
                className="border p-2 rounded"
              />

              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="border p-2 rounded"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>

              <button className="bg-purple-600 text-white py-2 rounded-lg">
                {editId ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Orders Section */}
      <div className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          🛍 User Orders ({orders.length})
        </h3>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders
            .filter((order) => order.product)
            .map((order, index) => (
              <div key={index} className="border-b py-3">
                <p className="font-semibold">
                  {order.product?.name}
                </p>
                <p>₹{order.product?.price}</p>
                <p>User: {order.userName}</p>
                <p>Phone: {order.phone}</p>
                <p>Address: {order.address}</p>
              </div>
            ))
        )}
      </div>

      {/* Products Section */}
      {categories.map((cat) => (
        <div key={cat} className="mb-6">
          <h3 className="text-xl font-bold">{cat}</h3>

          {products
            .filter((p) => p.category === cat)
            .map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-xl shadow mt-2 flex justify-between items-center"
              >
                <span>
                  {product.name} - ₹{product.price}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}