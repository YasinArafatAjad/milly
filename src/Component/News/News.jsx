import React from 'react';
import './News.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// images
 import Ajad from '../../Assets/Images/me.jpg'

const News = () => {
    return (
        <>
            <section id="news" className="py-20 bg-[#e35959] min-h -[40vh]">
                <div className="row flex flex-col justify-center items-center">
                    <div className="col image">
                        <LazyLoadImage effect="blur" src={Ajad} className=''/>
                    </div>
                    <div className="col describe text-center">
                        <h2 className="">Meeting-1: 25/04/2024</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default News;