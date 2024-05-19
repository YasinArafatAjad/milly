import React from 'react';
import News from '../News/News';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NewsPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <News />
            <Footer />
        </div>
    );
};

export default NewsPage;