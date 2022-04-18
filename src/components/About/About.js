import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import profileImage from '../../assets/images/Ruman.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className='blog-banner-wrapper'>
                <Menubar />
            </div>
            <div className='container'>
                <div className='about-wrapper'>
                    <div className='about-description'>
                        <h1>Ruman Islam</h1>
                        <span>Goal</span>
                        <p>My goal is to become a skilled web developer. After completing programming hero web development course successfully, I shall apply for the designation 'web developer' in software companies. After getting job I'll try my best to serve the company by the skills i have gained from this course. I have higher desire to get job in renowned software firm. Insha Allah one day I'll reach my desired goal of life.</p>
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