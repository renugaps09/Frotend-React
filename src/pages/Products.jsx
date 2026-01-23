import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // ✅ for redirect

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          // ✅ If unauthorized, remove token & redirect to login
          localStorage.removeItem("token");
          alert("Session expired or not logged in. Please login.");
          navigate("/login", { replace: true });
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };

    fetchProducts();
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded shadow hover:shadow-lg transition">
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="text-xl font-bold mt-2">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
