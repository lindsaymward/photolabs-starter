import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handleClick } = props;
  const [isFav, setIsFav] = useState(false);

  const onClick = () => {
    setIsFav(!isFav);
    handleClick()
  }

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