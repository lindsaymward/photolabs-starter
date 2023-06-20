import React, { useEffect, useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import axios from 'axios';
import './App.scss';

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Main render routes
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

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

  const clickFav = (id) => {
    updateToFavPhotosIDs({ type: state.ACTIONS.FAV_PHOTO_TOGGLE, id: id });
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
      <div className={darkMode ? "App dark" : "App"}>
        <HomeRoute
          actions={state.ACTIONS}
          photos={state.photos}
          topics={state.topics}
          favPhotosID={state.favPhotosID}
          choosePhotoSelected={choosePhotoSelected}
          updateToFavPhotosIDs={updateToFavPhotosIDs}
          toggleModal={toggleModal}
          getPhotosByTopics={getPhotosByTopics}
          clickFav={clickFav}
        />
        {state.openModal &&
          <PhotoDetailsModal
            actions={state.ACTIONS}
            favPhotosID={state.favPhotosID}
            photo={state.photoSelected}
            updateToFavPhotosIDs={updateToFavPhotosIDs}
            toggleModal={toggleModal}
            clickFav={clickFav}
          />}
      </div>
  );
};

export default App;