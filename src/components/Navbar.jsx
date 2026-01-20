import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./Search";
import Location from "./Location";

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="font-bold text-lg cursor-pointer"
        >
          Sculpx Store
        </div>

        {/* LOCATION */}
        <Location />

        {/* SEARCH */}
        <div className="flex-1 max-w-xl">
          <Search />
        </div>

        {/* AUTH */}
        {!isLoggedIn ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-medium hover:text-purple-600"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="text-sm font-medium border border-gray-300 px-3 py-1 rounded hover:bg-gray-100"
            >
              Signup
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="text-sm font-medium hover:text-red-500"
          >
            Logout
          </button>
        )}

        {/* CART */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <AiOutlineShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#6B4F3F] text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
