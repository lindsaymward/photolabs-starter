import React, { useReducer } from 'react';

const useApplicationData = () => {
  const ACTIONS = {
    FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FAV_PHOTO_TOGGLE':
        if (state.includes(action.id)) {
          const filtered = state.filter((favPhotoID) => favPhotoID !== action.id)
          return filtered;
        }
        return [...state, action.id];
      case 'SET_PHOTO_DATA':
        return;
      case 'SET_TOPIC_DATA':
        return;
      case 'SELECT_PHOTO':
        return action.array[action.id - 1];
      case 'TOGGLE_MODAL':
        return !state;
      
      default:
        return state;
    }
  };

  const [favPhotosID, updateToFavPhotosIDs] = useReducer(reducer, []);
  const [photoSelected, choosePhotoSelected] = useReducer(reducer, {});
  const [openModal, toggleModal] = useReducer(reducer, false);

  const state = {
    ACTIONS,
    favPhotosID,
    openModal,
    photoSelected
  };

  return {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal
  };
};

export default useApplicationData;