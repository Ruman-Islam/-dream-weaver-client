import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import './Menubar.css';

const Menubar = () => {
    return (
        <nav>
            <div><h2 className='nav-title'>Dream Weaver</h2></div>
            <div className='navigation-items'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to="/Packages">Packages</CustomLink>
                <CustomLink to="/checkout">Checkout</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Menubar;