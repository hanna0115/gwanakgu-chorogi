import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MapPage.css'
import { Map } from 'react-kakao-maps-sdk';
import { Icon } from '@iconify/react';

const MapPage = () => {
  const [isActive, setIsActive] = useState('false');
  const [items, setItems] = useState([]);

  const listToggle = () => {
    setIsActive(active => !active);
  }

  // 의류수거함
  // const getClothesBox = async () => {
  //   const response = await fetch('https://api.odcloud.kr/api/15076398/v1/uddi:6dec2a8d-6404-4318-8767-85419b3c45a0?page=1&perPage=10&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D');
  //   const body = await response.json();
  //   return body;
  // }

  // const handleLode = async () => {
  //   const clothes = await getClothesBox();
  //   const clothesBoxList = clothes.data;
  //   setItems(clothesBoxList);
  // }

  // useEffect(() => {
  //   handleLode();
  // }, [])

  let nephron = [
    {
      title : '낙성대동주민센터',
      address : '서울특별시 관악구 낙성대로4가길 5 낙성대동주민센터',
      lng : '126.958377',
      lat : '37.4763149'
    },
    {
      title : '난곡재생활력소',
      address : '서울특별시 관악구 난곡로26나길 5',
      lng : '126.923428',
      lat : '37.4695125'
    },
    {
      title : '대학동주민센터',
      address : '서울특별시 관악구 신림로 111',
      lng : '126.936936',
      lat : '37.4705838'
    },
    {
      title : '미성경로당',
      address : '서울특별시 관악구 난곡로58길 11',
      lng : '126.915672',
      lat : '37.4802651'
    },
    {
      title : '밤골경로당',
      address : '서울특별시 관악구 인헌3가길 8',
      lng : '126.967242',
      lat : '37.4740473'
    },
    {
      title : '삼성동 자치회관',
      address : '서울특별시 관악구 호암로 520',
      lng : '126.931810',
      lat : '37.4640126'
    },

    {
      title : '성현동자치회관',
      address : '서울특별시 관악구 봉천동 1703-6',
      lng : '126.956618',
      lat : '37.4871984'
    },
    {
      title : '세븐일레븐 신림대학스타점',
      address : '서울특별시 관악구 호암로24길 6',
      lng : '126.933534',
      lat : '37.4698881'
    },
    {
      title : '신림동행정복지센터',
      address : '서울특별시 관악구 신림동길 14',
      lng : '126.927096',
      lat : '37.4873998'
    },
    {
      title : '신사동행정복지센터',
      address : '서울특별시 관악구 조원로 142',
      lng : '126.918086',
      lat : '37.4854025'
    },
    {
      title : '신원동주민센터',
      address : '서울특별시 관악구 신원로3길 13',
      lng : '126.927316',
      lat : '37.4815524'
    },
    {
      title : '은천동행정복지센터',
      address : '서울특별시 관악구 봉천로33나길 30',
      lng : '126.942407',
      lat : '37.4852910'
    },
    {
      title : '중앙동주민센터',
      address : '서울특별시 관악구 양녕로6다길 7',
      lng : '126.949712',
      lat : '37.4841682'
    },
    {
      title : '행운동 행정복지센터',
      address : '서울특별시 관악구 봉천동 1670-7',
      lng : '126.957007',
      lat : '37.4806302'
    }
  ]

  const donation = [
    {
      title : '굿윌스토어 밀알금천점',
      address : '서울 금천구 시흥대로 350 1층',
      lng : '126.897921',
      lat : '37.4645914'
    }
  ]

  const batteries = [
    {
      title : '	보라매동주민센터',
      address : '	봉천로 279-8',
      lng : '126.932658',
      lat : '37.4881420'
    },
    {
      title : '	적성빌라',
      address : '봉천로 13다길 8',
      lng : '126.932848',
      lat : '37.4909622'
    },
    {
      title : '	은천동주민센터 주차장',
      address : '봉천로33나길 30',
      lng : '',
      lat : ''
    },
    {
      title : '해바라기아파트',
      address : '보라매로6길 33',
      lng : '126.942407',
      lat : '37.4852910'
    },
    {
      title : '보라매삼성아파트',
      address : '보라매로 62',
      lng : '126.927779',
      lat : '37.4941127'
    },
    {
      title : '관악드림타운',
      address : '성현로 80',
      lng : '126.950669',
      lat : '37.4898089'
    },
    {
      title : '국지경로당',
      address : '국회단지21길 14',
      lng : '126.941465',
      lat : '37.4902731'
    },
    {
      title : '자치회관 후문',
      address : '관악로 255-7',
      lng : '126.956584',
      lat : '37.4871984'
    },
    {
      title : '	성현동아아파트 관리사무소 옆',
      address : '관악로 285',
      lng : '126.956323',
      lat : '37.4895679'
    },
    {
      title : '	두산아파트',
      address : '양녕로 31',
      lng : '126.945923',
      lat : '37.4853288'
    }
  ]

  const clothes = [
    {
      title : '낙성대동',
      address : '서울특별시 관악구 관악로10길 15',
      lng : '126.953504',
      lat : '37.4770068'
    },
    {
      title : '난곡동',
      address : '서울특별시 관악구 난곡로20길 12',
      lng : '126.920999',
      lat : '37.4684206'
    },
    {
      title : '난향동',
      address : '서울특별시 관악구 난곡로11길 33',
      lng : '126.917566',
      lat : '37.4654990'
    },
    {
      title : '남현동',
      address : '서울특별시 관악구 남부순환로256가길 10',
      lng : '126.972385',
      lat : '37.4752921'
    },
    {
      title : '대학동',
      address : '서울특별시 관악구 대학5길 29',
      lng : '126.939480',
      lat : '37.4693598'
    },
    {
      title : '미성동',
      address : '서울특별시 관악구 난곡로41길 7',
      lng : '126.916051',
      lat : '37.4753459'
    },

        {
      title : '삼성동',
      address : '서울특별시 관악구 동마길 10',
      lng : '126.930227',
      lat : '37.4647054'
    },
    {
      title : '서림동',
      address : '서울특별시 관악구 복은10길 23',
      lng : '126.941952',
      lat : '37.4743436'
    },
    {
      title : '서원동',
      address : '서울특별시 관악구 남부순환로156길 9',
      lng : '126.920283',
      lat : '37.4822866'
    },
    {
      title : '신사동',
      address : '서울특별시 관악구 관천로11길 1',
      lng : '126.924645',
      lat : '37.4845510'
    },
    {
      title : '신원동',
      address : '서울특별시 관악구 남부순환로160길 13',
      lng : '126.921854',
      lat : '37.4825670'
    },
    {
      title : '인헌동',
      address : '서울특별시 관악구 낙성대역10길 23-8',
      lng : '126.963116',
      lat : '37.4732441'
    },
    {
      title : '조원동',
      address : '서울특별시 관악구 난곡로65길 24',
      lng : '126.912810',
      lat : '37.4822993'
    },
    {
      title : '청룡도',
      address : '서울특별시 관악구 관악로11길 17',
      lng : '126.951220',
      lat : '37.4776726'
    },
    {
      title : '보라매동',
      address : '서울특별시 관악구 당곡2길 107',
      lng : '126.951220',
      lat : '37.4776726'
    },
    {
      title : '은천동',
      address : '서울특별시 관악구 국회단지12길 18',
      lng : '126.942879',
      lat : '37.4886340'
    },
    {
      title : '신림동',
      address : '서울특별시 관악구 관천로16길 28',
      lng : '126.924970',
      lat : '37.4873083'
    },
    {
      title : '중앙동',
      address : '서울특별시 관악구 봉천로41길 27',
      lng : '126.947948',
      lat : '37.4839782'
    },
    {
      title : '행운동',
      address : '서울특별시 관악구 관악로24가길 16 맞은편',
      lng : '126.957038',
      lat : '37.4841802'
    },
    {
      title : '청림동',
      address : '서울특별시 관악구 청림2길 2',
      lng : '126.958664',
      lat : '37.4880912'
    },
    {
      title : '성현동',
      address : '서울특별시 관악구 관악로37길 20',
      lng : '126.956143',
      lat : '37.4878109'
    }
  ]


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
      <div // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {clothes.map((item, index) => (
        <MapMarker
          key={index}
          item={item.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={item.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
        <div className={`location-box ${isActive ? '' : 'active'}`}>
          <div className="location-list-icon" onClick={listToggle}>
            <Icon icon="uiw:up" />
            <Icon icon="uiw:down" />
          </div>
          <ul className="location-list">
            {
              items.map((item, index) => {
                return (
                  <li className="location-item">
                    <div className="location-info">
                      <img src="/images/Clothing collection box.png" alt="의류 수거함" />
                      <div>
                        <p>{item.의류수거함} <span>300m</span></p>
                        <p>{item.위치}</p>
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
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapPage;