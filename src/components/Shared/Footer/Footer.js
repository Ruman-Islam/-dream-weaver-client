import React from 'react';
import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer-wrapper'>
            <div className='footer-content'>
                <div>
                    <img src="//i0.wp.com/dreamweaver.com.bd/wp-content/uploads/2017/11/logo-white.png" alt="" />
                </div>
                <div className='address-content'>
                    <h3>Dhaka Office</h3>
                    <small> <AiFillEnvironment /> House#23,Road#1,Sector#9,Uttara. Dhaka, Bangladesh 1230</small>
                    <small> <AiFillMail /> dreamweaverphotography.bd@gmail.com</small>
                    <small> <AiFillPhone /> +88 01670 078953</small>
                </div>
            </div>
            <small>Copyright © {year}. All right reserved dreamweaver.com.bd</small>
        </footer>
    );
};

export default Footer;