import React from 'react'
import './../components/aboutMe.css'
import amir from './../images/background/amir2.jpg'

export default function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='aboutMeContainer'>
                <div className='right'>
                <h1 class="title" data-text="درباره من ">عنوان من</h1>
                    <h1>Amirreza Nobahar</h1>
                    <h2>امیررضا هستم متخصص طراحی وبسایت!</h2>
                    <p>من طراح سایت و برنامه نویس فول استک هستم و یک سال است که فریلنسرم و به آنلاین شاپ ها کمک میکنم تا آنها بتوانند تجربه داشتن سایت رو داشته باشن و همچنین فروش بیشتر و آسان تر را تجربه کنند.</p>
                </div>
                <div className='left'>
                    <img src={amir} alt="" />
                </div>
            </div>
        </div>
    )
}
