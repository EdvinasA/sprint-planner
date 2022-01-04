import { call, put, takeLatest } from "redux-saga/effects";
import { createSprint, createSprintPlan } from "./newSprintApi";
import { CREATE_NEW_SPRINT, CREATE_NEW_SPRINT_PLAN } from "./newSprintActionType";
import { createSprintSuccess } from "./newSprintActions";

export function* createSprintSaga(action) {
  try {
    yield call(createSprint, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* createSprintPlanSaga(action) {
  try {
    const apiResult = yield call(createSprintPlan, action.payload);
    // yield put(createSprintSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(CREATE_NEW_SPRINT, createSprintSaga);
  yield takeLatest(CREATE_NEW_SPRINT_PLAN, createSprintPlanSaga);
}
