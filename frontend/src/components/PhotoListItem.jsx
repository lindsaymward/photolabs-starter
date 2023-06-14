
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { imageSource, username, hideUserName } = props;
  return (
    <>
      <li className="photo-list__item">
        <PhotoFavButton />
        <img src={imageSource} className="photo-list__image" />
      </li>
    </>
  );
};

export default PhotoListItem;