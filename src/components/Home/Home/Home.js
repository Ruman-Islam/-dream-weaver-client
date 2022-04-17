import React from 'react';
import Packages from '../../Packages/Packages';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Packages isHome />
            <Review />
        </div>
    );
};

export default Home;