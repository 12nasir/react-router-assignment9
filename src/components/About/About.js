import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './About.css';

const About = () => {
    const history = useHistory();

    const handleAboutBtn = () =>{
        history.push('/teachers')
    }

    return (
    <>
        <div className='about-container'>
        <div className='about'>
            <h1><span>ABOUT US</span></h1>
            <div className='about-child'>
                <p>We try our best so that every learners can reach their destination. They will work hard and we will go with their motivation so that a level is created between then.
                For that you always have to have a positive attitude. Trying takes people a long way.
                </p>
                
            </div>
            <Button variant="success" onClick={ () =>  handleAboutBtn()}>See more</Button>
        </div>
        
                <div className='about-section2'>
                    <div className='section-child1'>
                        <h1>The Best Way to Learn Any</h1>
                        
                        <h1>Foreign Language</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <br />

                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='section-child1'>
                        <img className='img' src="https://c8.alamy.com/comp/P74TA7/black-haired-bearded-man-learning-english-wearing-gray-sweater-vest-and-pristine-white-shirt-put-up-hand-before-black-wall-P74TA7.jpg" alt="" />
                    </div>
                </div>
        </div>
    </>
    );
};

export default About;