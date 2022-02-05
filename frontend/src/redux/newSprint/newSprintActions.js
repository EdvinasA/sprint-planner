import * as actions from "./newSprintActionType";

export const getNewSprint = () => ({
  type: actions.GET_NEW_SPRINT
});

export const addTask = () => ({
  type: actions.ADD_TASK
});

export const carryOverTasks = (tasks) => ({
  type: actions.CARRY_OVER_TASKS,
  payload: tasks
});

export const updateCarryoverTask = (task) => ({
  type: actions.UPDATE_CARRYOVER_TASK,
  payload: task
});

export const createUserDays = (userId, dayArray) => ({
  type: actions.CREATE_USER_DAYS,
  payload: {
    id: userId,
    day: dayArray
  }
});

export const updateUserDayTask = (userId, dayId, taskId, dayOfSprint, planId, creationDate) => ({
  type: actions.UPDATE_USER_DAY_TASK,
  payload: {
    userId,
    dayId,
    taskId,
    dayOfSprint,
    planId,
    creationDate
  }
});

export const removeTask = (id) => ({
  type: actions.REMOVE_TASK,
  payload: id
});

export const updateTask = (task) => ({
  type: actions.UPDATE_TASK,
  payload: task
});

export const chooseTitle = (title) => ({
  type: actions.CHOOSE_TITLE,
  payload: title
});

export const chooseStartDate = (startDate) => ({
  type: actions.CHOOSE_START_DATE,
  payload: startDate
});

export const chooseEndDate = (endDate) => ({
  type: actions.CHOOSE_END_DATE,
  payload: endDate
});

export const createSprint = (sprint) => ({
  type: actions.CREATE_NEW_SPRINT,
  payload: {
    title: sprint.title,
    startDate: sprint.startDate,
    endDate: sprint.endDate,
    tasks: [...sprint.tasks, ...sprint.carryovers],
    memberTeamId: localStorage.getItem("selectedTeamId"),
    membersList: sprint.membersList,
    isActive: false,
    isHistorical: false,
    creationDate: null
  }
});

export const createSprintSuccess = (sprint) => ({
  type: actions.CREATE_NEW_SPRINT_SUCCESS,
  sprint
});

export const resetSprint = (sprint) => ({
  type: actions.RESET_NEW_SPRINT,
  payload: sprint
});

export const setUsersFromManageTeam = (sprint) => ({
  type: actions.SET_MANAGE_TEAM_USERS,
  payload: sprint
});
