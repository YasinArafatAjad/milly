import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import BazarCost from '../BazarCost/BazarCost';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <BazarCost/>
            <Footer />
        </>
    );
};

export default Home;