// src/mock/mockInstructorData.ts
export interface MockInstructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  bio?: string;
}

export const mockInstructors: MockInstructor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/3782218/pexels-photo-3782218.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    title: "Senior React Developer",
    rating: 4.9,
    studentsCount: 12547,
    coursesCount: 8,
    bio: "Experienced React developer with 8+ years in the industry."
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    title: "Full Stack Developer",
    rating: 4.8,
    studentsCount: 8930,
    coursesCount: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    title: "Senior UX Designer",
    rating: 4.9,
    studentsCount: 15670,
    coursesCount: 12,
  },
  {
    id: "4",
    name: "David Kumar",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    title: "Data Scientist",
    rating: 4.7,
    studentsCount: 7890,
    coursesCount: 6,
  }
];
