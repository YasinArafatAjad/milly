import './App.css'
import Home from './Component/Pages/Home'
import LendenPage from "./Component/Pages/LendenPage";
import BazarListPage from "./Component/Pages/BazarListPage";
import BazarCostPage from "./Component/Pages/BazarCostPage";
import ExtraCostPage from "./Component/Pages/ExtraCostPage";
import ErrorPage from "./Component/Pages/ErrorPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messenger from './Component/Chat/Messenger';
import SummuryPage from './Component/Pages/SummuryPage';
import NewsPage from './Component/Pages/NewsPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BazarListPage />} />
          <Route path='/meal' element={<Home/>} />
          <Route path='/lenden' element={<LendenPage />} />
          {/* <Route path='/BazarListPage' element={<BazarListPage />} /> */}
          <Route path='/bazarCostPage' element={<BazarCostPage />} />
          <Route path='/extraCostPage' element={<ExtraCostPage />} />
          <Route path='/summury' element={<SummuryPage />} />
          <Route path='/*' element={<ErrorPage />} />
          {/* <Route path='/news*' element={<NewsPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Messenger />
    </>
  )
}

export default App
