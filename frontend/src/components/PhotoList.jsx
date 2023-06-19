import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { actions, favPhotosID, clickFav, choosePhotoSelected, photos, toggleModal } = props;

  const clickPhoto = (id) => {
    choosePhotoSelected({ type: actions.SELECT_PHOTO, array: photos, id: id });
    toggleModal({ type: actions.TOGGLE_MODAL });
  };

  const mappedPhotos = photos.map(photo => {
    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        location={photo.location}
        imageSource={photo.urls.regular}
        isFav={favPhotosID.includes(photo.id)}
        clickFav={() => { clickFav(photo.id); }}
        clickPhoto={() => { clickPhoto(photo.id); }}
        user={photo.user}
      />
    );
  });
  return (
    <ul className="photo-list">
      {mappedPhotos}
    </ul>
  );
};

export default PhotoList;