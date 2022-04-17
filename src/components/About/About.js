import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import profileImage from '../../assets/images/Ruman.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <Menubar />
            <div className='container'>
                <div className='about-wrapper'>
                    <div className='about-description'>
                        <h1>Ruman Islam</h1>
                        <span>Goal</span>
                        <p>A self-motivated, ambitious and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, and front-end web development with modern web tech like React.js. To work in Software industry with modern web technologies of different local and multinational Software/IT agency of Bangladesh and grow rapidly with increasing skills and responsibilities.</p>
                        <p>My goal is to become a MERN Stack Web Developer. I'm passionate to make a clean, beautiful, professional, responsive Web site and maximum optimized way so that it performs well.</p>
                    </div>
                    <div className='about-photo'>
                        <img src={profileImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;