import React from 'react';
import Header from '../Header/Header'
import Meal from '../Meal/Meal'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Meal />
            <Footer />
        </>
    );
};

export default Home;