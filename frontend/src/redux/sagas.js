import { all, fork } from 'redux-saga/effects';
import { sagas as sprints } from "./sprints/sprintIndex";
import { sagas as manageTeam } from "./manageTeams/manageTeamIndex";
import { sagas as newSprint } from "./newSprint/newSprintIndex";
import { sagas as sprintList } from "./sprintList/sprintListIndex";

export default function* sagas() {
  yield all([
    fork(sprints),
    fork(manageTeam),
    fork(newSprint),
    fork(sprintList)
  ]);
}
