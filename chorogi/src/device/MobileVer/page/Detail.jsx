import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Detail.css';
import { Icon } from '@iconify/react';
import { collectionBoxDetailData } from '../component/CollectionBoxData';


const Detail = () => {
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
      <div class="box-list">
        <div class="box-item">
          <img src={contents.mainImg} alt={contents.title} />
          <h2>{contents.mainTitle}</h2>
          <p>{contents.mainContent}</p>
        </div>
        <div class="box-item">
          <Icon icon="ic:outline-circle" width="80px" color="5B92FB"/>
          <span>{contents.subTitle1}</span>
          <p>{contents.subContent1}</p>
        </div>
        <div class="box-item">
          <Icon icon="ph:x-bold" width="80px" color="FF1212"/>
          <span>{contents.subTitle2}</span>
          <p>{contents.subContent2}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;