import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Map.css'
import { Icon } from '@iconify/react';

const Map = () => {
  const [isActive, setIsActive] = useState('false');

  const listToggle = () => {
    setIsActive(active => !active);
  }

  return (
    <div>
      <div className="map-title-box">
        <div className="map-title">
          <p>수거함 위치 알리미</p>
          <h3>의류 수거함</h3>
        </div>
        <div className="map-title-btn">
          <Link to="/"><Icon icon="uiw:left" /></Link>
          <Link to=""><Icon icon="octicon:info-24" /></Link>
        </div>
      </div>
      <div className="map">
        <div className={`location-box ${isActive ? 'active' : ''}`}>
          <div className="location-list-icon" onClick={listToggle}>
            <Icon icon="uiw:up" className='active' />
            <Icon icon="uiw:down" />
          </div>
          <ul className="location-list">
            <li className="location-item">
              <div className="location-info">
                <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                <div>
                  <p>낙성대동-1 <span>300m</span></p>
                  <p>서울특별시 관악구 관악로10길 15</p>
                </div>
              </div>
              <div className="location-item-btn">
                <Link to="">
                    <Icon icon="solar:share-bold-duotone" />
                    <span>공유하기</span>
                </Link>
                <Link to="">
                    <Icon icon="fluent:directions-24-regular" />
                    <span>길찾기</span>
                </Link>
              </div>
            </li>
            <li className="location-item">
              <div className="location-info">
                <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                <div>
                  <p>낙성대동-1 <span>300m</span></p>
                  <p>서울특별시 관악구 관악로10길 15</p>
                </div>
              </div>
              <div className="location-item-btn">
                <Link to="">
                    <Icon icon="solar:share-bold-duotone" />
                    <span>공유하기</span>
                </Link>
                <Link to="">
                    <Icon icon="fluent:directions-24-regular" />
                    <span>길찾기</span>
                </Link>
              </div>
            </li>
            <li className="location-item">
              <div className="location-info">
                <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                <div>
                  <p>낙성대동-1 <span>300m</span></p>
                  <p>서울특별시 관악구 관악로10길 15</p>
                </div>
              </div>
              <div className="location-item-btn">
                <Link to="">
                    <Icon icon="solar:share-bold-duotone" />
                    <span>공유하기</span>
                </Link>
                <Link to="">
                    <Icon icon="fluent:directions-24-regular" />
                    <span>길찾기</span>
                </Link>
              </div>
            </li>
            <li className="location-item">
              <div className="location-info">
                <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                <div>
                  <p>낙성대동-1 <span>300m</span></p>
                  <p>서울특별시 관악구 관악로10길 15</p>
                </div>
              </div>
              <div className="location-item-btn">
                <Link to="">
                    <Icon icon="solar:share-bold-duotone" />
                    <span>공유하기</span>
                </Link>
                <Link to="">
                    <Icon icon="fluent:directions-24-regular" />
                    <span>길찾기</span>
                </Link>
              </div>
            </li>
            <li className="location-item">
              <div className="location-info">
                <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                <div>
                  <p>낙성대동-1 <span>300m</span></p>
                  <p>서울특별시 관악구 관악로10길 15</p>
                </div>
              </div>
              <div className="location-item-btn">
                <Link to="">
                    <Icon icon="solar:share-bold-duotone" />
                    <span>공유하기</span>
                </Link>
                <Link to="">
                    <Icon icon="fluent:directions-24-regular" />
                    <span>길찾기</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;