// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="flex items-center mb-4 bg-white p-4 rounded shadow">
              <img src={item.img} className="h-20 w-20 mr-4 object-contain" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>₹{item.price} × {item.qty}</p>
                <p className="text-sm text-gray-600">Delivery: Free</p>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <h3 className="text-xl font-bold">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
