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

export interface CurriculumItem {
  id: string;
  title: string;
  duration: string;
  type: string; // e.g. "video", "quiz"
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
  level: string;
  category: string;
  instructor: Instructor;
  features: string[];
  curriculum: CurriculumItem[];
  createdAt: string;
  updatedAt: string;
}
