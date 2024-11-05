import './BazarCost.css'
import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { LiaNotesMedicalSolid } from 'react-icons/lia';

const BazarCost = () => {
    return (
        <>
            <section id="bazarCost" className="py-20 bg-[#e35959]">
                <div className="container">
                    <div className="col flex flex-col items-center justify-center gap-4">
                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> বাজার খরচ (অক্টোবর/নভেম্বর-২০২৪):</h3>
                        <table className="bazarCost_table text-left shadow-lg" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 capitalize w-[15vw]">Date</td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 text-center capitalize">Total Cost</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">18/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">445 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">19/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">405 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">20/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">1655+67 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">04</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">22/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">100+110 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">05</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">23/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">435 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">06</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">25/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">390 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">07</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">27/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">330 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">08</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">28/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">110 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">09</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">30/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">50 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">10</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">31/10/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">110 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">11</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">01/11/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">55 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">12</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">02/11/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">450 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">13</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">03/11/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">55 tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">14</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">05/11/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">55 tk</td>
                            </tr>
                        </table>   
                        {/* summury of May */}
                        <p className=" text-[#fcfdfd] flex gap-1 items-center mb-16"><GiReceiveMoney />মোট বাজার খরচঃ 4822 টাকা ।</p>  

                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default BazarCost;