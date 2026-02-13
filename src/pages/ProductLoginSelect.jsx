import { useNavigate } from "react-router-dom";

export default function ProductLoginSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">

      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/40 border border-white/50 shadow-xl rounded-3xl p-12 w-[380px] text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Product Portal
        </h1>

        <p className="text-gray-600 mb-10">
          Choose your role to continue
        </p>

        {/* Admin Button */}
        <button
          onClick={() => navigate("/product-admin-login")}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-2xl transition duration-300 mb-5 shadow-md"
        >
          Admin Login
        </button>

        {/* User Button */}
        <button
          onClick={() => navigate("/product-user-login")}
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-2xl transition duration-300 shadow-md"
        >
          User Login
        </button>

      </div>

    </div>
  );
}
