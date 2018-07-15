import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as form } from 'redux-form';

import player from './player';
import auth from './auth';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['player'],
};

const playerConfig = {
  key: 'player',
  storage,
  blacklist: ['search'],
};

const rootReducer = combineReducers({
  player: persistReducer(playerConfig, player),
  form,
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
