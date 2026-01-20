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
      <div className="bg-white rounded-2xl shadow-xl w-96 p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Join Sculpx 🛍️
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSignup}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />

          <button type="submit">Signup</button>
        </form>
      </div>
    </SignupBackground>
  );
}

export default Signup;
