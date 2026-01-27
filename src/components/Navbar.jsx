import { Link, useNavigate } from "react-router-dom";

// ✅ Accept setIsAuth from Router
function Navbar({ setIsAuth }) {
  const navigate = useNavigate();

  // 🔑 Logout function
  const handleLogout = () => {
    // 1️⃣ Remove token from localStorage
    localStorage.removeItem("token");

    // 2️⃣ Update Router state so app knows user logged out
    setIsAuth(false);

    // 3️⃣ Redirect to login page
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Left side: Logo + links */}
      <div className="flex gap-6 items-center">
        <h1 className="font-bold text-xl">SCUPLX</h1>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/students">Students</Link>
      </div>

      {/* Right side: Logout */}
      <button
        onClick={handleLogout}
        className="px-4 py-1 rounded "
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
