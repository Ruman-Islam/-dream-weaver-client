import React from 'react';
import './Package.css';

const Package = (props) => {
    const { name, price, features } = props.package;
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
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Package;