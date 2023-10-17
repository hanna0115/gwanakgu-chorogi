import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const LocationMap = (props) => {
  const locationList = props.locationList;
  // const [selectedMarker, setSeleteMarker] = useState();

  
  // if (isClicked) {
  //   spriteOrigin = clickOrigin
  // }

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
        height: "100%",
      }}
      level={7} // 지도의 확대 레벨
    >
      {locationList.item.map((item, index) => {
        const latlng = { lat : item.lat, lng : item.lng };
        let image={
          src: locationList.icon, // 마커이미지의 주소입니다
          size: {
            width: 25,
            height: 28
          }, // 마커이미지의 크기입니다
        }
        console.log(image)
        image = {...image, src : locationList.selectedIcon }
        console.log(image)
        
        return (
          <MapMarker
            key={index}
            index={index}
            position={latlng} // 마커를 표시할 위치
            image={image}
            // onClick={() => setSeleteMarker(index)}
            // isClicked={selectedMarker === index}
          />
        )
      })}
    </Map>
  );
};

export default LocationMap;