import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { favPhotosID, setFavPhotosID, setID } = props

  const handleClick = (id) => {
    const favPhotos = favPhotosID;
    if (favPhotos.includes(id)) {
      const idIndex = favPhotos.indexOf(id);
      favPhotos.splice(idIndex, 1);
      setFavPhotosID([...favPhotos]);
    } else {
    setFavPhotosID([...favPhotos, id]);
    }
  }

  const photos = props.photos.map(photo => {
    return (
      <PhotoListItem 
        key={photo.id}
        id={photo.id} 
        location={photo.location}
        imageSource={photo.urls.regular} 
        isFav={favPhotosID.includes(photo.id)}
        handleClick={() => {handleClick(photo.id)}}
        setSeeDetails={props.setSeeDetails}
        setID={setID} 
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