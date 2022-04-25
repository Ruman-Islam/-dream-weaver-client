import React, { useState } from 'react';
import useFirebase from '../../Firebase/useFirebase';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import PageTitle from '../PageTitle/PageTitle';
import Menubar from '../Shared/Menubar/Menubar';

const Signup = () => {
    const navigate = useNavigate();
    const { // Create user id with email and password function from useFirebase hook // 
        handleCreateAccountWithEmailAndPassword,
        emailLoading,
        error
    } = useFirebase();

    const [userName, setUserName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });

    // Validations //
    const handleDisplayName = e => {
        const displayNameInput = e.target.value;
        if (displayNameInput) {
            setUserName({ value: displayNameInput, error: '' })
        }
    }

    const handleEmail = e => {
        const emailInput = e.target.value;
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInput)) {
            setEmail({ value: emailInput, error: '' });
        } else {
            setEmail({ value: '', error: 'Please provide a valid email' })
        }
    }

    const handlePassword = e => {
        const passwordInput = e.target.value;
        if (passwordInput.length < 6) {
            setPassword({ value: '', error: 'Password too short' })
        } else if (!/^(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a capital letter' })
        } else if (!/(?=.*[!@#$&*])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a special character' })
        } else if (!/(?=.*[0-9])/.test(passwordInput)) {
            setPassword({ value: '', error: 'Provide at least a number' })
        } else {
            setPassword({ value: passwordInput, error: '' })
        }
    }

    // Register function //
    const handleRegister = (e) => {
        e.preventDefault();
        if (userName.value === "") {
            setUserName({ value: "", error: "Username is required" });
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (userName.value && email.value && password.value && confirmPassword.value) {
            if (confirmPassword.value !== password.value) {
                setConfirmPassword({ value: "", error: "Password mismatched" });
            } else {
                handleCreateAccountWithEmailAndPassword(userName.value, email.value, password.value);
            }
        }
    }

    return (
        <div>
            <div className='blog-banner-wrapper'>
                <PageTitle title="Sign up" />
                <Menubar />
            </div>
            <div className='form-container'>
                <form onSubmit={handleRegister}>
                    <h5>Sign Up</h5>
                    <label htmlFor="username">Username</label>
                    <input onBlur={handleDisplayName} type="text" name="" id="username" />
                    {userName.error && (
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {userName.error}
                        </small>
                    )}
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="" id="email" />
                    {email.error && (
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {email.error}
                        </small>
                    )}
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="" id="password" />
                    {password.error && (
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {password.error}
                        </small>
                    )}
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={(e) => setConfirmPassword({ value: e.target.value, error: "" })} type="password" name="" id="confirm-password" />
                    {confirmPassword.error && (
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {confirmPassword.error}
                        </small>
                    )}
                    <br />
                    <button
                        className='login-btn' type='submit'>
                        {emailLoading ? 'Loading...' : 'Create account'}
                    </button>
                    {error &&
                        <small className='error'>
                            <AiOutlineExclamationCircle className='warning-icon' />
                            {error}
                        </small>
                    }
                    <label
                        style={{ textDecoration: 'underline', color: '#1C1C1C', cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => navigate('/login')}>
                        Already have an account?
                    </label>
                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default Signup;