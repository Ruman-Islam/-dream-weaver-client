import { useParams } from 'react-router-dom';
import { getPackage } from '../../packages';
import Menubar from '../Shared/Menubar/Menubar';
import Booking from './Booking';
import Package from '../Packages/Package';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';
import { useEffect, useState } from 'react';

const Checkout = () => {
    const [booked, setBooked] = useState(false);
    const notify = () => {
        toast.success("Thank you for booking", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // getting package id for dynamic route //
    const { packageId } = useParams();
    // get matching selected package from packages.js //
    const selectedPackage = getPackage(packageId);

    useEffect(() => {
        if (booked) {
            notify();
        }
    }, [booked])

    return (
        <div>
            <div className='blog-banner-wrapper'>
                <Menubar />
            </div>
            <div className='checkout-container'>
                <Package package={selectedPackage} checkoutPage />
                <div className='shipment-container'>
                    <Booking setBooked={setBooked} />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;