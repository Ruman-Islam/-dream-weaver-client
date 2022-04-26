import { useParams } from 'react-router-dom';
import Menubar from '../Shared/Menubar/Menubar';
import Booking from './Booking';
import Package from '../Packages/Package';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Checkout.css';

const Checkout = () => {
    const [booked, setBooked] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState({});

    // getting package id for dynamic route //
    const { packageId } = useParams();

    useEffect(() => {
        const loadPackage = async () => {
            const { data } = await axios.get(`https://secret-basin-49124.herokuapp.com/package/${packageId}`)
            setSelectedPackage(data)
        }
        loadPackage();
    }, [packageId])

    const notify = () => {
        toast.success("Thank you for booking", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        if (booked) {
            notify();
        }
    }, [booked])

    return (
        <div>
            <div className='blog-banner-wrapper'>
                {/* <PageTitle title="Checkout" /> */}
                <Menubar />
            </div>
            <div className='checkout-container'>
                <Package pg={selectedPackage} checkoutPage />
                <div className='booking-container'>
                    <Booking setBooked={setBooked} booked={booked} pg={selectedPackage} />
                </div>
            </div>

        </div>
    );
};

export default Checkout;