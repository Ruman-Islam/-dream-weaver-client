import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import Packages from './Packages';
import PageTitle from '../PageTitle/PageTitle';
import './AllPackages.css';

const AllPackages = () => {
    return (
        <div className='allPackages-container'>
            <div className='allPackages-banner-wrapper'>
                <PageTitle title="Packages" />
                <Menubar />
            </div>
            <Packages />
        </div>
    );
};

export default AllPackages;