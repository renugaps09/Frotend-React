import React, { useState, useEffect } from "react";

export default function UserProducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderForm, setOrderForm] = useState({
    userName: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to Cart ✅");
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
  };

  const submitOrder = (e) => {
    e.preventDefault();

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      product: selectedProduct,
      ...orderForm,
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    alert("Order Placed Successfully 🎉");
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-pink-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        🛒 Shop Now
      </h2>

      {/* Cart */}
      <div className="mb-6 bg-white p-4 rounded-xl shadow">
        <h3 className="font-bold">Cart ({cart.length})</h3>
        {cart.map((item, i) => (
          <p key={i}>{item.name}</p>
        ))}
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h4 className="font-bold text-lg">
              {product.name}
            </h4>
            <p className="text-green-600 font-semibold">
              ₹{product.price}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
              >
                Add To Cart
              </button>

              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-500 text-white px-4 py-1 rounded-lg"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Now Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">
              Order {selectedProduct.name}
            </h3>

            <form onSubmit={submitOrder} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    userName: e.target.value,
                  })
                }
                className="border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Phone"
                required
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    phone: e.target.value,
                  })
                }
                className="border p-2 rounded"
              />

              <textarea
                placeholder="Address"
                required
                onChange={(e) =>
                  setOrderForm({
                    ...orderForm,
                    address: e.target.value,
                  })
                }
                className="border p-2 rounded"
              />

              <button className="bg-green-600 text-white py-2 rounded-lg">
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}