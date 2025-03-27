import React from 'react';
import { motion } from 'framer-motion';
import './designContent.css';
import img1 from './../images/background/des1.webp';
import img2 from './../images/background/des2.jpg';
import img3 from './../images/background/des3.webp';
import { Link } from 'react-scroll';

const DesignContent = () => {
  const contentItems = [
    {
      title: "فروش بیشتر و بسیار آسان‌تر",
      text1: "با داشتن سایت، به راحتی سفارشات خود را مدیریت و به آسانی به اتمام می‌رسانید...",
      text2: "با داشتن یک سایت فروشگاهی، تجربه فروش شما به یک سطح جدید خواهد رسید...",
      image: img1
    },
    {
      title: "طراحی حرفه‌ای و کاربردی",
      text1: "سایت‌های ما با جدیدترین تکنولوژی‌های روز دنیا طراحی می‌شوند...",
      text2: "رابط کاربری ساده و جذاب باعث افزایش نرخ تبدیل مشتریان شما خواهد شد...",
      image: img2
    },
    {
      title: "پشتیبانی تمام وقت",
      text1: "تیم پشتیبانی ما 24 ساعته آماده پاسخگویی به سوالات شماست...",
      text2: "هرگونه مشکل فنی در کمترین زمان ممکن برطرف خواهد شد...",
      image: img3
    }
  ];

  return (
    <>
      {contentItems.map((item, index) => (
        <section key={index} className={`design-content ${index % 2 === 0 ? 'left-layout' : 'right-layout'}`}>
          <div className="content-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="content-container"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="content-title"
              >
                {item.title}
              </motion.h2>

              <div className="text-content">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {item.text1}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {item.text2}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="content-cta"
              >
                <Link to="pricingPlans"
                  smooth={true}
                  duration={500}>
                  <button className="cta-button">
                    شروع کنید
                    <span className="button-icon">→</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="image-container"
            >
              <img
                src={item.image}
                alt={item.title}
                className="content-image"
              />
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DesignContent;