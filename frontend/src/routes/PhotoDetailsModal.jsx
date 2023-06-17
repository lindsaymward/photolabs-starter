import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const { actions, toggleModal, photo, similar_photos, favPhotosID, updateToFavPhotosIDs } = props;
  const similarPhotosArr = Object.values(similar_photos);

  return (
    <div className='photo-details-modal'>
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
        <PhotoFavButton />
        <img src={photo.urls.full} className="photo-details-modal__image" />
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div>
          <PhotoList actions={actions} photos={similarPhotosArr} favPhotosID={favPhotosID} updateToFavPhotosIDs={updateToFavPhotosIDs} />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;