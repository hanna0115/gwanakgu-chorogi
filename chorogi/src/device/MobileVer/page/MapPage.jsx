import { Link, useParams } from 'react-router-dom';
import './MapPage.css'
import { Icon } from '@iconify/react';
import { collectionBoxMapData } from '../../CollectionBoxData';
import LocationMap from '../component/LocationMap';


const MapPage = () => {
  const { mapSlug } = useParams();

  const getLocationList = (mapSlug) => {
    return collectionBoxMapData.find((location) => location.slug === mapSlug);
  }
  
  const locationList = getLocationList(mapSlug);

  return (
    <div>
      <div className="map-title-box">
        <div className="map-title">
          <p>{locationList.menu}</p>
          <h3>{locationList.title}</h3>
        </div>
        <div className="map-title-btn">
          <Link to="/"><Icon icon="uiw:left" /></Link>
          <Link to={`${locationList.detailSlug}`}><Icon icon="octicon:info-24" /></Link>
        </div>
      </div>
      <LocationMap locationList={locationList}/>
    </div>
  );
};

export default MapPage;