import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        serviceType: 'standard',
        message: '',
        contactMethod: 'sms'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validatePhone = (phone) => /^09[0-9]{9}$/.test(phone);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'نام و نام خانوادگی الزامی است';
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = 'نام باید حداقل 3 کاراکتر داشته باشد';
        }

        if (!formData.phone) {
            newErrors.phone = 'شماره همراه الزامی است';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'شماره همراه معتبر نیست (مثال: 09123456789)';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'توضیحات پروژه الزامی است';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'توضیحات باید حداقل 10 کاراکتر داشته باشد';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length <= 11) {
                setFormData(prev => ({ ...prev, [name]: numericValue }));
                if (errors.phone && validatePhone(numericValue)) {
                    setErrors(prev => ({ ...prev, phone: '' }));
                }
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitSuccess(false);

        try {
            await axios.post('https://amirrezasite.liara.run/contact/message', {
                fullName: formData.fullName,
                phone: formData.phone,
                Service: formData.serviceType,
                description: formData.message,
                relation: formData.contactMethod
            });

            setSubmitSuccess(true);
            setFormData({
                fullName: '',
                phone: '',
                serviceType: 'standard',
                message: '',
                contactMethod: 'sms'
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            console.error('Error:', error);
            alert('خطا در ارسال پیام! لطفاً دوباره تلاش کنید.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="intro-text">
                <h1>به راحتی سایت خود را سفارش دهید</h1>
                <h2>خوشحالم که مارا انتخاب کردید. پشیمان نخواهید شد</h2>
                <p>ما سایت شما را بدون اینکه شمارا دردسر بیندازیم طراحی خواهیم کرد و ما داشتن سایتی حرفه‌ای را برای شما بسیار راحت کرده‌ایم. این فرصت را از دست ندهید.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>ارتباط مستقیم</h3>
                    <div className="info-item">
                        <i className="fab fa-instagram"></i>
                        <a href="https://instagram.com/amirreza.kh.r" target="_blank" rel="noopener noreferrer">
                            amirreza.kh.r@
                        </a>
                    </div>
                    <div className="info-item">
                        <i className="fab fa-telegram"></i>
                        <a href="https://t.me/Jooje88" target="_blank" rel="noopener noreferrer">
                            ＡｍｉｒＲｅｚａ
                        </a>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+989011499975">9975 149 0901</a>
                    </div>
                    <p>حد اکثر تا 12 ساعت پاسخ خواهیم داد.</p>
                </div>

                <div className="contact-container">
                    <div className="contact-header">
                        <h2>فرم درخواست طراحی سایت</h2>
                    </div>

                    {submitSuccess && (
                        <div className="success-message">
                            <i className="fas fa-check-circle"></i>
                            پیام شما با موفقیت ارسال شد!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                        <div className="form-group">
                            <label>نام و نام خانوادگی</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="نام و نام خانوادگی خود را وارد کنید"
                                className={errors.fullName ? 'error' : ''}
                            />
                            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                        </div>

                        <div className="form-group">
                            <label>شماره همراه</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="09xxxxxxxxx"
                                maxLength="11"
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <label>نوع خدماتی که می‌خواهید رو انتخاب کنید</label>
                            <div className="radio-group">
                                {['standard', 'premium', 'professional'].map((type) => (
                                    <label key={type}>
                                        <input
                                            type="radio"
                                            name="serviceType"
                                            value={type}
                                            checked={formData.serviceType === type}
                                            onChange={handleChange}
                                        />
                                        <span>
                                            {type === 'standard' && 'استاندارد'}
                                            {type === 'premium' && 'پریمیوم'}
                                            {type === 'professional' && 'حرفه‌ای'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>درباره شما و پروژه‌تون بگید</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="توضیحات درباره پروژه و نیازهای شما..."
                                className={errors.message ? 'error' : ''}
                                rows="5"
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>در کجا می‌توانیم ارتباط بگیریم؟</label>
                            <div className="radio-group">
                                {['sms', 'whatsapp', 'telegram'].map((method) => (
                                    <label key={method}>
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value={method}
                                            checked={formData.contactMethod === method}
                                            onChange={handleChange}
                                        />
                                        <span>
                                            {method === 'sms' && 'SMS'}
                                            {method === 'whatsapp' && 'WhatsApp'}
                                            {method === 'telegram' && 'Telegram'}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            <i className="fas fa-paper-plane"></i>
                            {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;