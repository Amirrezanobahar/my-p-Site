import React, { useEffect, useRef, useState } from 'react';
import './homeContent.css';
import logo from './../images/logo/headerLogo.webp';
import Typed from 'typed.js';

export default function HomeContent() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ['Fullstack Developer', 'یک طراح سایت فول استک'],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true
        });
    
        return () => typed.destroy();
    }, []);

    return (
        <div className='homeContent'>
            <div className='homeContent-right'>
                <div className='homeContent-right-top'>
                    <h1>سلام خوش اومدی</h1>
                    <h1>امیررضا هستم</h1>
                    <h2 ref={typedRef}></h2>
                </div>
                <div className='homeContent-right-bottom'>
                    <p>از همون بچگی عاشق برنامه نویسی بودم و زبان های زیادی رو یاد گرفتم و کار کردم و 3 سال است که تخصصی فقط طراحی سایت انجام میدهم این علاقه من رو جلو برده و حالا تو این حوزه سعی میکنم بهترین باشم</p>
                </div>
            </div>

            <div className='homeContent-left'>
                <img 
                    src={logo} 
                    alt="logo" 
                    style={{
                        animation: 'float 3s ease-in-out infinite',
                        maxWidth: '100%',
                        height: 'auto'
                    }} 
                />
            </div>
        </div>
    )
}