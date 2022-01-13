import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getTeam,
  addNewMember,
  deleteMember, updateMemberRole, createNewTeam
} from './manageTeamApi';
import {
  ADD_NEW_MEMBER, CREATE_NEW_TEAM, DELETE_MEMBER_FROM_TEAM,
  GET_TEAM, UPDATE_MEMBER_ROLE
} from './manageTeamActionType';
import {
  getTeamSuccess,
} from './manageTeamActions';

export function* getTeamSaga(action) {
  try {
    const apiResult = yield call(getTeam, action.payload);
    yield put(getTeamSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export function* addNewMemberSaga(action) {
  console.log(action.payload);
  try {
    yield call(addNewMember, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* deleteMemberSaga(action) {
  try {
    yield call(deleteMember, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* updateMemberRoleSaga(action) {
  try {
    yield call(updateMemberRole, action.payload.id, action.payload.role);
  } catch (e) {
    console.error(e);
  }
}

export function* createNewTeamSaga(action) {
  try {
    const apiResult = yield call(createNewTeam, action.payload);
    yield put(getTeamSuccess(apiResult));
  } catch (e) {
    console.error(e);
  }
}

export default function* () {
  yield takeLatest(GET_TEAM, getTeamSaga);
  yield takeLatest(ADD_NEW_MEMBER, addNewMemberSaga);
  yield takeLatest(DELETE_MEMBER_FROM_TEAM, deleteMemberSaga);
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga);
  yield takeLatest(CREATE_NEW_TEAM, createNewTeamSaga);
}
