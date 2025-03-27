import React from 'react';
import { motion } from 'framer-motion';
import './meService.css';
import img1 from './../images/background/attractiveness.webp';
import img2 from './../images/background/rocket.webp';
import img3 from './../images/background/3d-webdesign.webp';

const MeService = () => {
  const services = [
    {
      image: img1,
      title: "طراحی وب",
      description: "طراحی سایت‌های مدرن و واکنش‌گرا با جدیدترین تکنولوژی‌ها"
    },
    {
      image: img2,
      title: "توسعه اپلیکیشن",
      description: "ساخت اپلیکیشن‌های موبایل با عملکرد عالی و UI جذاب"
    },
    {
      image: img3,
      title: "سئو و بهینه‌سازی",
      description: "بهبود رتبه سایت در گوگل و افزایش نرخ تبدیل"
    }
  ];

  return (
    <section className="me-service-section">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="service-container"
      >
        <h2 className="section-title">خدمات من</h2>
        <p className="section-subtitle">راهکارهای تخصصی برای نیازهای دیجیتال شما</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MeService;