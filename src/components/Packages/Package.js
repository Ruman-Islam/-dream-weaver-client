import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css';

const Package = (props) => {
    const { id, name, price, features } = props.package;
    const navigate = useNavigate();
    return (
        <div className='pricing-box'>
            <div className='package-header'>
                <small>{name}</small>
                <h3>TK. {price}/=</h3>
            </div>
            <div className='pricing-features'>
                <ul>
                    {features.map(element => <li>{element}</li>)}
                </ul>
                <div className='pricing-action'>
                    <button onClick={() => navigate(`/checkout/${id}`)}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Package;