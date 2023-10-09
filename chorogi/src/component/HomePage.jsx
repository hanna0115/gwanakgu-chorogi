import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const collectionBox = [
    {
      to : '/clothes',
      title : '의류',
      img : '/images/clothes.png',
      text : '바르게 알고 바르게 버려요!'
    },
    {
      to : '/batteries',
      title : '폐건전지, 형광등',
      img : '/images/battery.png',
      text : '그냥 버리면 환경오염<br/>제대로 수거하면 재활용 가능!'
    },
    {
      to : '/saveTheEarth',
      title : '지구 살리기 Tip',
      img : '/images/earth.png',
      text : '환경도 살리고<br/>돈도 벌 수 있다고?'
    }
  ]
  return (
    <div>
      <main>
        <section className='collection-box'>
          <div className="collotion-box-info">
            <h2>환경 보호를 위한<br/>쓰레기 수거함 위치를 안내해드립니다.</h2>
            <div className="colletion-box-list">
            {
                collectionBox.map((item, index) => {
                  return (
                    <div className="colletion-box-item">
                      <Link to={item.to}>
                        <p>{item.title}</p>
                        <img src={item.img} alt={item.title} />
                        <p>{item.text}</p>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="character">
            <img src="/images/mainCharacter.png" alt="mainCharacter" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;