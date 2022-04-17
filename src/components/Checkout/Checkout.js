import { useParams } from 'react-router-dom';
import { getPackage } from '../../packages';
import Menubar from '../Shared/Menubar/Menubar';
import './Checkout.css';
import Shipment from './Shipment';

const Checkout = () => {
    const { packageId } = useParams();
    const selectedPackage = getPackage(packageId);
    const { name, price, features } = selectedPackage;


    return (
        <div>
            <Menubar />
            <div className='checkout-container'>
                <div className='pricing-box'>
                    <div className='package-header'>
                        <small>{name}</small>
                        <h3>TK. {price}/=</h3>
                    </div>
                    {/* <div className='pricing-features'>
                        <ul>
                            {features.map(element => <li>{element}</li>)}
                        </ul>
                    </div> */}
                </div>
                <div className='shipment-container'>
                    <Shipment />
                </div>
            </div>
        </div>
    );
};

export default Checkout;