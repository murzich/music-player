import {
  ADD_TRACK,
  CLEAR_PLAYLIST,
  REMOVE_TRACK,
  REMOVE_PREV_TRACK,
} from '../types/playlist';
import mockPlaylist from '../assets/mock.json';

const initialState = mockPlaylist;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        action.payload,
      ];
    case CLEAR_PLAYLIST:
      return [];
    case REMOVE_TRACK:
    case REMOVE_PREV_TRACK:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
};
