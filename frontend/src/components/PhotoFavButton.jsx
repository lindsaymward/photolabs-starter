import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setisFav] = useState(false);

  return (
    <div onClick={() => setisFav(!isFav)}className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
        fill={isFav ? '#FF0000' : '#EEEEEE'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;