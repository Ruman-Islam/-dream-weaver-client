/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
    return (
        <div className='social-icons-wrapper'>
            <div className='container'>
                <span className='social-icons-title'>On social netowrks</span>
                <div className='icons-container'>
                    <ul>
                        <a href=""><li className='facebook-icon'><FontAwesomeIcon icon={faFacebookF} /></li></a>
                        <a href=""><li className='instagram-icon'><FontAwesomeIcon icon={faInstagram} /></li></a>
                        <a href=""><li className='google-icon'><FontAwesomeIcon icon={faGoogle} /></li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SocialIcons;