import { LiaNotesMedicalSolid } from 'react-icons/lia';
import './BazarList.css'
import React from 'react';

const BazarList = () => {
    return (
        <>
            <section id="bazarList" className="py-20 bg-[#e35959]">
                <div className="container">
                    <div className="col flex flex-col items-center justify-center gap-4">
                        
                        {/* List of May */}
                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> প্রত্যেকের বাজারের তারিখ (মে-২০২৪):</h3>
                        <table className="bazarList_table text-left shadow-lg mb-16" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2">Date</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2 text-center w-[40vw]">Name</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2 text-center">Activity</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">02/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">আজাদ-প্রশান্ত</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">04/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">-</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-[#222]">-</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">07/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">আজাদ-প্রশান্ত</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">04</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">09/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg। font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">05</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">12/05/24</td>                                
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">আজাদ-প্রশান্ত</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">06</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">14/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সিয়াম-আলভি</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">07</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">16/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">08</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">18/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সিয়াম-আলভি</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">09</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">20/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">10</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">22/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সিয়াম-আলভি</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">11</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">24/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">আজাদ-প্রশান্ত</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">12</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">26/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সিয়াম-আলভি</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold"></td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">13</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">28/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold"></td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">14</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">30/05/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold"></td>
                            </tr>
                        </table>
                        {/* List of April */}
                        <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> প্রত্যেকের বাজারের তারিখ (এপ্রিল-২০২৪):</h3>
                        <table className="bazarList_table text-left shadow-lg mb-16" border={0} cellPadding={0} cellSpacing={0}>
                            <tr className='border-b-4'>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2"></td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2">Date</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2 text-center w-[40vw]">Name</td>
                                <td className="py-3 px-1 text-2xl font-sans bold border-2 text-center">Activity</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">01</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">26/04/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">আজাদ-প্রশান্ত</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">02</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">28/04/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সিয়াম-আলভি</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-green-700">Done</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">03</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2">30/04/24</td>
                                <td className="py-3 px-1 text-lg text-[#222] font-sans capitalize border-2  text-center">সাগর-নুহাশ</td>
                                <td className="py-3 px-1 text-lg font-sans capitalize border-2 text-center font-bold text-red-500">Not...!</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BazarList;