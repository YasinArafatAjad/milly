import { LiaNotesMedicalSolid } from 'react-icons/lia';
import './ExtraCost.css'
import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';

const ExtraCost = () => {
    return (
        <>
            <section id="extraCost" className="py-20">
                <div className="container">
                    <div className="col flex flex-col items-center justify-center gap-4">
                       
                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> বাড়তি খরচ (এপ্রিল_মে-২০২৪):</h3>
                        <table className="extraCost_table text-left shadow-lg" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-6 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-6 text-2xl font-sans bold border-2 capitalize w-[15vw]">Name</td>
                                <td className="py-3 px-6 text-2xl font-sans bold border-2 text-center capitalize">Cost</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">সিলিন্ডার গ্যাস</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center">1480tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">মুড়ি-চানাচুড়</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center">30tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">সড়িষা তেল</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center">40tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">04</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">কড়াই</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center">250tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">0৫</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">বটি দা</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center">150tk</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2">0৬</td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2"></td>
                                <td className="py-3 px-6 text-lg text-[#222] font-sans capitalize border-2 text-center"></td>
                            </tr>
                        </table>
                        {/* summury of April-May */}
                        <p className=" text-[#fcfdfd] flex gap-1 items-center"><GiReceiveMoney />মোট বাড়তি খরচঃ ১৯৫০ টাকা ।</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExtraCost;