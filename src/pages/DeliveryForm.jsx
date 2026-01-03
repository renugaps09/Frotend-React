function DeliveryForm() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>

      <input
        type="text"
        placeholder="Customer Name"
        className="w-full p-2 border mb-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-2 border mb-3"
      />

      <textarea
        placeholder="Delivery Address"
        className="w-full p-2 border mb-3"
      ></textarea>

      <input
        type="text"
        placeholder="Product Category"
        className="w-full p-2 border mb-3"
      />

      <input
        type="number"
        placeholder="Quantity"
        className="w-full p-2 border mb-3"
      />

      <button className="bg-blue-600 text-white px-4 py-2">
        Place Order
      </button>
    </div>
  );
}

export default DeliveryForm;
