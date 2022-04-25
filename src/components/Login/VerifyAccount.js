import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import './Login.css';

const VerifyAccount = () => {
    const notify = () => {
        toast.success("A email verification code is sent.", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className='verify-btn-container'>
            <h1>Verify your email then reload the page again.</h1>
            <button
                className='verify-btn'
                onClick={async () => {
                    await sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            notify();
                        });
                }}>Send Code</button>
        </div>
    );
};

export default VerifyAccount;