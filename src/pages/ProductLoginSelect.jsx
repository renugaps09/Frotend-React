import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductLoginSelect() {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔹 Dummy credentials
    if (
      role === "admin" &&
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      navigate("/admin-products");   // ✅ MATCHES ROUTER
    } 
    else if (
      role === "user" &&
      email === "user@gmail.com" &&
      password === "user123"
    ) {
      navigate("/user-products");   // ✅ MATCHES ROUTER
    } 
    else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">

      <div className="backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl rounded-3xl p-12 w-[380px] text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Product Login
        </h1>

        <form onSubmit={handleLogin}>

          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mb-4 p-2 rounded-xl border"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 p-2 rounded-xl border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mb-6 p-2 rounded-xl border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition duration-300 shadow-md"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}
