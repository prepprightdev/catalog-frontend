import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { logout } from "../features/auth/authSlice";
import { navbarItems } from "../data/navbarItems";
import { UserRole } from "../types/UserRoles";

interface NavbarProps {
  role: UserRole;
}

const Navbar: React.FC<NavbarProps> = ({ role }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass =
    "text-primary border-b-2 border-primary font-semibold";
  const inactiveClass = "text-black font-medium hover:text-primary transition";

  // Get authentication status from Redux
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-primary font-bold text-lg">PreppRight.com</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navbarItems
            .filter((item) => item.roles.includes(role))
            .map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                {item.name}
              </NavLink>
            ))}
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 text-sm w-52"
          />
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-2">
          {!isAuthenticated ? (
            <>
              <NavLink
                to="/login"
                className="font-medium text-black hover:text-primary px-2 py-1"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent transition"
              >
                Sign up
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="font-medium text-black hover:text-primary px-2 py-1 bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile hamburger trigger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow">
          {navbarItems
            .filter((item) => item.roles.includes(role))
            .map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "block text-primary font-semibold py-1"
                    : "block text-black font-medium hover:text-primary py-1"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full mt-2 rounded-md border border-gray-200 px-3 py-2 bg-gray-50 text-sm"
          />
          <div className="flex space-x-2">
            {!isAuthenticated ? (
              <>
                <NavLink
                  to="/login"
                  className="text-black hover:text-primary px-2 py-1 min-w-max"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent min-w-max"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign up
                </NavLink>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent transition"
              >
                Logout
              </button>

            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
