import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Error />
            <Footer />
        </>
    );
};

export default ErrorPage;