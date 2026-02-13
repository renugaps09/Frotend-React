import { useNavigate } from "react-router-dom";

export default function ProductUserLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("User Login Success");

    navigate("/user-products");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">User Product Login</h1>

      <button
        onClick={handleLogin}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg"
      >
        Login as User
      </button>
    </div>
  );
}
