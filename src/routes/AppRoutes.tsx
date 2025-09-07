import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterForm from "../features/auth/RegisterForm";
import AdminPage from "../pages/AdminPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../features/auth/LoginForm";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import QuizPage from "../pages/QuizPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
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


      <Route 
  path="/quiz" 
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizPage />
    </ProtectedRoute>
  } 
/>

      {/* Unauthorized Route */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Not Found Route: always LAST */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
