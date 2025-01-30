import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaFilePdf, FaUserGraduate, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Admissions = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setCurrentStep(4);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/920014984`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:920014984';
  };

  const registrationSteps = [
    {
      icon: <FaFilePdf />,
      title: language === 'ar' ? 'تقديم الطلب' : 'Submit Application',
      desc: language === 'ar' ? 'عبر الموقع أو الهاتف' : 'Via website or phone'
    },
    {
      icon: <FaUserGraduate />,
      title: language === 'ar' ? 'مراجعة المستندات' : 'Document Review',
      desc: language === 'ar' ? 'من قبل قسم القبول' : 'By admissions department'
    },
    {
      icon: <FaPhone />,
      title: language === 'ar' ? 'التواصل مع ولي الأمر' : 'Parent Contact',
      desc: language === 'ar' ? 'تحديد موعد المقابلة' : 'Schedule interview'
    },
    {
      icon: <FaCheckCircle />,
      title: language === 'ar' ? 'تأكيد القبول' : 'Confirm Admission',
      desc: language === 'ar' ? 'إتمام الإجراءات' : 'Complete procedures'
    }
  ];

  const requiredDocuments = [
    {
      title: language === 'ar' ? 'شهادة الميلاد' : 'Birth Certificate',
      required: true
    },
    {
      title: language === 'ar' ? 'كرت العائلة/الإقامة' : 'Family ID/Residence Permit',
      required: true
    },
    {
      title: language === 'ar' ? 'سجل الدرجات' : 'Academic Records',
      required: true,
      note: language === 'ar' ? '(للمرحلة المتوسطة والثانوية)' : '(for middle & high school)'
    },
    {
      title: language === 'ar' ? 'شهادة التطعيم' : 'Vaccination Certificate',
      required: true,
      note: language === 'ar' ? '(لرياض الأطفال)' : '(for kindergarten)'
    }
  ];

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
            {language === 'ar' ? 'القبول والتسجيل' : 'Admissions & Registration'}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            {language === 'ar'
              ? 'نرحب بكم في مدارس المعالي الإبداعية. التسجيل متاح الآن للعام الدراسي القادم.'
              : 'Welcome to Al-Maali Creative Schools. Registration is now open for the next academic year.'}
          </motion.p>
        </div>
      </div>

      {/* Registration Steps */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'ar' ? 'خطوات التسجيل' : 'Registration Steps'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg text-center ${
                  currentStep > index ? 'bg-primary text-white' : 'bg-gray-50'
                }`}
              >
                <div className="text-4xl mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {language === 'ar' ? 'نموذج التسجيل' : 'Registration Form'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'اسم الطالب الكامل' : 'Student Full Name'}
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'المرحلة الدراسية' : 'Grade Level'}
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">
                      {language === 'ar' ? 'اختر المرحلة' : 'Select Grade'}
                    </option>
                    <option value="KG">
                      {language === 'ar' ? 'رياض الأطفال' : 'Kindergarten'}
                    </option>
                    <option value="elementary">
                      {language === 'ar' ? 'المرحلة الابتدائية' : 'Elementary'}
                    </option>
                    <option value="middle">
                      {language === 'ar' ? 'المرحلة المتوسطة' : 'Middle School'}
                    </option>
                    <option value="high">
                      {language === 'ar' ? 'المرحلة الثانوية' : 'High School'}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'اسم ولي الأمر' : 'Parent Name'}
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'رقم الجوال' : 'Mobile Number'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    {language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {language === 'ar' ? 'إرسال الطلب' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'ar' ? 'المستندات المطلوبة' : 'Required Documents'}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <FaFilePdf className="text-primary text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">{doc.title}</h4>
                    {doc.note && (
                      <p className="text-sm text-gray-600">{doc.note}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="flex items-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FaPhone size={24} />
              <span>920014984</span>
            </motion.button>
            <motion.a
              href="https://goo.gl/maps/your-school-location"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors"
            >
              <FaMapMarkerAlt size={24} />
              <span>{language === 'ar' ? 'موقع المدرسة' : 'School Location'}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Admissions;