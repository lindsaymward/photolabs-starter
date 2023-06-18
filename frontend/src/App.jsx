import React, { useEffect, useState } from 'react';

import './App.scss';

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Main render routes
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/photos', {
      method: "GET",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  useEffect(() => {
    fetch('/api/topics', {
      method: "GET",
      headers: {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setTopics(data));
  }, []);

  const {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        actions={state.ACTIONS}
        photos={photos}
        topics={topics}
        favPhotosID={state.favPhotosID}
        choosePhotoSelected={choosePhotoSelected}
        updateToFavPhotosIDs={updateToFavPhotosIDs}
        toggleModal={toggleModal}
      />
      {state.openModal &&
        <PhotoDetailsModal
          actions={state.ACTIONS}
          favPhotosID={state.favPhotosID}
          photo={state.photoSelected}
          similar_photos={state.photoSelected.similar_photos}
          updateToFavPhotosIDs={updateToFavPhotosIDs}
          toggleModal={toggleModal}
        />}
    </div>
  );
};

export default App;