import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { favPhotosID, updateToFavPhotosIDs, choosePhotoSelected, toggleModal } = props

  const clickFav = (id) => {
    updateToFavPhotosIDs(id)
  }

  const clickPhoto = (id) => {
    choosePhotoSelected(props.photos, id);
    toggleModal();
  };

  const photos = props.photos.map(photo => {
    return (
      <PhotoListItem 
        key={photo.id}
        id={photo.id} 
        location={photo.location}
        imageSource={photo.urls.regular} 
        isFav={favPhotosID.includes(photo.id)}
        clickFav={() => {clickFav(photo.id)}}
        clickPhoto={() => {clickPhoto(photo.id)}}

        user={photo.user}
        />
    );
  });
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;