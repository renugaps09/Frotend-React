// React hook to store form data
import { useState } from "react";

// Used to redirect user after login
import { useNavigate } from "react-router-dom";

// Password input component
import PasswordInput from "../components/PasswordInput";

// Backend API call
import { loginUser } from "../api/auth";

export default function Login({ setIsAuth }) {
  // Store email & password values
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Used to redirect user
  const navigate = useNavigate();

  // Runs when Login button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page refresh

    try {
      // Send login data to backend
      const res = await loginUser(form);

      // Save token in localStorage
      localStorage.setItem("token", res.accessToken);

      // ⭐ VERY IMPORTANT ⭐
      // Tell Router: user is now logged in
      setIsAuth(true);

      // Inform user
      alert("Login successful");

      // Redirect to Home page
      navigate("/", { replace: true });
    } catch (err) {
      // Show error if login fails
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Email input */}
        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* Password input */}
        <div className="mb-3">
          <PasswordInput
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <p className="text-sm mt-3">
          Don't have an account?{" "}
          <a className="text-blue-500" href="/signup">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}
