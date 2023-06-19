import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Main render routes
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  // Initial render API calls
  useEffect(() => {
    axios.get('/api/photos')
      .then(res => setPhotos(res.data));
  }, []);

  useEffect(() => {
    axios.get('/api/topics')
      .then(res => setTopics(res.data));
  }, []);

  // API call when topic clicked in topic list
  const getPhotosByTopics = (id) => {
    axios.get(`/api/topics/photos/${id}`)
      .then(res => setPhotos(res.data));
  };

  const {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal,
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
        getPhotosByTopics={getPhotosByTopics}
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