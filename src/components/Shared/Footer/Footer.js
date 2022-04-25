import React from 'react';
import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer-wrapper'>
            <div className='footer-content'>
                <div>
                    <h2>Photometry</h2>
                </div>
                <div className='address-content'>
                    <h3>Dhaka Office</h3>
                    <small> <AiFillEnvironment /> House#23,Road#1,Sector#9,Uttara. Dhaka, Bangladesh 1230</small>
                    <small> <AiFillMail /> rumanislam48@gmail.com</small>
                    <small> <AiFillPhone /> +88 01670 078953</small>
                </div>
            </div>
            <small>Copyright © {year}. All right reserved Ruman Islam</small>
        </footer>
    );
};

export default Footer;