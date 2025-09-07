import React, { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { fetchFeaturedCourses } from "../../features/course/courseSlice";
import CourseCard from "../../features/course/CourseCard"; // adjust path if needed
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import type { Course } from "../../types/Course";

const FeaturedCourses: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const { courses, isLoading } = useAppSelector((state:RootState) => state.courses);

  useEffect(() => {
    dispatch(fetchFeaturedCourses());
  }, [dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Launch a new career in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow font-extrabold">
  3 months
</span>

          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a structured approach to learning with our most popular courses. Start building valuable skills today.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {courses.slice(0, 6).map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-teal-500/50"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

FeaturedCourses.displayName = "FeaturedCourses";

export default FeaturedCourses;
