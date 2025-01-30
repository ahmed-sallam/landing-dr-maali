import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import StatsSection from '../components/StatsSection';

const Home = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt={language === 'ar' ? 'طلاب المعالي' : 'Al-Maali Students'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'ar' 
                ? 'مرحباً بكم في مدارس المعالي الإبداعية' 
                : 'Welcome to Al-Maali Creative Schools'}
            </h1>
            <p className="text-xl mb-8">
              {language === 'ar' 
                ? 'نحن نقدم تعليماً متميزاً يجمع بين الأصالة والمعاصرة' 
                : 'We provide exceptional education that combines tradition with innovation'}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        {/* ... rest of the Home component code ... */}
      </div>
    </motion.div>
  );
};

export default Home;