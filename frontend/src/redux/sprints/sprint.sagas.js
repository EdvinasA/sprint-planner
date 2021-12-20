import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getSprint,
  createSprint,
  startSprint, endSprint, deleteSprint, updateAllocation, updateTaskPointsInMainPage
} from './sprintApi';
import {
  CREATE_SPRINT, DELETE_SPRINT, END_SPRINT,
  GET_SPRINT, START_SPRINT, UPDATE_POINTS_IN_MAIN_PAGE, UPDATE_TASK_MAIN_PAGE,
} from './sprintActionType';
import {
  createSprintSuccess, deleteSprintSuccess,
  getSprintSuccess
} from './sprintActions';

export function* getSprintSaga(action) {
  try {
    const apiResult = yield call(getSprint, action.payload);
    yield put(getSprintSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export function* createSprintSaga(action) {
  try {
    const apiResult = yield call(createSprint, action.payload);
    yield put(createSprintSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export function* startSprintSaga(action) {
  try {
    yield call(startSprint, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* endSprintSaga(action) {
  try {
    yield call(endSprint, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* deleteSprintSaga(action) {
  try {
    yield call(deleteSprint, action.payload);
    yield put(deleteSprintSuccess());
  } catch (e) {
    console.error(e);
  }
}

export function* updateAllocationOfActiveSprint(action) {
  try {
    yield call(updateAllocation, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* updateTaskInTasksTable(action) {
  try {
    yield call(updateTaskPointsInMainPage, action.payload.task);
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(GET_SPRINT, getSprintSaga);
  yield takeLatest(CREATE_SPRINT, createSprintSaga);
  yield takeLatest(START_SPRINT, startSprintSaga);
  yield takeLatest(END_SPRINT, endSprintSaga);
  yield takeLatest(DELETE_SPRINT, deleteSprintSaga);
  yield takeLatest(UPDATE_TASK_MAIN_PAGE, updateAllocationOfActiveSprint);
  yield takeLatest(UPDATE_POINTS_IN_MAIN_PAGE, updateTaskInTasksTable);
}
