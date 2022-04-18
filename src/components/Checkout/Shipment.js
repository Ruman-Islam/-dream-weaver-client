import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../Firebase/useFirebase.js';
import './Shipment.css';

const Shipment = ({ setBooked }) => {
    // logged in user info //
    const { user } = useFirebase();
    const [userName, setUserName] = useState({ value: "", error: "" });
    const [address, setAddress] = useState({ value: "", error: "" });
    const [phone, setPhone] = useState({ value: "", error: "" });
    const [isAgree, setIsAgree] = useState(false);

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
        } else if (address.value === "") {
            setAddress({ value: "", error: "Address is required" })
        } else if (phone.value === "") {
            setPhone({ value: "", error: "Phone is required" })
        } else {
            setBooked(true);
        }
    }
    //......................................... //

    return (
        <div className='form-container shipment'>
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

                <label htmlFor="phone">Event Date</label>
                <input onBlur={handlePhone} type="date" name="phone" id="phone" />
                {phone.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {phone.error}
                    </small>
                )}
                <br />
                <input
                    disabled={!isAgree}
                    className={isAgree ? 'book-btn-true' : 'book-btn-false'} type='submit' value="Book" />
                <div className='check-container'>
                    <input onClick={() => setIsAgree(!isAgree)} type="checkbox" name="" id="check" />
                    <label htmlFor="check">Accept terms & conditions.</label>
                </div>
            </form>
        </div>
    );
};

export default Shipment;