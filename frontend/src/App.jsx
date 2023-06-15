import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [id, setID] = useState(1);
  const photo = photos[id - 1];
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setSeeDetails={setSeeDetails} setID={setID} />
      {seeDetails &&
        <PhotoDetailsModal
          setSeeDetails={setSeeDetails}
          photo={photo}
          similar_photos={photo.similar_photos}
        />}
    </div>
  );
};

export default App;