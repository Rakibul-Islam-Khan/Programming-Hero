import React from 'react';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Foods/>
        </div>
    );
};

export default Home;