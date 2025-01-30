import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptop, FaUsers, FaCalendarCheck } from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <FaLaptop className="w-8 h-8" />,
      title: language === 'ar' ? 'بيئة تعليمية محفزة' : 'Stimulating Learning Environment',
      description: language === 'ar' 
        ? 'مبانٍ مجهزة بأحدث التقنيات والمختبرات والمعامل الذكية'
        : 'Buildings equipped with the latest technologies, laboratories, and smart facilities'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: language === 'ar' ? 'مسارات تعليمية متنوّعة' : 'Diverse Educational Paths',
      description: language === 'ar'
        ? 'التعليم الوطني المطوّر، بالإضافة إلى المسارات الدولية المتميزة'
        : 'Advanced national education alongside distinguished international tracks'
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: language === 'ar' ? 'كوادر تعليمية متميزة' : 'Distinguished Educational Staff',
      description: language === 'ar'
        ? 'نخبة من المعلمين والإداريين المتخصصين في مجالاتهم'
        : 'Elite specialized teachers and administrators in their fields'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: language === 'ar' ? 'برامج إثرائية متقدمة' : 'Advanced Enrichment Programs',
      description: language === 'ar'
        ? 'نوادٍ تعليمية، أنشطة علمية، مسابقات عالمية'
        : 'Educational clubs, scientific activities, and international competitions'
    },
    {
      icon: <FaCalendarCheck className="w-8 h-8" />,
      title: language === 'ar' ? 'تواصل مستمر' : 'Continuous Communication',
      description: language === 'ar'
        ? 'تواصل مستمر مع أولياء الأمور عبر أنظمة إلكترونية متطورة'
        : 'Continuous communication with parents through advanced electronic systems'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-primary text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            {language === 'ar' ? 'مدارس المعالي الإبداعية' : 'Al-Maali Creative Schools'}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto"
          >
            {language === 'ar' ? 'حيث يبدأ المستقبل!' : 'Where the Future Begins!'}
          </motion.p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 leading-relaxed">
              {language === 'ar'
                ? 'في مدارس المعالي الإبداعية، لا نقدم مجرد تعليم، بل نبني قادة المستقبل ونشكّل عقولًا قادرة على الابتكار والتحدي. منذ انطلاقتنا، التزمنا برؤية تعليمية متقدمة تدمج بين الأصالة والتطور، لتوفير بيئة تعليمية تُحفّز الإبداع وتنمي مهارات القرن الحادي والعشرين.'
                : 'At Al-Maali Creative Schools, we don\'t just provide education; we build future leaders and shape minds capable of innovation and challenge. Since our inception, we have committed to an advanced educational vision that combines authenticity and development, providing an educational environment that stimulates creativity and develops 21st-century skills.'}
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              {language === 'ar'
                ? 'مدارسنا ليست مجرد فصول دراسية، بل هي مجتمع تعليمي نابض بالحياة، يُلهم الطلاب لاكتشاف شغفهم وتطوير قدراتهم الأكاديمية والشخصية. نهتم بتقديم تعليم حديث يرتكز على أفضل الممارسات العالمية، ونسعى لتحقيق أعلى معايير الجودة والتميّز الأكاديمي، مع تقديم تجربة تعليمية متكاملة توازن بين المعرفة النظرية والتطبيق العملي.'
                : 'Our schools are not just classrooms, but a vibrant educational community that inspires students to discover their passion and develop their academic and personal abilities. We focus on providing modern education based on global best practices, striving for the highest standards of quality and academic excellence, while delivering an integrated educational experience that balances theoretical knowledge with practical application.'}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'ar' ? 'لماذا المعالي الإبداعية؟' : 'Why Al-Maali Creative?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold text-primary max-w-3xl mx-auto">
            {language === 'ar'
              ? 'في مدارس المعالي الإبداعية، لا نؤمن فقط بالتعليم، بل نصنع تجربة تعليمية لا تُنسى، حيث يكون كل يوم دراسي مغامرة جديدة لاستكشاف المعرفة وتحقيق الطموح! 🚀✨'
              : 'At Al-Maali Creative Schools, we don\'t just believe in education; we create an unforgettable educational experience where every school day is a new adventure in exploring knowledge and achieving ambition! 🚀✨'}
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;