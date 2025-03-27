import React from 'react';
import { FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './pricingPlans.css';
import { Link } from 'react-scroll';

const PricingPlans = () => {
  const plans = [
    {
      title: "حرفه‌ای",
      description:"این پک مناسب کسب‌وکار های متوسط رو به بالا است. با دریافت این پک بهترین سایت ممکن را خواهید داشت و به صورت کاملا رایگان، 9 ماه هزینه های زیر ساخت سایت شما پرداخت خواهد شد",
      features: [
        "60 ماه دامنه (ir.) رایگان",
        "9 ماه هاست رایگان",
        "9 ماه دیتابیس رایگان",
        "6 ماه گارانتی ویژه",
        "پنل ادمین کاملا اختصاصی و جذاب",
        "حداکثر 14 صفحه",
        "30 مزیت ویژه دیگر..."
      ],
      price: "۱۹,۹۹۰,۰۰۰ تومان"
    },
    {
      title: "پرمیوم",
      description: "این پک مناسب کسب‌وکار های متوسط رو به بالا است. با دریافت این پک بهترین سایت اختصاصی و کاملا سفارشی خواهید داشت و به صورت کاملا رایگان، 6 ماه هزینه های زیر ساخت سایت شما پرداخت خواهد شد.",
      features: [
        "60 ماه دامنه (ir.) رایگان",
        "6 ماه هاست رایگان",
        "6 ماه دیتابیس رایگان",
        "4 ماه گارانتی ویژه",
        "پنل ادمین کاملا اختصاصی و جذاب",
        "حداکثر 10 صفحه"
      ],
      price: "۱۵,۹۹۰,۰۰۰ تومان"
    },
    {
      title: "استاندارد",
      description: "پک استاندارد با وردپرس طراحی شده و برای کسب‌وکار های متوسط یا متوسط رو به پایین مناسب می‌باشد. با دریافت این پک یک سایت استاندارد و عادی خواهید داشت.",
      features: [
        "12 ماه دامنه (ir.) رایگان",
        "3 ماه هاست رایگان",
        "قالب وردپرس رایگان",
        "طراحی استاندارد",
        "حداکثر 7 صفحه",
        "",
        "",
        
      ],
      price: "۷,۹۹۰,۰۰۰ تومان"
    }
  ];

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <div className="plan-header">
            <h2 className="plan-title">{plan.title}</h2>
            {plan.description && <p className="plan-description">{plan.description}</p>}
          </div>

          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i} className="feature-item">
                <FiCheck className="feature-icon" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="plan-footer">
            <div className="plan-price">{plan.price}</div>
            <div className="plan-actions">
              
              <Link to="pricingPlans"
                smooth={true}
                duration={500}>
                <button className="plan-button">
                شروع کنید
                <FiArrowLeft className="button-icon" />
              </button>
              </Link>
              <Link to="pricingPlans"
                smooth={true}
                duration={500}>
                <button className="plan-button secondary">
                  شروع کنید
                  <FiArrowRight className="button-icon" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;