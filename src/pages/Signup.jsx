import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupBackground from "../components/SignupBackground";
import { signupUser } from "../api/signup";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await signupUser({
        name: form.name,
        email: form.email,
        password: form.password
      });

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <SignupBackground>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl w-96 p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create Account 🛍️
          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">
            Signup to start shopping
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleSignup}>
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.password}
              onChange={handleChange}
            />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Signup
            </button>
          </form>

          <p className="text-xs text-center mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-600 cursor-pointer font-medium"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </SignupBackground>
  );
}

export default Signup;
