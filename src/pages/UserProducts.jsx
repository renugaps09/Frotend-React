import { useState } from "react";

export default function UserProducts() {
  const products = [
    {
      _id: 1,
      name: "Lipstick",
      price: 300,
      category: "Cosmetics",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDNt8i53y1aAp3xpsAeQu1Mf9udDXh1PscUx1h41G2EBmPMJvOLc4RGtu1PEbbFYljiLmtAo3-aFXRZIoWAOiuTuy8NjrulODLcjFAQ2tDv0k5dgxFvbkxMUQ",
    },
    {
      _id: 2,
      name: "Foundation",
      price: 800,
      category: "Cosmetics",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVZpVALSxil81wMOrdZqMD_x0QhL67KGSj9G2-0pWEDkyfWjkF03C-eMvof61EhfNQ5A6BKTZdBjNQr7faA-oDs8eLcFZ_49Ihr_oJGTk8HByBnGiLsBxhgMY",
    },
    {
      _id: 6,
      name: "Grapes",
      price: 400,
      category: "Grocery",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShixpGAxwozvt75Y5vROZGhvnb_APqgcMwbfLoOM9w5fRWRQLhZj5E67tbykNN4UXlMhLoy8Cc1O8WdwPlFhFUhXGC_6l_tTdV5tPHMqKwb4LhL17i6tU_wTE",
    },
    {
      _id: 7,
      name: "Kids Shirt",
      price: 350,
      category: "Clothing",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUaVXliHqPGc9D9km3e4RBqCoNJG51aoK_EqJptgfgn0pHGBGKiiq3bTd-GyT36renYP_HnPa7Y_3vlqHTCO5iZoEKECjEn4l9VYO-adjqfWTbHwCTzbSr9Nw",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const categories = ["Cosmetics", "Grocery", "Clothing"];

  return (
    <div className="p-8 bg-gray-50 font-sans min-h-screen relative">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        User Product Portal
      </h1>

      {/* Toast Popup */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition duration-300">
          ✅ Added to Cart Successfully!
        </div>
      )}

      {/* Cart Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-400 pb-2">
          🛒 Cart ({cart.length})
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
              {cart.map((p, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-32 h-32 object-cover mb-2 rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <p className="text-indigo-600 font-bold">₹{p.price}</p>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg transition duration-300"
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold text-right text-indigo-700">
              Total: ₹{totalPrice}
            </p>
          </>
        )}
      </div>

      {/* Products Section */}
      {categories.map((cat) => (
        <div key={cat} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-indigo-400 pb-2">
            {cat}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === cat)
              .map((p) => (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                  />

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {p.name}
                      </h3>
                      <p className="text-indigo-600 font-bold text-lg">
                        ₹{p.price}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(p)}
                      className="mt-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
