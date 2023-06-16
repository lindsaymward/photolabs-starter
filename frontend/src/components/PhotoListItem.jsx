import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { imageSource, handleClick, isFav, setSeeDetails, setID, styleClass } = props;
  const clickPhoto = () => {
    setSeeDetails(true);
    setID(props.id);
  }
  return (
    <>
      <li className={styleClass}>
        <PhotoFavButton handleClick={handleClick} isFav={isFav} />
        <img src={imageSource} className="photo-list__image" onClick={clickPhoto}/>
      </li>
    </>
  );
};

export default PhotoListItem;