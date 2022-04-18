import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import Packages from './Packages';
import './AllPackages.css';

const AllPackages = () => {
    return (
        <div className='allPackages-container'>
            <div className='allPackages-banner-wrapper'>
                <Menubar />
            </div>
            <Packages />
        </div>
    );
};

export default AllPackages;