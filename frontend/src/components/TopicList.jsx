import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

const TopicList = (props) => {
  const topics = props.topics.map((topic) => {
    return <TopicListItem key={topic.id} title={topic.title} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
      <div className="topic-list__item"><FavBadge /></div>
    </div>
  );
};

export default TopicList;