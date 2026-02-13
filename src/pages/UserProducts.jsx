import { useState } from "react";

export default function UserProducts() {
  const products = [
  // COSMETICS
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
    _id: 3,
    name: "Eyeliner",
    price: 400,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrCHGhkWMcv_7KfuvG13Ml0sap9I2b9_ycCkeek_zfbTkCENV_vywhk_xIcLpZosacFw_-4SalvjfHZhJJo1ogsD-_GK35Z2OjwZu0GK6fnwqDUhJuqyPx1g",
  },
  {
    _id: 4,
    name: "Eyeshadow Palette",
    price: 1200,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYBkRUwU7QbL-9LxadVKJ-aX5fej_ZN6vUcTZBspsW3R1MEJlBCF9ShwJ1AAp-9jC9ah3qPEFsj_8N8aLKHicbXpVvuVxdtjiE3KxoyBffjkQdyI3JSQmLIA",
  },
  {
    _id: 5,
    name: "Lip Gloss",
    price: 250,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqIv7v_ey0UKzZEoK5eeW6ixrwgB15Outj0f88Wuim-QOvz3d1vnszeHgfY-WLf4VaIodUsjY54J-ZzA8f65JxhWDHwcBnhg",
  },

  // GROCERY (added Grapes instead of Mascara)
  {
    _id: 6,
    name: "Grapes",
    price: 400,
    category: "Grocery",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShixpGAxwozvt75Y5vROZGhvnb_APqgcMwbfLoOM9w5fRWRQLhZj5E67tbykNN4UXlMhLoy8Cc1O8WdwPlFhFUhXGC_6l_tTdV5tPHMqKwb4LhL17i6tU_wTE",
  },

  // CLOTHING
  {
    _id: 7,
    name: "Kids Shirt",
    price: 350,
    category: "Clothing",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUaVXliHqPGc9D9km3e4RBqCoNJG51aoK_EqJptgfgn0pHGBGKiiq3bTd-GyT36renYP_HnPa7Y_3vlqHTCO5iZoEKECjEn4l9VYO-adjqfWTbHwCTzbSr9Nw",
  },
  {
    _id: 8,
    name: "Frock",
    price: 500,
    category: "Clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgM-EA9k-PrB5bdf5JfW2AYQ6LxM1_3-mgnoadic7iWbyFZ7tvyjiWNvPtkEzdYfrUUV_ErgQ4SwQJrXi55mAh3nWKsW2jI-JAQj7ex2K2uXW5HBsMoC7FPs0",
  },
  {
    _id: 9,
    name: "Frock",
    price: 600,
    category: "Clothing",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsq9yiuwkuCetOpfdgLeb-UsaTNLMQ2ngPquixxjglaRKf6UdkcHqLS-b77ckLkOXtRjNk_6DR5QFqUHzzMztvlgCvyCWsnvj7c3jo96zyPB_zrDUM7BdWJA",
  },
  {
    _id: 10,
    name: "Kids Dhothi",
    price: 450,
    category: "Clothing",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6FK8sHyaMGBGsQfWlDSDVu014-5FxcBTx6iy8qFX9fviNUKw2UiofOIVqh4Mn2uOTsVQ4g4G1eOiJZHQt0Rv7mB05NV-Wuylrq91NrfH6KRL34UF5Ml7m",
  },
  {
    _id: 11,
    name: "Shirt",
    price: 250,
    category: "Clothing",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgCGSffDYX9wzbutZtpMbzR7mRzqafYp6R7mk39NieQLnvy1lZP3obHhBSxwSohh_MOiAGsGWSmKKzZwfSMREz94mBEe6JPAn9mI0TIxfjOJ2nMjsteEgY",
  },

  // Remaining COSMETICS (unchanged)
  {
    _id: 12,
    name: "Body Lotion",
    price: 500,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDNt8i53y1aAp3xpsAeQu1Mf9udDXh1PscUx1h41G2EBmPMJvOLc4RGtu1PEbbFYljiLmtAo3-aFXRZIoWAOiuTuy8NjrulODLcjFAQ2tDv0k5dgxFvbkxMUQ",
  },
  {
    _id: 13,
    name: "Face Wash",
    price: 300,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUaVXliHqPGc9D9km3e4RBqCoNJG51aoK_EqJptgfgn0pHGBGKiiq3bTd-GyT36renYP_HnPa7Y_3vlqHTCO5iZoEKECjEn4l9VYO-adjqfWTbHwCTzbSr9Nw",
  },
  {
    _id: 14,
    name: "Sunscreen",
    price: 500,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYBkRUwU7QbL-9LxadVKJ-aX5fej_ZN6vUcTZBspsW3R1MEJlBCF9ShwJ1AAp-9jC9ah3qPEFsj_8N8aLKHicbXpVvuVxdtjiE3KxoyBffjkQdyI3JSQmLIA",
  },
  {
    _id: 15,
    name: "Deodorant",
    price: 350,
    category: "Cosmetics",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgM-EA9k-PrB5bdf5JfW2AYQ6LxM1_3-mgnoadic7iWbyFZ7tvyjiWNvPtkEzdYfrUUV_ErgQ4SwQJrXi55mAh3nWKsW2jI-JAQj7ex2K2uXW5HBsMoC7FPs0",
  },

  // GROCERY (original items remain + Grapes added above)
  {
    _id: 16,
    name: "Wheat Flour (1kg)",
    price: 50,
    category: "Grocery",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjGmdm81GnWCWma-9CF72_6iVs05Qyftkw5vQ-X3l14-2wZj9-J4VPmsIkT7JO0C1OVAZL6CMLMICILBwXYyq_IxwLyL4H-ThRsjVxPEzed_ySKRuvFcI_",
  },
  {
    _id: 17,
    name: "Rice (1kg)",
    price: 80,
    category: "Grocery",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1qHXI2gPjLde29O4rUn-4veFr60j3S6EcIzzWMqY-nk25QyRIVkPygLe_UO0xo7pmBZ-gJrXyW0DSt74OQf0HAS5zUfPAgmPfJ-1Vq_Z62f62N2El4r6Dk50",
  },
  {
    _id: 18,
    name: "Carrot (1kg)",
    price: 70,
    category: "Grocery",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpQQs9d9HPVZq7B9EYtp_g4sWh4SEDyJLtCGVv0U9Z4d64uP3ohf9W2N4p0NSktP7lMs4XYeu34m1oHYdQvxS5eb78y25u",
  },
  {
    _id: 19,
    name: "Tomatoes (1kg)",
    price: 60,
    category: "Grocery",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRc7f9zSluhdCNED5zLm_9pdaFNePM_jGkzeXnajpV4_ZL91VwP6Wr_4Z-UfPCP3xsodf3mNBmqlD7SlqNONuFDJFAsS8SxWZ7cdbh1bK6nF9euQFMOGTXU0Q",
  },
  {
    _id: 20,
    name: "Cauliflower (1kg)",
    price: 90,
    category: "Grocery",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQuH-3-6s8ibwEqA_G2Hj1yJ9Y-OSA8SaBwvWnCk9n8T1qLiGVYTT4yHrGxXzwvErEBhelHZx7G1dpBVDPg-U0KHqG1pxyO35SKh_U182g",
  },
];

  

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const categories = ["Cosmetics", "Grocery", "Clothing"];

  return (
    <div className="p-8 bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        User Product Portal
      </h1>

      {/* Cart */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-400 pb-2">
          🛒 Cart ({cart.length})
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
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
        )}
        {cart.length > 0 && (
          <p className="text-xl font-bold text-right text-indigo-700">
            Total: ₹{totalPrice}
          </p>
        )}
      </div>

      {/* Products */}
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
