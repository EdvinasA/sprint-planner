import React from "react";
import HomePage from "../components/home-page/HomePage";
import ManageTeam from "../components/manage-team/ManageTeam";
import ErrorPage from "../components/error/ErrorPage";
import AddSprint from "../features/sprints/AddSprint";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
    showMenu: true
  },
  {
    path: "/manage-team",
    component: ManageTeam,
    exact: true,
    showMenu: true
  },
  {
    path: "/add-sprint",
    component: AddSprint,
    exact: true,
    showMenu: true
  },
  {
    component: () => <ErrorPage errorCode="404" />,
    showMenu: false
  },
];
