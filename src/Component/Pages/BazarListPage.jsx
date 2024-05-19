import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BazarList from '../BazarList/BazarList';

const BazarListPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <BazarList />
            <Footer />
        </>
    );
};

export default BazarListPage;