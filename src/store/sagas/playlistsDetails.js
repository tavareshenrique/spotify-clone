import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsDetailActions } from '../ducks/playlistsDetails';

export function* getPlaylistsDetails(action) {
  try {
    console.log(`/playlists/${action.payload.id}?_embed=songs`);
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistsDetailActions.getPlaylistsDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
