import React, { useContext } from 'react';

import '../styles/TopicListItem.scss';
import { DarkModeContext } from '../context/DarkModeContext';

const TopicListItem = (props) => {
  const { id, title, getPhotosByTopics } = props;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "topic-list__item dark" : "topic-list__item"}>
      <span onClick={() => getPhotosByTopics(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;