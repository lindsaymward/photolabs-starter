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

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
};
export default TopicList;