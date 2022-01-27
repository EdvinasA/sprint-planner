import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getSprintList
} from './sprintListApi';
import {
  GET_SPRINT_LIST
} from './sprintListActionType';
import {
  getSprintListFailed,
  getSprintListSuccess,
} from './sprintListActions';

export function* getSprintListSaga(actions) {
  try {
    const apiResult = yield call(getSprintList, actions.payload);
    yield put(getSprintListSuccess(apiResult));
  } catch (e) {
    yield put(getSprintListFailed(e))
  }
}

export default function* () {
  yield takeLatest(GET_SPRINT_LIST, getSprintListSaga);
}
