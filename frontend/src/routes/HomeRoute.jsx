import React from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, favPhotosID, getPhotosByTopics, actions, photos, choosePhotoSelected, toggleModal, clickFav } = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotosID={favPhotosID} getPhotosByTopics={getPhotosByTopics} />
      <PhotoList
        actions={actions}
        photos={photos}
        favPhotosID={favPhotosID}
        clickFav={clickFav}
        choosePhotoSelected={choosePhotoSelected}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;