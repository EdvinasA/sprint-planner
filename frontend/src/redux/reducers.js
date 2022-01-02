import { combineReducers } from "redux";
import { reducer as sprints } from "./sprints/sprintIndex";
import { reducer as manageTeam } from "./manageTeams/manageTeamIndex";
import { reducer as newSprint } from "./newSprint/newSprintIndex";
import { reducer as sprintList } from "./sprintList/sprintListIndex";
import { reducer as member } from "./member/memberIndex";
import loginAlertSlice from "./slices/loginAlertSlice/loginAlertSlice";

import settingsReducer from "./settingsState/settingsStateReducer";

const reducers = combineReducers({
  sprints,
  manageTeam,
  settingsReducer,
  newSprint,
  sprintList,
  member,
  loginAlertSlice
});

export default reducers;
