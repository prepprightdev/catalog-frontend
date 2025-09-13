import React, { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setFilters, clearFilters } from '../../features/course/courseSlice';
import { CourseFilters as CourseFiltersType } from '../../types/types';

interface CourseFiltersProps {
  closeModal?: () => void;
  showSearch?: boolean;
}

const CourseFilters: React.FC<CourseFiltersProps> = memo(({ closeModal, showSearch = false }) => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.courses);

  const categories = [
    'All Categories',
    'Web Development',
    'Backend Development',
    'Design',
    'Data Science',
    'Mobile Development',
    'Marketing'
  ];

  const levels = [
    'All Levels',
    'Beginner',
    'Intermediate',
    'Advanced'
  ];

  const handleFilterChange = useCallback(
    (key: keyof CourseFiltersType, value: any) => {
      let newFilters = { ...filters };
      if (key === 'category' && value === 'All Categories') {
        delete newFilters.category;
      } else if (key === 'level' && value === 'All Levels') {
        delete newFilters.level;
      } else {
        newFilters[key] = value;
      }
      dispatch(setFilters(newFilters));
      if (closeModal) closeModal();
    },
    [filters, dispatch, closeModal]
  );

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
    if (closeModal) closeModal();
  }, [dispatch, closeModal]);

  const hasActiveFilters = Object.keys(filters).length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary/90 to-yellow/60 rounded-xl p-6 shadow-lg"
    >
      {hasActiveFilters && (
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClearFilters}
            className="flex items-center space-x-1 text-sm text-white hover:text-yellow transition-colors duration-200"
          >
            <X className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Category</label>
          <select
            value={filters.category || 'All Categories'}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 bg-white/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow transition-all duration-200"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Level</label>
          <select
            value={filters.level || 'All Levels'}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="w-full px-3 py-2 bg-white/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow transition-all duration-200"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">Price Range</label>
          <select
            value={
              filters.priceRange 
                ? `${filters.priceRange[0]}-${filters.priceRange[1]}`
                : 'all'
            }
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'all') {
                let newFilters = { ...filters };
                delete newFilters.priceRange;
                dispatch(setFilters(newFilters));
              } else {
                const [min, max] = value.split('-').map(Number);
                handleFilterChange('priceRange', [min, max]);
              }
            }}
            className="w-full px-3 py-2 bg-white/90 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow transition-all duration-200"
          >
            <option value="all">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-1000">Above $200</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
});

CourseFilters.displayName = 'CourseFilters';
export default CourseFilters;
