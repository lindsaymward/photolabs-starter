import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { imageSource, isFav, handleClick } = props;

  return (
    <>
      <li className="photo-list__item">
        <PhotoFavButton isFav={isFav} onClick={handleClick} />
        <img src={imageSource} className="photo-list__image" />
      </li>
    </>
  );
};

export default PhotoListItem;