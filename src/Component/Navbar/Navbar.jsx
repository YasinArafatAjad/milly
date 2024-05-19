import './Navbar.css';
import Logo from './img/Milly_logo.png';
// import { a } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaBarsStaggered,FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const navHandler = ()=> {
        setNav(!nav);
    };    
    return (
        <>
            <nav id="Navbar" className="Navbar">
                <div className="row">
                    <div className="container relative">
                        <div className="col bg-[rgba(255,255,255,0.2)] lg:bg-transparent shadow-md lg:shadow-none flex justify-between items-center w-full px-3 py-4 fixed lg:absolute top-0 left-0 z-[99999999]">
                            <div className="logo">
                                <a href="/" className="cursor-default">
                                    <LazyLoadImage effect="blur" src={Logo} className="md:w-4/5 xl:w-full"/>
                                </a>
                            </div>
                            <div className={`navItem flex flex-col lg:flex-row items-start lg:items-center gap-y-[15vh] bg-[rgba(255,255,255,0.25)] lg:bg-[transparent] h-[100vh] lg:h-auto w-[40vw] min-w-[250px] lg:w-auto fixed top-0 ${nav ? `right-0`:`-right-[100vh]`} px-8 lg:px-0 py-12 lg:py-0 shadow-2xl lg:shadow-none lg:static lg:gap-[2vw] xl:gap-[3vw] 2xl:gap-[4vw] 4k:gap-[6vw] transition-all ease-in duration-500`}>
                                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-[5vh] pt-[10vh] lg:pt-0 lg:gap-[2vw] xl:gap-[3vw] 4k:gap-[4vw]">
                                    <li>
                                        <a href="/" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative" >
                                        হোম
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/news" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative" >
                                        নিউজ
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/meal" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        মিল
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/lenden" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        লেনদেন হিসাব
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="/BazarListPage" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        বাজার তালিকা
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="/BazarCostPage" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        বাজার খরচ
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ExtraCostPage" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        বাড়তি খরচ
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Summury" spy={true} smooth={true} offset={50} duration={1000} className=" text-black-2 text-[18px] font-sofia not-italic font-normal leading-normal capitalize hover:text-primary transition-all ease-linear duration-500 relative">
                                        মাসিক খসড়া
                                        <span className="navline bg-[#ad0808] h-0.5 w-0 absolute -bottom-[0.02rem] left-0 transition-all ease-in duration-300"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {nav ? <FaXmark onClick={()=>navHandler()} size={40} className="lg:hidden z-[999999999] text-[#3b1f1f]"/> : <FaBarsStaggered onClick={()=>navHandler()} size={40} className="lg:hidden z-[999999999] text-[#3b1f1f]"/>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;