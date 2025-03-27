import React from 'react';
import './txt.css';
import { Link } from 'react-scroll';

export default function Txt() {
  return (
    <div className='txt'>
      <h1>طراحی سایت</h1>
      <p>در دنیای امروزی داشتن سایت یکی از ضروریات برای هر بیزینسی محسوب میشه. من به عنوان طراح سایت، سایتی با کیفیت و جذاب ارائه می‌دهم که می‌تونه باعث رشد هر بیزینسی حتی بیزینس شما هم بشه.</p>
      <div className='btnContainer'>
        <Link to="designContent"
          smooth={true}
          duration={500}>
             <button>بیشتر بدانید</button>
            </Link>
        <Link to="pricingPlans"
          smooth={true}
          duration={500}>
        <button>شروع کنید</button>
            </Link>
      </div>
    </div>
  );
}