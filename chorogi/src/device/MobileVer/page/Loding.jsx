import React from 'react';
import './Loding.css';

const Loding = () => {
  return (
    <div className='loding-box'>
      <img className='logo' src="./images/logo_black.png" alt="로고 이미지" />
      <img className='mascot' src="./images/light bulb and research.png" alt="초록이 이미지" />
      <img className='earth' src="./images/earth.png" alt="지구 이미지" />
    </div>
  );
};

export default Loding;