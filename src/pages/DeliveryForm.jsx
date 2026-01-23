import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeliveryForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    category: "",
    quantity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired or not logged in. Please login.");
        navigate("/login", { replace: true });
        return;
      }

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to place order");

      alert("Order placed successfully!");
      setForm({
        customerName: "",
        phone: "",
        address: "",
        category: "",
        quantity: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          className="w-full p-2 border mb-3"
          value={form.customerName}
          onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border mb-3"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Delivery Address"
          className="w-full p-2 border mb-3"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Product Category"
          className="w-full p-2 border mb-3"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 border mb-3"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
