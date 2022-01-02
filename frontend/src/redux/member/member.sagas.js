import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getMemberByAccessToken
} from './memberApi';
import {
  GET_MEMBER
} from './memberActionType';
import {
  getMemberSuccess,
} from './memberActions';

export function* getMemberSaga(action) {
  try {
    const apiResult = yield call(getMemberByAccessToken, action.payload);
    yield put(getMemberSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(GET_MEMBER, getMemberSaga);
}
