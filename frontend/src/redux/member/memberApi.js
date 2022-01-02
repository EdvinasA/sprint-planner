/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { getMethod } from "../../api/public";

export const getMemberByAccessToken = (accessToken) => getMethod("member/" + accessToken);
