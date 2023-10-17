import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMap } from "@uidotdev/usehooks";
import { Icon } from '@iconify/react';
import LocationList from './LocationList'

const LocationMap = (props) => {
  const locationList = props.locationList;
  const [selectedMarker, setSeletedMarker] = useState('0');
  const [isActive, setIsActive] = useState('false');

  const EventMarkerContainer = ({ position, onClick, isClicked }) => {
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

  const listToggle = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="map">
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: locationList.item[selectedMarker].lat,
          lng: locationList.item[selectedMarker].lng,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={7} // 지도의 확대 레벨
        isPanto={true}
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
          
          return (
            <EventMarkerContainer
              key={index}
              index={index}
              position={latlng} // 마커를 표시할 위치
              image={image}
              onClick={() => {
                setSeletedMarker(index)
                setIsActive(true)
              }}
              isClicked={selectedMarker === index}
            />
          )
        })}
      </Map>
      <div className={`location-box ${isActive ? '' : 'active'}`}>
        <div className="location-list-icon" onClick={listToggle}>
          <Icon icon="uiw:up" />
          <Icon icon="uiw:down" />
        </div>
        <LocationList locationList={locationList} index={selectedMarker}/>
      </div>
    </div>
    
  );
};

export default LocationMap;