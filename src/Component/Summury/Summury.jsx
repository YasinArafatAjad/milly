import './Summury.css'
import React , { useRef, useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

const Summury = () => {
        
    const spanRef = useRef(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (spanRef.current) {
        const BazarC = spanRef.current.textContent;

        // Extract numbers and operator from the content
        const [num1, operator, num2] = BazarC.split(/([+])/).map(item => item.trim());
        
        // Calculate the result based on the operator
        let calcResult;
        if (operator === '+') {
            calcResult = parseInt(num1) + parseInt(num2);
        }

        // Set the calculated result to state
        setResult(calcResult);
    }
}, []);
console.log(result);


    return (
        <>
            <section id="summury" className="py-20 bg-[#e35959]">
                <h1 className="heading text-center text-white text-2xl mb-4 underline">Summury of April-May (2024)</h1>
                <div className="summury_May text-center text-lg text-[#1f2937]">
                    <p className="text-xl">বাজার খরচঃ <span className="BazarC">1490+5345</span> টাকা</p>
                    <p className="text-xl">মোট বাজার খরচঃ 6835 টাকা</p>
                    <p className="text-xl">বাড়তি খরচঃ 1950 টাকা</p>
                    <p className="text-xl">মোট মিলঃ 52+195 = 247</p>
                    <br />
                    <p className="text-xl">মোট জমাঃ 9000 টাকা</p>
                    <p className="text-xl">মোট খরচঃ 8785 টাকা</p>
                    <br />
                    <p className="text-xl">হ্যান্ড-ক্যাশঃ 215 টাকা</p>
                    <p className="text-xl">মিল রেটঃ -</p>
                </div>
            </section>
        </>
    );
};

export default Summury;