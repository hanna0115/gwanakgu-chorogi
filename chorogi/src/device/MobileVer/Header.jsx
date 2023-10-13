import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  /*const gnbIconBtn = document.querySelector('.gnb-icon-btn');
  const sidebar = document.querySelector('.sidebar');
  console.log(gnbIconBtn,sidebar); 
  gnbIconBtn.addEventListener('click', function(){
    sidebar.classList.add('is-active');
  })*/
  return (
    <header>
      <nav>
        <h1 className='logo'>
          <Link to="">
            <img src="/images/logo_black.png" alt="logo-img" />
          </Link>
        </h1>
        <div class="gnb-icon-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <aside class="sidebar sm-only is-active">
        <nav class="sidebar-nav">
          <h2 class="visually-hidden">사이드바 메뉴</h2>
          <ul class="side-menu-list">
            <li><Link to=''>수거함 위치 알리미</Link>
              <ul className="side-menu-item">
                <li><Link to=''>의류수거함</Link></li>
                <li><Link to=''>폐건전지, 형광등</Link></li>
              </ul>
            </li>
            <li><Link to=''>지구 살리기 Tip!</Link>
              <ul className="side-menu-item">
                <li><Link to=''>분리수거하고 돈벌기</Link></li>
                <li><Link to=''>가까운 곳에 기부하기</Link></li>
              </ul>
            </li>
            <li><Link to=''>탄소중립이란?</Link>
              <ul className="side-menu-item">
                <li><Link to=''>탄소중립이란</Link></li>
                <li><Link to=''>탄소중립 생활실천</Link></li>
                <li><Link to=''>탄소중립 캠페인</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

    </header>
  );
};

export default Header;