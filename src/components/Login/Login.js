import React, { useEffect, useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../Firebase/useFirebase';
import Menubar from '../Shared/Menubar/Menubar';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const notify = () => {
        toast.success("Password reset email sent!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const navigate = useNavigate();
    const {  // Receiving sign in function from useFirebase hook //
        handleSignWithInEmailAndPassword,
        handlePasswordReset,
        emailLoading,
        error,
        resetEmail
    } = useFirebase();

    useEffect(() => {
        if (resetEmail) {
            notify();
        }
    }, [resetEmail])

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const handleEmail = e => {
        const emailInput = e.target.value;
        if ((emailInput === "")) {
            setEmail({ value: '', error: 'Email Required' })
        } else {
            setEmail({ value: emailInput, error: '' })
        }
    }

    // Validation //
    const handlePassword = e => {
        const passwordInput = e.target.value;
        if (passwordInput === '') {
            setPassword({ value: '', error: 'Password Required' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.value && password.value) {
            handleSignWithInEmailAndPassword(email.value, password.value);
        } else {
            if (email.value === '') {
                setEmail({ value: '', error: 'Email Required' })
            }
            if (password.value === '') {
                setPassword({ value: '', error: 'Password Required' })
            }
        }
    }

    return (  // Sign in with email and password form //
        <div>
            <div className='blog-banner-wrapper'>
                <Menubar />
            </div>
            <div className='form-container'>
                <form onSubmit={handleLogin}>
                    <h5>Log In</h5>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="" id="email" />
                    {email.error &&
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {email.error}
                        </small>
                    }
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="" id="password" />
                    {password.error &&
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {password.error}
                        </small>
                    }
                    <br />
                    <button
                        className='login-btn' type='submit'>
                        {emailLoading ? 'Loading...' : 'Login'}
                    </button>
                    {error &&
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {error}
                        </small>}
                    <label
                        style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
                        onClick={() => navigate('/signup')}>
                        New to Dream Weaver?
                    </label>
                    <label
                        style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
                        onClick={() => handlePasswordReset(email.value)}>
                        Reset password
                    </label>
                    <ToastContainer />
                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default Login;