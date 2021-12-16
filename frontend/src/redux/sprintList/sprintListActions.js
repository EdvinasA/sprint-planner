import * as actions from "./sprintListActionType";

export const getSprintList = (id) => ({
  type: actions.GET_SPRINT_LIST,
  payload: id
});

export const getSprintListSuccess = (sprintList) => ({
  type: actions.GET_SPRINT_LIST_SUCCESS,
  payload: sprintList
});
