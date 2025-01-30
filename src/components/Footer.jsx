import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { language } = useLanguage();

  const links = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { name: language === 'ar' ? 'عن المدرسة' : 'About', href: '/about' },
    { name: language === 'ar' ? 'البرامج الأكاديمية' : 'Programs', href: '/programs' },
    { name: language === 'ar' ? 'القبول والتسجيل' : 'Admissions', href: '/admissions' },
    { name: language === 'ar' ? 'اتصل بنا' : 'Contact', href: '/contact' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-secondary text-white"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'مدارس المعالي الإبداعية' : 'Al-Maali Creative Schools'}
            </h3>
            <p className="mb-4">
              {language === 'ar' 
                ? 'نحن نقدم تعليماً متميزاً يجمع بين الأصالة والمعاصرة' 
                : 'We provide exceptional education that combines tradition with innovation'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            <div className="space-y-2">
              <p>{language === 'ar' ? 'الهاتف: ' : 'Phone: '}920014984</p>
              <p>{language === 'ar' ? 'البريد الإلكتروني: ' : 'Email: '}info@almaali.edu.sa</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>
            {language === 'ar' 
              ? '© 2024 مدارس المعالي الإبداعية. جميع الحقوق محفوظة' 
              : '© 2024 Al-Maali Creative Schools. All rights reserved'}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;