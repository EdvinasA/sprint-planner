import produce from "immer";
import * as actions from "./manageTeamActionType";

function nextMemberId(todos) {
  const maxId = todos.reduce((maxId, users) => Math.max(users.id, maxId), -1);
  return maxId + 1;
}

const initialState = {
  memberTeam: {
    id: "",
    teamName: "",
    membersList: [

    ]
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_TEAM_SUCCESS:
      return { ...state, memberTeam: payload };
    case actions.CREATE_NEW_TEAM_SUCCESS:
      return { ...state, memberTeam: payload };
    case actions.ADD_NEW_MEMBER:
      return { ...state,
        memberTeam:
            { ...state.memberTeam,
              membersList: [
                ...state.memberTeam.membersList,
                {
                  id: nextMemberId(state.memberTeam.membersList),
                  fullName: payload.fullName,
                  role: payload.role,
                  isDeleted: false
                }
              ]
            }
      };
    case actions.DELETE_MEMBER_FROM_TEAM:
      return { ...state,
        memberTeam:
            { ...state.memberTeam,
              membersList: [
                ...state.memberTeam.membersList.filter(member => member.id !== payload)
              ]
            }
      };
    case actions.UPDATE_MEMBER_ROLE:
      return produce(state, draftState => {
        const index = state.memberTeam.membersList.findIndex(member => member.id === payload.id);
        draftState.memberTeam.membersList[index].role = payload.role;
      });
    default:
      return state;
  }
};
