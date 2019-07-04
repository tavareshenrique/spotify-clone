import { combineReducers } from 'redux';

import playlists from './playlists';
import playlistsDetails from './playlistsDetails';
import error from './error';
import player from './player';

export default combineReducers({
  playlists,
  playlistsDetails,
  error,
  player,
});
