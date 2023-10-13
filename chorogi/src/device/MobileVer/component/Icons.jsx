import React from 'react';
import { Link } from 'react-router-dom';
import './Icons.css';

const Icons = () => {
  const quickMenu = [
    {
      title : '의류',
      icon : '/images/icon-clothes-9752702.png',
      to : '/clothes'
    },
    {
      title : '폐건전지‧형광등',
      icon : '',
      to : '/batteries-fluorescent lights'
    },
    {
      title : '네프론',
      icon : '',
      to : '/nephron'
    },
    {
      title : '기부하기',
      icon : '',
      to : '/donation'
    }
  ]

  return (
    <section className='quick-menu'>
      <h2>
        <span>환경 보호</span>를 위해<br/>
        <span>쓰레기 수거함 위치</span>를<br/>
        안내해드립니다.
      </h2>
      <div className="quick-menu-list">
        {
          quickMenu.map((item, index) => {
            return(
              <div className="quick-menu-item" key={index}>
                <Link to={item.to}>
                  <div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                </Link>
                <p>{item.title}</p>
              </div>
            )
          })
        }
      </div>
      <img src="/images/plastic bottle.png" alt="main character" />
    </section>
  );
};

export default Icons;