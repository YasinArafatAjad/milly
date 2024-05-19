import React from 'react';
import Summury from '../Summury/Summury';
import Header from "../Header/Header";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

const SummuryPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Summury/>
            <Footer />
        </>
    );
};

export default SummuryPage;