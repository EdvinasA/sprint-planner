import React from "react";
import HomePage from "../components/home-page/HomePage";
import ManageTeam from "../components/manage-team/ManageTeam";
import ErrorPage from "../components/error/ErrorPage";
import AddSprint from "../features/sprints/AddSprint";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

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
    path: "/login",
    component: Login,
    exact: true,
    showMenu: false
  },
  {
    path: "/register",
    component: Register,
    exact: true,
    showMenu: false
  },
  {
    component: () => <ErrorPage errorCode="404" />,
    showMenu: false
  },
];
