import React, { useContext } from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import { DarkModeContext } from '../context/DarkModeContext';

const TopNavigation = (props) => {
  const { topics, favPhotosID, getPhotosByTopics } = props;
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "top-nav-bar dark" : "top-nav-bar"}>
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} favPhotosID={favPhotosID} getPhotosByTopics={getPhotosByTopics} />
    </div>
  );
};

export default TopNavigation;