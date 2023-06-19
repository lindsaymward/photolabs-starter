import React, { useEffect } from 'react';
import axios from 'axios';
import './App.scss';

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Main render routes
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  // Initial render API calls
  useEffect(() => {
    axios.get('/api/photos')
      .then(res => dispatchPhotos({ type: state.ACTIONS.SET_PHOTO_DATA, data: res.data }));
  }, []);

  useEffect(() => {
    axios.get('/api/topics')
      .then(res => dispatchTopics({ type: state.ACTIONS.SET_TOPIC_DATA, data: res.data }));
  }, []);

  // API call when topic clicked in topic list
  const getPhotosByTopics = (id) => {
    axios.get(`/api/topics/photos/${id}`)
      .then(res => dispatchPhotos({ type: state.ACTIONS.SET_PHOTO_DATA, data: res.data }));
  };

  const {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal,
    dispatchPhotos,
    dispatchTopics
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        actions={state.ACTIONS}
        photos={state.photos}
        topics={state.topics}
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
          updateToFavPhotosIDs={updateToFavPhotosIDs}
          toggleModal={toggleModal}
        />}
    </div>
  );
};

export default App;