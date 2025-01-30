import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const { language } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;