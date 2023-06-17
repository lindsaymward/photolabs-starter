import React, { useState } from 'react';

const useApplicationData = () => {

  const [favPhotosID, setFavPhotosID] = useState([]);

  const updateToFavPhotosIDs = (id) => {
    const favPhotos = [...favPhotosID];
    if (favPhotos.includes(id)) {
      const idIndex = favPhotos.indexOf(id);
      favPhotos.splice(idIndex, 1);
      setFavPhotosID([...favPhotos]);
    } else {
    setFavPhotosID([...favPhotos, id]);
    }
  }

  const [photoSelected, setPhotoSelected] = useState({});

  const choosePhotoSelected = (array, id) => {
    setPhotoSelected(array[id - 1]);
  }

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const state = {
    favPhotosID,
    openModal,
    photoSelected
  }

  return {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal
  };
}

export default useApplicationData;