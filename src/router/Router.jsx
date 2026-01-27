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

function Router() {
  const [isAuth, setIsAuth] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <BrowserRouter>
      {/* Show Navbar ONLY when logged in */}
      {isAuth && <Navbar setIsAuth={setIsAuth} />}

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" replace />}
        />

        {/* Public routes */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/password" element={<PasswordInput />} />

        {/* Protected routes */}
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

        {/* Students routes */}
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
