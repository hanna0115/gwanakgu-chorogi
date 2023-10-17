import React, { useState,useEffect } from 'react';
import { Map, MapMarker, EventMarkerContainer } from 'react-kakao-maps-sdk';
import { useMap } from "@uidotdev/usehooks";

const LocationMap = (props) => {
  const locationList = props.locationList;

  const EventMarkerContainer = ({ position, index, onClick, isClicked }) => {
    const map = useMap()
    let marker = locationList.icon;
    let changeMarker = locationList.selectedIcon;


    if (isClicked) {
      marker = changeMarker
    }

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        onClick={onClick}
        image={{
          src: marker,
          size: {
            width: 25,
            height: 28
          }
        }}
      ></MapMarker>
    )
  }
  
  const [selectedMarker, setSeletedMarker] = useState()

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

        image = {...image, src : locationList.selectedIcon }
        
        return (
          <EventMarkerContainer
            key={index}
            index={index}
            position={latlng} // 마커를 표시할 위치
            image={image}
            onClick={() => {
              setSeletedMarker(index)
            }}
            isClicked={selectedMarker === index}
          />
        )
      })}
    </Map>
  );
};

export default LocationMap;