import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const LocationMap = (props) => {
  const locationList = props.locationList;
  console.log(locationList.item[0].lat)

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: locationList.item[0].lat,
        lng: locationList.item[0].lng,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={7} // 지도의 확대 레벨
    >
      {locationList.item.map((item, index) => {
        const latlng = { lat : item.lat, lng : item.lng };
        
        return (
          <MapMarker
            key={index}
            position={latlng} // 마커를 표시할 위치
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35
              }, // 마커이미지의 크기입니다
            }}
            title={item.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        )
      })}
    </Map>
  );
};

export default LocationMap;