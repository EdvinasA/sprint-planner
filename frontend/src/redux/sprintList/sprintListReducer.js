import * as actions from "./sprintListActionType";

const initialState = {
  sprintlist: [],
  activesprint: {},
  sprintListError: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_SPRINT_LIST_SUCCESS:
      const activeSprint = payload?.find(x => x.isActive === true);
      return { ...state, sprintlist: payload, activesprint: activeSprint };
    case actions.GET_SPRINT_LIST_FAILED:
      return { ...state, sprintListError: payload };
    default:
      return state;
  }
};
