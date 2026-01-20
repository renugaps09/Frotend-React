import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import DeliveryForm from "../pages/DeliveryForm";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import LocationPage from "../pages/LocationPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

import ProtectedRoute from "../auth/ProtectedRoute";

function Router() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/delivery"
          element={
            <ProtectedRoute>
              <DeliveryForm />
            </ProtectedRoute>
          }
        />

        {/* CATEGORY ROUTES */}
        <Route path="/category/:name" element={<Categories />} />
        <Route
          path="/category/:category/product/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </>
  );
}

export default Router;
