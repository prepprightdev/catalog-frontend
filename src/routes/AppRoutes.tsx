import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "../features/auth/RegisterForm";
import AdminPage from "../pages/AdminPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../features/auth/LoginForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm  />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<HomePage />} />

      {/* Protected route example */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      {/* Add more protected routes similarly */}
    </Routes>
  );
}
export default AppRoutes;
