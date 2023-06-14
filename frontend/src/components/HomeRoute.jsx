import React from 'react';
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} />
      <PhotoList photos={props.photos} />
    </div>
  );
};

export default HomeRoute;