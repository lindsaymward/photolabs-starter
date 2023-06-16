import React, { useState } from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favPhotosID={props.favPhotosID} />
      <PhotoList photos={props.photos} favPhotosID={props.favPhotosID} setFavPhotosID={props.setFavPhotosID} setSeeDetails={props.setSeeDetails} setID={props.setID} styleClass="photo-list__item"/>
    </div>
  );
};

export default HomeRoute;