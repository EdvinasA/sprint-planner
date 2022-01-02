import * as actions from "./memberActionType";

const initialState = {
  member: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_MEMBER_SUCCESS:
      return { ...state, member: payload };
    default:
      return state;
  }
};
