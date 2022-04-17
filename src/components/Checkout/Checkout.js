import { useParams } from 'react-router-dom';
import { getPackage } from '../../packages';
import Menubar from '../Shared/Menubar/Menubar';
import Shipment from './Shipment';
import Package from '../Packages/Package';
import './Checkout.css';

const Checkout = () => {
    const { packageId } = useParams();
    const selectedPackage = getPackage(packageId);


    return (
        <div>
            <Menubar />
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