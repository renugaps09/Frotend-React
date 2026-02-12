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
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

// ✅ BOOK IMPORTS (ONLY ONCE)
import BookPage from "../pages/BookPage";
import BookForm from "../components/BookForm";

function Router() {
  const [isAuth, setIsAuth] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <BrowserRouter>
      {/* Show Navbar ONLY when logged in */}
      {isAuth && <Navbar setIsAuth={setIsAuth} />}

      <Routes>
        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" replace />}
        />

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/password" element={<PasswordInput />} />

        {/* ================= PRODUCTS ================= */}
        <Route
          path="/products"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Products />
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

        {/* ================= BOOKS (NEW CRUD) ================= */}
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
