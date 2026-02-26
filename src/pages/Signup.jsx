import { useState } from "react";
import { signupUser } from "../api/auth";
import PasswordInput from "../components/PasswordInput";   // ✅ ADD THIS LINE

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [verificationNotice, setVerificationNotice] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await signupUser(form);
      setVerificationNotice(true);
    } catch (err) {
      alert(err.message || "Signup failed");
    }
  };

  if (verificationNotice) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl w-96 shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Signup Successful!</h2>
          <p className="mb-4">
            We have sent a verification email to <strong>{form.email}</strong>.
          </p>
          <p>
            Click the <strong>"Verify Now"</strong> button in your email to activate your account, then you can login.
          </p>
        </div>
      </div>
    );
  }

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
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"   // ✅ small improvement
          className="w-full p-2 border rounded mb-3"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div className="mb-3">
          <PasswordInput
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <PasswordInput
            placeholder="Confirm Password"
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
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