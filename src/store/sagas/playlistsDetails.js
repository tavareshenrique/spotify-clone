import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsDetailActions } from '../ducks/playlistsDetails';
import { Creators as ErrroActions } from '../ducks/error';

export function* getPlaylistsDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistsDetailActions.getPlaylistsDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrroActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
