import { useParams } from 'react-router-dom';
import { getPackage } from '../../packages';
import Menubar from '../Shared/Menubar/Menubar';
import Shipment from './Shipment';
import Package from '../Packages/Package';
import './Checkout.css';

const Checkout = () => {
    // getting package id for dynamic route //
    const { packageId } = useParams();
    // get matching selected package from packages.js //
    const selectedPackage = getPackage(packageId);

    return (
        <div>
            <div className='blog-banner-wrapper'>
                <Menubar />
            </div>
            <div className='checkout-container'>
                <Package package={selectedPackage} checkoutPage />
                <div className='shipment-container'>
                    <Shipment />
                </div>
            </div>
        </div>
    );
};

export default Checkout;