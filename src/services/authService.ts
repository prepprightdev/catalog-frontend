// Placeholder for auth-related services, can be expanded for backend calls

import type { User, UserRole } from "../data/mockData";

export async function loginService(username: string, password: string): Promise<User | null> {
  // Replace with real API call later
  return null;
}

export async function registerService(
  username: string,
  password: string,
  role: UserRole,
  email: string,
  fullName: string
): Promise<User | { error: string }> {
  // Replace with real API call later
  return { error: "Not implemented" };
}

// Export empty to mark as module
export {};
