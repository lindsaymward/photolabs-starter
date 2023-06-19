import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import UserDetails from './UserDetails';

const PhotoListItem = (props) => {
  const { imageSource, location, clickFav, isFav, clickPhoto, user } = props;

  return (
    <>
      <li className="photo-list__item">
        <PhotoFavButton clickFav={clickFav} isFav={isFav} />
        <img src={imageSource} className="photo-list__image" onClick={clickPhoto} />
        <UserDetails user={user} location={location} />
      </li>
    </>
  );
};

export default PhotoListItem;