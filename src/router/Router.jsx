import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Products from "../pages/Products";
import DeliveryForm from "../pages/DeliveryForm";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PasswordInput from "../components/PasswordInput";
import ProtectedRoute from "../components/ProtectedRoute";

function Router() {
  // ✅ React STATE (not normal variable)
  // Reads token once when app loads
  const [isAuth, setIsAuth] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <BrowserRouter>
      {/* ✅ Show Navbar ONLY when logged in */}
      {isAuth && <Navbar setIsAuth={setIsAuth} />}


      <Routes>
        {/* ✅ Home page is protected */}
        <Route
          path="/"
          element={
            isAuth ? <Home /> : <Navigate to="/login" replace />
          }
        />

        {/* 🔓 Public routes */}
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsAuth={setIsAuth} />}
        />
        <Route path="/password" element={<PasswordInput />} />

        {/* 🔒 Protected routes */}
        <Route
          path="/products"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <DeliveryForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
