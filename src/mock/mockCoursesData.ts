// src/mock/mockCoursesData.ts
import { Course } from "../types/types";
export const mockCoursesData: Course[] = [
  {
    id: "1",
    title: "React Development Bootcamp",
    description: "Master React development with this comprehensive course covering hooks, state management, and modern best practices.",
    shortDescription: "Learn React from basics to advanced concepts with hands-on projects.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 79,
    originalPrice: 149,
    rating: 4.8,
    studentsCount: 2547,
    duration: "8 hours",
    level: "Intermediate",
    category: "Web Development",
    instructor: {
      id: "1",
      name: "Sarah Johnson", 
      avatar: "https://images.pexels.com/photos/3782218/pexels-photo-3782218.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Senior React Developer",
      rating: 4.9,
      studentsCount: 12547,
      coursesCount: 8,
      bio: "Experienced React developer with 8+ years in the industry."
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Mobile and desktop access",
      "Downloadable resources"
    ],
    curriculum: [
      {
        id: "1",
        title: "Introduction to React",
        duration: "45 minutes",
        type: "video"
      },
      {
        id: "2", 
        title: "Components and JSX",
        duration: "1 hour 30 minutes",
        type: "video"
      }
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T10:00:00Z"
  },
  {
    id: "2",
    title: "Node.js Backend Development",
    description: "Build scalable backend applications with Node.js, Express, and MongoDB. Learn API development, authentication, and deployment.",
    shortDescription: "Complete backend development course with Node.js and Express.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 89,
    originalPrice: 179,
    rating: 4.7,
    studentsCount: 1834,
    duration: "12 hours",
    level: "Intermediate",
    category: "Backend Development",
    instructor: {
      id: "2",
      name: "Michael Chen",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Full Stack Developer",
      rating: 4.8,
      studentsCount: 8930,
      coursesCount: 5
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Source code included",
      "Q&A support"
    ],
    curriculum: [
      {
        id: "1",
        title: "Node.js Fundamentals",
        duration: "1 hour",
        type: "video"
      },
      {
        id: "2",
        title: "Express.js Framework",
        duration: "2 hours",
        type: "video"
      }
    ],
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-18T10:00:00Z"
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    description: "Learn the fundamentals of user interface and user experience design. Create beautiful, functional designs using Figma.",
    shortDescription: "Master UI/UX design principles with hands-on projects in Figma.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 69,
    originalPrice: 129,
    rating: 4.9,
    studentsCount: 3421,
    duration: "10 hours",
    level: "Beginner",
    category: "Design",
    instructor: {
      id: "3",
      name: "Emily Rodriguez",
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Senior UX Designer",
      rating: 4.9,
      studentsCount: 15670,
      coursesCount: 12
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Design templates included",
      "Community access"
    ],
    curriculum: [
      {
        id: "1",
        title: "Design Principles",
        duration: "1 hour 15 minutes",
        type: "video"
      },
      {
        id: "2",
        title: "Figma Basics",
        duration: "2 hours",
        type: "video"
      }
    ],
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "4",
    title: "Python Data Science",
    description: "Dive into data science with Python. Learn pandas, numpy, matplotlib, and machine learning fundamentals.",
    shortDescription: "Comprehensive Python data science course with real-world projects.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 99,
    originalPrice: 199,
    rating: 4.6,
    studentsCount: 2156,
    duration: "15 hours",
    level: "Advanced",
    category: "Data Science",
    instructor: {
      id: "4",
      name: "David Kumar",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Data Scientist",
      rating: 4.7,
      studentsCount: 7890,
      coursesCount: 6
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Jupyter notebooks included",
      "Dataset downloads"
    ],
    curriculum: [
      {
        id: "1",
        title: "Python for Data Science",
        duration: "2 hours",
        type: "video"
      },
      {
        id: "2",
        title: "Data Analysis with Pandas",
        duration: "3 hours",
        type: "video"
      }
    ],
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-22T10:00:00Z"
  },
  {
    id: "5",
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile applications with Flutter and Dart. Learn to create apps for both iOS and Android.",
    shortDescription: "Create beautiful mobile apps with Flutter framework.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 95,
    originalPrice: 189,
    rating: 4.5,
    studentsCount: 1723,
    duration: "14 hours",
    level: "Intermediate",
    category: "Mobile Development",
    instructor: {
      id: "5",
      name: "Lisa Thompson",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Mobile App Developer",
      rating: 4.6,
      studentsCount: 5430,
      coursesCount: 4
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Source code included",
      "Mobile testing guide"
    ],
    curriculum: [
      {
        id: "1",
        title: "Flutter Introduction",
        duration: "1 hour 30 minutes",
        type: "video"
      },
      {
        id: "2",
        title: "Dart Programming",
        duration: "2 hours 30 minutes",
        type: "video"
      }
    ],
    createdAt: "2024-01-08T10:00:00Z",
    updatedAt: "2024-01-16T10:00:00Z"
  },
  {
    id: "6",
    title: "Digital Marketing Strategy",
    description: "Learn comprehensive digital marketing strategies including SEO, social media marketing, email campaigns, and analytics.",
    shortDescription: "Master digital marketing with proven strategies and tools.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    price: 59,
    originalPrice: 119,
    rating: 4.4,
    studentsCount: 4567,
    duration: "6 hours",
    level: "Beginner",
    category: "Marketing",
    instructor: {
      id: "6",
      name: "Alex Martinez",
      avatar: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      title: "Digital Marketing Expert",
      rating: 4.5,
      studentsCount: 18900,
      coursesCount: 15
    },
    features: [
      "Lifetime access",
      "Certificate of completion",
      "Marketing templates",
      "Case studies included"
    ],
    curriculum: [
      {
        id: "1",
        title: "Digital Marketing Fundamentals",
        duration: "1 hour",
        type: "video"
      },
      {
        id: "2",
        title: "SEO Strategies",
        duration: "1 hour 30 minutes",
        type: "video"
      }
    ],
    createdAt: "2024-01-03T10:00:00Z",
    updatedAt: "2024-01-14T10:00:00Z"
  }
];
