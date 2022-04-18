import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../Firebase/useFirebase.js';
import './Shipment.css';

const Shipment = () => {
    // logged in user info //
    const { user } = useFirebase();
    const [userName, setUserName] = useState({ value: "", error: "" });
    const [address, setAddress] = useState({ value: "", error: "" });
    const [phone, setPhone] = useState({ value: "", error: "" });

    // getting email & password & validation from input //
    const handleUserName = e => {
        const userNameInput = e.target.value;
        if (userNameInput) {
            setUserName({ value: userNameInput, error: "" });
        }
    }

    const handleAddress = e => {
        const addressInput = e.target.value;
        setAddress({ value: addressInput, error: "" });
    }

    const handlePhone = e => {
        const phoneInput = e.target.value;
        setPhone({ value: phoneInput, error: "" })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (userName.value === "") {
            setUserName({ value: "", error: "Username is required" })
        } if (address.value === "") {
            setAddress({ value: "", error: "Address is required" })
        } if (phone.value === "") {
            setPhone({ value: "", error: "Phone is required" })
        }
    }
    //......................................... //

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h5>Contact Information</h5>
                <label htmlFor="username">You name</label>
                <input onBlur={handleUserName} type="text" name="username" id="username" />
                {userName.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {userName.error}
                    </small>
                )}
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" name="email" id="email" />
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddress} type="text" name="address" id="address" />
                {address.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {address.error}
                    </small>
                )}
                <label htmlFor="phone">phone</label>
                <input onBlur={handlePhone} type="text" name="phone" id="phone" />
                {phone.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {phone.error}
                    </small>
                )}
                <br />
                <button
                    className='login-btn' type='submit'>
                    Checkout
                </button>
            </form>
        </div>
    );
};

export default Shipment;