import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getSprintList
} from './sprintListApi';
import {
  GET_SPRINT_LIST
} from './sprintListActionType';
import {
  getSprintListSuccess,
} from './sprintListActions';

export function* getSprintListSaga(action) {
  try {
    const apiResult = yield call(getSprintList, action.payload);
    yield put(getSprintListSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(GET_SPRINT_LIST, getSprintListSaga);
}
