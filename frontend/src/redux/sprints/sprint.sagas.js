import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getSprint,
  startSprint, endSprint, updateAllocation, updateTaskPointsInMainPage
} from './sprintApi';
import {
  END_SPRINT,
  GET_SPRINT, START_SPRINT, UPDATE_POINTS_IN_MAIN_PAGE, UPDATE_TASK_MAIN_PAGE,
} from './sprintActionType';
import {
  endSprintFailed, getSprintFailed,
  getSprintSuccess, startSprintFailed, updateAllocationFailed, updateTaskPointsInMainPageFailed
} from './sprintActions';

export function* getSprintSaga(action) {
  try {
    const apiResult = yield call(getSprint, action.payload);
    yield put(getSprintSuccess(apiResult));
  } catch (e) {
    yield put(getSprintFailed(e));
  }
}

export function* startSprintSaga(action) {
  try {
    yield call(startSprint, action.payload);
  } catch (e) {
    yield put(startSprintFailed(e));
  }
}

export function* endSprintSaga(action) {
  try {
    yield call(endSprint, action.payload);
  } catch (e) {
    yield put(endSprintFailed(e));
  }
}

export function* updateAllocationOfActiveSprint(action) {
  try {
    yield call(updateAllocation, action.payload);
  } catch (e) {
    yield put(updateAllocationFailed(e))
  }
}

export function* updateTaskInTasksTable(action) {
  try {
    yield call(updateTaskPointsInMainPage, action.payload.task);
  } catch (e) {
    yield put(updateTaskPointsInMainPageFailed(e))
  }
}

export default function* () {
  yield takeLatest(GET_SPRINT, getSprintSaga);
  yield takeLatest(START_SPRINT, startSprintSaga);
  yield takeLatest(END_SPRINT, endSprintSaga);
  yield takeLatest(UPDATE_TASK_MAIN_PAGE, updateAllocationOfActiveSprint);
  yield takeLatest(UPDATE_POINTS_IN_MAIN_PAGE, updateTaskInTasksTable);
}
