import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Icon } from '@iconify/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <nav>
        <h1 className='logo'>
          <Link to="">
            <img src="/images/logo_black.png" alt="logo-img" />
          </Link>
        </h1>
        <div className={`gnb-icon-btn ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}>
          <Icon className="bars" icon="uil:bars" />
          <Icon className="close" icon="ph:x" />
        </div>
      </nav>
      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <nav className="sidebar-nav">
          <h2 className="visually-hidden">사이드바 메뉴</h2>
          <div className="side-menu-list">
            <h3><Link to=''>수거함 위치 알리미</Link></h3>
            <ul className="side-menu-item">
                <li><Link to=''>의류수거함</Link></li>
                <li><Link to=''>폐건전지, 형광등</Link></li>
              </ul>
            <h3><Link to=''>지구 살리기 Tip!</Link></h3>
            <ul className="side-menu-item">
                <li><Link to=''>분리수거하고 돈벌기</Link></li>
                <li><Link to=''>가까운 곳에 기부하기</Link></li>
              </ul>
            <h3><Link to=''>탄소중립이란?</Link></h3>
            <ul className="side-menu-item">
                <li><Link to=''>탄소중립이란</Link></li>
                <li><Link to=''>탄소중립 생활실천</Link></li>
                <li><Link to=''>탄소중립 캠페인</Link></li>
            </ul>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;