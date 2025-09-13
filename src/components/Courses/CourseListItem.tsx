import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, ChevronRight } from 'lucide-react';
import { Course } from '../../types/types';

interface CourseListItemProps {
  course: Course;
}

const CourseListItem: React.FC<CourseListItemProps> = memo(({ course }) => {
  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  }, []);

  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  // Determine level badge color
  const levelColor =
    course.level === 'Beginner'
      ? 'bg-primary text-white'
      : course.level === 'Intermediate'
      ? 'bg-yellow text-grayDark'
      : 'bg-grayDark text-white';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-grayLight"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Course Image */}
        <div className="relative w-full lg:w-1/3 h-40 lg:h-auto overflow-hidden bg-grayLight rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none flex-shrink-0">
  <img
    src={course.image}
    alt={course.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Level Badge - Top Left */}
  <div
    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow ${levelColor}`}
  >
    {course.level}
  </div>

  {/* OFF Badge - Top Right */}
  {discountPercentage > 0 && (
    <div className="absolute top-3 right-3 bg-yellow text-grayDark text-xs font-bold px-2 py-1 rounded shadow">
      {discountPercentage}% OFF
    </div>
  )}
</div>


        {/* Course Content */}
        <div className="flex-1 p-6 lg:p-8 bg-white">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1">
                {/* Category and Rating */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-primary text-white px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow fill-current" />
                    <span className="text-sm font-medium text-grayDark">{course.rating}</span>
                    <span className="text-sm text-gray-400">
                      ({course.studentsCount.toLocaleString()})
                    </span>
                  </div>
                </div>

                {/* Title */}
                <Link to={`/courses/${course.id}`}>
                  <h3 className="text-2xl font-bold text-grayDark mb-2 hover:text-primary transition-colors duration-200 line-clamp-2">
                    {course.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.shortDescription}
                </p>
              </div>

              {/* Price Section - Mobile/Tablet */}
              <div className="sm:hidden flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(course.price)}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                  )}
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className="px-4 py-2 bg-primary hover:bg-primaryDark text-white text-sm font-medium rounded-lg flex items-center space-x-1 transition-colors duration-200"
                >
                  <span>View</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-grayLight"
              />
              <div>
                <p className="text-sm font-bold text-grayDark">{course.instructor.name}</p>
                <p className="text-xs text-gray-500">{course.instructor.title}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.studentsCount.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>{course.curriculum.length} lessons</span>
              </div>
            </div>

            {/* Bottom Section - Desktop */}
            <div className="hidden sm:flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3">
                <span className="text-2xl lg:text-3xl font-bold text-primary">
                  {formatPrice(course.price)}
                </span>
                {course.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(course.originalPrice)}
                  </span>
                )}
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="px-6 py-3 bg-primary hover:bg-primaryDark text-white font-semibold rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Course</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

CourseListItem.displayName = 'CourseListItem';
export default CourseListItem;
