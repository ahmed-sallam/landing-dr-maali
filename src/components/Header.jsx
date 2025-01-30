import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navigation = [
    { name: language === 'ar' ? 'الرئيسية       ' : 'Home', href: '/' },
    { name: language === 'ar' ? 'عن المدرسة' : 'About', href: '/about' },
    { name: language === 'ar' ? 'المراحل الدراسية' : 'Educational Stages', href: '/programs' },
    { name: language === 'ar' ? 'القبول والتسجيل' : 'Admissions', href: '/admissions' },
    { name: language === 'ar' ? 'اتصل بنا' : 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://heyboss.heeyo.ai/user-assets/BM_sK7yy.jpg" 
              alt="Maali Creative Schools Logo" 
              className="h-24 md:h-32 w-auto object-contain transition-all duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="bg-secondary/10 rounded-xl px-6 py-3 flex items-center space-x-8 shadow-sm">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="nav-link text-primary font-medium transition-all duration-300 px-2 py-1 hover:bg-secondary hover:text-white rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </motion.button>
          </div>

          <button
            className="md:hidden text-primary hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="bg-secondary/10 rounded-xl p-4 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="nav-link text-primary font-medium transition-all duration-300 px-4 py-2 hover:bg-secondary hover:text-white rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="w-full mt-4 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center"
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </motion.button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;