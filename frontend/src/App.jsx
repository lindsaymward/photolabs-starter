import React from 'react';

import './App.scss';

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Main render routes
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Mock Data
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
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