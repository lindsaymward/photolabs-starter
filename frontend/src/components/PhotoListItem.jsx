import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { imageSource, location, handleClick, isFav, setSeeDetails, setID, user } = props;
  const clickPhoto = () => {
    setSeeDetails(true);
    setID(props.id);
  };
  return (
    <>
      <li className="photo-list__item">
        <PhotoFavButton handleClick={handleClick} isFav={isFav} />
        <img src={imageSource} className="photo-list__image" onClick={clickPhoto} />
        <div className="photo-list__user-details">
          <img src={user.profile} className="photo-list__user-profile" />
          <div>
            <div className="photo-list__user-info">{user.name}</div>
            <span className="photo-list__user-location">{location.city}, {location.country}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default PhotoListItem;