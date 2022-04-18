import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css';

const Package = ({ checkoutPage, package: { id, name, price, features, imageURL } }) => {  // package //
    const navigate = useNavigate();
    return (
        <div className='pricing-box'>
            <div className='package-header'>
                <img src={imageURL} alt="" />
                <div className='price-content'>
                    <small>{name}</small>
                    <h3>TK. {price}/=</h3>
                </div>
            </div>
            <div className='pricing-features'>
                <ul>
                    {features.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
                {checkoutPage ?
                    null
                    : <div className='pricing-action'>
                        <button onClick={() => navigate(`/checkout/${id}`)}>Book Now</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Package;