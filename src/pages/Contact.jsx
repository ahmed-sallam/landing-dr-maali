import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const inquiryTypes = {
    ar: [
      'القبول والتسجيل',
      'الرسوم الدراسية',
      'الاستفسارات الأكاديمية',
      'الموارد البشرية',
      'أخرى'
    ],
    en: [
      'Admission & Registration',
      'Tuition Fees',
      'Academic Inquiries',
      'Human Resources',
      'Other'
    ]
  };

  const faqItems = [
    {
      question: {
        ar: 'ما هي رسوم التسجيل؟',
        en: 'What are the registration fees?'
      },
      answer: {
        ar: 'سيتم اضافتها قريبا',
        en: 'Will be added soon'
      }
    },
    {
      question: {
        ar: 'كيف يمكنني التقديم لإبني؟',
        en: 'How can I apply for my child?'
      },
      answer: {
        ar: 'يمكنك زيارة صفحة القبول والتسجيل',
        en: 'You can visit our Admissions page'
      }
    },
    {
      question: {
        ar: 'هل توفر المدرسة مواصلات؟',
        en: 'Does the school provide transportation?'
      },
      answer: {
        ar: 'توفر مدارس المعالي الابداعيه المواصلات بحافلات مميزه ومريحه وذات امان عالي',
        en: 'Al-Maali Creative Schools provides transportation with comfortable and safe buses'
      }
    },
    {
      question: {
        ar: 'ما هي ساعات العمل الرسمية؟',
        en: 'What are the official working hours?'
      },
      answer: {
        ar: 'من الأحد إلى الخميس، من الساعة 7:30 صباحًا حتى 2:30 مساءً',
        en: 'Sunday to Thursday, from 7:30 AM to 2:30 PM'
      }
    },
    {
      question: {
        ar: 'كيف يمكنني مقابلة مدير المدرسة؟',
        en: 'How can I meet the school principal?'
      },
      answer: {
        ar: 'يمكنك الاتصال على الرقم الموحد ٩٢٠٠١٤٩٨٤',
        en: 'You can call our unified number 920014984'
      }
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/920014984', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:920014984';
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 24.7136, // Replace with actual coordinates
    lng: 46.6753
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            {language === 'ar' ? 'تواصل معنا – نحن هنا لخدمتك!' : 'Contact Us – We\'re Here to Help!'}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            {language === 'ar'
              ? 'نسعد بتواصلكم معنا في أي وقت للإجابة على استفساراتكم وتقديم المساعدة'
              : 'We\'re happy to hear from you anytime to answer your inquiries and provide assistance'}
          </motion.p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary text-2xl" />
                <h3 className="text-xl font-bold mr-3">
                  {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </h3>
              </div>
              <p className="text-gray-600">920014984</p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-primary text-2xl" />
                <h3 className="text-xl font-bold mr-3">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </h3>
              </div>
              <p className="text-gray-600">info@maalischool.org</p>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaClock className="text-primary text-2xl" />
                <h3 className="text-xl font-bold mr-3">
                  {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                </h3>
              </div>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'الأحد - الخميس: 7:30 ص - 2:30 م'
                  : 'Sun - Thu: 7:30 AM - 2:30 PM'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {language === 'ar' ? 'نموذج الاتصال' : 'Contact Form'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'رقم الجوال' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {language === 'ar' ? 'نوع الاستفسار' : 'Inquiry Type'}
                </label>
                <select
                  required
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">
                    {language === 'ar' ? 'اختر نوع الاستفسار' : 'Select inquiry type'}
                  </option>
                  {inquiryTypes[language].map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {language === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {language === 'ar' ? 'إرسال الطلب' : 'Send Message'}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center"
                >
                  {language === 'ar'
                    ? 'تم استلام رسالتك، وسيتم الرد عليك خلال 24 ساعة من أيام العمل الرسمية.'
                    : 'Your message has been received. We will respond within 24 hours during business days.'}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Quick Contact Buttons */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={24} />
              <span>{language === 'ar' ? 'تواصل عبر الواتساب' : 'Chat on WhatsApp'}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors"
            >
              <FaPhone size={24} />
              <span>920014984</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {language === 'ar' ? 'كيف تصل إلينا بسهولة؟' : 'How to Reach Us?'}
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="mt-4 text-center">
            <motion.a
              href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              <FaMapMarkerAlt size={20} />
              <span>{language === 'ar' ? 'احصل على الاتجاهات' : 'Get Directions'}</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={false}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="font-semibold">
                    {item.question[language]}
                  </span>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white">
                        {item.answer[language]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;