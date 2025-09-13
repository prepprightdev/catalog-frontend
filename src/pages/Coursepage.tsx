import React, { useEffect, memo, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchCourses, setFilters, clearFilters } from '../features/course/courseSlice';
import CourseFilters from '../components/Courses/coursefilters';
import CourseListItem from '../components/Courses/CourseListItem';

const CoursesPage: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { courses, isLoading, filters, hasLoaded } = useAppSelector((state) => state.courses);

  const [filtersOpen, setFiltersOpen] = useState(false);

  // Body scroll lock when modal open
  useEffect(() => {
    if (filtersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [filtersOpen]);

  useEffect(() => {
    if (!hasLoaded) {
      dispatch(fetchCourses());
    }
    const urlFilters: any = {};
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const level = searchParams.get('level');
    if (search) urlFilters.search = search;
    if (category) urlFilters.category = category;
    if (level) urlFilters.level = level;
    if (Object.keys(urlFilters).length > 0) {
      dispatch(setFilters(urlFilters));
    }
    // eslint-disable-next-line
  }, [dispatch, searchParams, hasLoaded]);

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower)
      );
    }
    if (filters.category) {
      filtered = filtered.filter(course =>
        course.category.toLowerCase() === filters.category!.toLowerCase()
      );
    }
    if (filters.level) {
      filtered = filtered.filter(course => course.level === filters.level);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(course => course.price >= min && course.price <= max);
    }
    if (filters.rating) {
      filtered = filtered.filter(course => course.rating >= filters.rating!);
    }
    return filtered;
  }, [courses, filters]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (isLoading) {
    // ...your loading skeleton unchanged
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-grayLight mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of courses designed to help you 
            master new skills and advance your career.
          </p>
        </motion.div>

        {/* Search Bar and Filter Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search */}
          <div className="w-full md:max-w-sm relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
            <input
              type="text"
              value={filters.search || ''}
              onChange={(e) => dispatch(setFilters({ ...filters, search: e.target.value }))}
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-900 text-sm shadow focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          {/* Filter button */}
          <button
            onClick={() => setFiltersOpen(true)}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primaryDark transition-colors focus:outline-none"
          >
            Filter
          </button>
        </div>

        {/* Filter Modal */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="bg-gradient-to-br from-primary/90 to-yellow/60 shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto relative"
              >
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
                  aria-label="Close Filters"
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold text-white mb-4">Filter Courses</h2>
                <CourseFilters closeModal={() => setFiltersOpen(false)} showSearch={false} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count and Sort */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
            {filters.search && ` for "${filters.search}"`}
          </p>
          <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto">
            <option>Most Popular</option>
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>
        </motion.div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseListItem course={course} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-grayDark mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any courses matching your criteria. Try adjusting your filters.
              </p>
              <button
                onClick={() => dispatch(clearFilters())}
                className="px-6 py-3 bg-primary hover:bg-primaryDark text-white font-medium rounded-lg transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
});

CoursesPage.displayName = 'CoursesPage';
export default CoursesPage;
