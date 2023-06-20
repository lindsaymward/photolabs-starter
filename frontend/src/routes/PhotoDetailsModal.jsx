import React, { useContext } from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import { DarkModeContext } from '../context/DarkModeContext';

export const PhotoDetailsModal = (props) => {
  const { actions, toggleModal, photo, favPhotosID, clickFav } = props;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'photo-details-modal dark' : 'photo-details-modal'}>
      <button onClick={() => toggleModal({ type: actions.TOGGLE_MODAL })} className='photo-details-modal__close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image">
          <PhotoListItem
            key={photo.id}
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.full}
            isFav={favPhotosID.includes(photo.id)}
            clickFav={() => { clickFav(photo.id); }}
            user={photo.user}
          />
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div>
          <PhotoList actions={actions} photos={photo.similar_photos} favPhotosID={favPhotosID} clickFav={clickFav} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;