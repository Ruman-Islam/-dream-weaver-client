import React from 'react';
import useFirebase from '../../Firebase/useFirebase';
import googleLogo from '../../assets/images/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png';
import githubLogo from '../../assets/images/101-1017465_github-github-icon-png-grey.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const {
        googleSignIn,
        facebookSignIn,
        googleLoading,
        fbLoading,
        error
    } = useFirebase();
    return (
        <div className='social-button'>
            <div className='or-line'>
                <div></div>
                <small>or</small>
                <div></div>
            </div>
            <button
                onClick={(e) => googleSignIn(e)}>
                <img src={googleLogo} alt="" />
                <div className='social-btn-text-wrapper'>
                    <small>
                        {googleLoading ? 'Loading...' : 'Continue with Google'}
                    </small>
                </div>
            </button>
            <button
                onClick={(e) => facebookSignIn(e)}>
                <img src={githubLogo} alt="" />
                <div className='social-btn-text-wrapper'>
                    <small>
                        {fbLoading ? 'Loading...' : 'Continue with Facebook'}
                    </small>
                </div>
            </button>
            <br />
            <small className='text-danger my-5'>{error}</small>
        </div>
    );
};

export default SocialLogin;