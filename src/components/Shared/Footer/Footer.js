import React from 'react';
import { IoLocationOutline, AiOutlineMail, BsFillTelephoneFill, AiOutlineExclamationCircle } from "react-icons/ai";
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
                    <small> <AiOutlineExclamationCircle className='warning-icon' /> House#23,Road#1,Sector#9,Uttara. Dhaka, Bangladesh 1230</small>
                    <small> <AiOutlineExclamationCircle className='warning-icon' /> dreamweaverphotography.bd@gmail.com</small>
                    <small> <AiOutlineExclamationCircle className='warning-icon' /> +88 01670 078953</small>
                </div>
            </div>
            <small>Copyright © {year}. All right reserved dreamweaver.com.bd</small>
        </footer>
    );
};

export default Footer;