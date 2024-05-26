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
                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> বাজার খরচ (মে-২০২৪):</h3>
                        <table className="bazarCost_table text-left shadow-lg" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 capitalize w-[15vw]">Date</td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 text-center capitalize">Total Cost</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">02/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">700tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">07/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">830tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">09/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">560tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">06</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">12/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">800tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">07</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">14/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">455tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">08</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">16/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">1010tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">09</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">18/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">280tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">10</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">20/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">705tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">11</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">22/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">385tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">12</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">24/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">710tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">13</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">26/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center"></td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">14</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">28/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center"></td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">15</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">30/05/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center"></td>
                            </tr>
                        </table>   
                        {/* summury of May */}
                        <p className=" text-[#fcfdfd] flex gap-1 items-center mb-16"><GiReceiveMoney />মোট বাজার খরচঃ 6435 টাকা ।</p>  

                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> বাজার খরচ (এপ্রিল-২০২৪):</h3>
                        <table className="bazarCost_table text-left shadow-lg" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 capitalize w-[15vw]">Date</td>
                                <td className="py-3 px-4 text-2xl font-sans bold border-2 text-center capitalize">Total Cost</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">25/04/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">230tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">26/04/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">560tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">28/04/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">700tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">04</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2">30/04/24</td>
                                <td className="py-3 px-4 text-lg text-[#222] font-sans capitalize border-2 text-center">0tk</td>
                            </tr>
                        </table>                        
                        {/* summury of April*/}
                        <p className=" text-[#fcfdfd] flex gap-1 items-center"><GiReceiveMoney />মোট বাজার খরচঃ 1490 টাকা ।</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BazarCost;