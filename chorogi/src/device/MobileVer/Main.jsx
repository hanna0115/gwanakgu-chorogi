import React from 'react';
import './Main.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Map from './page/Map';
import Detail from './page/Detail';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>} />
          <Route path='map' element={<Map/>} />
          <Route path='detail' element={<Detail/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;