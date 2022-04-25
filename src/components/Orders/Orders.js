import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../Firebase/useFirebase';
import Menubar from '../Shared/Menubar/Menubar';

const Orders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            axios.get(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => {
                    setOrders(res.data);
                })
        }
        getOrders()
    }, [user])
    return (
        <>
            <div className='blog-banner-wrapper'>
                {/* <PageTitle title="Checkout" /> */}
                <Menubar />
            </div>
            <div className='packages-container'>
                <div className='packages-wrapper container'>
                    {
                        orders.map(pg => <div>
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