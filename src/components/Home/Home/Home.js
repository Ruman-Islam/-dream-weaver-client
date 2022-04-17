import React from 'react';
import Packages from '../../Packages/Packages';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Packages isHome />
        </div>
    );
};

export default Home;