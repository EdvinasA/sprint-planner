/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { getMethod, postMethod, putMethod } from "../../api/public";

export const getTeam = (id) => getMethod("member-team/" + id);

export const addNewMember = (member) => postMethod("member-team", member);

export const deleteMember = (id) => putMethod("member-team/delete/" + id);

export const updateMemberRole = (id, role) => putMethod("member-team/update-role/" + id + "/" + role);
