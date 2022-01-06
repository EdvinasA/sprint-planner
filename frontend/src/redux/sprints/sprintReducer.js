import produce from "immer";
import * as actions from "./sprintActionType";

const initialState = {
  sprint: {},
  sprintError: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_SPRINT_SUCCESS:
      return { ...state, sprint: payload };
    case actions.CREATE_SPRINT_SUCCESS:
      return { ...state, sprint: payload };
    case actions.UPDATE_TASK_MAIN_PAGE:
      return produce(state, draftState => {
        const userIndex = state.sprint.membersList.findIndex(e => e.id === payload.memberId);
        const planIndex = state.sprint.membersList[userIndex].plans.findIndex(e => e.id === payload.planId);
        const index = state.sprint.membersList[userIndex].plans[planIndex].allocations.findIndex(e => e.id === payload.id);
        draftState.sprint.membersList[userIndex].plans[planIndex].allocations[index] =
            { id: payload.id, taskId: payload.taskId, dayOfSprint: payload.dayOfSprint, memberId: payload.memberId, planId: payload.planId, creationDate: payload.creationDate };
      });
    case actions.UPDATE_POINTS_IN_MAIN_PAGE: {
      return produce(state, draftState => {
        const index = state.sprint.tasks.findIndex(e => e.id === payload.task.id);
        draftState.sprint.tasks[index] = payload.task;
      });
    }
    case actions.START_SPRINT:
      return produce(state, draftState => {
        draftState.sprint.isActive = true;
        draftState.sprint.isHistorical = false;
      });
    case actions.END_SPRINT:
      return produce(state, draftState => {
        draftState.sprint.isActive = false;
        draftState.sprint.isHistorical = true;
      });
    case actions.DELETE_SPRINT_SUCCESS:
      return { ...state };
    case actions.GET_SPRINT_FAILED:
      return { ...state, sprintError: payload };
    case actions.START_SPRINT_FAILED:
      return { ...state, sprintError: payload };
    case actions.END_SPRINT_FAILED:
      return { ...state, sprintError: payload };
    case actions.UPDATE_TASK_MAIN_PAGE_FAILED:
      return { ...state, sprintError: payload };
    case actions.UPDATE_POINTS_IN_MAIN_PAGE_FAILED:
      return { ...state, sprintError: payload };
    default:
      return state;
  }
};
