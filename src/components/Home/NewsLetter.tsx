import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { useAppDispatch } from '../../hooks';
import { showToast } from '../../store/UiSlice';

const Newsletter: React.FC = memo(() => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      dispatch(showToast({
        message: 'Please enter a valid email address',
        type: 'error'
      }));
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      dispatch(showToast({
        message: 'Successfully subscribed to the newsletter!',
        type: 'success'
      }));

      setEmail('');
    } catch {
      dispatch(showToast({
        message: 'Failed to subscribe. Please try again.',
        type: 'error'
      }));
    } finally {
      setIsSubmitting(false);
    }
  }, [email, dispatch]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Optional: Clean background shapes with subtle opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Stay updated with latest courses, tips, and exclusive content. Join thousands of learners in our community.
          </p>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-gray-900 font-semibold rounded-lg transition"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                  className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Subscribe
                </>
              )}
            </motion.button>
          </motion.form>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-500 text-sm"
          >
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>

      {/* Additional clean decorative shapes */}
      <div className="absolute top-20 right-20 w-8 h-8 border-2 border-yellow-300 transform rotate-45 animate-bounce" />
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-gray-200 rounded-full blur-3xl" />
    </section>
  );
});

Newsletter.displayName = 'Newsletter';
export default Newsletter;
