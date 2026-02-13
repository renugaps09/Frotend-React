import React, { useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    // 15 Clothing products
    { _id: 1, name: "Women Dress", price: 900, category: "Clothing", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP5i7iF8oLgKW0Xn7VPqoeNIWBTb1iUWa5gt97klL67IiaGrfRTC9gBwsmP3zzEy4lo8Nhw6sesvVpPO08-KD_czk1TkffzJwjgi_mmil08tN8Igx3AYjs_A" },
    { _id: 2, name: "Men Shirt", price: 700, category: "Clothing", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ91PqpcULXD2GO9ejvPeesYEsZzwTzQZx7GYG8fIeY1Lm-ZlOI79ONO2tw04ytCCkz5nv87ThAP0jOD3KDR8peDfPNjtsiz78BosvgmXqroUYetpFyG2zz" },
    { _id: 3, name: "Kurti", price: 300, category: "Clothing", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuvVE1PhFQU3im3eGh-HMIOA8PxN4TUiQxtXes1BlBJWIsaZVK8V_x0zkUuVeKWvRMHvq5s6ryHiyzee680cc4oUNjakDj5abbJRPRtJzV6NHGX6TDbgb_" },
    { _id: 4, name: "T-Shirt", price: 500, category: "Clothing", image: "https://images.unsplash.com/photo-1618354698439-2c1759c23f7b?auto=format&fit=crop&w=400&h=400" },
    { _id: 5, name: "Skirt", price: 700, category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&h=400" },
    { _id: 6, name: "Jacket", price: 1500, category: "Clothing", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&fit=crop&w=400&h=400" },
    { _id: 7, name: "Socks", price: 150, category: "Clothing", image: "https://images.unsplash.com/photo-1583337130417-49d3e3d20e3b?auto=format&fit=crop&w=400&h=400" },
    { _id: 8, name: "Belt", price: 300, category: "Clothing", image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&h=400" },
    { _id: 9, name: "Jeans", price: 1200, category: "Clothing", image: "https://images.unsplash.com/photo-1618354698439-2c1759c23f7b?auto=format&fit=crop&w=400&h=400" },
    { _id: 10, name: "Sweater", price: 1100, category: "Clothing", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&fit=crop&w=400&h=400" },
    { _id: 11, name: "Tank Top", price: 400, category: "Clothing", image: "https://images.unsplash.com/photo-1618354698439-2c1759c23f7b?auto=format&fit=crop&w=400&h=400" },
    { _id: 12, name: "Cap", price: 250, category: "Clothing", image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&h=400" },
    { _id: 13, name: "Scarf", price: 350, category: "Clothing", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&fit=crop&w=400&h=400" },
    { _id: 14, name: "Chinos", price: 1400, category: "Clothing", image: "https://images.unsplash.com/photo-1618354698439-2c1759c23f7b?auto=format&fit=crop&w=400&h=400" },
    { _id: 15, name: "Hoodie", price: 1200, category: "Clothing", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&fit=crop&w=400&h=400" },

    // 15 Cosmetics
    { _id: 16, name: "Lipstick", price: 300, category: "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" },
    { _id: 17, name: "Perfume", price: 1500, category: "Cosmetics", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTP4bM45BDOO913Gosz1Q4iWbEmZjzsBISqr31uSVCHnLIXS1m1rOp8NNGEr12m2bpRVMzNG3kWaa0GzdezwsR5T2Wg2_ZijBhyPxp4hoorrzbrogyO_nfmm3M" },
    { _id: 18, name: "Eyeshadow Palette", price: 1200, category: "Cosmetics", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYMk2adGhuY_UFjwNY5qm3NNpg2gOHFjhTTZDESwmJkn0eGFYgEFfCKnfo4ms74NzbEoHC2zFB8P7zFlbOZ-tw_JVPwz9pkfffXQtNQ-MszPIA4cAsqS85IjE" },
    { _id: 19, name: "Nail Polish", price: 250, category: "Cosmetics", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGxqBaWjvqk5MT4nBO0q1ELLQorQZZl7c6Zijm-nLXyHLPwlnTtMG1zmj8q5owPb16xF-Ug3GaRvbrtmj0YTP9Et5JC0nZYEq13AQNJ-9TzQSQ8KDdfJeP" },
    { _id: 20, name: "Face Powder", price: 600, category: "Cosmetics", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_ITQsaxl3b_MunX6U-O3EFoocdW5eJdJMCm1qZ1jAH-D5-MF7JvCUYYpLtBKf8MldviKX9fMm5lITLYCUrXs0RhjvYrGWUg_f7Y_hbXzz8NAZka6YvX9VrA" },
    { _id: 21, name: "Foundation", price: 800, category: "Cosmetics", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxblZ-CCgPe1VJlpJUYZKLVetD50MgYJzd5fje9BQNa3Kh0CMfjrt8N7LNCmOaK6bRTB30kG2VMbPPNppFRa75OyLLCl7XOGoGIE3zRA3st_Eqzdel26tAQw" },
    { _id: 22, name: "Blush", price: 350, category: "Cosmetics", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQV1e03iAwVp6oOASN94wIW4mka-GfXIvhdViRGP6VXd7osFInlQ6dHNcfScJ6Ck10D74JiUlIQjk2B8fSy0fgc3TwdK8S5fWbXtBf7Km7WztsavO_wvI4o" },
    { _id: 23, name: "Mascara", price: 400, category: "Cosmetics", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3N7q2QH8_t7oF7_eMBD4nWUY9XpovrGixSZ6qWNU34zPZxDZKGG1ue1_QOTGBJAzgIIavhoABp0BaFHuUBo74uRQJHPnQcgbvW7oxNW-bV9UYmulZpCzHHw" },
    { _id: 24, name: "Lip Balm", price: 150, category: "Cosmetics", image: "https://m.media-amazon.com/images/I/41Euj7BhkvL._AC_UF1000,1000_QL80_.jpg" },
    { _id: 25, name: "Hand Cream", price: 250, category: "Cosmetics", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&w=400&h=400" },
    { _id: 26, name: "Body Lotion", price: 500, category: "Cosmetics", image: "https://images.unsplash.com/photo-1583337130417-49d3e3d20e3b?auto=format&w=400&h=400" },
    { _id: 27, name: "Face Cream", price: 450, category: "Cosmetics", image: "https://images.unsplash.com/photo-1602524819973-2d02b344f0d4?auto=format&w=400&h=400" },
    { _id: 28, name: "Hair Oil", price: 300, category: "Cosmetics", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&w=400&h=400" },
    { _id: 29, name: "Deodorant", price: 350, category: "Cosmetics", image: "https://images.unsplash.com/photo-1583337130417-49d3e3d20e3b?auto=format&w=400&h=400" },
    { _id: 30, name: "Sunscreen", price: 500, category: "Cosmetics", image: "https://images.unsplash.com/photo-1602524819973-2d02b344f0d4?auto=format&w=400&h=400" },

    // 15 Grocery products
    { _id: 31, name: "Rice (1kg)", price: 80, category: "Grocery", image: "https://images.unsplash.com/photo-1586363104869-fbaf0c04b50b?auto=format&w=400&h=400" },
    { _id: 32, name: "Wheat Flour (1kg)", price: 50, category: "Grocery", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX0zbuzVp3RzeE_nd0d03gJVeP4N0YKClBWjpmfJE1HlfMIr7uqpzU_PJyWgediqZ83KuyXi-srlbI-N2fegoE-zWaAXWExA" },
    { _id: 33, name: "Sugar (1kg)", price: 40, category: "Grocery", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeau6RxyWj6R5xnH8cTMuAjnjgCYfTZVMgB-q1zcBlTSgl-cWMSZm8-KqnU3PF8G419tAgPC3AFiDwkGJFXfrhJJDgkgcW1_6SlQd-JoE" },
    { _id: 34, name: "Salt (1kg)", price: 30, category: "Grocery", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWDpINCXD44LYC9MLW8vhrGRTZ9cdR7jPPmIREZydwTwtFpTlKVEjl5gNy75Mdo9i4JjyJHMJW9gB2h-cgUz8-cCIF3moYFoyiBGkx50_j113RFZ4_waDB" },
    { _id: 35, name: "Cooking Oil (1L)", price: 180, category: "Grocery", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRr40v85MQp0RvrwQ6uwHSmeiNCJN59mXzcSTQshDPHVAHuRRzfrlr6gGivzb0cygvcu0SxV7SttattLLvMYQAk_XtKWzURrTzfexIlnyTwZdftyNdqo1eutw" },
    { _id: 36, name: "Milk (1L)", price: 50, category: "Grocery", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSi29gqLZaOL7feya8V_dPyzgxx78OBy2upbxqH_bRimYqE6oJl48p33Shec2KBO6avxtv606oB9tW6PMbOVHgmFzXC8pLm21an6xXft6SbYGtcos6rUYT" },
    { _id: 37, name: "Bread (1 loaf)", price: 40, category: "Grocery", image: "https://images.unsplash.com/photo-1606312611993-d0e6c948b3a0?auto=format&w=400&h=400" },
    { _id: 38, name: "Eggs (12pcs)", price: 70, category: "Grocery", image: "https://images.unsplash.com/photo-1623507399841-3d1378dfe6bb?auto=format&w=400&h=400" },
    { _id: 39, name: "Cheese (200g)", price: 180, category: "Grocery", image: "https://images.unsplash.com/photo-1602524819973-2d02b344f0d4?auto=format&w=400&h=400" },
    { _id: 40, name: "Butter (200g)", price: 120, category: "Grocery", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&w=400&h=400" },
    { _id: 41, name: "Tea (1kg)", price: 400, category: "Grocery", image: "https://images.unsplash.com/photo-1586363104869-fbaf0c04b50b?auto=format&w=400&h=400" },
    { _id: 42, name: "Coffee (500g)", price: 600, category: "Grocery", image: "https://images.unsplash.com/photo-1606312611993-d0e6c948b3a0?auto=format&w=400&h=400" },
    { _id: 43, name: "Biscuits (200g)", price: 100, category: "Grocery", image: "https://images.unsplash.com/photo-1623507399841-3d1378dfe6bb?auto=format&w=400&h=400" },
    { _id: 44, name: "Jam (250g)", price: 180, category: "Grocery", image: "https://images.unsplash.com/photo-1602524819973-2d02b344f0d4?auto=format&w=400&h=400" },
    { _id: 45, name: "Honey (250g)", price: 300, category: "Grocery", image: "https://images.unsplash.com/photo-1612197524700-5e6b40b60cdb?auto=format&w=400&h=400" },
  ]);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", price: "", image: "", category: "Clothing" });

  const toggleForm = () => setShowForm(!showForm);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, image, category } = formData;
    if (!name || !price) return;

    const newProduct = {
      _id: Date.now(),
      name,
      price: parseInt(price),
      category: category || "Others",
      image: image || "https://via.placeholder.com/400",
    };

    setProducts([newProduct, ...products]);
    setFormData({ name: "", price: "", image: "", category: "Clothing" });
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p._id === id);
    const newName = prompt("Enter new product name:", product.name);
    const newPrice = prompt("Enter new product price:", product.price);
    const newImage = prompt("Enter new image URL:", product.image);
    const newCategory = prompt("Enter category:", product.category);
    if (!newName || !newPrice) return;

    setProducts(
      products.map((p) =>
        p._id === id
          ? { ...p, name: newName, price: parseInt(newPrice), image: newImage || product.image, category: newCategory || product.category }
          : p
      )
    );
  };

  const handleDelete = (id) => setProducts(products.filter((p) => p._id !== id));

  // Render products by category
  const categories = ["Clothing", "Cosmetics", "Grocery"];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#f8fbfd] via-[#eef6fa] to-[#ffffff] font-sans">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-wide">Admin Product Dashboard</h2>

      {/* Add Product Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleForm}
          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transition duration-300 font-semibold"
        >
          {showForm ? "Close Form ✖️" : "➕ Add Product"}
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg mb-10 max-w-2xl mx-auto flex flex-col gap-4">
          <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
          <select name="category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option>Clothing</option>
            <option>Cosmetics</option>
            <option>Grocery</option>
          </select>
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <button type="submit" className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transition duration-300 font-semibold">
            Add Product
          </button>
        </form>
      )}

      {/* Render Sections */}
      {categories.map((cat) => (
        <div key={cat} className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-gray-700 border-b pb-2">{cat} Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <div key={product._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col">
                  <img src={product.image || "https://via.placeholder.com/400"} alt={product.name} className="w-full h-56 object-cover hover:scale-105 transition duration-500" />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
                      <p className="text-indigo-600 font-bold text-lg mt-1">₹{product.price}</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => handleEdit(product._id)}
                        className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-xl hover:from-orange-500 hover:to-orange-600 transition duration-300 flex-1 font-medium text-sm"
                      >
                        🖊️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-red-700 transition duration-300 flex-1 font-medium text-sm"
                      >
                        ❌ Delete
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
