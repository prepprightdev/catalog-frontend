// src/data/mockData.ts

export type UserRole = "student" | "instructor" | "support" | "admin";

export interface User {
  id: number;
  username: string;
  password: string; // plaintext for mock only
  role: UserRole;
  email: string;
  fullName: string;
}

// Mock database array of users
export const mockUsers: User[] = [
  {
    id: 1,
    username: "student1",
    password: "password123",
    role: "student",
    email: "student1@example.com",
    fullName: "Student One",
  },
  {
    id: 2,
    username: "instructor1",
    password: "password123",
    role: "instructor",
    email: "instructor1@example.com",
    fullName: "Instructor One",
  },
  {
    id: 3,
    username: "support1",
    password: "password123",
    role: "support",
    email: "support1@example.com",
    fullName: "Support User",
  },
  {
    id: 4,
    username: "admin1",
    password: "password123",
    role: "admin",
    email: "admin1@example.com",
    fullName: "Admin User",
  },
];

// Simulate login function
export function loginUser(
  username: string,
  password: string
): User | null {
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
}

// Simulate registration function
export function registerUser(
  username: string,
  password: string,
  role: UserRole,
  email: string,
  fullName: string
): User | { error: string } {
  if (mockUsers.find((u) => u.username === username)) {
    return { error: "Username already exists" };
  }
  const newUser: User = {
    id: mockUsers.length + 1,
    username,
    password,
    role,
    email,
    fullName,
  };
  mockUsers.push(newUser);
  return newUser;
}




