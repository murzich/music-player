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

const next = (state) => {
  const count = state.songsList.length;
  const nextTrack = state.currentTrack + 1;
  return (nextTrack < count) ? nextTrack : 0;
};
// eslint-disable-next-line arrow-body-style
const prev = (state) => { return (state.currentTrack <= 0) ? 0 : state.currentTrack - 1; };
const id = (_, action) => action.payload;
const skipNewToStart = (state, action) => (
  (action.payload !== state.currentTrack) ? 0 : state.playedSeconds
);

const setPlayStatus = (state, action) => ({
  ...state,
  isPlaying: action.payload,
});

const togglePlay = state => ({
  ...state,
  isPlaying: !state.isPlaying,
});

const setTrack = funcNextTrack => (state, action) => ({
  ...state,
  isPlaying: true,
  playedSeconds: skipNewToStart(state, action),
  currentTrack: funcNextTrack(state, action),
});

const setDuration = (state, action) => ({
  ...state,
  duration: action.payload,
});

const updateTimePosition = (state, action) => ({
  ...state,
  playedSeconds: action.payload,
});

const setSeekingStatus = (state, action) => ({
  ...state,
  seeking: action.payload,
});

export default {
  [GOTO_NEXT_TRACK]: setTrack(next),
  [GOTO_PREV_TRACK]: setTrack(prev),
  [SET_CURRENT_TRACK]: setTrack(id),
  [SET_DURATION]: setDuration,
  [SET_PLAY_STATUS]: setPlayStatus,
  [SET_SEEKING_STATUS]: setSeekingStatus,
  [TOGGLE_PLAY]: togglePlay,
  [UPDATE_TIME_POSITION]: updateTimePosition,
};
