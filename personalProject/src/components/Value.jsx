import React from 'react';
import { motion } from 'framer-motion';
import ValueContainer from './ValueContainer';
import { FiCode, FiLayout } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import './value.css';

const Value = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
            className="value-section"
        >
            <div className='titleCaption'>
                <h1 >ویژگی های منحصر به فرد سایت های ما</h1>
                <p>به جرئت میتوانم بگویم که سایت هایی که توسط تیم ما طراحی می‌شوند تخصصی و حرفه ای بوده و تمامی نیاز های کارفرما های عزیز مارا پوشش داده اند. ما همیشه به دنبال سود هردو طرف بودیم و سعی ما براین بوده که سایت هایی طراحی کنیم که بهترین بازدهی را برای صاحبین آنلاین شاپ ها و فروشگاه ها به ارمغان داشته باشند.</p>
                <h2 className="value-title">
                    مهارت‌ها و تخصص‌ها
                </h2>
            </div>

            <div className="value-grid">
                <motion.div variants={item} className="value-item">
                    <ValueContainer
                        icon={<FiCode />}
                        title="توسعه فرانت‌اند"
                        values={[
                            'React.js',
                            'Ejs / Css / Html',
                            'انیمیشن‌های تعاملی',
                            'رابط کاربری واکنش‌گرا',
                            'معماری مدرن'
                        ]}
                    />
                </motion.div>
                <motion.div variants={item} className="value-item">
                    <ValueContainer
                        icon={<FiCode />}
                        title="توسعه بک اند"
                        values={[
                            'Node js',
                            'Express js فریم ورک',
                            'Mongodb / Mysql',
                            'Template engine',
                            'Swagger Ui'
                        ]}
                    />
                </motion.div>
                <motion.div variants={item} className="value-item">
                    <ValueContainer
                        icon={<FiCode />}
                        title="پشتیبانی حرفه ای"
                        values={[
                            'پنل کاربری برای مدیریت',
                            'امکان تغییر پروژه ',
                            'تیم حرفه ای برای پاسخگویی به سوالات',
                            ' انتقاد و پیشنهاد',
                            'در دسترس بودن'
                        ]}
                    />
                </motion.div>
         
            </div>
        </motion.section>
    );
};

export default Value;
