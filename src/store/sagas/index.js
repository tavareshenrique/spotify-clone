import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistsDetailsTypes } from '../ducks/playlistsDetails';

import { getPlaylists } from './playlists';
import { getPlaylistsDetails } from './playlistsDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlaylistsDetails),
  ]);
}
