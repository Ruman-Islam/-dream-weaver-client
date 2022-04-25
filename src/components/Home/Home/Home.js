import React from 'react';
import Packages from '../../Packages/Packages';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import PageTitle from '../../PageTitle/PageTitle';
import SocialIcons from '../SocialIcons/SocialIcons';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Banner />
            <Packages isHome />
            <Review />
            <SocialIcons />
        </div>
    );
};

export default Home;