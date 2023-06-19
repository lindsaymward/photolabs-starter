import React from 'react';

const userDetails = (props) => {
  const { user, location } = props;
  return (
    <div className="photo-list__user-details">
      <img src={user.profile} className="photo-list__user-profile" />
      <div>
        <div className="photo-list__user-info">{user.name}</div>
        <span className="photo-list__user-location">{location.city}, {location.country}</span>
      </div>
    </div>
  );
};

export default userDetails;