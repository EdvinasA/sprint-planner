import { call, put, takeLatest } from "redux-saga/effects";
import { createSprint, createSprintPlan } from "./newSprintApi";
import { CREATE_NEW_SPRINT, CREATE_NEW_SPRINT_PLAN } from "./newSprintActionType";

export function* createSprintSaga(action) {
  try {
    yield call(createSprint, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* createSprintPlanSaga(action) {
  try {
    yield call(createSprintPlan, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(CREATE_NEW_SPRINT, createSprintSaga);
  yield takeLatest(CREATE_NEW_SPRINT_PLAN, createSprintPlanSaga);
}
