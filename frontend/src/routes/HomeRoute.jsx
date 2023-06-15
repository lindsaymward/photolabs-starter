import React, { useState } from 'react';
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favPhotosID, setFavPhotosID] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favPhotosID={favPhotosID} />
      <PhotoList photos={props.photos} favPhotosID={favPhotosID} setFavPhotosID={setFavPhotosID}/>
    </div>
  );
};

export default HomeRoute;