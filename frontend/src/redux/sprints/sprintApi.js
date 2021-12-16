/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { deleteMethod, getMethod, postMethod, putMethod } from "../../api/public";

export const getSprint = (id) => getMethod("sprint/by-id/" + id);

export const createSprint = (sprint) => postMethod("sprint", sprint);

export const startSprint = (id) => putMethod("sprint/start/" + id);

export const updateAllocation = (allocation) => putMethod("allocation", allocation);

export const endSprint = (sprintId) => putMethod("sprint/" + sprintId);

export const deleteSprint = (id) => deleteMethod("sprint", id);
