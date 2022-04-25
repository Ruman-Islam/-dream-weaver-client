import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Menubar from '../Shared/Menubar/Menubar';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className='dashboard'>
            <div className='blog-banner-wrapper'>
                {/* <PageTitle title="Checkout" /> */}
                <Menubar />
            </div>
            <h2>Manage your products</h2>
            <div className='dashboard-btn'>
                <button onClick={() => navigate('add-product')}>
                    Add Product
                </button>
                <button onClick={() => navigate('delete-product')}>
                    Delete Product
                </button>
            </div>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;