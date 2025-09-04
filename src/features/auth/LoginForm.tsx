import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "./authSlice";
import { loginUser } from "../../data/mockData";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("student1");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = loginUser(email, password);
    if (user) {
      dispatch(loginSuccess(user));
      setError("");
      navigate("/"); // Redirect to home/dashboard
    } else {
      dispatch(loginFailure("Invalid credentials"));
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
      style={{
        // backgroundImage: `url(${backgroundImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 max-w-md w-full rounded-xl shadow-lg p-8">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-2 mb-6">
          {/* <FiBook className="text-primary text-2xl" /> */}
          <span className="text-primary font-bold text-2xl">PreppRight.com</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to continue your learning journey
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center space-x-2 text-gray-600 text-sm">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-white font-semibold py-2 rounded-xl shadow text-base transition"
          >
            Sign In
          </button>
          {error && (
            <div className="text-red-500 text-sm my-2 text-center">{error}</div>
          )}
        </form>
        {/* Demo Credentials */}
        <div className="mt-6 bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-600">
          <span className="block font-semibold mb-1">Demo credentials:</span>
          <div>
            <span className="font-semibold text-primary">Student:</span> student1 | password123
          </div>
          <div>
            <span className="font-semibold text-primary">Instructor:</span> instructor1 | password123
          </div>
          <div>
            <span className="font-semibold text-primary">Admin:</span> admin1 | password123
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          Don't have an account?
          <a href="/register" className="text-primary font-medium hover:underline ml-1">Sign up</a>
        </div>
      </div>
    </div>
  );
}
