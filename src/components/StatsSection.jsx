import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaTrophy, FaSchool, FaClock } from 'react-icons/fa';

const Counter = ({ end, duration = 2, onComplete }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef);
  
  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
          onComplete?.();
          cancelAnimationFrame(animationFrame);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return <span ref={countRef}>{count}</span>;
};

const StatCard = ({ icon: Icon, number, text, description, delay }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-primary text-4xl mb-4">
          <Icon />
        </div>
        <div className="text-3xl font-bold text-primary mb-2">
          <Counter end={number} />
          {text}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: FaClock,
      number: 25,
      textAr: "+ عامًا",
      textEn: "+ Years",
      descriptionAr: "نقدم تعليمًا متميزًا منذ أكثر من ربع قرن، مع التزام مستمر بالجودة والابتكار",
      descriptionEn: "Providing distinguished education for over a quarter century with continuous commitment to quality and innovation"
    },
    {
      icon: FaUsers,
      number: 870,
      textAr: "+ طالبًا",
      textEn: "+ Students",
      descriptionAr: "مدارسنا تستوعب أجيال المستقبل بتوفير بيئة تعليمية حديثة تواكب التطور",
      descriptionEn: "Our schools accommodate future generations by providing a modern educational environment"
    },
    {
      icon: FaGraduationCap,
      number: 9000,
      textAr: "+ خريج",
      textEn: "+ Graduates",
      descriptionAr: "فخورون بتخريج آلاف الطلاب الذين انطلقوا لمستقبل مشرق في مختلف المجالات",
      descriptionEn: "Proud to graduate thousands of students who launched into a bright future in various fields"
    },
    {
      icon: FaTrophy,
      number: 20,
      textAr: "+ جائزة",
      textEn: "+ Awards",
      descriptionAr: "حصلت مدارس المعالي على العديد من الجوائز المحلية والدولية تقديرًا لجهودها",
      descriptionEn: "Al-Maali Schools received many local and international awards in recognition of its efforts"
    },
    {
      icon: FaSchool,
      number: 3,
      textAr: " مدارس",
      textEn: " Schools",
      descriptionAr: "نواصل التوسع لتقديم تجربة تعليمية فريدة في بيئة متكاملة",
      descriptionEn: "We continue to expand to provide a unique educational experience in an integrated environment"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === 'ar' ? 'مدارس المعالي في أرقام – مسيرة حافلة بالإنجازات' : 'Al-Maali Schools in Numbers – A Journey of Achievements'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نحن نفتخر بمسيرتنا الطويلة وإنجازاتنا المستمرة، حيث نحرص على تقديم بيئة تعليمية متميزة لأجيال المستقبل'
              : 'We take pride in our long journey and continuous achievements, as we strive to provide an outstanding educational environment for future generations'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              text={language === 'ar' ? stat.textAr : stat.textEn}
              description={language === 'ar' ? stat.descriptionAr : stat.descriptionEn}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl text-primary font-semibold mb-6">
            {language === 'ar'
              ? 'كن جزءًا من مدارس المعالي، حيث التميز يبدأ من هنا!'
              : 'Be part of Al-Maali Schools, where excellence begins!'}
          </p>
          <Link
            to="/admissions"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            {language === 'ar' ? 'انضم إلينا الآن' : 'Join Us Now'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;