import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useAuth() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  return { user, isAuthenticated };
}

// Make this a module
export {};
