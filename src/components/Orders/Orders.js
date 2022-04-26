import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useFirebase from '../../Firebase/useFirebase';
import Menubar from '../Shared/Menubar/Menubar';

const Orders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `https://secret-basin-49124.herokuapp.com/orders?email=${email}`
        const getOrders = async () => {
            try {
                axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => {
                        setOrders(res.data);
                    })
            } catch (err) {
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user, navigate])

    return (
        <>
            <div className='blog-banner-wrapper'>
                {/* <PageTitle title="Checkout" /> */}
                <Menubar />
            </div>
            <div className='packages-container'>
                <div className='packages-wrapper container'>
                    {
                        orders.map(pg =>
                            <div key={pg._id}>
                                <div style={{ padding: '10px' }} className='pricing-box'>
                                    <div>
                                        <h3 className='packages-title'>{pg?.packageName}</h3>
                                        <h4 className='packages-title'>{pg?.userName}</h4>
                                    </div>
                                    <div className='pricing-features'>
                                        <ul style={{ textAlign: 'left' }}>
                                            <li><strong>Event Date: </strong>{pg?.eventDate}</li>
                                            <li><strong>Order Date:</strong> {pg.orderDate}</li>
                                            <li><strong>Email:</strong> {pg.email}</li>
                                            <li><strong>Address:</strong> {pg.address}</li>
                                            <li><strong>Phone:</strong> {pg.phone}</li>
                                            <li><strong>Price:</strong> TK {pg.packagePrice}/=</li>
                                            <li><strong>Special Note:</strong> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Orders;