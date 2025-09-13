// Global Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin' | 'support';
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  studentsCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  instructor: Instructor;
  features: string[];
  curriculum: Lesson[];
  createdAt: string;
  updatedAt: string;
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  bio?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
  type: 'video' | 'text' | 'quiz';
}

export interface PaymentOption {
  id: 'full' | 'installment';
  name: string;
  description: string;
  amount: number;
  totalAmount: number;
  installments?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}

export type Theme = 'light' | 'dark';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface CourseState {
  courses: Course[];
  selectedCourse: Course | null;
  isLoading: boolean;
  error: string | null;
  filters: CourseFilters;
}

export interface CourseFilters {
  category?: string;
  level?: string;
  priceRange?: [number, number];
  rating?: number;
  search?: string;
}