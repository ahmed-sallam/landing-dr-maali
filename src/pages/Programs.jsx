import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaArrowRight, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Programs = () => {
  const { language } = useLanguage();

  const stages = [
    {
      icon: <FaBookOpen className="w-12 h-12" />,
      color: 'primary',
      titleAr: 'المرحلة الابتدائية',
      titleEn: 'Elementary Stage',
      gradeAr: 'من الصف الأول إلى السادس',
      gradeEn: 'Grades 1-6',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      objectivesAr: [
        'تنمية المهارات الأساسية في القراءة، الكتابة، والرياضيات',
        'بناء شخصية الطالب من خلال أنشطة تفاعلية',
        'التركيز على القيم الإسلامية والأخلاقية',
        'تقديم بيئة آمنة ومحفزة للتعلم',
      ],
      objectivesEn: [
        'Develop basic skills in reading, writing, and mathematics',
        'Build student personality through interactive activities',
        'Focus on Islamic and moral values',
        'Provide a safe and stimulating learning environment',
      ],
      curriculumAr: [
        'اللغة العربية',
        'الرياضيات',
        'العلوم',
        'اللغة الإنجليزية',
        'الدراسات الإسلامية',
        'التربية البدنية والفنية',
      ],
      curriculumEn: [
        'Arabic Language',
        'Mathematics',
        'Science',
        'English Language',
        'Islamic Studies',
        'Physical and Art Education',
      ],
      activitiesAr: [
        'رحلات مدرسية ترفيهية وتعليمية',
        'مسابقات قرائية ورياضية',
        'برامج STEM المبسطة لتنمية التفكير العلمي',
      ],
      activitiesEn: [
        'Educational and recreational school trips',
        'Reading and sports competitions',
        'Simplified STEM programs for scientific thinking development',
      ],
    },
    {
      icon: <FaChalkboardTeacher className="w-12 h-12" />,
      color: 'secondary',
      titleAr: 'المرحلة المتوسطة',
      titleEn: 'Middle School Stage',
      gradeAr: 'من الصف الأول إلى الثالث متوسط',
      gradeEn: 'Grades 7-9',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      objectivesAr: [
        'تطوير المهارات الأكاديمية وتعزيز التفكير النقدي',
        'تمكين الطلاب من التعامل مع التكنولوجيا الحديثة',
        'تعزيز المسؤولية والاستقلالية في التعلم',
      ],
      objectivesEn: [
        'Develop academic skills and enhance critical thinking',
        'Enable students to work with modern technology',
        'Promote responsibility and independence in learning',
      ],
      curriculumAr: [
        'اللغة العربية',
        'الرياضيات المتقدمة',
        'الفيزياء – الكيمياء – الأحياء',
        'اللغة الإنجليزية بمستوى متقدم',
        'الدراسات الإسلامية والتاريخ والجغرافيا',
      ],
      curriculumEn: [
        'Arabic Language',
        'Advanced Mathematics',
        'Physics - Chemistry - Biology',
        'Advanced English Language',
        'Islamic Studies, History, and Geography',
      ],
      activitiesAr: [
        'نوادي علمية وأدبية',
        'مشاريع بحثية ومسابقات أكاديمية',
        'برامج دعم للطلبة المتفوقين',
        'ورش عمل في البرمجة والروبوتات',
      ],
      activitiesEn: [
        'Scientific and literary clubs',
        'Research projects and academic competitions',
        'Support programs for outstanding students',
        'Programming and robotics workshops',
      ],
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      color: 'accent',
      titleAr: 'المرحلة الثانوية',
      titleEn: 'High School Stage',
      gradeAr: 'من الصف الأول إلى الثالث ثانوي',
      gradeEn: 'Grades 10-12',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      objectivesAr: [
        'إعداد الطلاب لاختبارات القدرات والتحصيلي',
        'توفير بيئة تعليمية متقدمة للجامعات',
        'تعزيز مهارات التفكير النقدي',
      ],
      objectivesEn: [
        'Prepare students for national tests',
        'Provide advanced learning environment for universities',
        'Enhance critical thinking skills',
      ],
      curriculumAr: [
        'الرياضيات المتقدمة والتطبيقية',
        'الفيزياء – الكيمياء – الأحياء',
        'علوم الحاسب والبرمجة',
        'اللغة الإنجليزية الأكاديمية',
        'المسارات الاختيارية',
      ],
      curriculumEn: [
        'Advanced and Applied Mathematics',
        'Physics - Chemistry - Biology',
        'Computer Science and Programming',
        'Academic English Language',
        'Elective Tracks',
      ],
      activitiesAr: [
        'الأولمبيادات العلمية',
        'برامج توجيه مهني',
        'شراكات مع جامعات',
        'مشاريع تخرج وريادة الأعمال',
      ],
      activitiesEn: [
        'Scientific Olympiads',
        'Career guidance programs',
        'University partnerships',
        'Graduation projects and entrepreneurship',
      ],
    },
  ];

  const handleContact = (method) => {
    if (method === 'whatsapp') {
      window.open('https://wa.me/920014984', '_blank');
    } else if (method === 'phone') {
      window.location.href = 'tel:920014984';
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'ar' ? 'المراحل التعليمية في مدارس المعالي الأهلية' : 'Educational Stages at Al-Maali Schools'}
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نوفر تعليماً متميزاً لجميع المراحل، مع الاهتمام بالجودة الأكاديمية والأنشطة المتكاملة'
              : 'We provide distinguished education for all stages, focusing on academic quality and integrated activities'}
          </p>
        </div>
      </div>

      {/* Educational Stages */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-full">
                  <img
                    src={stage.image}
                    alt={language === 'ar' ? stage.titleAr : stage.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-${stage.color}/60 flex items-center justify-center`}>
                    <div className="text-white text-center p-6">
                      {stage.icon}
                      <h2 className="text-3xl font-bold mt-4">
                        {language === 'ar' ? stage.titleAr : stage.titleEn}
                      </h2>
                      <p className="mt-2">
                        {language === 'ar' ? stage.gradeAr : stage.gradeEn}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Objectives */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {language === 'ar' ? 'الأهداف' : 'Objectives'}
                    </h3>
                    <ul className="space-y-2">
                      {(language === 'ar' ? stage.objectivesAr : stage.objectivesEn).map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <FaArrowRight className="mt-1 mr-2 text-primary flex-shrink-0" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Curriculum */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {language === 'ar' ? 'المناهج الدراسية' : 'Curriculum'}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {(language === 'ar' ? stage.curriculumAr : stage.curriculumEn).map((subject, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {language === 'ar' ? 'الأنشطة الإثرائية' : 'Enrichment Activities'}
                    </h3>
                    <ul className="space-y-2">
                      {(language === 'ar' ? stage.activitiesAr : stage.activitiesEn).map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <FaArrowRight className="mt-1 mr-2 text-primary flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            {language === 'ar' ? 'تواصل معنا للتسجيل' : 'Contact Us for Registration'}
          </h2>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContact('whatsapp')}
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContact('phone')}
              className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light"
            >
              <FaPhone size={24} />
              <span>920014984</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Programs;