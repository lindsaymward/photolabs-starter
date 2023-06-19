import { useReducer } from 'react';

const useApplicationData = () => {
  const ACTIONS = {
    FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
    SELECT_PHOTO: 'SELECT_PHOTO',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FAV_PHOTO_TOGGLE':
        if (state.includes(action.id)) {
          const filtered = state.filter((favPhotoID) => favPhotoID !== action.id);
          return filtered;
        }
        return [...state, action.id];
      case 'SELECT_PHOTO':
        return action.array.find(photo => photo.id === action.id);
      case 'SET_PHOTO_DATA':
        return action.data;
      case 'SET_TOPIC_DATA':
        return action.data;
      case 'TOGGLE_MODAL':
        return !state;
      default:
        return state;
    }
  };

  const [favPhotosID, updateToFavPhotosIDs] = useReducer(reducer, []);
  const [photoSelected, choosePhotoSelected] = useReducer(reducer, {});
  const [openModal, toggleModal] = useReducer(reducer, false);
  const [photos, dispatchPhotos] = useReducer(reducer, []);
  const [topics, dispatchTopics] = useReducer(reducer, []);

  const state = {
    ACTIONS,
    favPhotosID,
    openModal,
    photoSelected,
    photos,
    topics
  };

  return {
    state,
    updateToFavPhotosIDs,
    choosePhotoSelected,
    toggleModal,
    dispatchPhotos,
    dispatchTopics
  };
};

export default useApplicationData;