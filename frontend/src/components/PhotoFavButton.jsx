import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isFav, onClick } = props

  return (
    <div onClick={onClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
        fill={isFav ? '#FF0000' : '#EEEEEE'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;