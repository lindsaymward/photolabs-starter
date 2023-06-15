import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [id, setID] = useState(0);
  // const idIndex = photos.indexOf(id);
  const { urls, similar_photos } = photos[0];
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setSeeDetails={setSeeDetails} setID={setID} />
      {seeDetails &&
        <PhotoDetailsModal
          setSeeDetails={setSeeDetails}
          fullURL={urls.full}
          similar_photos={similar_photos}
        />}
    </div>
  );
};

export default App;