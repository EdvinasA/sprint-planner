import * as actions from "./memberActionType";

export const getMember = (accessToken) => ({
  type: actions.GET_MEMBER,
  payload: accessToken
});

export const getMemberSuccess = (member) => ({
  type: actions.GET_MEMBER_SUCCESS,
  payload: member
});

export const getMemberFailed = (error) => ({
  type: actions.GET_MEMBER_FAILED,
  payload: error
});
