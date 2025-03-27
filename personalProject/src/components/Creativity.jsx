import React from 'react';
import { motion } from 'framer-motion';
import websiteAugmented from './../images/background/website-augmented.webp';
import './creativity.css';

const Creativity = () => {
  return (
    <div className="creativity-container">
      <div className="glass-background"></div>
      
      <div className='right'>
        <motion.img 
          src={websiteAugmented} 
          alt="طراحی سایت"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
      
      <div className='left'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='row'
        >
          <div className="glass-card">پرداخت مطمئن</div>
          <div className="glass-card accent">خلاقیت و ابتکار</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='row'
        >
          <div className="glass-card">طراحی جذاب</div>
          <div className="glass-card">طراحی سفارشی</div>
        </motion.div>
        
        <div className="divider"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='row'
        >
          <div className="glass-card">طراحی ریسپانسیو</div>
          <div className="glass-card">تحویل به موقع</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='row'
        >
          <div className="glass-card">طراحی با کیفیت</div>
          <div className="glass-card">3 ماه گارانتی ویژه</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='row'
        >
          <div className="glass-card">قیمت استثنایی</div>
          <div className="glass-card accent">طراحی مدرن و بروز</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Creativity;