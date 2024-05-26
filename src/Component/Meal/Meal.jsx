import './Meal.css';
import { FaCarrot } from "react-icons/fa6";
import React, { Component } from 'react';
import { LiaNotesMedicalSolid } from 'react-icons/lia';

class Meal extends Component {
    render() {
        return (
            <>
                <section id="meal" className="py-20 bg-[#e35959]">
                     <div className="container">
                        <div className="col flex flex-col items-center justify-center gap-8 overflow-x-auto">
                            {/* Bazar_Date Pick */}
                            {/* <div className="Date_picker_Area text-center bg-[#f1904fd6] rounded-lg shadow-sm shadow-white p-4 mb-20">
                                <p className="text-white text-2xl flex items-center justify-center gap-3 mb-4">
                                    <span className="">Claim your <span className="text-yellow-500">Bazar</span> Date</span>
                                    <span className=""><a href="https://forms.gle/o45ZUgbbe4sF6k288" target='_blank' className="uppercase text-center px-2 py-1 border-2 rounded-xl shadow-xl bg-rose-400 hover:bg-pink-500 transition-all ease-out duration-300">Claim</a></span>
                                </p>
                                <p className="text-white text-md">(Minimum 5 days Required)</p>
                            </div> */}

                            <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> মিলের হিসাব (মে-২০২৪):</h3>
                            <table border={0} cellPadding={0} cellSpacing={0} className=' self-start meal_table text-center shadow-xl w-[80vw]'>
                                <tr >
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>name</td>
                                    <td colSpan={31} className='uppercase bold text-lg border-2 py-3 px-1'>Meal & Date</td>
                                </tr>
                                <tr className='border-y-4 bg-zinc-400'>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>নাম/তারিখ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০১</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০২</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৩</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৪</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৫</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৬</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৭</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৮</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>০৯</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১০</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১১</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১২</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৩</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৪</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৫</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৬</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৭</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৮</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>১৯</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২০</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২১</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২২</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৩</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৪</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৫</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৬</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৭</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৮</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৯</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>৩০</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>৩১</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>মোট মিল</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>আলভি</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>3</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>35.5</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>সিয়াম</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>8</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>সাগর</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>28.5</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>নোহাশ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>36</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>প্রশান্ত</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>59</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>ইয়াসিন আরাফাত আজাদ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>3</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>50</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>নিলয়</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'></td>                                    
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>30</td>
                                </tr>
                            </table>
                            {/* summury of May */}
                            <p className=" text-[#fcfdfd] flex gap-1 items-center"><FaCarrot />মোট মিলঃ 247 টি ।</p>
                            
                            <h3 className="ms-4 mb-3 text-center text-[#fcfdfd] flex items-center gap-1"><LiaNotesMedicalSolid size={23}/> মিলের হিসাব (এপ্রিল-২০২৪):</h3>
                            <table border={0} cellPadding={0} cellSpacing={0} className=' meal_table text-center shadow-xl w-[80vw]'>
                                <tr >
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>name</td>
                                    <td colSpan={7} className='uppercase bold text-lg border-2 py-3 px-1'>Meal & Date</td>
                                </tr>
                                <tr className='border-y-4 bg-zinc-400'>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>নাম/তারিখ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৬</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৭</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৮</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>২৯</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>৩০</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>মোট মিল</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>আলভি</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>৭.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>সিয়াম</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>১০.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>সাগর</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>৬.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>নোহাশ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>1</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>৬.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>প্রশান্ত</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>১০.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>ইয়াসিন আরাফাত আজাদ</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>2.5</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>১০.৫</td>
                                </tr>
                                <tr>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-gray-500'>নিলয়</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1'>0</td>
                                    <td className='uppercase bold text-lg border-2 py-3 px-1 bg-slate-400'>০</td>
                                </tr>
                            </table>                            
                            {/* summury of April */}
                            <p className=" text-[#fcfdfd] flex gap-1 items-center"><FaCarrot />মোট মিলঃ ৫২ টি ।</p>
                           
                        </div>
                     </div>
                </section>
            </>
        );
    }
}

export default Meal;