import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './MobilePage.css';
import Index from './Index';
import HomePage from './page/HomePage';
import MapPage from './page/MapPage';
import DetailPage from './page/DetailPage';


function MobilePage() {
  return (
    <div className="MobilePage">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}>
            <Route index element={<HomePage/>} />
            <Route path=':mapSlug' element={<MapPage/>} />
            <Route path=':mapSlug/:detailSlug' element={<DetailPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MobilePage;
