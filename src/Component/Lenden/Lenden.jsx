import { LiaNotesMedicalSolid } from 'react-icons/lia';
import './Lenden.css'
import React from 'react';
import { GiPayMoney } from 'react-icons/gi';

const lenden = () => {
    return (
        <>
            <section id="lenden" className="py-20 bg-[#e35959]">
                <div className="container">
                    <div className="col flex flex-col items-center justify-center gap-8">
                    <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> লেনদেনের হিসাব (এপ্রিল_মে-২০২৪):</h3>
                        <table className="lenden_table text-center" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2">Name</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2">Amount</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2">Total Amount</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">Proshanta </td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1000+400+422+</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1822</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">Pabitra</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1000+55</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1055</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">Pronob</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1000</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1000</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">04</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">Protik1</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1000+55</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">1055</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">05</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">Protik2</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">0</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">0</td>
                            </tr>
                           
                        </table>
                        {/* summury of April-May*/}
                        <p className=" text-[#fcfdfd] flex gap-1 items-center"><GiPayMoney />মোট জমাঃ 10,700 টাকা ।</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default lenden;