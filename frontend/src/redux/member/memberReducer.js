import * as actions from "./memberActionType";

const initialState = {
  member: {},
  memberError: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_MEMBER_SUCCESS:
      return { ...state, member: payload };
    case actions.GET_MEMBER_FAILED:
      return { ...state, memberError: payload };
    default:
      return state;
  }
};
