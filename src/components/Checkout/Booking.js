import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import useFirebase from '../../Firebase/useFirebase.js';
import './Booking.css';

const Booking = ({ setBooked, booked, pg }) => {
    // logged in user info //
    const { user } = useFirebase();
    const [userName, setUserName] = useState({ value: "", error: "" });
    const [address, setAddress] = useState({ value: "", error: "" });
    const [phone, setPhone] = useState({ value: "", error: "" });
    const [eventDate, setEventDate] = useState({ value: "", error: "" });
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
        setPhone({ value: phoneInput, error: "" });
    }

    const handleEventDate = e => {
        const eventDateInput = e.target.value;
        setEventDate({ value: eventDateInput, error: "" });
    }

    const handleResetInput = e => {
        e.target.username.value = '';
        e.target.address.value = '';
        e.target.phone.value = '';
        e.target.eventDate.value = '';
    }

    const handleSubmit = e => {
        const date = new Date().getDate();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        e.preventDefault();
        if (userName.value === "") {
            setUserName({ value: "", error: "Username is required" })
        } else if (address.value === "") {
            setAddress({ value: "", error: "Address is required" })
        } else if (phone.value === "") {
            setPhone({ value: "", error: "Phone is required" })
        } else if (eventDate.value === "") {
            setEventDate({ value: "", error: "Date is required" })
        } else {
            const order = {
                userName: userName.value,
                email: user?.email,
                address: address.value,
                phone: phone.value,
                eventDate: eventDate.value,
                packageName: pg.name,
                orderDate: `${date}/${month}/${year}`
            }
            if (!booked) {
                axios.post("http://localhost:5000/addorder", order)
                    .then(res => {
                        setBooked(true);
                        handleResetInput(e);
                        console.log(res);
                    })
            }
        }
    }
    //......................................... //

    return (
        <div className='form-container booking-form'>
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
                <input value={user?.email} readOnly disabled type="email" name="email" id="email" />
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

                <label htmlFor="eventDate">Event Date</label>
                <input onBlur={handleEventDate} type="date" name="eventDate" id="eventDate" />
                {eventDate.error && (
                    <small className='error'>
                        <AiOutlineExclamationCircle className='warning-icon' />
                        {eventDate.error}
                    </small>
                )}
                <br />
                <input
                    disabled={isAgree ? false : true}
                    className={isAgree ? 'book-btn-true' : 'book-btn-false'} type='submit' value="Book" />
                <div className='check-container'>
                    <input onClick={() => setIsAgree(!isAgree)} type="checkbox" name="" id="check" />
                    <label htmlFor="check">Accept terms & conditions.</label>
                </div>
            </form>
        </div>
    );
};

export default Booking;