import * as actions from "./sprintActionType";

export const getSprint = (id) => ({
  type: actions.GET_SPRINT,
  payload: id
});

export const getSprintSuccess = (sprint) => ({
  type: actions.GET_SPRINT_SUCCESS,
  payload: sprint
});

export const getSprintFailed = (error) => ({
  type: actions.GET_SPRINT_FAILED,
  payload: error
});

export const startSprintFailed = (error) => ({
  type: actions.START_SPRINT_FAILED,
  payload: error
});

export const endSprintFailed = (error) => ({
  type: actions.END_SPRINT_FAILED,
  payload: error
});

export const updateAllocationFailed = (error) => ({
  type: actions.UPDATE_TASK_MAIN_PAGE_FAILED,
  payload: error
});

export const updateTaskPointsInMainPageFailed = (error) => ({
  type: actions.UPDATE_POINTS_IN_MAIN_PAGE,
  payload: error
});

export const createSprint = (sprint) => ({
  type: actions.CREATE_SPRINT,
  payload: sprint,
});

export const createSprintSuccess = (sprint) => ({
  type: actions.CREATE_SPRINT_SUCCESS,
  payload: sprint,
});

export const startSprint = (id) => ({
  type: actions.START_SPRINT,
  payload: id
});

export const startSprintSuccess = (sprint) => ({
  type: actions.START_SPRINT_SUCCESS,
  payload: sprint,
});

export const endSprint = (id) => ({
  type: actions.END_SPRINT,
  payload: id
});

export const deleteSprint = (id) => ({
  type: actions.DELETE_SPRINT,
  payload: id
});

export const deleteSprintSuccess = () => ({
  type: actions.DELETE_SPRINT_SUCCESS
});

export const updateUserDayTaskFromMainPage = (userId, dayId, taskId, planId, dayOfSprint, creationDate) => ({
  type: actions.UPDATE_TASK_MAIN_PAGE,
  payload: {
    memberId: userId,
    id: dayId,
    taskId,
    planId,
    dayOfSprint,
    creationDate
  }
});

export const updateTaskPointsInMainPage = (updatedTask) => ({
  type: actions.UPDATE_POINTS_IN_MAIN_PAGE,
  payload: {
    task: updatedTask
  }
});
