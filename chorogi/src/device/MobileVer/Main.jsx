import React from 'react';
import {  Outlet } from 'react-router-dom';
import './Main.css';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  );
};

export default Main;