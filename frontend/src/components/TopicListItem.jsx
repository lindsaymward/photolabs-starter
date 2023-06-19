import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { id, title, getPhotosByTopics } = props;
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopics(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;