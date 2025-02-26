import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

const TopicList = (props) => {
  const { getPhotosByTopics, favPhotosID } = props;
  const topics = props.topics.map((topic) => {
    return <TopicListItem key={topic.id} id={topic.id} title={topic.title} getPhotosByTopics={getPhotosByTopics} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
      <div className="topic-list__item"><FavBadge isFavPhotoExist={(favPhotosID.length) ? true : false} /></div>
    </div>
  );
};

export default TopicList;