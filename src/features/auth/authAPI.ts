// Example mock API calls related to authentication

import type { User, UserRole } from "../../data/mockData";
import { loginUser, registerUser } from "../../data/mockData";

export async function login(username: string, password: string): Promise<User | null> {
  // Simulate async API call with mock data
  return new Promise((resolve) => {
    const user = loginUser(username, password);
    setTimeout(() => resolve(user), 500);
  });
}

export async function register(
  username: string,
  password: string,
  role: UserRole,
  email: string,
  fullName: string
): Promise<User | { error: string }> {
  return new Promise((resolve) => {
    const result = registerUser(username, password, role, email, fullName);
    setTimeout(() => resolve(result), 500);
  });
}
