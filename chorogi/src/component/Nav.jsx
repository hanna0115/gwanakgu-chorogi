import React from 'react';
import './Nav.css'
import logo from './logo.jpg'

const Nav = () => {
  let menuItems = [
    {to : '/menu1', text : '탄소중립이란?'},
    {to : '/menu2', text : '수거 위치 알리미'},
    {to : '/menu3', text : '지구 살리기 Tip!'}
  ]
  return (
    <header>
      <nav>
        <h1 className='logo'>
          <a href="">
            <img src={logo} alt="logo" />
          </a>
        </h1>

        <ul className='gnb-list'>
          {
            menuItems.map((item, index) => {
              return (
                <li className='gnb-itme' key={index}>
                  <a href={item.to}>{item.text}</a>
                </li>
              )
            })
          }
        </ul>
        <div id='data'>
          <div class='weather'>
            <p>날씨</p>
            <img src="" alt="" />
          </div>
          <div class='dust'>
            <p>미세먼지</p>
            <img src="" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Nav;