export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
  email: string;
  fullName: string;
  role: string;
}

// Export empty to make module in case no other exports
export {};
