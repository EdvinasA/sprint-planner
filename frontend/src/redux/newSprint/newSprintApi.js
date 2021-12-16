/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { postMethod } from "../../api/public";

export const createSprint = (sprint) => postMethod("sprint", sprint);

export const createSprintPlan = (membersList) => postMethod("sprint/member-list", membersList);
