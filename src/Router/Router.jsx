import './Router.css'
import React from 'react';
import Home from '../Component/Pages/Home';
import NewsPage from '../Component/Pages/NewsPage';
import BazarListPage from '../Component/Pages/BazarListPage';
import ErrorPage from '../Component/Pages/ErrorPage';
import ExtraCostPage from '../Component/Pages/ExtraCostPage';
import LendenPage from '../Component/Pages/LendenPage';
import SummuryPage from '../Component/Pages/SummuryPage';
import BazarCostPage from '../Component/Pages/BazarCostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    {/* <Route path='/BazarList' element= {<BazarListPage />}/> */}
                    <Route path='/lenden' element={<LendenPage />} />
                    <Route path='/bazarCostPage' element={<BazarCostPage />} />
                    {/* <Route path='/extraCostPage' element={<ExtraCostPage />} /> */}
                    {/* <Route path='/summury' element={<SummuryPage />} /> */}
                    <Route path='/*' element={<ErrorPage />} />
                    {/* <Route path='/BazarListPage' element={<BazarListPage />} /> */}
                    {/* <Route path='/news*' element={<NewsPage />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;