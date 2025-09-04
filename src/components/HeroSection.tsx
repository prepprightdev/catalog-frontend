// src/components/HeroSection.tsx
import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Users, Star, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import colors from "../theme/colors";

const HeroSection: React.FC = memo(() => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleGetStarted = useCallback(() => {
    if (isAuthenticated) {
      navigate("/courses");
    } else {
      navigate("/register");
    }
  }, [isAuthenticated, navigate]);

  const handleWatchDemo = useCallback(() => {
    console.log("Watch demo clicked");
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${colors.primary}, ${colors.primaryLight})`,
        color: colors.white,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: `${colors.yellow}33` }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: `${colors.primaryLight}33` }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-500" style={{ backgroundColor: `${colors.white}1a` }} />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 right-20 w-16 h-16 border-2 rounded-lg transform rotate-45"
          style={{ borderColor: `${colors.yellow}4d` }}
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 left-20 w-24 h-24 border-2 rounded-full"
          style={{ borderColor: `${colors.white}33` }}
        />
        <motion.div
          animate={{
            rotate: 180,
            x: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/3 left-1/4 w-8 h-8 rounded-md transform rotate-12"
          style={{ backgroundColor: `${colors.yellow}66` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Knowledge Meets <span style={{ color: colors.yellow }}>Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl mb-8 leading-relaxed text-yellow-100"
            >
              Unlock your potential with world-class courses taught by industry experts. Learn at your own pace and transform your career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 focus:ring-4 focus:ring-yellow-400/50"
                style={{ backgroundColor: colors.yellow, color: colors.grayDark }}
              >
                Get Started Now
              </button>

              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2 focus:ring-4 focus:ring-white/20 bg-white/20 text-white"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6"
              style={{ color: colors.yellow }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p>Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">200+</span>
                </div>
                <p>Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p>Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="Learning Innovation"
                  className="w-full h-80 object-cover rounded-2xl"
                />

                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg"
                >
                  🚀 Popular
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg flex items-center space-x-2"
                >
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9 Rating</span>
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 -z-10">
                <div className="absolute -top-8 -left-8 w-full h-full bg-white/5 rounded-3xl transform rotate-3"></div>
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-yellow-400/20 rounded-3xl transform -rotate-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
