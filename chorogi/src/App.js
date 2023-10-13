import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './device/MobileVer/Index';
import HomePage from './device/MobileVer/page/HomePage';
import Map from './device/MobileVer/page/Map';
import Detail from './device/MobileVer/page/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}>
            <Route index element={<HomePage/>} />
            <Route path='map' element={<Map/>} />
            <Route path='detail' element={<Detail/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
