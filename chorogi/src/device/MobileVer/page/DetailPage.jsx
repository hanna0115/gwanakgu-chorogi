import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DetailPage.css';
import { Icon } from '@iconify/react';
import { collectionBoxDetailData } from '../../CollectionBoxData';


const DetailPage = () => {
  const { detailSlug } = useParams();

  const getContents = (detailSlug) => {
    return collectionBoxDetailData.find((content) => content.detailSlug === detailSlug);
  }

  const contents = getContents(detailSlug);
  
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  
  return (
    <div>
      <div className="map-title-box">
        <div className="map-title">
          <p>{contents.menu}</p>
          <h3>{contents.title}</h3>
        </div>
        <div className="map-title-btn" onClick={onClickBtn}>
          <Link><Icon icon="uiw:left" /></Link>
        </div>
      </div>
      <div className="detail-list">
        <div className="detail-item">
          <img src={contents.mainImg} alt={contents.title} />
          <h2>{contents.mainTitle}</h2>
          <p>{contents.mainContent}</p>
        </div>
        <div className="detail-item">
        <img src={contents.subIcon1} alt={contents.title} />
          <span>{contents.subTitle1}</span>
          <p>{contents.subContent1}</p>
        </div>
        <div className="detail-item">
        <img src={contents.subIcon2} alt={contents.title} />
          <span>{contents.subTitle2}</span>
          <p>{contents.subContent2}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;