import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import DeliveryForm from "../pages/DeliveryForm";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

// BOOK IMPORTS
import BookPage from "../pages/BookPage";
import BookForm from "../components/BookForm";

// PRODUCT FLOW IMPORTS
import ProductLoginSelect from "../pages/ProductLoginSelect";
import ProductAdminLogin from "../pages/ProductAdminLogin";
import ProductUserLogin from "../pages/ProductUserLogin";
import AdminProducts from "../pages/AdminProducts";
import UserProducts from "../pages/UserProducts";

// ✅ NEW: Email verification page
import VerifyEmailPage from "../pages/VerifyEmailPage";

function Router() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("token")));

  return (
    <BrowserRouter>

      {/* Navbar only when logged in */}
      {isAuth && <Navbar setIsAuth={setIsAuth} />}

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" replace />}
        />

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= EMAIL VERIFICATION ================= */}
        <Route path="/verify-email" element={<VerifyEmailPage />} />

        {/* ================= PRODUCTS FLOW ================= */}
        <Route
          path="/products"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProductLoginSelect />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-admin-login"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProductAdminLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-user-login"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProductUserLogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AdminProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-products"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <UserProducts />
            </ProtectedRoute>
          }
        />

        {/* ================= DELIVERY ================= */}
        <Route
          path="/delivery"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <DeliveryForm />
            </ProtectedRoute>
          }
        />

        {/* ================= STUDENTS ================= */}
        <Route
          path="/students"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <StudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students/add"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <StudentForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students/edit/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <StudentForm />
            </ProtectedRoute>
          }
        />

        {/* ================= BOOKS ================= */}
        <Route
          path="/books"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <BookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/add"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <BookForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/edit/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <BookForm />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;