import React from 'react';
import './Main.css';
import { Route } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route index path='/' />
      </Routes>
    </div>
  );
};

export default Main;