import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
            <div className='width'>
                <h3><span>i</span>Learning</h3>
                <h2>100% satisfied students</h2>
                <p>The staff here is really supportive, teachers are great, the school has a good structure. Thank you!</p>
            </div>
            <div className='width'>
                <h3>Our dedicated courses</h3>
                <a href="">English kids courses    $120</a>
                <br />
                <a href="">Online Learnign         $90</a>
                <br />
                <a href="">English for business    $150</a>
                <br />
                <a href="">English for Beginers    $200</a>
            </div>
            <div className='width'>
               <h3>Connect with us</h3>
                <a href="">send me a messages</a>
                <br />
                <a href="">Requests me a callback</a>
            </div>
        </div>
        <div>
                <p><small>@ 2022 iLearn. All rights reserved. Privacy Policy. Design by  EXCLthemes</small></p>
            </div>
        </>
    );
};

export default Footer;