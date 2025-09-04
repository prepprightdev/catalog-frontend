import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser as mockRegisterUser } from "../../data/mockData";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"student" | "instructor" | "support" | "admin">("student");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password || !email || !fullName) {
      setError("All fields are required");
      return;
    }
    const result = mockRegisterUser(username, password, role, email, fullName);
    if ("error" in result) {
      setError(result.error);
    } else {
      setError("");
      // Auto-login after registration
      dispatch(loginSuccess(result));
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 max-w-md w-full rounded-xl shadow-lg p-8">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-primary font-bold text-2xl">PreppRight.com</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">Create Account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join us and start your learning journey
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          {error && <div className="text-red-500 text-center">{error}</div>}

          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
              placeholder="Choose a username"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as typeof role)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="support">Support</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white font-semibold py-2 rounded-xl shadow text-base transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Already have an account?
          <a href="/login" className="text-primary font-medium hover:underline ml-1">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
