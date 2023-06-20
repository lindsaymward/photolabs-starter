import React, { useContext } from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import UserDetails from './UserDetails';
import { DarkModeContext } from '../context/DarkModeContext';

const PhotoListItem = (props) => {
  const { imageSource, location, clickFav, isFav, clickPhoto, user } = props;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <li className={darkMode ? "photo-list__item dark" : "photo-list__item"}>
        <PhotoFavButton clickFav={clickFav} isFav={isFav} />
        <img src={imageSource} className="photo-list__image" onClick={clickPhoto} />
        <UserDetails user={user} location={location} />
      </li>
    </>
  );
};

export default PhotoListItem;