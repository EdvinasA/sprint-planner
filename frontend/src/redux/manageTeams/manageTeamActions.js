import * as actions from "./manageTeamActionType";

export const getTeam = (teamId) => ({
  type: actions.GET_TEAM,
  payload: teamId
});

export const getTeamSuccess = (memberTeam) => ({
  type: actions.GET_TEAM_SUCCESS,
  payload: memberTeam
});

export const addNewMember = (memberTeamId, member, roles) => ({
  type: actions.ADD_NEW_MEMBER,
  payload: {
    role: roles,
    fullName: member,
    memberTeamId,
    isDeleted: false,
    plans: null,
    creationDate: null
  }
});

export const updateMemberRole = (id, role) => (
  {
    type: actions.UPDATE_MEMBER_ROLE,
    payload:
            {
              id,
              role
            }
  });

export const deleteMemberFromMemberList = (id) => ({
  type: actions.DELETE_MEMBER_FROM_TEAM,
  payload: id
});

export const createNewTeam = (teamName) => ({
  type: actions.CREATE_NEW_TEAM,
  payload: teamName
});

export const createNewTeamSuccess = (team) => ({
  type: actions.CREATE_NEW_TEAM_SUCCESS,
  payload: team
});
