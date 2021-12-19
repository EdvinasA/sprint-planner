import produce from "immer";
import * as actions from "./newSprintActionType";

function nextTaskId(tasks) {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
}

const initialTasks = [
  {
    id: 1,
    key: "Education",
    description: "Education",
    taskType: "-",
    oldPoints: 0,
    remainingPoints: 0,
    newPoints: 0,
    buttonColor: "#878787",
    show: false
  },
  {
    id: 2,
    key: "Vacation",
    description: "Vacation",
    taskType: "-",
    oldPoints: 0,
    remainingPoints: 0,
    newPoints: 0,
    buttonColor: "#878787",
    show: false
  }
];

const initialState = {
  newSprint: {
    title: "",
    startDate: null,
    endDate: null,
    tasks: initialTasks,
    carryovers: [],
    membersList: [],
    memberTeamId: null,
    isActive: false,
    isHistorical: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TASK:
      return {
        ...state,
        newSprint:
          { ...state.newSprint,
            tasks: [
              ...state.newSprint.tasks,
              {
                id: nextTaskId([...state.newSprint.tasks, ...state.newSprint.carryovers]),
                key: "",
                description: "",
                taskType: "None",
                oldPoints: 0,
                remainingPoints: 0,
                newPoints: 0,
                buttonColor: "#E66465",
                show: true
              }
            ] }
      };
    case actions.CARRY_OVER_TASKS:
      return {
        ...state,
        newSprint:
          { ...state.newSprint,
            carryovers:
              payload
          }
      };
    case actions.REMOVE_TASK:
      return {
        ...state,
        newSprint:
            { ...state.newSprint,
              tasks: [
                ...state.newSprint.tasks.filter(task => task.id !== payload)
              ]
            }
      };
    case actions.UPDATE_TASK:
      return produce(state, draftState => {
        draftState.newSprint.tasks[draftState.newSprint.tasks
          .findIndex((task) => task.id === payload.id)] = payload;
      });
    case actions.UPDATE_CARRYOVER_TASK:
      return produce(state, draftState => {
        draftState.newSprint.carryovers[draftState.newSprint.carryovers
          .findIndex((task) => task.id === payload.id)] = payload;
      });
    case actions.CREATE_USER_DAYS:
      return produce(state, draftState => {
        const index = state.newSprint.membersList.findIndex(e => e.id === payload.id);
        draftState.newSprint.membersList[index].plans = payload.day;
      });
    case actions.UPDATE_USER_DAY_TASK:
      return produce(state, draftState => {
        const userIndex = state.newSprint.membersList.findIndex(e => e.id === payload.userId);
        const index = state.newSprint.membersList[userIndex].plans[0].allocations.findIndex(e => e.id === payload.dayId);
        draftState.newSprint.membersList[userIndex].plans[0].allocations[index] =
            { id: payload.dayId, taskId: payload.taskId, dayOfSprint: payload.dayOfSprint, memberId: payload.userId, planId: payload.planId, creationDate: payload.creationDate };
      });
    case actions.CHOOSE_TITLE:
      return produce(state, draftState => {
        draftState.newSprint.title = payload;
      });
    case actions.CHOOSE_START_DATE:
      return produce(state, draftState => {
        draftState.newSprint.startDate = payload;
      });
    case actions.CHOOSE_END_DATE:
      return produce(state, draftState => {
        draftState.newSprint.endDate = payload;
      });
    case actions.CREATE_NEW_SPRINT:
      return state;
    case actions.CREATE_NEW_SPRINT_SUCCESS:
      return state;
    case actions.RESET_NEW_SPRINT:
      return produce(state, draftState => {
        draftState.newSprint = payload !== undefined ? payload : initialState.newSprint;
      });
    case actions.SET_MANAGE_TEAM_USERS:
      return produce(state, draftState => {
        draftState.newSprint.membersList = payload;
      });
    default:
      return state;
  }
};
