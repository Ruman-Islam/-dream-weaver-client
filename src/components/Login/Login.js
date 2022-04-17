import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../Firebase/useFirebase';
import Menubar from '../Shared/Menubar/Menubar';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import './Login.css';

const Login = () => {
    const {
        handleSignWithInEmailAndPassword,
        emailLoading,
        error
    } = useFirebase();

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const handleEmail = event => {
        const emailInput = event.target.value;
        if ((emailInput === "")) {
            setEmail({ value: '', error: 'Email Required' })
        } else {
            setEmail({ value: emailInput, error: '' })
        }
    }

    const handlePassword = event => {
        const passwordInput = event.target.value;
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

    return (
        <div>
            <Menubar />
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
                    <small>
                        <Link to='/signup'>
                            New to Dream Weaver?
                        </Link>
                    </small>
                    <SocialLogin />
                </form>
            </div>
        </div>
    );
};

export default Login;