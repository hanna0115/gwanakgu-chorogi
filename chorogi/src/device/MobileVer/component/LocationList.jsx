import React from 'react';
import { Link } from 'react-router-dom';
import './LocationList.css';
import { Icon } from '@iconify/react';

const LocationList = (props) => {
  const locationList = props.locationList;
  const selectedIndex = props.index;
  const selectedItem = locationList.item[selectedIndex];

  return (
    <ul className="location-list">
      <li className="location-item">
        <div className="location-info">
          <img src={locationList.img} alt={locationList.title} />
          <div>
            <p>{selectedItem.name} <span>300m</span></p>
            <p>{selectedItem.address}</p>
          </div>
        </div>
        <div className="location-item-btn">
          <Link to="">
            <Icon icon="solar:share-bold-duotone" />
            <span>공유하기</span>
          </Link>
          <Link to={`https://map.kakao.com/link/to/${selectedItem.address},${selectedItem.lat},${selectedItem.lng}`}>
            <Icon icon="fluent:directions-24-regular" />
            <span>길찾기</span>
          </Link>
        </div>
      </li>
    {
      locationList.item.map((item, index) => {
        return (
          <li className="location-item" key={index}>
            <div className="location-info">
              <img src={locationList.img} alt={locationList.title} />
              <div>
                <p>{item.name} <span>300m</span></p>
                <p>{item.address}</p>
              </div>
            </div>
            <div className="location-item-btn">
              <Link to="">
                <Icon icon="solar:share-bold-duotone" />
                <span>공유하기</span>
              </Link>
              <Link to={`https://map.kakao.com/link/to/${item.address},${item.lat},${item.lng}`}>
                <Icon icon="fluent:directions-24-regular" />
                <span>길찾기</span>
              </Link>
            </div>
          </li>
        );
      })
    }
  </ul>
  )

  
};

export default LocationList;