import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer" className="">
                    {/* bottom footer */}
                    <div class="bottom-footer">
                        <p class=" py-3 text-center text-[#222] font-eng font-thin bg-[#F47C7C] flex flex-wrap justify-center items-center">
                        &copy; <span>All Rights Reserved</span> &nbsp;&nbsp;
                        <a href="https://www.facebook.com/yasinarafatajad" target='_blank' className="font-serif font-bold text-lg text-[#fbfdfd] underline">Yasin Arafat Ajad</a>

                            {/* <Link spy={true} smooth={true} offset={50} duration={100}  ></Link> */}
                        </p>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;