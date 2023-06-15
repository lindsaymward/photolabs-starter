import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { imageSource, isFav, handleClick, setSeeDetails, setID } = props;
  const clickPhoto = () => {
    setSeeDetails(true);
    setID(props.id);
  }
  return (
    <>
      <li className="photo-list__item" onClick={clickPhoto}>
        <PhotoFavButton isFav={isFav} onClick={handleClick} />
        <img src={imageSource} className="photo-list__image" />
      </li>
    </>
  );
};

export default PhotoListItem;