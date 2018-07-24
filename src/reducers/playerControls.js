import {
  GOTO_NEXT_TRACK,
  GOTO_PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_DURATION,
  SET_PLAY_STATUS,
  SET_SEEKING_STATUS,
  TOGGLE_PLAY,
  UPDATE_TIME_POSITION,
} from '../types/playerControls';
import { REMOVE_PREV_TRACK } from '../types/playlist';

const initialState = {
  currentTrack: 0,
  isPlaying: false,
  playedSeconds: 0,
  duration: 0,
  seeking: false,
};

const setPlayStatus = (state = false, action) => {
  switch (action.type) {
    case SET_PLAY_STATUS:
      return action.payload;
    case TOGGLE_PLAY:
      return !state;
    default:
      return state;
  }
};

const setTrack = (state = 0, action) => {
  switch (action.type) {
    case GOTO_NEXT_TRACK:
      if (state + 1 < action.payload) {
        return state + 1;
      }
      return 0;
    case GOTO_PREV_TRACK:
      return (state <= 0) ? 0 : state - 1;
    case SET_CURRENT_TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAY:
    case SET_PLAY_STATUS:
      return {
        ...state,
        isPlaying: setPlayStatus(state.isPlaying, action),
      };
    case GOTO_NEXT_TRACK:
    case GOTO_PREV_TRACK:
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: setTrack(
          state.currentTrack,
          action,
        ),
        isPlaying: true,
        playedSeconds: (action.payload !== state.currentTrack) ? 0 : state.playedSeconds,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case UPDATE_TIME_POSITION:
      return {
        ...state,
        playedSeconds: action.payload,
      };
    case SET_SEEKING_STATUS:
      return {
        ...state,
        seeking: action.payload,
      };
    case REMOVE_PREV_TRACK:
      return {
        ...state,
        currentTrack: state.currentTrack - 1,
      };
    default:
      return state;
  }
};
