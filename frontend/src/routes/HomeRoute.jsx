import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, favPhotosID, getPhotosByTopics, actions, photos, updateToFavPhotosIDs, choosePhotoSelected, toggleModal } = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotosID={favPhotosID} getPhotosByTopics={getPhotosByTopics} />
      <PhotoList
        actions={actions}
        photos={photos}
        favPhotosID={favPhotosID}
        updateToFavPhotosIDs={updateToFavPhotosIDs}
        choosePhotoSelected={choosePhotoSelected}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;