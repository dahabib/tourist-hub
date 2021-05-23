import React from 'react';
import Header from '../Header/Header';
import Places from '../Places/Places';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Places />
            <Services />
            <Reviews />
        </div>
    );
};

export default Home;