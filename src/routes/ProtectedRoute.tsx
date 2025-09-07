import React, { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    allowedRoles &&
    user?.role &&
    !allowedRoles.includes(user.role)
  ) {
    // Redirect users lacking permission to /unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  // Authorized, show the protected page/component
  return children;
};

export default ProtectedRoute;
