import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './device/MobileVer/Index';
import HomePage from './device/MobileVer/page/HomePage';
import MapPage from './device/MobileVer/page/MapPage';
import Detail from './device/MobileVer/page/Detail';


function MobilePage() {
  return (
    <div className="MobilePage">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}>
            <Route index element={<HomePage/>} />
            <Route path=':mapSlug' element={<MapPage/>} />
            <Route path=':mapSlug/:detailSlug' element={<Detail/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MobilePage;
