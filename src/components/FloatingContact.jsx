import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FloatingContact = () => {
  const { language } = useLanguage();
  const whatsappNumber = '920014984';
  const phoneNumber = '920014984';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="float-contact">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-light transition-colors"
        aria-label={language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
      >
        <FaWhatsapp size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePhoneClick}
        className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary-light transition-colors"
        aria-label={language === 'ar' ? 'اتصل بنا' : 'Call us'}
      >
        <FaPhone size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingContact;