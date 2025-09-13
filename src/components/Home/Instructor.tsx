import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen } from 'lucide-react';
import { mockInstructors } from '../../mock/mockInstructorData';

const Instructors: React.FC = memo(() => {
  // Carousel: all instructors in a scrollable row
  const instructors = mockInstructors;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-grayLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-grayDark mb-6">
            Meet our professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow font-extrabold">
              instructors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts who bring real-world experience and practical insights
            to every lesson.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-8 pb-4 md:grid md:grid-cols-4 md:overflow-visible"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              variants={itemVariants}
              className="min-w-[290px] max-w-xs w-full md:min-w-0 group flex-shrink-0"
            >
              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <motion.img
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.3 }}
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Expert
                  </div>
                </div>

                <h3 className="text-lg font-bold text-grayDark mb-1">
                  {instructor.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  {instructor.title}
                </p>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow fill-current" />
                    <span className="text-sm font-medium text-grayDark">
                      {instructor.rating} ({instructor.studentsCount.toLocaleString()} students)
                    </span>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{(instructor.studentsCount / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{instructor.coursesCount} Courses</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full px-4 py-2 bg-primary hover:bg-primaryDark text-white font-medium rounded-lg transition-colors duration-200 opacity-0 group-hover:opacity-100"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Instructors.displayName = 'Instructors';
export default Instructors;
