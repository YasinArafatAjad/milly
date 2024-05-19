import { LazyLoadImage } from 'react-lazy-load-image-component';
import ErrImg from '../../Assets/Images/err.gif'
import Header from '../Header/Header';
import './Error.css';
import React from 'react';

const Error = () => {
    return (
        <>
            <section id="error" className="py-40 bg-[#ebc5c5]">
                <div className="container">
                    <div className="col flex flex-col items-center justify-center gap-8">
                        <h3 className=" text-5xl text-center text-[#2e1212] mb-6">এখানে কিছু নাই</h3>
                        <LazyLoadImage effect="blur" src={ErrImg} className='-ms-4 h-[500px] scale-[3] mb-6'/>
                        <a href='/' className=' border-2 py-4 px-7 rounded-xl shadow-xl bg-rose-400 hover:bg-pink-500 transition-all ease-out duration-300'>ফিরে যাও</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;