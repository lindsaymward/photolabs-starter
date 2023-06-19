import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { topics, favPhotosID, getPhotosByTopics } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} favPhotosID={favPhotosID} getPhotosByTopics={getPhotosByTopics} />
    </div>
  );
};

export default TopNavigation;