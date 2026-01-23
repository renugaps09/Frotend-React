import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PasswordInput from "../components/PasswordInput";
import { signupUser } from "../api/auth";

export default function Signup({ setIsAuth }) {
  // Store form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Used to redirect user after signup
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password match
    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      // Call backend signup API
      const res = await signupUser(form);

      // Save token in localStorage
      localStorage.setItem("token", res.accessToken);

      // ⭐ Tell Router user is logged in
      setIsAuth(true);

      alert("Signup successful");

      // Redirect to Home page
      navigate("/", { replace: true });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Name"
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="mb-3">
          <PasswordInput
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <PasswordInput
            placeholder="Confirm Password"
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Signup
        </button>

        <p className="text-sm mt-3">
          Already have an account?{" "}
          <a className="text-blue-500" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
