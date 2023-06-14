import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photos = props.photos.map(photo => {
    return (
      <PhotoListItem key={photo.id} imageSource={photo.urls.regular} username={photo.user.username} />
    );
  });
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;