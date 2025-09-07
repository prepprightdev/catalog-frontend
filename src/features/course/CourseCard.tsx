import React from "react";
import type { Course } from "../../types/Course";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.shortDescription}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-primary font-semibold">${course.price}</span>
          {course.price < course.originalPrice && (
            <span className="text-sm line-through text-gray-400">${course.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <img src={course.instructor.avatar} alt={course.instructor.name} className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium">{course.instructor.name}</p>
            <p className="text-xs text-gray-400">{course.instructor.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
