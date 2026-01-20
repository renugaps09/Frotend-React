import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import { loginUser } from "../api/login";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AnimatedBackground>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl w-96 p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome Back 🛒
          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">
            Login to continue shopping
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-center mt-6">
            New here?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-600 cursor-pointer font-medium"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default Login;
