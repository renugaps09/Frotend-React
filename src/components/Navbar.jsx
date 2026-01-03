import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <h1 className="font-bold text-xl">SCUPLX</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/delivery">Delivery</Link>
    </nav>
  );
}

export default Navbar;
